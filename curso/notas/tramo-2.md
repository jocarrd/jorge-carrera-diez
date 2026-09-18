# Notas del tramo 2 (2:11:11–4:22:26)

## Resumen del tramo

El equipo del directo (Lauren, Roshan y Matt) monta en directo una empresa ficticia, "Ship by Thursday": una plataforma para organizar pop-ups de comida en San Francisco, que además usarán para montar su propio pop-up. Por el camino crean bots especializados (prototipador, ingeniero, revisor, marketing, ops, director creativo, investigación), generan prototipos HTML dentro de Grok Bot, conectan GitHub, Vercel, Notion y PlanetScale, y delegan el código a los Cursor Cloud Agents. Entre medias hay dos invitados de negocio (Peter Yang y Cody Sanchez) que dan consejos de validación, distribución y marketing. Desde 3:53:37 empieza el taller "Grok Bot para ingenieros" de Linxi, con los conceptos del producto (24/7, memoria, rutinas, integración con Cursor, control del ordenador remoto), sus casos de uso y una demo de Marketplace y de bots que se pasan contexto entre ellos.

## Conceptos

### Modelo frente a harness
Grok es el modelo que hace el trabajo; el harness es el código que ejecuta el modelo. Grok Bot es un harness ligero pensado para orquestar y automatizar, no un harness de programación como "Grokbuild". Para el trabajo de ingeniería serio se usa el harness de Cursor. Marca: 2:25:29.

### Prototipos HTML renderizados dentro de Grok Bot
Grok Bot puede devolver HTML y CSS que se renderiza directamente en la app, sin desplegar nada. Sirve para prototipos rápidos y desechables de baja fidelidad. Marca: 2:18:18.

### Contexto
El contexto es la información que se le da al bot. Hay que pasarle lo que el equipo tiene en la cabeza, con una descripción simple y concisa, porque la IA se apoya en lo que recibe: con mala información da malos resultados. Marcas: 2:15:17 y 2:34:40.

### Bots especializados por rol ("empleados bot")
Se crean varios bots, cada uno con un papel: prototipador ("Grok Pot"), ingeniero (Tater), revisor de PR (Hashbrown), marketing, ops, director creativo, investigación. El prototipador se reserva para prototipos desechables y el ingeniero decide el stack y construye. Marcas: 2:24:28, 2:36:47, 3:49:32.

### Bot que crea otros bots
Tienen un bot cuya función es crear otros bots. En la transcripción sale como "Dr. Eggbot"; el nombre exacto no está claro. Marcas: 2:24:28 y 3:10:08.

### Bots proactivos con tareas programadas
Se le puede pedir al bot que monte cron jobs o tareas programadas para enviar actualizaciones periódicas, en vez de tener que preguntarle tú. Marca: 2:22:23.

### Cursor Cloud Agents
Son agentes que corren sobre el harness de Cursor, en la nube, cada uno con su propia máquina virtual: pueden probar la aplicación, hacer clic por ella y sacar trazas de CPU. Grok Bot los lanza y gestiona con solo pedirle al bot que genere un cloud agent. También puede ayudar a configurar el entorno de un repo existente para que los agentes sepan levantar la aplicación. Marcas: 2:46:39–2:47:41 y 3:55:44–3:56:44.

### Proyecto (project agent)
Es una especie de cloud agent especial pensada para proyectos largos. Guarda el contexto técnico de la aplicación, y el bot le va mandando mensajes cada vez que necesita más trabajo de ingeniería. El propio ponente dice que es "difícil de describir". Marca: 2:47:41.

### Integración de primera parte con Cursor Cloud Agents
Grok Bot tiene herramientas propias para lanzar cloud agents, leer sus transcripciones (lo terminado y lo que está en curso) y responderles con seguimientos. También puede arrancarlos en un "private worker", por ejemplo un Mac propio. Todo lo que se hace en la ventana de Cursor con cloud agents lo hace Grok Bot mediante llamadas a herramientas, sin manejar la interfaz. Marcas: 3:59:48 y 4:04:56.

