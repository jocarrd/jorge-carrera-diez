---
id: "16"
module: 5
title: "Making Bots verify their work"
description: "Give Bots a way to check their own work, require proof such as screenshots, metrics and videos, and review that proof instead of the agent's logs."
level: advanced
minutes: 7
objectives:
  - "Explain what a feedback loop is and why a Bot needs one to finish a task on its own"
  - "Require proof in every result and pull request: screenshots, metrics or video"
  - "Build a verification skill with a standard script and a feature map"
updated: "2026-09-17"
---

## A "done" nobody checked

When a Bot says "done", you have two options. You can trust it, or you can redo the check yourself. Trusting it leads to surprises. Redoing the check means you still do half the job, and with five Bots and a few cloud agents working at once you can't keep up.

There's a third option. Make the Bot prove it. If it has to show you the working page, the before-and-after numbers or a video of the flow, two things change. The Bot catches its own mistakes before it reports back. And your review takes a minute instead of an hour.

## The passenger seat

A driving instructor doesn't ask the student how the drive went. They sit in the passenger seat and watch the road. Verification gives you that seat, so you look at the result instead of the story.

### Feedback loops

A **feedback loop** is a way for the Bot to get a clear signal of success or failure after it acts. The test passes, the button now saves the form, the page loads faster. Without that signal, the Bot can only guess whether it's finished.

Every engineering task needs a complete feedback loop. The simplest one is letting the agent use the website itself through its computer. In lesson 02 you saw that a Bot can open a browser and click through a site. That is also how it checks its own work.

{{live 4:38:05 "Give every engineering task a feedback loop"}}

### Proof in every result

The official docs ask for this in ordinary work too. A strong result "should be independently reviewable", meaning someone else can check it without redoing it ([Files and results](https://docs.x.ai/grok-bot/files-and-results)). Depending on the task, ask for:

- Direct source links
- Screenshots with the relevant state visible
- Timestamps and time zones
- A concise action log
- An explicit list of anything the Bot could not verify

For consequential work, the docs also suggest asking the Bot to separate facts, assumptions, completed actions, actions waiting for approval and open questions.

> [!WARNING]
> Don't rely on a screenshot alone for data that changes quickly. It can be out of date an hour later. Ask for a link or an export from the source as well.

For code, make it a team rule: **every pull request comes with proof**. A pull request, as you saw in lesson 15, is a proposed code change waiting for review. The right proof depends on the change:

| Change                                         | Proof                                            |
| ---------------------------------------------- | ------------------------------------------------ |
| Interface (what the user sees)                 | Screenshots, or a video of the flow              |
| Performance (speed)                            | Metrics before and after                         |
| Backend or logic (what runs behind the screen) | A video or log of the feature working end to end |

With that rule, you review **proof** instead of **traces**. A trace is the step-by-step log of what an agent did. Reading it tells you how hard the agent worked. The proof tells you whether the change works.

### Verification skills

A Bot that has to check an app from scratch every time improvises. It writes a new script, clicks around, and spends tokens (the chunks of text a model reads and writes, which your usage counts) on work that never comes out the same twice. A better approach is a **verification skill** with two parts:

1. **A standard script or CLI.** A CLI is a command-line tool, a small program you run by typing a command. This one starts the app and uses it the same way every time, so every Bot and agent checks things identically.
2. **A feature map.** A document listing the app's features, how to reach each one, and details such as keyboard shortcuts.

The docs already list "How to validate the result" as one of the six things a useful skill should state ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)). A verification skill turns that part into something every Bot can reuse.

In the livestream, the team created theirs with a ready-made skill from a plugin that isn't in the official docs. You don't need it. Ask a Bot to write the script and the feature map as a skill, as in step 3 below.

## Give the Bot a feedback loop

1. **Write your proof rules once**, in the engineering Bot's description or in the team playbook (lesson 13):

   ```prompt
   Every result and every pull request comes with proof: screenshots for interface changes,
   before-and-after metrics for performance changes, and a short video for anything a user
   can click through. If proof is missing, ask the cloud agent for it before telling me it's done.
   ```

2. **Give the Bot a feedback loop.** Make sure it can open the app. That can be a staging URL (a private copy of the site used for testing), a test account signed in through the secure login flow (lesson 09), or a way to run the app on its computer.
3. **Ask for a verification skill:**

   ```prompt
   Create a verification skill for this app. Include one standard script that starts the app
   and checks a feature the same way every time, and a feature map: each feature, how to reach
   it, and any shortcuts. Test the skill on the sign-up flow and show me the result.
   ```

4. **Review the first run.** Did it reach the right screen? Can you understand the proof? Point out what's missing and ask the Bot to update the skill.
5. **Use proof to decide.** Open the screenshot or video. If it shows the change working, reviewing the code takes far less effort. If proof is missing, send the work back.

## Steve and the verification skill

During a build session in the livestream, the team asked Steve, their chief of staff Bot, to create a verification skill. Steve handed the job to Tater, the engineering Bot, which launched a cloud agent to build it.

{{live 4:46:38 "Building a verification skill: a standard script and a feature map"}}

When the verification pull request came back, the team noticed that the pull requests had no videos. They asked for the skill to be updated so it always applies and always includes video, backend changes included. Later, a more general version of the skill was merged. Some pull requests still arrived without videos or screenshots, and the team asked Steve to complete them. Rules take a few rounds to stick.

{{live 5:27:18 "Updating the skill so every pull request includes a video"}}

Earlier the same day, an engineering demo showed the payoff. A cloud agent's pull request arrived with screenshots of what it had changed. The engineer reviewing it said the screenshots gave them enough confidence to merge without going through the agent's work step by step.

The same habit works outside engineering. Ask a Bot to record a video of what it does on a website. It is the fastest way to check whether a task was done right.

> [!TIP]
> When the output is text, the checker can be another Bot. A student looking for an internship had one Bot writing his cover letters and another reviewing them paragraph by paragraph against a checklist. It flagged empty motivational lines and anything that didn't sound like him.

{{live d2 5:24:45 "A Bot that critiques another Bot's letters"}}

In the day 2 game, verification changed with the phase. For the prototype, what mattered was knowing whether the game was fun, so Lauren asked for panels with sliders to change the rules and replay straight away. When the tests started failing, they deleted all of them. They'd write tests once they knew what they wanted to test. By the end of the day she had Crumb, a Bot that goes into the app, clicks around and looks for bugs the way a player would.

{{live d2 8:15:46 "Crumb, the Bot that playtests the game"}}

## Missing proof

- **Accepting "done" without proof.** Errors reach you, or your users, later. _Fix:_ make proof a standing rule in the description or playbook instead of something you remember to ask for.
- **Reading the agent's trace to judge the result.** You spend an hour and still don't know if it works. _Fix:_ look at screenshots, metrics and video first.
- **Letting each Bot improvise its own checks.** Results can't be compared and tokens are wasted. _Fix:_ one verification skill with a standard script and a feature map.
- **Expecting agents to add video unprompted.** In the livestream they didn't, until the skill said so. _Fix:_ name every kind of proof you want.
- **Only telling the Bot when it fails.** It learns less. _Fix:_ tell it when the proof was exactly right, too.

## Evidence you can review

- A feedback loop gives the Bot a clear success or failure signal; without one it guesses.
- Ask for results someone else can check: links, screenshots, an action log and what couldn't be verified.
- Every pull request brings proof: screenshots, before-and-after metrics or video.
- A verification skill pairs a standard script with a feature map, so every Bot checks the same way.
- Review the proof instead of the trace, and send back anything that arrives without it.
