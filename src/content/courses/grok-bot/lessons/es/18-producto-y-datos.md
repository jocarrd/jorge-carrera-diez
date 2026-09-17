---
id: "18"
module: 6
title: "Producto y datos"
description: "Lleva una pregunta de producto desde los datos hasta gráficos, una routine diaria, un PRD, diseños y un prototipo con un equipo de Bots por rol."
level: advanced
minutes: 8
objectives:
  - "Hacerle una pregunta a un Bot de datos y recibir cifras y gráficos que puedas comprobar"
  - "Encadenar un hallazgo en un PRD, diseños y un prototipo a través de Bots con rol"
  - "Decidir en qué puntos tiene que revisar una persona antes de seguir"
updated: "2026-09-16"
---

## Traspasos lentos entre datos y producto

El trabajo de producto avanza a base de traspasos lentos. Alguien hace una pregunta, una analista escribe la consulta, el responsable de producto convierte la respuesta en una especificación, una diseñadora la maqueta y un ingeniero monta un prototipo. Cada paso espera a que alguien tenga un hueco.

Ya conoces las piezas de lecciones anteriores. Un Bot por rol (lección 11), Bots que se pasan trabajo (lección 12), routines (lección 10) y agentes en la nube para el código (lección 15). Esta lección las junta en un ciclo de producto real. Verás dónde ahorran días los Bots y dónde tienes que mirar con cuidado.

## Una carrera de relevos entre Bots

Un equipo de producto hecho de Bots funciona como una carrera de relevos. Cada Bot se encarga de una etapa, recibe el resultado anterior y entrega al siguiente algo que se pueda revisar. Tú sigues en la conversación como la persona que hace la pregunta, comprueba cada entrega y decide si el trabajo pasa a la siguiente etapa.

### Los roles

En la demo del directo para responsables de producto, el equipo tenía cuatro Bots con nombre y trabajo:

- **Ashley**, ciencia de datos. Está conectada al almacén de datos (la base de datos central donde una empresa guarda la información del negocio), escribe las consultas, las lanza y responde con cifras y gráficos. Una consulta es una pregunta precisa escrita en un lenguaje que la base de datos entiende.
- **PM Pete**, producto. Convierte un hallazgo en un PRD (documento de requisitos de producto), una especificación de lo que hay que construir, con requisitos P0 (máxima prioridad) y P1 (la siguiente prioridad).
- **Pixel**, diseño. Propone opciones de diseño con el sistema de diseño de la empresa, el conjunto compartido de colores, tipografías y componentes.
- **Emily**, responsable de ingeniería. Reparte el PRD en tareas para Bots ingenieros, que lanzan agentes en la nube para construir prototipos.

