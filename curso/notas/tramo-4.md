# Tramo 4 (6:41:02–8:44:27)

## Resumen del tramo

Tres bloques. Primero, 6:41–7:22: el equipo del directo (Matt, Lauren y Roshan) sigue con su proyecto de "montar un negocio en 72 horas" junto a Eric, invitado y CEO de Carrot. Definen una tienda pop-up de merchandising de Grok Bot y reparten el trabajo en bots (tickets, merch, sitios) mientras responden preguntas del chat sobre plantillas, contraseñas y alcance. Después, 7:22–8:18, viene la sesión "Grok Bot para fundadores" de Shub: cuatro bots de demo (Closebot, Prodbot, Stockbot y Protobot) y dos más (Yap bot y un bot "cajón de sastre"), consejos para ahorrar coste y una ronda de preguntas del público. Cierra, 8:18–8:44, una entrevista con Jenny, que tiene 22 bots, sobre cómo usar bots para organizar el evento: sitio, presupuesto, permisos e invitados. Termina el día 1.

## Conceptos

- **Bot como empleado.** Matt organiza los bots como si fueran empleados, cada uno con su puesto: ingeniero de crecimiento, ingeniero fundador, generador de imágenes, director creativo o jefe de gabinete. También crea bots para tareas concretas, por ejemplo uno solo para actualizar la documentación. [6:51:12]
- **Plantilla de bot (bot template).** Al compartir un bot se envía una plantilla. La copia lleva las memorias, parte del contexto de lo que ha trabajado el bot, las instrucciones y los plugins propios de la plataforma (first-party). No lleva datos sensibles ni el historial de chat. Quien la recibe la va ajustando y acaba con su propia versión, no con una copia exacta. [6:57:16–6:58:18]
- **Entrada segura de contraseñas (secure entry).** El bot no puede ver las contraseñas: se introducen en un formulario seguro, así que no hay que preocuparse de que el bot acceda a datos sensibles. [6:57:16–6:58:18]
- **Alcance y contexto de un bot.** Si un bot empieza a dar respuestas incoherentes o de peor calidad, puede tener demasiado alcance. La solución es acotarlo o limpiarle el contexto. [6:58:18–6:59:21]
- **Control del navegador (browser use).** El bot puede manejar un navegador; en el directo lo usan para dibujar bocetos en tldraw. Sirve para hacer cosas sin MCP ni API, pero es caro si se repite muchas veces. [6:52:13] [7:55:39]
- **Bots persistentes que "acumulan" (compounding).** Shub presenta la evolución: primero chatbots, después agentes efímeros que terminan una tarea y se tiran, y ahora bots que se quedan, en los que se invierte y que mejoran con el tiempo, como un empleado. El objetivo final es automatizar por completo una función de plantilla. [7:24:55]
- **El ordenador propio del bot.** Grok Bot se usa por mensajes, como iMessage. Tiene su propio ordenador, así que además de conectarse a productos por MCP o API puede usar tus herramientas igual que tú. Se le pueden encargar tareas de principio a fin, incluida la verificación. [7:25:57–7:26:58]
- **Rutinas (routines).** Automatizaciones que se disparan por horario, por webhook o por señales. Se ven en la barra lateral del bot. Si no hay nada relevante, el bot no avisa. [7:29:00] [7:45:23] [7:56:40]
- **Bots trabajando juntos.** Un bot puede pasar contexto a otro. Por ejemplo, Closebot pasa comentarios de clientes a Prodbot, y otros bots llaman a Yap bot para escribir con la voz de Shub. Aprenden a involucrar a otros bots si se les anima a hacerlo. [7:50:30–7:52:34]
- **Vídeo de verificación.** Se le puede pedir al bot que grabe en vídeo lo que hace en una web mientras trabaja. Según Shub, es la forma más rápida de comprobar si una tarea está bien hecha. [7:43:20]
- **Grupos de bots (group chat).** Función para meter varios bots en un chat de grupo. Ventaja: colaboran en tareas complejas. Inconveniente: todos hablan y se pisan, y el coste se dispara. A menudo es mejor que un bot mencione a otros dos una vez y trabaje con ellos por separado. [8:10:04]
- **Olvidar cosas.** Se le puede escribir al bot que olvide algo, por ejemplo "forget all things about how we generated your profile picture". Lo hace bastante bien, y además ahorra tokens. [8:11:06]
- **Marketplace de bots.** Marketplace oficial de plantillas. Shub cree que la dirección es "x.ai/bot/marketplace", pero no lo asegura. Por ahora el equipo revisa cada plantilla a mano; también hay revisión con bots. Las mejores se optimizan, con consentimiento del autor, y se publican. [8:12:06–8:13:08]
- **Memoria y sistema de archivos.** Los bots no comparten memoria ni ventana de contexto, pero sí sistema de archivos. El ordenador de los bots es una única VM con una instancia por bot, como escritorios distintos en un mismo equipo. Pueden leer los archivos de otros bots y lo hacen solos cuando la tarea lo pide. [8:15:25]
- **Ejecución local (local execution).** Opción de los ajustes para permitir que el bot trabaje en tu ordenador: enviar mensajes desde él o manejar tu navegador. xAI prefiere el ordenador del bot porque en local las apps aparecen en tu pantalla, lo que impide trabajar en paralelo, y consumen tus recursos. [8:14:24–8:15:25]
- **Integración con Cursor cloud agents.** Grok Bot lanza agentes en la nube de Cursor y les pasa solo el contexto relevante. Cuando terminan, Grok Bot puede probar el resultado y revisar el PR si tiene acceso al entorno. Se usa un cloud agent para tareas complejas de código o cuando se quiere controlar el modelo. En la transcripción aparece "Cursor or Grokbuilt", sin confirmar si es "Grok Build". [8:16:26–8:17:28]
- **Importar cookies.** Importar las cookies de Chrome o de otro navegador mantiene la sesión iniciada en muchas herramientas y evita tener que tomar el control del ordenador del bot para ayudarle. [7:57:41] [8:04:52–8:05:53]
- **Bot "chief of staff" frente a bots expertos.** Un jefe de gabinete puede coordinar a los demás bots. Shub prefiere bots expertos por dominio, pero dice que es cuestión de gusto. Jenny sí usa uno, "Master Chief", que coordina sus siete negocios. [8:00:45–8:01:48] [8:21:54]

