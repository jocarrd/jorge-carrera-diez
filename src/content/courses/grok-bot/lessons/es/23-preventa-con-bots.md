---
id: "23"
module: 8
title: "Preventa con Bots"
description: "Un experto técnico que lee el código, diapositivas de casos de cliente con plantilla y un Bot que prueba los productos de la competencia en su ordenador."
level: advanced
minutes: 8
objectives:
  - "Montar un Bot que responda preguntas técnicas de clientes a partir del código, sin revelar lo que no debe salir"
  - "Generar diapositivas de casos de cliente con una plantilla fija para que no parezcan hechas por una IA"
  - "Poner a un Bot a probar productos de la competencia y a cruzar lo que ve con otro Bot"
updated: "2026-09-17"
---

## El cuello de botella de la preventa

Ship by Thursday todavía no vendía nada el día 2, pero su pizarra de la mañana ya apuntaba lo que llegaría con los jugadores. Una empresa que vende un producto técnico acaba teniendo a alguien que responde qué hace ese producto por dentro. En el mismo edificio, un taller enseñaba cómo lo hace un equipo de preventa con Bots.

Quien hace preventa (sales engineering, la parte técnica de una venta) pasa el día contestando preguntas que no están en la documentación. Por ejemplo, cómo guarda los datos el producto, qué pasa si dos usuarios hacen lo mismo a la vez o en qué se diferencia de la competencia. Muchas respuestas están en el código, y el código lo conoce ingeniería. Cada "déjame preguntarlo y te digo" retrasa la venta un par de días.

Además, cada cliente quiere ver casos parecidos al suyo. Eso significa rehacer diapositivas para cada llamada y seguir de cerca lo que lanza la competencia. Son tareas repetidas, con fuentes claras y un resultado que se puede revisar. Encajan bien con los Bots.

## Tres Bots que se consultan entre sí

El segundo día del directo abrió con un taller de preventa montado sobre Flylo, una aerolínea inventada para las demos. Enseñó tres Bots, cada uno con un trabajo, que se pasan información entre ellos.

### Sherlock, el experto técnico

Sherlock tiene acceso a los repositorios del producto. Cuando le llega una pregunta técnica, lanza agentes en la nube (lección 15) para leer el código y vuelve con dos cosas. Primero, qué hace el producto de verdad. Después, cómo contárselo a un cliente. Su descripción le prohíbe revelar propiedad intelectual y le pide explicarlo para alguien que no programa.

### Mimi, las diapositivas de casos de cliente

Mimi tiene acceso a una presentación maestra en Google Slides. Le pasas un artículo en el que un cliente cuenta cómo usa el producto y crea una diapositiva con una plantilla fija: logo, problema, solución, impacto y una cita del artículo. Busca el logo en la web de marca del cliente con su propio ordenador. La plantilla es lo que evita el aspecto de diapositiva generada, la de siempre con el mismo morado.

### Serena Williams, la inteligencia competitiva

Serena usa los productos de la competencia en su ordenador, como haría una persona. En la demo recorrió la web de reservas de Southwest para compararla con Flylo. Antes de empezar, y sin que nadie se lo pidiera, preguntó a Sherlock qué soporta Flylo hoy. Así compara contra lo que existe en el código y no contra lo que dice la web.

> [!TIP]
> Puedes cambiarle el rumbo a un Bot a mitad de tarea. En la demo, con Serena ya reservando en Southwest, se le pidió que mirara también si la competencia tenía agentes de viaje con IA. Incorporó la petición sin abandonar la prueba que estaba haciendo.

### Que el equipo diga qué le falta

Cuando dos Bots trabajan juntos, puedes preguntarles qué Bot les ayudaría. En la demo, Sherlock creó tres: BattleCard Blair, para fichas de comparación con la competencia; Demo Drake, para guiones de demo apoyados en lo que confirma Sherlock; y AI Radar, para vigilar blogs técnicos. Quien presentaba se quedó con los dos primeros y dudó del tercero, porque hacía casi lo mismo que Serena. Revisa cada Bot que se crea así, igual que revisarías una contratación.

{{live d2 1:12:47 "Los tres Bots que creó Sherlock"}}

## Montar la preventa en una semana

