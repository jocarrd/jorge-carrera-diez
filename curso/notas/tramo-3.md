# Tramo 3: 4:22:27 a 6:32:52

## Resumen del tramo
El tramo tiene tres partes. Primero, el final de un taller de ingeniería (4:22:27–4:39:06): una ponente enseña cómo gestiona sus bots de ingeniería (Craig, Steve, Jenny y un jefe de gabinete) con un "playbook" compartido en Notion, un flujo de escalado P0 y una regla de pruebas en los PR. Después, una sesión de construcción en directo (4:39:06–5:53:01): Matt, Lauren y Roshan montan un negocio de pop-ups en San Francisco ("Ship by Thursday") con bots, agentes en la nube de Cursor, Slack y Notion. Es una sesión caótica y con problemas técnicos. Por último, la charla "Grokbot for PMs" (5:54:02–6:32:52), de Kevin DeParco y Roshan Sothani, del equipo de producto de SpaceX AI: la filosofía del producto, un equipo de bots con roles y una demo completa sobre la aerolínea ficticia "Fly Low Airlines" que va de la consulta de datos al prototipo, pasando por el PRD y el diseño. Termina con una pregunta del público sobre la memoria.

## Conceptos

### Grok Bot como "agente con ordenador que se siente como escribir a un compañero"
Grok Bot es un agente con su propio ordenador con el que hablas como hablarías con un colega por mensajería. La idea de diseño sale de tratar a los agentes como compañeros de trabajo y no como una caja de chat. Se busca que vuelvan con resultados, no con texto ni con preguntas, y que terminen los trabajos, pidiendo aprobación solo cuando haga falta. Se explica mejor en 6:00:09–6:01:10.

### Los cuatro principios del producto (el "colega")
1. **Unir varias herramientas**: un colega trabaja entre sistemas (Linear/Jira, Salesforce, Notion, Figma) y los conecta (5:57:04).
2. **Contexto de larga duración y aprendizaje**: aprende en el trabajo, crea su propia memoria e incorpora el feedback (5:58:06).
3. **Independencia**: trabaja por su cuenta y con sus propios accesos. De ahí sale que Grok Bot tenga su propio ordenador (5:58:06–5:59:08).
4. **Mensajería**: en vez de esperar turno, puedes mandar mensajes seguidos, interrumpir, cambiar de hilo y dirigir al agente sobre la marcha (5:59:08–6:00:09).

### Ordenador propio / máquina virtual
Cada Grok Bot tiene su propia máquina virtual en la nube. Desde ella navega por la web y puede usar tus credenciales en distintos servicios si inicias sesión. Si se atasca en ese ordenador, le puedes ayudar. En el taller de ingeniería se usa para que el bot navegue por la web y confirme un bug (uso del ordenador, "computer use"). Mejor explicado en 5:59:08 y 6:18:34.

### "Teach It to Task" (grabar flujos de trabajo)
Arriba a la derecha de la máquina virtual hay una opción para grabar tu flujo de trabajo en esa máquina. El agente lo observa, lo aprende y lo reproduce, y cada vez que lo ejecuta puede refinar esa skill. Está pensada para procesos complejos y repetitivos (por ejemplo, flujos de Salesforce) o para sistemas propios. Nombre según la transcripción: "Teach It to Task" (conviene verificarlo, ver Dudas). 6:19:37.

### Bots con nombre y rol
Se recomienda crear varios bots, cada uno con un rol (jefe de gabinete, responsable de ingeniería, data scientist, PM, diseñador, reclutador). Hay tres motivos: a las personas les cuesta menos saber a quién dirigirse, la memoria y el aprendizaje funcionan mejor cuando el bot está acotado a un rol, y es más fácil repartir trabajo en paralelo. Los roles pueden solaparse. 6:06:20–6:08:20.

### Comunicación entre bots (agente a agente)
Los bots se hablan entre ellos: se etiquetan en mensajes, se pasan contexto y coordinan en canales. En el taller, el jefe de gabinete da de alta a "Jenny" y habla con ella directamente. En la demo de PMs, Ashley le escribe a PM Pete, Pete le pasa el PRD a Emily y Pixel le pasa los diseños a Emily. Las interacciones pueden ser asíncronas y "fuera de banda". 4:24:35, 6:14:28, 6:21:39.

