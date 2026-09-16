---
id: "14"
module: 4
title: "Sharing Bots"
description: "Share a Bot with a public link, know what the copy carries and what it leaves behind, and check someone else's Bot before you trust it."
level: intermediate
minutes: 7
objectives:
  - "Share a Bot with a link, knowing exactly what the recipient gets"
  - "Clean a Bot before sharing and duplicate it when you need a variant"
  - "Evaluate a shared Bot before letting it run real work"
updated: "2026-09-16"
---

## Why this matters

You spent weeks shaping a Bot. Its description is precise, its skills work and its routines run on time. A colleague asks for "the same thing". Rebuilding it from scratch would take them the same weeks.

Sharing solves that, but it raises two questions. What goes out with the link, and what stays with you? And when someone sends *you* a Bot, how do you know it does what it claims before it touches your accounts?

## The idea

Sharing a Bot is like handing someone a copy of your recipe. They get the instructions and can cook the same dish. Your kitchen stays with you, along with your fridge, your keys and the notes you wrote in the margins over the years.

### What a share link carries

Every Bot has a share link. The official docs are precise about what it exposes ([Create and manage Bots](https://docs.x.ai/grok-bot/bots)):

| Goes with the link | Stays with you |
| -- | -- |
| Identity | Conversation history |
| Description | Logins |
| Skills | Your computer and its files |
| Routines | |

The recipient opens a preview on x.ai and chooses **Add to Grok Bot**. They need the Grok Bot app to finish. Adding it creates a **copy** on their account. From then on it is their Bot. It learns from them, runs on their computer, and its routines count against their usage.

> [!WARNING]
> The link is public. Anyone who has it can view the Bot's configuration, and the docs don't say whether its learned memory goes with it. Before sharing, remove API keys, internal URLs, customer data and anything else you would not put in a public document.

"Anything else" matters, because secrets rarely sit in one obvious field. Look in each part of the Bot:

- **The description**: client names, internal project codes, links to private dashboards.
- **Skills**: example inputs copied from real work, internal URLs in the steps.
- **Routines**: channel names, account lists, email addresses in the instructions.

On Teams and Enterprise plans, an admin decides whether members can share Bots outside the team. The docs call this public template sharing. Enterprise teams start with it off, and other teams start with it allowed ([Grok Bot for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

### Duplicate for yourself

To get a second version of your own Bot, duplicate it (lesson 11). The copy is named "`<name>` copy" and carries the profile, settings, enabled skills, routines and avatar. It does not copy conversation history, learned memory or chat attachments.

Duplicate when the role is the same but the scope changes, for example one account-health Bot per region. Rename the copy and give it its new scope before assigning work.

### Someone else's Bot

The docs are plain about this. Shared Bots are created by other users, not by SpaceXAI, and adding one accepts the [third-party bot terms](https://x.ai/legal/bot-sharing-terms). Treat a shared Bot like a new hire with a good CV. You still check their work before giving them the keys.

The livestream also showed a marketplace of ready-made Bots, which the xAI team reviews by hand. The official docs only describe a **Marketplace** for plugins and packaged skills, under **Settings → Plugins**, so the Bot marketplace may not be available to you yet.

## Step by step

**To share a Bot:**

1. Open the Bot and read its description, every skill and every routine as if you were a stranger.
2. Ask the Bot to help you audit itself:

   ```prompt
   I'm about to share you with a public link. List everything in your description, skills
   and routines that looks like a secret, an internal URL, a customer name or private data.
   Quote each item and say where it is. Don't change anything yet.
   ```

3. Remove or replace what it finds. Use placeholders such as `[your CRM view]` so the recipient knows what to fill in.
4. Copy the Bot's share link and send it.

**To add and evaluate a shared Bot:**

1. Open the preview and read the description, skills and routines before choosing **Add to Grok Bot**.
2. After adding it, ask before running anything:

   ```prompt
   Before doing any work, explain what you do, step by step. List the plugins, logins and
   sources you need, every action that would change something outside this chat, and what
   each routine does and when it runs.
   ```

3. Open **View conversation details → Routines** and pause any routine you have not tested (lesson 10).
4. Try one task with safe inputs and read-only access. A **Test run** of a routine does real work, so keep write actions behind approval.
5. Rewrite the description with your own boundaries, such as "Never send external messages without approval."
6. Connect only the plugins and logins the task needs. All your Bots share one computer, so a login you add is available to every Bot (lesson 09).

## Example

In the livestream's session for founders, the presenter showed Stockbot, a Bot that watches competitors. It signs up to their products, walks through their onboarding (the steps a new user goes through) and writes a teardown, a detailed critique, with a video. He shared it from the stage with a QR code, so anyone in the audience could start from the same Bot.

{{live 7:46:25 "Sharing the competitor-watching Bot with a QR code"}}

A copy of Stockbot would arrive without its conversation history or logins. The recipient would connect their own sources and teach it their own competitors. What you share is the method. Each person adds their own context.

Earlier, while the team built their pop-up business, one presenter asked another for a Bot to search for venues. The colleague made a template from their own research Bot and sent it over, so the first presenter didn't have to create one from nothing.

{{live 7:13:41 "Sharing a venue-search Bot between teammates"}}

For Bots from the marketplace, the xAI team's advice matched the steps above. Try the Bot, but first ask it what it does and how, without running the whole process.

{{live 8:12:06 "How to evaluate a marketplace template"}}

## Common mistakes

- **Sharing a Bot you use for client work as it is.** Its skills and routines can expose client names and internal links to anyone with the URL. *Fix:* audit it, replace sensitive details with placeholders, then share.
- **Expecting the copy to know what your Bot knows.** Conversation history doesn't travel, so the copy starts without your conversations. *Fix:* put what matters in the description or a skill before you share.
- **Running a shared Bot's routines straight away.** A routine can act on your accounts at 3 a.m. *Fix:* pause the routines, test one task, then turn them on.
- **Using a shared Bot as a security boundary.** It runs on the same computer as your other Bots, with the same logins. *Fix:* add only the access the task needs, and sign out of what it no longer uses.
- **Treating a duplicate like a new Bot.** It keeps the old routines and scope. *Fix:* rename it, change its scope and review the copied routines first.

## Recap

- A share link is public and gives a copy with identity, description, skills and routines.
- It never includes conversation history, logins or your computer. The docs don't say whether learned memory travels, so treat it as public too.
- Before sharing, clean the description, skills and routines of secrets, internal URLs and customer data.
- Duplicate for a variant of your own Bot, then rename and rescope it.
- Before trusting a shared Bot, ask what it does, pause its routines and test it on safe inputs.
