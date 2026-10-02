---
title: "Hooks y mods en Claude Code: en qué se diferencian y cuándo usar cada uno"
description: "Qué es un mod, en qué se diferencia de un hook, la misma regla escrita de las dos formas y cómo reparto el trabajo entre ambos en crux."
date: 2026-10-02
cover: /blog/hooks-y-mods/portada.webp
coverAlt: "Portada con el título «Hooks y mods en Claude Code» y dos columnas: el hook como programa aparte que responde y termina, y el mod como código dentro de Claude Code"
preview: /blog/hooks-y-mods/panel.webp
previewAlt: "Panel de tareas abiertas dibujado por un mod de crux encima del prompt de Claude Code, con cuatro tareas de ejemplo numeradas"
xUrl: https://x.com/jorgecarrera_es/status/2105969638324555960
tags:
  - Agentes de IA
  - Hooks
  - Mods
  - Claude Code
  - Crux
---

> [!SUMMARY] En resumen
> - Un hook es externo al arnés de Claude Code: un programa aparte que Claude Code arranca en un momento concreto y que termina al responder.
> - Un mod vive dentro del arnés: código que Claude Code carga en su propio proceso y que se queda activo toda la sesión.
> - Por estar dentro, un mod puede dibujar en la interfaz, recordar cosas entre eventos y cambiar casi cualquier cosa que pase por la sesión.

Hace unos días expliqué cómo uso los hooks para que mi agente
[siga mi metodología](/blog/controlar-agentes). El 1 de octubre Anthropic
presentó los mods de Claude Code, y su anuncio los resumía en una frase: los
hooks no pueden reescribir eventos, dibujar interfaz ni sustituir funciones, y
los mods sí.

Al leer la documentación vi que la primera parte de esa frase hay que matizarla.
Un hook ya puede cambiar los argumentos de un comando antes de que se ejecute, y
también el resultado de una herramienta antes de que lo lea el modelo. La
diferencia de verdad está en **dónde se ejecuta cada uno** respecto al arnés, el
programa que rodea al modelo y ejecuta lo que este pide. Un hook es **externo
al arnés** de Claude Code y un mod **vive dentro** de él. De ahí sale todo lo
demás.

## Qué es un hook

Un hook es un programa independiente que configuras en `settings.json`. Puede
estar escrito en bash, en Python o en cualquier lenguaje. Cada vez que ocurre
el momento al que está enganchado, Claude Code hace siempre lo mismo:

1. Arranca el programa como un proceso nuevo.
2. Le pasa un JSON con lo ocurrido, por ejemplo el comando que el agente quiere
   ejecutar.
3. Espera a que termine y lee su respuesta.
4. El programa termina y no recuerda nada para la siguiente vez.

La respuesta tiene que estar dentro de un menú que define Claude Code: dejar
pasar, bloquear con un motivo o añadir contexto para el modelo. En algunos
momentos el menú es más amplio. Antes de ejecutar una herramienta
(`PreToolUse`), el hook puede devolver otros argumentos; después de ejecutarla
(`PostToolUse`), puede sustituir el resultado. Con eso se puede, por ejemplo,
tapar una clave que aparece en la salida de un comando antes de que llegue al
modelo.

Como el contrato es solo un JSON de entrada y otro de salida, otros agentes han
copiado el formato. Codex lee los hooks de `~/.codex/hooks.json` con la misma
estructura que Claude Code.

## Qué es un mod

Un mod es un conjunto de funciones en JavaScript o TypeScript que viajan dentro
de un plugin. Claude Code las carga **en su propio proceso** al abrir la sesión
y las mantiene en memoria hasta cerrarla.

Cada función se registra para un evento: una llamada a una herramienta, un
prompt enviado, una petición al modelo o una parte de la interfaz que se va a
dibujar. Cuando el evento ocurre, Claude Code llama a la función con tres
argumentos: la API de mods (`$`), el evento (`e`) y `next`, que pasa el evento
a la siguiente función de la cadena. Al final de la cadena está el
comportamiento normal de Claude Code. Es el mismo patrón que el *middleware* de
un servidor web como Express.

