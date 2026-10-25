---
id: claude-code-remote-control
title: Claude Code Remote Control — steer a local session from phone or browser
tags: [claude, ux, session, security]
status: active
updated: 2026-10-25
when_to_use: Connecting claude.ai/code or the Claude mobile app to a local CLI/VS Code session, or contrasting it with Claude Code on the web
---

## Summary

**Remote Control** attaches claude.ai/code or the Claude iOS/Android app to a **local** Claude Code process. Execution, filesystem, MCP, and project config stay on your machine; the remote UI is a window into that session. Not Claude Code on the web (cloud sandbox), not Slack `@Claude` (spawns a web session), and not Cursor Cloud Agents.

## Notes

- Requirements: Pro / Max / Team / Enterprise **claude.ai login** — API keys, Bedrock / Vertex / Foundry, custom `ANTHROPIC_BASE_URL`, or an enterprise apps gateway are unsupported. Team/Enterprise: Owner enables the admin toggle (off by default). **v2.1.310** Enterprise **custom roles** must grant **both** cloud-sessions **and** Claude Code remote-control; missing either shows `Remote Control is disabled by your organization's policy` (Organization settings → Roles). Roles that already granted Claude Code get both on by default — turn one off to restrict. MDM `disableRemoteControl` is independent of the org toggle. HIPAA org config greys the toggle out.
- Feature flags: `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` or `DISABLE_GROWTHBOOK` still hide Remote Control. **`DISABLE_TELEMETRY` / `DO_NOT_TRACK` alone no longer do** (v2.1.283+, Desktop v2.1.304+) unless the org requires Trusted Devices. Untrusted cwd: `claude remote-control` asks `Trust? [y/N]` (never persisted in `$HOME`); non-TTY exits `Workspace not trusted`. Without an eligible login, `claude remote-control` errors; `claude --remote-control` still opens interactive and then fails Remote Control.
- Start: `claude remote-control` (server; first-run `Enable Remote Control?`; QR via spacebar; `--spawn same-dir|worktree|session`, `--capacity`, `--continue` / `--session-id`). `--sandbox` / `--no-sandbox` on the server were **removed in v2.1.300** (use settings). `claude --remote-control` / `--rc` or `/remote-control` from CLI/VS Code/Desktop. Auto-connect: `/config` or user/managed `remoteControlAtStartup: true`. Project settings may set `false` only.
- Traffic is **outbound HTTPS** to Anthropic. Transcript syncs while connected; execution stays local. Keep the machine and `claude` process up (tmux on SSH). Contrast: web sessions (`claude-code-on-the-web`) run in the cloud; Slack `@Claude` coding intent starts a **web** session. Channels inject into a **local** session.

## Sources

- [Remote Control](https://code.claude.com/docs/en/remote-control) — accessed 2026-10-25
- [Manage custom roles on Enterprise plans](https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans) — accessed 2026-10-25
- [Use Claude Code in the cloud](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-10-25
- [v2.1.310 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) — accessed 2026-10-25
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-10-25
- [Run agents in parallel](https://code.claude.com/docs/en/agents) — accessed 2026-09-10
- [Claude Code in Slack](https://code.claude.com/docs/en/slack) — accessed 2026-09-10
