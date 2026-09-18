# Tramo 1 (0:00:00–2:10:48)

## Resumen del tramo

Arranque del directo de tres días en San Francisco (junto a Dreamforce): Matt Palmer (developer experience), Roshan (producto) y Lauren ("potato", ingeniería de Grok Bot) se proponen montar una empresa desde cero en 72 horas usando Grok Bot. Entre 0:29:32 y 1:29:00 se emite la sesión "Grok Bot 101": Roman explica el origen y los tres principios del producto y Amrita hace una demo con tres bots (Data Dan, Slide Sonya y Email Ethan) que crean un formulario, aprenden una tarea por demostración, se piden cosas entre ellos y redactan un correo; termina con preguntas del público. Desde 1:30:57, con el invitado Peter Yang, el equipo vuelve al estudio: crea bots de investigación de mercado conectados a X, analiza las ideas que ha propuesto la audiencia, elige una "plataforma de pop-ups para restaurantes" y empieza a crear bots (prototipador, prospección, jefe de gabinete) con Dr. Eggbot.

## Conceptos

### Bot como compañero de equipo, no como tarea
Grok Bot sigue el "paradigma del compañero" frente al "paradigma de la tarea". No se abre un chat por tarea: se crea un bot para una unidad de trabajo o responsabilidad (p. ej. "Sales Outbound", "inbox manager") y se vuelve a él una y otra vez, de modo que aprende del usuario. La interfaz imita una app de mensajería (la comparan con iMessage), con los bots en la barra lateral izquierda. Explicado en 0:31:36–0:32:39 (Roman) y 0:39:49 (Amrita).

### Los tres principios de diseño del producto
Roman los resume así: (1) se siente como trabajar con compañeros, (2) todo se ejecuta en la nube y (3) cada bot tiene acceso a su propio ordenador, que maneja como lo haría una persona. Mejor explicado en 0:34:40–0:35:40.

### Ordenador propio del bot (computer use)
Además de integraciones, MCP y APIs, cada bot tiene un ordenador propio, una máquina virtual Linux, y puede usarlo como una persona: ver un vídeo, escuchar un pódcast o manejar software antiguo sin API. Desde la esquina superior derecha de la conversación se abre la vista de ese ordenador para ver qué hace el bot en directo. Así puede trabajar con herramientas sin MCP, como Google Forms o Qualtrics. Explicado en 0:33:39 (Roman) y 0:41:51 (Amrita).

### Aislamiento de los ordenadores
Cada bot tiene su ordenador aislado: un bot no puede entrar en el de otro, así que dos bots trabajan a la vez sin pisarse. Amrita edita unas diapositivas mientras el bot edita otras del mismo documento. 0:48:01.

### Ejecución en la nube, siempre activo
Los bots no corren en el portátil del usuario: siguen trabajando con la tapa cerrada, a las 2 de la madrugada o mientras duermes, y se puede hablar con ellos desde el móvil o el portátil. 0:34:40 y 1:20:43.

### Integraciones: plugins, MCP y conectores del marketplace
Desde la aplicación se ven y gestionan los MCP o plugins conectados al bot; también se le puede pedir al propio bot que configure uno. En el marketplace hay conectores, y el equipo conecta en directo el de X. Explicado en 0:42:51 y 1:35:00; conectores del marketplace mencionados en 0:09:09.

### Aprobaciones y "auto review"
Antes de ciertas acciones el bot pide aprobación mediante un aviso con opciones como "allow" y "allow once". Detrás hay una herramienta de "auto review" con un clasificador que evalúa el riesgo de cada acción. Por encima de ella el usuario puede definir reglas propias en los ajustes. Explicado en 0:42:51, 0:59:16 y, con más detalle, en 1:15:35–1:16:36.

### Reglas de permisos (en ajustes)
En los ajustes, bajando en la página, hay un conjunto de reglas que se escriben en lenguaje natural para decir qué puede hacer el bot con o sin permiso, por ejemplo: "no respondas correos sin pedirme permiso" o "crea diapositivas sin preguntar". Pueden ser tan estrictas como se quiera, hasta pedir permiso para crear una carpeta. Cuando una acción choca con una regla, el aviso dice que está bloqueada por la "personal auto review rule". Explicado en 0:47:00 y 1:15:35.

### Teach a Task (enseñar una tarea por demostración)
Botón "Teach a Task", en la parte superior de la conversación de un bot. El usuario toma el control del ordenador del bot y hace la tarea mientras el bot observa; al pulsar parar, el bot convierte esa grabación en una skill reutilizable que luego aparece entre sus skills. Explicado en 0:43:54–0:44:56 y 1:21:44.