### Plugins de Cursor en el repo
Los plugins de Cursor se pueden instalar en local o configurar en el repo como plugin del repositorio, y el bot o agente puede hacerlo por ti. En el directo instalan así "PStack" (nombre dudoso) y un "cursor team kit". Marcas: 2:49:42 y 3:50:33.

### Cursor Automations
Sirven para reaccionar a eventos. Ejemplo: cuando se abre una PR, se publica en Slack y una automatización la recoge, la revisa y quizá la fusiona. Corren sobre Cursor Cloud Agents y se disparan con triggers como un mensaje de Slack, así que el agente arranca solo, las 24 horas. Marcas: 3:50:33 y 3:55:44–3:56:44.

### Grok Bot: equipo de agentes autónomos
Grok Bot es un equipo de agentes de IA totalmente autónomos para cualquier tipo de trabajo, ingeniería incluida. Actúan como compañeros: se les etiqueta, se trabaja con ellos y crecen contigo. Corre 24/7, no depende de que tu portátil esté despierto y ni siquiera exige tener portátil. Gestiona agentes de programación: sobre todo Cursor Cloud Agents, pero "casi cualquier tipo". Marca: 3:58:47.

### Ordenador propio 24/7
Cada Grok Bot tiene su propio ordenador. Mandas la orden, cierras el portátil y el trabajo sigue. Marca: 4:03:54.

### Conexión con herramientas (MCP)
Se conecta a la mayoría de herramientas; en la charla se citan el MCP de Vercel, el de Slack y Notion. Como corre 24/7, puede vigilar señales (una build que falla) y ponerse a trabajar, o lanzar un despliegue a una hora concreta ("deploy 6 AM tomorrow"). Marcas: 4:00:52 y 4:08:01.

### Memoria
La memoria persiste lo que le dices al bot durante mucho tiempo. Cada bot tiene nombre y memoria propia, así que no se satura con recuerdos que no tienen que ver con su tarea. Lo que aprende lo aplica después, por ejemplo en los prompts que manda a los cloud agents, y no hace falta repetírselo. Marcas: 4:01:53 y 4:02:53.

### Rutinas
Aparecen junto a la memoria ("memories and routines") como tareas recurrentes o disparadas por señales: webhooks de Slack, horarios. No se explican a fondo; su uso se ve en los casos de uso de 4:12:05 y 4:14:05. Marca: 4:01:53.

### Control del ordenador remoto desde los clientes
Desde iOS, Android, iPad o escritorio puedes tomar el control del ordenador remoto del bot para hacer clic, iniciar sesión en servicios difíciles, pasar verificaciones humanas o meter una contraseña sin dársela al bot. Marca: 4:04:56.

### Uso del ordenador por el bot (navegación web)
El bot puede navegar una web en su ordenador, hacer clic y enseñarte lo que pasa. Cubre los flujos a los que no se llega por MCP. Marca: 4:21:22.

### Plataformas disponibles
iOS, Windows, Linux y macOS; hace poco llegaron iPad y Android. Marca: 4:03:54.

### Marketplace
Es un catálogo de bots y flujos listos para instalar, como el "nightly audit engineer" o el de limpieza nocturna de código. Se llega desde "Grokbot team" y luego "View All". Marcas: 4:11:04 y 4:18:13.

### Organización en flota con jefe de gabinete
Un bot "chief of staff" recibe las peticiones y las reparte entre bots ingenieros especializados (UI, DevX, infra). Aunque usen el mismo modelo, separarlos evita que se pase el límite de contexto y deja que cada uno conserve su memoria e instrucciones. Normalmente solo hablas con el jefe de gabinete. Marcas: 4:16:08–4:17:11.

### Onboarding entre bots
En vez de repetirle las instrucciones a un bot nuevo, un bot existente le envía los flujos de trabajo y el nuevo los guarda en su memoria. Los bots hablan entre ellos y se confirman. Marcas: 4:18:13–4:20:18.

### Skills
Se nombran sin definirlas: "skills" del bot (una skill de escaneo de código, las "nightly audit skills") que pueden ejecutarse dentro del repositorio a través de un cloud agent. Marcas: 4:07:58 y 4:20:18.

