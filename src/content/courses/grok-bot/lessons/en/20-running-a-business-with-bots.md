---
id: "20"
module: 6
title: "Running a business with Bots"
description: "How the livestream team started a pop-up business with Bots: research, landing page, marketing, venue criteria, a budget, and what broke."
level: advanced
minutes: 7
objectives:
  - "Plan a small business project as a sequence of Bot jobs with clear outputs"
  - "Write precise criteria and prompts for research, venues and budgets"
  - "Recognize the failures that showed up live and how to prevent them"
updated: "2026-09-16"
---

## A business needs everything at once

The last two lessons each showed one team. A small business needs everything at once: research, a website, marketing, suppliers and a budget. With only a few people, most of that work waits.

During the livestream, the hosts tried to start a business in 72 hours with Bots, on camera. They called it "Ship by Thursday", a platform for organizing food pop-ups in San Francisco, which they would test by running their own pop-up. It got messy, and that makes it worth studying, because you can see what worked and what broke. The Bot names and tools below were their choices, and you can use others.

## A list of jobs with a Bot on each

Treat the business as a list of jobs. Each job has one Bot as its owner and ends in something a person can check. The Bots do the preparation. People make the decisions that cost money, need a signature or reach customers.

The official docs give the same order for any role. Put the job and its boundaries in the Bot's description. Run one real task with a safe scope, correct it, and save the process as a skill. Only then add a routine. The docs also say to keep consequential external actions behind approval ([Use cases](https://docs.x.ai/grok-bot/use-cases)). A new business has many of those, such as buying a domain, emailing a venue or publishing a page.

### The jobs the livestream team created

1. **Market research.** A Bot connected to X through a plugin read the replies to the hosts' posts and grouped the business ideas the audience suggested.
2. **Landing page.** A prototyper Bot made quick HTML mockups that displayed inside Grok Bot. An engineer Bot then built the real page, with sign-ups stored in a database.
3. **Research Bots.** One found top restaurateurs and pop-up pages. Another listed 15 to 20 caterers with email and phone.
4. **Marketing.** A Bot suggested the 50 best street corners in San Francisco for flyers and wrote the flyer headline.
5. **Venues.** A "host finder" Bot searched for places to hold the event, using explicit criteria.
6. **Budget.** An event planner Bot drafted a baseline budget before anyone asked venues for quotes.
7. **Knowledge base.** A Bot kept a Notion page up to date with the decisions the other Bots made.

## Start from a one-page company doc

1. **Write a one-page company document** with the idea, the customer and this week's goal. Share it with every Bot. The hosts kept theirs in Notion.
2. **Research before building.** Point a research Bot at real sources and ask for grouped findings with links.
3. **Pick one number to move** before you create more Bots. A guest entrepreneur told the hosts to decide first whether the goal was leads (people who show interest and can be contacted) or email sign-ups.
4. **Prototype cheap, then build.** Ask for throwaway mockups, choose one, then hand it to an engineer Bot.
5. **Write precise criteria** for every search: size, dates, budget, what to avoid and why.
6. **Keep money, contracts and outgoing messages behind approval.** Add **Ask first** rules under **Settings → General → Auto-review** for purchases and external email.
7. **Give one Bot the job of recording decisions,** and tell it to check with you before it writes.

## Ship by Thursday from scratch

{{live 1:43:15 "The research Bot groups thousands of X replies"}}

The hosts connected the X plugin, created a Bot and asked it:

```prompt
Synthesize feedback from what's been suggested by people replying to our
recent posts.
```

It returned themes. People wanted "not another SaaS demo" (SaaS is software sold as an online subscription), something physical or local, retro consumer ideas, a company that builds companies, and a long tail of one-off ideas. The hosts chose a physical, local direction and landed on pop-ups for restaurants.

For the landing page, one host first asked a Bot for high-quality landing page examples. Then they dictated the idea and ended with a check:

```prompt
Restate to me what I just said in your own words so I know you understood me.
```

The first three prototypes were "too boring". A second round produced the "night market pink" style they kept. A Bot pushed the page to the team's repository, which deployed automatically, meaning each change went live on the web without a manual step. The sign-up form was later connected to a database.

