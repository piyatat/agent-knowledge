---
id: gemini-cli-mcp
title: Gemini CLI MCP — settings.json servers and OAuth
tags: [gemini, mcp, config, auth]
status: active
updated: 2026-09-05
when_to_use: Adding MCP to Gemini CLI, or debugging trust / OAuth / env redaction
---

## Summary

Gemini CLI MCP is configured in **`settings.json`** (`mcpServers` + global `mcp`), not Cursor `mcp.json` or Claude `.mcp.json`. Transports: stdio (`command`), legacy SSE (`url`), Streamable HTTP (`httpUrl`). Resources can be `@server://…` like files. ACP embedding is `gemini-cli-acp`.

## Notes

- Global `mcp.allowed` / `mcp.excluded` filter server **names**. If `allowed` is set, only listed keys connect. Enterprise: system `settings.json` wins on the same name (System > Workspace > User merge); pair `mcpServers` with `mcp.allowed` or users can add extra servers.
- Per server: `timeout` (default 10 min), `trust: true` (skip all confirmations — default false), `includeTools` allowlist, `excludeTools` (wins). Env: `$VAR` / `${VAR}` / Windows `%VAR%`. Host secrets matching `*TOKEN*` / `*KEY*` / … are **redacted** from the inherited env unless you list them in `env`.
- OAuth (SSE/HTTP): 401 → discover metadata → browser on `localhost/oauth/callback`. Tokens in `~/.gemini/mcp-oauth-tokens.json`. `/mcp auth [name]`. Fails in headless / SSH-without-X11 / containers. `authProviderType`: `dynamic_discovery` | `google_credentials` | `service_account_impersonation`.
- Manage: `gemini mcp add|list|remove` writes user or workspace settings. `/mcp` shows tools, prompts, and resources. Tool names are sanitized for the Gemini API; collisions are resolved in `discoverMcpTools()`.
- `trust: true` is a host bypass, not a sandbox. Treat untrusted MCP content as injection (`mcp-server-trust-failures`).

## Sources

- [MCP servers with Gemini CLI](https://geminicli.com/docs/tools/mcp-server/) — accessed 2026-09-05
- [Gemini CLI configuration](https://geminicli.com/docs/reference/configuration/) — accessed 2026-09-05
- [Gemini CLI for the enterprise](https://geminicli.com/docs/cli/enterprise/) — accessed 2026-09-05
