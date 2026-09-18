---
id: "26"
module: 9
title: "The feedback loop"
description: "How to get from a form inside your app to a merged fix, with one Bot triaging, another reproducing the bug, and the defences any free-text box needs when strangers write in it."
level: advanced
minutes: 9
objectives:
  - "Build the chain that runs from a user comment to a pull request"
  - "Require the agent to reproduce the bug before it touches anything"
  - "Protect free-text input, prompt injection included"
updated: "2026-09-18"
---

## The day the users show up

The first two days of the livestream are about building. The third changes the job: at ten in the morning they launch the game and within minutes there are ninety-six people on the leaderboard. From then on nothing gets decided at a whiteboard. It gets decided on what people actually do.

Users bring feedback, and feedback brings a temptation: read it by hand, write it down somewhere and never look again. This lesson covers the chain they built that day so a comment ends up as a fix instead of a dead to-do list.

## From a form to a pull request

The route has five pieces, and every one of them is a place it can break.

1. **The form**, inside the app, behind the login.
2. **A Slack channel** where every moderated message lands.
3. **A Bot that triages**, separating bugs from requests and opinions, and removing duplicates.
4. **A Bot that reproduces** the bug before anyone writes code.
5. **An agent that fixes it** and opens the pull request, with another one verifying.

{{live d3 2:09:09 "Feedback from the form lands in Slack"}}

![The feedback chain: a form in the app, a Slack channel, a Bot that triages, a Bot that reproduces and an agent that fixes](/images/cursos/grok-bot/esquemas/26-bucle-feedback-en.webp)

### What sits behind the form

Accepting free text from people you don't know has a price. Here is what they put in place, and it is worth copying whole:

- **An authenticated route.** Only signed-in users can write, so there is a name behind every message.
- **Rate limiting.** During the launch surge some users started getting too-many-requests errors. It is uncomfortable, and it is the sign the limit works.
- **A profanity filter and input sanitising** before anything reaches the database.
- **A model as a catch-all guard** reviewing whatever slips past the earlier filters.

Even so, that afternoon they admitted live that moderation was broken. Having it built is not the same as having it working.

### Prompt injection, the new risk

When a Bot reads your feedback, it is reading text anyone could have written. And that text can carry instructions aimed at the Bot, not at you.

While setting up the flow, Lauren said it inside the instruction she dictated: filter out anything that is not about the game, profanity and odd links, **and tell the AI to watch out for prompt injections**. It is the only time in three days anyone mentions it, and it is the lesson that costs the most to forget.

## Reproduce before you fix

This is the rule that separates delegating from abandoning. When they chained the triage Bot to the coding one, they wondered out loud whether to dare with full autopilot. They dared, with one condition: people were already playing, so breaking the game was not an option.

Two controls came out of that.

**The agent has to reproduce the bug before touching anything.** The reasoning is sound: only if it can reproduce it can you trust that it understood the problem. If it cannot, whatever it writes is a guess shaped like code.

**Another Bot checks that the triage was done correctly**, meaning that whoever read the user's comment understood what it said. A perfect fix to the wrong problem is still a problem.

{{live d3 2:28:15 "With production live, breaking the game is not an option"}}

### Swarms that verify

To test, they spin up many cloud agents at once. Each one has its own computer, opens the game, clicks through the interface and tries edge cases. They call it fuzzing, which here means using the app like a user who touches everything and tries to break it.

What they gain is taking the human out of that loop. What they keep doing is testing by hand too, because that surfaces different bugs.

## Teach it once how your product gets tested

Of everything said about verification across three days, this is the most useful formulation: **you teach the Bot once how to check that your product works, and you save it as a skill**. From then on you reuse it on every change and keep improving it.

The reason it matters: you need the Bot to actually run the code and take screenshots. That is what gives you confidence it understood the problem, rather than it telling you the problem is fixed.

There is a short way to ask for it that came up several times that day:

> Before writing any code, run the app, find the exact bug and how it behaves, and then proceed.

## Read the feedback as a whole

A Bot classified the entire channel and posted charts back into Slack. The result: **71% were bugs and 16% were praise**. The three most repeated problems were the mobile layout, matchmaking that only served AI opponents, and the leaderboard rating.

{{live d3 2:19:19 "71% of the feedback is bugs"}}

With that picture they made a prioritisation call worth remembering: at launch, bugs, stability and performance come before new features. The common mistake is diving into the list of nice ideas before the core loop works properly.

## Building your own feedback loop

1. **Put the form behind the login** and add rate limiting and sanitise the input before anything is stored.
2. **Send every message to a channel** where humans and Bots can both see it.
3. **One Bot triages and removes duplicates.** Ask it for charts by category on a schedule too.
4. **Another Bot reproduces.** If it cannot, the ticket stays unfixed with a note saying it could not be reproduced.
5. **Save the procedure for checking your product as a skill**, and use it on every change.
6. **Explicitly tell whoever reads the feedback to watch for prompt injections.**
7. **Start without autopilot.** Have the agent come back with what it thinks is happening before opening a pull request.

## What breaks in this loop

- **Fixing without reproducing.** The agent guesses and changes the wrong thing. _What to do:_ make reproduction a condition for touching the code.
- **Two people fixing the same thing.** It happened live: one went to push a change and it was already merged. _What to do:_ have the triage Bot remove duplicates and flag related work.
- **Trusting moderation without testing it.** Theirs was broken on launch day. _What to do:_ try sending something that should be blocked yourself.
- **Reading feedback one message at a time.** Without grouping you never see that 71% are bugs. _What to do:_ ask for categories and proportions, not a list.
- **Autopilot from day one.** _What to do:_ turn it on once reproduction and verification are working.

## Feedback that reaches the code

- Feedback only helps if it has a path to the code; if it ends in a list, it dies there.
- Reproducing before fixing is what turns autonomy into something reliable.
- The procedure for testing your product gets taught once and saved as a skill.
- Any text written by a stranger needs filtering, rate limiting and a prompt-injection warning.
- At launch, bugs come before new features.
