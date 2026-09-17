---
id: "06"
module: 2
title: "Skills y Teach a task"
description: "Convierte una tarea que salió bien en una skill que cualquier Bot puede reutilizar, describiéndola o enseñándola una vez con Teach a task."
level: beginner
minutes: 8
objectives:
  - "Saber qué contiene una skill y cuándo una tarea está lista para serlo"
  - "Crear una skill a partir de una tarea terminada, de material escrito o con Teach a task"
  - "Revisar una skill en borrador y usarla con / en otra conversación"
updated: "2026-09-16"
---

## Tareas que vuelven cada semana

Hay tareas que vuelven cada semana: el mismo informe, la misma respuesta a un proveedor, los mismos cinco clics en una herramienta web antigua. Explicarlas cada vez lleva tiempo, y el resultado cambia según cómo lo pidas.

La memoria (lección 05) ayuda a que un Bot recuerde tus preferencias. No le da un método fiable para un trabajo concreto. Para eso se guarda una skill.

## Una ficha de receta para tus Bots

Una **skill** es un conjunto de instrucciones reutilizable que explica cómo hacer una tarea. Funciona como una ficha de receta colgada en una cocina compartida: quien la toma sigue los mismos pasos y le sale el mismo plato. Las skills están disponibles para todos tus Bots, aunque un Bot puede necesitar el connector (la conexión con una herramienta, lección 08) o el inicio de sesión adecuado para usar una.

### Qué contiene una skill

Una skill recoge los pasos, las decisiones que hay que tomar por el camino, el resultado esperado y los límites de seguridad. Una skill útil indica:

1. Cuándo usarla
2. Qué datos de entrada y qué accesos necesita
3. La secuencia de trabajo
4. Cómo comprobar el resultado
5. Qué devolver
6. Qué necesita aprobación

Si falta alguno, el Bot tiene que adivinar.

### Dónde encaja

- La **descripción** guarda las reglas que un Bot debe cumplir siempre.
- La **memoria** guarda lo que un Bot ha ido aprendiendo al trabajar contigo.
- Una **skill** guarda el método para una tarea, y puede usarla cualquiera de tus Bots.

### Empieza por una tarea que ya funcione

Sigue este orden. Haz la tarea una vez, consigue que salga bien, guarda el método como skill y solo entonces automatízala con una routine (trabajo programado, lección 10). Una skill guardada a partir de una tarea que funciona a medias repite los mismos fallos, pero más rápido.

### Tres formas de crear una skill

**A partir de una tarea que acabas de terminar.** Cuando el resultado esté bien, pide al Bot que guarde el proceso. Es el camino más habitual.

**A partir de instrucciones escritas o material que ya tienes.** Puedes pegar un procedimiento, una lista de comprobación o ejemplos y pedir al Bot que los convierta en una skill. Los ejemplos reales funcionan bien. Un Bot de correo puede aprender tu tono a partir de correos que ya has escrito.

{{live 0:52:11 "Enseñar tu tono a un Bot de correo"}}

**Con una demostración, usando Teach a task** (enseñar una tarea). Haces la tarea una vez en el ordenador del Bot mientras te observa, y él escribe la skill. Lo verás paso a paso más abajo.

### Los límites de Teach a task

- Graba lo que se ve en el ordenador durante un máximo de diez minutos.
- No graba el audio del micrófono, así que explicar en voz alta no sirve de nada.
- Queda grabado todo lo que aparece en pantalla, así que no enseñes secretos. Para contraseñas y otras credenciales usa en su lugar el flujo de entrega segura (lección 09).
- Puede que todavía no esté disponible en tu cuenta. Si no lo ves, pide al Bot que cree la skill a partir de instrucciones escritas y de la tarea terminada.

La skill que sale es un **borrador**. Una sola demostración enseña el caso en que todo sale bien. No enseña qué hacer si un campo está vacío, si una página no carga o si la acción necesita tu aprobación. Eso lo añades tú.

## Guardar una tarea como skill

### Guardar una skill a partir de una tarea terminada

1. Haz la tarea en una conversación normal y corrige al Bot hasta que el resultado esté bien.
2. Pide al Bot que guarde el proceso como skill con un nombre claro.
3. Lee la skill que escribe. Compruébala con los seis puntos de arriba.

```prompt
Guarda el proceso que acabamos de seguir como una skill llamada "Informe semanal de proveedores". Incluye de dónde salen los datos, el formato de la tabla, qué cuenta como entrega con retraso y la regla de que no se envía nada a los proveedores sin mi aprobación.
```

