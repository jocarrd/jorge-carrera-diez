---
id: "08"
module: 3
title: "Connectors and plugins"
description: "Connect your Bots to tools like Slack, Notion or GitHub from Settings → Plugins, and check what you are granting before you click Add."
level: intermediate
minutes: 7
objectives:
  - "Install a connector from Settings → Plugins and attach it to a task with @"
  - "Decide when a connector is better than computer use"
  - "Check account, access and approvals before connecting a tool"
updated: "2026-09-16"
---

## Your work lives in other tools

Most real work lives in other tools. Your team chats in Slack, writes documents in Notion, keeps code in GitHub and reads mail in Gmail. A Bot can open those sites in its browser and click through them, as you saw in lesson 02. That works, but it is slower, and it breaks when a page changes or a login expires.

Connectors give a Bot a direct way in. They also give it access to your accounts, so each one deserves a minute of thought before you add it.

## A direct link to each service

A **connector** is a ready-made link between a Bot and a supported service. With it, the Bot asks the service for data and actions directly, instead of reading screens and clicking buttons. Compare filling in a paper form at a front desk with having a direct phone line to the right department.

### Connectors are called Plugins in the app

In the current app, connectors appear as **Plugins**. The **Plugins** section in settings holds two kinds of things:

- **Connectors** to services such as Slack or GitHub.
- **Packaged skills**, ready-made skills someone else wrote (lesson 06).

It has two tabs:

- **Marketplace** to discover plugins and packaged skills.
- **Yours** to review what you have installed, including your private skills.

You will also see the letters **MCP** (Model Context Protocol). It is the technical standard many connectors are built on. For day-to-day use, read "connector", "plugin" and "MCP" as the same kind of connection.

### Tools people connect

The use cases in the official docs connect Bots to a CRM (the database where a sales team tracks customers), email, calendars, Slack, analytics and issue trackers. In the xAI livestream, the team's Bots used X, Notion, GitHub, Slack, Figma and Gmail. Take these as examples, not a guaranteed catalog. What you can install depends on the **Marketplace** at the time and, on a team plan, on your admin.

{{live 6:08:20 "Bots with Notion, Slack, Figma and Gmail connected"}}

### Connector or computer use

The [official docs](https://docs.x.ai/grok-bot/computer-and-apps) give a simple rule:

- **Prefer a connector when one is available.** It is often more reliable than clicking through a website.
- **Use the browser** for services without a connector, or for visual tasks the connector does not cover.

A site used through the browser can still block automation, end a session or ask for a human step. The Bot hands those steps to you (lesson 09).

### What a connection gives

- **Installed connectors are account-wide.** Every Bot on your account can use them, not just the one you were talking to.
- **A Bot acts as you.** It never has more access than the account you sign in with.
- **The Bot never sees the keys.** When you sign in, the service issues a token, a digital key that proves you gave permission. Connector tokens stay on Cursor's servers. Bots use the connector without receiving the token, and it is never stored on the Bot's computer.
- **Individual tools can be switched off.** A plugin can offer many actions, called tools, such as "read a page" or "send a message". You can turn them on or off one by one.
- **Teams may have rules.** On the Teams and Enterprise plans, an admin can require or restrict plugins. A blocked one shows as **Disabled by team admin**.

> [!WARNING]
> A message or document the Bot reads through a plugin can contain hidden instructions that try to steer it. Keep sending, publishing and deleting behind approval (lesson 04), even for tools you trust.

## Install a connector from the Marketplace

1. Open **Settings** from the account menu, or press `Cmd/Ctrl+,`.
2. Go to **Plugins** and browse the **Marketplace**.
3. Choose the connector and select **Add**.
4. If a browser window asks you to sign in, use the account you actually want the Bot to work with.
5. Open the **Yours** tab, review the plugin's tools and turn off the ones you don't need.
6. In a chat, type `@` and pick the connector to attach it to the task. (`/` is for skills.)

With the Notion connector attached, try a read-only task first:

```prompt
Read the "Launch plan" page and list every task without an owner. Link each one. Don't edit the page.
```

You can also ask a Bot in chat to set up a plugin for you, as the xAI team showed live. If that doesn't work in your app, use the steps above. Either way, you complete any sign-in yourself.

{{live 0:42:51 "Plugins you can connect to a Bot"}}

### Before you connect: a checklist

- **Which account?** The one whose data the Bot should see. Don't pick your most privileged account out of habit.
- **Which tools?** Turn off write tools you don't plan to use.
- **Which approvals?** Add **Ask first** rules for posting or deleting through this tool (lesson 04).
- **Who else can use it?** Every Bot on your account.
- **How do you remove it?** Uninstall the connector, then revoke its access in the service's own settings.

## Thousands of ideas read from X

In the livestream, the xAI team wanted to make sense of thousands of business ideas people had posted as replies on X.

{{live 1:35:00 "A research Bot connected to X"}}

1. They started from an empty account. The only thing they had done beforehand was install the X plugin from the **Marketplace** and sign in with a team member's X account.
2. They created a new Bot. The audience picked its name, Marky McMarkface.
3. They gave it context: the team was about to start a business, these were the presenters' X handles, and all of them had posted about the livestream.
4. They asked: "Synthesize feedback from what's been suggested by people replying to our recent posts."

The Bot searched the reply threads through the connector and came back with grouped themes. Among them were "not another SaaS demo", something physical or local for non-technical customers, and nostalgic consumer ideas. A long tail of one-off suggestions followed. That summary became the starting point for choosing the business.

A version you could adapt, with the X connector attached:

```prompt
Read the replies to my last three posts. Group the suggestions into themes, count how many replies fit each theme, and quote two replies per theme with links. Don't post, like or reply to anything.
```

## Clicking where a connector existed

- **Clicking through a site that has a connector.** The work is slower and breaks more often. _Fix:_ check the **Marketplace** first.
- **Signing in with the wrong account.** The Bot sees the wrong data or none at all. _Fix:_ reconnect with the intended account.
- **Leaving every tool enabled.** The Bot has write access it never needed. _Fix:_ turn off unused tools under **Yours**.
- **Keeping old connections forever.** Access stays open long after the project ends. _Fix:_ review installed plugins regularly and revoke what you don't use.
- **A plugin that won't connect.** Tasks fail at the first call. In the livestream, a Bot couldn't reach the team's GitHub repositories (the folders where code projects live) apparently because the wrong connector had been used. _Fix:_ reopen it in **Settings → Plugins** and sign in again with the right account, or remove it and reconnect. For GitHub, the team also suggested installing GitHub's command-line tool (a program you run by typing commands) on the Bot's computer. {{live 5:06:25 "A Bot that couldn't reach GitHub"}}

## Connectors first, clicks second

- A connector gives a Bot direct access to a service. In the app, connectors appear as **Plugins**.
- Install them from **Settings → Plugins → Marketplace**, sign in, and attach them to a task with `@`.
- Prefer a connector when one exists. Use the browser for everything else.
- Installed connectors work for every Bot on your account, and a Bot never has more access than you.
- Before connecting, check the account, the enabled tools, the approvals and how to revoke access.
