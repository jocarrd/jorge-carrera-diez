---
id: "24"
module: 8
title: "Ventas y prospección"
description: "Bots que actualizan el CRM tras cada llamada, escriben con tu voz a partir de los correos que funcionaron y reparten la investigación de cientos de cuentas."
level: advanced
minutes: 9
objectives:
  - "Enseñar a un Bot a escribir como tú a partir de los correos que recibieron respuesta"
  - "Montar un equipo de prospección que se crea y se coordina desde un solo Bot"
  - "Repartir la investigación de muchas cuentas entre Bots en paralelo sin perder el control"
updated: "2026-09-17"
---

## Horas que no se pasan vendiendo

Por la tarde el estudio le preguntó a su becario qué hace viral un juego. Contestó que el boca a boca y publicar sin parar, y que en X están los primeros en probar cosas. Para Ship by Thursday, conseguir jugadores era su forma de vender. Los talleres de ventas y prospección enseñaron cómo se hace ese trabajo a escala con Bots.

Un comercial dedica buena parte de la semana a trabajo que no es hablar con clientes. Tiene que buscar a quién escribir, leer lo último que ha publicado cada empresa, redactar correos y apuntar en el CRM lo que se dijo en cada llamada. Un CRM es la herramienta donde el equipo lleva el seguimiento de clientes y oportunidades. Con prisa, los correos acaban pareciendo una plantilla con el nombre cambiado, y el CRM se queda sin actualizar.

La lección 19 enseñó Bots de fundador que preparan llamadas en solo lectura. Esta va un paso más allá, con Bots que sostienen el trabajo diario de ventas y prospección.

## Un Bot que hace, no uno que aconseja

Una comercial del taller contó su primer error con Grok Bot. Le pedía que investigara a un cliente, y el Bot le devolvía enlaces a webinars para que los viera ella. Le contestó que los viera él y le redactara el correo. Un Bot tiene ordenador propio y trabaja mientras duermes, así que puedes darle el trabajo entero, no solo la búsqueda.

### Tu voz, sacada de lo que funcionó

Conectar el correo no basta para que un Bot escriba como tú. El SDR del taller, la persona que busca clientes nuevos, filtró más. Le dijo al Bot que leyera solo los correos enviados a empresas de sus cuentas, que se quedara con los que recibieron una respuesta positiva y que diera más peso a los recientes. En su equipo, lo que funcionaba hace tres meses ya no funciona hoy. Después revisó borradores uno a uno y los criticó, hasta que dejaron de parecer plantillas.

### El CRM se actualiza solo

Tras cada llamada, un Bot lee la transcripción de la reunión y escribe los siguientes pasos en el CRM con un formato fijo: iniciales, fecha, lo que quiere el cliente y los próximos pasos. La comercial lo revisa y lo sube. Otro Bot con acceso al código responde preguntas técnicas en plena llamada, con un texto listo para pegar, sin tener que traer a un ingeniero.

### Un solo Bot al que hablar

En el taller de prospección, todo el equipo se creó a través del Bot jefe de gabinete. Así ese Bot sabe para qué sirve cada uno y a quién pasar cada encargo. Había uno para escribir correos, uno de búsqueda web, uno que resume por qué se ganaron ventas parecidas y otro para la bandeja de entrada. El comercial solo habla con el jefe de gabinete.

La comercial del otro taller lo hace al revés. Habla directamente con cada especialista, porque dice que así gasta menos uso. Las dos formas funcionan. Si dudas, descríbele tu trabajo a un Bot y pídele que te proponga cómo repartirlo.

### Una tropa para cientos de cuentas

Revisar 200 empresas cada día no cabe en una sola conversación. El Bot de búsqueda web tiene una "tropa" de Bots soldado en un chat de grupo. Reparte las empresas en tandas de 40, cada soldado investiga la suya con poco contexto y los resultados vuelven al grupo, donde se puede comprobar cada uno. Para investigar más cuentas, se añaden soldados.

