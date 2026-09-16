---
id: "12"
module: 4
title: "Bots que trabajan juntos"
description: "Deja que tus Bots se escriban, pásales el trabajo con un único responsable y usa los chats de grupo solo cuando el traspaso tenga que verse."
level: intermediate
minutes: 8
objectives:
  - "Pedir a un Bot que solicite información o trabajo a otro"
  - "Nombrar un único responsable en cada fase de un traspaso"
  - "Crear un chat de grupo, dirigir mensajes dentro de él y saber cuándo cuesta más de lo que aporta"
  - "Responder a un mensaje concreto para dar contexto y encontrar los traspasos entre Bots"
updated: "2026-09-16"
---

## Por qué importa

En la lección 11 repartiste el trabajo por roles. Ahora tu Bot de datos tiene las cifras y tu Bot de correo escribe los emails. La primera vez que necesitas un correo sobre esas cifras, acabas copiando la respuesta de una conversación y pegándola en la otra.

Los Bots pueden dar ese paso por su cuenta. También pueden pasarse de la raya. Varios Bots responden a la misma petición y gastan tu uso semanal (lección 10).

Aquí verás cómo hacer que colaboren con un solo responsable cada vez y dónde leer lo que se han dicho entre ellos.

## La idea

Tus Bots pueden mandarse mensajes, como compañeros en el chat del trabajo. Uno pregunta, el otro responde cuando puede y tú puedes leer el intercambio. Cuando un Bot le pasa una parte del trabajo a otro, se habla de un **traspaso**.

### Mensajes directos entre Bots

Un Bot puede enviar un mensaje asíncrono a otro Bot. Asíncrono significa que quien lo envía no se queda esperando. El Bot que lo recibe se activa, atiende la petición y puede responder más tarde. El traspaso se ve en la conversación.

La documentación oficial da cuatro casos en los que ayuda:

- Un Bot gestiona el sitio del que salen los datos y otro se encarga del resultado final
- Un especialista debe revisar un borrador
- Lo que bloquea el trabajo le corresponde a otro rol
- Un trabajo largo debe seguir adelante sin que tengas que coordinar cada paso

Puedes pedir un traspaso en un mensaje mencionando al otro Bot con `@`. También puedes dejar una regla fija en la descripción de un Bot, por ejemplo "pídele a Data Dan las cifras de encuestas que necesites".

{{live 0:54:13 "Email Ethan pide contexto a otros dos Bots"}}

Tus Bots solo pueden escribir a tus propios Bots. Según el equipo de xAI, todavía no pueden hablar con Bots de otras personas u otras cuentas.

### Un responsable en cada fase

La documentación pide un único responsable en cada fase. Demasiados traspasos en paralelo generan trabajo duplicado y avisos que solo hacen ruido.

En la práctica, cada petición que pasa de un Bot a otro debe decir quién hace el trabajo, quién recibe el resultado y quién da el siguiente paso.

### Chats de grupo

Un chat de grupo reúne de dos a seis Bots en una conversación contigo. Úsalo cuando varios Bots trabajan hacia un resultado común y los traspasos deben verse en un mismo sitio.

Dentro de un grupo, los mensajes se dirigen así:

- Escribe con normalidad para que los Bots decidan quién responde.
- Escribe `@` y elige un Bot cuando la petición es de un compañero concreto.
- Menciona a varios Bots solo cuando la petición necesita a cada uno.
- Usa `@everyone` con moderación, para avisos a todo el grupo.

Ten en cuenta dos límites. Por ahora, el mensaje de traspaso de un Bot al grupo es solo de texto, así que un Bot debe enviar una imagen directamente al Bot que tenga que revisarla. Y los chats de grupo no tienen el interruptor de **Notifications** (notificaciones) por Bot que tienen las conversaciones individuales.

> [!WARNING]
> Los chats de grupo con varios Bots salen caros, porque todos los Bots hablan y se pisan. Muchas veces funciona mejor que un Bot mencione a los demás una vez y después trabaje con cada uno por separado.

{{live 8:10:04 "Por qué los chats de grupo con muchos Bots salen caros"}}

### Responder a un mensaje concreto

Responder a un mensaje concreto le indica al Bot exactamente a qué resultado o aprobación te refieres. La documentación recomienda responder en un hilo cuando tu comentario afecta a un solo resultado o a una sola petición de aprobación. Así la conversación principal no se dispersa y el contexto de la decisión queda unido a ella.

Las reacciones, como un pulgar arriba, sirven para confirmar algo sin más. Cuando el Bot necesita una instrucción distinta, escribe una respuesta. No uses nunca una reacción para una decisión que afecte a la seguridad.

### Ver lo que se han dicho los Bots

Los traspasos aparecen en la conversación, así que puedes abrirlos y leer qué se pidió y qué se respondió. Si no sabes dónde ocurrió un intercambio, usa la búsqueda o la paleta de comandos (el buscador rápido de comandos y mensajes). Pueden encontrar mensajes anteriores entre Bots y grupos donde esa función esté disponible.

