---
id: minimax-code
title: MiniMax Code — desktop app, mcode CLI, AGENTS.md, MCP, ACP
tags: [minimax, cli, mcp, agents-md]
status: active
updated: 2026-09-26
when_to_use: Running MiniMax Code (desktop or mcode CLI), or authoring AGENTS.md / MCP / plugins for it
---

## Summary

**MiniMax Code** is MiniMax’s coding agent: a desktop app plus the open-source **`mcode`** CLI (MIT first-party code; `@minimax-ai/code`). Project rules are **`AGENTS.md`** (`mcode init`). MCP lives in `~/.minimax/mcp.json`. IDE embedding is **`mcode acp`**. Desktop-only: built-in browser, Computer Use, remote control, IM. Not Kimi Code (`kimi-code`) and not Gemini CLI (`gemini-cli-mcp`).

## Notes

- Install CLI: `curl -fsSL https://filecdn.minimax.chat/public/install.sh | bash` or `npm i -g @minimax-ai/code` (Node 22.19+ / 24–26). Windows: `irm https://filecdn.minimax.chat/public/install.ps1 | iex`. `mcode login` (mainland) or `--region global`. Data root `~/.minimax` (`MINIMAX_DATA_DIR`). `mcode [prompt]`, `--continue`, `--session [id]`, `mcode exec`, `mcode init .` (writes/updates `AGENTS.md`).
- TUI: Plan Mode (`Shift+Tab` / `/plan`) is **independent** of permission Ask / Auto / Full (`Alt+M` / `/permission`). `/goal` is a long-lived objective with optional token budget. `/btw` or `/side` is a temporary side chat (tools that mutate still confirm, even in Full). `/skills`, `/mcp`, `/plugins`, `/doctor`. Providers: Token Plan, MiniMax API key (`MCODE_PROVIDER_API_KEY`), or custom `anthropic-messages` / `openai-completions` / `openai-responses`.
- Headless: `mcode exec` (`--permission smart|full|off`; no `ask`). `--cwd`, `--timeout`, `--max-steps`, `--output-format json|stream-json`, `--output-schema`, `--prompt-mode tui|coding|work`, `--effort`. Pending questionnaires fail instead of auto-approving. ACP: `mcode acp` (stdout is protocol-only; logs on stderr).
- MCP (desktop + CLI inspect): stdio, `http`, Streamable HTTP, SSE. Local file `~/.minimax/mcp.json`. Plugins ship `*.mcp.json` + `skills/<name>/SKILL.md` from `.minimax-plugin/plugin.json` (plugin MCP has no `http` alias — use `streamable-http`). Large tool catalogs can be searched on demand. Treat MCP/plugin text as untrusted (`mcp-server-trust-failures`).

## Sources

- [Welcome to MiniMax Code](https://agent.minimax.io/docs/code/welcome) — accessed 2026-09-26
- [CLI quick start](https://agent.minimax.io/docs/cli/quick-start) — accessed 2026-09-26
- [CLI features](https://agent.minimax.io/docs/cli/features) — accessed 2026-09-26
- [CLI configuration](https://agent.minimax.io/docs/cli/configuration) — accessed 2026-09-26
- [Headless and CI](https://agent.minimax.io/docs/cli/automation) — accessed 2026-09-26
- [Security and permissions](https://agent.minimax.io/docs/cli/security) — accessed 2026-09-26
- [MCP Servers](https://agent.minimax.io/docs/code/agents/mcp) — accessed 2026-09-26
- [Plugin Marketplace](https://agent.minimax.io/docs/code/agents/plugins) — accessed 2026-09-26
