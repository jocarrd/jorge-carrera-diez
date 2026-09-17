---
id: "03"
module: 1
title: "Tu primer Bot"
description: "Crea un Bot con nombre, un trabajo y una descripción, y dale una primera tarea con resultado, fuentes, límites y un final claro."
level: beginner
minutes: 7
objectives:
  - "Crear un Bot con nombre, un trabajo y una descripción"
  - "Escribir una primera tarea que el Bot pueda terminar de verdad"
  - "Saber cuándo poner una regla en la descripción y cuándo en un mensaje"
updated: "2026-09-16"
---

## Una conversación vacía y una petición vaga

La primera vez que abres Grok Bot te encuentras una conversación vacía. Casi todo el mundo escribe lo mismo que escribiría en un chat, una petición corta y vaga. El Bot tiene que adivinar, y tú pasas los diez minutos siguientes corrigiéndolo.

Hay dos cosas que deciden lo útil que es un Bot desde el principio: lo claro que defines su trabajo y lo claro que describes la primera tarea. Las dos llevan pocos minutos y rinden durante mucho tiempo, porque el Bot conserva su papel y aprende de tus correcciones.

## Nombre, trabajo y descripción

### Un Bot se define con tres datos

Al crear un Bot le das:

- **Un nombre corto**, para encontrarlo y mencionarlo.
- **Un trabajo principal**, como "Rendimiento del producto" o "Gestor de gastos".
- **Una descripción** de cómo debe trabajar: sus fuentes, su formato y las reglas que debe cumplir siempre.

Piensa en la descripción como las indicaciones que le darías a una persona nueva el primer día. Se quedan en su mesa y las consulta antes de cada tarea.

Los Bots enfocados funcionan mejor que un Bot para todo. Un trabajo como **General Helper** (ayudante general) orienta menos al Bot y hace más difícil reutilizar lo que aprende. Crea un Bot aparte cuando el trabajo tenga otro objetivo, otras herramientas, otra forma de trabajar u otro calendario.

### Una buena primera tarea tiene cinco partes

Una buena petición responde a cinco preguntas:

1. **Resultado:** qué tiene que quedar terminado.
2. **Fuentes:** qué aplicaciones y webs importan, y qué archivos o conversaciones.
3. **Límites:** qué debe evitar el Bot o qué tiene que consultarte antes de hacer.
4. **Entregable:** qué te tiene que devolver.
5. **Punto de revisión:** cuándo debe parar y esperarte.

Si falta una, el Bot tiene que adivinarla. El punto de revisión es el que más se olvida, y es el que mantiene segura una primera tarea.

### Descripción o mensaje

Las dos cosas son instrucciones, pero duran distinto.

- **Descripción:** reglas que deben cumplirse en todas las tareas. "No envíes nunca mensajes externos sin aprobación."
- **Mensaje:** instrucciones para la tarea que tienes entre manos. "Redacta seguimientos para estas doce cuentas."

Si te ves repitiendo una preferencia en cada mensaje, pásala a la descripción.

> [!TIP]
> Sé explícito en la descripción. Indica la tipografía, los colores o "envíame siempre una captura de la diapositiva cuando termines". Cuanto más explícita sea, más constante será el Bot.

{{live 0:48:01 "Instrucciones explícitas en la descripción de un Bot"}}

## Crear el Bot y escribirle la primera tarea

**Crear el Bot**

1. Al final de la configuración, **Meet a future teammate** (conoce a un futuro compañero) te muestra Bots sugeridos. Elige uno o pulsa **Create your own** (crear el tuyo).
2. Más adelante puedes añadir Bots con **New** (nuevo) en la barra lateral, o con `Cmd/Ctrl+N`, y eligiendo **Create new agent** (crear agente nuevo). Grok Bot crea un Bot llamado **New Agent**.
3. Abre **Bot actions → Edit Profile** (acciones del Bot, editar perfil) y pon el nombre, el cargo, la descripción y el avatar.

**Darle una primera tarea**

1. Empieza por algo que no necesite iniciar sesión. Adjunta un documento que conozcas bien, con el botón de adjuntar o arrastrándolo a la caja de mensaje.
2. Envía una petición que cubra las cinco partes (mira el ejemplo más abajo).
3. Lee el resultado y pide correcciones en la misma conversación.
4. Si una corrección debe valer para el futuro, dilo de forma explícita: "Usa este formato en los próximos informes semanales".
5. Cuando eso funcione, prueba una tarea en una de tus herramientas reales, con un límite claro como "No modifiques ningún panel".

