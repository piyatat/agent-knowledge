---
id: openclaw-agent
title: OpenClaw — Gateway, workspace files, skills, Code Mode
tags: [openclaw, cli, skills, agents-md]
status: active
updated: 2026-10-03
when_to_use: Installing or hardening OpenClaw (Gateway, AGENTS.md/SOUL.md, ClawHub skills), or contrasting its Code Mode with MCP code-mode
---

## Summary

**OpenClaw** is a local **Gateway** plus Control UI / TUI / channels (Telegram, Slack, Discord, WhatsApp, …) that runs one or more agents against a workspace. Default bind is loopback (`:18789`). It reuses a Claude Code or Codex login when present. Not Cursor Cloud Agents (`cursor-cloud-always-on`), not Claude Code Desktop (`claude-code-desktop`), and not OpenAI Codex Code Mode (`code-mode-tool-orchestration`).

## Notes

- Install: `npx openclaw@latest` or the official install script; then `openclaw gateway install` (LaunchAgent / systemd user / Windows Scheduled Task) and `openclaw dashboard`. `openclaw triage` is a read-only diagnosis that can hand a sanitized prompt to Claude Code, Codex, or the built-in agent. Config/credentials live under `~/.openclaw/`; the workspace (default `~/.openclaw/workspace`) is separate and should stay private.
- Bootstrap files injected at session start: `AGENTS.md` (operating rules; its `## Tools` section is **guidance only**), `SOUL.md` (persona/boundaries), `IDENTITY.md`, optional `USER.md` (4k cap) and `MEMORY.md` (private sessions). Daily logs go in `memory/YYYY-MM-DD.md`. Caps: `bootstrapMaxChars` 20k / `bootstrapTotalMaxChars` 60k. The workspace is the default cwd, **not** a sandbox — enable `agents.defaults.sandbox` if tools must stay inside `~/.openclaw/sandboxes`.
- Skills are `SKILL.md` folders. Precedence: workspace `skills/` → `.agents/skills` → `~/.agents/skills` → `~/.openclaw/skills` → workshop/bundled → `skills.load.extraDirs`. `openclaw skills install` writes workspace `skills/` (`--global` for managed). **ClawHub** is the community catalog — treat it as a marketplace (`malicious-skills-supply-chain`).
- Code Mode (Labs) hides most tool schemas and exposes `exec`/`wait` so the model writes JS that calls the catalog. Default `"auto"`; `node:vm` is **not** a security boundary — use `quickjs` for harder isolation. Headless CI: `openclaw agent exec` (timeout 600s; exit 2 on timeout).
- Security: one trusted operator/team per Gateway — not a multi-tenant boundary. Unknown DMs get a pairing code. Run `openclaw security audit` before exposing bind/auth. Channel messages and skill text are untrusted (`prompt-injection-agent-defense`).

## Sources

- [Getting started](https://docs.openclaw.ai/start/getting-started) — accessed 2026-10-03
- [Agent workspace](https://docs.openclaw.ai/concepts/agent-workspace) — accessed 2026-10-03
- [Skills](https://docs.openclaw.ai/tools/skills) — accessed 2026-10-03
- [Code Mode](https://docs.openclaw.ai/tools/code-mode) — accessed 2026-10-03
- [openclaw agent](https://docs.openclaw.ai/cli/agent) — accessed 2026-10-03
- [Security](https://docs.openclaw.ai/gateway/security) — accessed 2026-10-03
