---
id: "20"
module: 6
title: "Montar un negocio con Bots"
description: "Cómo el equipo del directo montó un negocio de pop-ups con Bots: investigación, landing, marketing, criterios de local, presupuesto y lo que falló."
level: advanced
minutes: 8
objectives:
  - "Plantear un proyecto de negocio pequeño como una serie de trabajos para Bots con resultados claros"
  - "Escribir criterios y prompts precisos para investigación, locales y presupuestos"
  - "Reconocer los fallos que salieron en directo y cómo evitarlos"
updated: "2026-09-16"
---

## Un negocio lo necesita todo a la vez

Las dos lecciones anteriores enseñaron un equipo cada una. Un negocio pequeño lo necesita todo a la vez, desde la investigación y la web hasta el marketing, los proveedores y el presupuesto. Con pocas personas, casi todo ese trabajo se queda esperando.

En el directo, los presentadores intentaron montar un negocio en 72 horas con Bots, delante de la cámara. Lo llamaron "Ship by Thursday", una plataforma para organizar pop-ups de comida en San Francisco que pondrían a prueba montando su propio pop-up. Fue caótico, y eso lo hace útil para estudiar, porque se ve qué funcionó y qué se rompió. Los nombres de los Bots y las herramientas fueron elección suya, y tú puedes usar otros.

## Una lista de trabajos con un Bot en cada uno

Trata el negocio como una lista de trabajos. Cada trabajo tiene un Bot responsable y termina en algo que una persona puede comprobar. Los Bots preparan. Las personas toman las decisiones que cuestan dinero, necesitan una firma o llegan a los clientes.

