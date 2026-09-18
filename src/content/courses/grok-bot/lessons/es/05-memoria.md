---
id: "05"
module: 2
title: "Qué recuerda un Bot"
description: "Qué guarda la memoria de un Bot y qué no, cómo corregirla y por qué conviene consultar la fuente antes de una decisión importante."
level: beginner
minutes: 7
objectives:
  - "Saber qué conserva un Bot entre conversaciones y qué deja fuera"
  - "Corregir a un Bot, o pedirle que olvide algo, para que el cambio se mantenga"
  - "Pasar contexto entre Bots con archivos y mensajes en lugar de fiarlo todo a la memoria"
updated: "2026-09-16"
---

## Cada chat nuevo empieza de cero

En un chat normal, cada conversación nueva empieza de cero. Vuelves a pegar el mismo contexto, repites las mismas preferencias y corriges los mismos errores. Un Bot conserva parte de lo que aprende, así que la décima tarea sale mejor que la primera.

Eso ayuda, pero también puede despistarte. Si no sabes qué recuerda un Bot, acabarás repitiendo cosas sin necesidad o fiándote de un recuerdo que ya no está al día. En esta lección verás dónde está el límite.

## Qué guarda la memoria y qué deja fuera

La **memoria** es lo que un Bot guarda de su trabajo anterior para seguir en su papel sin releer cada mensaje antiguo. Piensa en un compañero que lleva meses trabajando contigo. Recuerda cómo te gustan los informes y quiénes son los clientes importantes. Aun así, antes de firmar un contrato abre la última versión en lugar de fiarse de lo que recuerda.

### Qué guarda la memoria

Un Bot puede conservar:

- Preferencias de trabajo estables, como "usa viñetas, no párrafos"
- Datos importantes y contexto sobre su papel
- Resúmenes del trabajo que ha hecho

No vuelve a leer cada mensaje. Se queda con lo que le sirve para hacer mejor su trabajo la próxima vez.

### Qué no es la memoria

La memoria no es una fuente de verdad. Las cifras cambian y los clientes van y vienen. Sigue cuatro reglas:

- Mantén los datos que cambian en su sistema de origen, el sitio donde ese dato vive oficialmente (el CRM de la lección 01, la hoja de cálculo o el documento).
- Para decisiones con consecuencias, pide al Bot que cite o vuelva a abrir los datos actuales.
- Corrige directamente las suposiciones que se hayan quedado viejas.
- Pon los límites de seguridad explícitos en la descripción del Bot, no solo en su memoria.

La última regla enlaza con la lección 03. La descripción es el sitio de las reglas que siempre deben cumplirse. La memoria ayuda al Bot a trabajar bien, y la descripción le marca los límites.

### Cada Bot tiene su propia memoria

Las conversaciones y el contexto aprendido van por separado en cada Bot. Lo que tu Bot de investigación ha aprendido sobre tu mercado, tu Bot de correo no lo sabe.

Eso sí, tus Bots comparten un mismo ordenador en la nube (lección 02), así que el contexto puede pasar de uno a otro:

- **Archivos compartidos.** Un documento guardado en el espacio de trabajo compartido, `/workspace`, lo ven todos los Bots.
- **Mensajes directos entre Bots.** Un Bot puede escribir a otro y pasarle lo que sabe.
- **Chats de grupo.** Varios Bots pueden leer la misma conversación (lo verás en la lección 12).

El equipo de xAI ha hablado de una memoria que puedan compartir varios Bots, pero la documentación oficial no la incluye. Organízate con archivos y mensajes.

### Las copias empiezan sin memoria

Cuando duplicas un Bot, la copia conserva el perfil, la configuración, las skills activadas (instrucciones guardadas para una tarea, lección 06), las routines (trabajo programado, lección 10) y el avatar. **No** copia el historial de conversación, la memoria aprendida ni los archivos adjuntos del chat. Una copia es un compañero nuevo con el mismo puesto que todavía no ha trabajado contigo.

## Corregir al Bot para que no lo olvide