## Demos paso a paso

### 1. Bocetos en tldraw con el bot de prototipos (Lauren)
- **Inicio y fin:** 6:52:13–7:00:23.
- **Objetivo:** hacer maquetas de baja fidelidad de la plataforma pop-up para comentarlas.
- **Pasos:** Lauren pide a su "prototype bot" que haga bocetos en tldraw. El bot controla el navegador y dibuja en tldraw. Antes le había dicho que quizá montarían una exposición de arte. Después le pide un diseño de entrada coleccionable, inspirado en las cartas brillantes de Pokémon.
- **Resultado:** aparecen bocetos en pantalla, entre ellos uno con el texto "Grok Bot art exhibition". No se leen prompts literales.

### 2. Bot de merchandising con Grok Imagine
- **Inicio y fin:** 7:00:23–7:14:42.
- **Objetivo:** generar ideas de merchandising originales y visualizarlas.
- **Pasos:** Lauren apunta ideas para el bot: cubo de tungsteno, cubo de tungsteno con forma de Grok Bot, peluches de patata, fotos de lanzamientos de SpaceX, pelotas antiestrés con forma de Grok Bot, gorro con ojos y peluches de personajes de Grok Bot. Pide al bot que use Grok Imagine ("ask Grok to use Grok Imagine", 7:04:27). Cuando el bot repite lo que ya le han dicho, le escriben que no lo repita y proponga algo mejor ("don't just regurgitate… come up with something more important", 7:05:34).
- **Resultado:** imágenes de merchandising "un poco al azar" y con el logo de Grok Bot mal hecho, porque olvidaron indicárselo (7:08:37). El bot publica las imágenes en una URL local de su ordenador (7:14:42). El bot se llama "Drop", igual que el que creó otro compañero. Proponen, sin hacerlo, basar el bot en un proveedor real: leer el catálogo por API o web, rastrear Alibaba o contactar con fabricantes.

