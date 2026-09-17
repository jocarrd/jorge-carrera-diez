---
id: "02"
module: 1
title: "El ordenador de los Bots"
description: "Todos tus Bots comparten un ordenador en la nube, con una pantalla para cada uno. Aprende a mirarlo, tomar el control y conocer sus límites."
level: beginner
minutes: 7
objectives:
  - "Explicar qué es el ordenador compartido en la nube y qué comparten en él tus Bots"
  - "Ver trabajar a un Bot y tomar el control para un inicio de sesión, un código de verificación o un CAPTCHA"
  - "Elegir entre un connector y el uso del ordenador, y saber qué no puede hacer el ordenador"
updated: "2026-09-16"
---

## Los clics los hace el Bot

Un chat te da texto y los clics los haces tú. Un Bot puede hacer los clics él mismo, porque tiene un ordenador. Gracias a eso puede rellenar un formulario, sacar cifras de un panel o guardar un archivo donde tu equipo lo encuentre.

Dejarle una máquina a una IA plantea dudas razonables. Dónde está ese ordenador, si puedes ver lo que hace, qué pasa cuando una web pide tu contraseña. Esta lección las resuelve antes de que le encargues trabajo real a un Bot.

## Un ordenador en la nube para todos tus Bots

### Un ordenador para todos tus Bots

Tu cuenta tiene un **ordenador en la nube**: una máquina persistente que funciona en la nube de Cursor, con navegador web, archivos y carpetas, y un terminal (la ventana donde se escriben comandos, lección 01). Persistente quiere decir que conserva su estado entre tareas. No funciona en tu portátil, así que cerrar el portátil no detiene el trabajo.

Todos los Bots de tu cuenta usan ese mismo ordenador. Comparten:

- Las cookies del navegador (pequeños archivos con los que las webs recuerdan que has iniciado sesión) y las sesiones iniciadas
- Los archivos
- Las credenciales guardadas para el terminal, como el acceso a una herramienta de desarrollo

Piensa en un ordenador de oficina con un monitor distinto para cada compañero. Cada Bot tiene **su propia pantalla**, así que varios Bots pueden usar el navegador a la vez. El archivador y el llavero, en cambio, son comunes. Si inicias sesión en una web para un Bot, tus otros Bots también pueden usar esa sesión, y un archivo que guarda un Bot lo ven todos.

> [!WARNING]
> Las pantallas son superficies de trabajo separadas, pero no barreras de seguridad. No pongas en el ordenador una credencial o un archivo si otro Bot de tu cuenta no debe poder usarlo.

En la práctica, un Bot lee por su cuenta los archivos de otro cuando la tarea lo pide.

{{live 8:15:25 "Un ordenador, un escritorio por Bot"}}

### Mirar y tomar el control

Abre **Agent Computer** (el ordenador del agente) desde una conversación para ver la pantalla del Bot. La vista previa muestra los clics, lo que escribe, la navegación y el estado actual. Puedes cerrarla cuando quieras y el trabajo sigue.

Algunos pasos necesitan a una persona. El Bot puede pedirte que tomes el control para:

- Una contraseña o una passkey (una llave de acceso que usa tu dispositivo en lugar de una contraseña)
- La verificación en dos pasos (el código extra que una web te manda al móvil)
- Un CAPTCHA (la prueba de "no soy un robot")
- Un pago o una comprobación de identidad
- Una web que exige de forma explícita a una persona

Cuando ocurre, tomas el control del ordenador, completas solo el paso bloqueado y devuelves el control.

### Connector o uso del ordenador

Un Bot puede llegar a una aplicación de dos formas. Un **connector** es una conexión estructurada con un servicio compatible. En la versión actual de la app, los connectors aparecen como **Plugins**. El **uso del ordenador** (computer use) consiste en que el Bot maneja el navegador o el escritorio como lo haría una persona.

Usa un connector cuando exista, porque suele ser más fiable que ir haciendo clic por una web. Deja el uso del ordenador para servicios sin connector o para pasos visuales que el connector no cubre. La lección 08 trata los connectors y los plugins a fondo.

### Archivos que duran

El ordenador tiene una carpeta compartida llamada `/workspace` (ese texto es la ruta de la carpeta, su dirección dentro del ordenador). Pide a tus Bots que guarden ahí los archivos de cada proyecto, en carpetas con nombres claros. Los archivos, el estado del navegador y los inicios de sesión compatibles están pensados para sobrevivir a las actualizaciones normales y a una recuperación. Las carpetas temporales y los paquetes instalados a mano pueden desaparecer, así que guarda los resultados importantes en `/workspace` o adjúntalos a la conversación.

### Lo que el ordenador no puede hacer

