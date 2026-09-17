---
id: "11"
module: 4
title: "Un Bot por rol"
description: "Decide cuándo un trabajo merece su propio Bot, describe el rol en términos operativos y mantén tu equipo de Bots lo más pequeño posible."
level: intermediate
minutes: 8
objectives:
  - "Usar cinco señales para decidir si un trabajo necesita un Bot aparte"
  - "Escribir una descripción de rol que diga qué gestiona el Bot, qué usa, qué entrega y qué no debe hacer nunca"
  - "Empezar con el equipo más pequeño que funcione y ampliarlo solo cuando un rol especialista esté asentado"
  - "Saber cuándo ayuda un Bot para todo y cuándo estorba"
updated: "2026-09-16"
---

## El Bot al que acabas pidiendo de todo

Tras unas semanas con un solo Bot, acabas pidiéndole de todo. El informe de ventas, un fallo de software, una idea de regalo, el presupuesto. Cada vez cuesta más dirigir sus respuestas. El Bot mezcla preferencias de un trabajo con las de otro, y tú repites contexto que ya le habías dado.

También pasa lo contrario. Creas un Bot nuevo para cada tarea y al mes la barra lateral tiene treinta nombres, y ninguno ha aprendido gran cosa.

Esta lección trata del punto intermedio: pocos Bots, cada uno con un trabajo que conserva.

## Cinco señales para separar un trabajo

Un Bot es un compañero de larga duración con nombre, un trabajo, su propia conversación y un contexto de trabajo que crece con el tiempo (lecciones 01 y 05). El trabajo es lo que mantiene útil ese contexto. Si el trabajo está claro, lo que el Bot aprende hoy le sigue sirviendo mañana.

Piensa en cómo contrata una empresa pequeña. No contrata a una persona por recado ni le pide al contable que diseñe el logo. Escribe una descripción de puesto cuando un tipo de trabajo vuelve una y otra vez.

### Cinco señales para crear un Bot aparte

La documentación oficial recomienda crear un Bot aparte cuando el trabajo tiene diferente:

- Objetivo o área de responsabilidad
- Conjunto de herramientas y fuentes
- Forma de trabajar
- Límite de aprobación
- Calendario recurrente

Cada una es un motivo para plantearte un Bot nuevo. Llevar los gastos y reproducir bugs (conseguir que un fallo de software vuelva a ocurrir para poder arreglarlo) se diferencian en las cinco. Está claro que corresponden a Bots distintos.

La documentación pone como buenos trabajos **Talent Scout** (buscador de talento), **Expense Manager** (gestor de gastos) y **Bug Reproduction** (reproducción de bugs). Un trabajo como **General Helper** (ayudante general) le da al Bot menos orientación y hace que su contexto guardado sea más difícil de reutilizar.

### Describe el rol en términos operativos

El nombre es una etiqueta. Lo que orienta el trabajo del Bot es la descripción. Escribe qué gestiona, dónde busca, qué entrega y qué no debe hacer. Este es el ejemplo de la documentación, adaptado. Customer success es el equipo que cuida de los clientes actuales.

```prompt
Encárgate de la revisión semanal de la salud de las cuentas. Recoge los datos de uso del producto y las señales de soporte, marca los indicios de que un cliente se va o de que va a comprar más, y prepara una lista de seguimiento con enlaces para el equipo de customer success. No contactes nunca con un cliente ni modifiques una cuenta sin aprobación.
```

Las reglas que deben cumplirse siempre van en la descripción. Las instrucciones para una tarea concreta van en un mensaje (lección 03).

### El contexto es un motivo para separar

Un Bot guarda lo que aprende para mantener su rol a lo largo del tiempo (lección 05). Un trabajo difuso hace que ese contexto guardado cueste más de reutilizar. Además hay un límite práctico. Cada Bot solo puede tener presente cierta cantidad de información a la vez, lo que se llama su límite de contexto. Un Bot que salta entre demasiados tipos de trabajo puede pasarse de ese límite.

Por eso el equipo de xAI repartió sus Bots de ingeniería por áreas. Uno lleva la interfaz, otro las herramientas para desarrolladores y otro la infraestructura. Así ninguno se pasa de su límite y cada uno acumula su propia memoria.

{{live 4:16:08 "Separar Bots de ingeniería para no pasarse del límite de contexto"}}

> [!TIP]
> Si un Bot empieza a dar respuestas confusas o peores, puede que lleve demasiadas cosas. Acota su trabajo en la descripción o pídele que olvide lo que ya no aplica (lección 05).

{{live 6:58:18 "Cuando un Bot abarca demasiado"}}

### El equipo más pequeño que funcione

La documentación recomienda que tu equipo de Bots crezca despacio:

1. Da a un Bot la responsabilidad de un resultado completo, de principio a fin.
2. Añade otro Bot solo cuando el trabajo tenga un rol especialista estable.
3. Pon los Bots en un chat de grupo cuando el propio traspaso de trabajo tenga que verse (lección 12).
4. Deja las acciones externas detrás de un límite de aprobación claro.

Tus Bots actuales pueden sugerir o crear un Bot especializado cuando un trabajo necesita un responsable duradero. Si quieres un equipo pequeño, pídeles que te pregunten antes.

Si necesitas el mismo rol para otro ámbito, por ejemplo un Bot de salud de cuentas por región, duplica el Bot. La copia conserva el perfil, los ajustes, las skills activadas, las routines y el avatar. No conserva el historial de la conversación, la memoria aprendida ni los adjuntos, así que cámbiale el nombre y explícale su nuevo ámbito.