### 3. Grabar la conversación y pasársela a un bot
- **Momento:** 7:06:35–7:08:37.
- **Pasos:** Roshan graba el resumen de la charla y se lo pasa a su "outreach bot". Propone crear un bot de merchandising que proponga ideas y compruebe cuáles son viables.
- **Resultado:** no se enseña.

### 4. Compartir una plantilla de bot para buscar sitios
- **Momento:** 7:13:41–7:15:43.
- **Pasos:** Lauren pide a Matt una plantilla para buscar sitios. Matt crea la plantilla a partir de su bot de "operator research" y se la envía. La lista de sitios está en Notion y se comparte por Slack. Proponen que el bot escriba a todos los sitios.
- **Resultado:** solo se ve que la plantilla se crea y se envía.

### 5. Closebot: clientes de principio a fin (Shub)
- **Inicio y fin:** 7:32:06–7:41:19.
- **Objetivo:** automatizar el ciclo con un cliente: preparar la llamada, aprender de ella, dar soporte y activarlo.
- **Paso 1, preparar la llamada:** Shub pide al bot que prepare la llamada con la empresa ficticia "Northwind". El bot saca los datos de uso (telemetría), investiga a fondo quién es la empresa y recorre su web. El resultado es un HTML de preparación con quiénes son, qué hace el producto y capturas de su web (el bot suele encontrar fallos, como un banner de cookies encima del botón de enviar). Incluye actividad (licencias, reuniones), una gráfica de uso para ver si crece o cae, recomendaciones y riesgos. Funciona como rutina diaria: mira el calendario y prepara cada reunión del día. [7:33:07–7:37:11]
- **Paso 2, después de la llamada:** el bot revisa la transcripción de Granola, ve qué interesó y qué no al cliente, y ajusta las siguientes preparaciones para no repetir temas que no funcionan. Según Shub, da mucho resultado a las dos o tres semanas. [7:37:11–7:38:13]
- **Paso 3, soporte:** para escalarlo hay que conectar el bot a los datos, a la facturación y a las partes delicadas. [7:38:13–7:39:16]
- **Paso 4, activación:** cuando ocurre el evento de activación (en el ejemplo, un usuario comparte una plantilla con compañeros), el bot envía un correo con créditos. En la demo hay 1.000 $ preparados; Shub dice que es un ejemplo exagerado. [7:39:16–7:40:18]
- **Otros usos que menciona:** negociar contratos con el cliente, generar pipeline y llenar el calendario. [7:40:18]

### 6. Prodbot: qué se ha publicado
- **Inicio y fin:** 7:41:19–7:43:20.
- **Objetivo:** estar al tanto de lo que se lanza y se retira del producto.
- **Pasos:** Shub le pide un resumen diario ("daily rundown") de Flylo, la web de demo de vuelos y viajes. El bot revisa los PR y las incidencias de Linear, y recorre el producto con su ordenador, con login si lo tiene.
- **Resultado:** un informe con lo publicado, lo retirado y decisiones pequeñas que conviene revisar con calma, más capturas de la web y un vídeo del bot recorriéndola. Se puede conectar a métricas para ver el efecto de cada cambio sin abrir el panel.

### 7. Stockbot: vigilar a la competencia
- **Inicio y fin:** 7:43:20–7:48:26.
- **Objetivo:** tener un resumen continuo de lo que hace cada competidor.
- **Pasos:** Shub le pide un "competitor pulse" de Notion y Cracked, los dos competidores ficticios de la app de notas de la demo. El bot trabaja con ambos en paralelo. Tiene rutinas que se ejecutan cada pocos días. Se registra solo en el producto de cada competidor con un correo desechable (en Notion verificó la cuenta por correo), recorre el onboarding y lo compara con el propio, y prueba el producto.
- **Resultado:** un análisis en HTML ("teardown") con un vídeo del registro y del onboarding, qué funciona y qué no, changelog, publicaciones en X, ofertas de empleo (Cracked no contrata; en Notion lo acorta porque hay muchas) y el equipo del competidor. Extra: escribe a clientes que se han ido a la competencia para saber por qué; Shub advierte que se use con responsabilidad. Comparte este bot con un código QR. [7:46:25–7:47:25] [7:58:42]

