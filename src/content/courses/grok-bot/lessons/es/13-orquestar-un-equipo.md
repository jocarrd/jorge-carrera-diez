---
id: "13"
module: 4
title: "Orquestar un equipo de Bots"
description: "Coordina varios Bots a través de uno solo, guarda las reglas comunes en un playbook que lleva un Bot y da de alta Bots nuevos con los que ya tienes."
level: intermediate
minutes: 8
objectives:
  - "Montar un Bot coordinador que reparte trabajo y detecta bloqueos sin hacer el trabajo él mismo"
  - "Guardar las reglas del equipo en un único playbook del que se encarga un Bot, en lugar de copiarlas en cada uno"
  - "Dar de alta un Bot nuevo a través de otro que ya conoce el trabajo, y pedir a un Bot que cree Bots"
updated: "2026-09-17"
---

## Ocho Bots y tú en medio

Con tres o cuatro Bots todavía puedes escribir a cada uno. Cuando llegas a ocho, te pasas el día llevando novedades de uno a otro. Nadie sabe quién está atascado y acabas siendo la persona más ocupada de tu propio equipo.

El segundo problema aparece cuando cambias la forma de trabajar. Decides que cada resultado debe traer una captura. Pegas la regla en un Bot, luego en otro, y del tercero te olvidas. A la semana, los Bots no se ponen de acuerdo sobre las reglas.

Esta lección resuelve los dos problemas con dos papeles. Un Bot coordina y otro Bot guarda las reglas escritas.

## Un coordinador y un playbook

Piensa en una oficina pequeña. Una persona organiza la semana. Reparte el trabajo, pide novedades y avisa de lo que está atascado. Otra persona mantiene el manual del equipo, que cada incorporación lee el primer día. Un equipo de Bots puede funcionar igual.

![Esquema de un equipo de Bots: tú pides el resultado, el jefe de gabinete reparte el trabajo entre los Bots de datos, correo e ingeniería, y todos siguen el playbook](/images/cursos/grok-bot/esquemas/13-coordinador-es.webp)

### El coordinador

