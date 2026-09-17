---
id: cursor-grok-bot
title: Cursor Grok Bot — named Bots on a shared cloud computer
tags: [cursor, computer-use, orchestration, security]
status: active
updated: 2026-09-17
when_to_use: Creating or governing Cursor Grok Bots (named teammates, shared computer, skills/routines) instead of a one-shot Cloud Agent
---

## Summary

**Grok Bot** is a Cursor product for durable named **Bots** that keep memory, files, and browser sessions on a **shared cloud computer** (browser, filesystem, terminal). Included on paid individual Cursor plans and Cursor Teams, or via a linked SuperGrok account. This is not a Cloud Agent run (`cursor-cloud-always-on`), not the Grok **model** in the Agent panel, and not a local Cursor chat.

## Notes

- All of *your* Bots share **one** computer (files, logins, plugins). Screens are not a security boundary. Isolation is strict **between users**. Privacy Mode (Legacy) must switch to Privacy Mode — Grok Bot needs cloud storage. Computers run in the US today; Cursor’s US-only residency program does not apply by default.
- Work continues with the laptop closed. Create a Bot with a name, one job, and operational boundaries (“never change production”). Teach a browser workflow once (up to 10 min, no mic) → draft **skill**; `/` to invoke. A **routine** is a schedule or event (Slack/GitHub notification) owned by one Bot (cap 50; 20 recent runs). Test runs do real work.
- Approvals + **Auto Review** (independent model) gate shell, plugins, computer use, routine writes, and Cloud Agent/subagent launches. Enterprise can enforce Auto-review and team rules; personal Ask-first wins over Allow. Network Controls, audit logs, Action Recording (`cursor.surface=grok_bot` via OTel), SCIM, and computer terminate are Enterprise-only. Shared static egress IPs identify Grok Bot traffic, not your tenant.
- Bots act as the signed-in member; connector tokens stay on Cursor’s backend. Hand the computer for passwords/2FA; never paste secrets in chat. Local-machine execution is a separate policy (default: ask every time). Outside content is untrusted (`prompt-injection-agent-defense`). Public Bot-template links expose config — strip keys first.

## Sources

- [Grok Bot](https://cursor.com/docs/grok-bot) — accessed 2026-09-17
- [Get started with Grok Bot](https://cursor.com/docs/grok-bot/get-started) — accessed 2026-09-17
- [Work with Grok Bot](https://cursor.com/docs/grok-bot/work) — accessed 2026-09-17
- [Grok Bot security](https://cursor.com/docs/grok-bot/security) — accessed 2026-09-17
