---
id: "22"
module: 7
title: "Límites y cuándo no usarlo"
description: "Qué no hace Grok Bot de forma fiable todavía, cómo tratar que no sea determinista, qué pasos siguen siendo humanos y adónde ir después del curso."
level: advanced
minutes: 8
objectives:
  - "Nombrar los límites actuales que afectan al trabajo real y distinguir los documentados de lo dicho en el directo"
  - "Llevar a código las decisiones que siempre tienen que salir igual"
  - "Decidir dónde tiene que seguir una persona y cuándo no conviene usar un Bot"
updated: "2026-09-17"
---

## Confiar al Bot lo que hace mal

Después de veintiuna lecciones sabes montar un equipo de Bots que investiga, redacta, construye e informa. El riesgo ahora es confiarle a ese equipo trabajo que hace mal, o decisiones que nunca deberían salir de manos de una persona.

Esta lección reúne los límites en un solo sitio, explica cómo sortear los que se pueden sortear y cierra el recorrido principal del curso.

## Un compañero rápido que a veces se contradice

Un Bot es un compañero nuevo y capaz que trabaja rápido, no duerme y a veces responde de dos formas distintas a la misma pregunta. A ese compañero le das trabajo de verdad. Lo que no le das es la tarjeta de la empresa, la firma de los contratos ni la última palabra sobre nada que no se pueda deshacer.

### Límites que recoge la documentación oficial

