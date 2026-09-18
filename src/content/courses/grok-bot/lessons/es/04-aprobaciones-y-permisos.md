---
id: "04"
module: 1
title: "Aprobaciones y permisos"
description: "Decide qué pueden hacer tus Bots solos y qué debe esperarte: peticiones de aprobación, reglas de Auto Review, Allow once y confianza paso a paso."
level: beginner
minutes: 7
objectives:
  - "Revisar una petición de aprobación y elegir entre Allow once, Always allow y Deny"
  - "Escribir reglas de Auto Review concretas en lenguaje natural"
  - "Saber qué acciones deben esperar siempre tu aprobación"
updated: "2026-09-16"
---

## Un Bot puede enviar, borrar y publicar

Un chat no puede enviar un correo, borrar un archivo ni publicar una entrada. Un Bot sí, porque trabaja en tus herramientas reales. Por eso es útil, y por eso mismo tienes que decidir de antemano qué puede hacer por su cuenta.

Se trata de encontrar un equilibrio. Si un Bot pregunta por todo, te pasas el día pulsando botones. Si no pregunta por nada, un error puede llegar a un cliente. Grok Bot te da unos pocos controles para ajustar ese equilibrio, y puedes ir aflojándolos a medida que el Bot se gana tu confianza.

## El Bot pregunta antes de pulsar

### Una petición de aprobación es una pausa antes de actuar

Cuando una acción necesita tu aprobación, la conversación muestra la operación propuesta y sus datos. Tómalo como un compañero que te pregunta "¿lo envío?" antes de pulsar enviar. Revisas el destino, el alcance y los valores, y decides.

En el escritorio tienes tres opciones:

- **Allow once** (permitir una vez) deja que el Bot siga solo con esta acción.
- **Always allow** (permitir siempre) puede guardar una regla que se aplique a acciones parecidas en el futuro.
- **Deny** (denegar) bloquea la acción.

En iPhone y Android, las opciones equivalentes son **Approve once** (aprobar una vez) y **Deny**.

Ten presentes dos cosas. Una aprobación controla la acción propuesta y no deshace el trabajo que ya está hecho. Y si no sabes qué va a hacer una acción, no la apruebes. Pide al Bot que te la explique con palabras sencillas o que prepare antes un borrador.

> [!TIP]
> Para acciones que afectan a cuentas, dinero o recursos compartidos, elige **Allow once** antes que **Always allow**.

### Auto Review decide qué llega hasta ti

**Auto Review** (revisión automática) es una comprobación que hace un modelo de IA. Con ella activada, Grok Bot revisa cada acción antes de ejecutarla, tanto en las aplicaciones conectadas como en el ordenador. Tus propias reglas se añaden en **Settings → General → Auto-review** (ajustes, general, revisión automática) y se escriben en lenguaje natural. Hay dos tipos:

- Las reglas **Ask first** (preguntar primero) siempre detienen las acciones que coinciden y te las pasan.
- Las reglas **Allow automatically** (permitir automáticamente) dejan seguir las acciones que coinciden, salvo que la revisión automática encuentre otro motivo para parar.

Si una acción coincide con reglas de los dos tipos, gana **Ask first**.

Escribe reglas concretas, centradas en una acción y un alcance conocidos:

- Pregunta primero antes de enviar cualquier correo externo.
- Pregunta primero antes de cambiar un panel de producción.
- Permite automáticamente ejecutar `git status` en `/workspace/reports`. (`git status` es un comando que solo consulta qué archivos han cambiado en la carpeta de un proyecto).

Evita reglas amplias como "permite todo en el navegador". Las webs y las herramientas cambian con el tiempo. Un modelo de IA puede equivocarse al juzgar una acción, así que usa Auto Review además de los límites explícitos que pones en tus peticiones y descripciones.

Las reglas personales se guardan en el escritorio donde las creaste y se sincronizan con tu ordenador de Grok Bot. Si usas otra instalación de escritorio, revisa ahí también tus reglas. En el plan Enterprise, un administrador puede añadir reglas de equipo bloqueadas. Las tuyas se aplican por encima y solo pueden hacer el comportamiento más estricto.

Si un Bot te pide aprobación una y otra vez, lo normal es que necesite que lo orientes. Cuando apruebes algo que no te importa que repita, puedes decirle "a partir de ahora no me preguntes por esto". Para los límites de verdad, sigue escribiendo reglas y descripciones, que puedes leer y cambiar más adelante.

{{live 1:15:35 "Cómo encajan Auto Review y las reglas personales"}}

### Los límites también van en la petición y en la descripción

Las reglas son una capa. También puedes poner un límite en la propia tarea:

```prompt
Concilia los datos de la campaña y redacta un cambio de presupuesto recomendado. No modifiques la campaña ni escribas a la agencia. Pide mi aprobación después de mostrarme el valor actual, el valor propuesto y el impacto esperado.
```