Con esos tres argumentos, la función puede hacer tres cosas con el evento:

- **Observarlo** y dejarlo seguir sin cambios, llamando a `next(e)`.
- **Reescribirlo**, llamando a `next` con una copia modificada. Así se cambia el
  texto de un prompt o los argumentos de un comando.
- **Responderlo ella misma** sin llamar a `next`. Así se bloquea un comando, y
  ni el resto de mods ni Claude Code llegan a verlo.

## La diferencia en un caso real

En [crux](/blog/crux), al abrir una sesión, el agente me recuerda las tareas que
dejé a medias en cualquier ordenador. Lo he montado de las dos formas, y es
el caso donde mejor se ve la diferencia.

**Con un hook.** Al empezar la sesión, Claude Code arranca un script de crux. El
script consulta las tareas abiertas, devuelve la lista como texto y termina. Ese
texto aparece en la conversación y ahí se queda. Si quiero retomar una tarea,
tengo que escribir su nombre, y en el móvil cada línea salía con un prefijo
delante. El hook no puede hacer más: cuando el texto aparece en pantalla, el
programa que lo generó ya no existe. No sabe si lo he leído ni puede reaccionar
a lo que pulse.

**Con un mod.** El mod se carga con la sesión y se queda dentro del arnés. Por
eso puede hacer lo que el hook no podía:

- Dibuja las tareas como un panel encima del prompt, cada una con un número.
- Si pulso el número de una tarea, envía por mí «Retomemos la tarea…» y el
  agente se pone con ella.
- Recuerda que el panel ya ha cumplido: en cuanto escribo el primer mensaje, lo
  oculta.

![Panel de tareas abiertas encima del prompt de Claude Code, con cuatro tareas de ejemplo numeradas y el siguiente paso de cada una](/blog/hooks-y-mods/panel.webp "Las tareas son de ejemplo.")

Los datos son los mismos en los dos casos, porque el mod llama al mismo programa
de crux que usaba el hook. Lo que cambia es lo que se puede hacer con ellos
desde dentro del arnés.

## Para bloquear un comando, los dos sirven

Donde no hay diferencia práctica es en las reglas que solo dicen sí o no. Por
ejemplo, impedir que el agente ejecute `git reset --hard`, que descarta todos
los cambios que no se han guardado en un commit.

**Con un hook.** Claude Code arranca este script cada vez que el agente va a
usar `Bash` y le pasa el comando en un JSON. Si es un `git reset --hard`, el
script termina con el código 2, que significa «bloquéalo», y el mensaje que
escribe es lo que leerá el agente:

```bash
#!/usr/bin/env bash
cmd=$(jq -r '.tool_input.command')
if [[ $cmd == *"git reset --hard"* ]]; then
  echo "Borra los cambios sin commitear. Haz antes un commit." >&2
  exit 2
fi
```

**Con un mod.** La regla es una función que recibe la llamada a `Bash` como un
evento. Si es un `git reset --hard`, responde ella misma con el motivo y el
comando no llega a ejecutarse. Si es cualquier otro, llama a `next(e)` y todo
sigue igual:

```js
export function register(on) {
  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    if (e.command.includes('git reset --hard')) {
      return { deny: 'Borra los cambios sin commitear. Haz antes un commit.' }
    }
    return next(e)
  })
}
```

Probé el mod en una sesión real. Le pedí al agente que lanzara el comando en un
repositorio con un cambio sin guardar. El comando no se ejecutó, el agente
recibió el motivo y el cambio siguió en el fichero. Con el hook el resultado es
el mismo.

## Qué puede hacer un mod que un hook no puede

- **Dibujar en la interfaz.** Un panel junto a la conversación, una banda
  encima del prompt con botones, o cambios en lo que Claude Code ya dibuja, como
  el indicador de que está pensando. La función `/diff` de Claude Code es un mod.