### Skills
Capacidades guardadas que el bot reutiliza, por ejemplo la de añadir una animación a una diapositiva. Se crean con "Teach a Task" o a partir de material existente, como correos antiguos de los que se extrae un tono. También se pueden añadir a mano al bot. 0:44:56, 0:49:02, 0:52:11 y 1:21:44.

### Descripción / instrucciones del bot
Cada bot tiene una descripción donde se escriben instrucciones explícitas: tipografía y colores, "haz siempre una captura de la diapositiva al terminar y envíamela" o "delega siempre en tu equipo". Amrita recomienda que sean explícitas porque así el bot es más consistente. 0:48:01–0:49:02 y 0:53:11.

### Routines (tareas programadas)
Tareas recurrentes asociadas a un bot, como "cada mañana a las 9 resúmeme los cambios del deck y quién los hizo". Una misma routine puede implicar a varios bots, por ejemplo Slide Sonya y Email Ethan enviando cada semana un resumen al jefe. 0:49:02–0:50:05; en un bot gestor, 1:12:34.

### Memoria
Los bots son personas de larga duración con memoria, así que no se limitan a una tarea o proyecto. Cuando se corrige o guía a un bot ("no uses mi nombre y apellido, solo mi nombre"), eso queda en su memoria. Según Amrita, la memoria se guarda en buckets de S3, es persistente y se puede modificar pidiéndoselo al bot. También sirve para ir ganando confianza: "a partir de ahora no me preguntes por el texto, envíalo". Explicado en 1:05:23, 1:17:38 y 1:24:47.

### Comunicación entre bots (agent to agent)
Un bot puede escribir a otro para pedirle contexto, o delegar en él porque así lo dice su descripción. Las conversaciones entre bots se pueden consultar (p. ej. "Amrita me ha pedido esto…"). Amrita lo llama "agent to agent protocol". También lo presenta como "bot steering". 0:53:11–0:56:14.

### Group chats con bots
Chats de grupo con varios bots. Según Amrita, frente a los mensajes uno a uno la diferencia es de visibilidad: en el grupo se ve toda la coordinación en un sitio. Los bots entienden las dependencias entre ellos: uno espera a que otro termine su parte. 1:04:23 y 1:08:27–1:10:31.

### Bot orquestador / Chief of Staff / manager
Un bot cuyo trabajo es coordinar a otros: recoge actualizaciones, detecta bloqueos y avisa a quien haga falta. Se configura en su descripción ("tu trabajo es pedir actualizaciones a Email Ethan, Slide Sonya y Data Dan") y se le puede añadir una routine ("cada dos horas pide actualizaciones y mira si hay bloqueos"). 1:11:31–1:13:34; la idea de Chief of Staff, en 0:53:11.

### Duplicar un bot
Se puede duplicar un bot. La copia conserva la persona y las instrucciones, pero arranca con el contexto y la memoria vacíos. Sirve para tener variantes, como varios bots de correo según el destinatario. 0:59:16 y 1:24:47–1:25:48.

### Compartir como plantilla y marketplace
Con "Share as template", en la parte superior, un bot se comparte con el equipo o la empresa, y cada persona lo adapta a su caso. Quien lo usa recibe la versión más reciente cuando el autor lo modifica. El marketplace tiene bots destacados públicos (de Lauren, Claire, Lenny, Eric…) y bots internos del equipo. 1:00:17–1:01:20 y 1:22:44; plantillas de bots en el marketplace, 0:23:28.

### Secciones de la barra lateral
Los bots se agrupan en secciones. "Unassigned" contiene los que no tienen sitio asignado, y se pueden crear otras (Amrita tiene una para su equipo de bots de ingeniería). Los group chats también se pueden clasificar. 1:03:21–1:04:23.

### Modo voz / dictado
Un botón de dictado transcribe la voz a texto antes de enviarlo. Amrita anuncia un modo de voz bidireccional, ya desplegado internamente. Varios ponentes dictan en lugar de escribir. 0:40:49–0:41:51, 1:52:27 y 2:02:35.

### Borradores de correo en un modal
Cuando el bot redacta un correo aparece un modal dentro de Grok Bot en el que se puede editar el texto, cambiar el destinatario, borrarlo o pedir que lo reformule. 1:02:21.

### Credenciales, secretos y 1Password
Al bot se le pueden dar credenciales en su ordenador (por ejemplo, para MongoDB) o meterlo en la VPN de la empresa para que acceda a sistemas internos. Hay una integración recién lanzada con 1Password. Los secretos se introducen en un modal de Grok Bot, no en la máquina virtual, y según Amrita se guardan de forma segura, sin que nadie de SpaceX los vea. 1:18:41–1:19:42 y 1:23:45.

