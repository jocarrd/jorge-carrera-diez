---
id: "19"
module: 6
title: "Fundadores y ventas"
description: "Bots que preparan llamadas con clientes, aprenden de las transcripciones, siguen a la competencia, convierten comentarios en PR y escriben como tú."
level: advanced
minutes: 8
objectives:
  - "Montar un Bot que prepare llamadas con clientes y aprenda de lo que pasó en ellas"
  - "Seguir a la competencia y los comentarios de clientes con routines que terminen en algo revisable"
  - "Usar un Bot que escribe como tú y un Bot cajón de sastre sin perder el control de lo que sale"
updated: "2026-09-16"
---

## El trabajo alrededor de cada llamada

Una fundadora o un equipo comercial pequeño dedica horas al trabajo que rodea las conversaciones. Hay que informarse sobre una empresa antes de la llamada, escribir notas después, mirar qué ha lanzado la competencia, ordenar los comentarios de clientes y contestar correos. Nada de esto es difícil, pero en una semana cargada se queda sin hacer.

Este trabajo encaja bien con los Bots porque se repite, sale de herramientas que ya usas y el resultado puede ser un borrador que tú apruebas. También afecta a clientes y a otras empresas, así que los límites de la lección 04 pesan aquí más que en ninguna otra parte del curso.

## Seis Bots de cara al cliente