1. **Crea el experto técnico.** En su descripción pon el producto que cubre, los repositorios que puede leer, que delega la lectura de código en agentes en la nube y qué no puede revelar nunca.
2. **Pruébalo con tres preguntas reales** que te hayan hecho clientes. Compara sus respuestas con lo que diría ingeniería antes de usarlo en una llamada.
3. **Crea el Bot de diapositivas** y dale la presentación maestra y una diapositiva ya hecha como modelo. Haz una a mano con él y corrígela hasta que te guste.
4. **Guarda ese proceso como skill** (lección 06). Si quieres que busque casos nuevos, añade una routine semanal que te pase los artículos antes de crear nada.
5. **Crea el Bot de competencia** y dile a qué productos mirar y qué comparar. Pídele que consulte al experto técnico antes de sacar conclusiones.
6. **Júntalos en un grupo** (lección 12) cuando necesites una respuesta que cruce lo que ven los dos.
7. **Pregúntales qué Bots les faltan** y quédate solo con los que no repiten trabajo.

## Serena y Sherlock buscan un diferenciador

{{live d2 0:51:05 "Serena prueba la web de Southwest en su ordenador"}}

Con Serena probando Southwest y Spirit y Sherlock leyendo el código de Flylo, quien presentaba los metió en un grupo y les hizo una sola pregunta. Querían saber qué ofrece la competencia que Flylo podría construir con poco esfuerzo.

Sherlock encontró algo que nadie esperaba. El calendario de fechas flexibles ya estaba programado en la parte visible de la web de Flylo, pero nunca se llamaba. Serena apuntó que los viajes de ida y vuelta y el equipaje parecían importantes, pero no eran de poco esfuerzo. Los dos se etiquetaban para pedirse datos, sin que nadie hiciera de mensajero.

Una versión que puedes adaptar:

```prompt
@Sherlock @Serena Comparad nuestro flujo de reserva con los de Southwest y
Spirit. Serena, usa sus webs en tu ordenador. Sherlock, confirma en el código
qué soportamos hoy. Devolvedme una tabla con: qué tienen ellos, qué tenemos
nosotros, esfuerzo estimado para igualarlo y fuente de cada dato. No
contactéis con nadie.
```

{{live d2 0:43:58 "Mimi prepara la diapositiva de Salesforce"}}

Para el caso de cliente, el ejemplo fue un artículo de Salesforce sobre cómo redujo un 85% el tiempo de cobertura de código heredado. Mimi entró en el blog, sacó problema, solución, impacto y cita, puso el logo y dejó la diapositiva en la presentación en unos quince minutos. Hubo que iniciar sesión por ella en Google cuando se le cerró la sesión (lección 09).

## Fallos al montar la preventa con Bots

- **Dejar que el experto técnico hable directamente con clientes.** Puede citar detalles internos del código. *Qué hacer:* que redacte la respuesta para ti y que la regla de no revelar propiedad intelectual esté en su descripción.
- **Pedir diapositivas sin plantilla.** Cada una sale distinta y con aspecto genérico. *Qué hacer:* dale una diapositiva modelo y un orden fijo de bloques.
- **Aceptar todos los Bots que proponen tus Bots.** Acabas con dos haciendo lo mismo y más uso gastado. *Qué hacer:* compara cada propuesta con los Bots que ya tienes.
- **Probar productos de la competencia sin leer sus condiciones.** El Bot se registra o automatiza donde no está permitido. *Qué hacer:* revisa las condiciones y deja que el Bot te pase los pasos bloqueados (lección 19).
- **Fiarse de una comparación sin fuentes.** Una diferencia inventada acaba en una presentación. *Qué hacer:* pide la fuente de cada fila: una captura, un enlace o el fichero del código.

## Preventa que no espera a ingeniería

- Un experto técnico con acceso al código responde en horas lo que antes tardaba días, pero la respuesta pasa por ti.
- Las diapositivas de casos de cliente salen de una plantilla fija y un artículo; la plantilla evita el aspecto genérico.
- El Bot de competencia usa los productos ajenos en su ordenador y contrasta con el experto técnico.
- Pregunta a tus Bots qué les falta, pero quédate solo con lo que no repite trabajo.