## Demos paso a paso

### Demo 1: prototipos de landing con Grok Bot (Lauren)
- Inicio y fin: 2:11:11–2:30:36.
- Objetivo: prototipar la landing de la plataforma de pop-ups.
- Pasos:
  1. Antes de prototipar, mete contexto de calidad. Prompt leído: "what are some high-quality sources of good landing page design and find some references". Busca referencias para hacer una especie de moodboard (2:11:11).
  2. El bot encuentra galerías de landings y se le pide que elija unas cuantas direcciones (2:12:14).
  3. Dictado por voz ("stream of consciousness") con la idea del negocio: plataforma de pop-ups, dogfooding con un pop-up propio y la duda de si hacen falta varias landings (2:13:14–2:14:16).
  4. Al final del dictado: "restate to me what I just said in your own words so I know you understood me" (2:15:17).
  5. El bot resume y sugiere que el cuello de botella no son las landings sino el primer ciclo: local, operadores, cocineros y, después, asistentes (2:16:17).
  6. Salen tres prototipos HTML/CSS renderizados en Grok Bot (2:18:18).
  7. Feedback: "demasiado aburrido, demasiado soso", y se piden prototipos nuevos (2:24:28).
  8. Salen prototipos más divertidos y eligen el estilo "night market pink" (2:25:29, 2:30:36).
- Resultado: dirección visual elegida, sin desplegar nada.

### Demo 2: crear un bot ingeniero y decidir el stack
- Inicio y fin: 2:24:28–2:27:30.
- Pasos:
  1. Piden al bot que crea bots ("Dr. Eggbot") un "cracked engineer bot" para pensar el stack y cómo construir.
  2. El chat propone nombres y eligen "Tater".
  3. Instrucción a Tater para que piense el stack de la plataforma, con preferencia por PlanetScale (y lo que suena como "Brazil") y opciones razonables, evitando "debates interminables de stack".
- Resultado: bot ingeniero creado.

### Demo 3: repo, despliegue en Vercel, Notion y PlanetScale
- Inicio y fin: 2:31:37–2:45:36.
- Pasos:
  1. Crean un repo vacío en GitHub ("popup.git") y lo comparten en Slack (2:31:37).
  2. Crean un equipo en Vercel y añaden miembros como owner (2:34:40).
  3. Mientras hablan, el bot ya sube un index.html con los estilos en línea (2:35:42).
  4. Conectan Vercel al repo: botón Deploy, autorizar Vercel y configurar GitHub (2:35:42–2:36:47). Despliegues automáticos desde main: "just push to main" (2:38:51).
  5. Conectan Notion ("notion MCP") (2:38:51–2:39:52).
  6. Prompt al bot: "We've deployed the landing page already. But obviously, we need to connect the landing page to actually store the signups somewhere. So for now, could you connect it to Notion and make a little Notion database for us?" (2:39:52).
  7. Cambian de idea y van directos a la base de datos real: "Let's use PlanetScale Postgres instead". Revisan el plan del bot y quitan lo "nice to have", pagos incluidos (2:41:08).
  8. Mientras llegan las credenciales: "try to unblock yourself as much as possible and think about the table design and maybe set up some dependencies for us" (2:44:34).
- Resultado: landing desplegada en Vercel; la base de datos queda pendiente de credenciales.

### Demo 4: bot generador de nombres de dominio
- Inicio y fin: 2:32:39–2:48:41.
- Pasos: se le pide a un bot (Steve, o el de marketing o director creativo) que proponga dominios. Ejemplos que salen: stall.run, nightmarket.app, popup.place, peanutpopup.com, hostapopup.com (2:33:39). Al final compran shipbythurs.day, posiblemente a través de Vercel (2:44:34, 2:48:41).