### 8. Protobot: de comentarios de clientes a PR
- **Inicio y fin:** 7:48:26–7:50:30, con seguimiento en 7:52:34.
- **Objetivo:** hacer prototipos de ideas y convertir comentarios de clientes en PR.
- **Pasos:** Protobot tiene en su ordenador su propia cuenta de Grok Bot, separada de la de Shub, y con ella prueba bots, hace QA y prototipos con el producto real a la vista. Shub escribe "pull the most recent customer feedback". El bot encuentra un comentario de demo: el botón de compartir plantillas de bot no llama la atención y el cliente quiere que destaque. Lanza un cloud agent para arreglarlo.
- **Resultado:** al final de la sesión sigue trabajando. Como tiene acceso a Grok Bot, puede abrir la interfaz y hacer QA sin buscarla. La idea completa es reunir todos los canales de comentarios (X, soporte, correo) en un bot que abra PR; el ciclo de comentario a despliegue queda en horas.

### 9. Yap bot: escribir como Shub
- **Momento:** 7:50:30–7:51:33.
- **Pasos:** el bot lee el correo, Slack, iMessage y otros canales de Shub para aprender cómo escribe. Vuelve a aprender según un horario configurable (más o menos semanal) con lo que Shub ha enviado.
- **Resultado:** otros bots le piden ayuda solos cuando tienen que escribir en nombre de Shub. Los correos delicados se quedan como borradores, y el bot aprende de la diferencia entre su borrador y lo que finalmente se envió.

### 10. Bot "cajón de sastre" (miscellaneous bot)
- **Momento:** 7:51:33–7:52:34.
- **Pasos:** Shub le pregunta si ha salido el disco de Drake. El bot lo comprueba en Instagram: todavía no.
- **Para qué sirve:** preguntas sueltas que no ensucian el contexto de los demás bots. Si aprende algo útil, se le dice que se lo pase a otro, por ejemplo "hey, you learned about XYZ, go tell ProdBot about what you've learned".

### 11. Bot planificador de eventos para el presupuesto (con Jenny)
- **Inicio y fin:** 8:26:01–8:35:17.
- **Objetivo:** tener un presupuesto base del pop-up antes de pedir presupuestos a los sitios.
- **Pasos:** primero fijan los criterios con Jenny: unos 100–200 invitados, nave diáfana tipo galería en San Francisco, dentro de un mes o algo más, por la tarde-noche, sin alcohol (simplifica permisos), comida caliente servida por un catering externo (hay que comprobar si el sitio lo acepta o impone sus proveedores), sonido básico con micrófono y altavoz, sin DJ y con marketing fuera del presupuesto. Jenny propone esta plantilla de prompt: "you are a senior event planner in the city of San Francisco creating a budget for an event that meets blah, blah, blah". Roshan escribe en directo, más o menos: "You're a senior event planner in the city of San Francisco creating a budget for a pop-up event for maybe 200 guests… we need help with a budget that includes venue costs, food and beverage, staffing… ignore the marketing budget for now… we want mics to be able to speak to the audience". Lanza el bot.
- **Resultado:** no se ve en el tramo. Jenny añade que después el bot puede pedir presupuestos formales (RFP) a los sitios que cumplan y negociar dentro del presupuesto.

## Consejos y buenas prácticas

