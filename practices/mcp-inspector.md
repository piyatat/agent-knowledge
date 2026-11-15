---
id: mcp-inspector
title: MCP Inspector — debug MCP servers from shell or browser
kind: tool
tags: [mcp, inspector, cli, security]
status: active
updated: 2026-11-15
when_to_use: Debugging an MCP server from a shell, CI job, or browser, including tool lists and skill checks
---

## Summary

The **MCP Inspector** (`@modelcontextprotocol/inspector`) is the reference tool for testing an MCP server. One package has a web UI, a scriptable CLI, and a TUI, plus experimental **`mcpdo`** (one long-lived connection, many commands). All three share transports, config, OAuth state, and protocol-era negotiation (legacy vs **2026-07-28**). It is a developer tool that can start processes and hold tokens — not a production client (`fastmcp`, `mcp-local-server-security`).

## Notes

- **Run.** Node.js **22.19.0+**. No install required: `npx @modelcontextprotocol/inspector` (web), add `--cli` or `--tui`. The mode flag must be first; a later `--cli` is passed to the server. Point it at a stdio command (`npx @modelcontextprotocol/inspector --cli node server.js --method tools/list`) or `--server-url` with `--transport http`. Read the server’s own README before guessing the command.
- **CLI for agents and CI.** Each run does one `--method` and exits. Useful methods include `tools/list`, `tools/call`, `resources/list`, `resources/read`, `prompts/list`, `skills/list`, and `skills/get`. `--format json` is a single JSON object on stdout. `--strict` on `tools/list` exits **6** on an error-severity schema portability problem. `--verify` on skills checks SEP-2640 (exit **7** violation, **8** bounds, **9** with `--require-digests` when a skill has no digests). Exit **3** is auth required, **4** unreachable, **5** tool error or missing tool, **11** HTTP 429. Non-zero exits also print one JSON error line on stderr. `--tool-arg key=value` JSON-parses values, so `zip=012` can become a number; use `--tool-args-json` when the schema must see a string.
- **Auth in scripts.** Default OAuth opens a browser on a loopback callback. With no TTY it fails fast as `auth_required` instead of waiting. `--stored-auth-only` never starts interactive OAuth (the CI flag). `--use-stored-auth` reuses a token the web Inspector already stored for that `--server-url`.
- **Web bind.** The Node backend can spawn stdio processes. Every `/api/*` route needs a per-launch bearer token, which `GET /` injects into the HTML — anyone who can load the page can read it. Default bind is `127.0.0.1`. `HOST=0.0.0.0` is refused unless `DANGEROUSLY_BIND_ALL_INTERFACES=true`. `DANGEROUSLY_OMIT_AUTH=true` (or `1`) removes the token check. Open the URL the launcher prints; do not assume a remembered port. Set `MCP_AUTO_OPEN_ENABLED=false` in a headless environment.
- **Secrets.** OAuth tokens, client secrets, and stdio `env:` values go to the OS keychain when one exists. Without a keychain (typical Linux SSH, containers, no Secret Service) they fall back to `~/.mcp-inspector/secrets.json`, mode `0600`, **plaintext** unless `MCP_INSPECTOR_SECRET_KEY` or `MCP_INSPECTOR_SECRET_KEY_FILE` is set. **Headers are not secrets** — an API key in `headers` stays in `mcp.json`. A stdio server runs as you and can read the same files. `servers/show` redacts `env` and client secrets but not credentials embedded in a URL or stdio args.
- **Apps.** `--app-info` reports whether a tool has an MCP App UI without calling it (exit 0 has an app, 2 does not, 5 missing tool). The CLI does not advertise the Apps extension unless you pass `--advertise-apps`, so app-only tools look app-less (`mcp-apps-extension`).
- **Alternatives.** A unit test against the official SDK when you do not want a second process holding OAuth. `mcpdo` when one CLI invocation cannot hold a stream (tasks, subscriptions, elicitation).
- **Caveats.** Do not bind the web UI off loopback, do not set `DANGEROUSLY_OMIT_AUTH` on a shared machine, and do not paste `servers/show` output that may contain a URL token. Prefer `--stored-auth-only` in CI.

## Sources

- [MCP Inspector](https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector) — accessed 2026-11-15
- [CLI client](https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/cli) — accessed 2026-11-15
- [Web client](https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/web) — accessed 2026-11-15
- [Security](https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/security) — accessed 2026-11-15
