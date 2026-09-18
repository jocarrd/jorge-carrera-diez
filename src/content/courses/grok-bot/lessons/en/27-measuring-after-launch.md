---
id: "27"
module: 9
title: "Measuring after launch"
description: "What to look at when there is no revenue yet, how to ask a Bot for the numbers instead of opening a dashboard, and the two figures that changed their priorities in a single day."
level: advanced
minutes: 8
objectives:
  - "Pick what to measure based on the stage your product is in"
  - "Set up a recurring report that arrives on its own, with no dashboard to visit"
  - "Tell a number that changes decisions from one that just decorates"
updated: "2026-09-18"
---

## Ask for the numbers instead of going to get them

The habit is to open a dashboard site, log in and navigate to the chart you want. If that chart does not exist, you build it. And if tomorrow you want a different cut, you start again.

Roshan does something else every time they ship: he asks a Bot that already knows his data for a report every fifteen minutes on how the launch is going. New signups, games started, and the funnel from people who try to people who register.

{{live d3 1:51:27 "A launch report every fifteen minutes"}}

His argument is simple. He gets the cut of data he needs right now without building a new dashboard. When they turned on web analytics mid-afternoon, he set nothing up: he told the Bot they had just enabled it and to fold it into its usual reports. The connector was already in place.

## What to measure depends on where you are

The question they put to him live is the right one: where do you look to decide what to do next? And his answer distinguishes by stage, which almost nobody does.

{{live d3 1:59:36 "At a zero-to-one company the metric is not money"}}

**If you have just started and are not charging**, money tells you nothing. What matters is whether people use it, whether they enjoy it and whether they like what you made. In their case: whether they reach the end of a game, whether they start another, or whether they drop off at the beginning and never return.

**If you already have revenue**, the main metric is money, exactly as the guests who work with small businesses kept telling them.

Mixing the two is the common mistake. Chasing revenue before you know whether anyone cares about your product means tuning something that does not exist yet.

### Game balance is a metric too

A detail that transfers to any product. In the morning he pulled the win-loss data and got a **41.8% loss rate**, meaning the AI was winning more than it should.

{{live d3 2:02:16 "A 41.8% loss rate: the game is too hard"}}

The target in a competitive game is close to 50%, because you have to feel you can win without winning every time. By mid-afternoon, after tuning, they were at 47%.

The interesting part is that they **turned a vague feeling into something measurable**. The game design Bot had already told them it was too hard for a launch; the data confirmed it and pointed the way to tune it.

## The two figures that changed their priorities

Of everything they measured that day, two moved decisions. The rest was decoration.

**More people were playing on mobile than on desktop**, with 44% on iOS. They said it plainly: that is good input for deciding what to fix first. And the number one complaint in the feedback was that mobile did not work properly. Two different sources pointing at the same place.

{{live d3 5:18:01 "There are more mobile players than desktop players"}}

**8% of people who play a practice round end up signing in.** It is the funnel figure they had been chasing all day, and it arrived late in the afternoon.

{{live d3 6:46:06 "8% of people who try it end up signing in"}}

### And a measurement doubt worth copying

When he first looked at that funnel, he did not take the number at face value. He noticed the sign-in button is only visible at the very top of the screen while you play a practice round, and said out loud that maybe the conversion event is not being measured properly.

That distrust is worth more than the number. A bad funnel can mean a bad product or a badly placed counter, and acting without telling them apart gets expensive.

His read on the drop-off was not alarmist either: plenty of people come in, try it, have a good time and see no reason to register. They asked what to give the people who do sign in, rather than how to push the ones who don't.

## Building your own pulse

1. **Connect the sources to the Bot** before you need them: the database, web analytics and wherever feedback arrives.
2. **Ask for a recurring report**, not a dashboard. Have it give you signups, usage and the funnel step you care about.
3. **Match the frequency to the real pace.** Every fifteen minutes works on launch day; the following week it does not.
4. **Ask for proportions, not lists.** 71% bugs says more than two hundred messages.
5. **Cross two sources before prioritising.** The mobile number and the mobile complaint said the same thing.
6. **Doubt the counter** when a number surprises you, before you change the product.

## Where this goes wrong

- **Measuring revenue before you charge.** _What to do:_ measure whether people come back.
- **Mistaking a pretty chart for a decision.** Cumulative curves always go up, and they laughed about that themselves. _What to do:_ keep the numbers that change what you do tomorrow.
- **Setting up reports every fifteen minutes and leaving them running.** That is the silent spend covered in the cost lesson. _What to do:_ lower the frequency once the launch is over.
- **Acting on a funnel without checking how it is measured.** _What to do:_ look at where the event fires before touching anything.
- **Asking for data and doing nothing with it.** _What to do:_ make every report end in a decision, or remove it.

## Numbers that change decisions

- Ask a connected Bot for the numbers instead of navigating to a dashboard; today's cut is not tomorrow's.
- Without revenue, the metric is whether people come back, not money.
- A vague feeling like "it's too hard" can become a percentage and be tuned.
- Two figures changed their priorities in three days; the rest was decoration.
- Before believing a strange number, check how it is being counted.
