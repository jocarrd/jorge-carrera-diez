---
title: "Cómo conseguir que un agente de IA siga tu metodología"
description: "Por qué un agente se salta las reglas que le escribes, qué pasa por dentro entre lo que pide y lo que ejecuta, y cómo bloquearlo cuando se salta el protocolo."
date: 2026-09-29
cover: /blog/agentes/portada.webp
coverAlt: "Portada con el título «Cómo conseguir que un agente de IA siga tu metodología» y el bucle del agente, con el paso PreToolUse resaltado entre la petición del modelo y la ejecución"
preview: /blog/agentes/guardia.webp
previewAlt: "Tabla con dos comandos que pidió el agente, pkill y gh pr create, bloqueados por un hook PreToolUse con la alternativa que propone"
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

Durante un tiempo no me di cuenta de que el agente no seguía siempre la misma
metodología. Unas veces hacía todo el proceso y otras se saltaba pasos. Un
agente es probabilístico, no determinista, y yo lo estaba tratando como si
siguiera un guion.

Todo lo que crux le decía al agente le llegaba por skills y por documentación,
y eso acaba en su contexto. Si quedaba enterrado bajo el resto de la
conversación, el agente no lo tenía en cuenta. Me di cuenta al mirar una skill
que describía el ciclo de una tarea: en 31 sesiones de trabajo, el agente la
había abierto **cero veces**. Nada controlaba su ciclo de vida.

Empecé a investigar y vi que los agentes tienen hooks, puntos de su ciclo de
vida en los que puedes meter tu propio código. Ahí estaba la solución. Para
entender por qué funciona, primero hay que ver qué es un agente por dentro.

## Cómo funciona un agente

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

## Por qué no sigue las reglas escritas

Las reglas de un proyecto suelen vivir en un fichero de instrucciones
(`AGENTS.md`, `CLAUDE.md`) o en skills. Todo eso acaba en el mismo sitio, el
contexto que el arnés le manda al modelo en el paso 1.

Y en el contexto compite con todo lo demás: tu mensaje, el código que ha leído,
los errores de la última ejecución. El modelo pesa todo eso y decide. Casi
siempre decide bien, pero es una decisión probabilística. Una regla escrita
**influye** en lo que hace el agente, pero no lo **obliga**.

> Cuando el agente va con prisa por terminar lo que le has pedido, una regla
> escrita a doce mensajes de distancia pierde.

## Qué es un hook

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

## Ejemplo: bloquear un push forzado

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

> [!NOTE] Cómo se escribe uno
> En el próximo artículo, «Tu primer hook, paso a paso», monto este mismo hook
> desde cero: dónde se configura y cómo lo encuentra Claude Code, el script en
> TypeScript línea a línea y cómo probarlo sin el agente.

## Cómo utilizo los hooks en crux

En crux utilizo dos tipos de hooks: los que añaden contexto y los que bloquean
comandos.

Los primeros le dan al agente información en el momento en que la necesita.
Cuando escribo un mensaje y estoy en la rama principal, un hook
`UserPromptSubmit` le indica que antes debe abrir un espacio de trabajo. Cuando
retomo una tarea, el mismo evento le pasa lo que ya está hecho y lo que queda
pendiente. Al terminar cada turno, un hook `Stop` comprueba si ha modificado
código sin actualizar la documentación y, en ese caso, se lo advierte. Son
avisos: si el agente los ignora, el error es fácil de corregir.

Los segundos usan `PreToolUse`, como en el ejemplo del push forzado. Los
reservo para acciones que no se pueden deshacer o que obligan a repetir mucho
trabajo: `git reset --hard`, `git push --force`, terminar procesos por nombre o
abrir una PR sin haber pasado las comprobaciones. No bloqueo nada más, porque
cada bloqueo añade fricción y un sistema demasiado restrictivo acaba
desactivándose.

Un ejemplo de este segundo tipo: en crux, las PR se abren con
`crux workspace finish`, que antes comprueba que han pasado los tests y el
build. El agente podía saltarse esa comprobación subiendo la rama y abriendo la
PR directamente con `gh pr create`. Para evitarlo, un hook bloquea ese comando.

![Dos comandos bloqueados por un hook PreToolUse: pkill -f vite y gh pr create --fill](/blog/agentes/guardia.webp)

Los mensajes de la tabla son reales, de la sesión en la que instalé estos
hooks: al probarlos, uno de ellos bloqueó un `pkill`. Además de rechazar el comando, el mensaje le indica
al agente qué alternativa usar. Sin esa indicación, el agente tiende a probar
otras formas de hacer lo mismo hasta dar con una que no esté bloqueada.

Durante meses intenté que el agente siguiera el proceso describiéndolo cada vez
mejor en la documentación. El cambio llegó al controlar su ciclo de vida con
hooks. El sistema completo está explicado en el
[artículo sobre crux](/blog/crux). Si estás montando algo parecido, puedes
escribirme en X: [@jorgecarrera_es](https://x.com/jorgecarrera_es).