Los límites que deben valer para todas las tareas van en la descripción del Bot (lección 03), por ejemplo "No envíes nunca mensajes externos sin aprobación".

### Qué debe pedir siempre aprobación

Mantén detrás de una aprobación, ya sea en la petición, en la descripción o con una regla **Ask first**:

- Enviar mensajes o invitaciones
- Publicar contenido
- Compras y transferencias de dinero
- Borrar o sobrescribir datos
- Cambiar permisos
- Cambios en producción (el producto real que usan tus clientes)
- Aceptar condiciones legales

Las contraseñas, los códigos de verificación y los CAPTCHAs funcionan de otra forma. No son aprobaciones. En esos casos tomas el control del ordenador y los escribes tú (lección 02).

### Tu propio portátil es un permiso aparte

El ordenador en la nube no es el que tienes delante. Si un Bot puede ejecutar comandos en tu Mac, Windows o Linux se decide en **Settings → General → Agent → Execution on Local Computer** (ejecución en el ordenador local). La opción por defecto es **Ask every time** (preguntar siempre). Elige **Never allowed** (nunca) salvo que un Bot tenga un motivo concreto para trabajar con tus archivos locales. Este ajuste no impide que el Bot use su ordenador en la nube.

## Poner límites y revisar aprobaciones

1. **Pon límites en la descripción.** Abre **Bot actions → Edit Profile** (acciones del Bot, editar perfil) y añade una línea como "No envíes nunca mensajes externos sin aprobación".
2. **Añade tus primeras reglas.** Abre **Settings → General → Auto-review** y añade una o dos reglas **Ask first** para las acciones que más te importan, como enviar correos.
3. **Revisa el acceso local.** En **Settings → General → Agent → Execution on Local Computer**, elige **Never allowed** salvo que lo necesites.
4. **Empieza con trabajo de solo lectura y borradores.** Encarga tareas de leer y resumir, y pide borradores en lugar de mensajes enviados.
5. **Revisa cada petición.** Cuando aparezca una aprobación, comprueba el destino y los valores. Usa **Allow once** mientras aprendes cómo se comporta el Bot.
6. **Amplía la confianza poco a poco.** Cuando una acción haya salido bien muchas veces y sea de bajo riesgo, añade una regla **Allow automatically** concreta para ella. Deja la lista anterior detrás de **Ask first**.

## Una regla escrita en los ajustes

En una demostración en directo, el equipo de xAI abrió los ajustes y escribió una regla en lenguaje natural: no respondas correos por mí sin preguntarme antes. También dejó que el Bot creara diapositivas sin preguntar.

{{live 0:47:00 "Escribir reglas de aprobación en lenguaje natural"}}

Más tarde pidió a Email Ethan (el Bot de correo de la lección 01) que redactara un correo. Cuando Ethan intentó responder, la conversación mostró que la acción estaba bloqueada por su regla personal de Auto Review. Eligió **Allow once**, y Ethan le enseñó el borrador para revisarlo antes de que saliera nada.

{{live 0:59:16 "Una regla personal detiene un correo"}}

Puedes reproducirlo con una regla **Ask first** para el envío de correos y esta tarea:

```prompt
Redacta una respuesta al último correo de nuestro proveedor confirmando la entrega del jueves. Enséñame el borrador y espera. No envíes nada hasta que lo apruebe.
```

## Aprobar sin mirar

- **Aprobar sin leer el destino.** El Bot actúa sobre la cuenta o el destinatario equivocados. _Qué hacer:_ revisa destino, alcance y valores, y pide una explicación sencilla si dudas.
- **Escribir reglas amplias como "permite todo en el navegador".** Las acciones de riesgo pasan sin pararse. _Qué hacer:_ escribe reglas concretas para una acción y un alcance.
- **Elegir Always allow a la primera.** Una aprobación puntual se vuelve permanente. _Qué hacer:_ usa **Allow once** hasta que conozcas bien el patrón.
- **Esperar que una aprobación deshaga lo ya hecho.** La aprobación solo controla la acción propuesta. _Qué hacer:_ deja los pasos irreversibles detrás de **Ask first**.
- **Permitir siempre la ejecución local.** Un Bot puede ejecutar comandos en tu propia máquina sin preguntar. _Qué hacer:_ quédate con **Never allowed** o **Ask every time**.

## Allow once mientras aprendes

- Una petición de aprobación muestra la acción propuesta y sus datos. Revísala antes de aprobar.
- Usa **Allow once** mientras aprendes y reserva **Always allow** para acciones conocidas y de bajo riesgo.
- Añade reglas concretas **Ask first** y **Allow automatically** en **Settings → General → Auto-review**. Gana **Ask first**.
- Enviar, publicar, comprar, borrar, cambiar permisos, tocar producción y aceptar condiciones legales deben esperarte.
- Empieza con tareas de solo lectura y borradores, y amplía la confianza regla a regla.

Más información en [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy).
