---
id: "12"
module: 4
title: "Bots working together"
description: "Let your Bots message each other, hand off work with one clear owner, and use group chats only when the handoff needs to be seen."
level: intermediate
minutes: 7
objectives:
  - "Ask one Bot to request information or work from another"
  - "Name a single owner for each stage of a handoff"
  - "Create a group chat, direct messages in it, and know when it costs more than it helps"
  - "Reply to a specific message to give context, and find the handoffs between Bots"
updated: "2026-09-16"
---

## Carrying messages between your Bots

In lesson 11 you split work into roles. Now your data Bot has the numbers and your email Bot writes the emails. The first time you need an email about those numbers, you end up copying the answer from one conversation and pasting it into the other.

Bots can take that step themselves. They can also overdo it, with several Bots answering the same request and using up your weekly usage (lesson 10).

This lesson shows how to let Bots cooperate with one owner at a time, and where to read what they said to each other.

## Bot-to-Bot messages, like a work chat

Your Bots can send each other messages, like colleagues on a work chat. One asks, the other answers when it can, and you can read the exchange. Passing a piece of work from one Bot to another is called a **handoff**.

### Direct messages between Bots

A Bot can send an asynchronous message to another Bot. Asynchronous means the sender doesn't wait on the line. The receiving Bot wakes up, handles the request and can reply later. You can see the handoff in the conversation.

The official docs list four cases where this helps:

- One Bot owns the place the data comes from, and another owns the finished result
- A specialist should review a draft
- Something blocking the work belongs to another role
- A long job should keep going without you coordinating every step

You can ask for a handoff in a message by mentioning the other Bot with `@`. You can also put a standing rule in a Bot's description, such as "ask Data Dan for any survey numbers you need".

{{live 0:54:13 "Email Ethan asks two other Bots for context"}}

Your Bots can only message your own Bots. Talking to Bots that belong to other people or accounts isn't possible yet, according to the xAI team.

### One owner per stage

The docs ask for a single owner at each stage. Too many parallel handoffs create duplicate work and noisy updates.

In practice, every request that crosses Bots should say who does the work, who receives the result, and who takes the next step.

### Group chats

A group chat puts two to six Bots in one conversation with you. Use it when several Bots work toward one shared outcome and the handoffs should be visible in one place.

Inside a group, you direct messages like this:

- Write normally to let the Bots decide who responds.
- Type `@` and pick a Bot when one teammate owns the request.
- Mention several Bots only when the request needs each of them.
- Use `@everyone` sparingly, for a group-wide update.

Keep two limits in mind. For now, a Bot's handoff message to the group is text-only, so a Bot should send an image directly to the Bot that must look at it. And group chats don't have the per-Bot **Notifications** switch that one-to-one conversations have.

> [!WARNING]
> Group chats with several Bots get expensive, because every Bot talks and they step on each other. Often it works better to have one Bot mention the others once, then work with each of them separately.

{{live 8:10:04 "Why group chats with many Bots get expensive"}}

### Reply to a specific message

Replying to one message tells the Bot exactly which result or approval you mean. The docs recommend a reply in a thread when your feedback is about one result or one approval request. The main conversation stays focused, and the context of the decision stays attached.

Reactions, such as a thumbs-up, work for a light acknowledgement. When the Bot needs a changed instruction, write a reply. Never use a reaction for a decision that affects safety.

### Seeing what Bots said to each other

Handoffs appear in the conversation, so you can open them and read what was asked and answered. When you're not sure where an exchange happened, use search or the command palette (the quick-search box for commands and messages). They can find earlier messages across Bots and groups where that is available.

## Hand a job from one Bot to another

1. Decide whether you need to watch the handoff as it happens. If not, use a direct message. If you do, use a group.
2. For a direct handoff, write to the Bot that owns the finished result. Mention the other Bot with `@`. Say what to ask for, what to return and what to do if the answer isn't ready.
3. For a group, choose **New** in the sidebar. In **New chat**, select two to six Bots. On iPhone or Android, use **+ → New Group Chat**.
4. Open the group and edit its generated name if needed.
5. Post a first message that states the shared outcome and who owns each step.
6. When feedback applies to one result, reply to that message instead of posting a new one.
7. Read the handoffs. If two Bots are doing the same work, name one owner and tell the other to stop.

## Email Ethan asks Data Dan for the data

In the livestream's beginner session, the presenter had three Bots. Data Dan had built a coffee survey, Slide Sonya made the slides, and Email Ethan wrote the emails. The presenter asked Ethan to draft an email about the coffee data. Ethan messaged Data Dan on its own to get the numbers, and the presenter asked it to message Sonya about the slide deck too.

Then the presenter opened the messages between the Bots. Dan had answered that it didn't have the data yet, so Ethan used a sample dataset it already had. The handoff worked, but the draft was built on placeholder numbers.

A request that avoids that outcome:

```prompt
Draft an email to Jason about the coffee survey. Ask @Data Dan for the response count and the three most popular coffee shops. If Dan does not have final results yet, tell me and wait. Do not use sample or placeholder data. Show me the draft before sending anything.
```

Later in the same session, the presenter put the three Bots in a group chat and asked Sonya to build a chart slide and Ethan to email the details once it was done. Ethan replied that it would wait for Sonya's slide, because it understood that its step depended on Sonya's.

In the session for product managers, a presenter replied directly to the data Bot's funnel chart (a chart of how many customers drop out at each step of a purchase). In the reply, the presenter tagged PM Pete to write a spec, a short document describing what to build. The reply carried the chart as context. The data Bot then corrected the humans. The largest drop was between search and fare selection, not at seat selection, and it sent that finding to Pete.

For a group's first message, the docs' example names one owner per step:

```prompt
@Researcher gather the source material and link every claim. @Writer turn the findings into a launch draft. @Reviewer check the draft against the sources and list only blocking issues. Do not publish anything.
```

## Handoffs with no owner

- **Copying answers between Bots yourself.** You become the messenger, and context gets lost on the way. *Fix:* ask the owning Bot to message the other one.
- **No fallback when the other Bot can't deliver.** The Bot improvises, as Ethan did with sample data. *Fix:* say whether to wait, ask you or stop.
- **Two owners for one step.** Both Bots do the work and you get duplicate updates. *Fix:* name a single owner per stage.
- **A group chat for everything.** Every Bot replies and usage climbs. *Fix:* use direct handoffs, and keep groups for work where the handoff must be visible.
- **Posting an image in a group handoff.** A Bot's handoff to the group is text-only. *Fix:* have the Bot send the image directly to the teammate.
- **Answering with a reaction when the instruction changed.** A reaction is only an acknowledgement. *Fix:* write a reply to the specific message.

## Every handoff with an owner

- Bots can message each other asynchronously, and the handoff shows in the conversation.
- Each stage needs one owner. Parallel handoffs create duplicate work and noise.
- Group chats hold two to six Bots. Use them when the handoff must be visible, and direct them with `@`.
- Reply to the specific message when feedback is about one result or approval.
- Tell a Bot what to do when the other Bot doesn't have the answer yet.

Read more in [Message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration) and [Create and manage Bots](https://docs.x.ai/grok-bot/bots).