### Artefactos y ficheros
El bot puede generar capturas, PDF o presentaciones de PowerPoint, que luego se guardan en local. 1:20:43.

### Reaccionar a mensajes (corazón)
Con clic derecho se puede dar "corazón" a un mensaje del bot. El bot lo detecta ("a Matt le ha gustado ese mensaje") y lo tiene en cuenta en lo siguiente que hace. 1:51:27–1:52:27.

### Todo se configura hablando
Cualquier cosa de un bot, como el nombre o el papel, se cambia pidiéndoselo en el chat. Los ponentes insisten en que es "chat first" y que eso puede sorprender a quien venga de otras herramientas. 2:07:43.

### Autocompletado del propósito al crear un bot
Al crear un bot, Grok Bot deduce del nombre para qué puede servir (con "Workflow Builder" ya lo intuye) y ofrece opciones de "para qué me quieres principalmente". 0:39:49–0:40:49.

### Bot con tarjeta de pago
Roshan dice que "ahora se le puede dar una tarjeta de crédito al bot", y lo asocia a Stripe/Link. Solo lo menciona, sin demo. 0:15:17.

### Integración con Slack (etiquetar al bot)
En Slack se puede mencionar al bot en un hilo ("@bot añade esta funcionalidad"), y otras personas pueden sumar peticiones en el mismo hilo; así trabajan juntos humanos y bots. 1:17:38–1:18:41.

### Teams / equipos en Grok Bot
Para el directo han creado un "Grok Bot team" nuevo en el que cada ponente tiene sus bots. No se explica qué es un team ni cómo funciona. 0:21:26.

### Pstack (plugin)
Plugin open source de Lauren que reúne sus skills y flujos de trabajo de ingeniería rigurosa. Se instala desde el marketplace de Grok Bot buscando "Pstack". El nombre exacto no es seguro: la transcripción escribe "Pstack" y "P-stack". 0:18:21–0:19:25.

### Dr. Eggbot (bot que crea y modifica bots)
Bot de Lauren, publicado en el marketplace, que usa Pstack y sabe crear bots de calidad; también revisa y modifica los bots que ya tienes. Ilustra la idea de que "un bot puede crear bots" (0:23:28). La transcripción lo escribe "Dr. Ikhbaud" y "Dr. Eggbot". 1:58:32–1:59:32 y 2:05:40.

## Demos paso a paso

### Demo 1: el bot de bookmarks de Matt (contada, no mostrada)
- Inicio–fin: 0:07:05–0:08:07.
- Objetivo: probar cada día las tecnologías que Matt guarda en sus bookmarks de X.
- Pasos (descritos de palabra): el bot revisa los bookmarks de X, localiza un paquete o tecnología interesante (un paquete npm para mapas o un globo giratorio), lanza un agente en la nube de Cursor para construir algo con esa tecnología y hace despliegues de vista previa (menciona Cloudflare "o algo así"); el repo lo configuró el propio bot.
- Resultado: cada mañana Matt recibe un mensaje con la tecnología y una versión desplegada. Dice que tiene un tutorial en su perfil de X.

### Demo 2: crear Data Dan desde cero y generar un Google Form
- Inicio–fin: 0:39:49–1:03:21, con seguimiento hasta 1:11:31.
- Objetivo: crear un bot nuevo que haga un formulario de Google para recoger datos del público.
- Pasos:
  1. Crea un bot nuevo llamado "Data Dan". Grok Bot propone para qué puede servir a partir del nombre (0:39:49).
  2. Con el modo voz dicta: "Create a Google Form for me that asks two questions. The first is how many cups of coffee do you drink a day? And the second is what are your favorite coffee shops in San Francisco? And for the coffee shop options, maybe put Ritual, Fields, Sightglass, and Blue Bottle." (0:40:49).
  3. El bot empieza a trabajar solo. Amrita abre desde arriba a la derecha la vista del ordenador del bot (una VM Linux) y ve cómo construye el formulario (0:41:51).
  4. Enseña la lista de MCP/plugins conectables (0:42:51).
  5. El bot pide aprobación para ejecutar una tarea y ella pulsa permitir. Lo hará varias veces más (0:42:51, 0:44:56, 0:47:00).
  6. Cuando el formulario está listo escribe: "this looks great, can you turn this into a QR code that people can scan?" (1:03:21).
  7. El QR sale (1:05:23), pero la gente no puede acceder ("no access"). Ella escribe: "looks like folks aren't able to scan. Let's make sure this link is public" (1:06:25). El bot va a revisar la configuración de uso compartido (1:07:26).
- Resultado: formulario creado con las dos preguntas y el QR generado, pero el enlace no era público. En el tramo no se ve que se arregle ni se muestran los resultados de la encuesta (1:13:34: "puede que tengamos que alargarnos a las preguntas").

