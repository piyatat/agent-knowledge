---
id: claude-code-remote-control
title: Claude Code Remote Control — steer a local session from phone or browser
tags: [claude, ux, session, security]
status: active
updated: 2026-09-10
when_to_use: Connecting claude.ai/code or the Claude mobile app to a local CLI/VS Code session, or contrasting it with Claude Code on the web
---

## Summary

**Remote Control** attaches claude.ai/code or the Claude iOS/Android app to a **local** Claude Code process. Execution, filesystem, MCP, and project config stay on your machine; the remote UI is a window into that session. Not Claude Code on the web (cloud sandbox), not Slack `@Claude` (spawns a web session), and not Cursor Cloud Agents.

## Notes

- Requirements: Pro / Max / Team / Enterprise **claude.ai login** — API keys, `setup-token` / `CLAUDE_CODE_OAUTH_TOKEN`, Bedrock / Vertex / Foundry, custom `ANTHROPIC_BASE_URL`, or an enterprise apps gateway are unsupported (custom base URL blocked since v2.1.196). Team/Enterprise: Owner enables the admin toggle (off by default). `DISABLE_TELEMETRY`, `DO_NOT_TRACK`, `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`, and `DISABLE_GROWTHBOOK` all disable the eligibility check. Workspace trust must already be accepted (not home dir). Org `disableRemoteControl` or Zero Data Retention / HIPAA blocks it.
- Start: `claude remote-control` (server; QR via spacebar; `--spawn same-dir|worktree|session`, `--capacity`, `--continue` / `--session-id` to resume ~4h after Ctrl+C), `claude --remote-control` / `--rc` (interactive + remote), or `/remote-control` from an existing CLI/VS Code session. Auto-connect: `/config` “Enable Remote Control for all sessions” or user/managed `remoteControlAtStartup: true`. Project settings may set `false` only — a checked-in `true` is ignored.
- Traffic is **outbound HTTPS** to Anthropic (no inbound ports). Transcript syncs through Anthropic servers while connected; execution stays local. Trusted Devices (Team/Enterprise beta): enroll per device + sign-in ≤18h, refreshed with Face ID / Touch ID / Windows Hello / passkey — biometrics stay on-device.
- Remote can send prompts, images/files, stop subagents/workflows, pick `/model` and `/effort` (v2.1.234+), and see git diffs (v2.1.247+ beyond server mode). Local-only: `/plugin`, `/resume`, and most pickers. Text forms of `/compact`, `/clear`, `/mcp reconnect|enable|disable`, `/model <id>`, `/effort <level>` work from mobile/web. Closing the local process takes the session offline; keep SSH sessions in tmux/screen.
- Contrast: web sessions run in Anthropic’s cloud; Slack `@Claude` coding intent also creates a **web** session. Channels push Telegram/Discord/iMessage into a **local** session. Dispatch from the mobile app can spawn a Desktop session.

## Sources

- [Remote Control](https://code.claude.com/docs/en/remote-control) — accessed 2026-09-10
- [Run agents in parallel](https://code.claude.com/docs/en/agents) — accessed 2026-09-10
- [Claude Code in Slack](https://code.claude.com/docs/en/slack) — accessed 2026-09-10
