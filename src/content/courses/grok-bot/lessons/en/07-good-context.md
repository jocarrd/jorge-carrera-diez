---
id: "07"
module: 2
title: "Giving good context"
description: "How to brief a Bot so it stops guessing: clear outcomes, good references, a short shared doc, a narrow scope and a restate before it starts."
level: beginner
minutes: 7
objectives:
  - "Write a request that says the result, the sources, the limits and what finished looks like"
  - "Keep one short shared document that all your Bots can read"
  - "Notice when a Bot has too much on its plate and narrow its scope"
updated: "2026-09-16"
---

## A vague result usually means missing context

A Bot only knows what you tell it, what it can reach and what it has learned. When a result comes back vague or off target, the cause is usually missing context. The Bot filled the gaps with guesses.

Longer messages rarely help. What helps is putting each piece of information in the right place: the request, a shared document, the description, or a separate Bot.

## Goal, sources, limits and examples

**Context** is the information a Bot works from: your goal, the sources, the constraints and examples of what good looks like. Think of briefing a freelancer on their first morning. A good brief is short and specific. A bad one is either "make it great" or a two-hour ramble with the important part buried in the middle.

### A request with a clear finish line

Build these habits into every request:

- Lead with the result you need, not an imitation of every click.
- Link the source of truth, the place where the correct information lives.
- State what the Bot may change and what requires approval.
- Ask for evidence: links, screenshots or a short action log.

Compare "Make our landing page cooler" with this. (A landing page is the first page visitors see when they arrive at a website.)

```prompt
Draft three landing page directions for our weekend food market. Use the brief in /workspace/company/overview.md and the reference sites I pasted above. Each direction needs a headline, three sections and a one-line reason it fits our audience. Don't publish or deploy anything. Link every reference you borrow from.
```

The second version says what to produce, where to look, what finished looks like and where to stop. "Deploy" means putting a website live, so the request keeps the drafts private.

### Quality references before building

Before asking a Bot to create something, give it good examples to learn from, or ask it to find some. Examples show the Bot the standard you expect.

If you already know a few good examples, start from them. A Bot searching for event venues does better when you name a few venues you already like and ask it to work backwards from them.

### A short shared document

All your Bots share one cloud computer, and files in `/workspace` are visible to every Bot (lesson 02). That makes one short document about your company or project the easiest way to give every Bot the same starting point. Keep it to what a new colleague would need on day one: what you do, for whom, the current goal, and the words you use.

Keep it simple and correct, because a Bot with bad information gives bad results. When you create a new Bot, tell it to use that document as its starting point.

### A narrow scope

Give each Bot a clear job (lesson 03). A job like **General Helper** gives the Bot less guidance and makes its saved context harder to reuse. The best roles own an outcome that repeats. When a conversation turns into a different long-lived job, start a thread (a side conversation attached to one message) or a new Bot.

### When context gets overloaded

A Bot that juggles too many unrelated tasks starts to lose the thread. Its answers get less coherent or less precise. Each Bot can only keep a limited amount of text in view at once, called its context limit.

There are two fixes. Narrow the Bot's job, or split the work across several Bots so none of them runs past its limit. You can also ask a Bot to forget what it no longer needs (lesson 05).

### A catch-all Bot for loose questions

Loose questions still come up: "Has this album come out yet?" If you ask your Report Bot, that question sits in its context next to work that matters.

Keep one Bot just for one-off questions, so your other Bots stay focused. When it learns something useful, tell it to pass it on to the right Bot.

> [!WARNING]
> Never give the catch-all Bot real work. The moment it owns a job, it becomes the vague **General Helper** described above.

{{live 7:51:33 "A catch-all Bot for loose questions"}}

### Restate before executing

After a long message, especially a dictated one (lesson 03), ask the Bot to repeat back what it understood before it starts. Reading a short summary is faster than rereading your own wall of text, and it catches misunderstandings before any work happens.

## Prepare the context before you ask

1. **Write the shared document once.** Ask a Bot to draft it from what you tell it, then edit it yourself.
2. **Open each request with the result.** Add the sources, the limits and what finished looks like.
3. **Attach references** or ask the Bot to find quality ones first.
4. **Ask for a restate** before the Bot starts anything long or important.
5. **Correct the plan**, then let it run.
6. **Watch for drift.** If answers get worse, narrow the Bot's job or move the side topic to another Bot.

```prompt
Write /workspace/company/overview.md in under 300 words: what we do, who our customers are, this quarter's goal, words we use and words we avoid. Ask me for anything you can't fill in. Don't invent facts.
```

```prompt
Before you start, restate what I just asked in your own words: the goal, the sources you'll use, what you won't do, and what you'll hand back. Wait for my OK.
```

## References before the landing page

In a live demo, the xAI team wanted landing page prototypes for a pop-up restaurant platform, a service for temporary restaurants. Before asking for any design, the presenter built up context.

{{live 2:11:11 "Gathering references before prototyping"}}

1. The presenter asked: "what are some high-quality sources of good landing page design and find some references". The Bot found galleries of landing pages and picked a few directions.
2. They dictated their thinking about the business: the platform, running their own pop-up to test it, and whether they needed several landing pages.
3. They ended with: "restate to me what I just said in your own words so I know you understood me".

{{live 2:15:17 "Asking the Bot to restate"}}

The Bot's summary did more than repeat what they said. It pointed out that the real bottleneck was the first cycle of the business: finding a venue, operators and cooks, and then guests. The landing pages mattered less. Only after that did it produce three HTML prototypes, simple web pages you can open and click through. When the presenter found them "too boring", they said so directly and got livelier versions.

## Asking for something more appealing and other vague requests

- **Vague quality words.** "make it cooler" gives the Bot nothing to aim for. _Fix:_ say what should change and show an example.
- **One huge unchecked message.** The Bot acts on a misunderstanding. _Fix:_ ask for a restate before it starts.
- **Repeating the same background to every Bot.** The versions drift apart. _Fix:_ keep one short shared document in `/workspace`.
- **A shared document that grows forever.** Bots pick up outdated or noisy details. _Fix:_ keep it short and update it when things change.
- **One Bot for everything.** Answers get less precise over time. _Fix:_ give each Bot one job and move side topics elsewhere.
- **Loose questions in a working Bot.** Trivia sits in its context next to real work. _Fix:_ ask a catch-all Bot instead.

## A well-built request

- Lead every request with the result, the sources, the limits and what finished looks like.
- Give quality references before asking a Bot to build.
- Keep one short company or project document in `/workspace` for all your Bots.
- Give each Bot a narrow job. If answers get worse, narrow the scope or split the work.
- For long or important requests, ask the Bot to restate what it understood before it starts.