### Demo 3: Teach a Task con Slide Sonya (animación en diapositivas)
- Inicio–fin: 0:43:54–0:45:59; explicación posterior en 1:21:44.
- Objetivo: enseñar a Slide Sonya a añadir una animación a una diapositiva.
- Pasos:
  1. Abre Slide Sonya, que ya tiene las diapositivas abiertas en su ordenador.
  2. Pulsa "Teach a Task", arriba.
  3. Toma el control del ordenador del bot: Insert → animación → "fly-in" y la reproduce para comprobar que funciona.
  4. Detiene la tarea.
- Resultado: el bot convierte la grabación en una skill ("añadir animación") que aparece entre sus skills. Luego basta con pedir "añade la animación que te enseñé a esta sección".

### Demo 4: reglas de aprobación en ajustes
- Inicio–fin: 0:47:00–0:48:01; aplicada en 0:53:11 y 0:59:16.
- Objetivo: controlar qué puede hacer el bot sin permiso.
- Pasos: Ajustes → bajar hasta las reglas → escribir en lenguaje natural, p. ej. "no respondas correos por mí sin pedirme permiso antes" o "puedes crear diapositivas sin pedirme permiso". En 0:53:11 añade como regla que pregunte antes de responder correos.
- Resultado: en 0:59:16 aparece el aviso "the agent is trying to reply to an email and this is blocked by my own personal auto review rule". Ella pulsa "allow once" y el bot enseña el borrador.

### Demo 5: routine en Slide Sonya (explicada)
- Inicio–fin: 0:49:02–0:50:05.
- Objetivo: recibir cada día un resumen de los cambios en un deck compartido.
- Pasos: añadir a Sonya una routine: "cada mañana a las 9 resúmeme los cambios hechos en el deck y dime quién los hizo". Menciona también una routine entre varios bots: Sonya y Ethan envían un resumen semanal al jefe.
- Resultado: no se ve cómo se ejecuta la routine.

### Demo 6: Email Ethan pide contexto a otros bots y redacta un correo
- Inicio–fin: 0:51:09–1:02:21.
- Objetivo: redactar un correo a un contacto con información que tienen otros bots.
- Pasos:
  1. Explica que tiene a Ethan configurado para aprender el tono a partir de correos reales que ella escribió, convertidos en skill (0:52:11).
  2. Pide: "draft an email to Jason DeMore about the data that I've gathered on coffee habits" (0:52:11). Ethan, por su cuenta, escribe a Data Dan para pedirle los datos del café.
  3. Luego pide explícitamente: "can you message SlideGuru or SlideSonya and ask her for any details about the GrokBotGalaxy101 slide deck that she made. I want to send an email to my coworker about what we showed today." (0:54:13).
  4. Enseña los mensajes entre bots: Data Dan responde que aún no tiene los datos y Ethan decide usar un dataset de ejemplo que ya tenía. Sonya contesta que revisará el deck y le pasará un esquema a Ethan (0:56:14).
  5. Salta la regla de correo y pulsa "allow once" (0:59:16).
  6. Aparece el modal con el borrador: se puede editar, cambiar el destinatario, borrar o pedir que lo reformule (1:02:21).
- Resultado: borrador de correo listo dentro de Grok Bot, montado con contexto de otros bots.

### Demo 7: group chat con los tres bots
- Inicio–fin: 1:04:23–1:10:31; seguimiento en 1:13:34.
- Objetivo: ver en un solo sitio cómo colaboran los bots.
- Pasos:
  1. Crea un group chat con Email Ethan, Data Dan y Slide Sonya y escribe "hello" (1:04:23).
  2. Pide: "let's work on creating a new slide inside Slide Sonya that has data, I'll just use the test spreadsheet… from the coffee dataset from earlier. Create a chart on the last slide of the deck." y añade "when you're done, Email Ethan should send out an email to Jason with details about the coffee data" (1:08:27–1:09:29).
- Resultado: cada bot responde. Ethan dice que ya tiene datos de ejemplo y que esperará a que llegue la diapositiva de Sonya, porque entiende la dependencia (1:09:29). En 1:13:34 Ethan sigue esperando la captura. En este tramo no se ve el resultado final.

### Demo 8: crear un bot manager (orquestador)
- Inicio–fin: 1:11:31–1:13:34.
- Objetivo: tener un bot que vigile a los demás y detecte bloqueos.
- Pasos: crea un bot llamado "manager" y escribe: "your job is to get updates from Email Ethan, Slide Sonya and Data Dan on what they're working on". Propone añadirle una routine: "cada dos horas pide actualizaciones a tu equipo y mira si hay bloqueos".
- Resultado: no se muestra funcionando. Se pone como ejemplo el bloqueo de Data Dan con el formulario no compartible.