**Webs e inicios de sesión.** Los Bots pueden usar muchas webs sin connector (conector). Pero una web puede bloquear la automatización, caducar la sesión, pedir un nuevo inicio de sesión, mostrar un CAPTCHA (una prueba para comprobar que eres una persona) o exigir una confirmación humana. El Bot debe pasarte esos pasos a ti en lugar de saltárselos ([FAQ](https://docs.x.ai/grok-bot/faq)). Algunas webs piden verificación en cada acción delicada, y eso no siempre se puede evitar ([Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

**Un solo ordenador compartido.** Todos tus Bots comparten sus archivos, las sesiones del navegador y los inicios de sesión, así que tener Bots separados no te da una barrera de seguridad (lección 02). Cada Bot tiene su propia pantalla y hace en ella una sola tarea de uso del ordenador a la vez.

**La memoria no es una fuente.** Para decisiones con consecuencias, pide al Bot que consulte la fuente actual en lugar de fiarse de lo que recuerda.

**Auto Review se basa en un modelo.** Auto Review (revisión automática) comprueba las acciones de riesgo, pero no revisa todos los efectos secundarios. Las escrituras en memoria y la mayoría de cambios de ajustes son ejemplos. Debe sumarse a tus límites explícitos y nunca sustituirlos ([Security](https://docs.x.ai/grok-bot/security)).

**Inyección de prompts.** Es texto escrito para apartar a un Bot de tus instrucciones. Puede esconderse en páginas web, en resultados de plugins o en la salida de un comando.

> [!WARNING]
> Las defensas de Grok Bot reducen el riesgo de inyección de prompts, pero no lo eliminan. Cuando un Bot lee contenido de fuera y además puede enviar, comprar o borrar, deja esas acciones detrás de reglas **Ask first** (preguntar antes).

**Las acciones no se rebobinan.** Una aprobación controla la acción propuesta, no el trabajo ya hecho. Un mensaje "Stop now" (para ya) no deshace lo que el Bot ya hizo. Y un **Test run** (ejecución de prueba) de una routine hace trabajo real.

**Límites menores.** **Teach a task** (enseñar una tarea) puede llegar a las cuentas poco a poco y graba hasta diez minutos. Los adjuntos llegan a 25 MB, o a 200 MB en vídeo. Borrar una routine no se puede deshacer. Y no hay un selector de modelo para los clientes.

### Límites que mencionó el equipo de xAI

Salieron en el directo y no están en la documentación, así que alguno puede haber cambiado cuando leas esto.

- **Todavía no hay chats de grupo con otras personas dentro de Grok Bot.** Los presentadores usaban hilos de Slack, y el equipo dijo que estaba en la cola de funcionalidades.
- **No puedes hablar con los Bots de otras personas** desde tu cuenta (lección 12).
- **Usar el ordenador es lento.** Trabajar a través de una pantalla nunca será tan rápido como llamar directamente a una API (lección 21).
- **Parte de la autenticación está sin resolver,** y hay empresas que no quieren Bots en su plataforma.
- **Los Bots no son buenos el primer día.** Necesitan un periodo de incorporación con skills y contexto.
- **Los Bots aceptan todo por defecto,** también comentarios e informes de errores, salvo que les enseñes cuándo decir que no.

{{live 6:26:46 "Los Bots no son buenos el primer día"}}

### Resultados no deterministas: lleva las decisiones a código

Un modelo de lenguaje no siempre da la misma respuesta a la misma entrada. Eso significa que no es determinista. Para un borrador no pasa nada. Para una regla como "reembolsar si el pedido tiene menos de 30 días y no se ha usado", sí.

La documentación pide la misma disciplina en las routines, con estados de fallo explícitos y reintentos que se puedan repetir sin riesgo ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Hay dos costumbres que ayudan. La primera es poner por escrito qué significan las palabras vagas. En la lección 17 viste que decir "urgente" sin definirlo puede hacer que un agente se salte pasos o se invente cosas. La segunda sirve cuando una decisión tiene que salir siempre igual. Haz que un agente en la nube escriba el código de esa decisión y dile al Bot que llame a ese código en lugar de decidir él. El código sigue siempre los mismos pasos y puedes probarlo.

### Dónde sigue haciendo falta una persona

- **Dinero:** compras, pagos, cambios de presupuesto.
- **Temas legales:** aceptar condiciones, firmar o negociar contratos.
- **Todo lo que no tiene vuelta atrás:** enviar a clientes, publicar, borrar datos, cambios en producción.
- **Credenciales:** contraseñas, códigos de verificación en dos pasos, CAPTCHAs, confirmaciones de pago. En estos casos tomas tú el control del ordenador.
- **Decisiones de criterio y el mundo físico:** dirección de producto, detalle de diseño, arquitectura, seguridad de un evento.

{{live 4:09:01 "El trabajo que sigue siendo de las personas"}}

### Cuándo no usar un Bot

No lo uses cuando la tarea sea un clic que haces tú antes, o cuando no sepas describir cómo es el trabajo terminado. Tampoco cuando el único camino incumpla las condiciones de una web, ni cuando un error sea grave y nadie vaya a revisar el resultado.

## Antes de delegar un trabajo nuevo

Antes de encargarle a un Bot un tipo de trabajo nuevo, comprueba:

1. **¿Sé describir el resultado y cómo verificarlo?** Si no, haz la tarea a mano una vez primero.
2. **¿Algún paso toca dinero, condiciones legales, clientes, producción o borrado?** Añade una regla **Ask first** en **Settings → General → Auto-review** (ajustes, revisión automática) y un límite en la descripción del Bot.
3. **¿Alguna decisión necesita la misma respuesta siempre?** Llévala a código o a una regla escrita.
4. **¿Alguna web va a pedir inicio de sesión, un CAPTCHA o una comprobación humana?** Planifica cuándo tomarás el control.
5. **¿Quién revisa el resultado y cuándo?** Pon nombre a la persona y al momento.

## Reembolsos decididos por una regla en código

{{live 8:02:48 "Decisiones deterministas con código"}}

Supón que un Bot de soporte decide qué solicitudes de reembolso aprobar. En lugar de dejar que juzgue cada caso, pide primero la regla en forma de código. Una función es un trozo pequeño de código que recibe datos y devuelve una respuesta, y los tests son comprobaciones que demuestran que responde bien:

```prompt
Lanza un agente en la nube para escribir una función pequeña que decida si un
reembolso procede según estas reglas: pedido de menos de 30 días, artículo sin
usar y cliente con menos de 3 reembolsos este año. Debe devolver "procede",
"no procede" o "necesita una persona", con el motivo. Incluye tests para cada
regla.
```

Después pon esto en la descripción del Bot de soporte:

```prompt
Para cada solicitud de reembolso, llama a la función de elegibilidad de
reembolsos y sigue su resultado. No apruebes nunca un reembolso que la función
no haya marcado como "procede". Redacta la respuesta al cliente y espera mi
aprobación antes de enviarla.
```

El Bot sigue leyendo la solicitud, reuniendo los datos del pedido y redactando la respuesta. La decisión sale de un código que puedes probar.

> [!WARNING]
> Hay herramientas a las que un Bot no llega. Si no tienen MCP ni funcionan en Linux, que es el sistema de su ordenador, hoy no hay forma de usarlas. Y el límite también está en ti. Con muchos Bots trabajando a la vez aumenta lo que tienes que revisar, y en el directo más de uno reconoció que hacía más trabajo que nunca y estaba más ocupado que nunca.

{{live d2 1:21:08 "Herramientas sin MCP que no funcionan en Linux"}}

## Falsas zonas de seguridad

- **Tratar Bots distintos como zonas de seguridad separadas.** Un inicio de sesión de un Bot está disponible para todos. *Qué hacer:* no dejes sesiones delicadas en el ordenador, o dale a ese trabajo su propio usuario de Cursor.
- **Pedirle al Bot que supere un CAPTCHA o una web bloqueada.** No debe hacerlo, e intentarlo puede incumplir las normas de la web. *Qué hacer:* toma el control y haz tú el paso humano.
- **Confiar al modelo las reglas.** El mismo caso recibe respuestas distintas en días distintos. *Qué hacer:* escribe la regla como código o como criterios explícitos.
- **Dar por hecho que "Stop now" deshace el trabajo.** Lo que ya está hecho sigue hecho. *Qué hacer:* pon la aprobación antes de la acción y no después.

## Dónde no usar un Bot

- Las webs pueden bloquear la automatización o pedir pasos humanos, y el Bot te los pasa a ti.
- Los Bots comparten un ordenador, la memoria no es una fuente y Auto Review se basa en un modelo que no ve todos los efectos secundarios.
- Cuando una respuesta tenga que salir siempre igual, lleva la decisión a código y haz que el Bot la llame.
- El dinero, los temas legales, las acciones irreversibles, las credenciales y las decisiones de criterio siguen en manos de una persona.
- Algunos límites vienen solo del directo y pueden cambiar, así que consulta la documentación.

### Adónde ir ahora

Has terminado el recorrido principal. Si trabajas en ventas o en atención al cliente, el módulo 8 aplica todo esto a esos equipos. La documentación oficial es la referencia que se mantiene al día:

- [Use cases](https://docs.x.ai/grok-bot/use-cases) para nuevos roles que probar.
- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy) antes de que un Bot actúe fuera de tu cuenta.
- [Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises) si lo vas a desplegar en tu empresa.
- [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting) cuando algo deje de funcionar.
