---
id: "25"
module: 8
title: "Atención al cliente"
description: "Un Bot que responde tickets con la base de conocimiento, devuelve pagos según la política, avisa de lo urgente y pide permiso antes de aprender algo nuevo."
level: advanced
minutes: 9
objectives:
  - "Dar a un Bot de soporte más autonomía por etapas: leer, redactar y responder"
  - "Separar lo que puede ver el cliente de las políticas internas y del proceso del Bot"
  - "Medir cuánto cuesta cada ticket y registrar trazas para saber por qué el Bot respondió así"
updated: "2026-09-17"
---

## Tickets que se repiten

En la primera pizarra del día 2, el equipo de Ship by Thursday ya se preguntaba cómo atendería a los jugadores: un correo, un teléfono o leer directamente el chat de X. Con un juego abierto al público llegarían las dudas de acceso, los fallos y las quejas. El taller de soporte de ese mismo día enseñó cómo contestarlas con un Bot sin perder el control.

La mayoría de los tickets de soporte preguntan lo mismo: cómo recuperar la contraseña, cómo pedir un reembolso o si pueden compartir su suscripción. La respuesta ya está escrita en algún sitio, en la ayuda pública o en una política interna. Aun así, alguien tiene que leer el ticket, buscarla, comprobar la cuenta del cliente y contestar.

Dejar que un agente responda a clientes asusta, y con razón. Esta lección enseña a darle esa autonomía poco a poco, con reglas claras sobre qué puede decir, qué puede hacer y cuándo debe pasarte el ticket.

## Gatear, andar y correr

Quien dio el taller lo resumió así. Primero, el Bot solo lee tickets y te dice cuál es el problema de fondo. Después redacta la respuesta y la deja como nota en el ticket para que la revises. Solo cuando confíes en él, responde directamente al cliente. Puedes quedarte en la segunda etapa todo el tiempo que quieras.

![Tres etapas de un Bot de soporte: primero lee y resume, después redacta la respuesta como nota y al final responde al cliente](/images/cursos/grok-bot/esquemas/25-etapas-soporte-es.webp)

### Tres niveles de conocimiento

La demo usaba Flylo, la aerolínea inventada, con un solo producto: el wifi a bordo por 20 dólares al mes. La base de conocimiento, en Notion, tenía tres partes separadas:

- **Documentación pública.** Lo que un cliente encontraría buscando en Google: inicio de sesión, facturación y preguntas frecuentes.
- **Políticas internas.** Lo que sabe el equipo pero no se publica. Por ejemplo, que un reembolso se aprueba dentro de los 14 primeros días y después no.
- **El proceso del Bot.** El bucle que sigue con cada ticket: leer, buscar en la base, decidir si responde o lo pasa a una persona, actuar y dejar una nota.

Separarlas permite que el Bot use una política para decidir sin copiarla en la respuesta al cliente.

### Un equipo pequeño que crece cuando hace falta

La demo tenía cuatro Bots. Build montaba la infraestructura, Reply respondía, Alert avisaba en Slack de lo urgente y Tune mejoraba la base de conocimiento. Quien presentaba insistió en no empezar así. Empieza con un Bot de nombre genérico, enséñale un flujo y sepáralo cuando crezca o necesites dos cosas a la vez.

### Trazas para saber qué pasó

Cada vez que Reply trabaja, escribe una traza en una tabla de Postgres, una base de datos. La traza guarda cuánto tardó, qué documentos miró y cuáles eligió para responder, también cuando es una prueba. Otra tabla guarda casos de prueba (evals) que se vuelven a pasar tras cada cambio. Si algo sale mal, la traza dice dónde, y el Bot de mejora las lee para proponer cambios.

## Poner a responder a un Bot de soporte