### Playbook compartido (gestionado por un bot)
Un bot "de operaciones" (Jenny) es dueño de un playbook en Notion con los flujos de trabajo del equipo. Cuando defines un flujo nuevo con un bot, ese bot se lo cuenta a Jenny, Jenny lo añade al playbook y lo anuncia a todos los bots de ingeniería. Así no tienes que copiar la instrucción en cada bot, algo que no escala con 10 o 20 bots. 4:23:30–4:31:48.

### Flujo de escalado P0
Es una definición de "urgente" que se le da al bot una sola vez: crear una rutina que cada 5 minutos revise los agentes en la nube, detecte si se desvían (por ejemplo, un `sleep 300`, salirse del objetivo o ir con demasiada cautela) y los interrumpa o los reconduzca. Así nadie tiene que vigilar las trazas desde el escritorio. 4:26:37–4:29:46.

### Rutinas
Son tareas programadas o recurrentes de un bot: informes diarios, informes cada hora durante un lanzamiento o un volcado periódico a Notion. En la demo se pide "Send me this as an update every morning at 6 a.m.". 6:12:26–6:13:27; también 4:27:40 (P0) y 5:34:25 (volcado a Notion).

### Agentes en la nube (Cursor Cloud Agents)
Los bots de Grok Bot pueden lanzar agentes en la nube que trabajan con una copia local del repositorio, instalan scripts de configuración y abren PR. Los prompts de esos agentes los escriben los propios bots. El bot vigila el agente y puede añadir otra capa de verificación. 4:25:36, 4:36:01, 6:23:41–6:24:42.

### Base de datos de tareas en Notion (bot de ingeniería del Marketplace)
El bot de ingeniería de la ponente, disponible en el Marketplace, trae una base de datos de Notion con cada tarea y la fase en que está. Así, un bot que gestiona unos 20 agentes en la nube no tiene que llenar su contexto limitado: consulta la base de datos cuando va a por la siguiente tarea. 4:33:57–4:34:58.

### Marketplace
Hay dos usos. Uno es conseguir bots ya hechos, como el bot de ingeniería con la base de datos de Notion (4:33:57) o "Dr. Eggbot", un bot que crea bots, destacado en el Marketplace (4:43:33). El otro es conectar herramientas a los bots: Notion, Slack, Figma MCP, Gmail y skills como la de diseño "S-tier" (6:08:20–6:09:22).

### Organizar los bots en la interfaz
Los bots aparecen en una lista a la izquierda. Se pueden fijar arriba, agrupar en secciones (por ejemplo, "leadership" o "engineering"), ocultar o desasignar. 6:08:20.

### Grupos / salas de bots
Se pueden juntar bots en grupos: un "EngPod" para hacer una standup, un equipo EPD (ingeniería, producto y diseño) o una "War Room" para triar incidencias. 6:09:22. En la respuesta final se habla de "group chats interface" (6:31:49).

### Memoria individual y memoria compartida
Cada bot tiene su propia memoria, en la que escribe recuerdos y los va refinando. Además, hay una memoria compartida a la que pueden aportar cuando hay algo que el equipo debe recordar. Un prompting interno decide cuándo usar cada una. 6:30:47–6:31:49.

### Skills
Son capacidades y contextos que se le cargan a un bot. Ejemplos: la skill de PRD de PM Pete (requisitos P0/P1/P2), la skill de diseño "S-tier" de Pixel, "make interfaces feel better", "Create Verification Skill" (a través del plugin "PStack") y las skills aprendidas con Teach It to Task. 4:48:44, 6:16:32, 6:05:19.

### Skill de verificación ("Create Verification Skill")
Permite que el bot arranque la aplicación, saque trazas y capturas y depure sin depender del humano. Tiene dos partes: (1) una CLI o script estándar para interactuar con la app de forma determinista, en lugar de que cada bot improvise sus propios scripts, que gastan tokens y no son reproducibles; y (2) un "feature map" que describe las funcionalidades de la app, cómo llegar a ellas, los atajos de teclado, etc. 4:46:38–4:50:47.

