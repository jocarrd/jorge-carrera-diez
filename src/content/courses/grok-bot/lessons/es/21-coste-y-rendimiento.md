---
id: "21"
module: 7
title: "Coste y rendimiento"
description: "Por qué el trabajo de los Bots gasta tu uso semanal y cómo recortar: frecuencia de routines, eventos, API en vez de clics, contexto ligero y menos grupos."
level: advanced
minutes: 8
objectives:
  - "Explicar qué hace que el trabajo de un Bot consuma uso y dónde consultarlo"
  - "Calcular cuántas ejecuciones genera el horario de una routine y elegir uno sensato"
  - "Aplicar cinco hábitos que hacen a los Bots más rápidos y baratos sin perder calidad"
updated: "2026-09-16"
---

## El uso que se acaba el miércoles

A estas alturas quizá tengas varios Bots, unas cuantas routines y algún chat de grupo. Y una semana el uso se acaba el miércoles sin que sepas qué Bot lo ha gastado.

El coste y la velocidad tienen el mismo origen. Un Bot que recorre una web clic a clic, relee un contexto largo o habla en un grupo concurrido va lento y gasta mucho. Los hábitos de esta lección mejoran las dos cosas a la vez.

## De dónde sale el gasto

Cada vez que un Bot razona, lee una página, mira una captura o escribe una respuesta, un modelo hace trabajo, y ese trabajo es lo que cuenta tu plan. Se mide en tokens, los trozos pequeños de texto que un modelo lee y escribe. Más pasos, más texto y más ejecuciones suponen más uso. Funciona como el taxímetro de un taxi, que sigue corriendo mientras el Bot conduce, tanto si el trayecto sirve como si no.

### Planes y uso

