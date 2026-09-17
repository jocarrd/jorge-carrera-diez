---
id: "09"
module: 3
title: "Sesiones y credenciales"
description: "Cómo iniciar sesión en webs para tus Bots sin darles tus contraseñas, y qué deja expuesto una sesión en el ordenador compartido."
level: intermediate
minutes: 8
objectives:
  - "Tomar el control del ordenador para meter tú mismo una contraseña, un código de verificación o un CAPTCHA"
  - "Entender por qué una sesión iniciada para un Bot queda disponible para todos tus Bots"
  - "Distinguir una petición segura de secreto del chat normal y saber qué no se escribe nunca en un mensaje"
  - "Cerrar sesiones y quitar accesos cuando termina un proyecto"
updated: "2026-09-17"
---

## El trabajo detrás de una pantalla de login

Los connectors de la lección 08 cubren muchos servicios, pero buena parte de tu trabajo está detrás de una pantalla de inicio de sesión. Piensa en un panel de analítica, en el portal de un proveedor o en la administración de una herramienta interna. Tarde o temprano un Bot llega a una de esas páginas y se detiene.

Lo más rápido sería pegarle la contraseña en el chat. No lo hagas. Un mensaje del chat se queda en el historial de la conversación y el modelo lo lee.

Esta lección explica la forma segura de dejar a un Bot con la sesión iniciada, qué expone esa sesión y cómo retirarla después.

## El Bot usa tus accesos, no tiene los suyos

Un Bot no tiene identidad ni credenciales propias. Actúa en tu nombre, con los accesos que tú le das. Las credenciales las escribes tú, en el ordenador del Bot, y el Bot trabaja con la sesión que queda abierta.

Piensa en un ordenador de oficina compartido que desbloqueas por la mañana. Tus compañeros pueden usar el correo que dejaste abierto, pero nunca llegan a saber tu contraseña.

### Una sesión para todos los Bots

En la lección 02 viste que todos tus Bots comparten un mismo ordenador en la nube, con una pantalla para cada uno. El navegador también es compartido. Las cookies (los pequeños archivos con los que una web recuerda que has iniciado sesión) y las sesiones abiertas son comunes. También lo son las credenciales guardadas para las herramientas de línea de comandos, los programas que un Bot maneja escribiendo órdenes. Si inicias sesión para un Bot, los demás pueden usar esa sesión.

Eso ahorra tiempo, porque normalmente inicias sesión una vez y no una por Bot. También significa que repartir el trabajo entre varios Bots no mantiene privada una sesión. Si alguno de tus Bots no debe usar una cuenta, no inicies sesión en ella en el ordenador. Cuando un trabajo necesita su propio ordenador y sus propias credenciales, la documentación oficial indica que le des su propio usuario de Cursor.

### Tomar el control en el paso delicado

Cuando un Bot llega a un paso que solo debe completar una persona, te cede el ordenador. La documentación enumera estos casos:

- Una contraseña o una passkey (un acceso que usa tu móvil o tu huella en lugar de una contraseña)
- La verificación en dos pasos, el código extra que llega a tu móvil o a una app
- Un CAPTCHA, el acertijo para demostrar que eres una persona
- Un pago o una comprobación de identidad
- Una web que exige expresamente a una persona

Abres el ordenador, tomas el control, completas solo el paso bloqueado y devuelves el control. También puedes hacerlo desde las apps de iPhone y Android.

{{live 4:04:56 "Tomar el control del ordenador del Bot para escribir tú la contraseña"}}

> [!WARNING]
> Nunca escribas en el chat una contraseña, un código de un solo uso, una clave privada o una clave de API (el código secreto con el que un programa entra en un servicio). Toma el control del ordenador, o usa la petición segura de secreto cuando el Bot te la muestre. Si ya pegaste alguna, cámbiala.

### Peticiones seguras de secretos

Algunas conexiones compatibles piden un valor mediante una **petición segura de secreto**, un pequeño formulario que oculta lo que escribes. El valor va en ese formulario y nunca en el chat. Queda oculto, no aparece en el historial y el modelo nunca lo ve.

No sirve como gestor de contraseñas general. Úsala cuando el Bot te la muestre y toma el control del ordenador en los demás casos.

{{live 6:57:16 "Entrada segura: el Bot nunca ve la contraseña"}}

### Los connectors guardan sus tokens en otro sitio

Cuando inicias sesión en un plugin desde **Settings → Plugins**, su token (lección 08) se queda en los servidores de Cursor. Nunca se guarda en el ordenador, y el Bot usa el connector sin recibirlo. Es un motivo más para preferir un connector cuando exista.

### Gestores de contraseñas y cookies del navegador

La documentación oficial solo menciona un gestor de contraseñas en un caso. En los planes Enterprise, los administradores pueden instalar uno en los ordenadores del equipo con Team Setup, para que los miembros usen passkeys guardadas en el navegador del ordenador.

El equipo de xAI enseñó además en directo dos opciones que la documentación todavía no describe, así que comprueba tu app antes de contar con ellas. Una era una integración nueva con 1Password {{live 1:18:41 "Credenciales y 1Password"}}. La otra, importar tus cookies de Chrome o de otro navegador para que el Bot mantenga la sesión en muchas herramientas sin que tengas que tomar el control {{live 7:57:41 "Importar las cookies del navegador"}}.

### Tu propio portátil es otro permiso

