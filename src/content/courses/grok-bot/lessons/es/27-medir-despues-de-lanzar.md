---
id: "27"
module: 9
title: "Medir después de lanzar"
description: "Qué mirar cuando todavía no hay ingresos, cómo pedirle los datos a un Bot en vez de entrar a un panel, y las dos cifras que cambiaron sus prioridades en el mismo día."
level: advanced
minutes: 8
objectives:
  - "Elegir qué medir según la etapa en la que está el producto"
  - "Montar un informe periódico que llega solo, sin entrar a ningún panel"
  - "Distinguir un dato que cambia decisiones de uno que solo decora"
updated: "2026-09-18"
---

## Pedir los datos en vez de ir a buscarlos

La costumbre es abrir una web de paneles, iniciar sesión y navegar hasta la gráfica que quieres. Si esa gráfica no existe, la creas. Y si mañana quieres otro corte, vuelves a empezar.

Roshan hace otra cosa cada vez que sacan algo nuevo: le pide a un Bot que ya conoce sus datos un informe cada quince minutos con cómo va el lanzamiento. Altas nuevas, partidas empezadas y el embudo de quien prueba a quien se registra.

{{live d3 1:51:27 "Un informe del lanzamiento cada quince minutos"}}

Su argumento es sencillo. Consigue el corte de datos que necesita en ese momento sin tener que crear un panel nuevo. Cuando a mitad de tarde activaron la analítica de la web, no montó nada: le dijo al Bot que acababan de encenderla y que la incorporara a sus informes de siempre. El conector ya estaba puesto.

## Qué medir según dónde estés

La pregunta que le hacen en directo es la buena: dónde miras para decidir qué haces después. Y su respuesta distingue por etapa, que es lo que casi nadie hace.

{{live d3 1:59:36 "En una empresa de cero a uno la métrica no es el dinero"}}

**Si acabas de empezar y no cobras**, el dinero no te dice nada. Lo que importa es si la gente usa aquello, si se lo pasa bien y si le gusta lo que has hecho. En su caso: si llegan al final de una partida, si empiezan otra, o si se caen al principio y no vuelven.

**Si ya tienes ingresos**, la métrica principal es el dinero, tal y como les repitieron los invitados que trabajan con negocios pequeños.

Mezclar las dos es el error habitual. Perseguir ingresos cuando todavía no sabes si a alguien le importa tu producto te hace afinar algo que aún no existe.

### El equilibrio del juego también es una métrica

Un detalle que se traslada a cualquier producto. Por la mañana pidió los datos de victorias y derrotas y salió un **41,8 % de derrotas**, es decir, la máquina ganaba más de la cuenta.

{{live d3 2:02:16 "Un 41,8% de derrotas: el juego está demasiado difícil"}}

El objetivo en un juego competitivo es acercarse al 50 %, porque tienes que sentir que puedes ganar sin ganar siempre. A media tarde, después de ajustar, estaban en el 47 %.

Lo interesante es que **convirtieron una sensación en algo medible**. El Bot de diseño de juego ya les había dicho que estaba demasiado difícil para un lanzamiento; los datos lo confirmaron y dieron la dirección del ajuste.

## Las dos cifras que cambiaron sus prioridades

De todo lo que midieron ese día, dos movieron decisiones. El resto fue decoración.

**Más gente jugaba en móvil que en escritorio**, con un 44 % en iOS. Lo dijeron tal cual: eso es una buena entrada para decidir qué arreglar primero. Y la queja número uno del feedback era justamente que en móvil no funcionaba bien. Dos fuentes distintas apuntando al mismo sitio.

{{live d3 5:18:01 "Hay más jugadores en móvil que en escritorio"}}

**El 8 % de quien juega una partida de práctica acaba registrándose.** Es el dato de embudo que llevaban buscando todo el día, y llegó a última hora.

{{live d3 6:46:06 "El 8% de quien prueba acaba registrándose"}}

### Y una duda de medición que conviene copiar

Cuando miró ese embudo por primera vez, no dio el número por bueno. Se fijó en que el botón de iniciar sesión solo se ve arriba del todo mientras juegas en modo de práctica, y dijo en voz alta que a lo mejor el evento de conversión no se está midiendo bien.

Esa desconfianza vale más que el dato. Un embudo malo puede ser un producto malo o un contador mal puesto, y actuar sin distinguirlo sale caro.

Su lectura de la caída, además, no era alarmista: mucha gente entra, prueba, se lo pasa bien y no ve motivo para registrarse. Se preguntaron qué darle a quien sí entra, en lugar de cómo empujar a registrarse a quien no quiere.

## Montar tu propio pulso

1. **Conecta las fuentes al Bot** antes de necesitarlas: la base de datos, la analítica de la web y donde llegue el feedback.
2. **Pide un informe periódico**, no un panel. Que te diga altas, uso y el paso del embudo que te importe.
3. **Ajusta la frecuencia al ritmo real.** Cada quince minutos vale el día del lanzamiento; a la semana siguiente, no.
4. **Pide proporciones, no listas.** El 71 % de fallos dice más que doscientos mensajes.
5. **Cruza dos fuentes antes de priorizar.** El dato de móvil y la queja de móvil decían lo mismo.
6. **Duda del contador** cuando un número te sorprenda, antes de cambiar el producto.

## Dónde se tuerce esto

- **Medir ingresos cuando aún no cobras.** _Qué hacer:_ mide si la gente vuelve.
- **Confundir un gráfico bonito con una decisión.** Las curvas acumuladas siempre suben, y ellos mismos se reían de eso. _Qué hacer:_ quédate con las cifras que cambian lo que harás mañana.
- **Poner informes cada quince minutos y dejarlos puestos.** Es el gasto silencioso del que se habla en el módulo de coste. _Qué hacer:_ bájalos cuando pase el lanzamiento.
- **Actuar sobre un embudo sin comprobar cómo se mide.** _Qué hacer:_ revisa dónde se dispara el evento antes de tocar nada.
- **Pedir los datos y no hacer nada con ellos.** _Qué hacer:_ que cada informe acabe en una decisión o quítalo.

## Números que cambian decisiones

- Pide los datos a un Bot conectado en vez de navegar hasta un panel; el corte que necesitas hoy no es el de mañana.
- Sin ingresos, la métrica es si la gente vuelve, no el dinero.
- Una sensación difusa como «está difícil» se puede convertir en un porcentaje y ajustar.
- Dos cifras cambiaron sus prioridades en tres días; el resto fue decoración.
- Antes de creerte un número raro, comprueba cómo se está contando.