### Plugins (PStack, Resend)
Se mencionan plugins de Grok Bot: "PStack", que contiene la skill "Create Verification Skill" y se usa en la automatización de revisión de PR, y un plugin de Resend. 4:48:44, 4:51:48. Nombre de PStack sin confirmar (ver Dudas).

### Pruebas en los PR
Hay que exigir que cada PR incluya pruebas: capturas para cambios de interfaz, métricas de rendimiento para optimizaciones y vídeos. Los agentes en la nube pueden generar vídeos y meterlos en la descripción del PR si se les pide. 4:32:50, 5:27:18.

### Bugbots y "security comments"
Dentro del proceso de revisión de un PR aparecen bugbots, que detectan fallos que ha introducido tu agente, y una función de comentarios de seguridad que vigila fugas, gestión de sesiones, etc. Por el contexto parecen funciones de la plataforma de agentes en la nube, no necesariamente de Grok Bot. 4:34:58.

### Conectores de documentos (comentarios en Notion / Google Docs)
Los bots leen los comentarios de Notion. Puedes iterar un documento dejando comentarios y etiquetando al bot, como harías con un compañero. Según los ponentes, también funciona con Google Docs y otros conectores. 6:17:33.

### Integración con datos (data warehouse)
Un bot como Ashley se conecta al almacén de datos (se citan Databricks y Snowflake), genera las consultas SQL, las ejecuta y responde con cifras y gráficos. 6:11:25.

## Demos paso a paso

### Demo 1: Flujo P0 urgente y playbook compartido (taller de ingeniería)
- **Inicio / fin**: 4:22:27 – 4:33:57 (empezó antes de este tramo)
- **Objetivo**: arreglar con urgencia un bug que ha reportado un usuario sin que los agentes improvisen, y convertir la definición de "urgente" en un flujo común a todos los bots.
- **Pasos**:
  1. El bot Craig navega por la web con su ordenador para confirmar el bug (4:22:27). Resultado: "It's confirmed... SlashTrips is a stub, while the navigation still links there. There's no check today for a previously booked flight" (4:25:36).
  2. En paralelo, el jefe de gabinete da de alta a un bot nuevo, "Jenny", como jefa de operaciones y dueña de un playbook en Notion. Los dos hablan de agente a agente (4:23:30–4:24:35).
  3. Mientras tanto, el bot Steve, sin instrucciones del momento, gracias a las que tiene integradas, investiga mejoras en el código, lanza agentes en la nube y convierte los resultados en PR (4:25:36).
  4. La ponente escribe a Craig la definición de P0 (prompt aproximado, tal como se lee): "Treat as P0. You need to set up a routine that checks cloud agent. Every five minutes, check if they are off the track, such as running a long sleep like sleep 300, or going off our goal, being too conservative... interrupt and nudge them at a time you found them going off because I need this urgently" (4:26:37–4:29:46).
  5. Pulsa **Reply** sobre el mensaje de Craig para citar el contexto y escribe: "Fix this issue urgently. It's a P0" (4:29:46).
  6. Le pide a Craig que hable con Jenny para meter el flujo P0 en el playbook y a Jenny que lo anuncie a todos los bots de ingeniería (4:29:46–4:30:48).
  7. Jenny lo anuncia: "The P0 Urgent is now a standing operations" (4:32:50).
  8. Añade otra regla al playbook a través de Craig: "every single PR comes with proofs, like screenshots for UI changes and perf metrics for performance improvements" (4:32:50).
- **Resultado**: el flujo P0 y la regla de pruebas quedan en el playbook y todos los bots los conocen sin que haya que decírselo a cada uno.

### Demo 2: Revisar un PR de un agente en la nube con pruebas
- **Inicio / fin**: 4:33:57 – 4:36:01
- **Objetivo**: revisar el trabajo que Steve y los agentes en la nube han dejado listo.
- **Pasos**: Steve avisa de que un PR está listo, con limpieza incluida. Se hace clic para ir al PR. Se ve otro PR ("trust polish") pasando por bugbots y comentarios de seguridad. Se abre un PR de un agente lanzado antes de la charla, que trae capturas de lo que ha hecho y un prompt escrito por el propio bot.
- **Resultado**: con las capturas, la ponente se ve con confianza para hacer el merge sin mirar lo que hizo el agente.