### Demo 9: Marky McMarkface, bot de investigación de mercado con X
- Inicio–fin: 1:35:00–1:43:15.
- Objetivo: resumir las miles de propuestas de negocio que la audiencia dejó en X.
- Pasos:
  1. Cuenta de Grok Bot vacía. Lo único hecho antes fue conectar el MCP/plugin de X desde el marketplace, ya autenticado con la cuenta de Roshan (1:35:00 y 1:38:04).
  2. Crea un bot nuevo; el chat elige el nombre "Marky McMarkface" (1:36:01).
  3. Le da contexto: que están emocionados por empezar un negocio, los handles de X (Potato, Mattie P, Peter G. Yang) y que todos han publicado sobre el directo. Prompt: "Synthesize feedback from what's been suggested by people replying to our recent posts." (1:36:01–1:38:04).
  4. Mientras busca hilos, Roshan le da un empujón para que se ponga en marcha (1:42:12).
- Resultado (1:43:15–1:45:18): temas agrupados. "No otra demo SaaS"; algo físico, local o para clientes no técnicos (ferretería, empresa de pintura); consumo o retro (Neopets, Club Penguin); "una empresa que construye empresas" o plataformas para pequeños negocios; construir algo para el chat; ideas sueltas (marketing de libros para autores independientes, marketplace de jardinería, marketplace de cartas Pokémon, clima, cenas a domicilio, asesoría de M&A).

### Demo 10: user stories y reacción con corazón
- Inicio–fin: 1:50:25–1:52:27.
- Objetivo: bajar las ideas a user stories.
- Pasos: Roshan le pide al bot user stories para la dirección elegida, "demostrar el bot con un operador del mundo real". El bot propone también demos para el día uno. Roshan le da corazón a un mensaje.
- Resultado: ideas como un asistente de operaciones para restaurantes de barrio (resumen matinal de reservas y menú, gestión de reseñas), ayuda con tareas domésticas o contratación de servicios, coordinación de voluntarios. Tras el corazón, el bot sigue por esa línea y propone nombres ("OpenBrief", "Kitchen Desk").

### Demo 11: bot de investigación de Matt con dictado (pop-up OS)
- Inicio–fin: 1:52:27–1:55:30.
- Objetivo: explorar negocios con componente presencial vinculados a restaurantes.
- Pasos:
  1. Matt ha creado su propio bot de investigación de mercado y ha conectado el plugin de X en ese momento. Comenta que Roshan podría habérselo compartido como plantilla.
  2. Da corazón a un mensaje.
  3. Pulsa el botón de dictado y dice más o menos: "nos gustan algunas de estas ideas de restaurantes; piensa ideas de negocio con un elemento presencial y cómo unir un restaurante local con lo que hacemos en el estudio: experiencial, un pop-up, ayudar a un restaurante…". Peter añade dos segmentos: quien quiere abrir un restaurante y prueba antes con un pop-up, y quien ya tiene uno y quiere gestionarlo mejor.
- Resultado: propuestas "Pop-up OS for restaurants", "Adopt a restaurant", cena teatro, "ticketed supper club" y, como mejor combinación, "Pop-up OS con un restaurante real de SF": producto, ayuda al dueño y un evento donde la gente pueda probar la comida.

### Demo 12: Lauren instala Dr. Eggbot, dicta a Steve y crea un prototipador
- Inicio–fin: 1:58:32–2:09:47.
- Objetivo: montar un equipo de bots para prototipar una landing page de la plataforma de pop-ups.
- Pasos:
  1. Instala Dr. Eggbot desde el marketplace. Tiene además "Steve", que es el bot por defecto renombrado, y un bot de X que solo usa el plugin (1:59:32 y 2:05:40).
  2. Pide a Steve filtrar ideas de negocio presenciales interesantes (1:59:32).
  3. Con dictado habla unos dos minutos con Steve: montar con Dr. Eggbot un pequeño equipo de ingeniería para un prototipo "loose and scrappy", quizá sin base de datos y usando una Google Sheet como base de datos, empezando por una landing page. Después corrige el texto transcrito y añade: "Steve, can you put together a landing page for us for this pop-up idea and disregard the noise that we contributed?" (2:02:35–2:03:39).
  4. Pide a Dr. Eggbot que convierta a Steve en su "chief of staff / executive assistant" (2:05:40).
  5. Responde a un mensaje: "yes, make a prototyper bot, makes some loose HTML, CSS, JS vanilla prototypes and give it a fun name. Fun with a food theme." (2:06:43).
  6. Steve propone nombres (Pickle, Waffle, Dumpling, Churro, Meatball…), el chat vota y eligen "Grokpot" (2:08:43–2:09:47).
