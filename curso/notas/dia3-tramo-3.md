# Día 3 · tramo 3 (1:05:00–1:51:00)

## Cierre de la charla de marketing operations (1:05–1:10)
- 1:05 Acogida interna de la aplicación de leads: los comerciales la usan de verdad. La imagen que da ella es la de ir en el metro deslizando fichas mientras alguien mira por encima del hombro sin entender nada. A las dos semanas, récord en tasa de leads revisados y bandejas a cero.
- 1:06 Lo que gana frente a lo anterior: el comercial ya no abre cinco menús y cinco pestañas para ver de qué anuncio salió un lead y luego tres menús más para cerrarlo.
- 1:07 **Última pregunta del público, y la más útil para el curso: qué tareas deben seguir siendo de una persona.** Su respuesta no es una lista de tareas sino un criterio: las relaciones. Recuerda que nadie a los cuatro años sabía lo que era RevOps, y que casi nadie sabe hoy definirlo del todo; son conceptos que inventamos para repartir especialización en herramientas y procesos. Lo que no cambia es formar relaciones, generar confianza y resolver el problema con lo que haga falta.
- 1:09 Anuncian un concurso en X: compartir un Bot del que no puedas prescindir, siguiendo a las cuentas de Grok y del producto y citando el post, con un viaje a Starbase a ver un lanzamiento de Starship como premio.

## Vuelta al estudio: el día del lanzamiento (1:21–1:24)
- 1:21 Roshan retoma la emisión solo: Lauren y Matt están desplegando. Avisa de que van a enseñar poca pantalla porque están manejando secretos de producción en directo.
- 1:22 Sitúa el día: tercero de tres, el estudio de videojuegos ya decidido, y hoy toca sacar el primer juego. Están dando una mano de pintura a la interfaz mientras tanto.
- 1:23 Plan del día: sacar una prueba de juego pronto, abrir un canal de feedback dentro de la propia aplicación y por la tarde traer gente de la casa para el plan de marketing y el de ingresos.
- 1:23 **La frase que enmarca el lanzamiento**, ya clásica en startups: si no te da un poco de vergüenza lo que lanzas, has esperado demasiado. La usan para justificar salir con la interfaz sin pulir.

## La pila real con la que despliegan (1:24–1:27)
- 1:24 Núcleo: Grok Bot. Encima, la fábrica de software con GitHub: arreglo automático de errores, revisión automática de pull requests y un Bot que juega la partida para verificar.
- 1:24 El bucle completo: un Bot detecta un fallo en producción, lanza un agente en la nube que lo arregla y abre una pull request; el Bot de pruebas coge ese cambio, lo pasa por el motor del juego y aprueba si va bien, además de los pasos de integración continua.
- 1:25 **Clerk** para autenticación, que es lo que hace funcionar el inicio de sesión con X y el marcador por jugador con puntuación Elo. Hay además un modo de práctica sin cuenta.
- 1:26 **Vercel** como alojamiento. Hasta ahora probaban cada pull request en enlaces de vista previa, que es de donde tiraba el Bot de pruebas. Pasar a producción obliga a endurecer base de datos, entradas y salidas, y permisos.
- 1:26 **PlanetScale** como base de datos, con varias instancias para el juego y la tienda. La noche anterior dejaron corriendo pruebas de carga contra ella.
- 1:27 **Notion** guarda el contexto de la empresa: tablero de tareas donde escriben los agentes, esquema canónico de la base de datos y las mecánicas del juego como fuente de verdad. Roshan admite en directo que los agentes lo han dejado desordenado.
- 1:27 **Slack** con un canal de informes de errores. Cuenta que internamente usan Bots de triaje que entran al problema, comprueban si se reproduce, miran registros y vuelven con un arreglo en vez de con un informe que otro tenga que convertir en código.

## Lo que se rompe al pasar de desarrollo a producción (1:25–1:31)
- 1:25 Están depurando en ese momento un problema de DNS y otro de CORS. La broma que sueltan, «siempre es DNS», y acto seguido «a veces siempre es CORS».
- 1:29 Al cambiar de desarrollo a producción hay que reconfigurar todo el OAuth y las URL de retorno. Roshan lo define como el trabajo de pegamento: ni divertido ni lucido, pero es la mitad de montar algo de verdad.
- 1:30 **La analogía de la lámpara, que es el mejor material del tramo para explicar depuración.** Si una lámpara no enciende, lo primero es comprobar la bombilla y el enchufe. Si los dos extremos están bien, el fallo está entre medias, y el trabajo consiste en saber cuántas cosas pueden fallar entre el punto A y el punto B. Con software es idéntico.
- 1:31 La conclusión que saca: los agentes hacen el recorrido manual que antes hacías tú, pero el principio no cambia. Hay que seguir sabiendo dónde puede romperse la cadena.

