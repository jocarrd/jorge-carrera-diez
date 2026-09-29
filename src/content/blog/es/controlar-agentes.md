---
title: "Cómo conseguir que un agente de IA siga tu metodología"
description: "Por qué un agente se salta las reglas que le escribes, qué pasa por dentro entre lo que pide y lo que ejecuta, y cómo bloquearlo cuando se salta el protocolo."
date: 2026-09-28
cover: /blog/agentes/portada.webp
coverAlt: "Portada con el título «Cómo conseguir que un agente de IA siga tu metodología» y el bucle del agente, con el paso PreToolUse resaltado entre la petición del modelo y la ejecución"
preview: /blog/agentes/guardia.webp
previewAlt: "Terminal: un hook se niega a ejecutar un pkill y un gh pr create que había pedido el agente"
tags:
  - Agentes de IA
  - Hooks
  - Crux
---

> [!SUMMARY] En resumen
> - El modelo nunca ejecuta nada: pide herramientas, y quien las ejecuta es el programa que lo rodea.
> - Entre lo que pide y lo que pasa hay momentos en los que puedes meter tu propio código. Se llaman hooks.
> - Las instrucciones escritas influyen en el agente. Un hook decide por él.

Hace unos días conté cómo organizo el trabajo con agentes en [crux](/blog/crux).
Después de publicarlo, varias personas me preguntaron lo mismo con otras
palabras: ¿cómo consigues que el agente siga el proceso?

La respuesta corta es que escribirlo no basta. Lo aprendí midiendo.

Tenía una skill que describía el ciclo de una tarea, bien escrita, instalada y
con su descripción. En 31 sesiones de trabajo, el agente la abrió **cero veces**.

La regla de escribir los commits en inglés estaba en la documentación desde el
primer día. Cuando fui a mirar, **los 27 mensajes** del historial estaban en
castellano.

El agente no lo hacía por rebeldía. Para entender por qué pasa, y cómo se
arregla, hay que ver qué es un agente por dentro.

## El modelo no hace nada

Un modelo de lenguaje recibe texto y devuelve texto. No puede leer un fichero de
tu disco, ni ejecutar un comando, ni hacer un commit.

Lo que llamamos agente es un programa alrededor del modelo que sí puede hacer
todo eso. En inglés se le llama *harness*, arnés. Claude Code es un arnés, y
Codex y Cursor también.

El arnés y el modelo trabajan en un bucle:

1. El arnés le manda al modelo tu mensaje, todo el historial de la conversación
   y la lista de herramientas que tiene disponibles.
2. El modelo contesta de una de dos formas: con texto para ti, o con una
   petición del tipo «quiero usar la herramienta `Bash` con el comando
   `npm test`».
3. Si es una petición, el arnés la ejecuta y guarda el resultado.
4. El resultado vuelve al modelo, y el bucle se repite hasta que el modelo
   responde sin pedir nada más.

Lo importante está en el paso 3. **El modelo solo pide.** Cada comando que ves
ejecutarse, cada fichero que se lee o se edita, es una petición que el arnés
decide cumplir.

> [!NOTE] Cómo sabe el modelo qué herramientas tiene
> El arnés se las describe en cada petición: un nombre, una descripción de
> cuándo usarla y los parámetros que acepta. El modelo elige herramienta por
> esa descripción, así que una descripción mala hace que no se use o que se use
> mal. Como ocupan contexto, los arneses cargan algunas bajo demanda: el modelo
> solo ve su nombre hasta que la necesita. Las skills funcionan igual: el agente
> ve una línea de cada una y abre el procedimiento completo cuando toca.

## Por qué se salta lo que le escribes

Las reglas de un proyecto suelen vivir en un fichero de instrucciones
(`AGENTS.md`, `CLAUDE.md`) o en skills. Todo eso acaba en el mismo sitio, el
contexto que el arnés le manda al modelo en el paso 1.

Y en el contexto compite con todo lo demás: tu mensaje, el código que ha leído,
los errores de la última ejecución. El modelo pesa todo eso y decide. Casi
siempre decide bien, pero es una decisión probabilística. Una regla escrita
**influye** en lo que hace el agente, pero no lo **obliga**.

> Cuando el agente va con prisa por terminar lo que le has pedido, una regla
> escrita a doce mensajes de distancia pierde.

## Los hooks: código en las costuras del bucle

El bucle tiene momentos en los que el control lo tiene el arnés y no el modelo.
Los arneses más usados te dejan engancharte ahí con un script tuyo, y a eso se
le llama *hook*.

En Claude Code los momentos principales son estos:

- **`SessionStart`**, al abrir una sesión. Sirve para añadir contexto antes de
  empezar.