Dale a cada trabajo de cara al cliente su propio Bot. Deja que prepare y redacte, y mantén cada mensaje que sale detrás de tu aprobación. La sesión del directo para fundadores enseñó seis Bots montados así. Son Bots de demo con clientes inventados, así que tómalos como patrones que copiar. No los vas a encontrar como productos que instalar. Si buscas puntos de partida oficiales, mira los casos de uso **Sales Outbound** (prospección comercial), **Account Health** (salud de cuentas) y **Chief of Staff** (jefe de gabinete) en [Use cases](https://docs.x.ai/grok-bot/use-cases).

### Closebot: antes y después de la llamada

Antes de la llamada, el Bot saca los datos de uso de esa cuenta de cliente, investiga la empresa y recorre su web con su ordenador. Devuelve un informe en una página HTML (una página web que abres en el navegador). El informe recoge quiénes son, sus licencias y reuniones recientes, una gráfica de uso que muestra si crece o cae, los riesgos y las recomendaciones. Como routine, mira el calendario cada mañana y prepara todas las reuniones del día.

Después de la llamada, lee la transcripción (en la demo se usaba Granola, una aplicación de notas de reuniones). Apunta qué interesó y qué no, y ajusta las siguientes preparaciones. En la demo empezaba a dar resultado a las dos o tres semanas.

### Prodbot: qué se ha publicado

Un resumen diario de lo que se ha lanzado y retirado. El Bot lee las pull requests y las incidencias de Linear (un gestor de tareas para equipos de software). Después recorre el producto con su ordenador y adjunta capturas y un vídeo del recorrido.

### Stockbot: seguir a la competencia

Una routine de "pulso de la competencia" que se ejecuta cada pocos días. El Bot lee changelogs (las listas públicas de cambios de un producto), publicaciones en X y ofertas de empleo. Se registra en el producto de cada competidor con un correo desechable, recorre el onboarding (la configuración del primer uso) y lo compara con el tuyo. Devuelve un análisis a fondo del producto con un vídeo del registro.

### Protobot: de comentarios a pull requests

El Bot recoge los comentarios recientes de clientes, elige uno y lanza un agente en la nube (lección 15) para arreglarlo. La idea es reunir todos los canales de comentarios en un Bot que abra pull requests, de modo que una queja se convierta en un cambio revisado en cuestión de horas.

### Yap bot: tu forma de escribir

El Bot lee lo que has enviado por correo y por Slack para aprender cómo escribes, y vuelve a aprender según un horario. Los demás Bots le piden ayuda cuando tienen que escribir en tu nombre. Los correos delicados se quedan en borrador, y el Bot aprende de la diferencia entre su borrador y lo que acabaste enviando.

### El Bot cajón de sastre

Ya lo conociste en la lección 11. Recoge las preguntas sueltas para que no ensucien el contexto de tus Bots especialistas. Cuando aprende algo útil, dile que se lo pase al Bot que corresponda.

### Uso responsable

Hay tres reglas de la documentación que valen para todos estos Bots:

- **No sale nada sin aprobación.** Los prompts de prospección de la documentación terminan con "no envíes ni inscribas a nadie" y "no contactes con clientes". Añade reglas **Ask first** (preguntar antes) para el correo externo en **Settings → General → Auto-review** (ajustes, revisión automática).
- **Respeta las condiciones de las webs que usas.** Los casos de uso **Sales Outbound** y **Talent Scout** (búsqueda de talento) piden usar las redes profesionales "según lo que permitan sus condiciones" y respetar la privacidad y los requisitos de cada región. Si una web bloquea la automatización, el Bot debe pasarte ese paso a ti en lugar de buscar la forma de saltárselo.
- **Recuerda que el ordenador es compartido.** Un Bot que lee tu bandeja de entrada usa sesiones que cualquier Bot de tu cuenta puede usar (lección 02). Inicia sesión solo en lo que el trabajo necesita.

> [!WARNING]
> La demo para fundadores también enseñó a Stockbot escribiendo a clientes que se habían ido a la competencia, con el aviso de usarlo con responsabilidad. Antes de que un Bot se registre en el producto de otra empresa o contacte con personas, revisa las condiciones de esa empresa, la normativa de privacidad que te aplica y tu propia política. Deja cada uno de esos mensajes como borrador que apruebas tú.

## Empezar por la preparación de llamadas

Empieza por la preparación de llamadas. Solo lee datos y notas el beneficio el primer día.

1. **Crea el Bot** y escribe su trabajo en la descripción. Prepara informes para llamadas con clientes, trabaja en solo lectura y nunca contacta con clientes ni edita el CRM. Un CRM es la herramienta donde el equipo lleva el seguimiento de clientes y oportunidades.
2. **Conecta las fuentes.** Necesitas el calendario, el CRM o los datos de uso, y la carpeta o herramienta donde quedan las transcripciones. Usa **Settings → Plugins** cuando haya connector.
3. **Haz una preparación a mano** para una llamada real que tengas pronto, y corrígela hasta que de verdad la usarías.
4. **Guárdala como skill** (lección 06) con el formato de salida que hayas fijado.
5. **Conviértela en routine.** Cada mañana de lunes a viernes, el Bot prepara las reuniones externas del día.
6. **Cierra el ciclo.** Después de cada llamada, pide al Bot que lea la transcripción y apunte qué cambiar la próxima vez.
7. **Añade el siguiente Bot** solo cuando este sea fiable.

## Closebot, Stockbot y Yap bot en la demo

{{live 7:33:07 "Preparar una llamada con un cliente con Closebot"}}

En la demo, Closebot preparó una llamada con "Northwind", un cliente inventado. El informe recogía quiénes son, qué hace su producto, capturas de su web, la actividad de la cuenta, una gráfica de uso, los riesgos y las recomendaciones. Quien presentaba añadió que el Bot suele encontrar fallos en la web del cliente mientras la recorre, como un banner de cookies que tapa el botón de enviar.

Una versión que puedes adaptar:

```prompt
Prepara un informe para mi llamada de las 15:00 con Northwind. Saca su uso del
producto de los últimos 90 días, sus tickets de soporte abiertos y mis notas de
llamadas anteriores. Investiga la empresa y revisa su web. Devuélveme un
informe HTML de una página con: quiénes son, actividad de la cuenta, una
gráfica de uso, riesgos y tres preguntas que debería hacer. Enlaza cada
fuente. No contactes con nadie.
```

{{live 7:46:25 "Análisis de la competencia de Stockbot"}}

El resultado de Stockbot para dos competidores inventados muestra cómo una routine puede terminar en un solo documento en lugar de en un goteo de avisos. Incluía el vídeo del registro, qué funciona y qué no, el changelog, las publicaciones en X, las contrataciones y el equipo.

{{live 7:50:30 "Yap bot escribe con la voz de quien presenta"}}

Para un Bot que escriba como tú, empieza con algo más acotado que en la demo:

```prompt
Lee los últimos 50 correos que he enviado desde mi cuenta del trabajo. Escribe
una guía de estilo breve de cómo escribo: saludo, longitud, tono, expresiones
que uso y que evito. Guárdala como skill con el nombre "Escribir como yo". No
envíes nada.
```

## Mensajes que salen sin revisar

- **Dejar que un Bot envíe mensajes de prospección el primer día.** Un nombre o un dato equivocado llega a un cliente y no hay vuelta atrás. *Qué hacer:* mantén borradores y aprobación hasta haber revisado muchos buenos. Una aprobación no deshace el trabajo ya hecho.
- **Darle al Bot que escribe como tú todas tus cuentas.** Cualquier otro Bot de tu cuenta puede usar ahora esas sesiones. *Qué hacer:* inicia sesión solo en lo que el trabajo necesita y cierra la sesión cuando termines.
- **Automatizar el análisis de la competencia sin leer las condiciones.** El Bot incumple las normas de una web en tu nombre. *Qué hacer:* revisa antes las condiciones y deja que el Bot te pase los pasos bloqueados.
- **Llevar los comentarios directamente a código fusionado.** Una sola queja ruidosa cambia el producto. *Qué hacer:* haz que el Bot abra una pull request y revísala como cualquier otro cambio (lección 16).
- **Hacer preguntas sueltas a los Bots especialistas.** Su contexto se llena de ruido. *Qué hacer:* usa un Bot cajón de sastre y pasa solo lo que importa.

## Borradores siempre, envíos con aprobación

- Dale a cada trabajo de cara al cliente su propio Bot, ya sea para preparar llamadas, seguir novedades, vigilar a la competencia, recoger comentarios o escribir como tú.
- Empieza en solo lectura con la preparación de llamadas; después añade una routine y el aprendizaje a partir de las transcripciones.
- Cada mensaje a un cliente o a otra empresa se queda en borrador, detrás de reglas **Ask first**.
- Revisa las condiciones de las webs y la normativa de privacidad antes de que un Bot se registre en servicios o contacte con personas.
- Ten un Bot cajón de sastre para que los especialistas mantengan limpio su contexto.
