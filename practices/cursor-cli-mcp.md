---
id: cursor-cli-mcp
title: Cursor CLI MCP — agent mcp and /mcp
tags: [cursor, mcp, cli, auth]
status: active
updated: 2026-09-10
when_to_use: Enabling, logging into, or listing MCP servers from the Cursor CLI (agent mcp / /mcp), vs editing mcp.json
---

## Summary

Cursor CLI (`agent`) uses the **same `mcp.json` merge** as the editor (`cursor-mcp-json`): project → global → nested parents; same name → project wins. Manage live state with `agent mcp` or interactive `/mcp` — list, list-tools, login, enable, disable — without leaving the session. Cloud Agents do **not** read these files (`cursor-cloud-mcp-http-vs-stdio`). MCP is for tools the agent calls; ACP is for a custom client talking **to** the CLI (`cursor-acp-extensions`).

## Notes

- `agent mcp list` / `/mcp list`: interactive pager — name, connected/disconnected, project vs global, transport (stdio, HTTP, SSE). `/mcp` also opens per-server detail: tool schemas, login, logout (clears stored OAuth), enable, disable. Names with spaces work. Duplicate remote configs across user + project scopes collapse to one instance; pick the winning scope from the server’s Configure Scope tab (saved per project).
- `agent mcp list-tools <id>` / `/mcp list-tools <id>`: names, descriptions, required/optional params. `agent mcp login <id>`: OAuth with automatic callback; tools are available immediately after. Known-host login (e.g. Slack) uses default auth to avoid DCR failures. `enable` adds the server to the local approved list; `disable` stops load and approval prompts.
- Headless: `agent -p "…"` auto-discovers configured servers. `agent --approve-mcps` skips approval prompts (pair with a sandbox / deny list — `cursor-cli-headless`, `permission-modes-allow-ask-deny`). Global `~/.cursor/mcp.json` servers load without per-workspace prompts; **project** servers still need approval. Approval UI hides secrets in URLs. Team admin tool controls: empty/unset allowlists should not break MCP.
- Editor-provided MCP servers over ACP (Zed and others) load instead of being dropped. Plugin reload refreshes the MCP lease so tools do not stick on “Not connected”. Quitting the CLI should not wait on MCP teardown. This is not Cloud Agent team MCP (dashboard / HTTP vs stdio).

## Sources

- [Cursor CLI MCP](https://cursor.com/docs/cli/mcp) — accessed 2026-09-10
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-09-10
- [CLI slash commands](https://cursor.com/docs/cli/reference/slash-commands) — accessed 2026-09-10
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-09-10
