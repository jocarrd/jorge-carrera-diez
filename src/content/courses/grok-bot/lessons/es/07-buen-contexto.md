---
id: "07"
module: 2
title: "Cómo darle buen contexto"
description: "Cómo explicarle el trabajo a un Bot para que no adivine: resultado claro, buenas referencias, un documento común y un alcance acotado."
level: beginner
minutes: 8
objectives:
  - "Escribir una petición que diga el resultado, las fuentes, los límites y cuándo está terminado"
  - "Mantener un documento breve y común que puedan leer todos tus Bots"
  - "Darte cuenta de cuándo un Bot lleva demasiadas cosas y acotar su alcance"
updated: "2026-09-16"
---

## Un resultado vago suele ser falta de contexto

Un Bot solo sabe lo que le cuentas, lo que puede consultar y lo que ha aprendido. Cuando un resultado llega impreciso o desenfocado, lo habitual es que le faltara contexto. El Bot rellenó los huecos adivinando.

Escribir mensajes más largos rara vez ayuda. Lo que ayuda es poner cada dato en su sitio: la petición, un documento compartido, la descripción o un Bot distinto.

## Objetivo, fuentes, límites y ejemplos

El **contexto** es la información con la que trabaja un Bot: tu objetivo, las fuentes, las restricciones y ejemplos de cómo es un buen resultado. Piensa en cómo explicarías un encargo a un profesional independiente su primera mañana. Un buen encargo es breve y concreto. Uno malo se queda en "hazlo genial" o se convierte en dos horas de charla con lo importante perdido en medio.

### Una petición con un final claro

Acostúmbrate a hacer esto en cada petición:

- Empieza por el resultado que necesitas, sin describir cada clic.
- Enlaza la fuente de verdad, el sitio donde está la información correcta.
- Di qué puede cambiar el Bot y qué necesita tu aprobación.
- Pide pruebas: enlaces, capturas de pantalla o un breve registro de lo que ha hecho.

Compara "Haz nuestra landing page más atractiva" con la petición de abajo. (Una landing page es la primera página que ve quien llega a una web).

```prompt
Prepara tres propuestas de landing page para nuestro mercado de comida de fin de semana. Usa el resumen de /workspace/empresa/resumen.md y las webs de referencia que he pegado arriba. Cada propuesta necesita un titular, tres secciones y una frase que explique por qué encaja con nuestro público. No publiques ni despliegues nada. Enlaza cada referencia en la que te inspires.
```

La segunda versión dice qué producir, dónde mirar, cómo es el resultado terminado y dónde parar. Desplegar significa poner una web en marcha para el público, así que la petición mantiene los borradores en privado.

### Referencias de calidad antes de construir

Antes de pedirle a un Bot que cree algo, dale buenos ejemplos de los que aprender o pídele que los busque. Los ejemplos le enseñan al Bot el nivel que esperas.

Si ya conoces algunos buenos ejemplos, parte de ellos. Un Bot que busca locales para eventos acierta más si le nombras unos cuantos sitios que ya te gustan y le pides que trabaje a partir de ellos.

### Un documento breve y común

Todos tus Bots comparten un mismo ordenador en la nube, y los archivos de `/workspace` los ven todos (lección 02). Por eso, un documento breve sobre tu empresa o tu proyecto es la forma más sencilla de que todos los Bots partan de la misma base. Limítalo a lo que necesitaría un compañero nuevo el primer día: a qué se dedica la empresa, para quién trabaja, el objetivo actual y las palabras que usa el equipo.

Mantenlo sencillo y correcto, porque un Bot con mala información da malos resultados. Cuando crees un Bot nuevo, dile que use ese documento como punto de partida.

### Un alcance acotado

Da a cada Bot un trabajo claro (lección 03). Un puesto como **General Helper** (ayudante general) le da al Bot menos orientación y hace que su contexto guardado sea más difícil de reutilizar. Los mejores papeles se encargan de un resultado que se repite. Cuando una conversación se convierte en otro trabajo de larga duración, abre un hilo (una conversación aparte colgada de un mensaje) o crea un Bot nuevo.

### Cuando el contexto se satura

Un Bot que lleva demasiadas tareas sin relación entre sí empieza a perder el hilo. Sus respuestas se vuelven menos coherentes o menos precisas. Cada Bot solo puede tener a la vista una cantidad limitada de texto, lo que se llama su límite de contexto.

Hay dos soluciones. Acota el trabajo del Bot o reparte el trabajo entre varios Bots para que ninguno pase de su límite. También puedes pedirle a un Bot que olvide lo que ya no necesita (lección 05).

### Un Bot "cajón de sastre" para preguntas sueltas

Siempre surgen preguntas sueltas: "¿Ya ha salido este disco?". Si se la haces a tu Bot de informes, esa pregunta se queda en su contexto junto al trabajo importante.