- Lo difícil de construir es ponerse de acuerdo en la idea; la IA facilita sobre todo coordinar la ejecución. [6:41:02–6:42:03]
- Plantear los bots como empleados con un puesto, y crear bots aparte para tareas concretas. [6:51:12]
- Si el bot pierde el hilo o da resultados flojos, acotar su alcance o limpiar el contexto. [6:59:21]
- Al generar imágenes, indicar desde el principio los elementos de marca (el logo salió mal por no hacerlo) y pedir al bot que no repita lo que se le ha dicho. [7:05:34] [7:08:37]
- Dar al bot datos reales, como el catálogo de un proveedor, para que sus propuestas sean realistas. [7:08:37]
- Poner a la IA en bucles cuyo resultado se pueda comprobar, como el código. Ahí es donde conviene dejarla trabajar a fondo (Eric). [7:20:50–7:21:51]
- Pedir a los bots que hagan todo el trabajo de principio a fin, incluida la verificación, no solo partes. [7:27:59]
- Revisar el día para ver qué distracciones se pueden delegar. [7:27:59] [7:54:37]
- Dar a los bots contexto e información de forma constante: lo guardan y mejoran con el tiempo. [7:32:06]
- Pedir al bot un vídeo de lo que hace para comprobar el resultado. [7:43:20]
- Conectar los bots a métricas y datos para que avisen solos de lo relevante. [7:43:20]
- En correos delicados, que el bot deje borradores; aprende de la diferencia con lo enviado. [7:51:33]
- Tener un bot para preguntas sueltas y así no ensuciar el contexto de los demás. [7:51:33]
- Darles todo el acceso con el que uno se sienta cómodo; es la única forma de que trabajen de principio a fin. [7:53:36]
- Corregir a un bot en vez de tirarlo y empezar otro: la ventaja es que mejora con el uso. [7:53:36]
- Dar buenas skills, herramientas e instrucciones precisas; "hazlo más chulo" no funciona. [7:54:37]
- Dedicar una o dos horas a pensar qué delegar antes de crear bots. [7:54:37]
- Navegador: si una tarea se repite, pedir al bot que mire las peticiones de red la primera vez, identifique las API y las llame directamente después. Es más rápido y gasta menos tokens. [7:55:39–7:56:40]
- Para cualquier optimización, preguntar al propio bot cómo hacerla. [7:56:40]
- Rutinas: revisar su frecuencia (también se le puede encargar a un bot). Una rutina cada 15 minutos son unas 100 ejecuciones al día. Mejor usar webhooks o señales entrantes que un horario a ciegas. [7:56:40–7:57:41]
- Crear un bot que imite tu forma de escribir ("voice bot"). [7:57:41]
- Importar las cookies del navegador. [7:57:41]
- Agrupar bots por especialidad; las tareas del mismo ámbito se benefician entre sí. [7:57:41–7:58:42]
- Tener un bot que optimice a los demás: mejora rutinas, detecta dónde fallaron y evita repetir peticiones. [7:58:42]
- Para organizar bots, hacer inventario de todo lo que hay que hacer, agruparlo por dominio y dar a cada bot un área de especialidad. [8:00:45]
- Para que las decisiones sean deterministas, pedir a un cloud agent que escriba código con el árbol de decisión y dar al bot la regla de llamar a esa función cada vez. También se puede pedir a un bot que consulte a otro para dar permiso, pero Shub prefiere el código. [8:02:48–8:03:49]
- Para unificar la configuración de otras herramientas, tener una sola fuente para MCP y API (por ejemplo, enlaces simbólicos) y usar 1Password con su MCP. [8:04:52]
- No imponer una herramienta concreta; dejar que el bot elija la más cómoda. Shub usa Granola porque era la forma más fácil de sacar transcripciones. [8:07:00]
- Para que la interfaz vaya más rápido, usar un navegador headless y dar órdenes sobre el DOM en vez de hacer capturas. [8:09:03]
- Se puede fijar qué modelo usan los cloud agents, incluso como opción por defecto para una tarea. [8:11:06]
- Pedir al bot que olvide el contexto que usa de más. [8:11:06]
- Para evaluar una plantilla del marketplace, probarla y preguntarle antes qué hace y cómo, sin ejecutar todo el proceso. [8:12:06]
- Ejecución local: activarla en los ajustes si se necesita. [8:14:24]
- Probar varias veces los cloud agents para aprender cuándo usarlos y cuándo basta Grok Bot. [8:17:28]
- (Jenny) Cuanto más precisos los criterios de búsqueda del sitio, antes se llega a resultados. Conviene detallar aforo, horario, comida, catering, alcohol y sonido. [8:27:05–8:29:09]
- (Jenny) Organizar los bots como un equipo real: un planificador de eventos por encima de bots de tareas. [8:29:09–8:30:10]
- (Jenny) Contactar con los sitios por correo; darle al bot un marco de negociación con el presupuesto. [8:30:10–8:31:13]
- (Jenny) Tratar la IA como un estudiante de derecho de segundo año: vale para una primera lectura de contratos, pero después hace falta un experto. [8:37:20–8:38:21]
- (Jenny) Primero hacerlo como lo harían personas y después trasladarlo a bots. [8:38:21]
- (Jenny) Dejar trabajando de noche bots que preparen borradores de correo para revisarlos y enviarlos por la mañana. [8:39:21]

