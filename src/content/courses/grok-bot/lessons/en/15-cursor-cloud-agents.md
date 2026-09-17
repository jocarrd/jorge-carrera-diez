---
id: "15"
module: 5
title: "Grok Bot and Cursor cloud agents"
description: "Let your Bots plan and follow the work while Cursor cloud agents write the code, and learn how to launch, watch and review those agents."
level: advanced
minutes: 7
objectives:
  - "Explain the difference between a model and a harness, and why it matters for code"
  - "Decide when a Bot should do the work itself and when it should delegate to a cloud agent"
  - "Launch a cloud agent through a Bot, follow its progress and review what it returns"
updated: "2026-09-16"
---

## When the Bot has to touch code

Your Bots can already research, write and use a browser. Sooner or later you'll ask one to change real code, for example to fix a bug on your website. A Bot can try. But serious software work needs a setup built for code: a copy of the project, tests to run, and a clean way to hand back the change for review.

Grok Bot gets that setup by handing coding work to Cursor cloud agents. This lesson shows how the work is split, so your Bot keeps the plan and the context while an agent writes the code.

## Model, harness and cloud agents

A few terms first:

- A **repository** (repo) is the folder that holds a project's code and its full history, usually stored on GitHub.
- A **pull request** (PR) is a proposed change to that code, packaged so someone can review it. To **merge** a pull request is to accept it into the main version of the code.
- A **cloud agent** is a coding agent that runs on its own computer in Cursor's cloud. It works on a copy of your repository and usually returns its work as a pull request.

### Model and harness

Every AI agent has two parts. The **model** (Grok) does the thinking. The **harness** is the software around the model: which tools it can use, how it reads files, how it runs commands. The xAI team explained that Grok Bot's harness is built to organize and automate work across tools, while Cursor's harness is built for writing code. So they orchestrate with Grok Bot and write code with Cursor.

{{live 2:25:29 "Model versus harness: why code goes to Cursor"}}

Think of a project manager and a workshop. The manager (your Bot) knows the client, the deadline and the rules. The workshop (the cloud agent) has the tools. The manager writes a clear order, checks the result and sends it back if it's wrong.

### How delegation works

The official docs set the ground rules ([Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)):

