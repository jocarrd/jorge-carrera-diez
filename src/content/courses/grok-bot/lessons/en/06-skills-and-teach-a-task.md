---
id: "06"
module: 2
title: "Skills and Teach a task"
description: "Turn a task that worked into a skill any Bot can reuse, by describing it or by showing it once with Teach a task."
level: beginner
minutes: 7
objectives:
  - "Know what a skill contains and when a task is ready to become one"
  - "Create a skill from a finished task, from written material, or with Teach a task"
  - "Review a draft skill and call it with / in a later conversation"
updated: "2026-09-17"
---

## Tasks that come back every week

Some tasks come back every week: the same report, the same reply to a supplier, the same five clicks in an old web tool. Explaining them each time is slow, and the result shifts with your wording.

Memory (lesson 05) helps a Bot remember your preferences. It does not give the Bot a reliable method for a specific job. For that, you save a skill.

## A recipe card for your Bots

A **skill** is a reusable set of instructions for how to do a task. It works like a recipe card that sits in a shared kitchen: whoever picks it up follows the same steps and gets the same dish. Skills are available across your Bots, although a Bot may need the right connector (lesson 08) or login to use one.

### What a skill contains

A skill captures the steps, the decisions to make along the way, the expected output and the safety boundaries. A useful skill states:

1. When to use it
2. The inputs and access it needs
3. The sequence of work
4. How to check the result
5. What to return
6. What requires approval

If one is missing, the Bot has to guess.

### Where it fits

- The **description** holds rules that one Bot must always follow.
- **Memory** holds what a Bot has picked up while working with you.
- A **skill** holds the method for one task, and any of your Bots can use it.

### Start with a task that already works

Follow this order: do the task once, make it reliable, save the method as a skill, and only then automate it with a routine (work that runs on a schedule, lesson 10). A skill saved from a half-working task just repeats the problems faster.

### Three ways to create a skill

**From a task you just finished.** Once the result is right, ask the Bot to save the process. This is the most common path.

**From written instructions or existing material.** You can paste a procedure, a checklist or examples and ask the Bot to turn them into a skill. Real examples work well. An email Bot can learn your tone from emails you have already written.

{{live 0:52:11 "Teaching an email Bot your tone"}}

**By demonstration, with Teach a task.** You do the task once on the Bot's computer while it watches, and it writes the skill for you. The next section walks through it.

### The limits of Teach a task

- It records visible computer interaction for up to ten minutes.
- It does not record microphone audio, so narrating out loud adds nothing.
- Everything on screen is recorded, so don't show secrets. For passwords and other credentials, use the secure handoff flow instead (lesson 09).
- It may not be available on your account yet. If you don't see it, ask the Bot to create the skill from written instructions and the completed task.

The skill it produces is a **draft**. One demonstration shows the happy path, the case where everything goes right. It does not show what to do when a field is empty, a page fails to load or the action needs your approval. You add that.

## Save a task as a skill

### Save a skill from a finished task

1. Run the task in a normal conversation and correct it until the result is right.
2. Ask the Bot to save the process as a skill with a clear name.
3. Read the skill it writes. Check it against the six points above.

```prompt
Save the process we just used as a skill called "Weekly supplier report." Include where the data comes from, the table format, what counts as a late delivery, and the rule that nothing is sent to suppliers without my approval.
```

### Teach a task by demonstration

1. Open a one-to-one conversation with the Bot and open its computer view.
2. Choose **Teach a task**.
3. Describe the result you are about to demonstrate.
4. Do the workflow once, at a normal pace.
5. Stop the recording and review the skill the Bot creates.
6. Test it on a safe example before you put it on a schedule.

### Finish the draft

Add what one example could not show:

```prompt
Update the skill you just created. If the spreadsheet has an empty row, skip it and list it at the end. If the page doesn't load after two tries, stop and tell me instead of guessing. Ask for my approval before saving anything in the shared drive.
```

### Use a saved skill

In the message box of the desktop app, type `/` to pick a saved skill. (Typing `@` is for Bots, groups, routines and connectors.)

If a skill doesn't appear in the `/` menu, it may not be enabled for this Bot. Open **Settings → Plugins → Yours**, find the skill and enable it for the current Bot.

## Slide Sonya learns to animate a slide

In a live demo, the xAI team had a Bot called Slide Sonya (lesson 01) that worked on a slide deck. The presenter wanted it to add animations to slides, so they showed it once.

{{live 0:43:54 "Teaching a Bot to animate a slide"}}

1. With the deck open on Sonya's computer, they chose **Teach a task**.
2. They took control of the computer and did the work themselves: Insert, then an animation, then "fly-in". They played it to check it worked.
3. They stopped the recording.

Sonya turned the recording into an "add animation" skill that appeared among its skills. From then on, one message was enough:

```prompt
Add the animation I taught you to the slides in this section.
```

To make that skill safe to reuse, the next move would be to finish the draft: which slides should never be animated, what to do if the deck is locked, and when to stop and ask.

The same approach suits long, repetitive work in business tools, such as a sales team's steps in Salesforce, a popular CRM.

{{live 6:19:37 "Recording a workflow on the Bot's computer"}}

> [!TIP]
> Every time you see a Bot reason badly, add a line to the skill instead of correcting it and moving on. Write the principle, not the case. A skill built from every detail of one mistake ends up full of examples that no longer help.

{{live d2 3:36:21 "Why a skill built from one mistake goes bad"}}

## Skills saved too early

- **Saving a skill too early.** The skill copies a process that still has errors. _Fix:_ run the task until the output is right, then save it.
- **Treating the learned skill as finished.** It breaks the first time something unexpected happens. _Fix:_ add decision rules, failure handling and approval boundaries to the draft.
- **Showing a password during a demonstration.** The secret ends up in the recording. _Fix:_ use the secure handoff flow for credentials (lesson 09), never the recording.
- **Demonstrating a long, wandering session.** The recording stops at ten minutes and the Bot learns your detours. _Fix:_ rehearse first and show only the clean path.
- **Scheduling before testing.** A routine repeats a bad skill every day. _Fix:_ test on a safe example first.
- **The skill isn't in the `/` menu.** You think it was lost. _Fix:_ enable it for this Bot under **Settings → Plugins → Yours**.

## A good skill gets reviewed and tested

- A skill is a reusable set of instructions for a task, available across your Bots.
- A good skill says when to use it, what it needs, the steps, how to check, what to return and what needs approval.
- Create skills from a finished task, from written material, or by demonstration with **Teach a task** (up to ten minutes, no audio).
- A learned skill is a draft. Add decision rules, failure handling and approvals, then test it on a safe example.
- Type `/` to use a skill. If it's missing, enable it under **Settings → Plugins → Yours**.