## Limitaciones, avisos y cosas que aún no existen

- Aunque haya bots, el registro de asistentes y la seguridad de un evento siguen necesitando personas. [8:32:13]
- Las plantillas no llevan datos sensibles ni el chat. [6:57:16]
- El chat del directo iba unos tres minutos por detrás. [6:49:11]
- Grok Imagine estropeó el logo de Grok Bot porque no se le indicó. [7:08:37]
- Hay usuarios que dicen que es caro; Shub lo reconoce en parte y dice que están trabajando en ello. [7:55:39]
- El navegador es caro si se repite. [7:55:39]
- Rutinas demasiado frecuentes encarecen mucho el uso. [7:56:40]
- Los chats de grupo con varios bots generan mucha conversación y coste; Shub recomienda evitarlos por ahora. [8:10:04]
- Hasta hace una semana los bots se confundían con varios ordenadores (por ejemplo, varios Mac mini); dicen que ya va mucho mejor y siguen trabajando en ello. [8:01:48]
- Los modelos no son deterministas; hay que apoyarse en código. [8:02:48]
- Importar la configuración de otras herramientas: están trabajando en ello y Shub publicará un bot para facilitarlo "en los próximos días". [8:04:52]
- Algunas partes de la autenticación todavía no están resueltas, y hay empresas que no quieren bots en su plataforma. [8:05:53]
- Hay herramientas que no se conectan bien. La esperanza es resolverlo con más plugins en el marketplace. [8:07:00–8:08:01]
- Usar la interfaz nunca será tan rápido como una API; están mejorando el modelo para el uso del ordenador. [8:09:03]
- Hablar con bots de otras personas u otras cuentas no existe hoy; están estudiando cómo hacerlo. [8:13:08]
- La ejecución local muestra ventanas en tu pantalla y consume recursos. [8:15:25]
- El marketplace se revisa a mano, así que no están todas las plantillas que se envían. [8:12:06]
- Al final de su sesión, Protobot seguía trabajando y no se vio el resultado. [7:52:34]
- Hubo problemas técnicos en el directo: sonido en la entrevista con Jenny (8:18:52–8:25:00), la pantalla compartida no funcionó (8:33:14, 8:40:23) y se perdió el vídeo al cierre (8:44:27).
- Promoción: concurso para ganar un viaje a Starbase, con una publicación del reto ya lanzada. [8:17:28]
- "Galaxy Live Build Challenge": crear una plantilla y enviarla a través de @Grok. [8:43:24–8:44:27]

## Casos de uso

