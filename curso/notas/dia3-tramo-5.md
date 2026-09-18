# Día 3 · tramo 5 (2:27:00–3:03:00)

## Piloto automático con producción en marcha (2:27–2:32)
- 2:27 Encadena el triaje con el arreglo: el Bot que clasifica el feedback pasa los fallos confirmados al que programa.
- 2:28 Dudan en voz alta si atreverse con el piloto automático completo y deciden probarlo, **pero con una condición que es lo importante del tramo: ya hay gente jugando, así que romper el juego no es una opción**.
- 2:28 De ahí sale la regla que aplican: antes de arreglar nada, el agente tiene que **reproducir el fallo**. Su razonamiento es que solo si consigue reproducirlo puedes fiarte de que ha entendido el problema.
- 2:29 Y añaden un segundo control: otro Bot comprueba que el triaje se hizo bien, es decir, que el Bot que leyó el feedback del usuario lo entendió de verdad.
- 2:29 **Enjambres de verificación.** Una skill que enseña al Bot a levantar muchos agentes en la nube a la vez. Cada uno tiene su propio ordenador, aparte del ordenador del Bot, y puede abrir el juego, hacer clic por la interfaz y probar casos límite.
- 2:30 Definen *fuzzing* sin jerga: usar la aplicación como un usuario avanzado que toca todos los botones e intenta romperla. Lo que consiguen es sacar a la persona de ese bucle, aunque siguen haciéndolo también a mano porque así aparecen otros fallos.

## Los dos bucles (2:31–2:33)
- 2:31 Lauren explica por qué insiste tanto en conectar herramientas. Con Vercel, PlanetScale y el feedback de Slack enchufados, tiene datos de fuera que alimentan el bucle de dentro, el de ingeniería.
- 2:32 Cuando los dos bucles encajan, **los fallos se arreglan solos y el juego mejora sin que ella lo vigile**, lo que la libera para trabajar en funciones y en acabado. Reconoce que hace falta mucho ajuste para llegar ahí.
- 2:32 **El comentario de Roshan que conviene citar**, porque es el reparo honesto: montar el sistema es la parte que más cuesta sentarse a hacer, porque siempre tienes prisa por construir, y es la que más rinde después.

## Vídeo de caso: una operadora de telecomunicaciones (2:35–2:38)
- 2:35 Responsable de producto e ingeniería de una división de Nokia. Quieren agentes especializados por perfil que acompañen a la persona que hoy hace ese trabajo.
- 2:36 El dato: una línea de producto con **más de 50 millones de líneas de código** que están descomponiendo desde un monolito. Un análisis manual era inabordable.
- 2:36 **Lo que costaba varios meses de una docena de expertos lo hicieron dos personas en un par de semanas.**
- 2:37 Otro uso que destacan: análisis de causa raíz sobre un corpus grandísimo de incidencias de clientes cuando hay un fallo que afecta al servicio.
- 2:37 Hacia dónde van: que el papel del ingeniero y del arquitecto pase a ser supervisar agentes que se coordinan entre ellos. Dicen estar rediseñando el ciclo de desarrollo entero.

## Vincent, del equipo de crecimiento (2:44–2:46)
- 2:44 Se presenta: su trabajo es que la gente que podría querer el producto llegue a conocerlo.
- 2:44 **Qué es crecimiento, y depende de la empresa.** En un negocio donde la gente se registra sola, es fijarte en qué está haciendo el usuario y empujarle donde se atasca. En uno de venta directa, es correo masivo y LinkedIn.
- 2:45 Roshan le enseña el juego entero de principio a fin, porque quien trabaja en crecimiento necesita ver el embudo completo.

