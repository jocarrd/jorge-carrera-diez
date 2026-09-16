---
id: "17"
module: 5
title: "Engineering automations"
description: "Four engineering automations from the livestream: a PR review channel, a nightly audit, self-fixing CI and an urgent flow that nudges stuck agents."
level: advanced
minutes: 7
objectives:
  - "Trigger engineering work from an event with a narrow rule, and test it safely"
  - "Set up a review channel, a nightly audit, self-fixing CI and an urgent flow"
  - "Decide which changes can merge on their own and which need a person"
updated: "2026-09-16"
---

## Why this matters

By now your Bots delegate code to cloud agents (lesson 15) and bring back proof (lesson 16). But you still start everything. You paste the pull request link, you notice the build is broken, you chase the agent that has gone quiet.

A lot of engineering work starts from a signal. A pull request opens, a test fails, or it's 3 a.m. and nobody is changing the code. This lesson turns those signals into automations. It also covers the question that decides whether they help or hurt: what may go ahead without you.

## The idea

A few terms first. **CI** (continuous integration) is the system that builds and tests your code every time someone proposes a change. When a check fails, people say CI is "red". **Main** is the main version of the code, the one pull requests merge into. **On-call** is the person responsible for incidents at a given time.

A good automation works like a smoke detector. It reacts to one specific signal and does one clear thing. When the problem is bigger than it can handle, it calls a person.

### Routines that start from events

In lesson 10 you created routines that run on a schedule. A routine can also start from an event. Cursor account integrations can trigger it when something happens, such as a Slack message or a GitHub notification. These integrations are separate from the Slack and GitHub plugins and may need their own connection ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

The docs are firm on two points:

- **Use a narrow matching rule.** Avoid listeners like "every new message". They create noise, consume usage and make it more likely the Bot acts on irrelevant input.
- **Test before enabling.** Use **Test run** on the routine before you switch it on.

> [!WARNING]
> **Test run** performs real work. It can browse websites, change files and call connected tools. Use safe inputs and keep write actions behind approval.

The docs also give rules for routines you can trust. Automate the preparation before the execution. Require approval for changes to production, the live system your users rely on. Say what to do when data is missing or stale, and where to report work that was only partly done.

### Low-risk and high-risk changes

Decide how much human involvement a change needs based on its risk. Low-risk changes can go through on their own. Important changes need a demo or a prototype first. Low risk might mean removing dead code (code nothing uses any more) with every check passing. High risk is anything touching payments, user data or production.

On the Bot side, Grok Bot gives you the controls. In **Settings → General → Auto-review** you can add **Ask first** rules, which always stop matching actions for you. When rules conflict, **Ask first** wins over **Allow automatically**. The docs give production deployments as a good **Ask first** example.

## Step by step

The four automations below are patterns the xAI team showed in the livestream. None of them comes ready-made. The review channel ran on **Cursor Automations**, a separate Cursor product built on cloud agents. You can build the other three with routines and event triggers.

1. **A pull request review channel in Slack.** Create a channel where you and your Bots post pull request links. An automation triggers on each message in that channel and reviews the pull request for correctness, risk and missing tests. In the demo the automation was still "just a prompt", with plans to refine it and add a similar channel for bugs.

   {{live 4:44:34 "A Slack channel where every pull request gets reviewed"}}

2. **A nightly code audit.** A routine runs at night, checks the code for quality problems, leftover comments and security issues, and opens pull requests. By morning the fixes are waiting. Night works well because fewer people are changing code, so the changes clash less often. In the demo, the fixes could merge only when conditions were met, such as an end-to-end test (one that runs a whole user flow) passing.

   ```prompt
   Every night at 3:00, audit the repository for dead code, leftover comments and obvious
   security issues. Delegate each fix to a cloud agent as a separate small pull request with proof.
   Don't merge anything. Post one list of the pull requests in this conversation.
   If nothing needs fixing, don't post.
   ```

3. **CI that fixes itself.** When a check turns red or an alert fires, the Bot investigates, launches a cloud agent to fix it and merges according to your rules. If the problem isn't solved within ten minutes, it calls the on-call person.

   ```prompt
   When CI fails on main, find the cause and delegate a fix to a cloud agent.
   If the fix only changes tests or configuration and all checks pass, you may merge it.
   Anything touching production code or data needs my approval.
   If it isn't fixed in 10 minutes, message the on-call engineer with what you found.
   ```

   {{live 4:14:05 "CI that fixes itself and escalates after ten minutes"}}

4. **The urgent (P0) flow.** P0 is the label for the highest priority. Coding agents sometimes slow down: they wait on a long timer, drift from the goal or play it too safe. A P0 flow defines "urgent" once, as a routine that checks the cloud agents every five minutes and interrupts or redirects any that go off track.

## Example

In an engineering demo, a user reported that people couldn't see their booked flights. The engineer's Bot confirmed the bug by browsing the site. The engineer didn't just type "urgent", because that word alone can make an agent skip steps or invent things to go faster. They defined it instead:

```prompt
Treat as P0. You need to set up a routine that checks cloud agent. Every five minutes, check
if they are off the track, such as running a long sleep like sleep 300, or going off our goal,
being too conservative... interrupt and nudge them at a time you found them going off because
I need this urgently.
```

`sleep 300` is a command that waits five minutes doing nothing. An agent might run it while waiting for tests that take one minute.

{{live 4:26:37 "Defining urgent: a routine that nudges stuck cloud agents"}}

They replied to the Bot's bug report with "Fix this issue urgently. It's a P0". Then they asked it to pass the P0 flow to Jenny, the Bot that owns the team playbook, which announced it to every engineering Bot as a standing workflow (lesson 13). The engineer defined urgent once, and now every Bot knows what it means.

Watch the cost. A routine that runs every five minutes runs 288 times a day, and frequent routines get expensive. Where a tool can send a webhook (a message one app sends another the moment something happens), react to that instead of checking on a timer. Stop the P0 routine when the fix ships.

## Common mistakes

- **A trigger that listens to everything.** You get noise, wasted usage and actions on the wrong input. *Fix:* match one channel and one phrase or event.
- **Letting automations merge anything.** A bad change reaches production at 3 a.m. *Fix:* auto-merge only low-risk changes with passing checks and proof, and add **Ask first** rules for production.
- **No escalation.** The Bot keeps retrying while the site is down. *Fix:* set a time limit and name who gets called.
- **Saying "urgent" without defining it.** The agent cuts corners. *Fix:* define what urgent means once and keep it in the playbook.
- **Leaving frequent routines on.** A five-minute check keeps spending after the incident is over. *Fix:* pause or delete it when the work is done.
- **Skipping the test.** Your first real run becomes the test. *Fix:* use **Test run** with safe inputs, then check that it stopped at the approval point.

## Recap

- Routines can start from events such as a Slack message or a GitHub notification. Keep the matching rule narrow.
- Test with **Test run** on safe inputs, and remember it does real work.
- Useful patterns: a pull request review channel, a nightly audit, CI that fixes itself and escalates, and a P0 flow.
- Let low-risk changes through on passing checks and proof; keep production changes behind **Ask first**.
- Define "urgent" once, share it through the playbook, and switch off frequent routines when you no longer need them.