El caso de uso oficial más cercano es **Product Performance** (rendimiento de producto), en [Use cases](https://docs.x.ai/grok-bot/use-cases). Describe un Bot que se encarga de investigaciones de rendimiento "con pruebas", devuelve capturas y enlaces directos y separa los hechos de las hipótesis.

### Por qué importan más las entregas que el chat

Cada etapa debería terminar en algo que puedas abrir y comprobar, ya sea un gráfico, una hoja de cálculo, un PRD, un diseño o una pull request. La página [Files and results](https://docs.x.ai/grok-bot/files-and-results) recomienda pedir resultados que separen los hechos encontrados en los sistemas de origen de las suposiciones, las acciones ya hechas y las preguntas abiertas. Con esa separación revisas una respuesta de datos en dos minutos en lugar de rehacer el análisis.

### Dónde sigue revisando una persona

Los Bots pueden recorrer el ciclo entero, pero hay tres puntos que merecen tu atención:

1. **Las cifras.** La memoria no es una fuente fiable. Para decidir, pide al Bot que vuelva a abrir los datos actuales y te enseñe la consulta.
2. **El PRD.** Marca lo que se va a construir. Léelo y corrige lo que haga falta antes de que empiece el diseño.
3. **La elección entre diseños y la fusión.** Elegir una dirección y publicar código son decisiones de producto.

> [!TIP]
> Una demo hace cada paso de una sola vez. El trabajo real necesita más. Cuenta con varias vueltas en cada etapa, añade tus propias ideas y revisa con más cuidado cuanto más riesgo tenga el cambio.

## Montar el relevo etapa por etapa

1. **Conecta la fuente de datos** a tu Bot de datos. Usa un connector (conector) de **Settings → Plugins** (ajustes, plugins) si existe. Si no, inicia tú la sesión en la herramienta desde el navegador del Bot (lección 09). Empieza con acceso de solo lectura, para que el Bot pueda mirar sin cambiar nada.
2. **Escribe los límites en la descripción del Bot.** Consultas de solo lectura, enseñar siempre la consulta y no tocar nunca paneles ni alertas.
3. **Haz una pregunta concreta** y pide gráficos. La primera vez, contrasta las cifras con una fuente en la que confíes.
4. **Convierte una respuesta útil en routine.** Confirma qué Bot se encarga, el horario y la zona horaria, y qué debe pasar si faltan datos.
5. **Pasa el hallazgo al Bot de producto.** Responde al mensaje que lo contiene y menciona a ese Bot con `@`.
6. **Revisa el PRD** antes de pedir diseños. Edita o comenta hasta que los P0 estén bien.
7. **Pide diseños para cada P0** y elige tú.
8. **Envía el diseño elegido al Bot de ingeniería** y pide un prototipo con capturas o un vídeo como prueba (lección 16).

## Fly Low Airlines, de la pregunta al prototipo

Esta es la demo de Fly Low Airlines del directo, una aerolínea ficticia preparada para la sesión.

{{live 6:10:24 "Preguntar al Bot de datos por las ventas de ayer"}}

La demo empezó con una pregunta sencilla a Ashley:

```prompt
¿Cuántas personas compraron billetes ayer en móvil y cuántas en web?
```

Ashley consultó el almacén de datos y respondió que se vendieron unos 1.400 billetes, el 58 % en web y el 42 % en móvil. El siguiente mensaje preguntaba cuántas familias volaban y pedía ayuda para verlo en gráficos. Ashley devolvió gráficos por tipo de viajero (solo, pareja, familia, grupo), con las familias en el 25 %.

Después, el equipo lo convirtió en algo recurrente:

```prompt
Mándame esto como actualización cada mañana a las 6.
```

Si lo copias, añade lo que la documentación pide definir en una routine:

```prompt
Cada día a las 6:00 (hora de Madrid), envíame las compras de billetes de ayer
por plataforma y por tipo de viajero, con gráficos y la consulta que has usado.
Si los datos de ayer aún no están disponibles, dilo en vez de usar datos
anteriores.
```

A continuación, el equipo abrió un embudo de compra en móvil que Ashley había preparado antes. Un embudo muestra cuánta gente llega a cada paso de una compra y dónde se queda por el camino. Respondieron a ese mensaje:

```prompt
Parece que hay una gran caída cuando la gente elige asiento en móvil. Trabaja
con @PM Pete para preparar una especificación de producto que mejore el
embudo en móvil.
```

{{live 6:15:28 "El Bot de datos corrige a los humanos"}}

Ashley no se quedó con la lectura de los humanos. La mayor caída estaba entre la búsqueda y la elección de tarifa, antes de llegar a los asientos, y se lo explicó a Pete. Pete redactó un PRD en Notion con requisitos P0 y P1, entre ellos rediseñar los resultados de tarifas en móvil y comparar tarifas más rápido.

El equipo contó que también puedes dejar comentarios en la página de Notion o Google Docs y etiquetar al Bot para que corrija el PRD. Esto aún no está en la documentación. Si no te funciona, pega tus comentarios en la conversación.

Luego pidieron a Pete que pasara el PRD a Emily, y a Pixel que hiciera diseños para cada P0.

{{live 6:21:39 "Votar entre los dos diseños de Pixel"}}

Pixel entregó dos opciones, A y B. El público eligió la A y el diseño pasó a Emily. Emily dividió los P0 en tareas acotadas para sus Bots ingenieros. Uno de ellos, Nova, lanzó un agente en la nube y lo fue vigilando. El prototipo final no se enseñó en la sesión.

## Gráficos sin consulta

- **Fiarte de un gráfico sin ver la consulta.** Un cruce de tablas o un filtro de fechas mal puesto convence igual que uno bueno. *Qué hacer:* pide la consulta y el enlace a la fuente con cada cifra, y comprueba las primeras respuestas.
- **Dejar que tu hipótesis dirija el análisis.** El Bot puede confirmar lo que dijiste en vez de lo que dicen los datos. *Qué hacer:* pide al Bot de datos que contraste tu lectura, como hizo Ashley con lo de los asientos.
- **Programar un informe sin regla para datos que faltan.** La routine publica cifras antiguas como si fueran actuales. *Qué hacer:* indica qué debe hacer el Bot si la fuente está vacía o desactualizada.
- **Saltarte la revisión del PRD.** Diseños y prototipos se acumulan sobre un requisito equivocado. *Qué hacer:* revisa la lista de P0 antes de que empiece el diseño.
- **Pedir cambios al Bot de datos.** Un panel, una alerta o un ajuste de producción cambia durante una "investigación". *Qué hacer:* mantén al Bot de datos en solo lectura y deja los cambios detrás de una aprobación.

## Cada etapa termina en algo comprobable

- Un equipo de producto de Bots es un relevo que va de los datos al PRD, al diseño y al prototipo, y cada etapa termina en algo que puedes comprobar.
- Con cada respuesta de datos, pide la consulta, los enlaces a la fuente y la separación entre hechos y suposiciones.
- Convierte una pregunta útil en routine solo después de fijar el horario, la zona horaria y qué hacer si faltan datos.
- Revisa tú las cifras, el PRD y la elección de diseño antes de seguir.
- Responde al mensaje concreto cuando pases un hallazgo a otro Bot, para que el contexto viaje con él.
