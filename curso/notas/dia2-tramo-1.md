# Día 2 · tramo 1 (0:10:03–2:05:50)

## Estudio: el giro (0:10–0:29)
- 0:10 Presentaciones. Matt: los invitados del día 1 avisaron de lo difícil que es un pop-up en SF (licencias, restricciones). "Pusimos agentes a trabajar por la noche y volvimos con feedback: quizá no es algo que podamos hacer en dos días". "The agents sold us a pivot". Tampoco sería entretenido de ver en directo.
- 0:11 Nueva idea: empresa de videojuegos. Primer juego: conviertes una plantilla de Grok Bot en personaje y compites contra las de otros.
- 0:12 Pizarra en directo. Plantillas de Bot: compartir un bot con skills, routines y memoria seleccionada (sin filtrar datos).
- 0:15 Stats: carisma, destreza, inteligencia; habilidad con nombre ("Rizz" de Dr. Eggbot); equipo de 3 bots. Stats deterministas: "acuñar" el bot; pool total 100, mín 1 máx 98; un LLM lee la descripción del bot para repartir. Rareza tipo Diablo (común→legendario) sube el pool.
- 0:19 Monetizar sin pay to win: cosméticos ("pagaría un dólar por un sombrero"), objetos únicos con Grok Imagine, arenas; estadio con publicidad; ver repeticiones de otros.
- 0:22 "En el 0 a 1 solo importa crecer; la monetización después".
- 0:24 Matt: un negocio de juegos es igual que cualquier otro: distribución (directo, SEO/AEO, landing, anuncios), atención al cliente (correo, teléfono, chat de X), operaciones con bots. "Sirve igual para una app o para las operaciones digitales de un negocio físico".
- 0:26 Flujo MVP: plantilla → draft del equipo → alineación → contra otra alineación. Empezar con una versión ajustada con margen para crecer.
- 0:28 Lauren escribió el plan mientras hablaban con el playbook de planificación de P-stack (checklists de verificación, pseudocódigo de tipos; le importan estructuras de datos y firmas).

## Sesión: Grok Bot para sales engineers (0:29–1:23) Amrita, field engineer
- Del chat a un equipo de colegas; "trabajo terminado", no algo que vigilar.
- App en Android, iOS y Mac. Memoria larga; ordenador propio (puedes tomar el control; admin bloquea webs y descargas); routines: digest diario de newsletters y podcasts en Slack; bueno para equipos distribuidos; compartir bots dentro de la empresa da consistencia.
- Bots: Mimi (diapositivas de casos de cliente con plantilla problema/solución/impacto/cita, busca el logo en la web de marca), Sherlock (experto técnico con acceso al repo vía agentes en la nube de Cursor; no revela IP; explica para cliente), Serena Williams (inteligencia competitiva: usa los productos de la competencia en su ordenador), Echo (deck durante la llamada).
- Demo Flylo (app de reservas ficticia). Sherlock: condición de carrera al reservar el mismo asiento → la protección está en Postgres; reserva 10 min al empezar checkout; redacta la respuesta al cliente.
- Serena pregunta a Sherlock qué soporta Flylo sin que nadie se lo diga; prueba Southwest y Spirit en su ordenador. Steering a mitad: "mira también agentes de viaje con IA" → incorpora sin abandonar lo anterior.
- Grupo con Sherlock y Serena; se etiquetan entre ellos; salen dos diferenciadores de bajo esfuerzo (gestionar reserva; calendario de fechas flexible ya existente en el front sin llamar).
- Sin MCP no es bloqueo: el bot entra con su ordenador (Power BI, MongoDB).
- Teach a Task: graba cómo busca en el blog técnico de Expedia posts de IA; lo aplica a otros; aclara por voz qué importaba. Skills disponibles para todos los bots.
- Pide a Sherlock: "¿qué bots os ayudarían?" → crea BattleCard Blair, Demo Drake ("sin alucinaciones, apoyado en Sherlock"), AI Radar (quizá sobra, se parece a Serena).
- Mimi: tuvo que iniciar sesión por ella; slide de Salesforce lista en 10-15 min; plantilla para que no salga "sloppy" ni el morado de IA. Routine para buscar posts nuevos de clientes.
- Grok "empuja en contra, no es servil".
- P&R: CAPTCHA/baneos (depende del sitio; empresa: bloquear Facebook); MCP vs computer use (MCP más rápido y fácil de vigilar hoy; computer use crecerá); producción: auto review → "ask first" para desplegar o sistemas internos; herramienta que no corre en Linux sin MCP → no hay forma; tokens: Grok 4.6 barato; su deck 20-30 $ frente a 4-5 horas; pedirle menos verbosidad ahorra.

## Estudio (1:23–2:05)
- Lauren sin conexión; Matt conduce y Lauren hace de copiloto.
- Matt: founding engineer con skill personal de planificación de proyectos (scaffolds T3, TanStack, Expo, Next, Vite; guías de UI; skill "make interfaces feel better"); plan de lander con OG tags; el Bot aplicó "restar antes de sumar": quitó auth y waitlist. Lo lanza a agente en la nube de Cursor con /potato mode. "Grok Bot es un harness ligero; Cursor, uno de código".
- Director creativo: DialKit (sliders para UI), Phaser, Super Auto Pets → asset playground.
- Lauren: tu bot principal con contexto (Steve) habla con Dr. Eggbot para crear un ingeniero que orqueste agentes en la nube, supervise y compruebe; que no sea solo de prototipos. Añadir "repítelo con tus palabras antes de empezar" = escucha activa.
- Sliders para constantes del juego (bonus 22%): "acortar el tiempo hasta la diversión" sin esperar al agente.
- Matt: 1.200 emojis Bufo en Slack con computer use. Bot de conocimiento documenta el giro en Notion; siguientes: AEO/SEO, A/B.
- 1:40 Problemas técnicos, corte hasta 1:48.
- 1:48 Lauren en Cursor: agente local sin el contexto del bot → docs del repo; que repita el juego (ELO, alineación oculta). Prototipo: sin login, sin BD, varios prototipos, paneles debug con sliders. "Si el juego no es divertido, lo demás da igual". Bots de semilla del marketplace.
- Potato mode = skill router; principios: experience first, "ship less but ship better", prototipos en HTML desechable. Skill architect: cuatro modelos compiten por el plan (lo salta para prototipo).
- Diseño: vanilla HTML/CSS/JS en memoria, tres variantes de UI, tipos y máquina de estados.
- 2:00 ¿Cuándo leer y cuándo delegar? En Grok Bot (maduro) ya hay arquitectura amigable para agentes; en un proyecto nuevo, estar en el loop para ver qué errores repite.
- 2:02 Bug: stats no suman 100 → corregido. Design Mode: "este input no desliza bien".
