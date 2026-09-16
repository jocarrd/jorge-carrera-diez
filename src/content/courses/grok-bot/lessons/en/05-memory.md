---
id: "05"
module: 2
title: "What a Bot remembers"
description: "What a Bot's memory keeps and what it doesn't, how to correct it, and why you still check the source before important decisions."
level: beginner
minutes: 6
objectives:
  - "Know what a Bot keeps between conversations and what it leaves out"
  - "Correct a Bot, or ask it to forget something, so the change lasts"
  - "Move context between Bots with files and handoffs instead of relying on memory"
updated: "2026-09-16"
---

## Why this matters

With a chat box, every new conversation starts from zero. You paste the same background, repeat the same preferences, and fix the same mistakes again. A Bot keeps some of what it learns, so the tenth task goes smoother than the first.

That is useful, and it can also mislead you. If you don't know what a Bot remembers, you will either repeat yourself for nothing or trust a memory that is out of date. This lesson shows where the line is.

## The idea

**Memory** is what a Bot keeps from its past work so it can carry on in its role without rereading every old message. Think of a colleague who has worked with you for months. They remember how you like reports and who the key clients are. Before signing a contract, though, they still open the latest version instead of trusting their recollection.

### What memory keeps

A Bot can retain:

- Stable working preferences, such as "use bullet points, not paragraphs"
- Important facts and context about its role
- Summaries of prior work

It does not replay every message. It keeps the parts that help it do its job next time.

### What memory is not

Memory is not a source of truth. Numbers change and customers come and go. Follow four rules:

- Keep changing facts in the source system, the place where the fact officially lives (the CRM from lesson 01, the spreadsheet, the document).
- For consequential decisions, ask the Bot to cite or reopen the current data.
- Correct stale assumptions directly when you spot them.
- Put explicit safety boundaries in the Bot's description, not only in memory.

The last rule connects to lesson 03. The description is the place for rules that must always hold. Memory helps the Bot work well, and the description sets its limits.

### Each Bot has its own memory

Conversations and learned context are separate per Bot. What your Research Bot learned about your market, your Email Bot does not know.

Your Bots do share one cloud computer (lesson 02), so context can still travel between them:

- **Shared files.** A document saved in the shared workspace, `/workspace`, is visible to every Bot.
- **Direct handoffs.** One Bot can message another and pass along what it knows.
- **Group chats.** Several Bots can read the same conversation (more on this in lesson 12).

The xAI team has talked about a memory that several Bots can share, but the official docs don't include it. Plan around files and handoffs.

### Copies start without memory

When you duplicate a Bot, the copy keeps its profile, settings, enabled skills (saved instructions for a task, lesson 06), routines (scheduled work, lesson 10) and avatar. It does **not** copy conversation history, learned memory or chat attachments. A duplicate is a new colleague with the same job title who has not yet worked with you.

## Step by step

1. **Correct the Bot in plain words** the moment it gets something wrong. Say that the correction is lasting, so it knows to keep it, not just to fix this one reply.
2. **Move rules that must never break into the description.** Open **Bot actions → Edit Profile** and add the rule there.
3. **Ask it to forget** context it no longer needs, like an abandoned plan or an old naming scheme. Bots handle this well, and a lighter context uses fewer tokens (the small pieces of text an AI model reads).
4. **Ask for the source** before any decision that matters. "Check the current spreadsheet" beats "what do you remember about the numbers".
5. **Write shared context to a file** in `/workspace`, or ask the Bot to message the other Bot directly, when two Bots need the same information.

```prompt
From now on, sign my emails with my first name only, never my full name. Keep this for every future draft.
```

{{live 1:05:23 "Corrections stay in a Bot's memory"}}

```prompt
Forget everything about the old pricing plan we discussed last week. We dropped it. Use only the pricing page in /workspace/pricing.md from now on.
```

{{live 8:11:06 "Asking a Bot to forget"}}

## Example

In a live demo, the xAI team installed a ready-made Bot for nightly code audits, a check of the team's code that runs every night. It started with no memory of how the team worked. Instead of copying the instructions into it by hand, the presenter asked an existing engineering Bot to brief it:

```prompt
Hello. I have a new member in the team called nightly. Rename them to Steve and tell them how the engineering workflows are enforced.
```

The existing Bot sent the new one the rules: how the task board in Notion (a notes and documents app) was set up, what "clean" meant, the phases of the workflow and the lint checks (automatic checks for style mistakes in code). The new Bot saved them to its own memory and both confirmed.

{{live 4:18:13 "One Bot briefs a new Bot"}}

This works because memory is per Bot and handoffs are how context moves. For your own setup, a lighter version is a file both Bots can read:

```prompt
Write our team's working rules to /workspace/team/rules.md. Then message the Report Bot, tell it the file exists, and ask it to confirm it has read it.
```

## Common mistakes

- **Treating memory as the record.** The Bot quotes last month's figure as if it were today's. *Fix:* keep facts in the source system and ask the Bot to reopen it before decisions.
- **Correcting in passing.** You fix a draft by hand and the Bot repeats the mistake next week. *Fix:* tell the Bot what was wrong and that the change is permanent.
- **Keeping safety rules only in conversation.** A boundary said once gets buried under later work. *Fix:* put "never send without approval" in the description.
- **Expecting one Bot to know what another learned.** The Email Bot has never heard of the insight the Research Bot found. *Fix:* pass it on with a file in `/workspace` or a direct message.
- **Assuming a duplicate is a clone.** The copy asks questions the original stopped asking long ago. *Fix:* give the copy its new scope and the key context before assigning work.
- **Deleting a Bot that others depend on.** A Bot that used to hand it work is not told it was deleted, so it may keep trying. *Fix:* tell those Bots explicitly that it is gone and who takes over.

## Recap

- A Bot remembers stable preferences, role context and summaries of prior work, not every message.
- Memory is not a source of truth. For decisions that matter, ask the Bot to check the current source.
- Correct lasting preferences explicitly, and put rules that must always hold in the description.
- Memory is separate per Bot. Shared files in `/workspace` and direct handoffs move context between Bots.
- A duplicated Bot keeps its setup, skills and routines, but starts without memory or history.