### Demo 3: Canal de revisión de PR en Slack con automatización de Cursor
- **Inicio / fin**: 4:44:34 – 4:46:38
- **Objetivo**: que los bots publiquen sus PR en un canal de Slack y se revisen solos.
- **Pasos**: se crea un canal de revisión de PR en Slack. La ponente o sus bots publican ahí los enlaces a los PR. Una automatización de Cursor, que por ahora es solo un prompt, se dispara con cada mensaje del canal y revisa el PR con "P-stack", comprobando corrección, riesgo y tests que faltan. Se prepara también un canal de bugs con una automatización parecida.
- **Resultado**: automatización básica en marcha. La idea es ir afinándola y, más adelante, llevar al canal el feedback de X para abrir PR automáticamente.

### Demo 4: Crear una skill de verificación
- **Inicio / fin**: 4:46:38 – 4:50:47; retomada en 5:15:42, 5:27:18 y 5:43:50
- **Objetivo**: que los bots puedan ejecutar y verificar la app por su cuenta.
- **Pasos**:
  1. Prompt a Steve: usar PStack para ejecutar la skill "Create Verification Skill". Steve la delega en el bot "Tater" (4:47:42).
  2. Le pregunta a Steve: "what's the status on tater?" (4:47:42).
  3. Tater lanza un agente en la nube que construye la skill (4:48:44).
  4. Aparece el PR de verificación y se revisa (5:15:42).
  5. Al ver que los PR no traen vídeos, pide actualizar la skill para que se aplique siempre ("always applied", "disable model applications") e incluya vídeos, también para cambios de backend (5:27:18–5:28:23).
  6. PR 16: la skill de verificación, ya más genérica, se usa al menos una vez y se hace merge (5:43:50–5:44:54).
- **Resultado**: skill de verificación fusionada. Algunos PR siguen sin vídeos ni capturas y se pide a Steve que los complete (5:47:03).

### Demo 5: Sesión de construcción "Ship by Thursday" (pop-up en San Francisco)
- **Inicio / fin**: 4:41:32 – 5:51:55
- **Objetivo**: montar en tres días un negocio de pop-ups con bots, empezando por un restaurante, que acaba cambiando a una exposición de arte.
- **Pasos, resumidos por bloques**:
  - Conectar la organización de GitHub y elegir repositorios en los permisos de los agentes en la nube de Cursor (4:41:32–4:42:33).
  - Crear bots con "Dr. Eggbot", el bot de Lauren para crear bots, que está en el Marketplace: un bot priorizador y otro de investigación de operadores y restauradores (4:43:33).
  - Landing: dominio conectado, formulario enlazado a una base de datos en PlanetScale. Un "founding eng" bot rediseña a partir de una transcripción dictada: interfaz minimalista, alta por email para invitados y un botón arriba a la derecha para restauradores (4:51:48–4:53:48).
  - Waitlist y email con Resend: hay plugin de Resend, verificación de dominio y DNS en Vercel, y correo de confirmación (4:50:47, 5:28:23, 5:48:06).
  - Pedirle a Steve, en "potato mode" y con Tater lanzando un agente en la nube, varios prototipos de una herramienta para buscar restaurantes: mapa, búsqueda por cocina o ubicación, llamadas rápidas y búsqueda de responsables. Le añade "restate in your own words before executing" (5:07:26–5:09:28).
  - Bot de investigación que saca unos 15–20 caterings o negocios con email y teléfono (5:09:28, 5:12:31).
  - Autenticación: se descartan Clerk y WorkOS y se usa "Vercel deployment protection" para el prototipo (5:12:31–5:14:39).
  - Bot "knowledge base manager" creado con Dr. Eggbot: vigila las conversaciones de los otros bots, solo actúa cuando le llaman y actualiza Notion de forma selectiva ("check with me first") (5:16:50–5:17:52). Más tarde se le pone un trabajo: "every five minutes, ping the active bots, extract... the most important details and drop it in Notion" (5:34:25).
  - Bot de marketing: las 50 mejores esquinas de SF para pegar flyers, el titular del flyer y un canal de marketing en Slack (5:14:39, 5:22:59, 5:26:01).
  - Bot "host finder" con criterios de venue: partir de sitios conocidos (the Pearl, Dogpatch Studios), evitar instalaciones públicas o del NPS por los plazos de permisos y buscar caterings o venues que ya tengan licencia de alcohol (5:35:27).
  - Bot de menús que busca en Yelp los platos mejor valorados (5:38:37).
  - Cambio de idea a exposición de arte y se avisa a Steve (5:39:38–5:42:50).
  - Revisar PR: 13 o más PR abiertos, muchos de ellos prototipos (5:44:54).
