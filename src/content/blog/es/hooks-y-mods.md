---
title: "Hooks y mods en Claude Code: en qué se diferencian y cuándo usar cada uno"
description: "Qué es un mod, en qué se diferencia de un hook, la misma regla escrita de las dos formas y cómo reparto el trabajo entre ambos en crux."
date: 2026-10-02
cover: /blog/hooks-y-mods/portada.webp
coverAlt: "Portada con el título «Hooks y mods en Claude Code» y dos columnas: el hook como programa aparte que responde y termina, y el mod como código dentro de Claude Code"
preview: /blog/hooks-y-mods/panel.webp
previewAlt: "Panel de tareas abiertas dibujado por un mod de crux encima del prompt de Claude Code, con cuatro tareas de ejemplo numeradas"
tags:
  - Agentes de IA
  - Hooks
  - Mods
  - Claude Code
  - Crux
---

> [!SUMMARY] En resumen
> - Un hook es un programa aparte: Claude Code lo arranca en un momento concreto, le pasa lo ocurrido y espera su respuesta.
> - Un mod es código que Claude Code carga dentro de sí mismo y que se queda activo toda la sesión.
> - Por estar dentro, un mod puede dibujar en la interfaz, recordar cosas entre eventos y cambiar casi cualquier cosa que pase por la sesión.

Hace unos días expliqué cómo uso los hooks para que mi agente
[siga mi metodología](/blog/controlar-agentes). El 1 de octubre Anthropic
presentó los mods de Claude Code, y su anuncio los resumía en una frase: los
hooks no pueden reescribir eventos, dibujar interfaz ni sustituir funciones, y
los mods sí.

Al leer la documentación vi que la primera parte de esa frase hay que matizarla.
Un hook ya puede cambiar los argumentos de un comando antes de que se ejecute, y
también el resultado de una herramienta antes de que lo lea el modelo. La
diferencia de verdad está en **dónde se ejecuta cada uno**, y de ahí sale todo
lo demás.

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

## La misma regla, escrita de las dos formas

Para comparar, la misma regla con cada herramienta: que el agente no pueda
ejecutar `git reset --hard`, que descarta los cambios sin commitear.

Con un hook, es un script que lee el JSON de la entrada estándar. Termina con
el código 2 para bloquear, y lo que escribe en la salida de error es el motivo
que leerá el modelo:

```bash
#!/usr/bin/env bash
cmd=$(jq -r '.tool_input.command')
if [[ $cmd == *"git reset --hard"* ]]; then
  echo "Borra los cambios sin commitear. Haz antes un commit." >&2
  exit 2
fi
```

Con un mod, es una función registrada para el evento `tool.call`:

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

Probé el mod en una sesión real con un repositorio que tenía un cambio sin
guardar. El comando no se ejecutó, el agente recibió el motivo y el cambio
siguió en el fichero. Para una regla así, los dos sirven igual. Las diferencias
aparecen cuando se necesita algo que un programa que solo vive mientras responde
no puede dar.

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
| Dónde se ejecuta | En un proceso aparte | Dentro de Claude Code |
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

En [crux](/blog/crux) los dos conviven, cada uno para una cosa.

**Las reglas siguen en hooks.** No trabajar en la rama principal, no lanzar
comandos destructivos y avisar al final de cada turno si queda documentación por
actualizar.
Son scripts de shell, y el mismo instalador los registra en Claude Code y en
Codex, así que la metodología se cumple con cualquiera de los dos agentes.

**El mod se encarga de lo que se ve.** Al abrir una sesión, crux recuerda las
tareas que dejé a medias en cualquier ordenador. Con un hook, eso llegaba como
un bloque de texto en la conversación, y en el móvil cada línea salía con un
prefijo delante. Ahora un mod lo dibuja como un panel encima del prompt, y
pulsando el número de una tarea la retomo.

![Panel de tareas abiertas encima del prompt de Claude Code, con cuatro tareas de ejemplo numeradas y el siguiente paso de cada una](/blog/hooks-y-mods/panel.webp "Las tareas son de ejemplo.")

El mismo mod pone en el pie del prompt la tarea de esa sesión y en qué punto
está. Cuando el mod está activo, el hook deja de escribir el texto pero el
modelo sigue recibiendo el contexto. En Codex, o donde el mod no dibuja, todo
sigue llegando como texto.

Si un día otro agente ofrece algo parecido a los mods, se añade a su adaptador
de crux y las reglas no cambian. Si estás montando algo parecido, puedes
escribirme en X: [@jorgecarrera_es](https://x.com/jorgecarrera_es).
