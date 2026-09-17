---
id: "17"
module: 5
title: "Automatizaciones de ingeniería"
description: "Cuatro automatizaciones de ingeniería del directo: revisión de PR en Slack, auditoría nocturna, CI que se arregla sola y un flujo urgente."
level: advanced
minutes: 8
objectives:
  - "Disparar trabajo de ingeniería a partir de un evento con una regla acotada, y probarlo sin riesgo"
  - "Montar un canal de revisión, una auditoría nocturna, una CI que se arregla sola y un flujo urgente"
  - "Decidir qué cambios pueden fusionarse solos y cuáles necesitan a una persona"
updated: "2026-09-16"
---

## Todo sigue empezando por ti

A estas alturas tus Bots delegan el código en agentes en la nube (lección 15) y vuelven con pruebas (lección 16). Pero todo sigue empezando por ti. Pegas el enlace de la pull request, ves que la build está rota, persigues al agente que lleva un rato callado.

Mucho trabajo de ingeniería arranca con una señal. Se abre una pull request, falla un test o son las tres de la madrugada y nadie está tocando el código. Esta lección convierte esas señales en automatizaciones. También trata la pregunta que decide si ayudan o estorban, que es qué puede seguir adelante sin ti.

## CI, disparadores y eventos

Primero, unos términos. La **CI** (integración continua) es el sistema que compila y prueba tu código cada vez que alguien propone un cambio. Cuando una comprobación falla, se dice que la CI está "en rojo". **Main** es la versión principal del código, en la que se fusionan las pull requests. La **guardia** (on-call) es la persona responsable de las incidencias en cada momento.

Una buena automatización funciona como un detector de humo. Reacciona a una señal concreta y hace una sola cosa clara. Cuando el problema la supera, llama a una persona.

### Routines que arrancan con un evento

En la lección 10 creaste routines que se ejecutan según un horario. Una routine también puede arrancar con un evento. Las integraciones de la cuenta de Cursor pueden lanzarla cuando pasa algo, como un mensaje de Slack o una notificación de GitHub. Estas integraciones son distintas de los plugins de Slack y GitHub, y puede que necesiten su propia conexión ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

La documentación insiste en dos puntos:

- **Usa una regla de coincidencia acotada.** Evita escuchas del tipo "cada mensaje nuevo". Generan ruido, consumen uso y hacen más probable que el Bot actúe sobre información que no viene al caso.
- **Prueba antes de activar.** Usa **Test run** (ejecución de prueba) con la routine antes de encenderla.

> [!WARNING]
> **Test run** hace trabajo real. Puede navegar por webs, cambiar archivos y llamar a herramientas conectadas. Usa datos seguros y deja las acciones de escritura detrás de una aprobación.

La documentación da también pautas para routines de fiar. Automatiza la preparación antes que la ejecución. Exige aprobación para los cambios en producción, el sistema real del que dependen tus usuarios. Indica qué hacer si faltan datos o están desfasados, y dónde avisar si el trabajo queda a medias.

### Cambios de bajo y de alto riesgo

Decide cuánta intervención humana necesita un cambio según su riesgo. Los de bajo riesgo pueden seguir solos. Los importantes necesitan antes una demo o un prototipo. Bajo riesgo puede ser borrar código muerto (código que ya nada usa) con todas las comprobaciones en verde. Alto riesgo es cualquier cosa que toque pagos, datos de usuarios o producción.

En la parte de tus Bots, Grok Bot te da los controles. En **Settings → General → Auto-review** (ajustes, revisión automática) puedes añadir reglas **Ask first** (preguntar antes), que siempre detienen las acciones que coinciden. Si dos reglas chocan, **Ask first** gana a **Allow automatically** (permitir automáticamente). La documentación pone los despliegues a producción como buen ejemplo de **Ask first**.

## Cuatro automatizaciones del directo

Las cuatro automatizaciones de abajo son patrones que el equipo de xAI enseñó en el directo. Ninguna viene lista para usar. El canal de revisión funcionaba con **Cursor Automations**, un producto aparte de Cursor que trabaja sobre agentes en la nube. Las otras tres puedes montarlas con routines y disparadores por evento.

1. **Un canal de revisión de pull requests en Slack.** Crea un canal donde tú y tus Bots publiquéis los enlaces a las pull requests. Una automatización se dispara con cada mensaje del canal y revisa si la pull request es correcta, qué riesgo tiene y qué tests le faltan. En la demo la automatización era todavía "solo un prompt", con la idea de ir afinándola y abrir un canal parecido para bugs.

   {{live 4:44:34 "Un canal de Slack donde se revisa cada pull request"}}

2. **Una auditoría nocturna del código.** Una routine se ejecuta de noche, busca en el código problemas de calidad, comentarios sobrantes y fallos de seguridad, y abre pull requests. Por la mañana, los arreglos te esperan. La noche va bien porque hay menos gente tocando el código y los cambios chocan menos. En la demo, los arreglos solo se fusionaban si se cumplían ciertas condiciones, como pasar un test de principio a fin (uno que recorre un flujo completo de usuario).

   ```prompt
   Cada noche a las 3:00, revisa el repositorio en busca de código muerto, comentarios sobrantes y
   problemas de seguridad evidentes. Delega cada arreglo en un agente en la nube como una pull request
   pequeña y separada, con pruebas. No fusiones nada. Publica en esta conversación una lista con las
   pull requests. Si no hay nada que arreglar, no publiques.
   ```