- **Resultado**: landing con base de datos y email, varios bots trabajando, investigación volcada en Notion, prototipos en PR y cambio a pop-up de arte. No se llega a ver la herramienta de venues terminada.

### Demo 6: Recorrido por la interfaz de Grok Bot (charla para PMs)
- **Inicio / fin**: 6:08:20 – 6:10:24
- **Pasos**: lista de bots a la izquierda; bots fijados arriba; secciones ("leadership", equipo de ingeniería: Einstein, Igor, Nova, Larry, Eileen); ocultar o desasignar bots; Marketplace con herramientas conectadas (Notion, Slack, Figma MCP, Gmail) y la skill de diseño "S-tier"; grupos de bots (EngPod, EPD, War Room).
- **Resultado**: se enseña el entorno de demo de "Fly Low Airlines".

### Demo 7: Del dato al prototipo en Fly Low Airlines
- **Inicio / fin**: 6:10:24 – 6:25:44
- **Objetivo**: detectar un problema en el embudo de compra y llevarlo a PRD, diseño y prototipo solo con bots.
- **Pasos**:
  1. A Ashley (data science): "how many people purchased tickets yesterday on mobile versus web". Resultado: unos 1.400 billetes, 58 % web y 42 % móvil (6:10:24–6:11:25).
  2. Siguiente mensaje, con erratas incluidas: "how many families were flying. Help us visualize these with charts". Resultado: gráficos por tipo de viajero (solo, pareja, familia, grupo); las familias son el 25 % (6:11:25–6:13:27).
  3. Convertirlo en rutina: "Send me this as an update every morning at 6 a.m." (6:13:27).
  4. Revisar un embudo de compra en móvil que se había pedido antes (6:13:27–6:14:28).
  5. Responder en el hilo a ese mensaje: "looks like a big fall off when people are choosing seats on mobile. Work with PMP to generate a product spec to optimize our mobile funnel", etiquetando a PM Pete (6:14:28).
  6. Ashley corrige a los humanos: la mayor pérdida está entre la búsqueda y la selección de tarifa, no en la de asiento. Le escribe a Pete con el hallazgo (6:15:28).
  7. Pete genera un PRD en Notion con requisitos P0/P1, entre ellos rediseñar los resultados de tarifas en móvil, una comparación más rápida y "honest fare proof on the card" (6:15:28–6:16:32).
  8. Pedirle a Pete que le pase el PRD a Emily (responsable de ingeniería) para prototipar, y a Pixel que haga diseños para cada P0 (6:18:34).
  9. Se abre la máquina virtual del bot y se enseña "Teach It to Task" (6:18:34–6:19:37).
  10. Pixel entrega dos opciones, A y B. El público vota A con aplausos y se pide pasar la maqueta A a Emily para actualizar el prototipo (6:21:39).
  11. Emily divide las prioridades en trabajo acotado para cada ingeniero y les explica el contexto. Nova pregunta si crear un PR o agente ("VR", ver Dudas), se le dice que sí, lanza un agente en la nube y lo vigila (6:22:40–6:23:41).
- **Resultado**: flujo completo, de pregunta de negocio a datos, PRD, diseños y prototipos en marcha con agentes en la nube. El resultado final no se enseña ("gonna cook on this in the background").

