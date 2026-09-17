---
id: "02"
module: 1
title: "The Bots' computer"
description: "All your Bots share one cloud computer, each with its own screen. Learn to watch it, take over for logins and know its limits."
level: beginner
minutes: 7
objectives:
  - "Explain what the shared cloud computer is and what your Bots share on it"
  - "Watch a Bot work and take over for a login, two-factor code or CAPTCHA"
  - "Choose between a connector and computer use, and know what the computer cannot do"
updated: "2026-09-16"
---

## The Bot does the clicking

A chat box hands you text, and you do the clicking. A Bot can do the clicking itself, because it has a computer. That is what lets it fill in a form, pull numbers from a dashboard or save a file where your team can find it.

Handing a machine to an AI raises fair questions. Where is that computer? Can you see what it is doing? What happens when a website asks for your password? This lesson answers them before you give a Bot real work.

## One cloud computer for all your Bots

### One computer for all your Bots

Your account has one **cloud computer**: a persistent machine that runs in Cursor's cloud, with a web browser, files and folders, and a terminal (the window where you type commands, lesson 01). Persistent means it keeps its state between tasks. It does not run on your laptop, so closing your laptop does not stop the work.

Every Bot on your account uses that same computer. They share:

- Browser cookies (small files websites use to keep you signed in) and signed-in sessions
- Files
- Credentials saved for the terminal, such as a login to a developer tool

Think of it as one office computer with a separate monitor for each colleague. Each Bot gets **its own screen**, so several Bots can use the browser at the same time. The filing cabinet and the keyring are shared, though. When you sign in to a website for one Bot, your other Bots can use that session too, and a file one Bot saves is visible to all of them.

> [!WARNING]
> Screens are separate work surfaces, not security boundaries. Do not put a credential or file on the computer if another Bot on your account should not be able to use it.

In practice, Bots read each other's files on their own when a task needs it.

{{live 8:15:25 "One computer, one desktop per Bot"}}

### Watching and taking over

Open **Agent Computer** from a conversation to view the Bot's screen. The preview shows clicks, typing, navigation and current status. You can close the preview whenever you like and the work continues.

Some steps need a human. The Bot may ask you to take over for:

- A password or passkey (a sign-in that uses your device instead of a password)
- Two-factor authentication (the extra code a site sends to your phone)
- A CAPTCHA (the "prove you are not a robot" puzzle)
- A payment or identity check
- A site that explicitly requires a human

When that happens, you take control of the computer, complete only the blocked step, and hand control back.

### Connectors or computer use

A Bot can reach an app in two ways. A **connector** is a structured link to a supported service. In the current app, connectors are shown as **Plugins**. **Computer use** means the Bot operates the browser or desktop the way a person would.

Prefer a connector when one exists, because it is often more reliable than clicking through a website. Use computer use for services without a connector, or for visual steps a connector does not cover. Lesson 08 covers connectors and plugins in depth.

### Files that last

The computer has a shared folder called `/workspace` (the text is the folder's path, its address on the computer). Ask your Bots to keep project files there, in clearly named folders. Files, browser state and supported sign-ins are designed to survive normal updates and recovery. Temporary folders and packages installed by hand can disappear, so keep important results in `/workspace` or attached to the conversation.

### What the computer cannot do

- **Get past a site that blocks it.** A site can block automation, expire a session or require a human step. The Bot should hand those steps to you rather than work around them.
- **Run two computer-use tasks on one screen.** One Bot runs one computer-use task at a time. Other Bots can work in parallel on their own screens.
- **Touch the computer in front of you by default.** Your laptop is separate. A Bot only runs commands on it when that capability is enabled and you approve it (lesson 04).
- **Keep secrets from your other Bots.** Anything on the computer is available to every Bot on your account.

Computer use can also be slow, and its speed depends on the AI model doing the work. You do not have to watch: close the preview and come back later. The cloud computer also has its own internet connection, so handing a browser task to a Bot helps when yours is poor, for example on a plane.

{{live 0:58:15 "Why computer use can feel slow"}}

## Watch a Bot work and take control

**Watch a Bot work**

1. Give a Bot a task that needs a website, for example checking a public page.
2. In the conversation, open **Agent Computer**.
3. Follow the clicks and navigation in the preview. Close it when you have seen enough.

**Take over for a login**

1. When the Bot asks for help, open **Agent Computer**.
2. Choose the takeover control.
3. Enter the password, passkey or two-factor code, or complete the CAPTCHA yourself.
4. Return control and tell the Bot to continue.

**Add a connector**

1. Open **Settings → Plugins**.
2. Browse the list and choose **Add** on the service you need.
3. Complete authentication in your browser if asked.
4. In a chat, type `@` to attach the connector to a task.

## Data Dan builds a Google form

In a live demo, the xAI team asked a new Bot, Data Dan, to build a Google Form with two questions about coffee. Google Forms had no connector in that setup, so the Bot built the form in the browser on its computer. The presenter opened the computer view and watched it work.

{{live 0:41:51 "Watching Data Dan build a Google Form"}}

You can ask for the same kind of work. If a sign-in page appears, the Bot should stop and ask you to take over.

```prompt
Open Google Forms and create a form called "Team lunch". Add two questions: a multiple-choice question "Which day works?" with Tuesday, Wednesday and Thursday, and a short-answer question "Any dietary needs?". Ask me to sign in if needed. Send me the link when it is done.
```

## Passwords in chat and other slips

- **Pasting a password or one-time code into the chat.** It ends up in the conversation. *Fix:* take over the computer and type it there, or use the secure secret request when a supported connection offers one. It hides the value from the conversation.
- **Using separate Bots to keep data apart.** All Bots share files and logins. *Fix:* do not place anything on the computer that any of your Bots should not use.
- **Asking the Bot to get around a CAPTCHA or blocked login.** Sites expect a human for those steps. *Fix:* tell it to pause and notify you instead.
- **Forcing browser work when a connector exists.** Clicking through a site is often less reliable. *Fix:* check **Settings → Plugins** first.
- **Leaving the only copy of a result in a temporary folder.** It can be lost during recovery. *Fix:* ask the Bot to save it in `/workspace` or attach it to the conversation.

## One computer for all, one screen per Bot

- All your Bots share one persistent cloud computer: files, browser sessions and logins.
- Each Bot has its own screen, but screens are not a security boundary.
- Open **Agent Computer** to watch, and take over for passwords, two-factor codes and CAPTCHAs.
- Prefer connectors (**Plugins**) and use computer use for everything else.
- Keep durable files in `/workspace`.

Read more in [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps).