Later, the venue and budget work showed the value of precise criteria. The host finder Bot was told to start from venues the team already knew. It had to avoid public or National Park Service sites, because permits take too long, and look for venues that already hold an alcohol license. A Bot also found that one public venue needed a review of 4 to 15 business days.

{{live 8:26:01 "Writing the event budget prompt with an event organizer"}}

For the budget, a guest who organizes events with Bots first made the hosts agree on the facts. They settled on 100 to 200 guests in an open gallery-style space in San Francisco, about a month out, in the evening. There would be no alcohol, to simplify permits, and hot food from an outside caterer. They wanted a mic and speaker but no DJ, and they left marketing out. Then she suggested opening the prompt with a role. A cleaned-up version of what one of the hosts typed:

```prompt
You are a senior event planner in San Francisco. Create a budget for a pop-up
event for about 200 guests, one evening, about a month from now, in an open
gallery-style space. No alcohol. Hot food from an outside caterer; check
whether venues allow outside catering. Include venue, food, staffing, and a
mic and speaker for talks. Leave out marketing. Show each line with a low and
high estimate and the source or assumption behind it.
```

The result wasn't shown on stream. The guest's next step would be to have the Bot request quotes from venues that fit and negotiate within the budget. Those emails should wait for your approval.

### What went wrong, and what it teaches

- **The first mockups were bland.** Say what you dislike and ask again. Give examples up front.
- **An engineer Bot opened a pull request of about 2,000 lines nobody asked for.** The hosts replied with an explicit rule. Put working rules in the description before the first build.
- **A Bot couldn't reach the repositories.** It looked like the wrong connector had been used. Check **Settings → Plugins** and re-authenticate before blaming the Bot.
- **A Bot didn't record the event date the team had decided.** Ask one named Bot to record each decision and confirm it back to you.
- **Automatic updates risked filling Notion with noise.** The hosts told the Bot to update only what mattered and to check with them first.
- **Generated merchandise images got the logo wrong,** because nobody gave the Bot the brand files.
- **The idea changed** from a restaurant pop-up to an art exhibition. The hosts told Steve, their chief of staff Bot, as soon as they decided. Tell the coordinator first, or the other Bots keep working on the old plan.

The events guest also named what still needs people at an event, which is guest registration and security. They compared AI reading contracts to a second-year law student, fine for a first read, with an expert needed afterwards.

### Day 2: changing business in a morning

The pop-up plan didn't make it to day 2. Overnight they left the Bots reviewing the idea with the guests' advice, who had warned about the licences and permits San Francisco requires. By morning the verdict was that there wasn't time. "The agents sold us a pivot," Matt said.

In half an hour at the whiteboard they picked a video game studio, because they were passionate about it and could build it in two days. Before writing any code they decided how to make money without paying giving an advantage in the game: cosmetics, arenas and a stadium with ads. They also decided to leave money for later, because at the start what counts is getting players.

Changing business didn't throw away day 1's work. The Bots, the connections and the way of working still served. They only had to tell everyone the new plan.

{{live d2 0:11:08 "The agents sell them a pivot"}}

{{live d2 0:19:22 "Making money without pay-to-win"}}

## Ten Bots without a goal

- **Creating ten Bots before choosing a goal.** Each one works hard in a different direction. *Fix:* write the company document and pick the one number first.
- **Vague search requests** ("find a cool venue"). You get long lists you can't use. *Fix:* give the size, date, budget and exclusions, with the reason for each.
- **Letting Bots buy, sign or send.** A domain, a deposit or an email goes out without a person deciding. *Fix:* keep **Ask first** rules on purchases and external messages.
- **Changing plans without telling the Bots.** They keep producing work for the old idea. *Fix:* tell the coordinator Bot and ask it to update the others.

## Bots prepare, you decide

- Split the business into jobs, one Bot each, with every job ending in something you can check.
- Research and prototypes are cheap, so decide the goal before you build much.
- Precise criteria (size, dates, exclusions, reasons) make research and budget Bots useful.
- Purchases, contracts, venue emails and event safety stay with people.
- Most of the live failures came from missing context or missing rules, and you can fix both before the work starts.