Tener Bots distintos ordena el trabajo, pero los accesos siguen siendo comunes. Todos comparten un ordenador y sus sesiones (lección 09).

### Bot para todo o especialistas

La documentación desaconseja que un **General Helper** se encargue de trabajo real. En el directo surgió una idea más acotada que sí ayuda: un Bot que solo recibe preguntas sueltas, como "¿ha salido ya este disco?", para que no ocupen el contexto de tus especialistas. Si aprende algo que le sirve a otro Bot, pídele que se lo pase: "Cuéntale a ProdBot lo que has aprendido".

{{live 7:51:33 "Un Bot cajón de sastre para preguntas sueltas"}}

La diferencia está en la responsabilidad. Un Bot cajón de sastre no tiene nada a su cargo y ningún trabajo depende de él. Un ayudante general que además lleva tus informes y tus routines es lo que la documentación desaconseja. Para proyectos sencillos, añadió el equipo de xAI, puede bastar un único Bot "builder" que haga ingeniería, producto y diseño.

## Repartir tu semana en roles

1. Apunta el trabajo recurrente que delegarías en una semana normal.
2. Agrupa lo que comparte objetivo, herramientas, forma de trabajar, límite de aprobación y calendario.
3. Elige el grupo con el resultado más claro de principio a fin y dáselo a un Bot.
4. Abre **Bot actions → Edit Profile** (acciones del Bot, editar perfil) y ponle un nombre de puesto y una descripción operativa.
5. Dale tareas reales durante un tiempo antes de crear el siguiente.
6. Crea un segundo Bot solo cuando un grupo de trabajo se haya convertido en una especialidad estable.
7. Usa **Hide from sidebar** (ocultar de la barra lateral) con los Bots que ya no uses. Ocultarlos conserva su trabajo, pero no pausa sus routines (lección 10).

## El equipo de producto del directo

En la sesión del directo para product managers, el equipo de Bots estaba organizado por roles. Ashley se ocupaba de la ciencia de datos, PM Pete de las especificaciones de producto y Pixel del diseño. Emily dirigía ingeniería, con Bots ingenieros a su cargo, y Ray llevaba la selección de personal.

{{live 6:06:20 "Por qué cada Bot tiene nombre y rol"}}

Los presentadores dieron tres motivos. A las personas les cuesta menos saber a quién dirigirse. La memoria y el aprendizaje funcionan mejor cuando el Bot está acotado a un rol. Además, el trabajo se puede repartir en paralelo. Añadieron que los roles pueden solaparse.

Esta es una descripción al estilo de la documentación para un Bot de diseño como Pixel. Un sistema de diseño es el conjunto de estilos y patrones de interfaz que comparte un equipo, y un requisito P0 es uno de máxima prioridad.

```prompt
Encárgate de las maquetas de diseño de producto. Trabaja con nuestro sistema de diseño en Figma y respeta sus tipografías, sus colores y sus patrones de interfaz. Para cada requisito P0 de una especificación, prepara al menos dos opciones con capturas y una justificación breve. Pasa las maquetas aprobadas a la responsable de ingeniería. No publiques ni modifiques la biblioteca de diseño compartida sin aprobación.
```

Nombra el resultado, la fuente, lo que entrega, a quién se lo pasa y el límite. Un segundo Bot de diseño solo tendría sentido si, por ejemplo, el diseño de marketing necesitara otra biblioteca, otro estilo y otra persona que apruebe.

## El General Helper y los Bots duplicados

- **Un General Helper para todo.** El contexto de un trabajo se cuela en otro y las indicaciones se vuelven difusas. *Qué hacer:* separa según las cinco señales.
- **Un Bot por tarea.** El equipo crece y ningún Bot acumula trabajo suficiente para aprender. *Qué hacer:* crea Bots para trabajos duraderos y manda las tareas como mensajes.
- **Un equipo completo el primer día.** No sabes a qué Bot preguntar y ninguno se ha ganado su rol. *Qué hacer:* empieza con un responsable y añade especialistas cuando la necesidad se repita.
- **Un nombre de puesto sin descripción.** "Marketing" no dice nada de fuentes, entregas ni límites. *Qué hacer:* escribe el rol en términos operativos.
- **Separar Bots para separar accesos.** Todos los Bots usan el mismo ordenador y las mismas sesiones. *Qué hacer:* mantén las sesiones delicadas fuera del ordenador (lección 09).
- **Esperar que un duplicado recuerde.** La copia empieza sin historial ni memoria aprendida. *Qué hacer:* explícale su nuevo ámbito antes de darle trabajo.

## Cuándo crear otro Bot

- Crea un Bot aparte cuando el trabajo tenga su propio objetivo, herramientas, forma de trabajar, límite de aprobación o calendario.
- Describe cada rol por lo que gestiona, lo que usa, lo que entrega y lo que no debe hacer nunca.
- Empieza con un Bot responsable de un resultado. Añade especialistas solo cuando el rol esté asentado.
- Cuando el trabajo de un Bot se vuelve difuso, su contexto guardado cuesta más de reutilizar. Acota el trabajo.
- Un Bot cajón de sastre para preguntas sueltas puede ayudar, siempre que no tenga a su cargo ningún trabajo real.

Más información en [Create and manage Bots](https://docs.x.ai/grok-bot/bots).
