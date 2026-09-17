---
id: "10"
module: 3
title: "Routines: tareas programadas"
description: "Haz que un Bot repita una tarea probada con un horario o tras un evento, pruébala sin riesgos y evita que haga ruido o gaste de más."
level: intermediate
minutes: 8
objectives:
  - "Explicar qué es una routine y en qué se diferencia de una skill"
  - "Pedir una routine con responsable, horario, fuentes, resultado, límites y un plan para cuando falten datos"
  - "Usar Test run, pausar una routine y leer su historial de ejecuciones"
  - "Elegir una frecuencia o un disparador que no malgaste uso"
updated: "2026-09-17"
---

## Peticiones que escribes cada mañana

Hay peticiones que escribes cada semana o cada mañana. Sacar las cifras de ayer. Revisar qué ha cambiado en una presentación compartida. Preparar la lista de reuniones del día.

Una routine hace que el Bot se encargue solo. Se ejecuta en la nube, así que sigue funcionando aunque cierres el portátil.

Una routine también trabaja cuando nadie mira. Si lee datos equivocados, se ejecuta demasiadas veces o te escribe para no decir nada, lo pagas en uso y en atención. Esta lección explica cómo montarla para poder fiarte de ella.

## Un horario o un evento para cada trabajo

Una **routine** (tarea programada) le dice a un Bot cuándo hacer un trabajo. Puede ejecutarse con un horario o, donde esté disponible, cuando ocurre un evento. Una skill (lección 06) describe cómo se hace una tarea. La routine decide cuándo se hace y qué Bot se encarga.

Piensa en una convocatoria periódica del calendario enviada a un compañero, con las instrucciones adjuntas. Las instrucciones son la skill. La convocatoria es la routine.

La documentación oficial marca un orden claro. Haz la tarea una vez a mano y consigue que salga bien. Guarda el método como skill. Solo entonces automatízala.

{{live 6:13:27 "Convertir una respuesta de datos en un informe diario a las 6"}}

### Horarios y eventos

Una routine con horario se ejecuta en los momentos que le indiques. Los horarios usan la zona horaria de **Settings → General → Agent → Timezone** (zona horaria).

Una routine con disparador empieza cuando pasa algo, por ejemplo un mensaje de Slack o una notificación de GitHub. Estos disparadores salen de las integraciones de tu cuenta de Cursor. Son independientes de los plugins de Slack o GitHub (lección 08) y pueden necesitar su propio paso de conexión.

Dale al disparador una regla de coincidencia estrecha, como un canal y una frase concretos. Uno amplio, como "cada mensaje nuevo", genera ruido, gasta tu cuota y aumenta la probabilidad de que el Bot actúe sobre algo que no importa.

### Qué hay que especificar

Pídesela al Bot que debe encargarse del trabajo y confirma seis cosas:

1. El Bot responsable
2. El horario y la zona horaria
3. La fuente de los datos
4. El resultado esperado
5. El límite de aprobación
6. Qué hacer si falta una fuente

El Bot crea la routine y te enseña cuándo se ejecutará la próxima vez.

### Test run

Usa **Test run** (ejecución de prueba) después de crear o editar una routine. Al terminar la prueba, comprueba que el Bot ha usado datos actuales y ha seguido el formato pedido. Cada acción debe dejar una fuente o un registro que puedas seguir. La ejecución debe pararse en el punto de aprobación y dejar claros los fallos.

> [!WARNING]
> Una prueba hace trabajo real. Puede navegar por webs, modificar archivos y usar las herramientas conectadas. Usa datos con los que no pase nada si se actúa sobre ellos, y deja los envíos, las ediciones y los borrados detrás de una aprobación (lección 04).

### Pausar y revisar el historial

Abre el Bot, elige **View conversation details** (ver detalles de la conversación) y después **Routines**. Desde ahí puedes activar o pausar una routine, lanzar una prueba, editar su horario o sus instrucciones, revisar los últimos aciertos y fallos, o borrarla. En iPhone y Android puedes ver el horario y usar **Active** (activa) para pausarla o reanudarla. Para lo demás hace falta la app de escritorio.

Ten en cuenta los límites:

- Un Bot puede tener hasta 50 routines.
- La app guarda los 20 registros de ejecución más recientes de cada routine.
- Borrar una routine es inmediato y no se puede deshacer.
- Borrar un Bot también borra sus routines. Ocultar un Bot no las pausa.
- Si pasas mucho tiempo sin entrar, Grok Bot puede preguntarte si quieres mantener las routines activas, y pausarlas si no respondes.

### Silencio cuando no hay nada que contar

La documentación pide que cada routine incluya una regla para los datos que faltan o están desactualizados. Indica qué hacer si la fuente está vacía, llega tarde o no responde. Sin esa regla, el Bot puede reutilizar cifras antiguas y presentarlas como las de hoy.

Hay un segundo hábito que ayuda. Dile al Bot que no avise, o que lo resuelva solo, cuando una ejecución no encuentre nada importante. No hay un ajuste para esto, así que escríbelo en las instrucciones de la routine.

{{live 6:27:46 "Routines que solo avisan cuando algo importa"}}

### La frecuencia gasta uso

