---
id: openai-codex-mcp
title: Codex MCP — config.toml servers vs deprecated mcp-server
tags: [openai, mcp, config, auth]
status: active
updated: 2026-09-16
when_to_use: Adding stdio or HTTP MCP to Codex, or replacing a codex mcp-server integration
---

## Summary

Codex stores MCP in **`config.toml`**: user `~/.codex/config.toml` or trusted-project `.codex/config.toml`. Each server is `[mcp_servers.<name>]`. `codex mcp add|list|login|remove` writes the user file. **`codex mcp-server` (Codex-as-MCP) is deprecated** — use the SDK / app-server (`openai-codex-sdk`).

## Notes

- Names may include `:`, `@`, `/`, and `.` (package-style) in CLI commands and auth (Codex 0.152.0). Stdio: `command` + optional `args`, `cwd`, `env`, `env_vars` (whitelist extra parent vars; `source = "remote"` only with the experimental remote executor). HTTP: `url` plus `bearer_token_env_var`, `http_headers`, `env_http_headers`, optional `http_headers_helper` (local command printing JSON headers; refresh once after same-origin 401/403). `codex mcp login <name>`.
- Policy: `enabled`, `required` (fail startup if init fails), `enabled_tools` then `disabled_tools`, `default_tools_approval_mode` = `auto` | `prompt` | `writes` (prompt unless the tool is read-only) | `approve`, per-tool `[mcp_servers.<name>.tools.<tool>] approval_mode` and `output_token_limit`. Timeouts: `startup_timeout_sec` (default 10) / `tool_timeout_sec` (default 60). Optional servers wait `mcp_optional_startup_grace_ms` (default 1000; `0` waits the full startup timeout).
- `experimental_environment = "remote"` starts **stdio** through a remote executor; streamable HTTP remote placement is not implemented. Project `.codex/config.toml` loads only for **trusted** projects.
- Plugin-bundled servers: `[plugins."<id>".mcp_servers.<name>]` toggles enablement and approval without editing the plugin (`openai-codex-plugins`). OAuth supports CIMD and DCR; a configured `client_id` skips registration. Do not put secrets in committed TOML — use env vars / OAuth.
- This is Codex-as-client. Cursor/Claude MCP files (`.cursor/mcp.json`, `.mcp.json`) are not read. ChatGPT web uses plugin-bundled remote MCP, not local `config.toml`.

## Sources

- [Model Context Protocol (Codex)](https://developers.openai.com/codex/mcp) — accessed 2026-09-16
- [Configuration Reference](https://developers.openai.com/codex/config-reference) — accessed 2026-09-16
- [Command line options](https://developers.openai.com/codex/cli/reference) — accessed 2026-09-05
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-09-16
