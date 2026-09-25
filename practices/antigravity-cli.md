---
id: antigravity-cli
title: Google Antigravity — AGENTS.md, skills, MCP
tags: [antigravity, gemini, cli, mcp]
status: active
updated: 2026-09-25
when_to_use: Configuring Antigravity (2.0 / CLI / IDE) rules, skills, or MCP instead of Gemini CLI settings.json
---

## Summary

**Antigravity** is Google’s coding-agent surface (Antigravity 2.0, **Antigravity CLI** `agy`, Antigravity IDE). Always-on rules are **`AGENTS.md` / `GEMINI.md`** plus `.agents/rules/`. Skills are `.agents/skills/`. MCP is `mcp_config.json` with **`serverUrl`** for remotes. Successor path for some Gemini CLI accounts (`gemini-cli-gemini-md`) — do not assume `~/.gemini/settings.json` MCP keys still apply.

## Notes

- Rules are cumulative; more specific directory wins on conflict. Walk-up from the file being edited: `<dir>/AGENTS.md` or `GEMINI.md`, `<dir>/.agents/AGENTS.md`, `<dir>/.agents/rules/*.md` (legacy `.agent/rules/`). Global always-on: `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`. Modular global: `~/.gemini/config/rules/*.md` (frontmatter required). CLI also loads `~/.gemini/antigravity-cli/rules/` and plugin `~/.gemini/antigravity-cli/plugins/<name>/rules/`.
- `AGENTS.md` / `GEMINI.md`: no frontmatter, `always_on` for that directory. `.agents/rules/*.md` **must** start with `trigger:` `always_on` | `model_decision` | `glob` | `manual` (snake_case). Missing/invalid trigger → silent drop. Only immediate `rules/*.md` children scan; nest via `.agents/rules.json` `inherits` / `entries`. Caps: **24 KB** per file (after `@[label](path)` includes); **20k-token** aggregate for global/`always_on` (overflow demoted to pointers). `@file` is a path mention, not an include.
- Skills: workspace `<root>/.agents/skills/<name>/SKILL.md` (legacy `.agent/skills`). Global: 2.0/IDE `~/.gemini/config/skills/`; CLI `~/.gemini/antigravity-cli/skills/` plus plugin skills. `description` required; `name` defaults to folder. Progressive disclosure; CLI also exposes `/<name>`. `agy plugin list|install`.
- MCP: `/mcp` overlay. Global `~/.gemini/config/mcp_config.json`; workspace `.agents/mcp_config.json`. Remote SSE/HTTP/WebSocket **require `serverUrl`** — `url` / `httpUrl` are rejected. Unconfigured MCP tools default to Ask. Treat MCP/skill/rule text as untrusted (`mcp-server-trust-failures`).

## Sources

- [Rules](https://antigravity.google/docs/rules/) — accessed 2026-09-25
- [Agent Skills](https://antigravity.google/docs/skills/) — accessed 2026-09-25
- [MCP](https://antigravity.google/docs/mcp/) — accessed 2026-09-25
- [MCP in Antigravity CLI](https://antigravity.google/docs/cli/mcp/) — accessed 2026-09-25
