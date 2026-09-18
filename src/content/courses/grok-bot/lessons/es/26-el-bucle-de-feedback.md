---
id: "26"
module: 9
title: "El bucle de feedback"
description: "Cómo pasar de un formulario dentro de la aplicación a un arreglo integrado, con un Bot que clasifica, otro que reproduce el fallo y las defensas que necesita todo texto que escribe un desconocido."
level: advanced
minutes: 9
objectives:
  - "Montar la cadena que va del comentario de un usuario a la pull request"
  - "Exigir que el agente reproduzca el fallo antes de tocar nada"
  - "Proteger la entrada de texto libre, incluidas las inyecciones de prompt"
updated: "2026-09-18"
---

## El día que aparecen los usuarios

Los dos primeros días del directo se construye. El tercero cambia el trabajo: a las diez de la mañana lanzan el juego y en minutos hay noventa y seis personas en el marcador. A partir de ahí ya no se decide sobre una pizarra, se decide sobre lo que hace la gente.

Con los usuarios llega el feedback, y con el feedback una tentación: leerlo a mano, apuntarlo en algún sitio y no volver a mirarlo. Esta lección enseña la cadena que montaron ese día para que un comentario acabe en un arreglo sin pasar por una lista de tareas muerta.

## De un formulario a una pull request

El recorrido tiene cinco piezas y cada una es un sitio donde se puede romper.

1. **El formulario**, dentro de la aplicación, detrás del inicio de sesión.
2. **Un canal de Slack** donde cae cada mensaje ya moderado.
3. **Un Bot que clasifica**, separa fallos de peticiones y de opiniones, y quita duplicados.
4. **Un Bot que reproduce** el fallo antes de que nadie escriba código.
5. **Un agente que lo arregla** y abre la pull request, con otro que verifica.

{{live d3 2:09:09 "El feedback del formulario aparece en Slack"}}

![Cadena del feedback: formulario en la aplicación, canal de Slack, Bot que clasifica, Bot que reproduce y agente que arregla](/images/cursos/grok-bot/esquemas/26-bucle-feedback-es.webp)

### Lo que hay detrás del formulario

Aceptar texto libre de gente que no conoces tiene un precio. Lo que pusieron, y conviene copiar entero:

- **Ruta autenticada.** Solo escribe quien ha iniciado sesión, así que hay un nombre detrás de cada mensaje.
- **Límite de peticiones.** Con la avalancha del lanzamiento, algunos usuarios empezaron a recibir errores por exceso. Es incómodo y es la señal de que el límite funciona.
- **Filtro de groserías y saneado de la entrada** antes de guardarla en la base de datos.
- **Un modelo como red de seguridad** que revisa lo que se cuela por los filtros anteriores.

Aun así, esa tarde reconocieron en directo que la moderación estaba rota. Tenerlo montado no es tenerlo funcionando.

### La inyección de prompt, que es el riesgo nuevo

Cuando un Bot lee el feedback, está leyendo texto que ha escrito cualquiera. Y ese texto puede contener instrucciones dirigidas al Bot, no a ti.

Al montar el flujo, Lauren lo dijo dentro de la propia orden que dictó: filtra lo que no vaya del juego, las groserías y los enlaces raros, **y avisa a la IA de que esté atenta a las inyecciones de prompt**. Es la única vez en tres días que alguien lo menciona, y es la lección que más caro sale olvidar.

## Reproducir antes de arreglar

Aquí está la regla que separa delegar de abandonar. Cuando encadenaron el Bot que clasifica con el que programa, dudaron en voz alta si atreverse con el piloto automático completo. Se atrevieron, pero con una condición: ya había gente jugando, así que romper el juego no era una opción.

De ahí salieron dos controles.

**El agente tiene que reproducir el fallo antes de tocar nada.** El razonamiento es bueno: solo si consigue reproducirlo puedes fiarte de que ha entendido el problema. Si no lo reproduce, lo que escriba será una suposición con forma de código.

**Otro Bot comprueba que el triaje se hizo bien**, es decir, que el que leyó el comentario del usuario entendió lo que decía. Un arreglo perfecto del problema equivocado sigue siendo un problema.

