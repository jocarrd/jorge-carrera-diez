---
id: "09"
module: 3
title: "Logins and credentials"
description: "Sign your Bots in to websites without handing them your passwords, and know what a login on the shared computer exposes."
level: intermediate
minutes: 7
objectives:
  - "Take over the computer to complete a sign-in, two-factor code or CAPTCHA yourself"
  - "Explain why a login made for one Bot is available to all your Bots"
  - "Tell a secure secret request apart from ordinary chat, and know what never goes in a message"
  - "Clean up logins and local access when a project ends"
updated: "2026-09-17"
---

## Work behind a login screen

Connectors (lesson 08) cover many services, but a lot of your work sits behind a login page. Think of an analytics dashboard, a supplier portal or an internal admin panel. Sooner or later a Bot reaches one of those pages and stops.

The quick fix would be to paste your password into the chat. Don't. A chat message stays in the conversation history, and the model reads it.

This lesson shows the safe way to get a Bot signed in, what that sign-in exposes, and how to remove it again.

## The Bot uses your access and has none of its own

A Bot has no identity or credentials of its own. It acts as you, with the access you give it. You type your credentials yourself, on the Bot's computer, and the Bot works in the signed-in session you leave behind.

Think of a shared office computer that you unlock each morning. Your colleagues can use the email you left open, but they never learn your password.

### One sign-in, shared by every Bot

Lesson 02 explained that all your Bots share one cloud computer, each with its own screen. That includes the browser. Cookies (the small files a website uses to remember you are signed in) and open sessions are shared. So are credentials saved for command-line tools, the programs a Bot runs by typing commands. Sign in for one Bot and the others can use that session too.

This saves time, because you usually sign in once, not once per Bot. It also means that splitting work across Bots does not keep a login private. If some of your Bots should not use a login, don't sign in to it on the computer. When a job needs its own computer and credentials, the official docs say to give it its own Cursor user.

### Take over for the sensitive step

When a Bot reaches a step only a person should complete, it hands you the computer. The docs list these cases:

- A password or passkey (a sign-in that uses your phone or fingerprint instead of a password)
- Two-factor authentication, the extra code sent to your phone or app
- A CAPTCHA, the "prove you are human" puzzle
- A payment or identity check
- A site that explicitly requires a human

You open the computer, take control, complete only the blocked step and give control back. You can do this from the iPhone and Android apps too.

{{live 4:04:56 "Taking over the Bot's computer to type a password yourself"}}

> [!WARNING]
> Never type a password, one-time code, private key or API key (the secret code programs use to access a service) in the chat. Use a takeover, or a secure secret request when the Bot shows one. If you already pasted one, change it.

### Secure secret requests

Some supported connections ask for a value through a **secure secret request**, a small masked form. You type the value into that form, never into the chat. It is hidden, kept out of the history and never shown to the model.

It is not a general password manager. Use it when the Bot presents one, and take over the computer for everything else.

{{live 6:57:16 "Secure entry: the Bot never sees the password"}}

### Connectors keep their tokens elsewhere

When you sign in to a plugin from **Settings → Plugins**, its token (lesson 08) stays on Cursor's servers. It is never stored on the computer, and the Bot uses the connector without receiving it. That is one more reason to prefer a connector when one exists.

### Password managers and browser cookies

The official docs mention a password manager in one case only. On Enterprise plans, admins can install one on team computers with Team Setup, so members can use stored passkeys in the computer's browser.

The xAI team also showed two options live that the docs don't describe yet, so check your app before relying on them. One was a new 1Password integration {{live 1:18:41 "Credentials and 1Password"}}. The other was importing your cookies from Chrome or another browser, so the Bot stays signed in to many tools without a takeover {{live 7:57:41 "Importing browser cookies"}}.

### Your own laptop is a different permission

Everything above happens on the cloud computer. Letting a Bot run commands on the Mac or Windows machine in front of you is a separate setting: **Settings → General → Agent → Execution on Local Computer**. The default is **Ask every time**. The docs recommend **Never allowed** unless a Bot has a specific reason to touch your local files. Local execution also opens app windows on your screen and uses your machine's resources, which is why the xAI team prefers the Bot's computer.

{{live 8:14:24 "Why the team avoids local execution"}}

## Log in for the Bot without handing over the password

1. In your request, tell the Bot it may need you: "Ask me to sign in if needed."
2. When it stops at a login, open **Agent Computer** from the conversation.
3. Take control of the screen.
4. Enter the password or passkey, type the two-factor code, or solve the CAPTCHA.
5. Wait until the signed-in page has fully loaded.
6. Give control back and tell the Bot to continue from the current page.
7. If the Bot shows a secure secret request instead, type the value there and nowhere else.

## A read-only dashboard with a stop for login

This request comes from the official getting-started guide. It asks for read-only work and plans the sign-in as a stop.

```prompt
Open our analytics dashboard and compare new-user activation for this week with the previous four weeks. Identify the largest step-level change and draft a short investigation plan with links to the relevant charts. Do not change any dashboards. Ask me to sign in if needed.
```

The Bot opens the dashboard and hits the login page, so it asks you to take over. You open **Agent Computer**, sign in, approve the two-factor prompt on your phone and wait for the dashboard to load. Then you write "Signed in, continue", and the Bot carries on with the comparison.

Next week, a second Bot that prepares your Monday report opens the same dashboard without asking, because the session lives in the shared browser. Some sites end sessions quickly or ask for verification again. When that happens, the Bot should pause and tell you. Put that rule in its description:

```prompt
If a website asks you to sign in again or shows a verification check, stop and ask me to take over. Never try to get around the check.
```

> [!NOTE]
> On day 2 of the livestream, a Grok Bot integration with 1Password was announced. It isn't in the official docs this course uses, downloaded on 16 September. If your app already has it, use it so secrets never go through chat.

{{live d2 7:03:35 "The 1Password integration, announced live"}}

## Secrets pasted into chat

- **Pasting a password or one-time code into the chat.** The secret lands in the history and reaches the model. *Fix:* take over the computer or use the secure secret request, and change the password if it already happened.
- **Using separate Bots to keep a login private.** Every Bot on your account can use every session on the computer. *Fix:* keep that login off the computer, or use a separate Cursor user for that work.
- **Giving control back too early.** The Bot resumes on a half-loaded page and hits the login again. *Fix:* wait for the signed-in page before giving control back.
- **Signing in with your most powerful account.** The Bot can do everything that account can do. *Fix:* use an account sized to the task, or a service account with limited permissions (an account made for a program, not a person) where the system supports one.
- **Showing secrets while recording with Teach a task.** The recording captures what is on screen (lesson 06). *Fix:* sign in before you start recording, and use a takeover for credentials.
- **Deleting a Bot and assuming its access is gone.** Deleting a Bot does not remove browser sessions or files. *Fix:* when a project ends, pause or delete its routines (scheduled jobs, lesson 10) and sign out of its websites on the computer. Then uninstall its plugins, revoke them in each service, and remove sensitive files from `/workspace`, the shared folder on the computer.

## You type the password, the Bot uses the session

- Bots act as you. You type credentials yourself by taking over **Agent Computer**, and the Bot works in the session.
- A session opened for one Bot is available to all your Bots, so separate Bots don't keep logins apart.
- Passwords, one-time codes, private keys and API keys never go in the chat. Use the secure secret request when the Bot shows one.
- Local execution is a separate permission. Leave it on **Never allowed** unless you need it.
- Signing out is a manual step. Deleting a Bot leaves its logins on the computer.

Read more in [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) and [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy).
