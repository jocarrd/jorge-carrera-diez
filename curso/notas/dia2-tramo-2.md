# Día 2 · tramo 2 (2:05:50–4:11:19)

## Historia del estudio
- 2:05 Prototipo de la mecánica: la partida se resuelve al instante tras el emparejamiento; la animación es una capa encima. Herramienta de debug para simular partidas y ver el efecto de los bonus (Dr. Eggbot pierde ronda 1 aunque tenía 22% de ventaja).
- 2:08 Lauren pide mocks de pantallas con generación de imagen; referencia visual Super Auto Pets. Roshan enseña un prototipo "vibe coded": binder de cartas legendary/common, orden del equipo, ELO, replay IDs.
- 2:13 Vídeo: Marcel, Icon Coffee (Potrero Hill). Bot "Rex" jefe de gabinete con acceso API al TPV; pregunta por ventas de hace dos años desde el móvil; foto del menú → qué quitar; portal del colegio de su hijo.
- 2:16 Mocks muy cargados de texto; idea gacha. Lauren aplica una librería CSS de brillos tipo Pokémon: "way too shiny", todas las cartas iguales. Admite que dirigió mal al agente ("me hice nerd snipe").
- 2:19 Lauren lee los bloques de thinking; consejo: cada vez que ves al agente razonar mal, conviértelo en skill (o actualiza una) en vez de corregir y seguir.
- 2:21 Balance: stats permanentes por bot → todos usarían el legendario compartido. Propuesta: rareza aleatoria separada de las stats base.
- 2:24 Design Mode de Cursor: dibujar un área de la pantalla y pedir cambios. Dudas de jugabilidad: el orden no importa, no hay estrategia; ideas: vida que pasa de ronda, arenas que cambian condiciones.
- 2:39–3:03 Karen X. Cheng (creativa, >3M seguidores): periódico personal que se imprime de madrugada (calendario, correo, paquetes, tiempo, newsletters con resumen, cómic de tu día, crucigrama con pistas de tu vida). Plantilla en marketplace (categoría personal), newspaper.karenxcheng.com. Prompt de ~30 páginas: primero preguntas de configuración, luego reglas de maquetación; plantilla PDF/CSS en Cloudflare. Busca impresoras en la wifi y imprime sola. Privacidad: por defecto no pone cifras financieras ni datos médicos. Rastreador de paquetes (revisa correo 2/día, más a menudo cuando está en reparto, entra en Amazon, captura de paradas) conectado a pantalla split-flap Vestaboard con API key en 2 minutos, frente a días en Cursor. "Ya no es vibe coding, es vibe creating". Back-in-stock tracker; tracker de series; iMessage con lógica si-entonces (captura del repartidor de Instacart cada 2 min a una amiga). Petición: gestionar mejor las sesiones (se desloguean en la VM).
- 3:10 Lauren pasó el descanso en tldraw dentro del navegador de Cursor: el agente ve el dibujo por captura y lo usa de contexto. Flujo: capitán + 2 bots, orden por arrastre, buscando partida, rondas de una en una. Ocultar números: fuerza en categorías, legendario revelado al usarlo; tiers (Diamond) en vez de ELO, número en tooltip.
- 3:18 Design Mode para feedback directo; "push a main, no hay tiempo para PRs"; luego Lauren: "pasaré a PR ya que somos tres".
- 3:25 Investigación de frameworks de animación: prototipos pequeños antes de construir. Bots en código (2D), Grok Imagine solo para iconos de habilidades.
- 3:31 Matt: patrón Imagine + FAL (modelo de quitar fondo) para iconos con fondo transparente.
- 3:33 Lauren pide a su jefe de gabinete que Cupcake Eng hable con el bot ImageGen y le explique la mecánica.
- 3:34 La descripción del Bot funciona como "alma"/system prompt; Dr. Eggbot le da una sola función. Aviso: cuando una regla o skill nace de un problema concreto, el agente la sobreajusta con detalles; se vuelve "sopa de ejemplos". Pide a Dr. Eggbot reescribir con principios. Etiqueta del Bot: cosmética.
- 3:39 "Comment sicko", agente de P-stack que borra comentarios: los agentes usan comentarios como muleta para explicar parches en vez de arreglar la causa.
- 3:42 Roshan: debug menu no debe ir tras feature flag (código enviado igual); lógica de combate en servidor para evitar trampas.
- 3:44 Multitask mode de Cursor: etiquetar varios cambios de diseño y lanzar un subagente por cada uno.
- 3:46 Matt: lander con Grok 4.6 low effort fast en design mode; el agente había inventado bots → le pide bots reales del marketplace. Debate lander vs directo a login; se quedan hero + botón jugar.
- 3:50 QR para instalar Dr. Eggbot (también hace health check).
- 3:51 Reparto: Lauren auth + servidor anti trampas + estadio con anuncios (marketplace de anuncios moderado); Matt assets/tutorial/iconos; Roshan bucle principal. Re-roll infinito → bots secundarios ocultos. Cursor verifica jugando la partida él mismo.

## Sesión: Grok Bot para ventas (4:00–) Christa Lutz y Mark Wright (GTM)
- Madurez: chat → tareas → bots que llevan flujos completos; futuro "staff" de bots.
- Casos: pipeline, preguntas técnicas sin molestar al sales engineer, Echo (llamadas), jefe de gabinete, forecasting.
- Equipo de Christa: Olive (jefe de gabinete, prepara el día, borradores de correo como tarjeta), PG (prospección), Echo (tras parar la grabación de Granola actualiza la presentación con lo que dijo el cliente; traduce diapositivas al japonés), experto en cliente (uso antes de renovaciones, hilos de Slack, cruza changelog con peticiones de hace un mes), ingeniero.
- Consejo de consumo: pocas routines, 1-2 al día; más es ruido.
- PG skill en marketplace: 5 cuentas de Salesforce → 5 contactos → ganchos personales (posts en X del CTO, podcasts y webinars que el bot ve) en vez de datos genéricos; hoja con ranking; borradores en Gmail. Conectar la API de X.
