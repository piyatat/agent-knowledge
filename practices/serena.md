---
id: serena
title: Serena — symbol-level tools for coding agents
kind: tool
tags: [serena, mcp, lsp, editing]
status: active
updated: 2026-11-17
when_to_use: Giving a coding agent symbol-level search and edit over MCP instead of only grep and line edits
---

## Summary

**Serena** (Oraios, package `serena-agent`) is an MCP server that gives a coding agent IDE-like tools: symbol retrieval, edits, refactoring, and debugging, over language servers or the Serena JetBrains plugin. The LLM still plans the work. Clients include Claude Code, Codex, Gemini CLI, Cursor, and other MCP hosts.

## Notes

- **Install.** Requires uv on `PATH`. `uv tool install -p 3.13 serena-agent`, then `serena init` (language servers) or `serena init -b JetBrains`. Upgrade with `uv tool upgrade serena-agent`. `uvx --from git+https://github.com/oraios/serena` runs the git tip; prefer the installed tool so every commit does not resync. Some languages need extra dependencies; the LSP backend can download pinned language servers into Serena-managed directories.
- **How a client starts it.** Stdio is the default: the client launches `serena start-mcp-server`. HTTP: `--transport streamable-http --port <port>` and connect to `http://localhost:<port>/mcp` (localhost only unless you set `--host`). One HTTP process has **one active project**. Use stdio when several agents work in different repos. `--project-from-cwd` walks up to the nearest `.serena/project.yml` or `.git`; a nested worktree wins over an ancestor project. `serena setup claude-code` writes the Claude Code MCP entry. Pass `--context ide` for terminal agents that already have their own shell and file tools.
- **Project config.** `serena project create` writes `.serena/project.yml` (name, languages, encoding, ignore rules, initial prompt, tools and modes, optional activation command). `project.local.yml` overrides it and is gitignored by default. The dashboard (on by default, `http://localhost:24282/dashboard/index.html`, or the next free port) can edit that config and shut the server down.
- **Auth.** There is no Serena account. The process runs as the user who launched it and can run shell commands and edit files. Trust (v1.6.0) matches the project root against `trusted_project_path_patterns` and gates repository-supplied extras (commands, dependency acquisition, paths outside the root). An untrusted project is **not** sandboxed: after the agent acts, shell and file tools still apply.
- **Alternatives.** The host’s own LSP tools when they already exist (`claude-code-lsp`, `github-copilot-lsp`). JetBrains as the editor agent when you want the IDE’s assistant (`jetbrains-ai-assistant`) rather than an MCP sidecar.
- **Caveats.** The REPL executes submitted Python in the Serena process; excluding a tool or `read_only` does not stop that code from doing what the process can do. Dashboard, HTTP MCP, the JetBrains plugin server, and the optional project server bind to localhost until you change them. Language-server downloads are pinned and hash-checked; npm-based servers still use **your** npm config. Oraios’s own guidance is to sandbox the process when you do not trust the client or the repo (`mcp-local-server-security`).

## Sources

- [About Serena](https://oraios.github.io/serena/01-about/000_intro.html) — accessed 2026-11-17
- [Installation](https://oraios.github.io/serena/02-usage/010_installation.html) — accessed 2026-11-17
- [Running Serena](https://oraios.github.io/serena/02-usage/020_running.html) — accessed 2026-11-17
- [Connecting your MCP client](https://oraios.github.io/serena/02-usage/030_clients.html) — accessed 2026-11-17
- [The project workflow](https://oraios.github.io/serena/02-usage/040_workflow.html) — accessed 2026-11-17
- [Security considerations](https://oraios.github.io/serena/02-usage/070_security.html) — accessed 2026-11-17
