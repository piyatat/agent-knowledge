---
id: claude-code-slack
title: Claude Code in Slack — @Claude web sessions vs Claude Tag
tags: [claude, slack, orchestration, ux]
status: active
updated: 2026-09-11
when_to_use: Setting up @Claude in Slack, or choosing the earlier per-user Slack app vs Claude Tag
---

## Summary

**Claude Code in Slack** turns `@Claude` in a channel/thread into a **Claude Code on the web** session (GitHub clone, your plan limits). Team/Enterprise are moving to **Claude Tag** (org-shared `@Claude` with admin-configured access). Pro/Max keep this earlier per-user path. Not channels (push into a **local** session), not Remote Control, not Cursor Slack (`cursor-slack-cloud-agents`).

## Notes

- Prerequisites: Pro / Max / Team / Enterprise with Claude Code; web enabled; GitHub connected on claude.ai/code; Slack account linked in the Claude App Home. Workspace admin installs the Slack app; users `/invite @Claude` per channel. **Channels only — no DMs.**
- Routing (App Home): **Code only** sends every @mention to a web coding session. **Code + Chat** classifies; use Retry as Code / retry as Chat when it guesses wrong. Thread mentions get the full thread; channel mentions use recent messages. Treat the conversation as trusted — Claude may follow other messages in context.
- Flow: detect coding intent → create claude.ai/code session → Slack status updates → completion @mention with View Session / Create PR / Change Repo. One PR per session. GitHub only. Sessions appear in your web history; Team/Enterprise Slack-started sessions are org-visible.
- Access: each user runs under their own Claude account and repos they personally connected. First-use “Claude Code is not enabled” means that user has no cloud environment yet — finish web onboarding. Admins control install / Grid distribution / which channels get the bot.
- **Claude Tag** (Team/Enterprise): `@Claude` is the org identity; channel environments must be **organization-shared**, not a personal claude.ai/code environment, or sessions fail immediately. Existing Slack app and handle stay; ask the Anthropic account team for the cutover date. Setup docs live on claude.com.
- Contrast: channels (`claude-code-channels`) keep work on your machine. Routines can post via Slack **connectors** without a mention (`claude-code-routines`).

## Sources

- [Claude Code in Slack](https://code.claude.com/docs/en/slack) — accessed 2026-09-11
- [Claude Tag](https://code.claude.com/docs/en/claude-tag) — accessed 2026-09-11
- [Use Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-09-11
