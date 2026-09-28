---
id: openai-codex-import
title: Codex /import — Claude Code, Cowork, and Cursor setup
tags: [openai, cli, migration, config]
status: active
updated: 2026-09-28
when_to_use: Migrating Claude Code, Claude Cowork, or Cursor instructions/MCP/skills/chats into Codex CLI or the ChatGPT desktop app
---

## Summary

**Import** copies supported setup and recent work from another agent into Codex. The **ChatGPT desktop app** can import from Claude Code, **Claude Cowork**, or Cursor. **Codex CLI** `/import` can import from Claude Code or Cursor. Import does **not** delete or rewrite the source agent’s files. Not a live sync of secrets (`openai-codex-mcp`) and not `AGENTS.md` authorship (`openai-codex-agents-md`).

## Notes

- Desktop: Settings → Import (or General → Import other agent setup). Pick sources, then items (tools/setup, project folders, last-30-day chats). Optional **automatic updates** keep imported work in sync with the original agent; review history from the same page. A status card flags plugins or connections that still need Finish/auth.
- CLI: local TUI only — type `/import`, choose Claude Code or Cursor, pick setup / project files / chats. Unavailable while a task is running, in a **remote** session, or while connected to a local **app-server** daemon. Session discovery: up to **50** chats from the last **30** days. If both sources have importable data, the picker asks which one.
- Mapped destinations (desktop table): instruction files → `AGENTS.md`; `settings.json` → `config.toml`; skills → skills; plugins → plugins; project folders stay the same folders; Claude Code project memories → Memories; chats → ChatGPT chats; MCP → Codex MCP; hooks → Codex hooks; slash commands → skills; subagents → Codex subagents (`openai-codex-hooks`, `openai-codex-memories`, `openai-codex-skills`).
- Review before relying on the import: tool restrictions in imported skills/agents; MCP that used custom auth, headers, env, or transports (re-sign-in is common); hooks whose behavior differs after conversion; marketplaces that need a manual follow-up; prompts that depended on shell interpolation or path placeholders. Treat imported text as untrusted later context (`agent-memory-poisoning`, `prompt-injection-agent-defense`).

## Sources

- [Import from another agent](https://developers.openai.com/codex/import) — accessed 2026-09-28
- [Developer commands — /import](https://developers.openai.com/codex/cli/reference) — accessed 2026-09-28
