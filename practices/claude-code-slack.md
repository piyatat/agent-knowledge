---
id: claude-code-slack
title: Claude Code in Slack — @Claude web sessions vs Claude Tag
tags: [claude, slack, orchestration, ux]
status: active
updated: 2026-10-14
when_to_use: Setting up @Claude in Slack, or choosing the earlier per-user Slack app vs Claude Tag
---

## Summary

**Claude Code in Slack** turns `@Claude` in a channel/thread into a **Claude Code on the web** session (GitHub clone, your plan limits). **Claude Tag** is the org-shared `@Claude` path (Team/Enterprise, admin-configured). The **legacy per-user bot retired 2026-10-05** in any workspace an organization has **connected to Claude Tag** — `@Claude` then posts a retirement notice instead of answering. Pro/Max keep the earlier path **only** in workspaces **not** connected to Tag. Not channels (push into a **local** session), not Remote Control, not Cursor Slack (`cursor-slack-cloud-agents`).

## Notes

- Earlier path prerequisites: **Pro / Max**, Slack workspace **not** connected to Tag, cloud sessions on, GitHub connected at claude.ai/code, Slack linked in App Home. Workspace admin installs the Slack app; users `/invite @Claude` per channel. **Channels only — no DMs.** “This workspace isn't set up for Claude Tag yet” means the linked Claude account is not Pro/Max **and** no org has connected Tag — Owners start with the `@Claude connect` command the notice names.
- Routing (App Home): **Code only** sends every @mention to a web coding session. **Code + Chat** classifies; use Retry as Code / retry as Chat when it guesses wrong. Thread mentions get the full thread; channel mentions use recent messages. Treat the conversation as trusted — Claude may follow other messages in context.
- Flow: detect coding intent → create claude.ai/code session → Slack status updates → completion @mention with View Session / Create PR / Change Repo. One PR per session. GitHub only. Sessions appear in your web history; Team/Enterprise Slack-started sessions are org-visible.
- Access: each user on the earlier path runs under their own Claude account and repos they personally connected. First-use “Claude Code is not enabled” means that user has no cloud environment yet — finish web onboarding.
- **Claude Tag** (Team/Enterprise): `@Claude` is the org identity; channel environments must be **organization-shared**, not a personal claude.ai/code environment, or sessions fail immediately. If the retirement notice appears, an Owner turns Tag on for the channel (or workspace / org default) in Claude admin settings. Existing Slack app and handle stay.
- CLI **v2.1.300**: Tag supports **Slack Connect** channels; connector actions that need approval show a **private** Allow once / Deny card in the thread; Slack **voice clips** are transcribed and used as the prompt. Contrast: channels (`claude-code-channels`) keep work on your machine. Routines can post via Slack **connectors** without a mention (`claude-code-routines`).

## Sources

- [Claude Code in Slack](https://code.claude.com/docs/en/slack) — accessed 2026-10-14
- [Claude Tag](https://code.claude.com/docs/en/claude-tag) — accessed 2026-10-14
- [CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-14
- [Use Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-10-14