- **`UserPromptSubmit`**, cada vez que escribes un mensaje. Tu script puede mirar
  el estado del proyecto y añadir un recordatorio.
- **`PreToolUse`**, justo antes de ejecutar una herramienta. Es el que
  **puede impedir que se ejecute**.
- **`PostToolUse`**, después de ejecutarla. Ve el resultado y puede reaccionar,
  por ejemplo pasando el formateador tras cada edición.
- **`Stop`**, cuando el agente va a darte el turno. Puede revisar lo que ha hecho
  antes de soltarte.

## Un hook por dentro, paso a paso

Para verlo con un caso concreto: quiero que el agente no pueda hacer nunca
`git push --force`, que sobrescribe la rama remota y puede borrar el trabajo de
otra persona.

Esto es lo que pasa, en orden, cuando el agente lo intenta:

1. Le pido que suba los cambios.
2. El modelo contesta con una petición: «quiero usar `Bash` con el comando
   `git push -f`».
3. Claude Code **todavía no lo ejecuta**. Primero mira su configuración y ve
   que hay un hook para ese momento (`PreToolUse`) y esa herramienta (`Bash`).
4. Arranca mi script como un programa aparte, igual que si yo lo lanzara en la
   terminal, y le pasa la petición.
5. Mi script la lee, ve que es un push forzado, escribe el motivo y termina
   diciendo «no».
6. Claude Code no ejecuta el push. En su lugar, le devuelve al modelo el motivo
   que escribió mi script, como si fuera el resultado del comando.
7. El modelo lo lee, ve que le propone `--force-with-lease` y lo intenta así.
   Esta vez el script dice «sí» y el comando se ejecuta.

Los pasos 4 y 5 dependen de dos cosas que conviene entender antes de ver
código.

**Cómo le llega la petición al script.** Todo programa tiene una *entrada
estándar*: el canal por el que recibe lo que escribes con el teclado o lo que
otro programa le manda por una tubería (`|`). Claude Code usa ese canal para
mandarle al script un texto en formato JSON con la petición:

```json
{
  "session_id": "a66f9565-…",
  "cwd": "/home/jorge/Proyectos/web",
  "hook_event_name": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": {
    "command": "git push -f origin prueba",
    "description": "Push forzado a prueba"
  }
}
```

Llega algo más largo, pero estos son los campos que importan. `tool_name` es la
herramienta que el modelo quiere usar, `tool_input` lo que quiere hacer con ella
y `cwd` la carpeta en la que está trabajando.

**Cómo contesta el script.** Todo programa, al terminar, devuelve un número: su
*código de salida*. Por convenio, 0 significa que todo fue bien. Claude Code
añade un acuerdo propio: **si el script termina con 2, la herramienta no se
ejecuta.** Y lo que el script haya escrito por su *salida de error*, el canal
que usan los programas para los avisos, es lo que el modelo recibe como
explicación.

Con eso, el hook se monta en dos pasos.

### Primero: dónde vive cada cosa

Un hook son dos ficheros dentro de tu proyecto:

```texto
mi-proyecto/
├── .claude/
│   ├── settings.json
│   └── hooks/
│       └── no-force.ts
└── src/
```

`settings.json` es la configuración de Claude Code para ese proyecto, y
`no-force.ts` es el script. La carpeta `hooks/` no es obligatoria; es solo un
sitio ordenado donde guardarlo.

**Claude Code no sabe nada del script.** Lo único que conoce es
`settings.json`, porque lo busca siempre en el mismo sitio. Al abrir una sesión
lee tres ficheros y junta lo que hay en ellos:

- `~/.claude/settings.json`, en tu carpeta de usuario. Vale para todos tus
  proyectos.
- `.claude/settings.json`, dentro del proyecto. Se sube a git, así que lo
  comparte todo el equipo.
- `.claude/settings.local.json`, también dentro del proyecto, pero solo para
  ti: no se sube.

Como los lee al arrancar, si cambias un hook con la sesión abierta, lo seguro es
abrir una sesión nueva.

