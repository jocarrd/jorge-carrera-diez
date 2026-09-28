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
- **`PreToolUse`**, justo antes de ejecutar una herramienta. Es el único que
  **puede negarse**.
- **`PostToolUse`**, después de ejecutarla. Ve el resultado y puede reaccionar,
  por ejemplo pasando el formateador tras cada edición.
- **`Stop`**, cuando el agente va a darte el turno. Puede revisar lo que ha hecho
  antes de soltarte.

Un hook `PreToolUse` recibe un JSON con la petición exacta del modelo:

```json
{
  "tool_name": "Bash",
  "tool_input": { "command": "git reset --hard HEAD~1" },
  "cwd": "/home/jorge/Proyectos/web"
}
```

El script mira lo que necesite y contesta con su código de salida. Si sale con
0, la herramienta se ejecuta. Si sale con 2, **no se ejecuta**, y lo que el
script haya escrito en la salida de error le llega al agente como explicación.
El agente lo lee y cambia de plan.

**El hook no sabe nada por sí mismo.** Si necesita saber en qué rama estás o si una
carpeta es importante, lo consulta: pregunta a git, lee un fichero o abre un
registro. Es un script normal.

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
