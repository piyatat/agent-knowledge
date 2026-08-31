---
id: gemini-cli-acp
title: Gemini CLI ACP mode — IDE embedding over stdio
tags: [acp, gemini, cli, orchestration]
status: active
updated: 2026-08-31
when_to_use: Embedding Gemini CLI in an IDE via Agent Client Protocol, or comparing ACP agents (Cursor vs Gemini)
---

## Summary

`gemini --acp` runs Gemini CLI as an **ACP agent** (JSON-RPC 2.0 over stdio). The IDE is the client; Gemini is the server. This is ACP v1-shaped method names (`authenticate`, `newSession`, `loadSession`, `prompt`) — do not assume ACP v2 session semantics (`acp-v2-session-lifecycle`). Gemini CLI is listed in the **ACP Agent Registry**.

## Notes

- Core methods: `initialize` (client may register an MCP server here), `authenticate`, `newSession`, `loadSession`, `prompt`, `cancel`. Session extras: `setSessionMode` (e.g. auto-approve tools), `unstable_setSessionModel`.
- File I/O is **proxied through the client** — the agent reads/writes only what the IDE allows. Treat that as the workspace boundary, not a substitute for host sandboxing.
- MCP inversion: the *client* can expose IDE tools as an MCP server during `initialize`; Gemini CLI connects, lists tools, and forwards model tool calls. Agent-side MCP client lives in `packages/core/src/tools/mcp-client.ts`; ACP dispatch in `packages/cli/src/acp/`.
- Debug: `gemini --acp --debug`. Telemetry file: `GEMINI_TELEMETRY_ENABLED=true`, `GEMINI_TELEMETRY_TARGET=local`, `GEMINI_TELEMETRY_OUTFILE=...`.
- Docs last-updated stamp on the ACP page was 2026-04-10; unpaid-tier note says Gemini CLI is slated to be replaced by **Antigravity CLI** on 2026-06-18 for some accounts — verify current product name before wiring a long-lived integration. Cursor’s `agent acp` is a different binary (`cursor-acp-extensions`).

## Sources

- [ACP Mode (Gemini CLI)](https://geminicli.com/docs/cli/acp-mode/) — accessed 2026-08-31
- [gemini-cli acp-mode.md](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/acp-mode.md) — accessed 2026-08-31