- Grok Bot can delegate coding tasks to Cursor cloud agents. That work runs on separate computers, not on the cloud computer your Bots share (lesson 02).
- Delegated agents follow your existing [Cloud Agent](https://cursor.com/docs/cloud-agent) controls and network settings.
- On Teams and Enterprise plans, a **Cloud Agents** switch allows or blocks delegation for the whole team. It is on by default, and admins can turn it off.
- Auto Review (lesson 04) also checks cloud agent launches. A launch can go ahead, wait for your approval or be denied.

The Bot drives the agent through tool calls, built-in functions it uses instead of clicking through Cursor's screens. It can launch an agent, read its transcript (the log of what the agent has done so far) and send it follow-up messages. It also writes the agent's prompt itself and passes only the relevant context. What it has learned from you, such as your review criteria, goes into those prompts without you repeating it.

{{live 3:59:48 "Launching, reading and following up cloud agents from a Bot"}}

### Project agents and private workers

The livestream showed two more options. A **project agent** is a cloud agent for a long project: it keeps the app's technical context, and the Bot messages it whenever it needs more engineering work. A **private worker** runs a Cursor cloud agent on a machine you own, such as your own Mac. Your Bots themselves still run on Cursor-hosted computers.

None of this is in the Grok Bot docs yet, so you may not find it in your account. If you don't, ordinary cloud agents do the same job.

### When to delegate

Use a cloud agent for complex code tasks. Let the Bot handle research, coordination and quick throwaway prototypes on its own.

> [!TIP]
> Where the line sits depends on your work. Send a few tasks of different sizes to cloud agents before you write a fixed rule.

## Launch an agent from a Bot and review its PR

1. **Check access.** On a team plan, ask your admin to confirm that the **Cloud Agents** switch is on.
2. **Connect the code.** In Cursor's cloud agent settings, connect your GitHub organization and choose which repositories agents may use. The screens belong to Cursor, so follow the [Cloud Agent docs](https://cursor.com/docs/cloud-agent) for the current steps.
3. **Pick one engineering Bot** (lesson 11) and put the delegation rule in its description:

   ```prompt
   You own engineering for the website repo. Delegate code changes to Cursor cloud agents.
   Write each agent a clear prompt with the goal, the constraints and how to verify the result.
   Come back to me with the pull request link and a screenshot or video of the change.
   Don't merge anything without my approval.
   ```

4. **Ask for an outcome, not a method:**

   ```prompt
   The sign-up form on the landing page doesn't save emails. Launch a cloud agent to fix it.
   Keep the change small. Tell me when the pull request is ready.
   ```

5. **Follow progress by asking the Bot**, not by watching the agent. Write "What's the status of the agent?" and the Bot reads the transcript and sums it up.
6. **Review what comes back**: the pull request and the proof you asked for. Lesson 16 covers proof in detail.

## The day 1 landing page

On the first day of the livestream, the team built a landing page (a one-page site that presents an offer) for a pop-up food business. They had just created an engineering Bot called Tater to choose the tech stack, the languages and tools the site is built with, and to build it. They told it how to work:

```prompt
Use Cloud agents going forward, maybe make a project agent.
```

Tater set up a project to hold the technical context. Then the team said how the work should come back. Deploying means publishing the site so people can visit it:

```prompt
Let's for now do all of our development, I guess somewhat locally, on either your Cloud
machine or in the Cloud agents machine. And come back to me with a video or a screenshot.
And we'll worry about deploying it later.
```

{{live 2:45:36 "Telling the engineering Bot to delegate to cloud agents"}}

Soon after, the Bot opened a pull request of about 2,000 lines that nobody had asked for. The team replied with an explicit rule for that early prototype: "no pull requests, we ship to main for now". Main is the main version of the code, so every change went straight in. Your rule might be the opposite. What matters is that the Bot has one before the first build.

On day 2 the game studio took this further. Lauren asked Dr. Eggbot for an engineer Bot whose job was to launch cloud agents, supervise them and check their work, not to write code itself. By the afternoon her Bot was working with a Cursor coordinator agent that handed tasks to five more agents and launched others to verify. Since everything ran in the cloud, she could close the laptop and go to dinner.

{{live d2 7:20:22 "A coordinator agent running five agents"}}

## Large code changes written by the Bot itself

- **Asking the Bot to write large code changes itself.** It may get there, but without the tools built for code. *Fix:* have it delegate to a cloud agent and review the result.
- **Watching the agent's every step.** You spend your time reading logs. *Fix:* ask the Bot for status, and ask for proof in the pull request.
- **No rule for how work comes back.** A surprise 2,000-line pull request lands on you. *Fix:* state the size, the format and who may merge in the Bot's description.
- **The agent can't reach the repository.** The launch fails before any code is written. In the livestream, a Bot had used the wrong connector for GitHub. *Fix:* check repository access before the first launch; re-authenticate GitHub or install the GitHub command-line tool.
- **Assuming the agent sees your Bot's computer.** Delegated agents run on separate computers under Cloud Agent network settings. *Fix:* give them access through the Cloud Agent setup, not through your Bot's logins.

## Who plans and who codes

- The model thinks and the harness gives it tools. Grok Bot's harness orchestrates; Cursor's writes code.
- Bots can delegate coding tasks to Cursor cloud agents, which run on separate computers under your Cloud Agent controls.
- The Bot writes the agent's prompt, follows its progress and brings back a pull request.
- Project agents and private workers may not be in your account yet; ordinary cloud agents do the same job.
- Put the delegation rule, and how results come back, in the engineering Bot's description.