Cada ejecución hace trabajo real, y ese trabajo cuenta contra tu uso. El uso es la cuota incluida en tu plan, y se renueva cada semana. Puedes consultarlo en **Usage & Billing** (uso y facturación). Una routine cada 15 minutos se ejecuta 96 veces al día. Una cada 5 minutos, 288.

Revisa de vez en cuando cada cuánto se ejecutan tus routines. Siempre que puedas, arranca la routine con un evento en lugar de con un horario que comprueba a ciegas. El equipo de xAI dio el mismo consejo y mencionó los webhooks, los avisos automáticos que un servicio envía a otro en cuanto pasa algo.

{{live 7:56:40 "Por qué una routine cada 15 minutos sale cara"}}

## De tarea resuelta a routine

1. Haz la tarea una vez en una conversación normal y corrígela hasta que el resultado sea el correcto.
2. Guarda el método como skill (lección 06).
3. Abre el Bot que debe encargarse del trabajo recurrente.
4. Escribe la petición de la routine con los seis puntos de arriba.
5. Revisa la próxima ejecución que te muestra el Bot, zona horaria incluida.
6. Elige **Test run** con datos sin riesgo y revisa el resultado.
7. Tras las primeras ejecuciones reales, abre **View conversation details → Routines** y lee el historial.

## Ashley y los billetes vendidos ayer

En la demo de producto del directo, un Bot de datos llamado Ashley respondió cuántos billetes se vendieron ayer en móvil y en web, con un gráfico por tipo de viajero. Después, el presentador escribió una sola línea: "Mándame esto como actualización cada mañana a las 6".

Esa línea sirve para empezar. Esta es la misma routine con los seis puntos completos. El almacén de datos es la base de datos central donde una empresa guarda sus cifras, y una consulta es la petición que saca datos de ella.

```prompt
Cada día a las 6:00 en mi zona horaria, saca las compras de billetes de ayer separadas por móvil y web, y por tipo de viajero. Publica un resumen breve en esta conversación con un gráfico para cada división y un enlace a la consulta que has ejecutado. Si nada ha variado más de un 5 % respecto al día anterior, publica una sola línea diciéndolo. Si faltan los datos de ayer o el almacén de datos no está disponible, informa del fallo en lugar de usar datos anteriores. No modifiques ningún panel ni consulta guardada.
```

La responsable es Ashley, porque se lo pides en su conversación. Los otros cinco puntos están en el texto. Lanza **Test run**, compara el gráfico con el almacén de datos y deja que siga sola.

Un contraejemplo del mismo día. A un Bot de ingeniería se le pidió una routine que revisara cada cinco minutos sus agentes de código en la nube (lección 15) durante un arreglo urgente. Tenía sentido durante la emergencia. Si se queda activa, son 288 ejecuciones al día.

{{live 4:26:37 "Una routine urgente que revisa agentes cada cinco minutos"}}

> [!TIP]
> Una routine también puede saltar cuando algo cambia en otra herramienta. En el taller de prospección, cuando una cuenta avanzaba de etapa en el CRM, una routine sacaba a sus contactos de la secuencia de correos. Una comercial del taller de ventas dio una regla para el horario: una o dos al día, porque más acaba siendo ruido.

{{live d2 6:18:32 "Una routine que salta cuando cambia el CRM"}}

## Automatizar lo que nunca salió bien

- **Automatizar una tarea que nunca salió bien a mano.** La routine repite los mismos errores cada día. *Qué hacer:* consigue un buen resultado, guárdalo como skill y después prográmalo.
- **Olvidar la regla para datos que faltan.** El Bot rellena el hueco con datos antiguos y nadie se da cuenta. *Qué hacer:* indica qué hacer si la fuente está vacía, desactualizada o caída.
- **Tomar Test run por un ensayo.** La prueba hace cambios reales. *Qué hacer:* usa datos sin riesgo y deja las acciones de escritura detrás de una aprobación.
- **Disparar con cada mensaje.** El Bot trabaja sobre ruido y gasta uso. *Qué hacer:* limítalo a un canal, una frase o un tipo de enlace concretos.
- **Avisar en cada ejecución.** Te acostumbras a ignorar los mensajes, incluido el que importa. *Qué hacer:* dile al Bot que no avise si nada ha cambiado.
- **Ocultar un Bot para detener sus routines.** Los Bots ocultos las siguen ejecutando. *Qué hacer:* pausa la routine, y bórrala solo si lo tienes claro, porque no se puede deshacer.
- **No volver a probar tras un cambio.** Cambia una web, un connector o el formato de un archivo y la routine falla sin que nadie lo note. *Qué hacer:* lanza **Test run** otra vez cuando cambie una fuente.

## Qué necesita una routine fiable

- La skill dice cómo. La routine dice cuándo y qué Bot se encarga.
- Especifica el responsable, el horario y la zona horaria, la fuente, el resultado, el límite de aprobación y qué hacer si faltan datos.
- **Test run** hace trabajo real, así que usa datos sin riesgo.
- Gestiona las routines desde **View conversation details → Routines**. Cada Bot puede tener hasta 50, cada una guarda 20 registros y borrar no tiene vuelta atrás.
- Ejecútala tan pocas veces como permita el trabajo, prefiere un evento concreto a un horario a ciegas y que no avise si no hay nada que contar.

Más información en [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) y [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting).
