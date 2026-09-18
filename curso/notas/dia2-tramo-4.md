# Día 2 · tramo 4 (6:17:30–8:19:50)

## Final de la sesión SDRs (6:17–6:39)
- Routines 8:00 entre semana: escanear todas las cuentas por señales nuevas (altas, descargas); "speed to lead".
- Sequencer con routine disparada por trigger de Salesforce: si la cuenta cambia de etapa, saca a la gente de la secuencia.
- Todo en CSV "feo": el usuario no debería mirarlo, es el cerebro del bot. Borradores en Gmail; pide al jefe de gabinete una nota de confianza de cada correo.
- Copy: al principio los correos salían con plantilla cambiando nombres. Pedir ejemplos y criticar cada uno: "ningún correo debe parecer una plantilla".
- Un bot por plataforma (Shakespeare = correo), pensar en qué corre en paralelo. Solo habla con el jefe de gabinete y crea el resto desde él.
- Bots: PLG (Salesforce, uso, closed-lost), voice of customer, Amplemarket (enriquecer y validar correos), company research (Sumble: stack tecnológico por ofertas de empleo, organigrama), web search con "army" de soldados: huddle que reparte 200 empresas en 5×40 en paralelo, en chat de grupo para ver resultados y escalar.
- Ejemplo: closed-lost por función que faltaba → ahora existe → sube en el ranking.
- Skill de ICP que se actualiza según avanzan los deals: si cambia, está en un sitio.
- Colores por fase para ver de un vistazo qué hace cada bot.
- Aprendizajes: end to end (dolor al principio); hablar solo con el jefe de gabinete; no crear bots de más ("he tenido demasiados, más caos que ayuda"), ¿por qué no puede hacerlo uno existente o una routine?
- P&R coste: depende; pregúntale a Grok Bot por tu consumo; quizá 250 semanales el lunes mejor que 50 al día.
- P&R para empezar: describe tu flujo al Bot y que te proponga cuántos bots.

## Estudio (6:39–7:30)
- Promo: primeros 1000 que dupliquen Dr. Eggbot desde el QR → mes gratis ($200).
- Roshan pasó el prototipo a Next.js; cliente y servidor separados para que el servidor decida (anti trampas) y poder probar varios clientes (3D, pixel art, terminal).
- Leaderboard global (placeholder). Jefe de gabinete crea to-do en Notion; Lauren creó con Dr. Eggbot un bot de investigación de game design que escribe un doc en Notion.
- Bake, founding engineer de Roshan, vigila el repo: routine de GitHub en cada PR.
- 6:47 Los tres crean a la vez un bot de Slack por voz con Dr. Eggbot; a dos les pone el mismo nombre, Ping.
- Notion como base de datos con vistas (kanban/checklist); bot que escucha el tablero y empieza lo que pasa a "en curso". Notion = fuente de verdad; Dr. Eggbot lo aplica a todos los bots.
- Remotion: assets de vídeo como código en 9:16/16:9/1:1. Figma para marcos de iPhone.
- Casos de la comunidad: Lenny Rachitsky paga multa de aparcamiento con integración de pagos; vender en marketplaces (fotos y etiquetas); fichas de cálculo para niños.
- Routines por eventos: Datadog, Sentry → bots que investigan.
- 7:02 Anuncian integración con 1Password ("ojalá la hubiéramos tenido ayer").
- "Fleet pulse": los bots escriben un resumen de hechos de todos los bots de Ship by Thursday.
- Feedback factory: triage automático del feedback de jugadores a Notion.
- Ads MVP: el agente propone modelo de anunciantes/campañas/creatividades; demasiado complejo, lo recortan.
- Nombre provisional "Cupcake"; login con X; capitán + amigos; ELO y leaderboard.
- Bot crit (game design) con consejos; Lauren: suena a IA → skill unslop / plain English de P-stack (más de 40 skills).
- Documento canónico de game design compartido. Cuando micromanejas bots con órdenes sueltas, es hora de orquestar con Dr. Eggbot.
- 7:18 Tests fallan; "los agentes no escriben buenos tests"; borran todos los tests: primero sacarlo, la fábrica de calidad después.
- 7:20 Cursor projects: coordinador de larga duración con memoria compartida entre subagentes; Tater trabaja con el project agent (5 subagentes); playbook Full Autopilot de potato mode: agentes que implementan + verificadores + enjambre que hace fuzz simulando usuarios. Todo en la nube: cierras el portátil.
- Prototipos 2.5D/3D con vídeo grabado por el agente; música: bot Tones con tarea en Notion.

## Sesión: Grok Bot para atención al cliente (7:30–8:09) David, user ops
- Siempre encendido, fácil, conectores (Plain, Zendesk, Intercom, Slack, Notion); lo que falta lo construye con agentes en la nube.
- Casos: responder tickets (gatear, andar, correr: leer y resumir → borrador como nota → responder), alertas (routine horaria: amenaza de baja + cliente >6 meses → Slack), Q&A interno con la base de conocimiento, automejora con trazas.
- Demo Fly Low (wifi $20/mes): bots Build, Reply, Alert, Tune. Empezar con uno genérico y separar cuando crezca.
- Base de conocimiento en Notion: docs públicos, políticas internas (reembolso ≤14 días), proceso de Reply (leer, buscar, decidir responder o pasar, actuar, dejar nota).
- Ticket contraseña: responde con confianza alta, causa y fuente. SSO Okta sin docs: baja confianza → handoff + Alert a Slack por cliente enterprise.
- Reembolsos con Stripe: Carter (recién suscrito) cancela y reembolsa; Damon (20 días) deniega sin filtrar la política interna y ofrece cancelar al final del periodo.
- Compartir pase: no está en docs → propone a Tune añadirlo; pide permiso antes de tocar la base de conocimiento; luego responde.
- Slack interno: "¿cuál es el SOP de reembolsos?" → responde con info interna.
- Aprendizajes: guardarraíles (solo lectura, aprobaciones, permisos por bot), empezar simple, que se adapte a cómo trabajas.
- P&R coste: 1-2 $ por ticket medio/complejo; agrupando tickets simples con un script, ~0,20 $.
- Trazas y evals: Supabase/Postgres, tabla de evals y de trazas (duración, ficheros mirados, elegidos) en cada ejecución, incluso dry run; el bot de mejora las lee.
- No técnicos: plantillas con límites; base de conocimiento en GitHub → PR, code owners, Bugbot, evals contra la rama.
- Tokens: dar IDs concretos en vez de "responde a Alex" (tiene que buscar).
- Empezar: el 20% de casos que genera el 80% de tickets.

## Cierre del día (8:10–8:19)
- Música: bot con Strudel (música como código) y prompts para Suno; "música de batalla", "draft room energy".
- App con backend: login con X real, leaderboard vacío, bug al añadir bots; se importará un bot pegando el enlace de Dr. Eggbot. Ambos Gold 1000.
- Bots de Lauren: Whisk (game designer), Crumb (play tester que hace clic por la app).
- Consejo: pedir a Dr. Eggbot que revise todos los chats: cuellos de botella → "human merge", "Lauren is the interrupt bus".
- Matt: marketplace de anuncios para mañana, sin rebase.
- Mañana: desplegar, nombre, jugar con el chat, hacerlo viral.
