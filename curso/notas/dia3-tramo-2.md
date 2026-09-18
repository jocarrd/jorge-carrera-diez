# Día 3 · tramo 2 (0:45:00–1:05:00)

## Charla de marketing operations · cómo se construyó la app de leads (0:45–0:52)
- 0:45 Encargo de partida: le dice a **Juno**, su bot de producto, que quiere una aplicación interna para que los comerciales revisen sus leads. Da la mecánica a grandes rasgos y marca desde el principio lo crítico: que la escritura de vuelta al CRM sea correcta.
- 0:46 Diferencia que subraya frente a otras herramientas: la IA que "quiere agradar" se lanza a programar con el primer prompt y construye lo que no era, y eso te deja escribiendo prompts a la defensiva. Grok Bot **se para y pregunta** antes de construir.
- 0:47 Ejemplo real de pregunta que ella no había pensado: qué campos deben cambiar en el CRM cuando se acepta un lead. Su respuesta es que **ninguno**, porque el estado cambia cuando el comercial contacta y ya hay una automatización que lo registra. La pregunta del bot la obliga a afinar su propia idea.
- 0:48 Otras decisiones que salen del interrogatorio: mostrar solo leads nuevos sin filtros extra, pedir motivo y notas opcionales al descartar, y qué hacer con acciones sin conexión (encolar y confirmar).
- 0:49 **Juno escribe la especificación y se la pasa por su cuenta a Owned**, el bot de ingeniería, para que empiece a construir. Ella no se lo pidió. Ese traspaso automático entre bots es lo que destaca como diferencia: normalmente el resultado de una herramienta hay que llevarlo a mano a la siguiente.
- 0:50 Enseña el resultado con datos falsos: ficha del lead de un vistazo, deslizar a la izquierda para descartar, a la derecha para meterlo en una secuencia, y el origen del lead a la vista.
- 0:51 Cifras del proyecto: **de la idea a producción en dos semanas, con unas diez horas de construcción real**. El resto del tiempo fue enseñar la herramienta, acompañar a la gente y recoger peticiones.
- 0:51 Resultado a las dos semanas: sube la tasa de leads revisados, los comerciales la usan y marketing por fin recibe información de calidad para afinar la segmentación.

## Las tres lecciones que deja (0:53–0:55)
- 0:53 **Piensa a quién contratarías.** Si te dieran presupuesto para un equipo entero, ¿quién estaría? Su lectura: esto pone al alcance de cualquiera contratar especialistas con el contexto y los accesos adecuados.
- 0:53 **Confía y pon barandillas a la vez.** Saber exactamente a qué tiene acceso cada Bot es lo que te deja delegarle tareas cada vez mayores, porque sabes que vuelve a preguntarte antes de hacer nada que se publique: mandar mensajes, escribir en el CRM o subir un PR.
- 0:54 **Deja de ser quien dicta normas.** Su llamada a la gente de operaciones: eres product manager y tu producto es el crecimiento. El trabajo es detectar cuellos de botella y quitarlos.

## Preguntas del público (0:55–1:05)
- 0:56 **WhatsApp.** No promete conector nativo. La vía que cuenta es instalar una aplicación de mensajería en **el ordenador del propio Bot**: no hacen falta integraciones nativas, el Bot usa la aplicación como lo harías tú.
- 0:57 **Anuncios de Meta y Google.** No puede hablar de hoja de ruta, pero menciona la integración con **1Password anunciada el día anterior**: compartes el baúl de contraseñas con el Bot y puedes dejar una routine que vigile si la sesión sigue activa y vuelva a autenticarse cuando caduque. Es la respuesta al problema de que las sesiones se cierran solas.
- 0:59 **Cómo automatizar un trabajo complejo de punta a punta.** Partirlo en bloques: entrar en la plataforma, descargar el informe, cruzarlo con el resto de datos, y así. Un Bot especializado por bloque, trabajando en cadena. Y una idea útil: quien ya sabe escribir instrucciones detalladas parte con ventaja para montar Bots.
- 1:00 **Relación entre persona y Bot.** Lo describe como un espejo: el Bot saca aspectos que no habías pensado y eso te hace pensar a ti. "En cierto modo nosotros damos instrucciones a la IA, y en cierto modo la IA nos hace pensar más a fondo".
- 1:02 **Qué desaparece.** Menos clicar botones y menos cablear integraciones. Lo que queda es el criterio: entender los sistemas, el oficio y el gusto. Compara con lo que ya pasó en programación cuando bajó la barrera de entrada.
- 1:04 **Dos bots de dos personas en el mismo proyecto.** No lo puede contar; lo dejan en que hay trabajo en marcha y alguien remata en broma que "falta el multijugador".

## Para el curso
- Esta charla da el material para una lección de operaciones: el bot que pregunta antes de construir, el traspaso automático de producto a ingeniería y las barandillas como condición para delegar.
- El dato de las dos semanas y las diez horas de construcción es bueno para hablar de expectativas sin vender humo: lo que cuesta no es construir, es adoptar.
- Confirmar en la documentación antes de escribir: la integración con 1Password y si existe conector de WhatsApp. Lo de instalar aplicaciones en el ordenador del Bot sí encaja con lo ya enseñado en el módulo del ordenador.
