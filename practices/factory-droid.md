---
id: factory-droid
title: Factory Droid — CLI, App, skills, custom droids
tags: [factory, cli, skills, agents-md]
status: active
updated: 2026-11-08
when_to_use: Running Factory’s Droid (CLI, desktop/web App, droid exec), or authoring AGENTS.md / .factory skills, hooks, or custom droids
---

## Summary

**Factory Droid** is Factory.ai’s coding agent (App, CLI TUI, web/mobile, `droid exec`). Same runtime everywhere. **Not** Cursor Factory / Rollouts (that is a different Cursor product). Not OpenHands (`openhands-agent`) and not Amp (`amp-agent`). CLI/Desktop **v1.6.0** (2026-11-07).

## Notes

- Interactive: `droid` (slash commands, approvals, `!` bash mode). Headless: `droid exec "task"` with `--auto low|medium|high` (default is read-only recon). `--skip-permissions-unsafe` only in disposable sandboxes. `--worktree`, `--mission`, `--output-format json` exist. Missions = multi-agent workflows (`/missions` or `droid exec --mission`).
- Instructions: root **`AGENTS.md`** (also `agents.md` / `CLAUDE.md` compatibility). Nested files apply to a subtree. Also reads `.factory/`, `.agents/`, `.agent/`, and `~/.factory`. `DESIGN.md` is a separate always-on design channel. Caps: 80k chars initial AGENTS load, 40k on later Read-path discovery — keep files short (`agents-md-and-rules-budget`).
- Skills: `.factory/skills/<name>/SKILL.md` (also `~/.factory/skills`, `.agents/skills`, plugin skills). Slash `/skill-name` or agent pick. `allowed-tools` is **not** an enforcement boundary — use a **custom droid** (`.factory/droids/*.md`) with a tool policy. Hooks: `.factory/hooks.json` (command hooks on lifecycle/tool matchers). MCP: `droid mcp add` / `/mcp`. Plugins bundle commands, droids, skills, hooks. Treat MCP/plugin/skill text as untrusted (`malicious-skills-supply-chain`).
- **Side chat (v1.6.0):** `/side` opens Side Chat, matching `/btw <question>` (side question, not the main transcript). Highlight a response → **Ask side chat** quotes it. Side chat sees in-progress work, shows live tool calls, and can stop/clear one question. Not Cursor `/side` (`cursor-side-chats`).
- **Automations:** schedule, Slack message, GitHub event, or inbound webhook. Run on a Droid Computer, the desktop app, GitHub Actions, or a **Ready Environment** (each Environment-backed run is a **fresh** instance). v1.5.0 New automation: Create from template, Create with Droid, or Create manually. Starters include Ticket to PR, PR Reviewer, CI Failure Triage, Review Comment Fixer. Workstream automations deliver results back to the orchestrator session. New Session only lists Environments the org computer policy allows.

## Sources

- [Welcome to Factory](https://docs.factory.ai/) — accessed 2026-09-23
- [Droid CLI overview](https://docs.factory.ai/droid-cli/overview) — accessed 2026-09-23
- [Droid CLI reference](https://docs.factory.com/droid-cli/cli-reference) — accessed 2026-11-08
- [Factory AGENTS.md](https://docs.factory.ai/harness/agents-md) — accessed 2026-09-23
- [Factory Skills](https://docs.factory.ai/harness/skills) — accessed 2026-09-23
- [Factory custom droids](https://docs.factory.ai/harness/subagents) — accessed 2026-09-23
- [Full Changelog](https://docs.factory.com/changelog/release-notes) — accessed 2026-11-08
- [Custom Automations](https://docs.factory.com/automations/custom) — accessed 2026-11-08
- [Workstream Automations](https://docs.factory.com/workstreams/automations) — accessed 2026-11-08