- Resultado: se ponen en marcha Steve como jefe de gabinete y un bot prototipador. En paralelo, Roshan crea un repo privado vacío llamado "pop-up" en la organización de GitHub (2:06:43).

### Demo 13: Matt crea un bot de prospección con Dr. Eggbot
- Inicio–fin: 2:03:39–2:05:40.
- Objetivo: evaluar cómo conseguir restaurantes y restauradores para el pop-up.
- Pasos: instala Dr. Eggbot y le dicta la descripción del bot que necesita: un bot de prospección que ayude a evaluar la viabilidad y a encontrar restaurantes, restauradores y posibles clientes, empezando por los restaurantes. Posibles fuentes: X (gente del directo que conozca a dueños de restaurantes en SF), una landing page, un teléfono o un correo de contacto. Más adelante, el bot debería ayudar a montar esos sistemas.
- Resultado: Dr. Eggbot empieza a crear el bot. En este tramo no se ve terminado.

### Demo 14: bot de priorización (apenas se ve)
- Inicio–fin: 2:09:47–2:10:48.
- Objetivo: ordenar el caos de tareas.
- Pasos: Matt pide a Dr. Eggbot un bot de priorización y le vuelca lo que tiene en la cabeza.
- Resultado: el bot, al que la transcripción llama "Grokpot", propone pasos: definir el perfil ideal de restaurador, hacer un spike de lo que se va a construir, mapear leads, trabajar el outreach. El tramo se corta aquí.

## Consejos y buenas prácticas

- Crea un bot por unidad de trabajo o responsabilidad y vuelve siempre al mismo para que aprenda, en vez de abrir un chat por tarea. (0:32:39)
- Empieza con una tarea sencilla y sube la ambición poco a poco hasta dar con los límites. (0:36:44)
- Escribe en la descripción del bot instrucciones explícitas (tipografía, colores, "envíame una captura al terminar"): así es más consistente. (0:48:01–0:49:02)
- Usa códigos QR generados por el bot para cualquier enlace que tengas que enseñar en público. (0:50:05)
- Si el bot tarda o no sabe hacer algo, toma el control de su ordenador, hazlo tú y enséñaselo con Teach a Task. (0:51:09)
- Enseña a un bot de correo tu tono a partir de correos reales tuyos. (0:52:11)
- Para que un "Chief of Staff" solo coordine, ponle en la descripción "delega siempre en tu equipo". (0:53:11)
- Organiza tus agentes por proyecto o por especialidad, según te convenga: es como diseñar tu propia empresa. (0:55:13)
- Duplica bots para tener variantes por público (directivos, usuarios, tu equipo). (0:59:16)
- Publica como plantilla los bots que deban ser iguales para todos, como un bot de marca con los mismos colores y tipografías. (1:01:20)
- Si el bot pide aprobación o pregunta mucho, es señal de que tienes que enseñarle o guiarlo. Lo que le corrijas queda en su memoria. (1:05:23)
- Para depurar con Grok Bot, dale todos los detalles de lo que falla y dile también cuándo lo ha hecho bien; cuanto más contexto y validación, mejor funciona. (1:06:25–1:07:26)
- Empieza por el resultado que quieres ("esto es lo que quiero producir") para que el bot trabaje hacia atrás. Un simple "no funciona" sin detalles no le sirve para aprender. (1:10:31–1:11:31 y 1:27:50)
- Pon un bot orquestador con una routine si no quieres vigilar tú a todos los bots. (1:11:31)
- Para confiar más y que pregunte menos, díselo cuando lo apruebes ("a partir de ahora no me preguntes por esto"). (1:17:38)
- Para empezar, piensa qué es lo más pesado de tu día y trabaja eso con Grok Bot. (1:25:48–1:26:48)
- Ponle a tus bots nombres graciosos (medio en broma). (1:35:00)
- Si te impacientas, pide al bot "dame un estado cada tres minutos" o pregúntale qué está haciendo. También puedes interrumpirlo para cambiarle la instrucción. (1:42:12)
- Aunque programar sea barato, aterriza bien las user stories antes de construir. (1:50:25)
- En lugar de abrir una incidencia, pide al bot que abra un PR; en lugar de un PRD largo, prototipos clicables (mantra "why not today?"). (1:48:20–1:49:23)
- Dictar un par de minutos seguidos y después pedir un plan es una forma cómoda de dar contexto. Revisa el texto transcrito antes de enviarlo. (2:02:35–2:03:39)
- Reparte el trabajo entre varios bots especializados, cada uno con su contexto, y habla sobre todo con un jefe de gabinete. (2:05:40)
- Dale corazón a los mensajes que te gustan: el bot lo tiene en cuenta. (1:52:27)
- Para cambiar cualquier cosa, pídeselo al bot hablando; no busques un menú. (2:07:43)
- Usa la IA para ordenar tus ideas: vuélcale lo que tienes en la cabeza y pídele que te ayude a frenar y priorizar. (2:09:47)

