---
id: "22"
module: 7
title: "Limits and when not to use it"
description: "What Grok Bot cannot do reliably yet, how to handle non-determinism, which steps stay human, and where to go after this course."
level: advanced
minutes: 7
objectives:
  - "Name the current limits that affect real work, and tell documented ones from livestream claims"
  - "Move decisions that must always come out the same into code"
  - "Decide where a person must stay in the loop, and when not to use a Bot at all"
updated: "2026-09-16"
---

## Trusting a Bot with what it does badly

After twenty-one lessons you can build a team of Bots that researches, drafts, builds and reports. The risk now is trusting that team with work it does badly, or with decisions that should never leave a person.

This lesson collects the limits in one place, shows how to work around the ones you can, and closes the course.

## A fast colleague who sometimes contradicts itself

A Bot is a capable new colleague who works fast, never sleeps, and sometimes answers the same question two different ways. You give that colleague real work. You don't hand over the company card, the signature on contracts, or the final call on anything you can't undo.

### Limits in the official docs

**Websites and logins.** Bots can use many sites without a connector. But a site may block automation, expire a session, ask for a new login, show a CAPTCHA (a puzzle that checks you're human) or require a human confirmation. The Bot should hand those steps to you instead of getting around them ([FAQ](https://docs.x.ai/grok-bot/faq)). Some sites ask for verification on every sensitive action, and that can't always be avoided ([Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

**One shared computer.** All your Bots share its files, browser sessions and logins, so separate Bots aren't a security boundary (lesson 02). Each Bot has its own screen and runs one computer-use task on it at a time.

**Memory is not a source.** For consequential decisions, ask the Bot to check the current source instead of relying on what it remembers.

**Auto Review is model-based.** It checks risky actions, but it doesn't review every side effect. Memory writes and most settings changes are examples. It should add to your explicit boundaries, never replace them ([Security](https://docs.x.ai/grok-bot/security)).

**Prompt injection.** This is text written to steer a Bot away from your instructions. It can hide in web pages, plugin results and command output.

> [!WARNING]
> Grok Bot's defenses reduce the risk of prompt injection but don't remove it. When a Bot reads outside content and can also send, buy or delete, keep those actions behind **Ask first** rules.

**Actions don't rewind.** An approval controls the proposed action, not work already completed. A "Stop now" message doesn't undo what the Bot already did. And a **Test run** of a routine performs real work.

**Smaller limits.** **Teach a task** may reach accounts gradually and records up to ten minutes. Attachments go up to 25 MB, or 200 MB for video. Deleting a routine has no undo. And there is no model picker for customers.

### Limits the xAI team mentioned

These came up in the livestream and aren't in the docs, so some may have changed by the time you read this.

- **No group chats with other people inside Grok Bot yet.** The hosts used Slack threads instead, and the team said it was in the feature queue.
- **You can't talk to other people's Bots** from your account today (lesson 12).
- **Computer use is slow.** Working through a screen will never be as fast as calling an API directly (lesson 21).
- **Some authentication is unsolved,** and some companies don't want Bots on their platforms.
- **Bots aren't good on day zero.** They need onboarding with skills and context.
- **Bots accept everything by default,** feedback and bug reports included, unless you teach them when to say no.

{{live 6:26:46 "Bots aren't good on day zero"}}

### Non-determinism: push decisions into code

A language model doesn't always give the same answer to the same input. That is what non-deterministic means. For a draft, that's fine. For a rule such as "refund if the order is under 30 days old and unused", it isn't.

The docs ask for the same discipline in routines: failure states that are explicit, and retries that are safe to repeat ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Two habits help. First, write down what vague words mean. In lesson 17 you saw that "urgent" without a definition can make an agent skip steps or make things up. Second, when a decision must come out the same every time, have a cloud agent write code for it, and tell the Bot to call that code instead of deciding itself. Code follows the same steps every time, and you can test it.

### Where a person stays in the loop

- **Money:** purchases, payments, budget changes.
- **Legal:** accepting terms, signing or negotiating contracts.
- **Anything you can't take back:** sending to customers, publishing, deleting data, changes to production.
- **Credentials:** passwords, two-factor codes, CAPTCHAs, payment confirmations. You take over the computer for these.
- **Judgement calls and the physical world:** product direction, design detail, architecture, security at an event.

{{live 4:09:01 "The work that still belongs to people"}}

### When not to use a Bot

Skip the Bot when the task is a single click you can do faster, or when you can't describe what "done" looks like. Skip it when the only way through breaks a site's terms, and when a mistake would be serious and nobody will review the output.

## Before you delegate new work

Before you hand a Bot a new kind of work, check:

1. **Can I describe the result and how to verify it?** If not, do the task by hand once first.
2. **Does any step touch money, legal terms, customers, production or deletion?** Add an **Ask first** rule under **Settings → General → Auto-review** and a boundary in the Bot's description.
3. **Does any decision need the same answer every time?** Put it in code or a written rule.
4. **Will a site need a login, a CAPTCHA or a human check?** Plan when you will take over.
5. **Who reviews the output, and when?** Name the person and the moment.

## Refunds decided by a rule in code

{{live 8:02:48 "Deterministic decisions with code"}}

Suppose a support Bot decides which refund requests to approve. Instead of letting it judge each case, first ask for the rule as code. A function is a small piece of code that takes inputs and returns an answer, and tests are checks that prove it gives the right answer:

```prompt
Launch a cloud agent to write a small function that decides refund
eligibility from these rules: order under 30 days old, item unused, customer
has fewer than 3 refunds this year. Return eligible, not eligible, or needs a
human, with the reason. Include tests for each rule.
```

Then put this in the support Bot's description:

```prompt
For every refund request, call the refund eligibility function and follow its
result. Never approve a refund the function did not mark eligible. Draft the
reply to the customer and wait for my approval before sending.
```

The Bot still reads the request, gathers the order data and drafts the reply. The decision itself comes from code you can test.

## False safety zones

- **Treating separate Bots as separate security zones.** A login for one Bot is available to all of them. *Fix:* keep sensitive sessions off the computer, or give that work its own Cursor user.
- **Asking the Bot to get past a CAPTCHA or a blocked site.** It shouldn't, and trying can break the site's rules. *Fix:* take over and do the human step yourself.
- **Relying on the model for rules.** The same case gets different answers on different days. *Fix:* write the rule as code or as explicit criteria.
- **Assuming "Stop now" undoes work.** Completed actions stay done. *Fix:* put approval before the action, not after it.

## Where not to use a Bot

- Sites can block automation or demand human steps, and the Bot hands those to you.
- Bots share one computer, memory is not a source, and Auto Review is model-based and misses some side effects.
- When an answer must be the same every time, put the decision in code and have the Bot call it.
- Money, legal terms, irreversible actions, credentials and judgement calls keep a person in the loop.
- Some limits come only from the livestream and may change, so check the docs.

### Where to go next

You have finished the course. The official docs are the reference that stays current:

- [Use cases](https://docs.x.ai/grok-bot/use-cases) for new roles to try.
- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy) before a Bot acts outside your account.
- [Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises) if you roll it out at work.
- [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting) when something stops working.