## Consejos y buenas prácticas
- No quieres que el agente adivine: quieres resultados deterministas. Si le dices "urgente", puede saltarse pasos o inventar para ir más rápido, así que define qué significa urgente (4:22:27).
- No repitas el mismo prompt: extrae la instrucción a una capa superior, un playbook o un bot que avise a otros (4:23:30, 4:37:03–4:38:05).
- No hace falta escribirlo todo como skill ni con prompts largos: díselo una vez en un mensaje normal, como a un compañero, y ve afinándolo con el uso (4:28:44).
- Usa **Reply** para citar el mensaje y darle contexto al bot (4:29:46).
- Centraliza los flujos en un bot dueño del playbook en vez de copiarlos en cada bot, porque no escala (4:29:46).
- Exige pruebas en cada PR (capturas, métricas, vídeos) y revisa resultados y pruebas en lugar de las trazas del agente (4:32:50, 5:27:18).
- No satures a un bot con demasiadas tareas a la vez, porque pierde contexto. Usa una base de datos externa de tareas (Notion) como memoria de trabajo (4:33:57).
- Trata a los bots como becarios con talento: habla con ellos por mensajes, sin pensar en "invocar skills" (4:37:03).
- Monta un bucle de feedback completo (señal de éxito o fallo) para cualquier tarea de ingeniería. El más fácil es que el agente controle la web con el uso del ordenador (4:38:05).
- Las skills de verificación son clave para que el bot no dependa de ti. Dale una CLI o script estándar y un "feature map" en vez de dejar que improvise scripts (4:46:38–4:50:47).
- Haz el trabajo a mano antes de automatizarlo, sobre todo si todavía no conoces el dominio (5:03:23).
- Pide al bot "restate in your own words before executing" antes de ejecutar prompts largos (5:09:28).
- Para Notion como fuente de verdad: que un bot gestor de conocimiento actualice de forma selectiva y consulte antes para evitar spam. Trátalo como un git log (5:16:50, 5:35:27).
- El repositorio puede ser la fuente de verdad del sistema de diseño y del código (5:19:55, 5:28:23).
- "Your code base is a form of memory": la arquitectura y las restricciones del stack hacen que los agentes sean más listos por defecto (5:20:56).
- Al dar criterios a un bot de búsqueda, parte de ejemplos de calidad que ya conozcas y trabaja hacia atrás (5:35:27).
- Crea varios bots con rol y nombre: es más fácil saber a quién hablar, la memoria se acota mejor y el trabajo se paraleliza (6:06:20–6:08:20).
- Patrón útil: mandar mensajes a seis bots a la vez y luego juntar los resultados, como las tareas que salen de una reunión (6:07:20).
- Conecta a los bots todas las herramientas con las que trabajas, porque rinden mucho más (6:09:22).
- Monta rutinas de datos (informes diarios, o cada hora en lanzamientos importantes) en vez de abrir dashboards (6:12:26).
- Revisa como humano, añade tus ideas e itera. La demo lo hace de una vez, pero en la práctica hay más iteración (6:17:33).
- Itera documentos dejando comentarios en Notion o Google Docs y etiquetando al bot (6:17:33).
- Carga en el bot diseñador el contexto del sistema de diseño (Figma, fuentes, colores, patrones de UX, prohibiciones como "never make X buttons in the left corner") para no empezar de cero cada vez (6:20:37).
- Los agentes suelen hacer mejores prompts que las personas: dale al equipo el objetivo y deja que decidan el contexto y el reparto (6:22:40).
- Decide cuánta intervención humana hace falta según el riesgo del cambio: los de bajo riesgo pueden ir solos y los importantes piden demo o prototipo (6:24:42).
- Dale al agente un entorno para verificar su trabajo y herramientas para que tú también puedas verificarlo (6:24:42).
- Los bots no son buenos el día cero: hay una fase de onboarding con skills, contexto y enseñanza (6:26:46).
- Reduce el ruido: en las rutinas, dile al agente que si no hay nada importante no te avise o lo resuelva solo (6:27:46).
- "Agents all the way down": bots que gestionan bots que coordinan agentes en la nube (6:27:46).
- Para casos complejos, separar roles ayuda, aunque un único bot "builder" que haga ingeniería, producto y diseño también puede funcionar (6:31:49).

