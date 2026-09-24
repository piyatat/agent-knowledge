---
id: devin-cli
title: Devin CLI — local agent, /handoff, MCP, plugins
tags: [devin, cli, mcp, agents-md]
status: active
updated: 2026-09-24
when_to_use: Running Cognition Devin in the terminal, handing a session to Devin Cloud, or configuring .devin MCP / plugins / AGENTS.md
---

## Summary

**Devin CLI** is Cognition’s local coding agent (Rust). Same session can **`/handoff`** to **Devin Cloud**. Extensibility lives under **`.devin/`**. Not Cascade’s legacy MCP file (`windsurf-cascade`) and not Cursor CLI persist (`cursor-cli-persist`). ACP hosts (Zed, JetBrains, Xcode) can run it as an external agent.

## Notes

- Surfaces: local terminal (`devin`, `devin -p` for CI), Devin Desktop, Devin Cloud. `/handoff` continues with the same context; pick up in the web app or Desktop. Modes include `/plan`, `/ask` (read-only), `/loop` (implement + auto-review), `/sandbox` fail-closed isolation, Fusion (frontier lead + cheaper sidekick). Permission modes: Normal, Accept Edits, Smart, Bypass, Autonomous.
- Project layout: `.devin/config.json` (shared permissions / `read_config_from`), `.devin/config.local.json` (gitignored), `.devin/mcp_config.json` + `.devin/mcp_config.local.json`, `hooks.v1.json`, `.devin/skills/`, `.devin/agents/`. User dir: `~/.config/devin/` (Windows `%APPDATA%\devin\`). Since v3000.3, MCP moved out of `config.json`; leftover `mcpServers` keys migrate on startup.
- **AGENTS.md** loads as always-on rules (also `AGENT.md` / `CLAUDE.md`). Default import from Cursor rules, Windsurf rules, `.claude/`, Copilot skills, OpenCode/Zed MCP — toggle `read_config_from`.
- MCP: `devin mcp add` (default scope **local** / gitignored). stdio or URL → Streamable HTTP with SSE fallback on non-auth 4xx. `devin mcp login` is **per client** (Windsurf/Claude tokens do not transfer). Tools are `mcp__<server>__<tool>`; prompts become `/mcp__<server>__<prompt>`. Enterprise allowlists can block a configured server.
- Plugins: `devin plugins install owner/repo` (or git URL / `--local` folder). Format: `.devin-plugin/plugin.json`, else Claude `.claude-plugin/plugin.json`, else Agent Plugins 1.0 root `plugin.json`. Plugin MCP must not embed client secrets. Plugin subagents/hooks are **local-only** (CLI/Desktop); hooks fail open. Treat plugin/MCP text as untrusted (`malicious-skills-supply-chain`).

## Sources

- [Devin CLI](https://devin.ai/cli) — accessed 2026-09-24
- [Devin CLI: Start Local, Hand Off to the Cloud](https://cognition.com/blog/devin-for-terminal) — accessed 2026-09-24
- [Extensibility overview](https://docs.devin.ai/cli/extensibility) — accessed 2026-09-24
- [Devin CLI plugins](https://docs.devin.ai/cli/extensibility/plugins/overview) — accessed 2026-09-24
- [MCP overview](https://docs.devin.ai/cli/extensibility/mcp/overview) — accessed 2026-09-24
- [MCP configuration](https://docs.devin.ai/cli/extensibility/mcp/configuration) — accessed 2026-09-24
- [AGENTS.md (Devin)](https://docs.devin.ai/onboard-devin/agents-md) — accessed 2026-09-24
