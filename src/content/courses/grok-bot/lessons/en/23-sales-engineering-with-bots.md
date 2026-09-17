---
id: "23"
module: 8
title: "Sales engineering with Bots"
description: "A technical expert that reads the code, customer case slides built from a template and a Bot that tries competitors' products on its computer."
level: advanced
minutes: 8
objectives:
  - "Set up a Bot that answers customers' technical questions from the code without revealing what must stay inside"
  - "Produce customer case slides from a fixed template so they don't look AI-made"
  - "Have a Bot test competitors' products and check what it sees with another Bot"
updated: "2026-09-17"
---

## The sales engineering bottleneck

Ship by Thursday wasn't selling anything yet on day 2, but its morning whiteboard already listed what would come with players. A company selling a technical product ends up with someone answering what the product does inside. In the same building, a workshop showed how a sales engineering team does that with Bots.

A sales engineer, the person who handles the technical side of a sale, spends the day answering questions the docs don't cover. How does the product store data? What happens if two users do the same thing at once? How is it different from the competition? Many answers live in the code, and engineering knows the code. Every "let me check and get back to you" delays the deal by a couple of days.

On top of that, every customer wants to see cases like theirs. That means rebuilding slides for each call and keeping a close eye on what competitors ship. It's repeated work with clear sources and a result you can review, which suits Bots well.

## Three Bots that ask each other

Day 2 of the livestream opened with a sales engineering workshop built around Flylo, an airline made up for the demos. It showed three Bots, each with one job, passing information between them.

### Sherlock, the technical expert

Sherlock has access to the product's repositories. When a technical question comes in, it launches cloud agents (lesson 15) to read the code and comes back with two things. First, what the product really does. Then, how to explain it to a customer. Its description forbids revealing intellectual property and asks it to explain things for someone who doesn't code.

### Mimi, the customer case slides

Mimi has access to a master deck in Google Slides. You give her a post where a customer describes how they use the product, and she builds a slide from a fixed template: logo, problem, solution, impact and a quote from the post. She finds the logo on the customer's brand page with her own computer. The template is what avoids the generated-slide look, the usual one with the same purple.

### Serena Williams, the competitive intelligence

Serena uses competitors' products on her computer, the way a person would. In the demo she went through Southwest's booking site to compare it with Flylo. Before starting, and without being asked, she asked Sherlock what Flylo supports today. That way she compares against what exists in the code, not against what the website says.

> [!TIP]
> You can redirect a Bot mid-task. In the demo, with Serena already booking on Southwest, she was asked to check whether competitors had AI travel agents too. She took on the request without dropping the test she was running.

### Let the team say what it's missing

When two Bots work together, you can ask them which Bot would help. In the demo, Sherlock created three: BattleCard Blair, for competitor comparison cards; Demo Drake, for demo scripts grounded in what Sherlock confirms; and AI Radar, to watch technical blogs. The presenter kept the first two and had doubts about the third, since it did almost the same as Serena. Review each Bot created this way, as you would a new hire.

{{live d2 1:12:47 "The three Bots Sherlock created"}}

## Set up sales engineering in a week

1. **Create the technical expert.** In its description, put the product it covers, the repositories it can read, that it hands code reading to cloud agents and what it must never reveal.
2. **Test it with three real questions** customers have asked you. Compare its answers with what engineering would say before using it on a call.
3. **Create the slides Bot** and give it the master deck and a finished slide as a model. Make one by hand with it and correct it until you like it.
4. **Save that process as a skill** (lesson 06). If you want it to find new cases, add a weekly routine that sends you the posts before it creates anything.
5. **Create the competitor Bot** and tell it which products to look at and what to compare. Ask it to check with the technical expert before drawing conclusions.
6. **Put them in a group** (lesson 12) when you need an answer that combines what both see.
7. **Ask them which Bots they're missing** and keep only the ones that don't repeat work.

## Serena and Sherlock look for a differentiator

{{live d2 0:51:05 "Serena tries Southwest's site on her computer"}}

With Serena testing Southwest and Spirit and Sherlock reading Flylo's code, the presenter put them in a group and asked a single question. What do competitors offer that Flylo could build with little effort?

Sherlock found something nobody expected. The flexible-dates calendar was already coded in Flylo's front end but never called. Serena noted that round trips and bags looked important but weren't low effort. The two tagged each other to ask for data, without anyone carrying messages.

A version you can adapt:

```prompt
@Sherlock @Serena Compare our booking flow with Southwest's and Spirit's.
Serena, use their sites on your computer. Sherlock, confirm in the code what we
support today. Give me a table with: what they have, what we have, estimated
effort to match it and the source for each item. Don't contact anyone.
```

{{live d2 0:43:58 "Mimi prepares the Salesforce slide"}}

For the customer case, the example was a Salesforce post about cutting legacy code coverage time by 85%. Mimi went to the blog, pulled out problem, solution, impact and quote, added the logo and placed the slide in the deck in about fifteen minutes. Someone had to log in to Google for her when her session expired (lesson 09).

## Mistakes when setting up sales engineering with Bots

- **Letting the technical expert talk to customers directly.** It may quote internal details from the code. *Fix:* have it draft the answer for you, and keep the rule against revealing intellectual property in its description.
- **Asking for slides without a template.** Each one comes out different and generic-looking. *Fix:* give it a model slide and a fixed order of blocks.
- **Accepting every Bot your Bots propose.** You end up with two doing the same thing and more usage spent. *Fix:* compare each proposal with the Bots you already have.
- **Testing competitors' products without reading their terms.** The Bot signs up or automates where it isn't allowed. *Fix:* check the terms and let the Bot hand blocked steps to you (lesson 19).
- **Trusting a comparison without sources.** An invented difference ends up in a deck. *Fix:* ask for the source of every row: a screenshot, a link or the code file.

## Sales engineering that doesn't wait for engineering

- A technical expert with access to the code answers in hours what used to take days, but the answer goes through you.
- Customer case slides come from a fixed template and a post; the template avoids the generic look.
- The competitor Bot uses other products on its computer and checks with the technical expert.
- Ask your Bots what they're missing, but keep only what doesn't repeat work.