- Grok Bot va incluido en los planes individuales de pago de Cursor y en Cursor Teams, o con una suscripción de SuperGrok vinculada. Las condiciones actuales están en [Plans and billing](https://cursor.com/help/grok-bot/plans).
- Las suscripciones incluyen uso **semanal**. Las cuentas que cumplen los requisitos pueden añadir uso bajo demanda, un uso extra que se factura según el coste del modelo y de los tokens ([FAQ](https://docs.x.ai/grok-bot/faq)).
- **Usage & Billing** (uso y facturación), en los ajustes, muestra el uso semanal incluido y el uso bajo demanda. El menú de la cuenta también puede enseñar **Weekly usage** (uso semanal) de un vistazo ([Settings and notifications](https://docs.x.ai/grok-bot/settings-and-notifications)).
- Hoy no existe un límite de gasto propio de Grok Bot. Se aplican los controles de uso bajo demanda de la cuenta ([Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
- Si se agota el uso, los Bots pueden parecer atascados y las routines pueden no ejecutarse ([Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

Este curso no da precios. Dependen de tu plan y cambian con el tiempo.

### En qué se va el uso

**Routines que se ejecutan demasiado a menudo.** Cada ejecución es un trabajo completo del Bot, aunque no haya cambiado nada. Las cuentas suben rápido:

| Horario | Ejecuciones al día | Ejecuciones a la semana |
| -- | -- | -- |
| Cada 15 minutos | 96 | 672 |
| Cada hora | 24 | 168 |
| De lunes a viernes a las 8:00 | 1 en días laborables | 5 |

Antes de elegir un horario, pregúntate cada cuánto puede cambiar de verdad la respuesta.

**Mirar con un temporizador en vez de reaccionar a eventos.** Consultar una fuente cada cierto tiempo se llama polling. Una routine que mira Slack cada 15 minutos por si hay un mensaje nuevo casi nunca encuentra nada. En su lugar, una routine puede arrancar con un evento, porque las integraciones de tu cuenta de Cursor pueden lanzarla con un mensaje de Slack o una notificación de GitHub (lección 17). Mantén estrecha la regla de coincidencia, ya que los disparadores amplios del tipo "cada mensaje nuevo" generan ruido y consumen uso ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

**Recorrer webs a golpe de clic.** Usar el ordenador implica hacer capturas y clics y esperar. La documentación recomienda un connector (conector) cuando existe, porque suele ser más fiable que una web ([The computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Si no hay connector y el Bot repite la misma tarea en el navegador, prueba un atajo. La primera vez, pide al Bot que observe las peticiones de red de la página y localice la API que hay detrás. Una API es la vía directa por la que un programa le pide datos a otro, sin pantallas de por medio. En las siguientes ejecuciones, el Bot llama a esa API directamente, que es más rápido y gasta menos tokens. Comprueba antes que las condiciones de la web permiten ese tipo de acceso.

{{live 7:55:39 "Encontrar la API detrás de una tarea de navegador que se repite"}}

**Contexto que el Bot ya no necesita.** Una conversación larga y mezclada supone más texto que releer en cada turno. Un Bot que hace demasiados trabajos distintos también pierde calidad (lección 11).

**Chats de grupo.** Cada Bot de un grupo lee los mensajes y puede responder. La documentación advierte que demasiados traspasos en paralelo crean trabajo duplicado y avisos ruidosos ([Message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration)). Como viste en la lección 12, suele salir más barato que un Bot mencione a otros dos una vez y trabaje con cada uno por separado.

## Una limpieza mensual de veinte minutos

Una limpieza mensual lleva unos veinte minutos:

1. **Abre Usage & Billing** y apunta cuánto uso de la semana se ha ido y en qué día.
2. **Repasa las routines de cada Bot.** Abre un Bot, elige **View conversation details** (ver detalles de la conversación) y después **Routines**. Revisa el horario y las últimas ejecuciones de cada una.
3. **Baja las frecuencias.** Para cada routine, elige el horario más lento que siga cubriendo la necesidad. Pausa las que nadie lee.
4. **Cambia el polling por eventos** cuando la fuente pueda enviarlos, con una regla de coincidencia estrecha.
5. **Añade una regla de silencio** a las routines de vigilancia, para que no avisen si no hay nada que requiera atención.
6. **Sustituye pasos de navegador por connectors** cuando exista uno en **Settings → Plugins** (ajustes, plugins).
7. **Recorta contexto.** Lleva las preguntas sueltas a un Bot cajón de sastre (lección 11) y pide a los Bots que olviden el contexto que ya no necesitan (lección 05).
8. **Pregúntale al propio Bot** cómo abaratar su trabajo y revisa la propuesta antes de aplicarla.

## Un Bot que revisa tu consumo

{{live 7:56:40 "Frecuencia de routines y pedir al Bot que se optimice"}}

Revisa con regularidad la frecuencia de las routines, prefiere las señales entrantes a un horario a ciegas y encarga esa misma revisión a un Bot. Un prompt que puedes adaptar:

```prompt
Revisa todas tus routines y las últimas 20 ejecuciones de cada una. Para cada
routine, dime cuántas veces encontró algo que necesitara mi atención y propón
un horario más lento o un disparador por evento donde dé el mismo resultado.
Enumera también los pasos de navegador que repites y que podrían usar un
connector o una llamada directa a una API. No cambies nada; mándame la
propuesta.
```

Para una routine de vigilancia, añade una regla de silencio:

```prompt
De lunes a viernes a las 9:00, revisa el panel de errores del proceso de pago.
Si los errores están dentro del rango normal, no me escribas. Si lo superan,
envía un solo mensaje con las cifras, una captura y el enlace.
```

También puedes quitar el contexto de trabajos terminados. En el directo se le pidió a un Bot que soltara lo que ya no necesitaba, lo hizo bien y después gastaba menos tokens:

```prompt
Olvida todo lo relacionado con cómo generamos tu foto de perfil.
```

{{live 8:11:06 "Pedir a un Bot que olvide contexto que no usa"}}

> [!TIP]
> Grok Bot puede preguntarte si mantener las routines activas cuando llevas mucho tiempo sin aparecer, y pausarlas si no respondes. Cuando vuelvas, revisa las routines pausadas en lugar de reactivarlas todas.

## Routines cada pocos minutos por si acaso

- **Programar cada 5 o 15 minutos "por si acaso".** Cientos de ejecuciones al día que casi nunca encuentran nada. *Qué hacer:* usa el horario más lento que funcione, o un disparador por evento.
- **Disparadores por evento demasiado amplios.** Cada mensaje de un canal concurrido lanza una ejecución. *Qué hacer:* filtra por un canal, una frase o un enlace concretos.
- **Dejar que un Bot recorra la misma web cada día.** Es lento, se rompe con facilidad y sale caro. *Qué hacer:* usa un connector, o haz que el Bot encuentre una API que la web permita usar.
- **Un solo Bot para todo.** Su contexto crece y la calidad baja. *Qué hacer:* separa por roles y ten un Bot cajón de sastre para preguntas sueltas.
- **Coordinar a través de un chat de grupo grande.** Los Bots se responden entre sí y repiten trabajo. *Qué hacer:* usa traspasos directos con un único responsable por etapa.

## Menos ejecuciones, mejor enfocadas

- El uso sale del trabajo del modelo, es decir, de los pasos, el texto leído, las capturas y las ejecuciones. Los planes incluyen uso semanal, que consultas en **Usage & Billing**.
- Cuenta las ejecuciones de una routine antes de programarla y prefiere disparadores por evento estrechos al polling.
- Prefiere los connectors a los clics. Para trabajo de navegador repetido, valora una llamada directa a una API donde la web lo permita.
- Mantén el contexto ligero separando roles, usando un Bot cajón de sastre y pidiendo a los Bots que olviden lo que ya no necesitan.
- Pide a un Bot que audite sus propias routines y proponga ahorros, y revisa la propuesta antes de aplicarla.