1. **Corrige al Bot con palabras sencillas** en cuanto se equivoque. Dile que la corrección es para siempre, para que la guarde y no se limite a arreglar esa respuesta.
2. **Lleva a la descripción las reglas que nunca deben romperse.** Abre **Bot actions → Edit Profile** (acciones del Bot → editar perfil) y añade ahí la regla.
3. **Pídele que olvide** el contexto que ya no necesita, como un plan descartado o una forma antigua de nombrar las cosas. Los Bots lo hacen bien, y con menos contexto gastan menos tokens (los trocitos de texto que lee un modelo de IA).
4. **Pide la fuente** antes de cualquier decisión importante. "Revisa la hoja de cálculo actual" funciona mejor que "qué recuerdas de las cifras".
5. **Escribe el contexto compartido en un archivo** de `/workspace`, o pide al Bot que escriba directamente al otro Bot, cuando dos Bots necesiten la misma información.

```prompt
A partir de ahora, firma mis correos solo con mi nombre, nunca con nombre y apellido. Mantén esto en todos los borradores que hagas.
```

{{live 1:05:23 "Lo que corriges queda en la memoria del Bot"}}

```prompt
Olvida todo lo que hablamos la semana pasada sobre el plan de precios antiguo. Lo descartamos. A partir de ahora usa solo la página de precios de /workspace/precios.md.
```

{{live 8:11:06 "Pedirle a un Bot que olvide"}}

## El Bot que auditaba el código cada noche

En una demostración en directo, el equipo de xAI instaló un Bot ya preparado para auditar cada noche el código del equipo, es decir, revisarlo de forma automática. Empezó sin ningún recuerdo de cómo trabajaba el equipo. En lugar de copiarle las instrucciones a mano, el ponente pidió a un Bot de ingeniería que ya tenía que lo pusiera al día:

```prompt
Hola. Tengo un miembro nuevo en el equipo llamado nightly. Cámbiale el nombre a Steve y explícale cómo aplicamos los flujos de trabajo de ingeniería.
```

El Bot veterano le mandó al nuevo las reglas: cómo estaba montado el tablero de tareas en Notion (una aplicación de notas y documentos), qué significaba "limpio", las fases del flujo de trabajo y las comprobaciones de lint (revisiones automáticas de errores de estilo en el código). El nuevo las guardó en su propia memoria y los dos se lo confirmaron.

{{live 4:18:13 "Un Bot pone al día a otro nuevo"}}

Funciona porque la memoria es de cada Bot y los mensajes entre Bots son la forma de mover contexto. En tu caso, una versión más sencilla es un archivo que puedan leer los dos:

```prompt
Escribe las reglas de trabajo de nuestro equipo en /workspace/equipo/reglas.md. Después escribe al Bot de informes, dile que el archivo existe y pídele que confirme que lo ha leído.
```

## Fiarse de un recuerdo viejo

- **Tratar la memoria como el registro oficial.** El Bot cita la cifra del mes pasado como si fuera la de hoy. _Qué hacer:_ mantén los datos en su sistema de origen y pide al Bot que lo vuelva a abrir antes de decidir.
- **Corregir de pasada.** Arreglas un borrador a mano y la semana siguiente el Bot repite el error. _Qué hacer:_ dile al Bot qué estaba mal y que el cambio es permanente.
- **Dejar las reglas de seguridad solo en la conversación.** Un límite que dijiste una vez queda enterrado bajo el trabajo posterior. _Qué hacer:_ pon "nunca envíes nada sin aprobación" en la descripción.
- **Esperar que un Bot sepa lo que aprendió otro.** El Bot de correo no sabe nada del hallazgo del Bot de investigación. _Qué hacer:_ pásaselo con un archivo en `/workspace` o con un mensaje directo.
- **Creer que una copia es un clon.** La copia hace preguntas que el original dejó de hacer hace tiempo. _Qué hacer:_ dale su nuevo alcance y el contexto clave antes de encargarle trabajo.
- **Borrar un Bot del que dependen otros.** Al Bot que le pasaba trabajo nadie le avisa del borrado, así que puede seguir intentándolo. _Qué hacer:_ diles a esos Bots explícitamente que ya no existe y quién se encarga ahora.

## La memoria ayuda, la fuente decide

- Un Bot recuerda preferencias estables, contexto de su papel y resúmenes de su trabajo, no cada mensaje.
- La memoria no es una fuente de verdad. Para decisiones importantes, pide al Bot que consulte la fuente actual.
- Corrige de forma explícita las preferencias duraderas y pon en la descripción las reglas que siempre deben cumplirse.
- La memoria es de cada Bot. Los archivos de `/workspace` y los mensajes directos mueven el contexto entre Bots.
- Un Bot duplicado conserva su configuración, skills y routines, pero empieza sin memoria ni historial.