- **Recordar entre eventos.** Las funciones de un mod comparten las variables de
  su fichero. Una puede contar las herramientas que usa el agente y otra enseñar
  ese número en pantalla.
- **Esperar una decisión.** Puede retener un comando peligroso, preguntarte si
  lo ejecuta y seguir según lo que contestes.
- **Intervenir en cualquier evento.** Puede cambiar el texto de un prompt,
  cambiar el prompt de sistema o mandar una petición concreta a otro
  modelo.
- **Añadir comandos propios.** Un `/comando` que ejecuta tu código al momento,
  sin pasar por el modelo y aunque el agente esté trabajando.

Los dibujos solo se ven en la terminal y en la app de escritorio de Claude Code.
La extensión de VS Code y `claude -p` ejecutan las funciones del mod, pero no
muestran lo que dibuja.

| | Hook | Mod |
| --- | --- | --- |
| Dónde se ejecuta | Fuera del arnés, en un proceso aparte | Dentro del arnés de Claude Code |
| Cuánto dura | Lo que tarda en responder | Toda la sesión |
| Qué puede cambiar | Si una acción sigue, los argumentos y el resultado de una herramienta, y el contexto del modelo | Llamadas a herramientas, prompts, peticiones al modelo, comandos e interfaz |
| Lenguaje | Cualquiera | JavaScript o TypeScript |
| Agentes | Claude Code y Codex, que usa el mismo formato | Solo Claude Code |

## Antes de instalar un mod

Un mod se ejecuta con tus permisos y sin aislamiento. Puede leer y escribir
cualquier fichero de tu usuario, ve cada prompt y cada comando de la sesión, y
puede aprobar una llamada a una herramienta sin preguntarte.

Hay un detalle que afecta a quien ya tiene reglas en hooks. En una llamada a una
herramienta, los mods se ejecutan **antes** que los hooks `PreToolUse` de tu
`settings.json`. Un mod que responde él mismo al evento impide que esos hooks
lleguen a ejecutarse, y otro evento, `tool.check`, puede aprobar una llamada que
uno de tus hooks había bloqueado. Las reglas solo tienen la última palabra si
vienen de la configuración gestionada de una organización.

Por eso conviene revisar un mod antes de instalarlo. `claude plugin validate`
lista los eventos que maneja y lo que pide hacer sin llegar a ejecutarlo.

## Cómo los uso en crux

En crux los dos conviven, cada uno para una cosa.

**Las reglas siguen en hooks.** No trabajar en la rama principal, no lanzar
comandos destructivos y avisar al final de cada turno si queda documentación por
actualizar. Son scripts de shell, y el mismo instalador los registra en Claude
Code y en Codex, así que la metodología se cumple con cualquiera de los dos
agentes.

**El mod se encarga de lo que se ve**, como el panel de tareas. El hook del
recordatorio sigue instalado: al abrir la sesión, el mod se ejecuta antes que él
y le indica que no escriba el texto, porque ya lo dibuja el panel. En Codex no
hay mod, así que el hook sigue mostrando las tareas como texto.

## Conclusión

Los mods son, por ahora, una funcionalidad exclusiva de Claude Code. Codex y
el resto de arneses no los cargan, y eso hay que tenerlo en cuenta al diseñar un
framework o una metodología propia. Si una regla vive solo en un mod, deja de
cumplirse en cuanto trabajas con otro agente.

Por eso, en mi caso, los mods son una capa extra. Mejoran la experiencia cuando
trabajo en Claude Code, pero nada depende de ellos ni bloquea a otros arneses.
Las reglas siguen en hooks, para que la metodología funcione igual con
cualquier agente.

Espero que os haya resultado útil. Dediqué un tiempo a entender bien en qué se
diferencian un hook y un mod, y me pareció interesante compartirlo con quien
esté trabajando con agentes. Si estás montando algo parecido, puedes
escribirme en X: [@jorgecarrera_es](https://x.com/jorgecarrera_es).
