---
id: "10"
module: 3
title: "Routines"
description: "Have a Bot run a proven task on a schedule or after an event, test it safely, and keep it quiet and affordable."
level: intermediate
minutes: 7
objectives:
  - "Explain what a routine is and how it differs from a skill"
  - "Write a routine request with an owner, schedule, inputs, result, boundary and a plan for missing data"
  - "Use Test run, pause a routine and read its run history"
  - "Choose a frequency or trigger that does not waste usage"
updated: "2026-09-17"
---

## Requests you type every morning

Some requests you type every week, or every morning. Pull yesterday's numbers. Check what changed in a shared deck. List today's meetings.

A routine lets the Bot do that on its own. It runs in the cloud, so it keeps going while your laptop is closed.

A routine also works when nobody is watching. If it reads the wrong data, runs too often or messages you about nothing, you pay in usage and in attention. This lesson shows how to set one up so you can trust it.

## A schedule or an event for each job

A **routine** tells one Bot when to run a piece of work. It can run on a schedule or, where supported, after an event. A skill (lesson 06) describes how to do a task. A routine decides when it happens and which Bot owns it.

Think of a recurring calendar invite sent to one colleague, with the brief attached. The brief is the skill. The invite is the routine.

The official docs set a clear order. Do the task once by hand and make it reliable. Save the method as a skill. Only then automate it.

{{live 6:13:27 "Turning a data answer into a daily 6 a.m. update"}}

### Schedules and event triggers

A scheduled routine runs at the times you give it. Schedules use the time zone set in **Settings → General → Agent → Timezone**.

An event-triggered routine starts when something happens, such as a Slack message or a GitHub notification. These triggers come from integrations on your Cursor account. They are separate from the Slack or GitHub plugins (lesson 08) and may need their own connection step.

Give an event trigger a narrow matching rule, such as one channel and one phrase. A broad listener such as "every new message" creates noise, uses up your allowance and makes it more likely the Bot acts on something irrelevant.

### What to specify

Ask the Bot that should own the recurring job, and confirm six things:

1. The owning Bot
2. The schedule and time zone
3. The input source
4. The expected result
5. The approval boundary
6. What should happen when a source is missing

The Bot creates the routine and shows you when it will run next.

### Test run

Use **Test run** after you create or edit a routine. After the test, check that the Bot used current data and followed the output format. Each action should leave a source or a record you can follow. The run should stop at the approval point and report failures clearly.

> [!WARNING]
> A test run does real work. It can browse websites, change files and use connected tools. Use inputs that are safe to act on, and keep sending, editing and deleting behind approval (lesson 04).

### Pausing, history and limits

Open the Bot, choose **View conversation details**, then **Routines**. From there you can enable or pause a routine, run a test, edit its schedule or instructions, look at recent successes and failures, or delete it. On iPhone and Android you can see the schedule and use **Active** to pause or resume. Everything else needs the desktop app.

Know the limits:

- A Bot can own up to 50 routines.
- The app keeps the 20 most recent run records for each routine.
- Deleting a routine is immediate and cannot be undone.
- Deleting a Bot also removes its routines. Hiding a Bot does not pause them.
- After a long period away, Grok Bot may ask whether to keep routines running, and pause them if you don't answer.

### Quiet when there is nothing to say

The docs ask every routine to include a rule for missing or stale data (data that is out of date). Say what to do when the source is empty, late or unavailable. Without that rule, the Bot may reuse old numbers and present them as today's.

A second habit helps too. Tell the Bot to stay silent, or deal with the matter itself, when a run finds nothing important. There is no built-in setting for this, so write it into the routine's instructions.

{{live 6:27:46 "Routines that only speak up when something matters"}}

### Frequency costs usage

Every run does real work, and that work counts against your usage. Usage is the allowance included in your plan, and it resets weekly. You can check it in **Usage & Billing**. A routine every 15 minutes runs 96 times a day. One every 5 minutes runs 288 times.

Review how often your routines run from time to time. Where you can, start a routine from an event instead of a timer that checks blindly. The xAI team gave the same advice and mentioned webhooks, which are automatic messages one service sends another the moment something happens.

{{live 7:56:40 "Why a routine every 15 minutes gets expensive"}}

## From a solved task to a routine

1. Run the task once in a normal conversation and fix it until the result is right.
2. Save the method as a skill (lesson 06).
3. Open the Bot that should own the recurring job.
4. Write the routine request with the six points above.
5. Check the next run the Bot shows you, including the time zone.
6. Choose **Test run** with safe input and review the result.
7. After the first real runs, open **View conversation details → Routines** and read the history.

## Ashley and yesterday's ticket sales

In the livestream's product demo, a data Bot called Ashley answered a question about yesterday's ticket sales on mobile versus web, with a chart by traveler type. The presenter then wrote one line: "Send me this as an update every morning at 6 a.m."

That line is a good start. Here is the same routine with the six points filled in. A data warehouse is the central database where a company stores its numbers, and a query is the request that pulls data from it.

```prompt
Every day at 6:00 AM in my time zone, pull yesterday's ticket purchases split by mobile and web, and by traveler type. Post a short update in this conversation with one chart for each split and a link to the query you ran. If nothing moved more than 5% from the day before, post a single line saying so. If yesterday's data is missing or the warehouse is unavailable, report the failure instead of using older data. Do not edit any saved dashboards or queries.
```

The owner is Ashley, because you ask in Ashley's conversation. The other five points are in the text. Run **Test run**, compare the chart with the warehouse, and let it run.

A counterexample from the same day: an engineering Bot was asked for a routine that checked on its coding agents in the cloud (lesson 15) every five minutes during an urgent fix. That made sense during the emergency. Left running, it is 288 runs a day.

{{live 4:26:37 "An urgent routine that checks agents every five minutes"}}

> [!TIP]
> A routine can also fire when something changes in another tool. In the prospecting workshop, when an account moved to a new stage in the CRM, a routine took its contacts out of the email sequence. A salesperson from the sales workshop gave a rule for schedules: one or two a day, because more ends up as noise.

{{live d2 6:18:32 "A routine that fires when the CRM changes"}}

## Automating what never worked

- **Automating a task that never worked by hand.** The routine repeats the same errors every day. _Fix:_ get one good result, save it as a skill, then schedule it.
- **Leaving out the missing-data rule.** The Bot fills the gap with old data and nobody notices. _Fix:_ say what to do when the source is empty, stale or down.
- **Treating Test run as a rehearsal.** It makes real changes. _Fix:_ use safe inputs and keep write actions behind approval.
- **Triggering on every message.** The Bot runs on noise and burns usage. _Fix:_ match a specific channel, phrase or link.
- **Reporting on every run.** You learn to ignore the messages, including the one that matters. _Fix:_ tell the Bot to stay quiet when nothing changed.
- **Hiding a Bot to stop its routines.** Hidden Bots keep running them. _Fix:_ pause the routine, and delete it only if you are sure, because there is no undo.
- **Not re-testing after a change.** A website, connector or file format changes and the routine breaks without anyone noticing. _Fix:_ run **Test run** again after any change to a source.

## What a reliable routine needs

- A skill says how. A routine says when, and which Bot owns it.
- Specify the owner, schedule and time zone, input, result, approval boundary and missing-data rule.
- **Test run** does real work, so use safe inputs.
- Manage routines from **View conversation details → Routines**. Each Bot can own up to 50, each keeps 20 run records, and deleting has no undo.
- Run as rarely as the job allows, prefer a narrow event over a blind schedule, and stay quiet when there is nothing to report.

Read more in [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) and [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting).
