---
id: "19"
module: 6
title: "Founders and sales"
description: "Bots that prepare customer calls, learn from transcripts, track competitors, turn feedback into pull requests and draft in your voice."
level: advanced
minutes: 7
objectives:
  - "Set up a Bot that prepares customer calls and learns from what happened in them"
  - "Track competitors and customer feedback with routines that end in reviewable output"
  - "Use a voice Bot and a catch-all Bot without losing control of what goes out"
updated: "2026-09-16"
---

## The work around every call

A founder or a small sales team spends hours on the work around the actual conversations. They read up on a company before a call, write notes afterwards, check what competitors shipped, sort customer feedback and answer email. None of it is hard, but in a busy week it gets dropped.

This work suits Bots because it repeats, it reads from tools you already use, and the output can be a draft you approve. It also touches customers and other companies, so the boundaries from lesson 04 matter more here than anywhere else in the course.

## Six customer-facing Bots

Give each customer-facing job its own Bot. Let it prepare and draft, and keep every outgoing message behind your approval. The livestream session for founders showed six Bots built this way. They are demo Bots with invented customers, so treat them as patterns to copy. You won't find them as products to install. For official starting points, see the **Sales Outbound**, **Account Health** and **Chief of Staff** use cases in [Use cases](https://docs.x.ai/grok-bot/use-cases).

### Closebot: before and after the call

Before a call, the Bot pulls product usage for that customer account, researches the company and walks through its website on its computer. It returns a briefing as an HTML page (a web page you open in the browser). The briefing covers who they are, their licenses and recent meetings, a usage chart showing growth or decline, risks and recommendations. As a routine, it reads the calendar each morning and prepares every meeting of the day.

After the call, it reads the meeting transcript (the demo used Granola, a meeting notes app). It notes what landed and what didn't, and adjusts future briefings. In the demo, this started paying off after two or three weeks.

### Prodbot: what shipped

A daily rundown of what was released and removed. The Bot reads pull requests and issues in Linear (a task tracker for software teams). Then it clicks through the product itself and attaches screenshots and a video of the walkthrough.

### Stockbot: competitor tracking

A "competitor pulse" routine that runs every few days. The Bot reads changelogs (the public lists of product changes), posts on X and job listings. It signs up for each competitor's product with a throwaway email, goes through onboarding (the first-use setup) and compares it with yours. It returns a teardown, a detailed breakdown of the product, with a video of the signup.

### Protobot: feedback to pull requests

The Bot pulls recent customer feedback, picks an item and launches a cloud agent (lesson 15) to fix it. The goal is to gather every feedback channel into one Bot that opens pull requests, so a complaint becomes a reviewed change within hours.

### Yap bot: your voice

The Bot reads what you've sent by email and Slack to learn how you write, and relearns on a schedule. Other Bots ask it for help when they write on your behalf. Sensitive emails stay as drafts, and the Bot learns from the difference between its draft and what you actually sent.

### The catch-all Bot

You met this one in lesson 11. It takes one-off questions so they don't clutter the context of your specialist Bots. When it learns something useful, tell it to pass that on to the right Bot.

### Responsible use

Three rules from the docs apply to all of these Bots:

- **Nothing goes out without approval.** The docs' outreach prompts end with "do not send or enroll anyone" and "Do not contact customers". Add **Ask first** rules for external email under **Settings → General → Auto-review**.
- **Respect the terms of the sites you use.** The **Sales Outbound** and **Talent Scout** use cases say to use professional networks "as permitted by their terms" and to respect privacy and regional requirements. If a site blocks automation, the Bot should hand that step to you instead of working around it.
- **Remember the shared computer.** A voice Bot that reads your inbox uses sessions that every Bot on your account can use (lesson 02). Only sign in to what the job needs.

> [!WARNING]
> The founders' demo also showed Stockbot writing to customers who had left for a competitor, with a reminder to use this responsibly. Before a Bot signs up for another company's product or contacts people, check that company's terms, your local privacy rules and your own policy. Keep every such message as a draft you approve.

## Start with call prep

Start with the call briefing. It only reads data, and you see the value on the first day.

1. **Create the Bot** and write its job in the description: prepare briefings for customer calls, read-only, never contact customers or edit the CRM. A CRM is the tool where your team tracks customers and deals.
2. **Connect the sources.** You need your calendar, the CRM or usage data, and the folder or tool where call transcripts land. Use **Settings → Plugins** where a connector exists.
3. **Run one briefing by hand** for a real upcoming call, and correct it until you would actually use it.
4. **Save it as a skill** (lesson 06) with the output format you settled on.
5. **Make it a routine.** Every weekday morning, the Bot prepares briefings for that day's external meetings.
6. **Close the loop.** After each call, ask the Bot to read the transcript and note what to change next time.
7. **Add the next Bot** only once this one is reliable.

## Closebot, Stockbot and Yap bot in the demo

{{live 7:33:07 "Preparing a customer call with Closebot"}}

In the demo, Closebot prepared a call with "Northwind", an invented customer. The briefing covered who they are, what their product does, screenshots of their website, account activity, a usage chart, risks and recommendations. The presenter added that the Bot often finds problems on the customer's site while it looks around, such as a cookie banner covering the submit button.

A version you can adapt:

```prompt
Prepare a briefing for my 3 PM call with Northwind. Pull their product usage
for the last 90 days, their open support tickets and my notes from past calls.
Research the company and review their website. Return a one-page HTML briefing
with: who they are, account activity, a usage chart, risks, and three
questions I should ask. Link every source. Do not contact anyone.
```

{{live 7:46:25 "A competitor teardown from Stockbot"}}

Stockbot's output for two invented competitors showed how a routine can end in one document instead of a stream of alerts. It held the signup video, what works and what doesn't, the changelog, posts on X, hiring and the team.

{{live 7:50:30 "Yap bot writing in the presenter's voice"}}

For a voice Bot, start narrower than the demo did:

```prompt
Read the last 50 emails I sent from my work account. Write a short style
guide of how I write: greeting, length, tone, phrases I use and avoid. Save it
as a skill called "Write like me". Do not send anything.
```

## Messages that go out unreviewed

- **Letting a Bot send outreach on day one.** A wrong name or claim reaches a customer and can't be taken back. _Fix:_ keep drafts and approval until you have reviewed many good ones. An approval doesn't reverse work already completed.
- **Giving a voice Bot every account you have.** Every other Bot on your account can now use those sessions. _Fix:_ sign in only to what the job needs, and sign out when you stop.
- **Automating competitor research without reading the terms.** The Bot breaks a site's rules in your name. _Fix:_ check the terms first and let the Bot hand blocked steps to you.
- **Sending feedback straight into merged code.** A single loud complaint changes the product. _Fix:_ have the Bot open a pull request and review it like any other change (lesson 16).
- **Asking random questions to specialist Bots.** Their context fills with noise. _Fix:_ use a catch-all Bot and pass on only what matters.

## Drafts always, sends with approval

- Give each customer-facing job its own Bot: briefings, shipped changes, competitors, feedback and your voice.
- Start with read-only call briefings, then add a routine and learning from transcripts.
- Every message to a customer or another company stays a draft behind **Ask first** rules.
- Check site terms and privacy rules before a Bot signs up for services or contacts people.
- Keep a catch-all Bot so your specialist Bots keep a clean context.
