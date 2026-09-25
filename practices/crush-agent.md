---
id: crush-agent
title: Crush — Charm terminal agent, context files, MCP
tags: [crush, cli, mcp, agents-md]
status: active
updated: 2026-09-25
when_to_use: Running Charm Crush in a repo, or configuring crush.json context paths and MCP
---

## Summary

**Crush** is Charm’s multi-provider terminal coding agent (`crush`). Project instructions are **context files** (default init writes **`AGENTS.md`**). MCP lives in `crush.json`. LSP-aware. Not Warp (`warp-agent`) and not OpenCode (`opencode-agent`).

## Notes

- Install: `brew install charmbracelet/tap/crush`, `npm i -g @charmland/crush`, or `go install github.com/charmbracelet/crush@latest`. Run from the project directory. Provider keys via env (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, `OPENROUTER_API_KEY`, …) or first-run prompt. `Ctrl+M` / `/models` switches models mid-session. Sessions are per-directory (`crush --session name`). Tool writes ask `[a]llow` / `[A]ll`; `--yolo` skips prompts.
- Config priority: `.crush.json` → `crush.json` (cwd) → `~/.config/crush/crush.json` (schema `https://charm.land/crush.json`). `permissions.allowed_tools` pre-approves (e.g. `view`, `ls`, `grep`). `options.context_paths` adds extra files/dirs. `crush logs` / `options.debug` → `./.crush/logs/crush.log`.
- Context files (project root, **all matches combined**, listed precedence): `.github/copilot-instructions.md`, `.cursorrules`, `.cursor/rules/`, `CLAUDE.md` / `CLAUDE.local.md`, `GEMINI.md`, `CRUSH.md` / `CRUSH.local.md`, `AGENTS.md` (any of those casings). Gitignore `*.local.md`. First-run init creates `AGENTS.md` unless a context file or `./.crush/` init flag exists; `options.initialize_as` can rename it.
- MCP (`crush.json` `mcp`): `type` `stdio` (`command`/`args`/`env`), `http` or `sse` (`url`/`headers`). `disabled`, `disabled_tools`, `timeout` (default 15s). Expand `$VAR` or `$(echo $VAR)` in headers. Built-in `list_mcp_resources` / `read_mcp_resource`. Prefer HTTP over SSE. Treat MCP output as untrusted (`mcp-server-trust-failures`).

## Sources

- [charmbracelet/crush](https://github.com/charmbracelet/crush/) — accessed 2026-09-25
- [Quick start](https://charmbracelet-crush.mintlify.app/quickstart) — accessed 2026-09-25
- [Context files](https://charmbracelet-crush.mintlify.app/guides/context-files) — accessed 2026-09-25
- [MCP configuration](https://charmbracelet-crush.mintlify.app/configuration/mcp) — accessed 2026-09-25
