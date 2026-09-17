---
id: "11"
module: 4
title: "One Bot per role"
description: "Decide when a job deserves its own Bot, describe the role in operational terms, and keep your roster as small as it can be."
level: intermediate
minutes: 7
objectives:
  - "Use five signals to decide whether work needs a separate Bot"
  - "Write a role description that says what the Bot owns, uses, produces and must never do"
  - "Start with the smallest useful roster and grow it only when a specialist role is stable"
  - "Know when a catch-all Bot helps and when it hurts"
updated: "2026-09-16"
---

## The Bot you end up asking for everything

After a few weeks with one Bot, you start asking it everything. The sales report, a software bug, a birthday gift idea, the budget. Its answers get harder to steer. The Bot mixes preferences from one job into another, and you repeat context you already gave it.

The opposite also happens. You create a new Bot for every task, and a month later the sidebar has thirty names and none of them has learned much.

This lesson is about the middle ground: a few Bots, each with a job it keeps.

## Five signs a job needs its own Bot

A Bot is a long-lived teammate with a name, a job, its own conversation and working context that builds up over time (lessons 01 and 05). The job is what keeps that context useful. When the job is clear, what the Bot learns today still applies tomorrow.

Think of hiring for a small company. You don't hire one person per errand, and you don't ask the accountant to design the logo. You write a job description when a kind of work keeps coming back.

### Five signals for a separate Bot

The official docs say to create a separate Bot when the work has a distinct:

- Goal or area of ownership
- Set of tools and sources
- Working style
- Approval boundary
- Recurring schedule

Each one is a reason to consider a new Bot. Expense tracking and bug reproduction (making a reported software problem happen again so it can be fixed) differ on all five. They clearly belong to different Bots.

The docs give **Talent Scout**, **Expense Manager** and **Bug Reproduction** as good jobs. A job such as **General Helper** gives the Bot less guidance and makes its saved context harder to reuse.

### Describe the role in operational terms

A name is a label. The description is what shapes the Bot's work. Write what it owns, where it looks, what it produces and what it must not do. Here is the docs' example. "Churn" means customers leaving, and "expansion" means customers buying more.

```prompt
Own the weekly account-health review. Pull product usage and support signals, flag evidence of churn or expansion, and produce a linked watch list for the customer-success team. Never contact a customer or change an account without approval.
```

Rules that should always hold go in the description. Instructions for one task go in a message (lesson 03).

### Context is a reason to split

A Bot keeps preferences, facts and summaries so it can hold its role over time (lesson 05). A vague job makes that saved context harder to reuse. There is also a practical limit: each Bot can only keep so much in view at once, its context limit. A Bot that jumps between too many kinds of work can run past it.

That is why the xAI team split their engineering Bots by area: one for the user interface, one for developer tools, one for infrastructure. Each stays within its limit and builds its own memory.

{{live 4:16:08 "Splitting engineering Bots to stay within context limits"}}

> [!TIP]
> If a Bot starts giving muddled or weaker answers, it may have too much on its plate. Narrow its job in the description, or ask it to forget what no longer applies (lesson 05).

{{live 6:58:18 "When a Bot has too much scope"}}

### The smallest useful roster

Your roster is the set of Bots you keep. The docs recommend growing it slowly:

1. Give one Bot ownership of an end-to-end outcome.
2. Add another Bot only when the work has a stable specialist role.
3. Put Bots in a group chat when the handoff itself needs to be visible (lesson 12).
4. Keep external actions behind a clear approval boundary.

Your existing Bots can suggest or create a focused Bot when a job needs a long-lived owner. If you want a small roster, tell them to ask you first.

When you need the same role for a different scope, such as one account-health Bot per region, duplicate the Bot. The copy keeps the profile, settings, enabled skills, routines and avatar. It does not keep conversation history, learned memory or attachments, so rename it and give it its new scope.

Separate Bots organize work. They don't separate access, because they all share one computer and its logins (lesson 09).

### Catch-all Bot or specialists

The docs steer you away from a **General Helper** as the owner of real work. A narrower idea from the livestream does help: one Bot that only takes loose questions, such as "has this album come out yet?", so they stay out of your specialists' context. If it learns something another Bot needs, tell it to pass it on: "go tell ProdBot about what you've learned".

{{live 7:51:33 "A catch-all Bot for one-off questions"}}

The difference is ownership. A catch-all Bot owns nothing, and no work depends on it. A general helper that also runs your reports and routines is the pattern the docs steer you away from. For simple projects, the xAI team added, one "builder" Bot covering engineering, product and design can be enough.

## Split your week into roles

1. List the recurring work you would hand off in a normal week.
2. Group the items that share a goal, tools, working style, approval boundary and schedule.
3. Pick the group with the clearest end-to-end outcome and give it to one Bot.
4. Open **Bot actions → Edit Profile** and set a job name and an operational description.
5. Give that Bot real tasks for a while before creating the next one.
6. Create a second Bot only when a group of work has become a stable specialty.
7. Use **Hide from sidebar** for Bots you no longer use. Hiding keeps their work, but it does not pause their routines (lesson 10).

## The product team from the livestream

In the livestream's session for product managers, the roster was built around roles. Ashley handled data science, PM Pete wrote product specs and Pixel did design. Emily led engineering, with engineer Bots under it, and Ray handled recruiting.

{{live 6:06:20 "Why each Bot gets a name and a role"}}

The presenters gave three reasons. People find it easier to know whom to ask. Memory and learning work better when a Bot is scoped to a role. Work can also run in parallel across Bots. They added that roles can overlap.

Here is a description in the docs' style for a design Bot like Pixel. A design system is a team's shared set of fonts, colors and interface patterns, and a P0 requirement is a top-priority one.

```prompt
Own product design mockups. Work from our design system in Figma: fonts, colors and UX patterns. For each P0 requirement in a spec, produce at least two options with screenshots and a short rationale. Hand approved mockups to the engineering lead. Never publish or change the shared design library without approval.
```

It names the outcome, the source, the output, the handoff and the boundary. A second design Bot would only make sense if, for example, marketing design needed a different library, style and approver.

## The General Helper and duplicate Bots

- **One General Helper for everything.** Context from one job leaks into another and guidance gets vague. *Fix:* split along the five signals.
- **One Bot per task.** The roster grows and no Bot keeps enough work to learn from. *Fix:* create Bots for long-lived jobs and send tasks as messages.
- **A full team on day one.** You don't know which Bot to ask, and none has earned its role. *Fix:* start with one owner and add specialists when the need repeats.
- **A job title with no description.** "Marketing" says nothing about sources, output or limits. *Fix:* write the role in operational terms.
- **Splitting Bots to separate access.** Every Bot uses the same computer and sessions. *Fix:* keep sensitive logins off the computer instead (lesson 09).
- **Expecting a duplicate to remember.** The copy starts without history or learned memory. *Fix:* give it its new scope before assigning work.

## When to create another Bot

- Create a separate Bot when the work has its own goal, tools, style, approval boundary or schedule.
- Describe each role by what it owns, uses, produces and must never do.
- Start with one Bot owning an outcome. Add specialists only when a role is stable.
- When a Bot's job gets vague, its saved context is harder to reuse. Narrow the job.
- A catch-all Bot for loose questions can help, as long as it owns no real job.

Read more in [Create and manage Bots](https://docs.x.ai/grok-bot/bots).
