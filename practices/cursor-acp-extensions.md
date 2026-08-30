---
id: cursor-acp-extensions
title: Cursor ACP — cursor/* extension methods and v1 session flow
tags: [cursor, acp, cli, ux]
status: active
updated: 2026-08-30
when_to_use: Embedding Cursor via agent acp in a custom IDE/client, or implementing cursor/* RPCs
---

## Summary

`agent acp` speaks ACP over **stdio** (newline JSON-RPC). Cursor documents a **v1** session: `initialize` → `authenticate` (`cursor_login`) → `session/new` or `session/load` → `session/prompt`. Extra UX is five **`cursor/*` methods**. Team-dashboard MCP is **not** loaded in ACP mode — only project/user `mcp.json`.

## Notes

- Pre-auth: `agent login`, `--api-key` / `CURSOR_API_KEY`, or `--auth-token` / `CURSOR_AUTH_TOKEN`. Modes match CLI: `agent`, `plan`, `ask`. Permissions: answer `session/request_permission` with `allow-once` / `allow-always` / `reject-once` or tools block.
- **Blocking** (must reply): `cursor/ask_question` (multi-choice; respond `answered` / `skipped` / `cancelled`) and `cursor/create_plan` (markdown plan + todos/phases; `accepted` / `rejected` / `cancelled`).
- **Notifications** (display only): `cursor/update_todos` (`merge` true/false), `cursor/task` (subagent types include `explore`, `browser_use`, `shell`, `computer_use`, `{ custom }`; set `agentId` to resume), `cursor/generate_image`.
- Hosts already using this: JetBrains ACP Registry, avante.nvim (`provider = "cursor"`), Zed-style stdio clients. Spawn from the project cwd so `.cursor/mcp.json` resolves.
- Do not mix this wire with ACP **v2** (`auth/login`, `session/resume`, `state_update`) unless Cursor documents a v2 advertise. See `acp-v2-session-lifecycle`.

## Sources

- [ACP (Cursor CLI)](https://cursor.com/docs/cli/acp.md) — accessed 2026-08-30
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-08-30
- [ACP protocol overview](https://agentclientprotocol.com/protocol/overview) — accessed 2026-08-30