3. **Una CI que se arregla sola.** Cuando una comprobación se pone en rojo o salta una alerta, el Bot investiga, lanza un agente en la nube para arreglarlo y lo fusiona según tus reglas. Si en diez minutos no está resuelto, avisa a la persona de guardia.

   ```prompt
   Cuando la CI falle en main, busca la causa y delega el arreglo en un agente en la nube.
   Si el arreglo solo toca tests o configuración y pasan todas las comprobaciones, puedes fusionarlo.
   Todo lo que toque código o datos de producción necesita mi aprobación.
   Si en 10 minutos no está arreglado, escribe a la persona de guardia con lo que hayas encontrado.
   ```

   {{live 4:14:05 "Una CI que se arregla sola y avisa a los diez minutos"}}

4. **El flujo urgente (P0).** P0 es la etiqueta de máxima prioridad. Los agentes de programación a veces se ralentizan. Esperan con un temporizador largo, se desvían del objetivo o van con demasiada cautela. Un flujo P0 define de una vez qué significa "urgente", con una routine que revisa los agentes en la nube cada cinco minutos e interrumpe o reconduce a los que se desvían.

## El fallo de los vuelos reservados

En una demo de ingeniería, un usuario avisó de que la gente no podía ver sus vuelos reservados. Su Bot de ingeniería confirmó el fallo navegando por la web. Quien lo llevaba no se limitó a escribir "urgente", porque esa palabra sola puede hacer que un agente se salte pasos o se invente cosas para ir más rápido. En su lugar, la definió:

```prompt
Trátalo como P0. Crea una routine que revise los agentes en la nube. Cada cinco minutos,
comprueba si se han desviado, por ejemplo con una espera larga como sleep 300, si se alejan
del objetivo o si van con demasiada cautela. En cuanto lo detectes, interrúmpelos y
recondúcelos, porque lo necesito con urgencia.
```

`sleep 300` es una orden que espera cinco minutos sin hacer nada. Un agente podría lanzarla mientras espera unos tests que duran un minuto.

{{live 4:26:37 "Definir urgente con una routine que reconduce agentes atascados"}}

Respondió al aviso del Bot sobre el fallo con "Arregla esto con urgencia, es un P0". Después le pidió que pasara el flujo P0 a Jenny, el Bot que se encarga del playbook del equipo, y Jenny lo anunció a todos los Bots de ingeniería como flujo fijo (lección 13). Definió "urgente" una vez y ahora todos los Bots saben qué significa.

Vigila el coste. Una routine cada cinco minutos se ejecuta 288 veces al día, y las routines muy frecuentes salen caras. Si una herramienta puede enviar un webhook (un aviso que una aplicación manda a otra en el momento en que pasa algo), reacciona a ese aviso en lugar de mirar con un temporizador. Detén la routine P0 cuando el arreglo esté publicado.

En el estudio del día 2 estas automatizaciones sostenían el trabajo de tres personas a la vez. Bake, el Bot ingeniero de Roshan, recibía un aviso con cada pull request que se abría o cambiaba. Cada uno tenía un Bot de Slack que escuchaba sus menciones, y un tablero de Notion hacía de fuente de verdad que los Bots actualizaban solos. Los Bots llegaron a escribir por su cuenta un resumen con los hechos de todos los Bots de Ship by Thursday a partir de las pull requests fusionadas.

{{live d2 6:44:07 "Un Bot que vigila cada pull request"}}

## Disparadores que escuchan todo

- **Un disparador que escucha todo.** Recibes ruido, gastas uso y el Bot actúa sobre información equivocada. *Qué hacer:* que coincida con un canal y una frase o un evento concretos.
- **Dejar que las automatizaciones fusionen cualquier cosa.** Un cambio malo llega a producción a las tres de la madrugada. *Qué hacer:* fusión automática solo para cambios de bajo riesgo con comprobaciones en verde y pruebas, y reglas **Ask first** para producción.
- **No escalar.** El Bot sigue reintentando mientras la web está caída. *Qué hacer:* pon un tiempo límite y di a quién hay que avisar.
- **Decir "urgente" sin definirlo.** El agente toma atajos. *Qué hacer:* define una vez qué significa urgente y guárdalo en el playbook.
- **Dejar activas routines muy frecuentes.** Una revisión cada cinco minutos sigue gastando cuando la incidencia ya pasó. *Qué hacer:* páusala o bórrala cuando termine el trabajo.
- **Saltarte la prueba.** Tu primera ejecución real se convierte en la prueba. *Qué hacer:* usa **Test run** con datos seguros y mira si se detuvo donde tenía que pedir aprobación.

## Disparadores acotados y probados

- Las routines pueden arrancar con eventos como un mensaje de Slack o una notificación de GitHub. Mantén acotada la regla de coincidencia.
- Prueba con **Test run** y datos seguros, sabiendo que hace trabajo real.
- Patrones útiles son el canal de revisión de pull requests, la auditoría nocturna, la CI que se arregla sola y avisa, y el flujo P0.
- Deja pasar solos los cambios de bajo riesgo con comprobaciones en verde y pruebas; los de producción, detrás de **Ask first**.
- Define "urgente" una vez, compártelo con el playbook y apaga las routines frecuentes cuando dejen de hacer falta.
