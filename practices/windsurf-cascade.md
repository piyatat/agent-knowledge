---
id: windsurf-cascade
title: Windsurf / Devin Desktop Cascade — AGENTS.md, rules, MCP
tags: [windsurf, mcp, agents-md, rules]
status: active
updated: 2026-10-03
when_to_use: Configuring Cascade or Devin Desktop rules/MCP, or distinguishing Cascade from Devin Local, CLI, Spaces, and ACP agents
---

## Summary

**Cascade** is the Windsurf / Devin Desktop built-in coding agent. **AGENTS.md** (or `agents.md`) feeds the same Rules engine as `.devin/rules/` (legacy `.windsurf/rules/`): root = always-on system prompt; nested = auto-glob `dir/**`. **Devin Local** is the default for new tabs and uses **Devin CLI** config for MCP (`devin-cli`) — do not assume Cascade `mcp_config.json` applies to it. Third-party agents in the same IDE are an **ACP** host concern (`devin-desktop-acp`). Not Cursor rules (`cursor-rules-layers`).

## Notes

- Product rename: Cognition ships **Devin Desktop** as the next Windsurf. The Agent Command Center (Kanban of local Cascade + cloud Devin) and **Spaces** (shared session/PR/file context; `devin.spaces.shareContext`) are Desktop surfaces, not Cascade config. Restricted Mode disables Cascade, Devin Local, ACP agents, and hooks.
- AGENTS.md discovery: workspace + parents up to the git root; case-insensitive. No frontmatter. Prefer directory-specific files; don’t repeat root text. Rules (frontmatter activation: always / glob / model_decision / manual) are better for cross-cutting logic. Global Cascade rules: `~/.codeium/windsurf/memories/global_rules.md` (6k chars, always-on). Workspace rule files: 12k chars. Enterprise system rules are OS-path, read-only.
- **Legacy Cascade MCP** (`mcp_config.json`): macOS/Linux `~/.config/devin/mcp_config.json` (or `$XDG_CONFIG_HOME/devin/`); Windows `%APPDATA%\devin\`. Older docs also mention `~/.codeium/windsurf/mcp_config.json` — confirm the path your build opens from the Cascade panel. Transports: stdio, Streamable HTTP (`serverUrl`/`url` + headers), SSE; OAuth supported. **100-tool cap**. `disabledTools` per server. Interpolation: `${env:VAR}`, `${file:~/path}` (missing env → empty; unreadable file left literal). Cascade has **no marketplace** — Devin Local does.
- Teams: allowlisting **any** server ID blocks all others (ID is the `mcpServers` key). Allowlist can be ID-only, exact command/args, or regex (anchored). `env` is not regex-matched. Custom MCP registries replace the Devin Local marketplace only. Treat MCP output as untrusted (`mcp-server-trust-failures`).

## Sources

- [AGENTS.md (Cascade / Devin Desktop)](https://docs.windsurf.com/windsurf/cascade/agents-md) — accessed 2026-09-22
- [Devin CLI extensibility](https://docs.devin.ai/cli/extensibility) — accessed 2026-09-24
- [Cascade MCP configuration](https://docs.windsurf.com/windsurf/cascade/mcp) — accessed 2026-09-22
- [Cascade memories / rules (pt-BR, same product)](https://docs.windsurf.com/pt-BR/windsurf/cascade/memories) — accessed 2026-09-22
- [Agent Command Center](https://docs.devin.ai/desktop/agent-command-center) — accessed 2026-10-03
- [Spaces](https://docs.devin.ai/desktop/spaces) — accessed 2026-10-03
- [Windsurf is now Devin Desktop](https://devin.ai/blog/windsurf-is-now-devin-desktop) — accessed 2026-10-03