1. **Conecta el sistema de tickets**, el lugar donde vive la base de conocimiento y, si hay pagos, la herramienta de cobros. En la demo fueron Plain, Notion, Supabase, Slack y Stripe.
2. **Escribe la base en tres partes**: pública, políticas internas y proceso del Bot.
3. **Empieza en solo lectura.** Pide al Bot que lea diez tickets y te diga el problema de fondo de cada uno.
4. **Pasa a borradores como nota** en el ticket, con el nivel de confianza, el problema de fondo y la fuente que usó.
5. **Define cuándo no responde.** Si la base no cubre el caso, lo pasa a una persona. Si el cliente es importante, además avisa en Slack.
6. **Registra trazas y crea evals** antes de dejarle responder directamente.
7. **Empieza por el 20% de casos** que genera el 80% de los tickets y amplía desde ahí.

## Cinco tickets en la demo de Flylo

{{live d2 7:43:05 "El Bot responde un ticket de contraseña con su fuente"}}

**Contraseña olvidada.** Reply encontró la respuesta en la documentación pública, contestó al cliente y dejó una nota con confianza alta, el problema de fondo y el enlace a la página que usó.

**Inicio de sesión con Okta.** La base no decía nada del inicio de sesión único de empresa. Reply marcó confianza baja, pasó el ticket a una persona y Alert publicó un aviso en Slack porque parecía un cliente de empresa sin acceso.

{{live d2 7:49:51 "Un reembolso concedido y otro denegado"}}

**Dos reembolsos.** Carter acababa de suscribirse, así que Reply canceló la suscripción y devolvió el pago en Stripe. Damon llevaba unos 20 días, fuera de la política de 14. Reply denegó el reembolso sin citar la política interna y le ofreció cancelar al final del periodo para que no le cobraran otro mes.

**Compartir el wifi.** No estaba en la base. Reply no inventó una respuesta y propuso que Tune añadiera el caso a las preguntas frecuentes. Tune pidió permiso antes de tocar la base, se le dio con la regla correcta y Reply respondió con la nueva sección como fuente.

**Una pregunta interna.** Alguien del equipo preguntó en Slack cuál es el proceso de reembolsos. El mismo Bot respondió con la política interna, que a un cliente nunca le habría dado.

## Riesgos de dejar el soporte a un Bot

- **Responder sin base de conocimiento.** El Bot se inventa una política con buena intención. _Qué hacer:_ que pase el ticket a una persona cuando no encuentre la fuente.
- **Mezclar políticas internas con la ayuda pública.** El cliente recibe detalles que no debía ver. _Qué hacer:_ sepáralas y di en el proceso del Bot que las internas solo sirven para decidir.
- **Dejar que el Bot cambie la base de conocimiento solo.** Una respuesta mala se repite en cien tickets. _Qué hacer:_ que pida permiso, o que proponga el cambio como pull request si la base vive en GitHub.
- **Mensajes vagos.** "Responde a Alex" obliga al Bot a buscar entre todos los tickets y gasta más. _Qué hacer:_ dale el identificador del ticket o del cliente.
- **Dar la plantilla a todo el equipo sin límites.** Alguien sin contexto técnico pide "reembolsa a todos los que lo pidan". _Qué hacer:_ comparte una plantilla que no pueda editar la base ni ejecutar acciones de cobro sin aprobación.

## De un par de dólares a veinte céntimos

{{live d2 8:00:40 "De 1-2 dólares a 20 céntimos por ticket"}}

Quien dio el taller calculó que un ticket de dificultad media le costaba entre 1 y 2 dólares de uso. Para los sencillos, como una petición de reembolso o una pregunta sobre un correo, agrupó los tickets con un script y los respondió de una vez. Así bajó a unos 20 céntimos por ticket tras medio día de ajustes.

## Soporte con Bots sin sustos

- Sube la autonomía por etapas: leer, redactar como nota y, al final, responder.
- Separa ayuda pública, políticas internas y proceso del Bot.
- Si no hay fuente, el Bot pasa el ticket a una persona y avisa de lo urgente.
- Registra trazas y evals para saber por qué respondió así y para mejorar sin romper.
- Agrupa los tickets sencillos y da identificadores concretos para gastar menos.