{{live d3 2:28:15 "Con producción en marcha, romper el juego no es una opción"}}

### Enjambres que verifican

Para probar, levantan muchos agentes a la vez en la nube. Cada uno tiene su propio ordenador, abre el juego, hace clic por la interfaz y prueba casos límite. Lo llaman *fuzzing*, que aquí significa usar la aplicación como un usuario que lo toca todo e intenta romperla.

Lo que ganan es sacar a la persona de ese bucle. Lo que no dejan de hacer es probarlo también a mano, porque así aparecen otros fallos.

## Enseñar una vez cómo se prueba tu producto

De todo lo que se dijo sobre verificación en tres días, esta es la formulación más útil: **le enseñas al Bot una sola vez cómo se comprueba que tu producto funciona y lo guardas como skill**. A partir de ahí la reutilizas en cada cambio y la vas mejorando.

El argumento de por qué importa: necesitas que el Bot ejecute el código de verdad y haga capturas. Eso es lo que te da confianza en que ha entendido el problema, y no que te diga que lo ha arreglado.

Hay una forma corta de pedirlo que apareció varias veces ese día:

> Antes de escribir nada de código, abre la aplicación, encuentra el fallo exacto y cómo se comporta, y entonces sigue.

## Leer el feedback en conjunto

Un Bot clasificó todo el canal y publicó las gráficas en el propio Slack. Lo que salió: **el 71 % eran fallos y el 16 % elogios**. Los tres problemas más repetidos fueron el diseño en móvil, el emparejamiento que solo daba partidas contra la máquina y los puntos del marcador.

{{live d3 2:19:19 "El 71% del feedback son fallos"}}

Con esa foto tomaron una decisión de prioridades que conviene recordar: al lanzar, primero fallos, estabilidad y rendimiento; las funciones nuevas después. El error habitual es lanzarse a la lista de ideas bonitas antes de que el bucle principal funcione bien.

## Montar tu bucle de feedback

1. **Pon el formulario detrás del inicio de sesión** y añade límite de peticiones y sanea la entrada antes de guardar nada.
2. **Manda cada mensaje a un canal** donde lo vean personas y Bots a la vez.
3. **Un Bot clasifica y quita duplicados.** Pídele además gráficas por categoría cada cierto tiempo.
4. **Otro Bot reproduce.** Si no lo consigue, la ficha se queda sin arreglar y con la nota de que no se pudo reproducir.
5. **Guarda como skill** el procedimiento de comprobar tu producto, y úsalo en cada cambio.
6. **Dile expresamente a quien lea el feedback que vigile las inyecciones de prompt.**
7. **Empieza sin piloto automático.** Que el agente vuelva con lo que cree que pasa antes de abrir una pull request.

## Lo que se rompe en este bucle

- **Arreglar sin reproducir.** El agente adivina y cambia lo que no era. _Qué hacer:_ que reproducir sea condición para tocar el código.
- **Dos personas arreglando lo mismo.** Pasó en directo: uno fue a subir su cambio y ya estaba integrado. _Qué hacer:_ que el Bot que clasifica quite duplicados y marque el trabajo relacionado.
- **Confiar en la moderación sin comprobarla.** La suya estaba rota el día del lanzamiento. _Qué hacer:_ prueba tú mismo a enviar algo que debería bloquear.
- **Leer el feedback de uno en uno.** Sin agrupar no ves que el 71 % son fallos. _Qué hacer:_ pide categorías y proporciones, no una lista.
- **Piloto automático desde el primer día.** _Qué hacer:_ enciéndelo cuando ya tengas reproducción y verificación funcionando.

## Feedback que llega hasta el código

- El feedback solo sirve si tiene un camino hasta el código; si acaba en una lista, se muere ahí.
- Reproducir antes de arreglar es lo que convierte la autonomía en algo fiable.
- El procedimiento de probar tu producto se enseña una vez y se guarda como skill.
- Todo texto que escribe un desconocido necesita filtro, límite y aviso de inyecciones de prompt.
- Al lanzar, los fallos van antes que las funciones nuevas.
