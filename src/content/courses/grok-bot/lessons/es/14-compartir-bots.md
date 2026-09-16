---
id: "14"
module: 4
title: "Compartir Bots"
description: "Comparte un Bot con un enlace público, entiende qué lleva la copia y qué se queda contigo, y revisa el Bot de otra persona antes de fiarte de él."
level: intermediate
minutes: 7
objectives:
  - "Compartir un Bot con un enlace sabiendo exactamente qué recibe la otra persona"
  - "Limpiar un Bot antes de compartirlo y duplicarlo cuando necesites una variante"
  - "Evaluar un Bot compartido antes de dejarle hacer trabajo real"
updated: "2026-09-16"
---

## Por qué importa

Has pasado semanas afinando un Bot. Su descripción es precisa, sus skills funcionan y sus routines se ejecutan a su hora. Una compañera te pide "lo mismo". Montarlo desde cero le llevaría las mismas semanas.

Compartirlo lo resuelve, pero abre dos preguntas. ¿Qué sale con el enlace y qué se queda contigo? Y cuando alguien te manda un Bot a *ti*, ¿cómo sabes que hace lo que promete antes de que toque tus cuentas?

## La idea

Compartir un Bot se parece a pasarle a alguien una copia de tu receta. Recibe las instrucciones y puede preparar el mismo plato. Tu cocina se queda contigo, igual que tu nevera, tus llaves y las notas que has ido escribiendo en los márgenes durante años.

### Qué lleva un enlace para compartir

