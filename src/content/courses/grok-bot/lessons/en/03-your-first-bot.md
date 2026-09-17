---
id: "03"
module: 1
title: "Your first Bot"
description: "Create a Bot with a name, one job and a description, then give it a first task with an outcome, sources, limits and a clear finish line."
level: beginner
minutes: 7
objectives:
  - "Create a Bot with a name, one job and a description"
  - "Write a first task the Bot can actually finish"
  - "Know when to put a rule in the description and when in a message"
updated: "2026-09-16"
---

## An empty conversation and a vague request

The first time you open Grok Bot, you face an empty conversation. Most people type what they would type into a chat box: a short, vague request. The Bot then guesses, and you spend the next ten minutes correcting it.

Two things decide how useful a Bot is from the start: how clearly you define its job, and how clearly you describe the first task. Both take a few minutes, and both keep paying off, because the Bot keeps its role and learns from your corrections.

## Name, job and description

### Three things define a Bot

When you create a Bot you give it:

- **A short name**, so you can find it and mention it.
- **One primary job**, such as "Product performance" or "Expense Manager".
- **A description** of how it should work: its sources, its format and the rules it must always follow.

Think of the description as the brief you would hand a new colleague on their first day. It stays on their desk and they check it before every task.

Focused Bots work better than one catch-all Bot. A job such as **General Helper** gives the Bot less guidance and makes its saved context harder to reuse. Create a separate Bot when the work has a different goal, set of tools, working style or schedule.

### A strong first task has five parts

A good request answers five questions:

1. **Outcome:** what should be finished?
2. **Sources:** which apps, websites, files or conversations matter?
3. **Constraints:** what must the Bot avoid, or ask before doing?
4. **Deliverable:** what should it hand back?
5. **Review point:** when should it stop and wait for you?

If you leave one out, the Bot has to guess it. The review point is the one people forget most, and it is the one that keeps a first task safe.

### Description or message

Both are instructions, but they last for different lengths of time.

- **Description:** rules that should stay true for every task. "Never send external messages without approval."
- **Message:** instructions for the task in front of you. "Draft follow-ups for these twelve accounts."

When you notice yourself repeating a preference in every message, move it into the description.

> [!TIP]
> Be explicit in the description: fonts, colors, "always send me a screenshot of the slide when you finish". The more explicit it is, the more consistent the Bot.

{{live 0:48:01 "Explicit instructions in a Bot's description"}}

## Create the Bot and write its first task

**Create the Bot**

1. At the end of setup, **Meet a future teammate** shows suggested Bots. Pick one, or choose **Create your own**.
2. Later, you can add Bots by choosing **New** in the sidebar (or pressing `Cmd/Ctrl+N`) and selecting **Create new agent**. Grok Bot creates a Bot called **New Agent**.
3. Open **Bot actions → Edit Profile** and set the name, title, description and avatar.

**Give it a first task**

1. Start with something that needs no login. Attach a document you know well, using the attachment control or by dragging it into the message box.
2. Send a request that covers the five parts (see the example below).
3. Read the result and ask for corrections in the same conversation.
4. When a correction should apply to future work, say so explicitly: "Use this format for future weekly reports."
5. Once that works, try a task in one of your real tools, with a clear limit such as "Do not change any dashboards."

### Dictate, then ask it to restate

Long context is often faster to say than to type. The mobile app lets you dictate a message. A dictation button was also shown in the desktop app, so if you don't see one there, dictate from your phone.

Dictate everything you have in your head, then end with a request like this one. In a live demo, the xAI team dictated a business idea for a couple of minutes and closed with it:

```prompt
Restate to me what I just said in your own words so I know you understood me.
```

{{live 2:15:17 "Dictating context and asking the Bot to restate it"}}

Reading a short summary is quicker than rereading a long transcript, and it catches misunderstandings before the Bot starts. The same trick works before any long task: add "restate in your own words before executing" at the end. Check the transcribed text before you send it, since dictation can mishear names.

## Piper, a product performance Bot

Here is a well-defined Bot:

> - **Name:** Piper
> - **Job:** Product performance
> - **Description:** Investigate product-performance questions using our observability tools. Preserve links and screenshots, separate evidence from hypotheses, and return a short summary with the highest-impact issue first. Never change production settings.

Observability tools are the dashboards that show how a product is running, and production is the live product your customers use. The description sets the sources, the format and one rule that must always hold.

A good five-minute first task needs no connector (lesson 01) or login. Attach a document and send:

```prompt
Summarize this document in five bullets. List every date, decision, and open question in a separate section. Cite the page or section for each item. Do not change the source file.
```

Outcome: a summary. Source: the attachment. Constraint: do not change the file. Deliverable: five bullets plus a section. The review point is implicit, because the Bot returns the summary and waits.

Compare that with a live demo. The xAI team asked a new Bot to create a Google Form with two coffee questions. The Bot built it, but when the audience scanned the QR code they saw "no access", because the form link was not public. The request described the outcome and left out who needed access to the deliverable.

{{live 1:06:25 "The form link that was not public"}}

## Vague Bots and tasks with no finish line

- **Giving a Bot a vague job like "General Helper".** It gets less guidance and its context is harder to reuse. *Fix:* give it one specific job.
- **Sending a one-line request.** The Bot guesses the sources, the format and when to stop. *Fix:* cover the five parts of a strong task.
- **Writing a standing rule in a message.** The rule only applies to that task. *Fix:* put rules that must always hold in the description.
- **Saying "it doesn't work" when a result is wrong.** The Bot has nothing to fix. *Fix:* say what is wrong, what you expected and what was already right.
- **Starting with a task that changes things.** Mistakes land in real tools. *Fix:* start with read-only tasks and drafts, as lesson 04 explains.

## Before you create the next Bot

- Give each Bot a short name, one job and a description.
- A strong task covers five parts, from the outcome to the review point.
- Rules that should always hold go in the description, and task details go in the message.
- Dictate long context, then ask the Bot to restate it before it acts.
- Start with a task that needs no login and changes nothing.

Read more in [Get started](https://docs.x.ai/grok-bot/get-started) and [Create and manage Bots](https://docs.x.ai/grok-bot/bots).
