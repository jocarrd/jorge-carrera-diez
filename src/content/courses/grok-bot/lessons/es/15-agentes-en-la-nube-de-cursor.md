---
id: "15"
module: 5
title: "Grok Bot y los agentes en la nube de Cursor"
description: "Tus Bots planifican y siguen el trabajo mientras los agentes en la nube de Cursor escriben el código: cómo lanzarlos, seguirlos y revisarlos."
level: advanced
minutes: 8
objectives:
  - "Explicar la diferencia entre un modelo y un harness, y por qué importa para programar"
  - "Decidir cuándo un Bot debe hacer el trabajo y cuándo delegarlo en un agente en la nube"
  - "Lanzar un agente en la nube a través de un Bot, seguir su avance y revisar lo que devuelve"
updated: "2026-09-16"
---

## Cuando el Bot tiene que tocar código

Tus Bots ya investigan y redactan, y saben usar un navegador. Tarde o temprano le pedirás a uno que cambie código de verdad, por ejemplo para arreglar un fallo de tu web. Un Bot puede intentarlo. Pero el trabajo serio de software necesita un entorno pensado para código, con una copia del proyecto, tests que ejecutar y una forma ordenada de entregar el cambio para que alguien lo revise.

Grok Bot consigue ese entorno pasando el trabajo de programación a los agentes en la nube de Cursor. Esta lección enseña cómo se reparte, para que tu Bot conserve el plan y el contexto mientras un agente escribe el código.

## Modelo, harness y agentes en la nube

Primero, unos términos:

- Un **repositorio** (o repo) es la carpeta que guarda el código de un proyecto con todo su historial, normalmente en GitHub.
- Una **pull request** (PR) es una propuesta de cambio en ese código, empaquetada para que alguien la revise. **Fusionar** (merge) una pull request es aceptarla en la versión principal del código.
- Un **agente en la nube** (cloud agent) es un agente de programación que funciona en su propio ordenador dentro de la nube de Cursor. Trabaja sobre una copia de tu repositorio y suele devolver el resultado como pull request.

### Modelo y harness

Todo agente de IA tiene dos partes. El **modelo** (Grok) es el que piensa. El **harness** es el software que rodea al modelo y decide qué herramientas puede usar, cómo lee archivos y cómo ejecuta comandos. El equipo de xAI explicó que el harness de Grok Bot está hecho para organizar y automatizar trabajo entre herramientas, y el de Cursor, para escribir código. Por eso orquestan con Grok Bot y programan con Cursor.

{{live 2:25:29 "Modelo frente a harness: por qué el código va a Cursor"}}

Piensa en una jefa de proyecto y un taller. La jefa (tu Bot) conoce al cliente, el plazo y las normas. El taller (el agente en la nube) tiene las herramientas. Ella escribe un encargo claro, revisa lo que llega y lo devuelve si está mal.

### Cómo funciona la delegación

La documentación oficial fija las reglas básicas ([Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)):