### Demo 5: Tater pasa a trabajar con Cursor Cloud Agents y un Proyecto
- Inicio y fin: 2:45:36–2:48:41.
- Pasos:
  1. Instrucción: decirle a Tater que "use Cloud agents going forward, maybe make a project agent" (2:45:36).
  2. Tater crea un proyecto nuevo para guardar el contexto técnico (2:47:41).
  3. Intentan poner un título o etiqueta al bot y parece que no se puede (2:47:41).
  4. Instrucción: "let's for now do all of our development, I guess somewhat locally, on either your Cloud machine or in the Cloud agents machine. And come back to me with a video or a screenshot. And we'll worry about deploying it later" (2:48:41).
  5. El bot abre una PR de unas 2.000 líneas. Nueva regla que se le da: "no pull requests, we ship to main for now" (2:50:50).
- Resultado: la ingeniería se delega a los cloud agents.

### Demo 6: instalar kit de Cursor y skills en el repo (Roshan)
- Momento: 2:49:42.
- Pasos: con el bot que crea bots instala el "cursor team kit", otras skills y "PStack", y los conecta a los Cursor Cloud Agents para escribir la landing de la empresa. No se enseña el resultado.

### Demo 7: bot de investigación a partir de los consejos de Cody
- Inicio y fin: 3:07:05–3:11:08.
- Pasos:
  1. Antes de crear el bot, definir el objetivo número uno del negocio: leads o registros por email (3:07:05).
  2. Prompt que sugiere Cody: "Pull me all the top restaurateurs in San Francisco, and then grab me five of the best websites, then give me the five best pop up pages on their websites, then give me the five best pop up restaurants done in any major city in the last six or 12 months, then put those all into a document" (3:09:06).
  3. Matt se lo pide al bot que crea bots: un bot de investigación que busque restauradores top de San Francisco, sus webs, pop-ups y empresas similares, y que use como base ("grounding") el documento fundacional de Notion (3:10:08).
  4. Añadidos que propone Cody: "how would the best restaurateurs like Danny Meyer position a pop up just like he did with Shake Shack", una landing con gancho de una línea más exclusividad, escasez, oportunidad y relevancia, y "what would make people talk about this in San Francisco?" (3:11:08–3:12:10).
- Resultado: bot de investigación en marcha; no se enseña lo que devuelve.

### Demo 8: fábrica de ingeniería de Lauren (bot revisor y automatización)
- Inicio y fin: 3:49:32–3:52:36 (lo contado; se montó fuera de cámara).
- Pasos:
  1. Crea el bot "Hashbrown", que revisa las PR que abre Tater.
  2. Añade "Pstack" al repo como plugin de Cursor del repositorio.
  3. Pide al bot que monte una Cursor Automation: al abrir una PR se publica en Slack, y la automatización la recoge, la revisa y quizá la fusiona.
- Resultado: en construcción.

### Demo 9: Marketplace y onboarding entre bots (Linxi)
- Inicio y fin: 4:17:11–4:20:18.
- Pasos:
  1. Ya ha instalado desde el Marketplace su bot ingeniero, que se conecta al repositorio y a Notion durante el onboarding (4:17:11–4:18:13).
  2. Instala el "nightly audit engineer" desde el Marketplace: "Grokbot team" → "View All" → nightly audit engineer. Empieza solo sus tareas de onboarding (4:18:13).
  3. El bot nuevo no conoce sus flujos de trabajo, así que se lo pide a su bot ingeniero existente. Prompt leído: "Hello. I have a new member in the team called nightly. Rename them to Steve and tell them how the engineering workflows are enforced." (4:18:13–4:19:15).
  4. El bot ingeniero (Craig) manda a Steve los requisitos: cómo está hecho el tablero de Notion, qué es "limpio", las fases del flujo y el lint. Steve lo guarda en memoria y se confirman entre ellos (4:19:15–4:20:18).
  5. Lanza la auditoría nocturna a mano, aunque normalmente corre a las 4 AM: "let Steve know to start a nightly audit workflow right now" (4:20:18).
- Resultado: la auditoría arranca; los hallazgos no llegan dentro del tramo.

### Demo 10: el bot comprueba un bug navegando la web
- Inicio: 4:21:22. Sigue en curso al final del tramo (4:22:26).
- Pasos: prompt "I think there is an issue with FlyloAir.com that user cannot check their previously booked flights. Can we check if it's true?". El bot navega la web en su ordenador y hace clic para enseñar qué pasa.
- Resultado: "it's checking"; se corta aquí.

