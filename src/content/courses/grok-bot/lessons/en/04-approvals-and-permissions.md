---
id: "04"
module: 1
title: "Approvals and permissions"
description: "Decide what your Bots may do alone and what must stop for you: approval requests, Auto Review rules, Allow once and trust built step by step."
level: beginner
minutes: 7
objectives:
  - "Review an approval request and choose between Allow once, Always allow and Deny"
  - "Write narrow Auto Review rules in plain language"
  - "Know which actions should always wait for your approval"
updated: "2026-09-16"
---

## Why this matters

A chat box cannot send an email, delete a file or publish a post. A Bot can, because it works in your real tools. That is why it is useful, and it is also why you need to decide in advance what it may do on its own.

The goal is a balance. If a Bot asks about everything, you spend your day clicking buttons. If it asks about nothing, a wrong guess can reach a customer. Grok Bot gives you a few controls to set that balance, and you can loosen them as the Bot earns your trust.

## The idea

### An approval request is a pause before an action

When an action needs your approval, the conversation shows the proposed operation and its inputs. Treat it like a colleague asking "shall I send this?" before pressing send. You check the target, the scope and the values, then decide.

On desktop you have three choices:

- **Allow once** lets the Bot continue with this action only.
- **Always allow** can save a rule that matches this kind of action in the future.
- **Deny** blocks the action.

On iPhone and Android, the equivalents are **Approve once** and **Deny**.

Two facts to keep in mind. An approval controls the proposed action and does not reverse work already done. And if you cannot tell what an action will do, do not approve it. Ask the Bot to explain it in plain language or to produce a draft first.

> [!TIP]
> Prefer **Allow once** over **Always allow** for actions that touch accounts, money or shared resources.

### Auto Review decides what reaches you

**Auto Review** is a check done by an AI model. With it on, Grok Bot reviews each action before it runs, both in connected apps and on the computer. You add your own rules in **Settings → General → Auto-review**, written in plain language. There are two kinds:

- **Ask first** rules always stop matching actions for you.
- **Allow automatically** rules let matching actions go ahead, unless the automated review finds another reason to stop.

If both kinds match the same action, **Ask first** wins.

Write narrow rules around one known action and scope:

- Ask first before sending any external email.
- Ask first before changing a production dashboard.
- Allow automatically when running `git status` in `/workspace/reports`. (`git status` is a command that only reads which files changed in a project folder.)

Avoid broad rules such as "allow everything in the browser". Websites and tools change over time. An AI model can misjudge an action, so use Auto Review on top of explicit boundaries in your requests and descriptions.

Personal rules are stored on the desktop where you created them and synced to your Grok Bot computer. If you use another desktop installation, check your rules there too. On the Enterprise plan, an admin may add locked team rules. Your own rules apply on top and can only make things stricter.

If a Bot asks for approval again and again, it usually needs guidance. When you approve something you are happy to repeat, you can tell it "from now on, don't ask me about this". For real boundaries, keep writing rules and descriptions, which you can read and change later.

{{live 1:15:35 "How Auto Review and personal rules fit together"}}

### Boundaries also live in the request and the description

Rules are one layer. You can also set a boundary in the task itself:

```prompt
Reconcile the campaign data and draft a recommended budget change. Do not change the campaign or message the agency. Ask for approval after showing the current value, proposed value, and expected impact.
```

For boundaries that should hold for every task, put them in the Bot's description (lesson 03), for example "Never send external messages without approval."

### What should always require approval

Keep these behind approval, through the request, the description or an **Ask first** rule:

- Sending messages or invitations
- Publishing content
- Purchases and financial transfers
- Deleting or overwriting data
- Changing permissions
- Production changes (changes to the live product your customers use)
- Accepting legal terms

Passwords, two-factor codes and CAPTCHAs work differently. They are not approvals. In those cases you take over the computer and type them yourself (lesson 02).

### Your own laptop is a separate permission

The cloud computer is not the computer in front of you. Whether a Bot may run commands on your Mac, Windows or Linux machine is set in **Settings → General → Agent → Execution on Local Computer**. The default is **Ask every time**. Choose **Never allowed** unless a Bot has a specific reason to work on your local files. This setting does not stop the Bot from using its cloud computer.

## Step by step

1. **Set boundaries in the description.** Open **Bot actions → Edit Profile** and add a line such as "Never send external messages without approval."
2. **Add your first rules.** Open **Settings → General → Auto-review** and add one or two **Ask first** rules for the actions you care about most, such as sending email.
3. **Check local access.** In **Settings → General → Agent → Execution on Local Computer**, choose **Never allowed** unless you need it.
4. **Start with read-only work and drafts.** Give the Bot tasks that read and summarize, and ask for drafts instead of sent messages.
5. **Review each request.** When an approval appears, check the target and values. Use **Allow once** while you are still learning how the Bot behaves.
6. **Widen trust gradually.** When an action has been right many times and is low risk, add a narrow **Allow automatically** rule for it. Keep the list above behind **Ask first**.

## Example

In a live demo, the xAI team opened settings and wrote a rule in plain language: don't reply to emails for me without asking first. The presenter also allowed the Bot to create slides without asking.

{{live 0:47:00 "Writing approval rules in plain language"}}

Later the presenter asked Email Ethan (the email Bot from lesson 01) to draft an email. When Ethan tried to reply, the conversation showed that the action was blocked by their personal Auto Review rule. They chose **Allow once**, and Ethan showed them the draft to check before anything went out.

{{live 0:59:16 "A personal rule stops an email"}}

You can reproduce this with an **Ask first** rule for sending email and this task:

```prompt
Draft a reply to the latest email from our supplier confirming Thursday's delivery. Show me the draft and wait. Do not send anything until I approve.
```

## Common mistakes

- **Approving without reading the target.** The Bot acts on the wrong account or recipient. *Fix:* check target, scope and values, and ask for a plain-language explanation if unsure.
- **Writing broad rules like "allow everything in the browser".** Risky actions go through without a stop. *Fix:* write narrow rules for one action and scope.
- **Choosing Always allow on the first try.** A one-off approval becomes permanent. *Fix:* use **Allow once** until you know the pattern well.
- **Expecting an approval to undo work already done.** An approval only controls the proposed action. *Fix:* keep irreversible steps behind **Ask first**.
- **Setting local execution to always allowed.** A Bot can run commands on your own machine without asking. *Fix:* keep **Never allowed** or **Ask every time**.

## Recap

- An approval request shows the proposed action and its inputs. Review before you approve.
- Use **Allow once** while you learn, and save **Always allow** for low-risk, well-known actions.
- Add narrow **Ask first** and **Allow automatically** rules in **Settings → General → Auto-review**. **Ask first** wins.
- Sending, publishing, purchases, deletion, permissions, production changes and legal terms should wait for you.
- Start with read-only tasks and drafts, and widen trust one rule at a time.

Read more in [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy).