Cada Bot tiene un enlace para compartirlo. La documentación oficial precisa qué expone ([Create and manage Bots](https://docs.x.ai/grok-bot/bots)):

| Va con el enlace | Se queda contigo |
| -- | -- |
| Identidad | Historial de la conversación |
| Descripción | Sesiones iniciadas |
| Skills | Tu ordenador y sus archivos |
| Routines | |

Quien lo recibe abre una vista previa en x.ai y elige **Add to Grok Bot** (añadir a Grok Bot). Necesita la app de Grok Bot para terminar. Al añadirlo se crea una **copia** en su cuenta. A partir de ahí es su Bot. Aprende de esa persona, trabaja en su ordenador y sus routines gastan su uso.

> [!WARNING]
> El enlace es público. Cualquiera que lo tenga puede ver la configuración del Bot, y la documentación no aclara si su memoria aprendida va con él. Antes de compartirlo, quita claves de API, URL internas, datos de clientes y cualquier otra cosa que no pondrías en un documento público.

Lo de "cualquier otra cosa" importa, porque los secretos casi nunca están en un solo campo evidente. Revisa cada parte del Bot:

- **La descripción**: nombres de clientes, códigos internos de proyectos, enlaces a paneles privados.
- **Las skills**: ejemplos copiados de trabajo real, URL internas dentro de los pasos.
- **Las routines**: nombres de canales, listas de cuentas, direcciones de correo en las instrucciones.

En los planes Teams y Enterprise, un administrador decide si los miembros pueden compartir Bots fuera del equipo. La documentación lo llama compartir plantillas públicas. Los equipos Enterprise empiezan con esta opción desactivada y los demás, con ella permitida ([Grok Bot for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

### Duplicar para ti

Si quieres una segunda versión de tu propio Bot, duplícalo (lección 11). La copia se llama "`<nombre>` copy" y lleva el perfil, los ajustes, las skills activadas, las routines y el avatar. No copia el historial de la conversación, la memoria aprendida ni los archivos adjuntos del chat.

Duplica cuando el rol es el mismo pero cambia el ámbito, por ejemplo un Bot de salud de cuentas por región. Cambia el nombre de la copia y dale su nuevo ámbito antes de asignarle trabajo.

### El Bot de otra persona

La documentación lo deja claro. Los Bots compartidos los crean otros usuarios y no SpaceXAI, y al añadir uno aceptas las [condiciones para Bots de terceros](https://x.ai/legal/bot-sharing-terms). Trata un Bot compartido como a alguien recién contratado con buen currículum. Aun así, revisas su trabajo antes de darle las llaves.

En el directo se vio además un marketplace de Bots ya hechos, que el equipo de xAI revisa a mano. La documentación oficial solo describe un **Marketplace** para plugins y skills empaquetadas, en **Settings → Plugins**, así que puede que el de Bots todavía no esté disponible para ti.

## Paso a paso

**Para compartir un Bot:**

1. Abre el Bot y lee su descripción, cada skill y cada routine como si no lo conocieras.
2. Pide al Bot que te ayude a revisarse:

   ```prompt
   Voy a compartirte con un enlace público. Haz una lista de todo lo que haya en tu descripción, tus skills
   y tus routines que parezca un secreto, una URL interna, el nombre de un cliente o datos privados.
   Cita cada elemento y di dónde está. No cambies nada todavía.
   ```

3. Quita o sustituye lo que encuentre. Usa marcadores como `[tu vista del CRM]` para que quien lo reciba sepa qué tiene que rellenar.
4. Copia el enlace para compartir del Bot y envíalo.

**Para añadir y evaluar un Bot compartido:**

1. Abre la vista previa y lee la descripción, las skills y las routines antes de elegir **Add to Grok Bot**.
2. Después de añadirlo, pregunta antes de ejecutar nada:

   ```prompt
   Antes de hacer ningún trabajo, explícame paso a paso qué haces. Enumera los plugins, las sesiones
   y las fuentes que necesitas, cada acción que cambiaría algo fuera de este chat, y qué hace
   cada routine y cuándo se ejecuta.
   ```

3. Abre **View conversation details → Routines** (ver detalles de la conversación, routines) y pausa cualquier routine que no hayas probado (lección 10).
4. Prueba una tarea con datos seguros y acceso de solo lectura. Un **Test run** (ejecución de prueba) de una routine hace trabajo real, así que deja las acciones de escritura detrás de una aprobación.
5. Reescribe la descripción con tus propios límites, como "No envíes mensajes externos sin aprobación".
6. Conecta solo los plugins y las sesiones que necesite la tarea. Todos tus Bots comparten un ordenador, así que una sesión que abras queda disponible para todos (lección 09).

## Ejemplo

En la sesión del directo para fundadores, el presentador enseñó Stockbot, un Bot que vigila a la competencia. Se registra en sus productos, recorre el onboarding (los pasos que sigue un usuario nuevo) y escribe un análisis detallado con vídeo. Lo compartió desde el escenario con un código QR, para que cualquiera del público pudiera empezar desde el mismo Bot.

{{live 7:46:25 "Compartir con un código QR el Bot que vigila a la competencia"}}

Una copia de Stockbot llegaría sin su historial de conversación y sin sus sesiones. Quien la recibiera tendría que conectar sus propias fuentes y enseñarle sus propios competidores. Lo que compartes es el método. Cada persona pone después su contexto.

Antes, mientras el equipo montaba su negocio de pop-ups, una persona del equipo pidió a otra un Bot para buscar locales. Esa otra persona hizo una plantilla a partir de su propio Bot de investigación y se la mandó, así que no hubo que crear uno desde cero.

{{live 7:13:41 "Compartir entre compañeros un Bot para buscar locales"}}

Para los Bots del marketplace, el consejo del equipo de xAI coincide con los pasos de arriba. Prueba el Bot, pero antes pregúntale qué hace y cómo, sin ejecutar todo el proceso.

{{live 8:12:06 "Cómo evaluar una plantilla del marketplace"}}

## Errores habituales

- **Compartir tal cual un Bot que usas con clientes.** Sus skills y routines pueden mostrar nombres de clientes y enlaces internos a cualquiera que tenga la URL. *Qué hacer:* revísalo, cambia lo sensible por marcadores y después compártelo.
- **Esperar que la copia sepa lo que sabe tu Bot.** El historial no viaja, así que la copia empieza sin tus conversaciones. *Qué hacer:* antes de compartir, pon lo importante en la descripción o en una skill.
- **Ejecutar enseguida las routines de un Bot compartido.** Una routine puede actuar sobre tus cuentas a las tres de la madrugada. *Qué hacer:* pausa las routines, prueba una tarea y después actívalas.
- **Usar un Bot compartido como barrera de seguridad.** Trabaja en el mismo ordenador que tus otros Bots, con las mismas sesiones. *Qué hacer:* dale solo el acceso que necesite la tarea y cierra las sesiones que ya no use.
- **Tratar un duplicado como un Bot nuevo.** Conserva las routines y el ámbito del original. *Qué hacer:* cámbiale el nombre y el ámbito, y revisa antes las routines copiadas.

## Resumen

- Un enlace para compartir es público y entrega una copia con identidad, descripción, skills y routines.
- Nunca incluye el historial de conversación, las sesiones ni tu ordenador. La documentación no aclara si viaja la memoria aprendida, así que trátala también como pública.
- Antes de compartir, limpia la descripción, las skills y las routines de secretos, URL internas y datos de clientes.
- Duplica para tener una variante de tu propio Bot. Después cámbiale el nombre y el ámbito.
- Antes de fiarte de un Bot compartido, pregúntale qué hace, pausa sus routines y pruébalo con datos seguros.
