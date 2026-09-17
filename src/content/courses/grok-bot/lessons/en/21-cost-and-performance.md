---
id: "21"
module: 7
title: "Cost and performance"
description: "Why Bot work uses up your weekly usage, and how to cut waste: routine frequency, event triggers, APIs over clicks, lean context, fewer group chats."
level: advanced
minutes: 7
objectives:
  - "Explain what makes Bot work consume usage and where to check it"
  - "Calculate how many runs a routine schedule creates and pick a sensible one"
  - "Apply five habits that make Bots faster and cheaper without losing quality"
updated: "2026-09-17"
---

## Usage that runs out on Wednesday

By now you may have several Bots, a few routines and a group chat or two. Then one week your usage runs out on Wednesday, and you don't know which Bot spent it.

Cost and speed come from the same place. A Bot that clicks through a website step by step, rereads a long context or talks in a busy group chat is slow and uses a lot. The habits in this lesson fix both at once.

## Where usage comes from

Every time a Bot thinks, reads a page, looks at a screenshot or writes a reply, a model does work, and that work is what your plan counts. It is measured in tokens, the small chunks of text a model reads and writes. More steps, more text and more runs mean more usage. It works like a taxi meter that keeps running while the Bot drives, whether the trip is useful or not.

### Plans and usage

- Grok Bot is included with paid individual Cursor plans and Cursor Teams, or through a linked SuperGrok subscription. See [Plans and billing](https://cursor.com/help/grok-bot/plans) for current terms.
- Subscriptions include **weekly** usage. Eligible accounts can add on-demand usage, extra usage billed from model and token cost ([FAQ](https://docs.x.ai/grok-bot/faq)).
- **Usage & Billing** in settings shows weekly included usage and on-demand usage. The account menu can also show **Weekly usage** at a glance ([Settings and notifications](https://docs.x.ai/grok-bot/settings-and-notifications)).
- A separate Grok Bot spend cap isn't available today. Account-level on-demand controls apply ([Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
- If usage runs out, Bots can look stuck and routines may not run ([Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

This course doesn't quote prices. They depend on your plan and change over time.

### Where the usage goes

**Routines that run too often.** Each run is a full piece of Bot work, even when nothing has changed. The numbers add up fast:

| Schedule | Runs per day | Runs per week |
| -- | -- | -- |
| Every 15 minutes | 96 | 672 |
| Every hour | 24 | 168 |
| Every weekday at 8:00 AM | 1 on weekdays | 5 |

Before you pick a schedule, ask how often the answer can really change.

**Checking on a timer instead of reacting to events.** Checking a source on a fixed timer is called polling. A routine that polls Slack every 15 minutes for a new message mostly finds nothing. Instead, a routine can start from an event: Cursor account integrations can trigger it from a Slack message or a GitHub notification (lesson 17). Keep the matching rule narrow, because broad listeners such as "every new message" create noise and consume usage ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

**Clicking through websites.** Using the computer means screenshots, clicks and waiting. The docs recommend a connector when one exists, because it is often more reliable than a website ([The computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). When there is no connector and the Bot repeats the same browser task, try a shortcut. The first time, ask the Bot to watch the page's network requests and find the API behind them. An API is the direct way one program asks another for data, without a screen in between. On later runs, the Bot calls that API directly, which is faster and uses fewer tokens. Check first that the site's terms allow this kind of access.

{{live 7:55:39 "Finding the API behind a repeated browser task"}}

**Context the Bot no longer needs.** A long, mixed conversation means more text to reread on every turn. A Bot that does too many unrelated jobs also loses quality (lesson 11).

**Group chats.** Every Bot in a group reads the messages and may answer. The docs note that too many parallel handoffs create duplicate work and noisy updates ([Message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration)). As lesson 12 explained, it is often cheaper to have one Bot mention two others once and work with each separately.

## A twenty-minute monthly clean-up

A monthly clean-up takes about twenty minutes:

1. **Open Usage & Billing** and note how much of the week is gone, and by which day.
2. **List the routines of each Bot.** Open a Bot, choose **View conversation details**, then **Routines**. Check the schedule and recent runs of each one.
3. **Lower frequencies.** For each routine, pick the slowest schedule that still meets the need. Pause the ones nobody reads.
4. **Replace polling with events** where the source can send one, with a narrow matching rule.
5. **Add a quiet rule** to monitoring routines: if nothing needs attention, report nothing.
6. **Swap browser steps for connectors** where a connector exists in **Settings → Plugins**.
7. **Trim context.** Move one-off questions to a catch-all Bot (lesson 11) and ask Bots to forget context they no longer need (lesson 05).
8. **Ask the Bot itself** how to make its work cheaper, then review the proposal before you apply it.

## A Bot that reviews your usage

{{live 7:56:40 "Routine frequency and asking the Bot to optimize itself"}}

Review routine frequency regularly, prefer incoming signals over a blind schedule, and hand the review itself to a Bot. A prompt you can adapt:

```prompt
Review all your routines and the last 20 runs of each. For every routine,
tell me how often it found something that needed my attention, and propose a
slower schedule or an event trigger where that would give the same result.
Also list any browser steps you repeat that could use a connector or a direct
API call instead. Do not change anything; send me the proposal.
```

For a monitoring routine, add a quiet rule:

```prompt
Every weekday at 9:00 AM, check the checkout error dashboard. If errors are
within the normal range, do not message me. If they are above it, send one
message with the numbers, a screenshot and the link.
```

Context from finished work can go too. In the livestream, a Bot was asked to drop what it no longer needed, handled it well, and used fewer tokens afterwards:

```prompt
Forget all things about how we generated your profile picture.
```

{{live 8:11:06 "Asking a Bot to forget unused context"}}

> [!TIP]
> Grok Bot may ask whether to keep routines running after you've been away a long time, and pause them if you don't answer. When you come back, review the paused routines instead of turning them all back on.

> [!NOTE]
> Day 2 brought real figures. A deck of customer case slides cost between $20 and $30, against four or five hours of work. A medium support ticket cost between $1 and $2, and batching the simple ones brought it down to about 20 cents (lesson 25). Telling the Bot exactly which ticket or account to look at also saves usage, because it doesn't have to search.

{{live d2 1:23:16 "What a slide deck cost"}}

## Routines every few minutes just in case

- **Scheduling every 5 or 15 minutes "to be safe".** Hundreds of runs a day that mostly find nothing. *Fix:* use the slowest schedule that works, or an event trigger.
- **Broad event listeners.** Every message in a busy channel starts a run. *Fix:* match on a specific channel, phrase or link.
- **Letting a Bot click through the same site every day.** It is slow, fragile and costly. *Fix:* use a connector, or have the Bot find an API the site allows you to use.
- **One Bot for everything.** Its context grows and quality drops. *Fix:* split by role and keep a catch-all Bot for loose questions.
- **Routing coordination through a large group chat.** Bots answer each other and repeat work. *Fix:* use direct handoffs with one owner per stage.

## Fewer runs, better aimed

- Usage comes from model work: steps, text read, screenshots and runs. Plans include weekly usage, which you can check in **Usage & Billing**.
- Count routine runs before you schedule them, and prefer narrow event triggers to polling.
- Prefer connectors to clicking. For repeated browser work, consider a direct API call where the site allows it.
- Keep context lean: split roles, use a catch-all Bot and ask Bots to forget what they no longer need.
- Ask a Bot to audit its own routines and propose savings, and review the proposal before applying it.