## Limitaciones, avisos y cosas que aún no existen
- Si se le insiste demasiado a un bot con muchas tareas a la vez, empieza a perder contexto (4:33:57).
- Los agentes de código a veces tardan muchísimo, lo que choca con lo urgente. Por ejemplo, hacen `sleep 300` esperando a tests que duran un minuto (4:26:37–4:27:40).
- Problemas técnicos en directo: la pantalla compartida se congela en Slack y no se puede enseñar la de Lauren durante un buen rato (4:44:34, 4:48:44).
- Un bot de Matt no accedía a los repositorios. Parece que se había usado el conector equivocado. Se proponen dos arreglos: volver a autenticar con GitHub o instalar la CLI de GitHub (5:06:25, 5:29:23).
- La creación de claves API y la configuración del entorno siguen siendo manuales. Dicen que están trabajando para que deje de ser así (5:15:42).
- Un bot no recogió en Notion la fecha decidida (15 de octubre) (5:16:50).
- Riesgo de llenar Notion de spam con volcados automáticos (5:35:27).
- Los agentes en la nube no meten vídeos en el PR si no se les pide. La skill de verificación no los incluía al principio (5:27:18).
- Varios PR aparecen sin vídeos ni capturas (5:47:03).
- Al agrupar los PR por estado, uno parece atascado ("He's all stuck"), sin confirmar (5:51:55).
- Los bots no lo saben todo aunque se les dé contexto: hace falta revisión humana (6:17:33).
- Los bots no son buenos el día cero (6:26:46).
- La gestión de la memoria (individual o compartida) se sigue experimentando ("We're also experimenting with this a little bit") (6:31:49).
- Reto "Grokbot Galaxy livestream challenge": enviar plantillas para Grok Bot, o enseñar cómo lo has integrado en tu trabajo. El premio es un viaje con acompañante a Starbase (Texas) para ver un lanzamiento de Starship, y los finalistas ganan una visita a Hawthorne. Las bases están en un post de la cuenta @Grok en X; hay que seguir a @GrokBot. El ganador se anunciará "soon" (5:49:35–5:50:39, 6:29:47).
- Dato interno: Grok Bot supone un porcentaje de dos cifras de los PR fusionados en SpaceX AI (6:03:13).
- No se mencionan precios.

## Casos de uso
- Confirmar bugs reportados por usuarios navegando por la web con el ordenador del bot (4:22:27).
- Bot que, sin que se lo pidan, busca mejoras en el código, lanza agentes en la nube y abre PR (4:25:36).
- Vigilar agentes en la nube cada 5 minutos y reconducirlos (flujo P0) (4:26:37).
- Bot de operaciones dueño del playbook del equipo que anuncia los cambios a los demás bots (4:24:35).
- Revisión automática de PR publicados en un canal de Slack y triaje automático de bugs (4:44:34–4:45:37).
- Recoger feedback de usuarios en X y llevarlo a un canal de bugs para abrir PR (propuesto) (4:45:37).
- Crear bots con un bot ("Dr. Eggbot", la fábrica de bots) (4:43:33).
- Investigar negocios parecidos, restauradores o caterings con sus datos de contacto (4:43:33, 5:12:31).
- Conectar Grok Bot a un agente de voz para hacer llamadas (vídeo de Matt; se menciona "bland MCP") (5:03:23, 5:09:28).
- Bot gestor de conocimiento que mantiene Notion al día a partir de las conversaciones de los bots (5:16:50, 5:34:25).
- Marketing de guerrilla: esquinas para flyers, titulares y diseños de flyers (5:14:39, 5:22:59).
- Investigar permisos y plazos de venues (Fort Mason: revisión de 4 a 15 días hábiles) (5:33:25).
- Buscar ideas de menú a partir de los platos mejor valorados en Yelp (5:38:37).
- Jefe de gabinete (Cora) con acceso a email, calendario y Slack que aprende cómo trabajas (6:03:13).
- "Attention list": comparar en qué has puesto tu atención con tu lista de prioridades (6:01:10).
- Investigación y contexto de clientes, analítica y data science bajo demanda (6:02:11, 6:04:18).
- Responsable de ingeniería (Emily) que reparte trabajo entre cinco bots ingenieros y ejecuta los bucles de verificación (6:03:13–6:04:18).
- PM Pete: redactar PRD y sintetizar insights de usuarios (6:05:19).
- Pixel: diseño con el sistema de diseño de la empresa en Figma (6:05:19, 6:20:37).
- Ray: reclutador para buscar candidatos y gestionar el pipeline de contratación (6:05:19).
- Informes cada hora durante lanzamientos de producto (6:12:26).
- Standups de bots, equipos EPD y "War Room" para incidencias (6:09:22).
- Enseñar a un bot flujos complejos de Salesforce del equipo comercial con Teach It to Task (6:19:37).
- Gestionar la bandeja de entrada y escalar solo los emails importantes (6:27:46).
- Mantener sincronizados varios repositorios o una base de conocimiento de requisitos en sistemas complejos (6:26:46).