## Consejos y buenas prácticas

- Mete contexto de calidad en el chat (referencias, fuentes) antes de pedir que construya. (2:11:11)
- Dicta por voz varios minutos y termina pidiendo "restate to me what I just said in your own words"; es más rápido que releer el bloque de texto. (2:15:17)
- Usa el prototipador solo para prototipos rápidos y desechables, y un bot ingeniero aparte para el stack y la construcción real. (2:24:28)
- Pasa de baja a alta fidelidad: prototipos en Grok Bot y después ingeniería en Cursor Cloud Agents. (2:25:29–2:26:29)
- Deja que los bots elijan el stack y evita los debates interminables mientras buscas encaje producto-mercado. (2:27:30)
- Mantén un documento de empresa conciso y dáselo a todos los bots para que compartan el mismo contexto. Simple es mejor: con mala información salen malos resultados. (2:28:31, 2:34:40)
- Haz los bots proactivos: que monten cron jobs o tareas programadas y te manden actualizaciones en lista numerada para responder punto por punto. Peter los tiene todos para que le rindan cuentas los viernes. (2:22:23)
- Si Notion no aguanta la carga, mejor ir directo a la base de datos real para no tener que arrancar lo provisional después. (2:39:52–2:41:08)
- Mientras esperas credenciales, pide al bot que se desbloquee solo: diseño de tablas, dependencias, desarrollo en la máquina del cloud agent con vídeo o captura de vuelta. (2:44:34, 2:48:41)
- Usa Grok Bot para orquestar y el harness de Cursor para programar. (2:45:36)
- Da reglas explícitas al bot (p. ej. "no pull requests, ship to main"). (2:50:50)
- No sobrediseñes la estructura de agentes al empezar: algo básico que se pueda ampliar. (3:51:36)
- No basta con "dejar correr a los bots"; hay que iterar y supervisar sin parar (Cody). (3:03:00)
- Guarda en la memoria del bot tus criterios de revisión: captura adjunta, tests que no sean falsos, pruebas de antes y después de rendimiento. Así el bot decide si algo está completo y, si no, pide lo que falta al cloud agent. (4:00:52, 4:07:58)
- Enséñale al bot a decir que no: por defecto acepta todo, así que marca límites y explica por qué. La memoria lo retiene. (4:10:03)
- Procura que el bot no se quede bloqueado en pasos de autenticación; el humano debe poder desbloquearlo fácil. (4:10:03–4:11:04)
- Separa bots por área (UI, DevX, infra) para no saturar el contexto y para que cada uno acumule su memoria; habla sobre todo con el jefe de gabinete. (4:16:08–4:17:11)
- Para incorporar un bot nuevo, deja que otro bot le pase las instrucciones en vez de copiarlas y pegarlas. (4:19:15–4:20:18)
- Programa la limpieza de código de madrugada: hay menos conflictos y los cambios son de poco riesgo. (4:11:04)
- Consejos de negocio de los invitados, útiles para los prompts del curso:
  - Diseña el negocio para hacer más de lo que te gusta (Peter). (2:19:19)
  - Sal al mercado cuanto antes y comprueba que pagan, no que digan que es buena idea (Peter). (2:20:20)
  - Intenta vendérselo a tres personas antes de construir (Cody). (2:57:57)
  - Primero orgánico en X y después anuncios (Cody). (3:00:58)
  - Con un bot de investigación, "imitate, iterate, innovate" (Cody). (3:08:06)
  - Ofrece un lead magnet que valga más que el email que pides (Cody). (3:16:15)
  - Guarda las pruebas sociales en un "proof vault" (Cody). (3:06:02)
  - Carga en el bot los mejores tweets (vía Tweet Hunter conectado a X) y pídele "steal the frame, not the exact verbiage" (Cody). (3:01:59)

## Limitaciones, avisos y cosas que aún no existen