La documentación oficial propone el mismo orden para cualquier rol. Escribe el trabajo y sus límites en la descripción del Bot. Haz una tarea real con un alcance seguro, corrígela y guarda el proceso como skill. Solo entonces añade una routine. La documentación pide además dejar detrás de una aprobación las acciones externas con consecuencias ([Use cases](https://docs.x.ai/grok-bot/use-cases)). Un negocio nuevo tiene muchas, como comprar un dominio, escribir a un local o publicar una página.

### Los trabajos que creó el equipo del directo

1. **Investigación de mercado.** Un Bot conectado a X mediante un plugin leyó las respuestas a las publicaciones de los presentadores y agrupó las ideas de negocio que propuso el público.
2. **Landing.** Un Bot prototipador hizo maquetas rápidas en HTML que se veían dentro de Grok Bot. Después, un Bot ingeniero montó la página real, con los registros guardados en una base de datos.
3. **Bots de investigación.** Uno buscó restauradores destacados y páginas de pop-ups. Otro hizo una lista de entre 15 y 20 caterings con correo y teléfono.
4. **Marketing.** Un Bot propuso las 50 mejores esquinas de San Francisco para repartir flyers y escribió el titular.
5. **Locales.** Un Bot "host finder" (buscador de anfitriones) buscó sitios donde celebrar el evento con criterios explícitos.
6. **Presupuesto.** Un Bot organizador de eventos preparó un presupuesto base antes de pedir precios a los locales.
7. **Base de conocimiento.** Un Bot mantenía al día una página de Notion con las decisiones de los demás Bots.

## Arrancar desde un documento de una página

1. **Escribe un documento de empresa de una página** con la idea, el cliente y el objetivo de esta semana. Compártelo con todos los Bots. Los presentadores lo tenían en Notion.
2. **Investiga antes de construir.** Apunta un Bot de investigación a fuentes reales y pide los hallazgos agrupados y con enlaces.
3. **Elige una cifra que mover** antes de crear más Bots. Una persona invitada, que lleva su propio negocio, les pidió decidir primero si el objetivo eran leads (personas interesadas a las que puedes contactar) o registros por correo.
4. **Prototipa barato y luego construye.** Pide maquetas desechables, elige una y pásasela a un Bot ingeniero.
5. **Escribe criterios precisos** para cada búsqueda con el tamaño, las fechas, el presupuesto, qué evitar y por qué.
6. **Deja el dinero, los contratos y los mensajes que salen detrás de una aprobación.** Añade reglas **Ask first** (preguntar antes) en **Settings → General → Auto-review** (ajustes, revisión automática) para compras y correo externo.
7. **Encarga a un Bot que registre las decisiones** y dile que te consulte antes de escribir.

## Ship by Thursday desde cero

{{live 1:43:15 "El Bot de investigación agrupa miles de respuestas en X"}}

Los presentadores conectaron el plugin de X, crearon un Bot y le pidieron:

```prompt
Resume lo que ha propuesto la gente que ha respondido a nuestras publicaciones
recientes.
```

Devolvió temas. La gente pedía "no otra demo de SaaS" (SaaS es software que se vende como suscripción en línea), algo físico o local, ideas de consumo retro, una empresa que crea empresas y una larga lista de ideas sueltas. Eligieron la dirección física y local y acabaron en pop-ups para restaurantes.

Para la landing, una de las personas que presentaban pidió primero a un Bot ejemplos de buenas landings. Luego le dictó la idea y terminó con una comprobación:

```prompt
Repíteme con tus palabras lo que acabo de decir, para saber que me has
entendido.
```

Los tres primeros prototipos eran "demasiado aburridos". Una segunda ronda dio el estilo "night market pink" que se quedaron. Un Bot subió la página al repositorio del equipo, que se desplegaba solo, es decir, cada cambio se publicaba en la web sin ningún paso a mano. Más tarde, el formulario de registro se conectó a una base de datos.

Más adelante, el trabajo de locales y presupuesto mostró el valor de los criterios precisos. Al Bot buscador de locales le dijeron que partiera de sitios que el equipo ya conocía. Tenía que evitar espacios públicos o del Servicio de Parques Nacionales, porque los permisos tardan demasiado, y buscar locales que ya tuvieran licencia de alcohol. Un Bot encontró además que un espacio público exigía una revisión de 4 a 15 días hábiles.

{{live 8:26:01 "Escribir el prompt del presupuesto del evento con una organizadora de eventos"}}

Para el presupuesto, una persona invitada que organiza eventos con Bots hizo primero que el equipo fijara los datos. Acordaron de 100 a 200 invitados en un espacio diáfano tipo galería en San Francisco, dentro de un mes más o menos, por la tarde-noche. No habría alcohol, para simplificar permisos, y la comida caliente vendría de un catering externo. Querían micrófono y altavoz pero no DJ, y dejaron fuera el marketing. Después propuso empezar el prompt asignando un papel. Esta es una versión ordenada de lo que escribió uno de los presentadores:

```prompt
Eres un organizador de eventos sénior en San Francisco. Prepara un presupuesto
para un evento pop-up de unos 200 invitados, una tarde-noche, dentro de un mes
más o menos, en un espacio diáfano tipo galería. Sin alcohol. Comida caliente
de un catering externo; comprueba si los locales aceptan catering externo.
Incluye local, comida, personal, y micrófono y altavoz para hablar al público.
Deja fuera el marketing. Muestra cada partida con una estimación baja y otra
alta, y la fuente o la suposición en la que se basa.
```

El resultado no se vio en el directo. Según esa persona, el siguiente paso sería que el Bot pidiera precios a los locales que encajan y negociara dentro del presupuesto. Esos correos deberían esperar a tu aprobación.

### Qué falló y qué enseña

- **Las primeras maquetas eran sosas.** Di qué no te gusta y vuelve a pedir. Da ejemplos desde el principio.
- **Un Bot ingeniero abrió sin que nadie se lo pidiera una pull request de unas 2.000 líneas.** Los presentadores respondieron con una regla explícita. Escribe las reglas de trabajo en la descripción antes de la primera construcción.
- **Un Bot no llegaba a los repositorios.** Parecía que se había usado el connector equivocado. Revisa **Settings → Plugins** y vuelve a autenticar antes de culpar al Bot.
- **Un Bot no registró la fecha del evento que había decidido el equipo.** Encarga a un Bot concreto que registre cada decisión y te la confirme.
- **Las actualizaciones automáticas amenazaban con llenar Notion de ruido.** Los presentadores le dijeron al Bot que actualizara solo lo importante y consultara antes.
- **Las imágenes de merchandising salieron con el logo mal,** porque nadie le dio al Bot los archivos de marca.
- **La idea cambió** de un pop-up de restaurante a una exposición de arte. Los presentadores avisaron en cuanto lo decidieron a Steve, su Bot jefe de gabinete. Avisa primero al coordinador, o los demás Bots seguirán trabajando en el plan viejo.

La persona invitada que organiza eventos señaló también lo que sigue necesitando personas en un evento, que es el registro de invitados y la seguridad. Y comparó a la IA leyendo contratos con alguien en segundo de Derecho, que sirve para una primera lectura pero después necesita a un experto.

## Diez Bots sin objetivo

- **Crear diez Bots antes de elegir un objetivo.** Cada uno trabaja mucho en una dirección distinta. *Qué hacer:* escribe primero el documento de empresa y elige la cifra que quieres mover.
- **Hacer búsquedas vagas** ("búscame un local chulo"). Recibes listas largas que no sirven. *Qué hacer:* da el tamaño, la fecha, el presupuesto y las exclusiones, con el motivo de cada una.
- **Dejar que los Bots compren, firmen o envíen.** Un dominio, una señal o un correo salen sin que decida una persona. *Qué hacer:* mantén reglas **Ask first** para compras y mensajes externos.
- **Cambiar de plan sin avisar a los Bots.** Siguen produciendo trabajo para la idea anterior. *Qué hacer:* avisa al Bot coordinador y pídele que actualice a los demás.

## Los Bots preparan, tú decides

- Divide el negocio en trabajos, un Bot para cada uno, y que cada trabajo termine en algo que puedas comprobar.
- Investigar y prototipar es barato, así que decide el objetivo antes de construir mucho.
- Los criterios precisos (tamaño, fechas, exclusiones y motivos) hacen útiles a los Bots de investigación y de presupuesto.
- Las compras, los contratos, los correos a locales y la seguridad del evento siguen en manos de personas.
- Casi todos los fallos del directo vinieron de falta de contexto o de reglas, y ambas cosas se arreglan antes de empezar.
