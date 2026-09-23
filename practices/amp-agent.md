---
id: amp-agent
title: Amp — threads, orbs, MCP, AGENTS.md
tags: [amp, mcp, agents-md, orchestration]
status: active
updated: 2026-09-23
when_to_use: Using Sourcegraph Amp (web, macOS/iOS, CLI), or configuring Amp MCP / AGENTS.md / orbs
---

## Summary

**Amp** (ampcode.com / Sourcegraph) is a coding agent + environment: **threads** that move across web, macOS/iOS, and the `amp` CLI. Cloud work runs in **orbs** (per-thread machines). Multi-model by default. Not Sourcegraph’s MCP *server* (that is a search backend you can attach), not Cursor Cloud Agents, not OpenCode.

## Notes

- Surfaces share one thread store. Web starts an orb with no install. CLI runs on your machine or in a script. **Puck** launches/coordinates agents. Local `amp.mcpServers` on your laptop are **not** in an orb — commit skill `mcp.json`, commit `.amp/settings.json`, or use **remote MCP definitions** stored by ampcode.com (`amp mcp remote --personal|--workspace|--project`).
- Local MCP: `amp mcp add` or `amp.mcpServers` (`command`/`args` or `url`/`headers`, `${VAR}`). Precedence: CLI `--mcp-config` > workspace `.amp/settings.json` > `~/.config/amp/settings.json` > skills. **Workspace MCP needs `amp mcp approve`**. Prefer bundling MCP inside skills so tools stay hidden until load (`mcp-progressive-disclosure`). Remote definitions can use OAuth, bearer files (never argv secrets), or staff-gated **Workload Identity** (5-minute RS256 JWT; verify iss/aud/exp; identity is the **thread owner**).
- Remote tools with `outputSchema` are called via `code_exec`; mismatched `structuredContent` throws (`mcp-output-schema`). `AGENTS.md` in cwd/parents (to `$HOME`) always loads; subtree files load when that tree is read. Fallback `AGENT.md` / `CLAUDE.md`. Personal `~/.config/amp/AGENTS.md`; workspace Global AGENTS.md is prepended and does **not** apply to subagents/Puck. `@file` mentions and `globs` frontmatter scope extra docs.

## Sources

- [Amp manual](https://ampcode.com/manual) — accessed 2026-09-23
- [Amp MCP](https://ampcode.com/docs/customize/mcp) — accessed 2026-09-23
- [Amp AGENTS.md](https://ampcode.com/docs/markdown/customize/agents-md) — accessed 2026-09-23
- [Sourcegraph MCP client integrations](https://sourcegraph.com/docs/api/mcp/client-integrations) — accessed 2026-09-23