- **Pasar por encima de una web que lo bloquea.** Una web puede bloquear la automatización, caducar la sesión o pedir un paso humano. El Bot debe dejarte esos pasos a ti en lugar de buscar un rodeo.
- **Hacer dos tareas de uso del ordenador en una misma pantalla.** Un Bot hace una tarea de uso del ordenador cada vez. Los demás Bots pueden trabajar en paralelo en sus pantallas.
- **Tocar el ordenador que tienes delante sin permiso.** Tu portátil es otra máquina. Un Bot solo ejecuta comandos en él si esa función está activada y tú lo apruebas (lección 04).
- **Guardar secretos frente a tus otros Bots.** Todo lo que hay en el ordenador está al alcance de todos los Bots de tu cuenta.

El uso del ordenador también puede ir lento, y su velocidad depende del modelo de IA que hace el trabajo. No hace falta que te quedes mirando. Cierra la vista previa y vuelve más tarde. Además, el ordenador en la nube tiene su propia conexión a internet, así que pasarle a un Bot una tarea en el navegador ayuda cuando la tuya va mal, por ejemplo en un avión.

{{live 0:58:15 "Por qué el uso del ordenador va lento"}}

## Ver trabajar a un Bot y tomar el control

**Ver trabajar a un Bot**

1. Encarga a un Bot una tarea que necesite una web, por ejemplo revisar una página pública.
2. En la conversación, abre **Agent Computer**.
3. Sigue los clics y la navegación en la vista previa. Ciérrala cuando hayas visto suficiente.

**Tomar el control para iniciar sesión**

1. Cuando el Bot te pida ayuda, abre **Agent Computer**.
2. Elige el control para tomar el mando.
3. Escribe tú la contraseña, la passkey o el código de verificación, o resuelve el CAPTCHA.
4. Devuelve el control y dile al Bot que continúe.

**Añadir un connector**

1. Abre **Settings → Plugins** (ajustes, plugins).
2. Recorre la lista y elige **Add** (añadir) en el servicio que necesitas.
3. Completa la autenticación en tu navegador si te la pide.
4. En un chat, escribe `@` para vincular el connector a la tarea.

## Data Dan crea un formulario de Google

En una demostración en directo, el equipo de xAI le pidió a un Bot nuevo, Data Dan, que creara un formulario de Google con dos preguntas sobre café. En esa configuración Google Forms no tenía connector, así que el Bot montó el formulario en el navegador de su ordenador. La ponente abrió la vista del ordenador y lo vio trabajar.

{{live 0:41:51 "Data Dan crea un formulario de Google"}}

Puedes encargar algo parecido. Si aparece una página de inicio de sesión, el Bot debería detenerse y pedirte que tomes el control.

```prompt
Abre Google Forms y crea un formulario llamado "Comida de equipo". Añade dos preguntas: una de opción múltiple, "¿Qué día te viene bien?", con martes, miércoles y jueves, y una de respuesta corta, "¿Alguna restricción alimentaria?". Pídeme que inicie sesión si hace falta. Mándame el enlace cuando termines.
```

## Contraseñas en el chat y otros descuidos

- **Pegar una contraseña o un código de un solo uso en el chat.** Queda en la conversación. *Qué hacer:* toma el control del ordenador y escríbelo ahí, o usa la petición segura de secreto cuando una conexión compatible la ofrezca. Esa petición no deja el valor en la conversación.
- **Usar Bots distintos para separar datos.** Todos comparten archivos y sesiones. *Qué hacer:* no pongas en el ordenador nada que alguno de tus Bots no deba usar.
- **Pedirle al Bot que se salte un CAPTCHA o un inicio de sesión bloqueado.** Las webs esperan a una persona en esos pasos. *Qué hacer:* dile que se detenga y te avise.
- **Forzar el navegador cuando existe un connector.** Ir haciendo clic por una web suele ser menos fiable. *Qué hacer:* mira antes en **Settings → Plugins**.
- **Dejar la única copia de un resultado en una carpeta temporal.** Puede perderse en una recuperación. *Qué hacer:* pide al Bot que lo guarde en `/workspace` o lo adjunte a la conversación.

## Un ordenador para todos, una pantalla por Bot

- Todos tus Bots comparten un ordenador persistente en la nube: archivos, sesiones del navegador e inicios de sesión.
- Cada Bot tiene su propia pantalla, pero las pantallas no son una barrera de seguridad.
- Abre **Agent Computer** para mirar, y toma el control para contraseñas, códigos de verificación y CAPTCHAs.
- Usa connectors (**Plugins**) cuando existan y el uso del ordenador para lo demás.
- Guarda los archivos que deben durar en `/workspace`.

Más información en [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps).
