---
id: claude-code-channels
title: Claude Code channels — push events into a running local session
tags: [claude, webhooks, mcp, plugins]
status: active
updated: 2026-09-11
when_to_use: Enabling --channels for Telegram/Discord/iMessage, or contrasting channels with Slack, Remote Control, and routines
---

## Summary

A **channel** is an MCP plugin that **pushes** chat messages, alerts, or webhooks into an already-open local Claude Code session so Claude can react (and optionally reply on the same channel). Research preview. Not Slack `@Claude` (spawns a **web** session), not Remote Control (you steer the local session), not routines (fresh cloud run), and not a normal MCP server Claude only polls.

## Notes

- Requirements: claude.ai or Console API key auth. Unavailable on Bedrock / Agent Platform / Foundry. Official plugins (Bun): Telegram, Discord, iMessage, plus localhost **fakechat** (`http://localhost:8787`). Install from `claude-plugins-official`, configure tokens under `~/.claude/channels/<name>/.env`, restart with `claude --channels plugin:<name>@claude-plugins-official`. Being in `.mcp.json` is not enough.
- Security: sender allowlist (Telegram/Discord pair a code; iMessage self-chat bypasses, then `/imessage:access allow`). Team/Enterprise: Owner must set `channelsEnabled`; optional `allowedChannelPlugins` replaces the Anthropic list. Pro/Max skip org checks. `--channels` and `--dangerously-load-development-channels` are omitted from `--help` during preview. Protocol 2026-07-28 channel servers may fail to register if `MCP_PROTOCOL_NEGOTIATION=auto`.
- Events arrive only while the session is open — use a background/`-p` process for unattended. Inbound line shows in the terminal; the reply text appears on the other platform. Permission-relay channels can forward tool approvals to allowlisted senders (treat that as session authority). `-p` disables tools that need terminal input.
- iMessage (macOS): reads `~/Library/Messages/chat.db` (Full Disk Access) and replies via AppleScript. Discord needs Message Content Intent. Telegram uses a BotFather token.
- Contrast: `/loop` polls on a timer (`claude-code-routines`). Remote Control is you driving local from phone (`claude-code-remote-control`). Slack `@Claude` creates Claude Code on the web (`claude-code-slack`).

## Sources

- [Push events into a running session with channels](https://code.claude.com/docs/en/channels) — accessed 2026-09-11
- [Channels reference](https://code.claude.com/docs/en/channels-reference) — accessed 2026-09-11