La documentación oficial recomienda empezar con poco (lección 11). Da a un Bot la responsabilidad de un resultado completo y añade otro solo cuando el trabajo tenga un rol especialista estable. En un grupo, "el coordinador puede asignar trabajo, mientras el grupo conserva los traspasos en una sola conversación" ([Create and manage Bots](https://docs.x.ai/grok-bot/bots)).

Al coordinador se le suele llamar *chief of staff* (jefe de gabinete). Tiene tres tareas:

- Recibe tus peticiones y pasa cada una al especialista adecuado.
- Recoge el estado del equipo y te cuenta solo lo que necesita tu atención.
- Detecta los bloqueos, lo que impide avanzar, y manda cada uno al Bot que puede resolverlo.

No debe hacer el trabajo de los especialistas. Pon esa regla en su descripción, que es donde van las reglas que deben cumplirse siempre (lección 03).

Mantén un responsable en cada fase, como en la lección 12. Demasiados traspasos en paralelo generan trabajo duplicado y avisos que solo hacen ruido.

{{live 4:16:08 "Un jefe de gabinete reparte trabajo entre Bots de ingeniería"}}

### El playbook y quién se encarga de él

La memoria de cada Bot es solo suya (lección 05). Por eso, una regla que le enseñas a un Bot no llega a los demás. Tienes dos formas de compartirla:

- **Una skill**, para un método. Las skills están disponibles para todos tus Bots (lección 06).
- **Un playbook** (el manual de trabajo del equipo), para reglas y flujos de trabajo. Es un documento que vive donde tu equipo ya guarda la información, como una página de Notion o un archivo en la carpeta compartida `/workspace` (lección 09). La documentación aconseja guardar los datos que cambian en ese tipo de fuente y no en la memoria de un Bot.

El equipo de xAI añadió un hábito más: **un solo Bot se encarga del playbook**. Cuando acuerdas un flujo nuevo con cualquier Bot, ese Bot se lo manda al responsable. El responsable actualiza el documento y anuncia el cambio al resto del equipo. Tú lo dices una vez. No hay un ajuste especial para esto. Se monta con una descripción, un documento y mensajes normales entre Bots.

{{live 4:29:46 "El responsable del playbook anuncia un flujo nuevo a todos los Bots"}}

### Dar de alta Bots y Bots que crean Bots

Un Bot nuevo empieza vacío. En lugar de pegarle tus instrucciones, pide a un Bot que ya las conoce que lo ponga al día. El nuevo guarda esa información en su propia memoria.

Un Bot también puede crear Bots. La documentación dice que tus Bots "pueden sugerir o crear un Bot centrado en una tarea cuando un trabajo necesita un responsable duradero". Recomienda pedirles que te consulten antes de crear varios, para que el equipo siga siendo pequeño.

## Montar el coordinador y el manual del equipo

1. **Crea el coordinador.** Elige **New** (nuevo) y, en **New chat**, **Create new agent** (crear un agente nuevo). Abre **Bot actions → Edit Profile** (acciones del Bot, editar perfil) y dale un nombre y una descripción como esta:

   ```prompt
   Eres el jefe de gabinete del equipo. Eres responsable del plan semanal del lanzamiento, no de las tareas que contiene.
   Tu equipo: Investigador, Redactor, Analista. Delega siempre el trabajo en el compañero adecuado.
   Recoge el estado, avisa de los bloqueos y cuéntame solo lo que necesite una decisión mía.
   No envíes nada fuera de la empresa sin mi aprobación.
   ```

2. **Dale un ritmo.** Pídele que cree una routine (lección 10) para preguntar al equipo y que no diga nada si no hay nada que te afecte:

   ```prompt
   De lunes a viernes a las 10:00 y a las 15:00, pregunta a cada compañero cómo va.
   Publica una lista corta con los bloqueos y las decisiones que tengo pendientes. Si no hay ninguno, no publiques nada.
   ```

3. **Elige quién se encarga del playbook.** Puede ser un Bot que ya tengas o uno nuevo de operaciones. Pon su trabajo en la descripción: "Te encargas del playbook del equipo en [enlace]. Añade los flujos que te manden otros Bots y anuncia cada cambio a todos los Bots del equipo".

4. **Haz pasar las reglas nuevas por el responsable.** Cuando acuerdes una regla con cualquier Bot, termina con: "Mándale esto a Operaciones para el playbook".

5. **Da de alta los Bots nuevos a través del equipo.** Cuando añadas uno, pide al coordinador o al responsable del playbook que lo ponga al día. Después pide al nuevo que te cuente qué ha guardado.

6. **Habla sobre todo con el coordinador.** Ve directamente a un especialista solo cuando necesites a ese Bot.

## Un Bot nuevo aprende las reglas de otro

En el taller de ingeniería del directo, quien presentaba tenía un jefe de gabinete y varios Bots de ingeniería. Instaló un Bot nuevo, un ingeniero de auditoría nocturna. El Bot nuevo no sabía cómo trabajaba el equipo, y no se lo explicó en persona. Le escribió esto a su Bot de ingeniería de siempre:

```prompt
Hola. Tengo un miembro nuevo en el equipo que se llama nightly. Cámbiale el nombre a Steve y explícale cómo se aplican los flujos de trabajo de ingeniería.
```

El Bot de ingeniería le mandó a Steve los requisitos. Explicaban cómo está organizado el tablero de tareas de Notion, qué significa "limpio", las fases del flujo y las reglas de lint (las comprobaciones automáticas de cómo está escrito el código). Steve lo guardó en su memoria y los dos Bots se lo confirmaron entre ellos.

{{live 4:18:13 "Dar de alta un Bot nuevo a través de otro"}}

Poco después, acordó con ese mismo Bot de ingeniería un flujo para bugs urgentes. Le pidió que se lo pasara a Jenny, el Bot de operaciones que se encarga del playbook en Notion. Jenny lo añadió y lo anunció a todos los Bots de ingeniería como norma fija. La lección 17 explica ese flujo.

Ese mismo día, antes, otra persona del equipo usó Dr. Eggbot, un Bot que crea Bots, instalado desde el marketplace. Le pidió que convirtiera su Bot por defecto en jefe de gabinete y que añadiera un Bot de prototipos con un nombre de comida. Dr. Eggbot no aparece en la documentación oficial, así que puede que no lo encuentres. Consigues lo mismo pidiendo a uno de tus Bots que te proponga un Bot nuevo.

{{live 2:05:40 "Un Bot que crea Bots monta un jefe de gabinete"}}

> [!TIP]
> Si te ves dando órdenes sueltas a cada Bot, para y dale la regla a quien organiza el equipo. El segundo día, una sola instrucción a Dr. Eggbot, el Bot que crea y ajusta los demás, hizo que todos los Bots de Lauren usaran Notion como fuente de verdad. Al cierre le pidió que leyera las conversaciones de todos y buscara dónde se atascaba el trabajo. El atasco era ella.

{{live d2 7:14:04 "Una regla para todos los Bots a la vez"}}

## El coordinador que trabaja en vez de coordinar

- **El coordinador hace el trabajo él mismo.** Llena su contexto de detalles de especialista y deja de coordinar. *Qué hacer:* escribe "delega siempre en tu equipo" en su descripción.
- **Copiar la misma regla en cada Bot.** Las copias se van separando y no sabes cuál es la buena. *Qué hacer:* ten un solo playbook con un responsable, y haz pasar los cambios por él.
- **Pedir a varios Bots que hagan la misma fase.** Recibes trabajo duplicado y avisos que solo hacen ruido. *Qué hacer:* nombra un responsable por fase.
- **Meter a todo el equipo en un chat de grupo para todo.** Contestan todos los Bots, lo que genera ruido y dispara el coste (lección 12). *Qué hacer:* usa un grupo solo cuando el propio traspaso tenga que verse.
- **Borrar un Bot en el que el coordinador todavía delega.** Nadie avisa al coordinador del borrado, así que sigue intentando mandarle trabajo. *Qué hacer:* dile al coordinador que deje de usar ese Bot y actualiza el playbook.
- **Dejar que un Bot cree Bots sin control.** El número de Bots crece más rápido de lo que puedes revisar. *Qué hacer:* pídele que proponga los Bots nuevos y espere tu sí.

## Un equipo que se organiza solo

- Un coordinador se responsabiliza del resultado, delega y solo te cuenta bloqueos y decisiones.
- Las reglas del equipo van en un único playbook, en un documento fuera de la memoria de los Bots, y un Bot se encarga de él y anuncia los cambios.
- Los Bots nuevos se ponen al día con Bots que ya conocen el trabajo. Comprueba qué han guardado.
- Tus Bots pueden crear Bots centrados en una tarea. Pídeles que lo propongan primero.
- Un responsable por fase mantiene limpios los traspasos.