Dentro de `settings.json`, el hook se declara así:

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "node .claude/hooks/no-force.ts"
      }]
    }]
  }
}
```

Se lee de fuera hacia dentro:

- `"PreToolUse"` es el momento del bucle: justo antes de ejecutar una
  herramienta.
- `"matcher": "Bash"` filtra la herramienta. Solo se lanza cuando el modelo pide
  `Bash`. Admite varias a la vez, por ejemplo `"Bash|Edit|Write"`.
- `"type": "command"` dice que el hook es un comando que hay que ejecutar.
- `"command"` es ese comando, y aquí está la respuesta a cómo encuentra el
  script: **es una línea de terminal, tal cual.** Claude Code la ejecuta como
  si la escribieras tú, desde la carpeta raíz del proyecto.

Así que `node .claude/hooks/no-force.ts` significa lo mismo que en tu terminal:
«con Node, ejecuta el fichero que está en `.claude/hooks/no-force.ts`», con esa
ruta contada desde la raíz del proyecto. Por eso podría ser igual de bien
`python3 guardia.py` o la ruta completa a un script que tengas en otra carpeta.
Los hooks de crux, por ejemplo, viven fuera de los proyectos y se declaran con
su ruta completa, para que todos los proyectos usen el mismo.

Si prefieres que la ruta no dependa de nada, Claude Code le pasa al comando la
variable `CLAUDE_PROJECT_DIR` con la raíz del proyecto:
`node "$CLAUDE_PROJECT_DIR/.claude/hooks/no-force.ts"`.

### Después: el script, línea a línea

El fichero completo son tres piezas, una detrás de otra. Voy por partes.

**Pieza 1: leer la petición.**

```typescript
type HookInput = {
  tool_name: string;
  tool_input: { command?: string };
};

let raw = "";
for await (const chunk of process.stdin) {
  raw += chunk;
}
const input: HookInput = JSON.parse(raw);
```

- `type HookInput` no ejecuta nada. Describe para TypeScript la forma del JSON
  que va a llegar, solo con los campos que voy a usar. Así el editor me avisa si
  escribo mal un nombre.
- `let raw = ""` crea un texto vacío donde ir juntando lo que llega.
- `for await (const chunk of process.stdin)`: `process.stdin` es la entrada
  estándar, por donde Claude Code manda el JSON. Puede llegar partido en
  trozos, así que el bucle espera cada trozo (`await`) y lo añade a `raw`.
  Cuando Claude Code termina de mandar, el bucle acaba.
- `JSON.parse(raw)` convierte ese texto en un objeto, para poder escribir
  `input.tool_input.command` y obtener el comando.

**Pieza 2: decidir.**

```typescript
const cmd = input.tool_input.command ?? "";
const words = cmd.split(/\s+/);

const isPush =
  words.includes("git") &&
  words.includes("push");
const isForced =
  words.includes("--force") ||
  words.includes("-f");
```

- `input.tool_input.command ?? ""` saca el comando que el modelo quiere
  ejecutar. El `??` pone un texto vacío si no viene ninguno, para que lo
  siguiente no falle.
- `cmd.split(/\s+/)` lo corta por los espacios. `"git push -f origin prueba"`
  se convierte en la lista `["git", "push", "-f", "origin", "prueba"]`.
- `words.includes("push")` pregunta si esa palabra exacta está en la lista.
  `isPush` es verdadero si están `git` y `push`, e `isForced` si está `--force`
  o `-f`.

Comparar palabras enteras importa. Si buscara el texto «force» dentro del
comando, también bloquearía `--force-with-lease`, que es justo la alternativa
segura que le quiero proponer.

**Pieza 3: contestar.**

```typescript
if (isPush && isForced) {
  console.error("Parado: push forzado.");
  console.error("Usa git push --force-with-lease.");
  process.exit(2);
}

process.exit(0);
```

- Si es un push forzado, `console.error` escribe dos líneas en la salida de
  error. Ese texto es lo que Claude Code le pasa al modelo.
- `process.exit(2)` termina el script con el código 2: «no lo ejecutes».
- En cualquier otro caso se llega a `process.exit(0)`, y Claude Code ejecuta el
  comando con normalidad.

Esto es literalmente lo que recibió el modelo cuando lo probé con una sesión
real:

```texto
PreToolUse:Bash hook error: [node .claude/hooks/no-force.ts]:
Parado: push forzado.
Usa git push --force-with-lease.
```

Por eso el mensaje no se queda en «prohibido»: el modelo lo lee como si fuera
el resultado de su comando, y con él decide qué hacer después.

### Probarlo sin el agente

No hace falta esperar a que el agente intente un push. Puedo hacerme pasar por
Claude Code y mandarle al script el JSON yo mismo, con una tubería:

```bash
echo '{"tool_input":{"command":"git push -f"}}' \
  | node .claude/hooks/no-force.ts