Todo lo anterior ocurre en el ordenador en la nube. Dejar que un Bot ejecute comandos en el Mac o el Windows que tienes delante es un ajuste aparte, **Settings → General → Agent → Execution on Local Computer** (ejecución en el ordenador local). La opción por defecto es **Ask every time** (preguntar siempre). La documentación recomienda **Never allowed** (nunca) salvo que un Bot tenga un motivo concreto para tocar tus archivos locales. Además, la ejecución local abre ventanas en tu pantalla y gasta los recursos de tu máquina. Por eso el equipo de xAI prefiere que el Bot trabaje en su propio ordenador.

{{live 8:14:24 "Por qué el equipo evita la ejecución local"}}

## Iniciar sesión por el Bot sin darle la contraseña

1. En tu petición, avisa al Bot de que puede necesitarte: "Pídeme que inicie sesión si hace falta".
2. Cuando se detenga en una pantalla de inicio de sesión, abre **Agent Computer** (el ordenador del agente) desde la conversación.
3. Toma el control de la pantalla.
4. Escribe la contraseña o usa la passkey, mete el código de verificación o resuelve el CAPTCHA.
5. Espera a que cargue del todo la página con la sesión iniciada.
6. Devuelve el control y dile al Bot que siga desde la página actual.
7. Si el Bot te muestra una petición segura de secreto, escribe el valor ahí y en ningún otro sitio.

## Un panel de solo lectura con parada para el login

Esta petición sale de la guía de inicio oficial. Pide un trabajo de solo lectura y deja prevista la parada para iniciar sesión.

```prompt
Abre nuestro panel de analítica y compara la activación de usuarios nuevos de esta semana con las cuatro semanas anteriores. Localiza el paso con el mayor cambio y redacta un plan breve de investigación con enlaces a los gráficos correspondientes. No modifiques ningún panel. Pídeme que inicie sesión si hace falta.
```

El Bot abre el panel, se encuentra la pantalla de inicio de sesión y te pide que tomes el control. Abres **Agent Computer**, inicias sesión, apruebas la verificación en el móvil y esperas a que cargue el panel. Después escribes "Sesión iniciada, sigue" y el Bot continúa con la comparación.

La semana siguiente, otro Bot que prepara tu informe de los lunes abre el mismo panel sin pedirte nada, porque la sesión está en el navegador compartido. Algunas webs cierran las sesiones enseguida o vuelven a pedir verificación. En ese caso, el Bot debe pararse y avisarte. Déjalo escrito en su descripción:

```prompt
Si una web te pide volver a iniciar sesión o te muestra una comprobación de verificación, detente y pídeme que tome el control. No intentes nunca saltarte la comprobación.
```

> [!NOTE]
> El segundo día del directo se anunció una integración de Grok Bot con 1Password. No aparece en la documentación oficial que usa este curso, descargada el 16 de septiembre. Si ya la tienes en tu app, úsala para que los secretos no pasen por el chat.

{{live d2 7:03:35 "La integración con 1Password, anunciada en directo"}}

## Secretos pegados en el chat

- **Pegar una contraseña o un código de un solo uso en el chat.** El secreto queda en el historial y le llega al modelo. *Qué hacer:* toma el control o usa la petición segura de secreto, y cambia la contraseña si ya ha ocurrido.
- **Repartir el trabajo entre varios Bots para que una sesión sea privada.** Todos los Bots de tu cuenta pueden usar todas las sesiones del ordenador. *Qué hacer:* no abras esa sesión en el ordenador, o usa otro usuario de Cursor para ese trabajo.
- **Devolver el control antes de tiempo.** El Bot sigue en una página a medio cargar y vuelve a toparse con el inicio de sesión. *Qué hacer:* espera a ver la página con la sesión iniciada antes de devolver el control.
- **Iniciar sesión con tu cuenta con más permisos.** El Bot puede hacer todo lo que puede hacer esa cuenta. *Qué hacer:* usa una cuenta a la medida de la tarea, o una cuenta de servicio con permisos limitados (una cuenta pensada para un programa y no para una persona) si el sistema lo admite.
- **Enseñar secretos mientras grabas con Teach a task.** La grabación recoge lo que aparece en pantalla (lección 06). *Qué hacer:* inicia sesión antes de empezar a grabar y toma el control para meter las credenciales.
- **Borrar un Bot y dar por hecho que sus accesos desaparecen.** Borrar un Bot no elimina las sesiones del navegador ni los archivos. *Qué hacer:* al cerrar el proyecto, deja en pausa o borra sus routines (tareas programadas, lección 10) y cierra sesión en sus webs del ordenador. Después desinstala sus plugins, revócalos en cada servicio y elimina los archivos sensibles de `/workspace`, la carpeta compartida del ordenador.

## Tú escribes la contraseña, el Bot usa la sesión

- Los Bots actúan en tu nombre. Las credenciales las escribes tú tomando el control de **Agent Computer**, y el Bot trabaja con la sesión.
- Una sesión abierta para un Bot está disponible para todos tus Bots, así que tener varios Bots no separa los accesos.
- Contraseñas, códigos de un solo uso, claves privadas y claves de API nunca van en el chat. Usa la petición segura de secreto cuando el Bot te la muestre.
- La ejecución local es un permiso aparte. Déjala en **Never allowed** salvo que la necesites.
- Cerrar sesión es un paso manual. Borrar un Bot deja sus sesiones en el ordenador.

Más información en [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) y [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy).
