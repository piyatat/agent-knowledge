---
id: gemini-cli-mcp
title: Gemini CLI MCP — settings.json servers and OAuth
tags: [gemini, mcp, config, auth]
status: active
updated: 2026-10-28
when_to_use: Adding MCP to Gemini CLI, or debugging trust / OAuth / env redaction
---

## Summary

Gemini CLI MCP is configured in **`settings.json`** (`mcpServers` + global `mcp`), not Cursor `mcp.json` or Claude `.mcp.json`. Transports: stdio (`command`), legacy SSE (`url`), Streamable HTTP (`httpUrl`). Resources can be `@server://…` like files. ACP embedding is `gemini-cli-acp`.

## Notes

- Global `mcp.allowed` / `mcp.excluded` filter server **names**. If `allowed` is set, only listed keys connect. Enterprise: system `settings.json` wins on the same name (System > Workspace > User merge); pair `mcpServers` with `mcp.allowed` or users can add extra servers.
- Per server: `timeout` (default 10 min), `trust: true` (skip all confirmations — default false), `includeTools` allowlist, `excludeTools` (wins). Env: `$VAR` / `${VAR}` / Windows `%VAR%`. Host secrets matching `*TOKEN*` / `*KEY*` / … are **redacted** from the inherited env unless you list them in `env`.
- OAuth (SSE/HTTP): 401 → discover metadata → browser on `localhost/oauth/callback`. Tokens in `~/.gemini/mcp-oauth-tokens.json`. `/mcp auth [name]`. Fails in headless / SSH-without-X11 / containers. `authProviderType`: `dynamic_discovery` | `google_credentials` | `service_account_impersonation`. v0.59.0 hardens metadata-discovery fetches against **SSRF** (pair with `mcp-oauth-discovery-ssrf`); v0.60.0 also requires **RFC 9207 `iss`** on the authorization response before redeeming a code (`mcp-authorization-discovery`). **v0.66.0** (2026-10-27): per-server `oauth.allowPrivateNetwork` (default **false**) opts in OAuth discovery / registration / authorization / token endpoints that resolve to **enterprise private** space — RFC 1918, CGNAT `100.64.0.0/10`, IPv6 ULA `fc00::/7`, and `.internal` / `.local` hostnames. HTTPS is still required off-loopback. **Link-local** (`169.254.0.0/16`, `fe80::/10`) and **loopback** stay restricted. Every DNS record for a hostname must be public unicast **or** an allowed private range. Do not turn this on for untrusted server configs (`mcp-localhost-dns-rebinding`).
- Manage: `gemini mcp add|list|remove` writes user or workspace settings. `/mcp` shows tools, prompts, and resources. Tool names are sanitized for the Gemini API; collisions are resolved in `discoverMcpTools()`.
- `trust: true` is a host bypass, not a sandbox. Untrusted / restricted workspace **filters `mcpServers`** and does not connect (fail-closed folder trust, v0.59+; `gemini-cli-trusted-folders`). Treat untrusted MCP content as injection (`mcp-server-trust-failures`).

## Sources

- [MCP servers with Gemini CLI](https://geminicli.com/docs/tools/mcp-server/) — accessed 2026-09-05
- [Gemini CLI configuration](https://geminicli.com/docs/reference/configuration/) — accessed 2026-09-05
- [Gemini CLI for the enterprise](https://geminicli.com/docs/cli/enterprise/) — accessed 2026-09-05
- [Trusted Folders](https://geminicli.com/docs/cli/trusted-folders/) — accessed 2026-09-14
- [gemini-cli v0.59.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0) — accessed 2026-09-14
- [Latest stable release v0.66.0](https://geminicli.com/docs/changelogs/latest/) — accessed 2026-10-28
- [MCP servers with Gemini CLI (GitHub docs)](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md) — accessed 2026-10-28
- [gemini-cli #29844 — allowPrivateNetwork](https://github.com/google-gemini/gemini-cli/pull/29844) — accessed 2026-10-28
