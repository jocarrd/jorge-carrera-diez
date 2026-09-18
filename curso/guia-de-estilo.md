# Style guide — "Grok Bot, from zero to expert"

A free written course, published in English and Spanish on jorge-carrera-diez.com.
Read this whole guide before writing a lesson.

## Who reads it

Someone who has used ChatGPT or Grok as a chat box and has **never** worked with AI agents.
They are smart and busy. They read on a phone as often as on a laptop. They want to
understand, not to be impressed.

Each lesson assumes **only** what earlier lessons taught. If a later concept is needed,
explain it in one sentence and say which lesson covers it ("more on this in lesson 10").

## Sources, in order of trust

1. **Official documentation** in `/home/anne/Proyectos/curso-grok-bot/docs-oficiales/*.md`
   (downloaded 2026-09-16). It wins every conflict. UI labels are written exactly as
   there, in **bold**.
2. **Livestream notes** in `/home/anne/Proyectos/curso-grok-bot/notas/tramo-{1..4}.md`
   ("Day 1: Grok Bot Galaxy Livestream", 15 Sept 2026). Use them for examples, demos,
   tips and real mistakes, never to contradict the docs.

Known conflicts to respect:
- **All of a user's Bots share one cloud computer** (files, browser sessions, logins), and
  each Bot gets its own screen on it. The livestream said each Bot had an isolated
  computer: do not repeat that.
- Plans: Grok Bot is included with paid individual Cursor plans and Cursor Teams, or via a
  SuperGrok subscription; usage resets weekly. Do not invent prices.
- Sharing a Bot is a **public share link**; it exposes identity, description, skills and
  routines, and does not include conversation history, logins or the computer. The docs don't
  say whether learned memory travels (the livestream suggests templates carry memories).

If something only appears in the livestream, teach it as normal advice followed by a live
chip; the chip is the provenance. Don't write disclaimers about sources, don't name speakers
and don't put timestamps in prose. Mention the docs/livestream gap in one sentence only when
it changes what the reader does (a feature they may not have yet). Never invent UI labels,
limits, prices or features.

## How a lesson teaches

