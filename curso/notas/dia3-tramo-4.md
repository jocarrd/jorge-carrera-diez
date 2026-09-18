# Día 3 · tramo 4 (1:51:00–2:27:00)

## El pulso del lanzamiento (1:51–1:58)
- 1:51 **Routine de lanzamiento.** Roshan cuenta que siempre que sacan algo montan lo que llama un pulso: le pide a su Bot de datos, que ya conoce sus paneles, un informe cada quince minutos con altas nuevas, partidas de práctica y el embudo de conversión de cuenta de práctica a cuenta real.
- 1:57 Su argumento para pedir métricas a un Bot en vez de entrar a un panel: consigue el corte de datos que necesita en ese momento sin tener que crear un panel nuevo cada vez.
- 1:58 **Primeras cifras reales**: más de 600 partidas de práctica, 400 personas con sesión iniciada con X y 38 conversiones de práctica a cuenta. Curva de palo de hockey.

## Lo que Lauren hizo durante la noche (1:53–1:56)
- 1:53 «La fábrica estaba a pleno rendimiento anoche. Fusionábamos pull requests automáticamente». Y la frase que conviene citar entera: **no miró el código en ningún momento**. Usó su modo propio y le dijo al Bot que lo hiciera rendir y que aguantara una avalancha de gente entrando desde X.
- 1:54 Efecto secundario que reconoce: los títulos de los commits son malos porque no pidió que fueran buenos.
- 1:54 **Seguridad de tipos.** Es la parte técnica del tramo. El problema que se planteó de noche: si ella toca el servidor y otro toca el cliente, cómo evitar que la interfaz lea un campo que ya no existe.
- 1:55 La pila del juego: servidor en Go sobre funciones sin servidor de Vercel, base de datos PlanetScale, y comunicación por REST entre cliente y servidor.
- 1:56 La solución que aplicó: validar las respuestas del servidor con **Zod** en el cliente. Lo presenta como un apaño básico y dice que con más tiempo lo habría diseñado de otra forma. Esa honestidad vale para el curso.

## Qué métricas mirar cuando acabas de lanzar (1:59–2:01)
- 1:59 Pregunta directa a Roshan, que es el perfil de producto: dónde mira para priorizar.
- 1:59 Su respuesta distingue por etapa. **En una empresa de cero a uno no hay ingresos, así que la métrica no es el dinero**: es si la gente juega, si se lo pasa bien y si le gusta lo que has hecho.
- 2:00 Lo concreta en embudo: si llegan hasta el final de una partida, si empiezan otra, o si se caen al principio y no vuelven.
- 2:00 Y marca el contraste: en un producto con ingresos, la métrica principal es el dinero, como les repitieron los invitados que trabajan con pequeños negocios.
- 2:01 Cierra con una idea de producto: quizá esté bien que mucha gente solo practique, y lo que hay que hacer es dar más a quien sí inicia sesión.

## El equilibrio del juego como métrica (2:01–2:05)
- 2:01 Le pide a su Bot los datos de victorias y derrotas mientras habla. Sale un **41,8 % de derrotas**.
- 2:04 La lectura: la IA está ganando más de lo que debería. El objetivo de un juego competitivo es acercarse al 50 %, porque tienes que sentir que puedes ganar sin ganar siempre.
- 2:02 **Cómo funciona el emparejamiento**, explicado al detectar el fallo: te enfrentan contra la instantánea de la alineación de otro jugador, y cuando esa instantánea se consume sale del reparto. Con pocos jugadores acabas jugando contra la IA.
- 2:04 La jugada que enseña: mandar esos datos al Bot de diseño de juego para que diga por qué no resulta divertido.

## La frase que ordena el curso entero (2:05)
- 2:05 Lauren: **«Lo más importante de Grok Bot no es ni siquiera montar tus Bots. Es conectar todas tus herramientas y plugins. Puedes llegar muy lejos con un solo Bot, si no quieres montar un equipo».**
- 2:05 Enseña lo que tiene conectado: su pila de skills propia, Slack, Vercel, X, PlanetScale, Notion, Clerk y Excalidraw. Sus Bots además se crearon skills propias para el diseño de sonido.
- 2:06 Si no existe el plugin, se le pasa al agente una URL de MCP y lo instala él solo.
- 2:06 Cita las integraciones recientes: 1Password el día anterior, más correo, diseño y una de datos de mercado.
- 2:06 Detalle de equipo: al compartir espacio ve que Matt instaló una herramienta de vídeo y puede instalarla ella también.