## Ideas de crecimiento, capturadas por voz (2:46–2:54)
- 2:47 Antes de empezar crea un **Bot de crecimiento** y le encarga ir apuntando las ideas en un manual dentro de Notion. Todo lo que sigue se dicta y se guarda solo.
- 2:46 Compartir tu puesto del marcador nada más terminar, al estilo de las máquinas recreativas donde metías tus iniciales.
- 2:52 Botón de compartir en la pantalla de victoria.
- 2:50 **La mejor de todas**: como las cartas tienen rarezas, que compartir una carta tuya y que alguien se la descargue te dé una versión más rara. Mete la escasez dentro del bucle del juego.
- 2:52 Que un jugador pueda retar a otro por su nombre, con aceptación por medio, porque eso abre invitar a amigos.
- 2:53 Mensaje automático a cada persona que siga la cuenta de X, dándole las gracias y diez de oro para empezar.
- 2:54 Usar el conector de X para buscar qué dice la gente del juego y resumirlo en el mismo documento, con los nombres de usuario.
- 2:52 **Cómo lo hacen es tan interesante como las ideas**: van soltando lo que se les ocurre por dictado, sin ordenarlo, y reconocen que la transcripción no es perfecta. Su argumento es que el agente lo entiende igual. Después sueltan la fábrica de software sobre esa lista.

## El embudo y qué hacer con él (2:56–2:58)
- 2:56 Cifras del momento: unas **2.200 partidas de práctica y 1.000 inicios de sesión con X**. Cerca de mil personas en el marcador.
- 2:56 Decisión de producto que ya habían tomado: no obligar a registrarse para jugar. El modo de práctica está abierto.
- 2:57 **Consejo de Vincent sobre eso**: dejar practicar dos o tres partidas y entonces ofrecer el registro para seguir. No antes.
- 2:57 Y un segundo consejo, de mecánica: **dejar que en práctica se gane más a menudo**, para que la persona le coja el gusto antes de competir.
- 2:57 Eso enlaza directo con la métrica del tramo anterior. El Bot de diseño de juego ya les había dicho que el juego está demasiado difícil para un lanzamiento.
- 2:58 Apuntan mirar la proporción de victorias por separado en práctica y con sesión iniciada, porque afecta al embudo.

## Correo en frío (2:58–3:01)
- 2:58 Vincent avisa de que es lo más difícil y lo que menos apetece recibir.
- 2:59 **Su criterio: lo único que importa es que lo lean, y lo primero que mira cualquiera al abrir el correo es el nombre de quien lo envía**, no el asunto ni el gancho. Así que hay que mandarlo desde alguien a quien ya hayan visto en X o en un vídeo.
- 3:00 De ahí sale la idea de darle **una dirección de correo al propio Bot** y dejarle llevar la campaña.
- 3:00 El ejemplo concreto que plantean: buscar gente del ecosistema de desarrollo en estudios de videojuegos, completar sus datos de contacto y escribirles contando que el juego se construyó en directo.

## Cómo se gana dinero con un juego (3:01–3:03)
- 3:01 Roshan reconoce el patrón en el que están: conseguir usuarios como sea y pensar en el dinero después.
- 3:02 Vincent, avisando de que no es experto en videojuegos, distingue dos modelos. En los de tres en raya, gratis con un tiempo de espera que puedes saltarte viendo un anuncio. En los de mundo abierto, esperas por recursos y pagas o ves un anuncio para acelerar.
- 3:02 **La pregunta que deja para elegir modelo: de qué querría más el jugador.** Esa es la palanca.

## Para el curso
- La regla de reproducir antes de arreglar, y el Bot que revisa que el triaje se entendió bien, son el material de la lección de verificación. Es lo que separa delegar de abandonar.
- El contraste entre los dos bucles, el de fuera con el feedback y el de dentro con la ingeniería, es la mejor forma de explicar por qué conectar herramientas importa más que tener muchos Bots.
- El caso de las telecomunicaciones da una cifra grande y verificable para la lección de empresa: dos personas y dos semanas frente a una docena de expertos y varios meses.
- La sesión de crecimiento es un ejemplo limpio de Bot que solo escucha y apunta mientras las personas hablan. Encaja en el módulo de equipos.
- Comprobar antes de escribir: si el conector de X y las direcciones de correo para Bots existen tal como se describen, o si eran planes.