Good written courses (Stripe docs, the Rust book, freeCodeCamp, Apple's tutorials) share a
pattern. Follow it:

1. **Start from the reader's problem**, in two or three sentences. Why would they care?
2. **One core idea per lesson.** If you need a second big idea, it belongs in another lesson.
3. **Explain before showing.** Plain language first, then the precise term. Define every
   term the first time it appears, in the same sentence.
4. **Use one concrete analogy** when a concept is abstract (a Bot is like a colleague with
   their own desk). One, not three.
5. **Then show it working**: a short step-by-step and a worked example the reader could copy.
6. **Name the mistakes** people actually make, with the fix.
7. **Close with a recap** the reader can scan in ten seconds.

Short paragraphs (two to four sentences). Short sentences. Second person ("you"). Active
voice. No hype words (revolutionary, game-changer, supercharge, seamless, unlock, powerful,
magic). No emojis. No rhetorical questions as headings. Do not start sentences with
"Imagine". Do not write "In this lesson we will" more than once, in the objectives.

## Lesson file format

One Markdown file per lesson and language:
`/home/anne/Proyectos/curso-grok-bot/lecciones/en/NN-<slug>.md` and
`/home/anne/Proyectos/curso-grok-bot/lecciones/es/NN-<slug-es>.md`.

```markdown
---
id: "03"
module: 1
title: "Your first Bot"
description: "One sentence under 155 characters, used for search results and link previews."
level: beginner            # beginner | intermediate | advanced
minutes: 8                 # reading time, ~200 words per minute
objectives:
  - "Create a Bot with a name, one job and a description"
  - "Write a first task the Bot can actually finish"
  - "Know when to put a rule in the description and when in a message"
updated: "2026-09-16"
---
```

Then the body, following these six parts in this order. **Never use the part names as
headings**: every `##` says what that part of this lesson is about ("Tasks that come back
every week", "Slide Sonya learns to animate a slide", "Skills saved too early"). Repeating
the same six headings in every lesson reads as a template. Don't start headings with
"How", "Why" or "What you". The part names below are only for writing:

1. `## Why this matters` — the reader's problem, 2–3 short paragraphs.
2. `## The idea` — the concept explained, with `###` subsections if needed.
3. `## Step by step` — numbered steps. Skip only if the lesson has no hands-on part.
4. `## Example` — a worked example, preferably one shown in the livestream.
5. `## Common mistakes` — a list: **the mistake** — what happens — the fix.
6. `## Recap` — 3 to 5 bullets.

In Spanish the same rule applies: no `Por qué importa`, `La idea`, `Paso a paso`,
`Ejemplo`, `Errores habituales` or `Resumen` as headings.

Livestream markers from day 2 or later carry the day: `{{live d2 1:32:28 "Label"}}`.

Length: 900–1,400 words per lesson (the Spanish version will be a little longer).

### Special blocks

Prompts the reader can copy go in a fenced block with the language `prompt`:

````markdown
```prompt
Summarize this document in five bullets. Cite the page for each item.
```
````

Callouts use GitHub syntax, one of NOTE, TIP or WARNING:

```markdown
> [!TIP]
> Put rules that must always hold in the Bot's description, not in a message.
```

Livestream moments use this exact inline syntax, with the timestamp and a short label:

```markdown
{{live 0:43:54 "Teaching a Bot to animate a slide"}}
```

Use one to three per lesson, placed where the reader would want to see it. Only use
timestamps that appear in the notes.

Links to the official docs use normal Markdown links to `https://docs.x.ai/grok-bot/<page>`.

## Spanish version

Not a translation: an adaptation that reads as if written in Spanish.
- Neutral Spanish that works in Spain and Latin America. Use "tú".
- UI labels stay in English and in bold, exactly as the app shows them, with a short
  Spanish explanation the first time: **Teach a task** (enseñar una tarea).
- Keep the product terms Bot, skill, routine, connector, plugin in English, lowercase
  except Bot; explain them once. Plural: "los Bots", "las skills", "las routines".
- Same facts, same examples, same timestamps and same structure as the English file.
- Avoid calques: "hacer sentido", "en orden de", "aplicar para", "customizar".
- Same ban list as English (revolucionario, potente, mágico, sin fisuras, llevar al siguiente
  nivel…).

## Lessons and slugs

| # | Module | English slug | Spanish slug | Title (EN / ES) |
| -- | -- | -- | -- | -- |
| 01 | 1 | what-is-grok-bot | que-es-grok-bot | What Grok Bot is / Qué es Grok Bot |
| 02 | 1 | the-bots-computer | el-ordenador-de-los-bots | The Bots' computer / El ordenador de los Bots |
| 03 | 1 | your-first-bot | tu-primer-bot | Your first Bot / Tu primer Bot |
| 04 | 1 | approvals-and-permissions | aprobaciones-y-permisos | Approvals and permissions / Aprobaciones y permisos |
| 05 | 2 | memory | memoria | What a Bot remembers / Qué recuerda un Bot |
| 06 | 2 | skills-and-teach-a-task | skills-y-teach-a-task | Skills and Teach a task / Skills y Teach a task |
| 07 | 2 | good-context | buen-contexto | Giving good context / Cómo darle buen contexto |
| 08 | 3 | connectors-and-plugins | conectores-y-plugins | Connectors and plugins / Conectores y plugins |
| 09 | 3 | logins-and-credentials | sesiones-y-credenciales | Logins and credentials / Sesiones y credenciales |
| 10 | 3 | routines | routines | Routines / Routines: trabajo que se repite solo |
| 11 | 4 | one-bot-per-role | un-bot-por-rol | One Bot per role / Un Bot por rol |
| 12 | 4 | bots-working-together | bots-que-trabajan-juntos | Bots working together / Bots que trabajan juntos |
| 13 | 4 | orchestrating-a-team | orquestar-un-equipo | Orchestrating a team / Orquestar un equipo de Bots |
| 14 | 4 | sharing-bots | compartir-bots | Sharing Bots / Compartir Bots |
| 15 | 5 | cursor-cloud-agents | agentes-en-la-nube-de-cursor | Grok Bot and Cursor cloud agents / Grok Bot y los agentes en la nube de Cursor |
| 16 | 5 | verification | que-verifique-su-trabajo | Making Bots verify their work / Que verifique su trabajo |
| 17 | 5 | engineering-automations | automatizaciones-de-ingenieria | Engineering automations / Automatizaciones de ingeniería |
| 18 | 6 | product-and-data | producto-y-datos | Product and data / Producto y datos |
| 19 | 6 | founders-and-sales | fundadores-y-ventas | Founders and sales / Fundadores y ventas |
| 20 | 6 | running-a-business-with-bots | montar-un-negocio-con-bots | Running a business with Bots / Montar un negocio con Bots |
| 21 | 7 | cost-and-performance | coste-y-rendimiento | Cost and performance / Coste y rendimiento |
| 22 | 7 | limits | limites | Limits and when not to use it / Límites y cuándo no usarlo |

Modules: 1 Fundamentals / Fundamentos · 2 Teaching your Bot / Que aprenda contigo ·
3 Connecting it to your work / Conectarlo a tu trabajo · 4 Teams of Bots / Equipos de Bots ·
5 Grok Bot for engineering / Grok Bot para ingeniería · 6 Real use cases / Casos reales ·
7 Expert level / Nivel experto.

Levels: modules 1–2 beginner, 3–4 intermediate, 5–7 advanced.

Lesson 01 must work as the entry point: no prerequisites, and it ends by pointing to 02.
Lesson 22 closes the course.