### Enseñar una tarea con una demostración

1. Abre una conversación individual con el Bot y abre la vista de su ordenador.
2. Elige **Teach a task**.
3. Describe el resultado que vas a enseñar.
4. Haz el flujo de trabajo una vez, a ritmo normal.
5. Detén la grabación y revisa la skill que crea el Bot.
6. Pruébala con un ejemplo sin riesgo antes de programarla.

### Completar el borrador

Añade lo que un solo ejemplo no podía mostrar:

```prompt
Actualiza la skill que acabas de crear. Si la hoja de cálculo tiene una fila vacía, sáltala y apúntala en una lista al final. Si la página no carga después de dos intentos, para y avísame en lugar de adivinar. Pide mi aprobación antes de guardar nada en la unidad compartida.
```

### Usar una skill guardada

En la caja de mensaje de la app de escritorio, escribe `/` para elegir una skill guardada. (La `@` sirve para Bots, grupos, routines y connectors).

Si una skill no aparece en el menú de `/`, puede que no esté activada para este Bot. Abre **Settings → Plugins → Yours** (ajustes → plugins → los tuyos), busca la skill y actívala para el Bot actual.

## Slide Sonya aprende a animar una diapositiva

En una demostración en directo, el equipo de xAI tenía un Bot llamado Slide Sonya (lección 01) que trabajaba con una presentación. Quien presentaba quería que añadiera animaciones a las diapositivas, así que se lo enseñó una vez.

{{live 0:43:54 "Enseñar a un Bot a animar una diapositiva"}}

1. Con la presentación abierta en el ordenador de Sonya, eligió **Teach a task**.
2. Tomó el control del ordenador e hizo el trabajo en persona: Insert, luego una animación y luego "fly-in". La reprodujo para comprobar que funcionaba.
3. Detuvo la grabación.

Sonya convirtió la grabación en una skill de "añadir animación" que apareció entre sus skills. A partir de ahí bastaba con un mensaje:

```prompt
Añade la animación que te enseñé a las diapositivas de esta sección.
```

Para que esa skill se pueda reutilizar con seguridad, el siguiente paso sería completar el borrador: qué diapositivas no deben animarse nunca, qué hacer si la presentación está bloqueada y cuándo parar a preguntar.

Lo mismo sirve para trabajo largo y repetitivo en herramientas de empresa, como los pasos que sigue un equipo comercial en Salesforce, un CRM muy extendido.

{{live 6:19:37 "Grabar un flujo de trabajo en el ordenador del Bot"}}

## Skills guardadas antes de tiempo

- **Guardar la skill demasiado pronto.** La skill copia un proceso que todavía tiene fallos. *Qué hacer:* repite la tarea hasta que el resultado esté bien y guárdala después.
- **Dar por terminada la skill aprendida.** Falla la primera vez que pasa algo inesperado. *Qué hacer:* añade al borrador reglas de decisión, qué hacer ante un fallo y los límites de aprobación.
- **Enseñar una contraseña durante la demostración.** El secreto queda en la grabación. *Qué hacer:* usa el flujo de entrega segura para las credenciales (lección 09), nunca la grabación.
- **Grabar una sesión larga y con rodeos.** La grabación se corta a los diez minutos y el Bot aprende tus desvíos. *Qué hacer:* ensaya antes y enseña solo el camino limpio.
- **Programarla sin probarla.** Una routine repite cada día una skill mal hecha. *Qué hacer:* pruébala antes con un ejemplo sin riesgo.
- **La skill no sale en el menú de `/`.** Crees que se ha perdido. *Qué hacer:* actívala para este Bot en **Settings → Plugins → Yours**.

## Una buena skill se revisa y se prueba

- Una skill es un conjunto de instrucciones reutilizable para una tarea, disponible para todos tus Bots.
- Una buena skill dice cuándo usarla, qué necesita, los pasos, cómo comprobar, qué devolver y qué requiere aprobación.
- Puedes crear skills desde una tarea terminada, desde material escrito o con una demostración usando **Teach a task** (hasta diez minutos, sin audio).
- Una skill aprendida es un borrador. Añade reglas de decisión, qué hacer ante fallos y aprobaciones, y pruébala con un ejemplo sin riesgo.
- Escribe `/` para usar una skill. Si no aparece, actívala en **Settings → Plugins → Yours**.