- Grok Bot puede delegar tareas de programación en los agentes en la nube de Cursor. Ese trabajo se ejecuta en ordenadores separados, no en el ordenador en la nube que comparten tus Bots (lección 02).
- Los agentes delegados siguen los controles y la configuración de red que ya tengas en [Cloud Agent](https://cursor.com/docs/cloud-agent).
- En los planes Teams y Enterprise, un interruptor **Cloud Agents** activa o bloquea la delegación para todo el equipo. Viene encendido y los administradores pueden apagarlo.
- Auto Review (lección 04) también revisa cada lanzamiento de un agente en la nube. El lanzamiento puede seguir adelante, esperar tu aprobación o quedar denegado.

El Bot maneja al agente con llamadas a herramientas, funciones propias que usa en lugar de pulsar botones en las pantallas de Cursor. Con ellas lanza un agente, lee su transcripción (el registro de lo que lleva hecho) y le manda mensajes de seguimiento. Además escribe él mismo el prompt del agente y le pasa solo el contexto que hace falta. Lo que ha aprendido de ti, como tus criterios de revisión, entra en esos prompts sin que tengas que repetirlo.

{{live 3:59:48 "Un Bot lanza agentes en la nube y les hace seguimiento"}}

### Project agents y private workers

En el directo se vieron dos opciones más. Un **project agent** (agente de proyecto) es un agente en la nube para un proyecto largo. Guarda el contexto técnico de la aplicación, y el Bot le escribe cada vez que necesita más trabajo de ingeniería. Un **private worker** (trabajador privado) ejecuta un agente en la nube de Cursor en una máquina tuya, por ejemplo tu propio Mac. Tus Bots siguen funcionando en ordenadores alojados por Cursor.

Nada de esto aparece todavía en la documentación de Grok Bot, así que puede que no lo encuentres en tu cuenta. Si no está, los agentes en la nube normales hacen el mismo trabajo.

### Cuándo delegar

Usa un agente en la nube para tareas de código complejas. Deja al Bot la investigación, la coordinación y los prototipos rápidos de usar y tirar.

> [!TIP]
> Dónde está la frontera depende de tu trabajo. Manda a los agentes en la nube unas cuantas tareas de distinto tamaño antes de fijar una regla.

## Lanzar un agente desde un Bot y revisar su PR

1. **Comprueba el acceso.** Si tienes un plan de equipo, pide a tu administrador que confirme que el interruptor **Cloud Agents** está encendido.
2. **Conecta el código.** En la configuración de agentes en la nube de Cursor, conecta tu organización de GitHub y elige qué repositorios pueden usar. Esas pantallas son de Cursor, así que sigue la [documentación de Cloud Agent](https://cursor.com/docs/cloud-agent) para ver los pasos actuales.
3. **Elige un Bot de ingeniería** (lección 11) y pon la regla de delegación en su descripción:

   ```prompt
   Te encargas de la ingeniería del repo de la web. Delega los cambios de código en agentes en la nube de Cursor.
   Escribe a cada agente un prompt claro con el objetivo, las restricciones y cómo verificar el resultado.
   Vuelve con el enlace a la pull request y una captura o un vídeo del cambio.
   No fusiones nada sin mi aprobación.
   ```

4. **Pide un resultado, no un método:**

   ```prompt
   El formulario de registro de la landing no guarda los correos. Lanza un agente en la nube para arreglarlo.
   Que el cambio sea pequeño. Avísame cuando la pull request esté lista.
   ```

5. **Sigue el avance preguntando al Bot**, no mirando al agente. Escribe "¿Cómo va el agente?" y el Bot leerá la transcripción y te la resumirá.
6. **Revisa lo que vuelve**, es decir, la pull request y las pruebas que pediste. La lección 16 trata las pruebas a fondo.

## La landing del primer día

El primer día del directo, el equipo montó una landing (una web de una sola página que presenta una oferta) para un negocio de pop-ups de comida. Acababan de crear un Bot de ingeniería llamado Tater para elegir la tecnología de la web y construirla. Le dijeron cómo trabajar:

```prompt
A partir de ahora usa agentes en la nube. Quizá te conviene crear un project agent.
```

Tater creó un proyecto para guardar el contexto técnico. Después, el equipo le explicó cómo quería recibir el trabajo. Desplegar significa publicar la web para que la gente pueda visitarla:

```prompt
Por ahora haz todo el desarrollo más o menos en local, en tu máquina en la nube o en la de
los agentes en la nube. Vuelve con un vídeo o una captura. Del despliegue ya nos ocuparemos.
```

{{live 2:45:36 "Pedir al Bot de ingeniería que delegue en agentes en la nube"}}

Poco después, el Bot abrió una pull request de unas 2.000 líneas que nadie había pedido. El equipo respondió con una regla explícita para ese primer prototipo: nada de pull requests, por ahora todo va directo a main. Main es la versión principal del código, así que cada cambio entraba sin revisión. Tu regla puede ser la contraria. Lo importante es que el Bot la tenga antes de la primera construcción.

## Código grande escrito por el propio Bot

- **Pedir al Bot que escriba él mismo cambios grandes de código.** Puede que lo consiga, pero sin las herramientas pensadas para programar. *Qué hacer:* que delegue en un agente en la nube y revise el resultado.
- **Vigilar cada paso del agente.** Te pasas el tiempo leyendo registros. *Qué hacer:* pregunta al Bot cómo va y pide pruebas en la pull request.
- **No decir cómo debe volver el trabajo.** Te llega por sorpresa una pull request de 2.000 líneas. *Qué hacer:* fija en la descripción del Bot el tamaño, el formato y quién puede fusionar.
- **El agente no llega al repositorio.** El lanzamiento falla antes de escribir una línea. En el directo, un Bot había usado el conector equivocado para GitHub. *Qué hacer:* comprueba el acceso al repositorio antes del primer lanzamiento; vuelve a autenticar GitHub o instala la herramienta de línea de comandos de GitHub.
- **Dar por hecho que el agente ve el ordenador de tu Bot.** Los agentes delegados trabajan en ordenadores separados, con la configuración de red de Cloud Agent. *Qué hacer:* dales acceso desde la configuración de Cloud Agent, no con las sesiones de tu Bot.

## Quién planifica y quién programa

- El modelo piensa y el harness le da herramientas. El de Grok Bot orquesta; el de Cursor programa.
- Los Bots pueden delegar tareas de programación en los agentes en la nube de Cursor, que trabajan en ordenadores separados bajo tus controles de Cloud Agent.
- El Bot escribe el prompt del agente, sigue su avance y vuelve con una pull request.
- Puede que los project agents y los private workers aún no estén en tu cuenta; los agentes en la nube normales hacen el mismo trabajo.
- Pon en la descripción del Bot de ingeniería la regla de delegación y cómo debe volver el resultado.