Ten un Bot solo para preguntas sueltas, así los demás no pierden el foco. Cuando aprenda algo útil, pídele que se lo pase al Bot que corresponda.

> [!WARNING]
> No le des nunca trabajo real al Bot de preguntas sueltas. En cuanto se encarga de un trabajo, se convierte en el **General Helper** vago del que hablamos más arriba.

{{live 7:51:33 "Un Bot para preguntas sueltas"}}

### Que lo repita antes de ejecutar

Después de un mensaje largo, sobre todo si lo has dictado (lección 03), pide al Bot que te repita lo que ha entendido antes de empezar. Leer un resumen corto es más rápido que releer tu propio bloque de texto, y detecta malentendidos antes de que se haga ningún trabajo.

## Preparar el contexto antes de pedir

1. **Escribe el documento común una sola vez.** Pide a un Bot que lo redacte con lo que le cuentes y después revísalo tú.
2. **Empieza cada petición por el resultado.** Añade las fuentes, los límites y cómo es el trabajo terminado.
3. **Adjunta referencias** o pide al Bot que busque primero algunas de calidad.
4. **Pide que lo repita** antes de que el Bot empiece algo largo o importante.
5. **Corrige el plan** y después déjalo trabajar.
6. **Vigila si se desvía.** Si las respuestas empeoran, acota el trabajo del Bot o pasa el tema secundario a otro Bot.

```prompt
Escribe /workspace/empresa/resumen.md en menos de 300 palabras: a qué nos dedicamos, quiénes son nuestros clientes, el objetivo de este trimestre, las palabras que usamos y las que evitamos. Pregúntame lo que no puedas completar. No te inventes datos.
```

```prompt
Antes de empezar, repite con tus palabras lo que te acabo de pedir: el objetivo, las fuentes que vas a usar, lo que no vas a hacer y lo que me vas a entregar. Espera a que te dé el visto bueno.
```

## Referencias antes de la landing

En una demostración en directo, el equipo de xAI quería prototipos de landing page para una plataforma de restaurantes pop-up, un servicio para restaurantes temporales. Antes de pedir ningún diseño, quien presentaba fue reuniendo contexto.

{{live 2:11:11 "Reunir referencias antes de prototipar"}}

1. Preguntó: "¿Cuáles son buenas fuentes de diseño de landing pages? Busca algunas referencias". El Bot encontró galerías de landing pages y eligió unas cuantas direcciones.
2. Dictó lo que tenía en la cabeza sobre el negocio: la plataforma, montar su propio pop-up para probarla y si hacían falta varias landing pages.
3. Terminó con: "Repíteme con tus propias palabras lo que acabo de decir, para saber que me has entendido".

{{live 2:15:17 "Pedir al Bot que lo repita"}}

El resumen del Bot fue más allá de repetir. Señaló que el verdadero cuello de botella estaba en el primer ciclo del negocio, que era conseguir local, operadores y cocineros y, después, asistentes. Las landing pages importaban menos. Solo después preparó tres prototipos en HTML, páginas web sencillas que puedes abrir y recorrer. Cuando le parecieron "demasiado aburridos", se lo dijo directamente y recibió versiones más vivas.

## Pedir que quede más atractivo y otros mensajes vagos

- **Pedir calidad con palabras vagas.** "hazlo más atractivo" no le da al Bot ningún objetivo. *Qué hacer:* di qué debe cambiar y enséñale un ejemplo.
- **Un mensaje enorme sin comprobar.** El Bot trabaja sobre un malentendido. *Qué hacer:* pídele que lo repita antes de empezar.
- **Repetir el mismo contexto a cada Bot.** Las versiones se van separando. *Qué hacer:* mantén un documento breve y común en `/workspace`.
- **Un documento común que no para de crecer.** Los Bots se quedan con detalles viejos o irrelevantes. *Qué hacer:* mantenlo corto y actualízalo cuando algo cambie.
- **Un Bot para todo.** Las respuestas pierden precisión con el tiempo. *Qué hacer:* da a cada Bot un solo trabajo y lleva los temas secundarios a otro sitio.
- **Preguntas sueltas en un Bot de trabajo.** La curiosidad del momento se queda en su contexto junto al trabajo real. *Qué hacer:* házsela a un Bot para preguntas sueltas.

## Una petición bien armada

- Empieza cada petición por el resultado, las fuentes, los límites y cómo es el trabajo terminado.
- Da referencias de calidad antes de pedirle a un Bot que construya algo.
- Mantén un documento breve de empresa o proyecto en `/workspace` para todos tus Bots.
- Da a cada Bot un trabajo acotado. Si las respuestas empeoran, acota su alcance o reparte el trabajo.
- En peticiones largas o importantes, pide al Bot que repita lo que ha entendido antes de empezar.
