---
id: gemini-cli-gemini-md
title: Gemini CLI GEMINI.md — hierarchical context files
tags: [gemini, memory, agents-md, context]
status: active
updated: 2026-09-06
when_to_use: Authoring GEMINI.md, importing context with @file.md, or pointing Gemini CLI at AGENTS.md
---

## Summary

Gemini CLI **context files** default to **`GEMINI.md`**. The CLI concatenates every discovered file and sends that bundle with **every prompt**. This is always-on memory, not on-demand Skills (`gemini-cli-skills`) and not MCP tools (`gemini-cli-mcp`).

## Notes

- Load order: (1) global `~/.gemini/GEMINI.md`; (2) workspace / parent `GEMINI.md` under configured workspace dirs; (3) **JIT** — when a tool touches a file or directory, scan that path’s ancestors up to a trusted root. Footer shows how many context files are loaded.
- Inspect with `/memory show` (full concatenated text) and `/memory reload` (re-scan). Modularize with `@./file.md`, `@../shared.md`, or absolute `@/path`. Imports are path-checked to block circular imports and files outside allowed dirs (`memport`).
- Rename via `settings.json` `context.fileName` (string or list), e.g. `["AGENTS.md", "GEMINI.md"]` so one portable file feeds Gemini (`agents-md-open-format`). Do not duplicate the same rules across GEMINI.md / CLAUDE.md / AGENTS.md.
- Filtering: `.geminiignore` (and `.gitignore` when `context.fileFiltering.respectGitIgnore` is true) drops automatic discovery; an explicit `@.env` still loads. Ignore files are hygiene, not a permission boundary (`workspace-mount-boundaries`).
- Keep the always-on body short (`agents-md-and-rules-budget`). Put long procedures in Skills. Unpaid / Google One: Gemini CLI is slated to be replaced by **Antigravity CLI** for some accounts — verify the current binary before a long-lived GEMINI.md library.

## Sources

- [Provide context with GEMINI.md files](https://geminicli.com/docs/cli/gemini-md/) — accessed 2026-09-06
- [Memory Import Processor](https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/memport.md) — accessed 2026-09-06
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-06
