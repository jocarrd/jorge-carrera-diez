# Día 3 · tramo 1 (0:09:56–0:45:00)

## Estudio: arranque del día de lanzamiento (0:09–0:28)
- 0:09 Matt abre: "We're back for day three, and today we're shipping our company". Presentaciones: Matt (Developer Experience), Lauren "Potato" (trabaja en Grok Bot), Roshin (producto).
- 0:10 Promoción en directo: un mes gratis de Grok Bot para cuentas nuevas que se registren en diez minutos, creen un Bot y dejen **una routine programada**. Dicen que incluye unos 200 dólares de uso del plan más alto. Contador en pantalla y código QR.
- 0:12 Qué están construyendo: un **estudio de videojuegos**, y hoy lanzan su primer juego. Lauren montó por la noche lo que llaman una "software factory".
- 0:13 De dónde sale el juego: la primera versión era un piedra-papel-tijera con Elo y marcador, la jugaron y **no era divertida**. Rehicieron mecánicas inspirándose en juegos que les gustan.
- 0:13 **P-Stack**: el set de skills propio de Lauren, que funciona como plugin de Cursor y plugin de Grok Bot. Dentro hay una skill llamada **Potato Mode**.
- 0:14 Cómo se usa: `/potato mode` más "full autopilot this plan". Parte el plan en fases pequeñas, levanta agentes que implementan PRs cortos y otros que **verifican**: arrancan la aplicación, la recorren haciendo clic y buscan fallos. Con esa verificación los PRs se fusionan solos.
- 0:15 Resultado de la noche: **unos 168 PRs** cerrados. Rehicieron la interfaz, tocaron el backend, seguridad y capacidad de carga.
- 0:16 **Play**, el bot de QA: vigila cada PR y, cuando el CI está en verde, entra a jugar la partida entera por la interfaz. Conoce el motor del juego y deja sus pegas antes de fusionar. Es una routine que responde a un evento.
- 0:17 Lauren: no le gusta la palabra "factory", pero es la analogía más cercana. El fondo es automatizar lo repetitivo, y pone su propio ejemplo: evita mirar el correo porque le da pereza clasificarlo. Un Bot puede recorrer la bandeja, Slack o los PRs de GitHub.
- 0:18 **La idea que resume el día**, en boca de Matt: la fábrica es "montar buenos bucles de feedback para que los agentes puedan trabajar solos". Eso significa quitar los pasos manuales: clicar interfaces, validar que algo funciona, mirar logs. Si le pasas el contexto correcto a un agente, esos pasos se automatizan.
- 0:18 Y lo generaliza fuera del código: construir una empresa con IA es descomponer los flujos humanos, aislarlos y decidir qué parte debe hacer un agente. Matiz importante: puede que un agente **no deba** escribir tus correos, pero sí quitar el spam, darte de baja de listas y dejarte un borrador.
- 0:19 Enseñan la interfaz sin maquillaje: fallos de scroll, formulario de patrocinio mal colocado, recortes de CSS. "Si no te da un poco de vergüenza, has lanzado tarde".
- 0:20 El juego: nombre en clave **Cupcake**, batallas por cartas. Login con X, marcador global, modo invitado para jugar sin cuenta. Eliges una alineación y compites a tres rondas con emparejamiento.
- 0:21 Economía: empiezas con 10 de oro, hay tienda para comprar Bots y mejoras, y puedes vender los que no quieres. Cada Bot tiene stats y una habilidad distinta. Comentan renombrar el oro a "token".
- 0:21 Dato bueno para el curso: **los Bots del juego son Bots reales del marketplace de Grok Bot**, unos setenta, con avatares generados.
- 0:23 Plan de la hora siguiente: pulido de interfaz, pruebas de carga del backend, y un **bucle de feedback de usuarios** para recoger peticiones, guardarlas y priorizarlas.
- 0:24 Roadmap que dejan a la vista: diseño de audio con un bot de ingeniería de sonido (música generada con Suno) y un bot que prototipaba animación en 3D.
- 0:26 La propia emisión la llevan Bots: la escaleta y las notas de producción salen en pantalla. Un bot jefe de gabinete llamado **Steve**.
- 0:27 Enseñan un error de "Login with X" en directo y cómo lo tratan: mirar el lado del servidor y pasarle el problema a Grok Bot.

## Charla: Grok Bot para marketing operations y RevOps (0:34–0:45+)
- 0:34 Agentes siempre encendidos: no dependen de tu portátil abierto.
- 0:35 La frase que ordena la charla: **"build tools, not just rules"** — construir herramientas, no solo normas.
- 0:36 El problema del rol: en operaciones de marketing y ventas el trabajo se va en comunicar guías y esperar que cada equipo siga la checklist correcta. Con un Bot puedes montar **la aplicación interna** que ya respeta esas reglas por diseño. "Montas el juego al que juegan los equipos".
- 0:37 Su equipo de Bots, con nombres de instrumentos: **OP1** jefe de gabinete, **Fisher** receptor de todas las bandejas (correo, calendario, mensajes, Slack), **Juno** bot de producto para pensar casos límite y requisitos, **Owned** bot de ingeniería que conoce el CRM, el almacén de datos y el código interno.
- 0:38 **Demo 1: la lista de tareas que se completa sola.** Fisher tiene una routine programada que revisa las bandejas, saca lo nuevo y escribe a OP1 por su cuenta.
- 0:40 OP1 destila el volcado en tareas y subtareas, y separa lo accionable de lo que es solo informativo. Lee el hilo entero de Slack para deducir qué te están pidiendo de verdad.
- 0:41 Efecto que destaca: puede apagar las notificaciones porque sabe que los Bots vigilan los canales y le suben solo lo importante. Menos cambios de contexto.
- 0:42 La parte "que se completa sola": OP1 detecta una disputa de territorio entre comerciales y se la pasa a un **bot de planificación de territorios** con las reglas de reparto y el contexto del CRM. Ese bot deja un primer borrador del entregable. La persona valida.
- 0:43 **Demo 2: "una app de citas para leads".** Ataca el traspaso clásico entre marketing y ventas: marketing genera leads, ventas no los quiere, se quedan muertos y nadie devuelve información para afinar.
- 0:44 Cómo funciona: cada comercial entra y ve sus leads. Desliza a la izquierda para descartarlo y **tiene que dar un motivo**, que se escribe de vuelta en el CRM como toca. Desliza a la derecha y el lead entra en una secuencia de seguimiento.
- 0:45 Lo que gana la empresa: deja de ser una discusión sobre acuerdos de nivel de servicio y pasa a ser un dato, porque queda registrado por qué se descarta cada lead.

## Para el curso
- El hilo narrativo del día 3 es el cierre: de la idea del día 2 al lanzamiento real, con el público entrando a jugar.
- Conceptos nuevos que no estaban en los días 1 y 2: la fábrica de software con verificación automática, el bot de QA que juega, la idea de "herramientas en lugar de normas" y el bucle de feedback de usuarios.
- Contrastar con la documentación oficial antes de escribir: P-Stack y Potato Mode son de Lauren, no producto de xAI. El marketplace de Bots sí conviene confirmarlo en docs.