## Arreglar un fallo en directo (2:07–2:08)
- 2:07 El fallo: solo salen partidas contra la IA, pero los puntos del marcador sí se mueven.
- 2:07 Distingue dos vías. Si el fallo llega por un sistema de informes, se lo pasa a la fábrica. Si lo ve ella, va directa a su Bot ingeniero.
- 2:08 **El mensaje que dicta, que es un buen modelo de petición**: describe el síntoma con la URL concreta, dice qué esperaba, apunta la contradicción con el marcador, pide usar un agente en la nube para investigar y **cierra con «no abras todavía una pull request, vuelve con lo que creas que pasa y luego aplicamos el arreglo»**.

## El canal de feedback y sus riesgos (2:08–2:12)
- 2:08 Matt enseña el formulario dentro del juego: lo que escribe un jugador aparece en el canal de Slack.
- 2:09 Lo que hay detrás, y que conviene listar en el curso: moderación, límite de peticiones, filtro de groserías, saneado de la entrada antes de guardarla y ruta autenticada, de modo que solo escribe quien ha iniciado sesión con X.
- 2:16 En el servidor pasan además el texto por modelos propios como red de seguridad. Con la avalancha, algunos usuarios empiezan a recibir errores 429 por exceso de peticiones.
- 2:11 **Lauren monta la fábrica de feedback dictando**, y el mensaje sirve de plantilla: pega el enlace del canal de Slack, pide mirar el feedback, clasificarlo, reproducir el fallo y abrir una ficha en Notion. Aclara que de momento no quiere que abra pull requests.
- 2:12 Dos avisos que da dentro de esa misma orden: filtrar lo que no va del juego, las groserías y los enlaces raros, y **decirle a la IA que esté atenta a las inyecciones de prompt**, porque está leyendo texto que escribe cualquiera.
- 2:12 Y termina, como siempre, con «repítemelo con tus palabras».

## Leer el feedback (2:17–2:19)
- 2:17 Llega de todo: informes de fallos, peticiones de función y opiniones de producto, como poder comprar oro extra aunque desequilibre el juego.
- 2:18 Un Bot clasifica todo el canal y publica gráficas en el propio Slack. **El 71 % son fallos y el 16 % son elogios.**
- 2:18 Los tres problemas más repetidos: el diseño en móvil, el emparejamiento que solo da IA y los puntos del marcador.
- 2:19 **Criterio de prioridades al lanzar**, dicho por Lauren como jugadora: primero fallos, estabilidad y rendimiento; las funciones nuevas después. El error habitual es lanzarse a la lista de ideas bonitas antes de que el bucle principal funcione bien.
- 2:26 Crea un Bot nuevo dedicado a triar feedback que trabaja con su Bot de pruebas para reproducir cada fallo y abrir la ficha solo si se confirma. Los primeros críticos que encuentra: pantallas en blanco, casillas vacías que no se pueden seleccionar y el marcador que se queda desactualizado.

## Que el enlace se vea bien (2:20–2:22)
- 2:20 Matt fusiona el favicon y las etiquetas de la página.
- 2:21 Enseña en el inspector las etiquetas Open Graph: título, descripción, nombre del sitio e imagen. Es lo que se ve al pegar el enlace en X.
- 2:22 Recomienda comprobarlo con un previsualizador antes de compartir nada.
- 2:22 La idea que deja: el primer paso para que te conozcan es contar bien qué eres, y añade que eso vale ya no solo para personas, también para agentes que leen tu web.

## Cifras y tono del tramo
- 1:52 225 seguidores en X · 2:23 476 · 2:23 más de 800, con un solo post.
- 2:12 Los seis primeros jugadores llegan a platino. Hablan de premiar a los diez primeros con planes del producto, con la aprobación pendiente.
- 2:24 **Nota de honestidad que conviene conservar**: reconocen que lanzaron demasiado pronto a propósito, para que el público jugara con ellos, y que un proyecto de verdad se habría pulido más.

## Para el curso
- Este tramo cierra el arco: ya no se construye, se opera. Métricas, feedback, triaje y prioridades.
- La frase de 2:05 sobre conectar herramientas por encima de montar Bots es la mejor candidata para cerrar el curso, porque resume lo que se ha visto en los tres días.
- El mensaje de 2:08 y el de 2:11 son dos plantillas de petición reales y completas; valen más que cualquier ejemplo inventado.
- El aviso sobre inyecciones de prompt al leer feedback de usuarios es contenido de seguridad que no había salido en los días 1 y 2.
- La lista de defensas del formulario sirve para una lección corta sobre aceptar texto de desconocidos.
