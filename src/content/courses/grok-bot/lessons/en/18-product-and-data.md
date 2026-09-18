---
id: "18"
module: 6
title: "Product and data"
description: "Take a product question from raw data to charts, a daily routine, a spec, designs and a prototype with a small team of role Bots."
level: advanced
minutes: 7
objectives:
  - "Ask a data Bot a question and get numbers and charts you can check"
  - "Chain a finding into a spec, designs and a prototype through role Bots"
  - "Decide where a person must review before the work moves on"
updated: "2026-09-16"
---

## Slow handoffs between data and product

Product work moves in slow handoffs. Someone asks a question, an analyst writes a query, a product manager turns the answer into a spec, a designer mocks it up, and an engineer builds a prototype. Each step waits for a person to be free.

You already know the pieces from earlier lessons: one Bot per role (lesson 11), Bots handing work to each other (lesson 12), routines (lesson 10) and cloud agents for code (lesson 15). This lesson puts them together on one real product loop. You'll see where the Bots save days and where you still need to look carefully.

## A relay race between Bots

A product team of Bots works like a relay race. Each Bot owns one stage, receives the previous result and passes something reviewable to the next. You stay in the conversation as the person who asks the question, checks each hand-off and decides whether the work moves on.

### The roles

In the livestream demo for product managers, the team had four Bots with names and jobs:

- **Ashley**, data science. Connected to the data warehouse (the central database where a company keeps its business data), it writes and runs queries and answers with numbers and charts. A query is a precise question written in a language the database understands.
- **PM Pete**, product. It turns a finding into a PRD (product requirements document), a spec that lists what to build, with P0 items (top priority) and P1 items (next priority).
- **Pixel**, design. It produces design options using the company's design system, the shared set of colors, fonts and components.
- **Emily**, engineering lead. It splits the spec into tasks for engineer Bots, who launch cloud agents to build prototypes.

The closest official use case is **Product Performance** in [Use cases](https://docs.x.ai/grok-bot/use-cases). It describes a Bot that owns performance investigations "with evidence", returns screenshots and direct links, and separates facts from hypotheses.

### Why the artifacts matter more than the chat

Every stage should end in something you can open and check: a chart, a spreadsheet, a spec, a design, a pull request. The [Files and results](https://docs.x.ai/grok-bot/files-and-results) page recommends asking for results that separate facts found in source systems from assumptions, completed actions and open questions. With that split, you can review a data answer in two minutes instead of redoing the analysis.

### Where humans still review

The Bots can run the whole loop, but three points deserve your eyes:

1. **The numbers.** Memory is not a source of truth. For decisions, ask the Bot to reopen the current data and show the query.
2. **The spec.** It sets what gets built. Read it, comment on it and correct it before any design work starts.
3. **The choice between designs, and the merge.** Picking a direction and shipping code are product decisions.

> [!TIP]
> A demo goes through each step in one pass. Real work doesn't. Plan for a few rounds at each stage, add your own ideas, and review more carefully when the change carries more risk.

## Set up the relay stage by stage

1. **Connect the data source** to your data Bot. Use a connector from **Settings → Plugins** if one exists. If not, sign in to the tool yourself in the Bot's browser (lesson 09). Start with read-only access, so the Bot can look but not change anything.
2. **Put the boundaries in the Bot's description.** Read-only queries, always show the query, never change dashboards or alerts.
3. **Ask a narrow question** and ask for charts. The first time, check the numbers against a source you trust.
4. **Turn a useful answer into a routine.** Confirm which Bot owns it, the schedule and time zone, and what should happen if the data is missing.
5. **Hand a finding to the product Bot.** Reply to the message that contains it and mention that Bot with `@`.
6. **Review the spec** before asking for designs. Edit or comment until the P0 items are right.
7. **Ask for designs for each P0** and choose one yourself.
8. **Send the chosen design to the engineering Bot** and ask for a prototype with screenshots or a video as proof (lesson 16).

## Fly Low Airlines, from question to prototype

This is the Fly Low Airlines demo from the livestream, a fictional airline set up for the session.

{{live 6:10:24 "Asking the data Bot about yesterday's ticket sales"}}

The demo started with a plain question to Ashley:

```prompt
How many people purchased tickets yesterday on mobile versus web?
```

Ashley queried the warehouse and answered: about 1,400 tickets, 58% on web and 42% on mobile. The next message asked how many families were flying and to "help us visualize these with charts". Ashley returned charts by traveler type (solo, couple, family, group), with families at 25%.

Then the team made it recurring:

```prompt
Send me this as an update every morning at 6 a.m.
```

If you copy this, add the parts the docs ask a routine to define:

```prompt
Every day at 6:00 AM Pacific time, send me yesterday's ticket purchases by
platform and by traveler type, with charts and the query you used. If the
data for yesterday is not available yet, say so instead of using older data.
```

Next, the team opened a mobile purchase funnel Ashley had built earlier. A funnel shows how many people reach each step of a purchase, and where they drop out. They replied to it:

```prompt
Looks like a big fall-off when people are choosing seats on mobile. Work with
@PM Pete to generate a product spec to optimize our mobile funnel.
```

{{live 6:15:28 "The data Bot corrects the humans"}}

Ashley didn't go along with the humans' reading. The biggest drop was between search and fare selection, not at seat selection, and it told Pete so. Pete wrote a PRD in Notion with P0 and P1 requirements, including a redesign of fare results on mobile and faster fare comparison.

The team said you can also leave comments on the Notion or Google Docs page and tag the Bot to revise the spec. This isn't in the docs yet. If it doesn't work for you, paste your comments into the conversation instead.

Next, the team asked Pete to pass the PRD to Emily, and asked Pixel for designs for each P0.

{{live 6:21:39 "Voting on Pixel's two designs"}}

Pixel delivered options A and B. The audience picked A, and the design went to Emily. Emily split the P0s into scoped tasks for its engineer Bots. One of them, Nova, launched a cloud agent and kept watch over it. The final prototype wasn't shown in the session.

## Charts without the query

- **Trusting a chart without the query.** A wrong join (the way two tables are combined) or date filter looks just as convincing as a right one. _Fix:_ ask for the query and the source link with every number, and spot-check the first answers.
- **Letting your hypothesis steer the analysis.** The Bot may confirm what you said instead of what the data shows. _Fix:_ ask the data Bot to check your reading, as Ashley did with the seat-selection guess.
- **Scheduling a report with no missing-data rule.** The routine posts old numbers as if they were current. _Fix:_ state what the Bot should do when the source is empty or stale.
- **Skipping the spec review.** Designs and prototypes pile up on top of a wrong requirement. _Fix:_ review the P0 list before any design work starts.
- **Asking the data Bot to change things.** A dashboard, alert or production setting gets modified during an "investigation". _Fix:_ keep the data Bot read-only and put changes behind approval.

## Every stage ends in something you can check

- A product team of Bots is a relay: data, spec, design, prototype, with each stage ending in something you can check.
- With every data answer, ask for the query, source links and a split between facts and assumptions.
- Turn a useful question into a routine only after you define the schedule, the time zone and what happens when data is missing.
- Review the numbers, the spec and the design choice yourself before the work moves on.
- Reply to the specific message when you hand a finding to another Bot, so the context travels with it.