## Limitaciones, avisos y cosas que aún no existen

- Modo voz bidireccional (la voz de Grok responde hablando): desplegado internamente; debería salir "en la próxima semana o así". Hoy solo hay voz a texto. (0:41:51)
- Computer use lento: la velocidad depende del modelo, y dicen que el computer use mejorará "en las próximas semanas". En la demo el formulario tarda mucho. (0:58:15)
- Exceso de aprobaciones: Data Dan pide permiso muchas veces. Amrita lo atribuye al auto reviewer, que vigila por ejemplo que el formulario no pida datos PHI/PII, y dice que no es lo normal. (0:50:05 y 1:16:36)
- Fallo en directo: el QR del Google Form da "no access" porque el enlace no era público. En el tramo no se ve resuelto. (1:06:25–1:11:31)
- Fallo en directo: Data Dan no tenía aún los datos cuando Ethan se los pidió, y Ethan tiró de un dataset de ejemplo. (0:56:14)
- Group chat con humanos y bots dentro de Grok Bot: aún no existe; "coming very soon". Hoy la vía es un hilo de Slack donde varias personas mencionan al bot. (1:17:38–1:18:41)
- Memoria: si un bot delegaba en otro que después se borra, no se entera del borrado; hay que decirle explícitamente que deje de usarlo. (1:24:47)
- Un bot duplicado empieza sin memoria. (1:25:48)
- Acceso a sistemas internos: posible, pero hay que dar credenciales o meter la VM en la VPN. (1:19:42)
- Problemas de audio y vídeo en el directo que impiden enseñar pantallas un rato; no son del producto. (1:35:00–1:38:04 y 1:52:27)
- Disponibilidad y precio: hay prueba gratuita. (0:28:29)
- Dónde encontrar las sesiones: registro en "x.ai.galaxy" (dirección dudosa, ver dudas). (0:38:47)
- Agenda anunciada: Grok Bot for Engineering 12:30–14:30 PST, for Product Managers a las 14:30 con Kevin, for Founders 16:00–17:30 con Shub. Otras sesiones de la semana: GTM, marketing, admins, sales/SDRs. (0:37:45 y 1:30:57–1:31:58)
- Concurso "Grok Bot Galaxy Livestream Challenge": seguir @grok y @bot, citar el post oficial en X con la descripción de tu bot y el enlace a su plantilla compartida; plazo hasta el 29 de septiembre. Premio: viaje a Starbase para ver un lanzamiento de Starship con acompañante; los finalistas visitan la fábrica de SpaceX en Hawthorne. (0:02:00–0:04:02 y 0:25:28)

## Casos de uso

- Bot que prueba cada mañana las tecnologías de tus bookmarks de X y te manda una versión desplegada (Matt). (0:07:05)
- Bot que responde a las menciones "potato, potato, potato" en X (Lauren). (0:10:11)
- Lauren usa Grok Bot para trabajar en el propio Grok Bot (dogfooding). (0:13:15)
- Canal de Slack de incidencias conectado a una "fábrica" de agentes que arregla los bugs sola. (0:17:20–0:18:21)
- Bot "factory" de onboarding que presenta a los bots nuevos el manual de la empresa, más un knowledge base compartido que todos los bots actualizan. (0:23:28–0:24:28)
- Prototipos desechables para visualizar ideas durante la investigación de mercado. (0:23:28)
- Bots de ventas outbound y gestor de bandeja de entrada. (0:32:39)
- Recordar preferencias de formato de diapositivas semanas después. (0:32:39)
- Manejar software antiguo sin API, ver vídeos, escuchar pódcast. (0:33:39)
- Crear formularios (Google Forms, Qualtrics) y pasar las respuestas a una Google Sheet. (0:40:49 y 0:51:09)
- Planificador de eventos que gestiona restricciones alimentarias de 10.000 personas; investigador que recoge datos de clientes. (0:45:59)
- Resumen diario de cambios en un deck compartido y resumen semanal al jefe. (0:49:02–0:50:05)
- Editar a la vez que el bot la misma presentación, cada uno en sus diapositivas. (0:48:01)
- Varios bots de correo por tipo de destinatario (ejecutivos, usuarios, equipo). (0:59:16)
- Bot de marca publicado para toda la empresa. (1:01:20)
- En un avión con mala wifi, pasar el trabajo de computer use al bot, porque su VM tiene buena conexión. (0:58:15)
- Pedir al bot en Slack una funcionalidad para el código mientras otra persona añade requisitos de rendimiento en el hilo. (1:17:38)
- Acceder a una instancia de MongoDB interna con credenciales. (1:18:41)
- Limpiar feature flags obsoletos (ingeniería); responder tickets de soporte olvidados (field engineers); outbound (ventas/SDR). (1:26:48)
- Negocio unipersonal gestionado con bots (Peter Yang). (1:31:58)
- Investigación de mercado sobre respuestas en X. (1:36:01)
- Asistente de operaciones para restaurantes: resumen matinal de reservas y menú, gestión de reseñas; coordinación de voluntarios; contratación de servicios. (1:50:25–1:51:27)
- Plataforma "Pop-up OS" para restaurantes: gestión de eventos, pagos, altas y reservas con franja horaria. (1:54:29–1:56:30)
- Usar una Google Sheet como base de datos de un prototipo. (2:02:35)
- Bot de prospección que busca restaurantes y restauradores. (2:04:39)
- Bots que compran cosas con una tarjeta (Stripe/Link), idea propuesta. (0:15:17)