### Dicta y pídele que lo repita

Un contexto largo suele ser más rápido de decir que de escribir. La app móvil te deja dictar un mensaje. En el directo también se vio un botón de dictado en la app de escritorio, así que, si ahí no lo encuentras, dicta desde el móvil.

Dicta todo lo que tengas en la cabeza y termina con una petición como esta. En una demostración en directo, el equipo de xAI dictó una idea de negocio durante un par de minutos y cerró así:

```prompt
Repíteme con tus propias palabras lo que acabo de decir, para saber que me has entendido.
```

{{live 2:15:17 "Dictar contexto y pedir al Bot que lo repita"}}

Leer un resumen corto es más rápido que releer una transcripción larga, y detecta los malentendidos antes de que el Bot se ponga a trabajar. Lo mismo sirve antes de cualquier tarea larga. Añade al final "repítelo con tus palabras antes de ejecutar". Revisa el texto transcrito antes de enviarlo, porque el dictado puede entender mal los nombres.

## Piper, un Bot de rendimiento del producto

Este es un Bot bien definido:

> - **Nombre:** Piper
> - **Trabajo:** Rendimiento del producto
> - **Descripción:** Investiga preguntas sobre el rendimiento del producto con nuestras herramientas de observabilidad. Conserva enlaces y capturas, separa las pruebas de las hipótesis y devuelve un resumen breve con el problema de mayor impacto primero. No cambies nunca la configuración de producción.

Las herramientas de observabilidad son los paneles que muestran cómo funciona un producto, y producción es el producto real que usan tus clientes. La descripción fija las fuentes, el formato y una regla que debe cumplirse siempre.

Una buena primera tarea de cinco minutos no necesita connector (lección 01) ni inicio de sesión. Adjunta un documento y envía:

```prompt
Resume este documento en cinco puntos. Enumera en una sección aparte cada fecha, decisión y pregunta abierta. Cita la página o la sección de cada elemento. No modifiques el archivo original.
```

Resultado: un resumen. Fuente: el adjunto. Límite: no tocar el archivo. Entregable: cinco puntos más una sección. El punto de revisión va implícito, porque el Bot devuelve el resumen y espera.

Compáralo con una demostración en directo. El equipo de xAI pidió a un Bot nuevo un formulario de Google con dos preguntas sobre café. El Bot lo creó, pero cuando el público escaneó el código QR vio "no access", porque el enlace del formulario no era público. La petición describía el resultado y no decía quién tenía que poder acceder al entregable.

{{live 1:06:25 "El enlace del formulario que no era público"}}

## Bots vagos y tareas sin final

- **Darle a un Bot un trabajo vago como "General Helper".** Recibe menos orientación y su contexto cuesta más reutilizarlo. *Qué hacer:* dale un trabajo concreto.
- **Enviar una petición de una línea.** El Bot adivina las fuentes, el formato y cuándo parar. *Qué hacer:* cubre las cinco partes de una buena tarea.
- **Escribir una regla permanente en un mensaje.** Solo vale para esa tarea. *Qué hacer:* pon en la descripción las reglas que deben cumplirse siempre.
- **Decir "no funciona" cuando un resultado está mal.** El Bot no sabe qué arreglar. *Qué hacer:* explica qué falla, qué esperabas y qué estaba bien.
- **Empezar con una tarea que cambia cosas.** Los errores llegan a herramientas reales. *Qué hacer:* empieza con tareas de solo lectura y borradores, como verás en la lección 04.

## Antes de crear el siguiente Bot

- Dale a cada Bot un nombre corto, un trabajo y una descripción.
- Una buena tarea cubre cinco partes, desde el resultado hasta el punto de revisión.
- Las reglas que deben cumplirse siempre van en la descripción; los detalles de la tarea, en el mensaje.
- Dicta el contexto largo y pide al Bot que lo repita antes de actuar.
- Empieza con una tarea que no necesite iniciar sesión y no cambie nada.

Más información en [Get started](https://docs.x.ai/grok-bot/get-started) y [Create and manage Bots](https://docs.x.ai/grok-bot/bots).
