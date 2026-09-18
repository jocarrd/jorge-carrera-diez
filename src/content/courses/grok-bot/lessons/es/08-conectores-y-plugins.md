---
id: "08"
module: 3
title: "Conectores y plugins"
description: "Conecta tus Bots a herramientas como Slack, Notion o GitHub desde Settings → Plugins y revisa qué acceso das antes de pulsar Add."
level: intermediate
minutes: 8
objectives:
  - "Instalar un connector desde Settings → Plugins y añadirlo a una tarea con @"
  - "Decidir cuándo conviene un connector y cuándo el uso del ordenador"
  - "Revisar cuenta, accesos y aprobaciones antes de conectar una herramienta"
updated: "2026-09-16"
---

## Tu trabajo vive en otras herramientas

La mayor parte del trabajo real vive en otras herramientas. Tu equipo habla en Slack, escribe documentos en Notion, guarda el código en GitHub y lee el correo en Gmail. Un Bot puede abrir esas webs en su navegador y moverse por ellas con clics, como viste en la lección 02. Funciona, pero va más lento y se rompe cuando una página cambia o una sesión caduca.

Los connectors le dan al Bot una entrada directa. También le dan acceso a tus cuentas, así que cada uno merece un minuto de reflexión antes de añadirlo.

## Un enlace directo con cada servicio

Un **connector** (conector) es un enlace ya preparado entre un Bot y un servicio compatible. Con él, el Bot le pide datos y acciones al servicio directamente, en lugar de leer pantallas y pulsar botones. Piensa en la diferencia entre rellenar un formulario en papel en la ventanilla y tener una línea de teléfono directa con el departamento que toca.

### En la app, los connectors se llaman Plugins

En la versión actual de la app, los connectors aparecen como **Plugins** (complementos). La sección **Plugins** de los ajustes reúne dos tipos de cosas:

- **Connectors** a servicios como Slack o GitHub.
- **Skills empaquetadas**, skills ya hechas que ha escrito otra persona (lección 06).

Tiene dos pestañas:

- **Marketplace** (el catálogo), para descubrir plugins y skills empaquetadas.
- **Yours** (los tuyos), para revisar lo que tienes instalado, incluidas tus skills privadas.

También verás las siglas **MCP** (Model Context Protocol). Es el estándar técnico sobre el que se construyen muchos connectors. En el día a día, puedes entender "connector", "plugin" y "MCP" como el mismo tipo de conexión.

### Herramientas que se suelen conectar

Los casos de uso de la documentación oficial conectan los Bots a un CRM (la base de datos donde un equipo de ventas sigue a sus clientes), al correo, al calendario, a Slack, a herramientas de analítica y a gestores de incidencias. En el directo de xAI, los Bots del equipo usaban X, Notion, GitHub, Slack, Figma y Gmail. Tómalos como ejemplos y no como un catálogo garantizado. Lo que puedas instalar depende del **Marketplace** en ese momento y, en un plan de equipo, de tu administrador.

{{live 6:08:20 "Bots con Notion, Slack, Figma y Gmail conectados"}}

### Connector o uso del ordenador

