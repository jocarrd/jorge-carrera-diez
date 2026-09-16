---
id: "16"
module: 5
title: "Que verifique su trabajo"
description: "Dale a tus Bots una forma de comprobar su trabajo, exige pruebas como capturas, métricas y vídeos, y revisa esas pruebas en vez de los registros."
level: advanced
minutes: 8
objectives:
  - "Explicar qué es un bucle de feedback y por qué un Bot lo necesita para terminar una tarea solo"
  - "Exigir pruebas en cada resultado y cada pull request: capturas, métricas o vídeo"
  - "Crear una skill de verificación con un script estándar y un mapa de funcionalidades"
updated: "2026-09-16"
---

## Por qué importa

Cuando un Bot dice "hecho", tienes dos opciones. Puedes fiarte o puedes repetir tú la comprobación. Fiarte acaba en sorpresas. Repetir la comprobación significa que sigues haciendo la mitad del trabajo, y con cinco Bots y unos cuantos agentes en la nube trabajando a la vez no das abasto.

Hay una tercera opción, que el Bot lo demuestre. Si tiene que enseñarte la página funcionando, las cifras de antes y después o un vídeo del recorrido, cambian dos cosas. El Bot detecta sus propios errores antes de avisarte. Y tu revisión dura un minuto en lugar de una hora.

## La idea

Un profesor de autoescuela no le pregunta al alumno qué tal ha ido la clase. Se sienta en el asiento del copiloto y mira la carretera. La verificación te da ese asiento, y así miras el resultado en vez de la historia.

### Bucles de feedback

Un **bucle de feedback** es una forma de que el Bot reciba una señal clara de éxito o fracaso después de actuar. El test pasa, el botón ya guarda el formulario, la página carga más rápido. Sin esa señal, el Bot solo puede adivinar si ha terminado.

Cualquier tarea de ingeniería necesita un bucle de feedback completo. El más sencillo es que el agente use la propia web con su ordenador. En la lección 02 viste que un Bot puede abrir un navegador y recorrer una web. De esa misma forma comprueba su trabajo.

{{live 4:38:05 "Un bucle de feedback para cada tarea de ingeniería"}}

### Pruebas en cada resultado