- Plataforma para organizar pop-ups de marca: merchandising, entradas con componente social y búsqueda de sitio. [6:49:11–6:51:12]
- Investigar qué quiere la gente, por ejemplo ideas de merchandising. [6:54:14]
- Un Grok Bot físico programable: llavero que sigue la ubicación de la pareja, resumen de noticias de competidores o aviso de cada 1.000 $ de ventas. [7:03:27]
- Crear un bot para cada tarea: entradas, merchandising, contacto con sitios. [7:06:35]
- Creadores con cuatro bots para patrocinios: elegir marcas, contactarlas, negociar tarifas e idear contenido (Eric). [7:20:50]
- Preparar llamadas con clientes, aprender de las transcripciones, soporte y créditos de activación (Closebot). [7:32:06–7:41:19]
- Estar al día de lo publicado y retirado, con capturas, vídeo y métricas (Prodbot). [7:41:19]
- Seguir a la competencia y preguntar a clientes perdidos por qué se fueron (Stockbot). [7:43:20]
- Convertir comentarios de clientes de X, soporte o correo en PR (Protobot). [7:48:26]
- Escribir como tú en correo, Slack e iMessage (Yap bot). [7:50:30]
- Preguntas sueltas (bot "cajón de sastre"). [7:51:33]
- Contratos con clientes, generar pipeline y llenar el calendario. [7:40:18]
- Jenny: agencia (Gemma Media, nombre sin confirmar) con 22 bots. "Master Chief" coordina siete negocios: inmobiliario, fondo de inversión, medio y agencia. [8:20:54–8:21:54]
- Jenny: "Boxy" vigila la bandeja de entrada; "Scribe" recoge notas de reuniones y reparte tareas a subagentes; un equipo tipo CFO lleva contabilidad y recibos. [8:22:58]
- Jenny: un bot vende su ropa en Poshmark, Depop y Mercari (en la transcripción, "Markerie") y negocia ofertas siguiendo un marco. [8:30:10]
- Bots para buscar sitios ("Scout"), planificar eventos y calcular presupuestos. [8:27:05] [8:32:13]
- Bot de permisos o normativa por ciudad; también para políticas internas y primera lectura de contratos. [8:36:19–8:38:21]
- Bots que trabajan de noche: buscar sitios y dejar correos en borrador. [8:39:21]
- Lista de invitados desde Instagram: el bot entra en la cuenta y busca los 50 seguidores de la ciudad con más seguidores para escribirles. [8:39:21–8:40:23]
- Balance del día: presentaciones hechas, bots conectados a Notion, GitHub y Vercel, y una primera landing. [8:42:23]

## Dudas de la transcripción

- "Grockbot", "Grokplot", "Crockbot", "Crockpot", "Crock-Pot", "RockBot", "rock-pop", "rock bot", "Growth Bolt" (7:16:43), "Dropbox" (8:08:01) y "drop bot" (7:15:43) son probablemente todos Grok Bot. "GrokWokGalaxy" (8:43:24) sería "Grok Bot Galaxy".
- "Stockbot": Shub lo presenta como "competition stalker"; el nombre real puede ser "Stalkbot". [7:32:06]
- "Prodbot" y "Protobot" suenan parecido; en 7:52:34 dice "ProdBot is still going", pero por el contexto es Protobot (el que lanzó el cloud agent). Conviene comprobarlo.
- La URL del marketplace, "x.ai slash bot slash marketplace, I think", está sin confirmar. [8:12:06]
- "using Cursor or Grokbuilt": ¿Grok Build? [8:11:06]
- "part of having Grok and cursor be together": relación entre xAI y Cursor, sin confirmar. [8:16:26]
- "first party plugins" dentro de las plantillas: comprobar qué incluye exactamente una plantilla. [6:57:16]
- "Flylo" / "fly low": nombre de la web de demo. [7:41:19]
- "Cracked": competidor ficticio de la demo; puede ser otro nombre. [7:44:22]
- "Northwind": empresa ficticia de la demo de Closebot. [7:33:07]
- "Lingjie": nombre de un ingeniero del equipo. [7:29:00]
- "plan scale database": ¿PlanetScale? [6:50:12]
- "Particle's biggest success": no se entiende a qué se refiere. [6:49:11]
- "this actually I believe comes from Catchee PT": posiblemente Karpathy. [7:20:50]
- "Hount, Tri-Carat": probablemente la cuenta de X de Carrot (¿@TryCarrot?). [7:21:51]
- La pregunta de 8:04:52 aparece cortada; se menciona "the Linux piece" sin contexto claro.
- La pregunta de 8:07:00 también está cortada, y la de 8:08:01 queda sin respuesta: "Not yet. Yeah. We'll see.".
- "go to at Grok, we, it looks like we might've just lost video": falta cómo se envía la plantilla al concurso. [8:44:27]
- "as a part of Dreamforce at GrokWokGalaxy": no está claro. [8:43:24]
- "Gemma Media": nombre de la agencia de Jenny. "BC" parece ser "VC". [8:20:54]
- "whisper flow" parece Wispr Flow. [8:22:58]
- "he said codec": probablemente Codex; la pregunta no se oye. [8:14:24]
- "a lot of legacy services… API access that costs much more than the UI access": el final de la pregunta está confuso. [8:08:01]