- El nombre del bot no se generó bien al crearlo; lo tuvieron que poner a mano. "It's probably a bug that we need to fix". (2:11:11)
- Grok Bot es un harness ligero y los prototipos son de baja fidelidad. Para ingeniería seria se recomienda Cursor. (2:25:29)
- Petición de funcionalidad de Peter: que los humanos entren en la interfaz de Grok Bot para hablar con los bots en canales y colaborar entre personas y bots, sin pasar por Slack. Ahora "se siente solitario" hablar solo con tus bots. Respuesta: "It's in the feature queue". (2:23:25)
- Había una actualización disponible de la app y no la instalaron en directo por prudencia; enseñan lo rápido que publica el equipo. (2:30:36)
- Parece que no se puede poner título ni etiqueta a un bot. (2:47:41)
- El bot abrió una PR de unas 2.000 líneas sin pedirla. (2:50:50)
- Dudas sobre si Notion aguanta la carga como base de datos. (2:39:52)
- Problemas técnicos del directo con la compartición de pantalla (no del producto). (2:37:47, 2:51:51)
- Límites del contexto: cada bot tiene su límite y, si cambia entre demasiadas tareas, se puede pasar. Por eso se reparten en varios. (4:16:08)
- Los bots aceptan todo por defecto (feedback, bug reports) si no les pones límites. (4:10:03)
- Quedan tareas para humanos: dirección de producto, detalle de diseño, problemas de rendimiento y arquitectura. (4:09:01–4:10:03)
- Disponibilidad: iOS, Windows, Linux y macOS; iPad y Android recién publicados. (4:03:54)
- Invitado ausente: el siguiente invitado no pudo conectarse (sin relevancia para el producto). (2:44:34)
- No se mencionan precios en este tramo.

## Casos de uso

- Prototipar landings y moodboards con HTML renderizado en la app. (2:11:11–2:18:18)
- Seguimiento proactivo de métricas de landing o de prospección de restauradores, con informes semanales. (2:22:23)
- Equipo de bots de una startup: prototipador, ingeniero, revisor de PR, marketing, ops, director creativo, investigación. (2:24:28, 2:36:47, 3:49:32)
- Generar nombres de producto y dominios. (2:33:39)
- Conectar una landing a Notion o PlanetScale para guardar registros. (2:39:52–2:41:08)
- Investigación de mercado: restauradores top, webs y pop-ups de referencia, recogidos en un documento. (3:09:06–3:10:08)
- Plan de marketing a partir de la transcripción de una conversación con un experto. (3:13:11, 3:17:16)
- Dashboard de lanzamiento de un libro en Vercel (usuarios en tiempo real, pago frente a orgánico, CAC frente a AOV), hecho "en parte con Grok" por el equipo de Cody. (2:55:56)
- Flujo de PR: bot ingeniero abre la PR, se publica en Slack, bot revisor la revisa y se fusiona. (3:50:33–3:51:36)
- Desbloquear a compañeros cuando estás de viaje o dormido: el bot vigila Slack, revisa según tus criterios, responde y aprueba cuando se lo das por bueno desde el móvil. (4:05:57–4:07:58)
- Vigilar los reportes de bugs en X: comprobar si siguen pasando en main, arreglarlos y mandar la PR. (4:07:58–4:09:01)
- Revisiones de seguridad o búsqueda de la persona adecuada para revisar. (4:09:01)
- Limpieza de código nocturna (disponible en el Marketplace). A las 3 AM, un cloud agent de investigación revisa el monorepo: calidad, modularización, comentarios sobrantes y auditoría de seguridad. Por la mañana hay PR listas, que el cloud agent puede fusionar si cumple las condiciones (prueba end-to-end). (4:11:04–4:13:05)
- Herramientas internas sin dashboard: se menciona al bot en Slack con un email y una rutina o webhook lo añade a TestFlight. (4:13:05–4:14:05)
- Autoarreglo de CI y despliegues: cuando algo sale en rojo o hay una alerta, el bot investiga, lanza un cloud agent que lo arregla, lo fusiona según tus reglas y solo avisa a la guardia si no está resuelto en 10 minutos. (4:14:05–4:15:06)
- Despliegue programado ("deploy 6 AM tomorrow"). (4:00:52–4:01:53)
- Flota con jefe de gabinete y bots ingenieros de UI, DevX e infra. (4:16:08)
- Comprobar en una web real un bug que reportan los usuarios. (4:21:22)