echo "salida: $?"
```

`echo` escribe el JSON, la tubería `|` se lo pasa al script por su entrada
estándar, y `$?` muestra el código con el que terminó:

```texto
Parado: push forzado.
Usa git push --force-with-lease.
salida: 2
```

Si cambio `-f` por `--force-with-lease`, no imprime nada y la salida es 0.

### Los hooks que recuerdan

Funcionan con el mismo mecanismo, en otro momento del bucle. En
`UserPromptSubmit`, que salta cada vez que escribes un mensaje, lo que el
script imprime con `console.log` y termina con 0 se añade al contexto junto a
tu mensaje. Así un recordatorio llega en cada turno sin que tengas que
escribirlo.

**El hook no sabe nada por sí mismo.** Si necesita saber en qué rama estás o si
una carpeta es importante, lo consulta: pregunta a git, lee un fichero o abre
un registro. Es un script normal.

## Cómo lo aplico en crux

En crux hay hooks que recuerdan y hooks que bloquean. Para decidir de qué tipo
es cada uno me hago dos preguntas:

1. **¿El error tiene vuelta atrás?** Lo que borra trabajo o mete en la rama
   principal código sin comprobar se bloquea siempre.
2. **¿Cuánto le cuesta al agente equivocarse, darse cuenta y rehacerlo bien?**
   Si el fallo se descubre tarde y obliga a repetir media tarea, conviene
   pararlo en el momento en que ocurre. Si se corrige en un minuto, como la
   documentación que se le ha olvidado actualizar, basta con recordárselo.

Bloquearlo todo haría el sistema tan pesado que acabaría desactivándolo.

**Los que recuerdan.** Cuando empiezo a trabajar sobre la rama principal, un
hook `UserPromptSubmit` le recuerda al agente que abra primero un espacio de
trabajo aislado. Al retomar una tarea, otro le trae lo que se hizo y lo que
falta. Al terminar el turno, un hook `Stop` avisa si ha cambiado código sin
tocar la documentación.

**Los que bloquean.** Funcionan como una cadena:

1. Un *hook* de git impide subir nada a la rama principal. Todo entra por una
   propuesta de cambio.
2. La propuesta la abre el comando `crux workspace finish`, y ese comando se
   niega si no hay un **recibo** de la puerta de calidad.
3. El recibo lo escribe `crux ship run` al ejecutar de verdad cada comprobación.
   El agente no puede escribirlo a mano.

Así da igual que el agente se salte un paso al principio. Lo que haya hecho mal
no llega a la rama principal sin pasar por las comprobaciones.

Hace poco encontré un hueco en esa cadena. El *hook* de git solo protegía la
rama principal, así que **el agente podía subir una rama por su cuenta y abrir la
propuesta con `gh pr create`, sin recibo**. Lo cerré con un hook `PreToolUse`.
Junto a él puse otro que para los comandos que destruyen trabajo, como
`git reset --hard`, `git push --force` o matar procesos por nombre.

![El agente lo pide, el hook se niega](/blog/agentes/guardia.webp)

Esa captura es real. El `pkill` me lo paró a mí mientras probaba el hook, en la
misma sesión en la que lo instalé. Fíjate en que el mensaje no se queda en
«prohibido»: dice qué usar en su lugar. Un bloqueo que no dice cómo seguir deja
al agente dando vueltas.

## Lo que un hook no puede hacer

Conviene no confiar de más, así que estos son los límites:

- **Solo ve la petición.** Si el agente ejecuta `./desplegar` y ese script
  hace un `reset --hard` por dentro, el hook solo ve `./desplegar`.
- **Leer el texto de un comando se puede esquivar.** Una variable o un alias
  pueden colar lo que el patrón no reconoce. Un hook frena un descuido, pero
  no a quien está decidido a saltárselo.
- **Cada arnés tiene los suyos.** Los hooks de Claude Code no funcionan en
  Codex ni en Cursor, que tienen sistemas parecidos con otro formato. Los
  *hooks* de git, en cambio, funcionan con cualquier agente, y también con
  personas.

Por eso se ponen capas: los permisos del propio arnés, los hooks, los *hooks*
de git y, si el repositorio lo permite, la protección de ramas en el servidor,
que ningún agente puede saltarse desde tu máquina.

## Qué me llevo

Durante meses intenté que el agente siguiera el proceso escribiéndolo cada vez
mejor. Lo que funcionó fue dejar de pedirle que lo recordara y poner el control
en el sitio por el que pasa todo lo que hace.

> Una regla escrita es solo prosa en su contexto, y que la cumpla es cuestión de
> probabilidad. Un hook en su ciclo de vida se ejecuta siempre.

Si quieres ver el sistema completo en el que encajan estos hooks, está en el
[artículo sobre crux](/blog/crux). Y si estás montando algo parecido, me
encantará saber qué pones tú en cada lado. Estoy en X como
[@jorgecarrera_es](https://x.com/jorgecarrera_es).