La documentación oficial también lo pide para el trabajo normal. Un buen resultado "debe poder revisarse de forma independiente", es decir, que otra persona pueda comprobarlo sin rehacerlo ([Files and results](https://docs.x.ai/grok-bot/files-and-results)). Según la tarea, pide:

- Enlaces directos a las fuentes
- Capturas en las que se vea el estado que importa
- La fecha y la hora con su zona horaria
- Un registro breve de las acciones
- Una lista explícita de lo que el Bot no pudo verificar

Para trabajo con consecuencias, la documentación sugiere además pedir al Bot que separe hechos, suposiciones, acciones terminadas, acciones pendientes de aprobación y preguntas abiertas.

> [!WARNING]
> No te fíes solo de una captura cuando los datos cambian rápido. Una hora después puede estar desfasada. Pide también un enlace o una exportación de la fuente.

Para el código, conviértelo en norma del equipo: **cada pull request llega con pruebas**. Una pull request, como viste en la lección 15, es una propuesta de cambio de código pendiente de revisión. La prueba adecuada depende del cambio:

| Cambio | Prueba |
| -- | -- |
| Interfaz (lo que ve el usuario) | Capturas, o un vídeo del recorrido |
| Rendimiento (velocidad) | Métricas de antes y después |
| Backend o lógica (lo que funciona detrás de la pantalla) | Un vídeo o un registro de la funcionalidad funcionando de principio a fin |

Con esa norma revisas **pruebas** en lugar de **trazas**. Una traza es el registro paso a paso de lo que hizo un agente. Leerla te dice cuánto se esforzó. La prueba te dice si el cambio funciona.

### Skills de verificación

Un Bot que tiene que comprobar una aplicación desde cero cada vez improvisa. Escribe un script nuevo, hace clic por todas partes y gasta tokens (los trozos de texto que lee y escribe un modelo, que cuentan en tu uso) en un trabajo que nunca sale igual dos veces. Funciona mejor una **skill de verificación** con dos partes:

1. **Un script o CLI estándar.** Una CLI es una herramienta de línea de comandos, un pequeño programa que se usa escribiendo una orden. Esta arranca la aplicación y la usa siempre del mismo modo, para que todos los Bots y agentes comprueben lo mismo de la misma manera.
2. **Un mapa de funcionalidades** (feature map). Es un documento con las funciones de la aplicación, cómo llegar a cada una y detalles como los atajos de teclado.

La documentación ya incluye "cómo validar el resultado" entre las seis cosas que debe indicar una skill útil ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Una skill de verificación convierte esa parte en algo que cualquier Bot puede reutilizar.

En el directo, el equipo creó la suya con una skill ya hecha de un plugin que no aparece en la documentación oficial. No la necesitas. Pide a un Bot que escriba el script y el mapa de funcionalidades como una skill, igual que en el paso 3.

## Paso a paso

1. **Escribe una vez tus normas de pruebas**, en la descripción del Bot de ingeniería o en el playbook del equipo (lección 13):

   ```prompt
   Cada resultado y cada pull request llega con pruebas: capturas para cambios de interfaz,
   métricas de antes y después para cambios de rendimiento y un vídeo corto para todo lo que un usuario
   pueda recorrer. Si faltan pruebas, pídeselas al agente en la nube antes de decirme que está hecho.
   ```

2. **Dale al Bot un bucle de feedback.** Asegúrate de que puede abrir la aplicación. Puede ser una URL de staging (una copia privada de la web para hacer pruebas), una cuenta de prueba con la sesión iniciada mediante el flujo seguro (lección 09) o una forma de ejecutar la aplicación en su ordenador.
3. **Pide una skill de verificación:**

   ```prompt
   Crea una skill de verificación para esta aplicación. Incluye un script estándar que arranque la aplicación
   y compruebe una funcionalidad siempre de la misma forma, y un mapa de funcionalidades con cada función,
   cómo llegar a ella y sus atajos. Prueba la skill con el registro de usuarios y enséñame el resultado.
   ```

4. **Revisa la primera ejecución.** ¿Llegó a la pantalla correcta? ¿Entiendes la prueba? Señala lo que falte y pide al Bot que actualice la skill.
5. **Decide con las pruebas.** Abre la captura o el vídeo. Si muestra el cambio funcionando, revisar el código te costará mucho menos. Si falta la prueba, devuelve el trabajo.

## Ejemplo

Durante una sesión de construcción del directo, el equipo pidió a Steve, su Bot jefe de gabinete, que creara una skill de verificación. Steve le pasó el encargo a Tater, el Bot de ingeniería, que lanzó un agente en la nube para crearla.

{{live 4:46:38 "Crear una skill de verificación con un script estándar y un mapa de funcionalidades"}}

Cuando volvió la pull request de verificación, el equipo vio que las pull requests no traían vídeos. Pidieron actualizar la skill para que se aplicara siempre e incluyera siempre vídeo, también en los cambios de backend. Más tarde se fusionó una versión más general de la skill. Algunas pull requests siguieron llegando sin vídeos ni capturas, y el equipo le pidió a Steve que las completara. Las normas tardan unas cuantas vueltas en asentarse.

{{live 5:27:18 "Actualizar la skill para que cada pull request traiga vídeo"}}

Ese mismo día, en una demo de ingeniería anterior, se vio la recompensa. La pull request de un agente en la nube llegó con capturas de lo que había cambiado. La persona que la revisaba contó que con esas capturas tenía confianza suficiente para fusionarla sin repasar paso a paso lo que había hecho el agente.

La costumbre sirve también fuera de la ingeniería. Pide a un Bot que grabe un vídeo de lo que hace en una web. Es la forma más rápida de saber si la tarea está bien hecha.

## Errores habituales

- **Aceptar un "hecho" sin pruebas.** Los errores te llegan más tarde a ti o a tus usuarios. *Qué hacer:* convierte las pruebas en una norma fija de la descripción o del playbook, en lugar de algo que pides cuando te acuerdas.
- **Leer la traza del agente para juzgar el resultado.** Pasas una hora y sigues sin saber si funciona. *Qué hacer:* mira primero las capturas, las métricas y el vídeo.
- **Dejar que cada Bot improvise sus comprobaciones.** Los resultados no se pueden comparar y se gastan tokens. *Qué hacer:* crea una skill de verificación con un script estándar y un mapa de funcionalidades.
- **Esperar que los agentes añadan vídeo sin pedírselo.** En el directo no lo hicieron hasta que la skill lo indicó. *Qué hacer:* nombra cada tipo de prueba que quieres.
- **Decirle al Bot solo cuándo falla.** Aprende menos. *Qué hacer:* dile también cuándo la prueba era justo lo que querías.

## Resumen

- Un bucle de feedback da al Bot una señal clara de éxito o fracaso; sin él, adivina.
- Pide resultados que otra persona pueda comprobar, con enlaces, capturas, un registro de acciones y lo que no se pudo verificar.
- Cada pull request trae pruebas en forma de capturas, métricas de antes y después o vídeo.
- Una skill de verificación combina un script estándar con un mapa de funcionalidades, para que todos los Bots comprueben igual.
- Revisa la prueba en lugar de la traza, y devuelve lo que llegue sin ella.