## Dudas de la transcripción

- "Grokplot", "Grok Pot", "Grockbot", "Crocbot", "Grotbot", "Brock", "rock bot", "RockBot", "Grabot" y "Dropbox" (3:57:46–3:59:48) parecen ser todos Grok Bot. En 2:24:28, "Grok Pot's our prototyper" podría ser el nombre de un bot concreto o simplemente Grok Bot.
- Quién es "Steve" en la primera parte: parece el bot con el que habla Lauren por voz (2:14:16, 2:24:28, 2:45:36), pero en 2:24:28 "it messaged Grok Pot", como si Steve mandara mensajes a otro bot. En la demo de Linxi, "Steve" es el nombre que se le da al nightly audit engineer, además del bot de DevX (4:16:08).
- "Dr. Eggbot" (2:24:28, 2:49:42): nombre del bot que crea bots; hay que verificarlo.
- "PStack", "P-stack", "Pstack" (2:49:42, 3:50:33, 3:52:36): plugin o kit de Cursor con nombre dudoso. También "cursor team kit".
- "Grokbuild" (2:25:29): ¿harness de programación de xAI? Hay que confirmar el nombre.
- "friends coming from Brazil and PlanetScale" (2:26:29): "Brazil" es probablemente otro proveedor mal transcrito.
- "Hop up orphan omega.v" (2:38:51): parece la URL del despliegue; ininteligible.
- "notion MTP" (2:39:52): probablemente MCP de Notion.
- "Stand by for sign fellow" (2:39:52): ininteligible.
- "shipbythurs.day" (2:48:41): dominio comprado; hay que confirmar la grafía.
- "Swissak" (2:12:14): nombre de la empresa de los ponentes; ininteligible.
- "SpaceX AI" (3:53:37, 3:58:47): "joined Cursor, which is now SpaceX AI". Hay que confirmar la relación Cursor/xAI y el cargo de Linxi. También "live from San Francisco at Dreamforce" (3:52:36).
- "Grabot mobile" (3:53:37): la app móvil de Grok Bot, hecha por Linxi en tres semanas.
- "slash goal, slash loop" (3:55:44): comandos de Cursor; hay que verificarlos.
- "Open Cloud and the Hermit's agent" (4:02:53): probablemente OpenClaw y Hermes Agent. Y "lack the first party integration with the Grokbots" quizá debería ser "with Cursor".
- "Y claw bots" / "Y claw bot meetups" (3:12:10): probablemente meetups de OpenClaw (langostas).
- "caffeinated laptop" (4:02:53): alusión a `caffeinate` para mantener el portátil despierto.
- "monitor the Slack synced to the first party integration with Slack MCP" (4:07:58–4:09:01): habla de vigilar X, pero dice Slack; no queda claro si los reportes de X llegan a través de Slack.
- "kick off a task to start digging into whether the word it produces is still valid on main" (4:09:01): probablemente "the bug it reports".
- "adding people to the test file" (4:13:05): TestFlight.
- "Ling-Shi-Shi", "Link Sheets Engineer bar", "Hogan1QR" (4:16:08, 4:17:11): nombres de los bots de Linxi (jefe de gabinete, ingeniero, infra) mal transcritos.
- "the Flylo", "FlyloAir.com" (4:20:18, 4:21:22): web de ejemplo de la demo; nombre dudoso.
- Proyecto o "project agent" (2:47:41): hay que confirmar el nombre oficial de la funcionalidad en la documentación.
- "memories and routines" (4:01:53): confirmar si "Routines" es el nombre oficial de la funcionalidad de tareas programadas o disparadas.
- "private worker" (3:59:48): confirmar el nombre de la opción para ejecutar cloud agents en una máquina propia.
- Peter "Yang" y "V Cody Sanchez" (3:48:31, 3:18:17): nombres de los invitados; hay que confirmar la grafía.
