---
id: warp-agent
title: Warp Agent — AGENTS.md, skills, MCP, CLI
tags: [warp, mcp, agents-md, skills]
status: active
updated: 2026-09-24
when_to_use: Configuring Warp Agent (app or CLI) rules, skills, or MCP, or migrating WARP.md / third-party skill dirs
---

## Summary

**Warp Agent** is Warp’s terminal-native coding agent (app, CLI, cloud). Project rules are **`AGENTS.md`** (legacy **`WARP.md`**). Skills are `SKILL.md` folders. MCP is file- or UI-configured. Not Cursor Cloud Agents (`cursor-cloud-always-on`) and not Devin CLI (`devin-cli`). The **Warp app and Warp Agent CLI keep separate settings and MCP configs**.

## Notes

- Rules: root + cwd `AGENTS.md` apply automatically; subdirectory files are best-effort when you edit there. Filename must be all-caps. If both `WARP.md` and `AGENTS.md` exist in the same directory, **`WARP.md` wins**. Precedence: cwd project file → root project file → Global Rules (Warp Drive). `/init` can generate `AGENTS.md` or **link** `CLAUDE.md`, `.cursorrules`, `AGENT.md`, `GEMINI.md`, `.clinerules`, `.windsurfrules`, `.github/copilot-instructions.md`. CLI also loads `~/.agents/AGENTS.md`.
- Skills: YAML `name` + `description`; invoke via description match or `/{skill-name}` (`$ARGUMENTS` / `$0` placeholders). Project dirs: `.agents/skills/` (recommended), plus `.warp/`, `.claude/`, `.codex/`, `.cursor/`, `.gemini/`, `.copilot/`, `.factory/`, `.github/`, `.opencode/`. Same names under `~/`. Git repos scan cwd → repo root only. Background name resolution prefers **home (global)** then nearer-to-root project dirs.
- MCP (app): stdio (`command`/`args`/`env`/`working_directory`) or Streamable HTTP/SSE (`url`/`headers`). File-based: `~/.warp/.mcp.json` and `{repo}/.warp/.mcp.json` auto-spawn; Claude/Codex/`.agents` configs need a toggle. **Project-scoped servers never auto-spawn** (session toggle; re-approve after restart). `/agent-add-mcp` writes Warp files. Config edits require approval.
- CLI: `~/.warp_cli/.mcp.json` (macOS) only — **no project `.mcp.json`**. `/tui-migrate-setup` copies global app servers, not OAuth. `/mcp`, `/skills`. Treat MCP output and imported skills as untrusted (`mcp-server-trust-failures`, `malicious-skills-supply-chain`).

## Sources

- [Warp Agent](https://www.warp.dev/agents/warp-agent) — accessed 2026-09-24
- [Rules for agents](https://docs.warp.dev/agents/capabilities/rules/) — accessed 2026-09-24
- [Skills for agents](https://docs.warp.dev/agents/capabilities/skills/) — accessed 2026-09-24
- [Model Context Protocol (MCP)](https://docs.warp.dev/agents/capabilities/mcp/) — accessed 2026-09-24
- [Customizing the Warp Agent CLI](https://docs.warp.dev/agents/cli/configuration/) — accessed 2026-09-24