## La lista de lanzamiento, escrita en directo (1:31–1:35)
- 1:31 Roshan mira el panel de Clerk y ve el primer usuario en producción. Es él mismo. A los pocos segundos ya son tres.
- 1:32 Abre Notion y escribe la lista de comprobación del lanzamiento delante de la cámara, en vez de traerla hecha.
- 1:33 Aprovecha para repetir la idea de Lauren del primer día: para un agente que programa, el mejor contexto es el propio código; para lo operativo hace falta escribir documentos.
- 1:34 **La lista acaba teniendo un solo punto de verdad, la autenticación, y ya estaba hecho.** Deciden no esperar a la reescritura de la interfaz y salir con expectativas rebajadas: es una prueba de juego, no está pulida y se va a romper.

## El juego, explicado jugando (1:36–1:44)
- 1:36 Es un auto-battler por cartas. Hay modo de práctica contra una IA que reconocen que es mala.
- 1:36 **Las cartas son plantillas reales del marketplace de Grok Bot**, con avatar generado. Rarezas: común, poco común, rara y épica, y hablan de reservar alguna legendaria, quizá para plantillas que mande el público.
- 1:37 Cada carta tiene dos valores, ataque y vida, más una habilidad propia. La partida va a tres rondas, empiezas con 10 de oro y en cada ronda compras, vendes y colocas tu alineación contra la de otro.
- 1:37 Ejemplos que enseña: una carta que recupera un punto de vida cada vez que la golpean por delante, otra que hace un punto de daño al enemigo de la primera fila al empezar, otra que da ataque al aliado que tiene delante.
- 1:39 Lo que hace que el juego funcione es el orden de la alineación: las habilidades se modifican entre ellas, así que colocar es tan importante como comprar.
- 1:38 **Fallo encontrado en directo**: una carta pierde el nombre y aparece como «unknown bot». Lo apuntan para arreglarlo y siguen jugando.
- 1:40 Otro apunte de diseño que sale de jugar: el combate va tan rápido que no se entiende. Deciden ahí mismo que la versión mínima debe permitir avanzar a clics, con un botón de reproducción automática.
- 1:43 Antes de lanzar cuentan una costumbre de la casa: recorrer entero el producto paso a paso, todos juntos, antes de sacarlo.

## El lanzamiento (1:44–1:51)
- 1:44 Enseñan el menú de Bots y aparece otro fallo que no habían pedido: el Bot había añadido algo de más.
- 1:45 Invitan al público a compartir plantillas de Bot desde el botón de compartir de Grok Bot, con la promesa de meter alguna en el juego.
- 1:45 Huddle de cinco segundos y deciden lanzar. Matt publica el primer post porque es el único con sesión iniciada.
- 1:47 **Revelan las dos fuentes oficiales: la cuenta @ThursdayArena en X y el dominio thursdayarena.com.** Avisan expresamente de que cualquier otra cuenta o dominio relacionado no es suyo.
- 1:47 La cuenta sale con foto de perfil por defecto y sin datos. Lo comentan como parte de la gracia: así es montar algo de verdad.
- 1:48 Matt enseña una herramienta propia suya, una web para descargar cualquier emoji de Apple como PNG, y saca de ahí la primera foto de perfil.
- 1:49 Aviso de SEO mientras esperan: la información que se ve al compartir el enlace o al buscarlo en Google hay que trabajarla, y no la tienen.
- 1:49 **Llegan jugadores.** El marcador pasa a 96 personas en minutos y no saben si tienen paginación. El inicio de sesión funciona. Roshan es el primero de la tabla y la pierde en directo.
- 1:48 Lo llaman misión secundaria del juego: cuántos seguidores consiguen para la cuenta.

## Para el curso
- Este tramo es el material del cierre. Hay una lista de lanzamiento escrita en directo, el paso de desarrollo a producción con sus averías reales, y el momento en que entran los primeros usuarios.
- La analogía de la lámpara sirve para la lección de depuración: explica sin jerga por qué el criterio sigue siendo tuyo aunque el recorrido lo haga un agente.
- La respuesta sobre qué debe seguir siendo humano encaja con lo que ya dijeron los invitados del día 1 y del día 2, y da un cierre coherente a ese hilo del curso.
- La pila concreta (Clerk, Vercel, PlanetScale, Notion, Slack, GitHub) conviene citarla como lo que es, la pila de ellos, no como recomendación.
- Comprobar en la documentación antes de escribir: si el marketplace de plantillas y el botón de compartir funcionan como los describen aquí.