## Dudas de la transcripción
- "GRACBA" (4:23:30): probablemente es Grok Bot mal transcrito. En "GRACBA or the autonomous coding" no está claro el término.
- "Scrockbots" (4:37:03), "ground bot" (4:38:05), "Graphbot" (5:03:23 y siguientes), "RockBot" (5:57:04, 6:08:20): todos parecen ser Grok Bot.
- Nombre del bot de ingeniería del taller: ¿"Craig"? ¿Y el del "chief of staff" del taller? No se dice su nombre.
- "fleet notion database" (4:33:57): ¿se llama así la plantilla del Marketplace?
- "trust polish, which is watching 3.3" (4:34:58): no se entiende. ¿Nombre de rama o PR y estado de CI?
- "security comment feature" y "bugbots" (4:34:58): ¿son de Grok Bot o de Cursor? Parecen de Cursor (Bugbot).
- "P-stack" / "PStack" / "Pstack plugin" (4:45:37, 4:47:42, 4:48:44): nombre exacto del plugin sin confirmar.
- "tater bot" / "Tater" / "potato mode" (4:47:42, 5:07:26): ¿un bot de Lauren o un modo real del producto?
- "Dr. Eggbot" (4:43:33): ¿nombre exacto del bot del Marketplace?
- "use ask printer to use to prototype a cloud agent" (4:53:48): frase ininteligible.
- "founding end spot" (4:52:48): probablemente "founding eng bot".
- "let's update our verification skill to be always applied. You know, disable model applications" (5:27:18): parece referirse a la configuración de reglas o skills ("always apply" frente a "model invocation"). Verificar el término.
- "bland MCP" (5:09:28): probablemente el MCP de Bland AI (llamadas de voz).
- "Clerk has an MTP" (5:13:38) y "Just task grab and have an MTP" (5:30:24): "MTP" probablemente es "MCP". La segunda frase no se entiende (¿TaskRabbit?).
- "Ocean" en "a marketing section in Ocean" (5:30:24): probablemente Notion.
- "Dogcrash Studios" (5:35:27): Dogpatch Studios.
- "teal draw" (4:55:59): tldraw.
- "Teach It to Task" (6:19:37): nombre del botón o función sin confirmar ("Teach it a task"?).
- "PMP" / "PM Pete" (6:05:19, 6:10:24): el bot de producto se llama PM Pete; la transcripción lo alterna con "PMP".
- "when Nova asked about creating a VR" (6:23:41): probablemente "a PR".
- "Honest fare proof on the card" (6:16:32): texto exacto del requisito del PRD sin confirmar.
- "Flylo Airlines" / "Fly Low Airlines" (6:10:24, 6:28:47): grafía del nombre de la empresa de la demo.
- "PR 16 has been event-y bound at least once" (5:43:50): ininteligible. ¿"has been verified/used at least once"?
- Ponentes de la charla para PMs: "Kevin DeParco" y "Roshan Sothani" (5:54:02). Verificar la grafía de los apellidos. En el directo aparece también "Rashawn" (4:42:33) para Roshan.
- "Einstein, Igor, Nova, Larry and Eileen" (6:08:20): nombres de los bots ingenieros, grafía sin confirmar.
- Reto: en 5:50:39 se dice "submit templates for Grokbot" y en 6:29:47 "show us how you've integrated GrokBot into your work". Verificar las bases en el post de @Grok.
- "SlashTrips is a stub" (4:25:36): la ruta `/trips`.