La [documentación oficial](https://docs.x.ai/grok-bot/computer-and-apps) da una regla sencilla:

- **Usa un connector cuando exista.** Suele ser más fiable que moverse por una web con clics.
- **Usa el navegador** para servicios sin connector o para tareas visuales que el connector no cubre.

Una web que se usa desde el navegador puede bloquear la automatización, cerrar la sesión o pedir un paso que solo puede dar una persona. El Bot te pasa esos pasos a ti (lección 09).

### Qué das al conectar

- **Los connectors instalados son de toda la cuenta.** Todos los Bots de tu cuenta pueden usarlos, no solo aquel con el que hablabas.
- **El Bot actúa en tu nombre.** Nunca tiene más acceso que la cuenta con la que inicias sesión.
- **El Bot nunca ve las llaves.** Cuando inicias sesión, el servicio emite un token, una llave digital que demuestra que diste permiso. Los tokens de los connectors se quedan en los servidores de Cursor. Los Bots usan el connector sin recibir el token, y nunca se guarda en el ordenador del Bot.
- **Puedes apagar herramientas sueltas.** Un plugin puede ofrecer muchas acciones, llamadas herramientas, como "leer una página" o "enviar un mensaje". Puedes activarlas o desactivarlas una a una.
- **Los equipos pueden tener reglas.** En los planes Teams y Enterprise, un administrador puede exigir o restringir plugins. Uno bloqueado aparece como **Disabled by team admin** (desactivado por el administrador del equipo).

> [!WARNING]
> Un mensaje o un documento que el Bot lee a través de un plugin puede traer instrucciones escondidas que intenten desviarlo. Deja los envíos, las publicaciones y los borrados detrás de una aprobación (lección 04), también con herramientas de confianza.

## Instalar un connector desde el Marketplace

1. Abre **Settings** (ajustes) desde el menú de tu cuenta, o pulsa `Cmd/Ctrl+,`.
2. Entra en **Plugins** y explora el **Marketplace**.
3. Elige el connector y pulsa **Add** (añadir).
4. Si se abre una ventana del navegador para iniciar sesión, entra con la cuenta que de verdad quieres que use el Bot.
5. Abre la pestaña **Yours**, revisa las herramientas del plugin y apaga las que no necesites.
6. Escribe `@` en un chat y elige el connector para añadirlo a la tarea. (La `/` sirve para las skills).

Con el connector de Notion añadido, prueba primero una tarea de solo lectura:

```prompt
Lee la página "Plan de lanzamiento" y haz una lista de todas las tareas sin responsable. Enlaza cada una. No edites la página.
```

También puedes pedirle a un Bot en el chat que configure un plugin por ti, como enseñó el equipo de xAI en directo. Si en tu app no funciona, sigue los pasos de arriba. Sea como sea, el inicio de sesión lo completas tú.

{{live 0:42:51 "Plugins que puedes conectar a un Bot"}}

### Antes de conectar, repasa esta lista

- **¿Qué cuenta?** La cuenta cuyos datos debe ver el Bot. No elijas por costumbre la que más permisos tiene.
- **¿Qué herramientas?** Apaga las de escritura que no vayas a usar.
- **¿Qué aprobaciones?** Añade reglas **Ask first** (preguntar primero) para publicar o borrar con esa herramienta (lección 04).
- **¿Quién más puede usarlo?** Todos los Bots de tu cuenta.
- **¿Cómo lo quitas?** Desinstala el connector y después revoca su acceso en los ajustes del propio servicio.

## Miles de ideas leídas desde X

En el directo, el equipo de xAI quería entender miles de ideas de negocio que la gente había dejado como respuestas en X.

{{live 1:35:00 "Un Bot de investigación conectado a X"}}

1. Partían de una cuenta vacía. Lo único que habían hecho antes era instalar el plugin de X desde el **Marketplace** e iniciar sesión con la cuenta de X de un miembro del equipo.
2. Crearon un Bot nuevo. El público eligió su nombre, Marky McMarkface.
3. Le dieron contexto. El equipo iba a montar un negocio, estos eran los usuarios de X de los presentadores y todos habían publicado sobre el directo.
4. Le pidieron: "Resume lo que propone la gente que ha respondido a nuestras últimas publicaciones".

El Bot buscó en los hilos de respuestas a través del connector y volvió con los temas agrupados. Entre ellos estaban "no otra demo SaaS", algo físico o local para clientes no técnicos e ideas de consumo con nostalgia. Detrás venía una larga lista de propuestas sueltas. Ese resumen fue el punto de partida para elegir el negocio.

Una versión que puedes adaptar, con el connector de X añadido:

```prompt
Lee las respuestas a mis tres últimas publicaciones. Agrupa las propuestas por temas, cuenta cuántas respuestas encajan en cada tema y cita dos respuestas por tema con su enlace. No publiques nada, no des me gusta y no respondas a nadie.
```

## Clics donde había connector

- **Moverse con clics por una web que tiene connector.** El trabajo va más lento y se rompe más. _Qué hacer:_ mira primero en el **Marketplace**.
- **Iniciar sesión con la cuenta equivocada.** El Bot ve datos que no son o no ve nada. _Qué hacer:_ vuelve a conectar con la cuenta correcta.
- **Dejar todas las herramientas activadas.** El Bot tiene permisos de escritura que nunca necesitó. _Qué hacer:_ apaga en **Yours** las que no uses.
- **Mantener conexiones viejas para siempre.** El acceso sigue abierto mucho después de acabar el proyecto. _Qué hacer:_ revisa los plugins instalados de vez en cuando y revoca lo que no uses.
- **Un plugin que no conecta.** Las tareas fallan en la primera llamada. En el directo, un Bot no llegaba a los repositorios de GitHub del equipo (las carpetas donde viven los proyectos de código), al parecer porque se había usado el connector equivocado. _Qué hacer:_ ábrelo en **Settings → Plugins** y vuelve a iniciar sesión con la cuenta correcta, o quítalo y conéctalo de nuevo. Con GitHub, el equipo sugirió también instalar la herramienta de línea de comandos de GitHub (un programa que se maneja escribiendo órdenes) en el ordenador del Bot. {{live 5:06:25 "Un Bot que no llegaba a GitHub"}}

## Connectors primero, clics después

- Un connector da a un Bot acceso directo a un servicio. En la app, los connectors aparecen como **Plugins**.
- Se instalan desde **Settings → Plugins → Marketplace**, se inicia sesión y se añaden a una tarea con `@`.
- Usa un connector cuando exista. Para todo lo demás, el navegador.
- Los connectors instalados sirven para todos los Bots de tu cuenta, y un Bot nunca tiene más acceso que tú.
- Antes de conectar, revisa la cuenta, las herramientas activadas, las aprobaciones y cómo revocar el acceso.