## Paso a paso

1. Decide si necesitas ver el traspaso mientras ocurre. Si no, usa un mensaje directo. Si lo necesitas, usa un grupo.
2. Para un traspaso directo, escribe al Bot que se encarga del resultado final. Menciona al otro Bot con `@`. Di qué tiene que pedir, qué debe devolver y qué hacer si la respuesta no está lista.
3. Para un grupo, elige **New** (nuevo) en la barra lateral. En **New chat** (nuevo chat), selecciona de dos a seis Bots. En iPhone o Android, usa **+ → New Group Chat**.
4. Abre el grupo y cambia el nombre generado si hace falta.
5. Publica un primer mensaje con el resultado común y el responsable de cada paso.
6. Cuando un comentario afecte a un solo resultado, responde a ese mensaje en lugar de escribir uno nuevo.
7. Lee los traspasos. Si dos Bots hacen el mismo trabajo, nombra a un responsable y dile al otro que pare.

## Ejemplo

En la sesión para principiantes del directo, quien presentaba tenía tres Bots. Data Dan había creado una encuesta sobre café, Slide Sonya hacía las diapositivas y Email Ethan le escribía los correos. Le pidió a Ethan un borrador de correo sobre los datos del café. Ethan escribió por su cuenta a Data Dan para conseguir las cifras, y después le pidió que escribiera también a Sonya sobre la presentación.

Después abrió los mensajes entre los Bots. Dan había respondido que aún no tenía los datos, así que Ethan usó un conjunto de datos de ejemplo que ya tenía. El traspaso funcionó, pero el borrador se montó con cifras de relleno.

Una petición que evita ese resultado:

```prompt
Redacta un correo a Jason sobre la encuesta de café. Pídele a @Data Dan el número de respuestas y las tres cafeterías más votadas. Si Dan todavía no tiene los resultados definitivos, avísame y espera. No uses datos de ejemplo ni de relleno. Enséñame el borrador antes de enviar nada.
```

Más adelante, en la misma sesión, metió a los tres Bots en un chat de grupo. Pidió a Sonya una diapositiva con un gráfico y a Ethan que enviara los detalles por correo cuando estuviera lista. Ethan respondió que esperaría a la diapositiva de Sonya, porque entendió que su paso dependía del de ella.

En la sesión para product managers, un presentador respondió directamente al gráfico de embudo del Bot de datos (un gráfico de cuántos clientes abandonan en cada paso de una compra). En la respuesta etiquetó a PM Pete para que escribiera una especificación, un documento breve que describe qué hay que construir. La respuesta llevaba el gráfico como contexto. Entonces el Bot de datos corrigió a los humanos. La mayor caída estaba entre la búsqueda y la selección de tarifa, y no en la elección de asiento. Después le pasó ese hallazgo a Pete.

Para el primer mensaje de un grupo, el ejemplo de la documentación nombra un responsable por paso:

```prompt
@Researcher recopila el material de origen y enlaza cada afirmación. @Writer convierte los hallazgos en un borrador de lanzamiento. @Reviewer revisa el borrador frente a las fuentes y enumera solo los problemas que lo bloquean. No publiquéis nada.
```

## Errores habituales

- **Copiar tú las respuestas de un Bot a otro.** Haces de mensajero y el contexto se pierde por el camino. *Qué hacer:* pide al Bot responsable que escriba al otro.
- **No decir qué hacer si el otro Bot no puede responder.** El Bot improvisa, como Ethan con los datos de ejemplo. *Qué hacer:* indica si debe esperar, preguntarte o parar.
- **Dos responsables para un mismo paso.** Los dos Bots hacen el trabajo y recibes avisos duplicados. *Qué hacer:* nombra un único responsable por fase.
- **Un chat de grupo para todo.** Todos los Bots responden y el uso se dispara. *Qué hacer:* usa traspasos directos y deja los grupos para cuando el traspaso tenga que verse.
- **Publicar una imagen en un traspaso al grupo.** El traspaso de un Bot al grupo es solo de texto. *Qué hacer:* pide al Bot que envíe la imagen directamente a su compañero.
- **Responder con una reacción cuando cambia la instrucción.** Una reacción solo confirma. *Qué hacer:* responde por escrito al mensaje concreto.

## Resumen

- Los Bots pueden escribirse de forma asíncrona, y el traspaso se ve en la conversación.
- Cada fase necesita un responsable. Los traspasos en paralelo generan trabajo duplicado y ruido.
- Los chats de grupo reúnen de dos a seis Bots. Úsalos cuando el traspaso tenga que verse y dirige los mensajes con `@`.
- Responde al mensaje concreto cuando el comentario afecta a un resultado o a una aprobación.
- Dile a un Bot qué hacer cuando el otro Bot todavía no tiene la respuesta.

Más información en [Message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration) y [Create and manage Bots](https://docs.x.ai/grok-bot/bots).
