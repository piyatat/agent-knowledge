---
id: cline-agent
title: Cline — rules, skills, MCP, and CLI
tags: [cline, skills, mcp, agents-md]
status: active
updated: 2026-09-22
when_to_use: Configuring Cline (VS Code / Desktop / CLI) rules or skills, or adding MCP via cline mcp
---

## Summary

**Cline** is an open coding agent (IDE extension, Desktop, CLI). Always-on **rules** vs on-demand **skills** (`SKILL.md`). Reads **AGENTS.md** and `~/.agents/AGENTS.md`. MCP is `mcpServers` JSON (stdio or remote). Not Continue (`continue-agents`) and not Cursor plugins.

## Notes

- Rules: workspace `.clinerules/` or `.cline/rules/` (VS Code “New rule” still writes `.clinerules/`); global `~/Documents/Cline/Rules`, `~/.cline/rules`, `~/Cline/Rules` (Windows also OneDrive Documents). Also auto-detects `.cursorrules` and `.windsurfrules`. Workspace beats global on conflict. Toggle per file. No frontmatter = always on. `paths:` globs = activate from open/visible/edited/mentioned files; `paths: []` never; invalid YAML **fails open**. Rules are context, not enforcement (`memory-files-vs-enforcement-hooks`).
- Skills: dir + `SKILL.md`; `name` must equal folder; `description` ≤1024. Progressive load (metadata / body / `docs|templates|scripts`). Trigger: description match via `use_skill`, or `/skill-name`. Workspace `.cline/skills/` (also `.clinerules/skills/`, `.claude/skills/`); global `~/.cline/skills/`. **Same name: global wins** (opposite of Kiro). Keep body under ~5k tokens (`skills-dispatch-hygiene`).
- MCP: extension settings JSON or project `.cline/mcp.json`. CLI: `cline mcp` wizard; `cline config mcp [--json]`. Omit `type` → legacy **SSE**; set `"type": "streamableHttp"` for current remote. `autoApprove` only for safe tools. Docs note MCP in CLI/SDK/Kanban; confirm IDE-host coverage for your build.
- Other project dirs: `.cline/hooks`, `agents.yaml` / `.cline/agents`, plugins, cron. `cline doctor`, `cline schedule`, `cline kanban`. Only install rules/hooks/skills/plugins you trust (`malicious-skills-supply-chain`).

## Sources

- [Cline skills](https://docs.cline.bot/customization/skills) — accessed 2026-09-22
- [Cline rules](https://docs.cline.bot/customization/cline-rules) — accessed 2026-09-22
- [Cline MCP](https://docs.cline.bot/mcp/mcp-overview) — accessed 2026-09-22
- [Cline config layout](https://docs.cline.bot/getting-started/config) — accessed 2026-09-22
- [Cline CLI reference](https://docs.cline.bot/cli/cli-reference) — accessed 2026-09-22