## Dudas de la transcripción

- Nombre del producto: aparece como "Groffbot", "Brockbot", "Rockot", "RockBot", "Grokplot", "Crock-Bots", "CropBot" y "Blockbot". Se da por hecho que todos son Grok Bot.
- Empresa: la transcripción dice "SpaceX AI", pero Amrita dice "at Grokbot or at Cursor", "Lauren is from Cursor" y "Eric is also from Cursor" (1:00:17 y 1:02:21), y Matt dice "we have cursor" (0:12:12). Hay que confirmar qué es error de Whisper y qué es real (Cursor como herramienta de código frente a Cursor como empresa de los ponentes).
- Ponentes de la sesión 101: "Roman and Rita" (0:01:00), "Roman and Amrita" (0:28:29) y "Ann Reardon and Roman" (1:30:57). Parece que se llaman Roman y Amrita; verificar apellidos.
- "Pstack" / "P-stack": el nombre real del plugin de Lauren está por confirmar en el marketplace.
- "Dr. Ikhbaud" / "Dr. Eggbot": nombre exacto del bot de Lauren.
- "x.ai.galaxy" (0:38:47): la dirección de registro de las sesiones parece mal transcrita.
- "the at Groff accounts and the at bot accounts" (0:03:01): handles exactos de las cuentas oficiales (¿@grok y otra?).
- "Link card" / "striped card" (0:15:17): se refiere a Stripe Link; verificar si existe la función de dar tarjeta al bot y cómo se llama.
- "Teach a Task" (0:43:54): nombre exacto del botón, que también aparece como "teacher task" (1:21:44).
- "Share as template" (1:01:20): nombre exacto de la opción.
- "personal auto review rule" / "auto review tool" / "auto reviewer" (0:59:16 y 1:15:35): nombre oficial del sistema de aprobaciones y de las reglas.
- "routines" (0:49:02): confirmar que es el nombre oficial de las tareas programadas.
- "Unassigned" (1:03:21): nombre de la sección por defecto de la barra lateral.
- "bot steering" y "agent to agent protocol" (0:53:11 y 0:56:14): no está claro si son funciones con nombre propio o expresiones de la ponente.
- "memory is stored in S3 buckets" (1:05:23 y 1:24:47): conviene verificarlo en la documentación antes de ponerlo en el curso.
- "SlideGuru" (0:54:13 y 1:02:21): parece un nombre antiguo o alternativo de Slide Sonya.
- "Jason DeMore" (0:52:11): nombre del contacto, probablemente mal transcrito; es irrelevante para el curso.
- "one password" (1:19:42): se entiende 1Password; verificar el nombre de la integración.
- "a Grokbot team" (0:21:26): no se explica si "team" es un espacio de trabajo compartido o un plan de pago.
- 0:52:11–0:53:11: la frase sobre el modal ("hey, can I get your data from, or hey, can I send user?") está cortada y no se entiende bien qué pide el modal.
- 1:05:23: "Go ahead and do it, no need for a security check" no se sabe a qué responde; quizá a una aprobación del bot.
- 1:43:15–2:00:33: tras el corazón en 1:52:27, el bot al que Matt dicta ¿es el mismo "market research bot"? No se distingue bien qué bot usa cada ponente.
- 2:09:47–2:10:48: "Grokpot" es el nombre votado para el prototipador de Lauren, pero Matt parece usarlo para su bot de priorización creado con Dr. Eggbot. Puede ser una confusión de la transcripción.
- "FestivalTube" (2:01:33): idea sugerida por un bot que ni los ponentes entienden.