## Montar la prospección sobre tus correos

1. **Crea el jefe de gabinete primero** y crea el resto de Bots a través de él.
2. **Conecta el correo y el CRM** desde **Settings → Plugins** (ajustes, plugins).
3. **Enséñale tu voz con un filtro.** Correos a clientes de tus cuentas, con respuesta positiva, con más peso a los recientes. Guarda la guía resultante como skill (lección 06).
4. **Revisa y critica diez borradores.** Di por qué cada uno no sirve hasta que ninguno parezca una plantilla.
5. **Automatiza la actualización del CRM** tras cada llamada, dejándola para revisar antes de subirla.
6. **Programa la prospección diaria** como routine: una lista priorizada y los borradores en tu correo, sin enviar nada.
7. **Añade una routine por evento.** Cuando una cuenta avanza de etapa en el CRM, se saca a sus contactos de la secuencia para no seguir escribiéndoles.

> [!WARNING]
> La documentación oficial pide que un Bot de prospección devuelva una lista para revisar y que "no envíe ni inscriba a nadie". Mantén los envíos detrás de tu aprobación y usa las redes profesionales solo como permitan sus condiciones.

## La mañana de un prospector con Bots

{{live d2 6:15:54 "Cincuenta prospectos priorizados cada mañana"}}

Cada mañana, una routine deja 50 prospectos nuevos ordenados por prioridad. Los cinco primeros son los que hay que atender ya. El jefe de gabinete mira el calendario y reserva huecos, un bloque de 15 minutos a las 9 para esos cinco y una hora a la 1 para el resto. Los borradores esperan en Gmail y, si quiere, el comercial le pide al Bot una nota de confianza de cada correo.

El contexto de las llamadas cambia los mensajes. Si el comercial de la cuenta habló ayer con una empresa y el cliente se quejó de tener demasiadas herramientas, los correos de hoy a esa empresa lo tienen en cuenta. Si en la llamada alguien dijo "habla con Simon, del equipo de IA", el Bot lo añade a la secuencia en lugar de dejarlo olvidado en una transcripción.

Una petición para empezar:

```prompt
Lee los correos que he enviado en los últimos seis meses a empresas de mis
cuentas del CRM. Quédate con los que recibieron una respuesta positiva y da
más peso a los de las últimas semanas. Escribe una guía breve de cómo escribo
en esos correos: apertura, longitud, tono y cómo pido la reunión. Guárdala
como skill "Correos de prospección". No envíes nada.
```

{{live d2 6:14:53 "La tropa de soldados investiga en paralelo"}}

## Errores del equipo comercial

- **Correos que solo cambian el nombre.** El cliente nota la plantilla y no contesta. *Qué hacer:* pide ejemplos, critica cada uno y exige que ninguno se parezca a otro.
- **Pedirle al Bot enlaces en vez de trabajo.** Sigues leyendo tú los webinars. *Qué hacer:* pídele que los vea y te entregue el borrador.
- **Crear un Bot nuevo para cada idea.** El equipo se vuelve un caos y el uso se dispara. *Qué hacer:* antes de crear otro, pregúntate por qué no puede hacerlo uno que ya tienes o una routine.
- **Routines cada pocos minutos.** Ruido y gasto sin resultado. *Qué hacer:* una o dos al día, o una routine que salte con un evento del CRM.
- **Enviar sin revisar mientras entrenas la voz.** Un correo malo llega a un cliente. *Qué hacer:* borradores hasta que confíes en ellos, y aun así revisa los importantes.

## Ventas con Bots, en corto

- Dale al Bot el trabajo entero: que vea el webinar y escriba el correo, no que te pase el enlace.
- Tu voz sale de los correos que funcionaron, con más peso a los recientes, y de muchas correcciones.
- Crea el equipo desde un Bot coordinador para que sepa a quién pasar cada encargo.
- Reparte la investigación grande en una tropa de Bots en un grupo donde puedas revisar cada resultado.
- Los envíos siguen detrás de tu aprobación.
