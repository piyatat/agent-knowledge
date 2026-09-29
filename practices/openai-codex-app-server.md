---
id: openai-codex-app-server
title: Codex App Server — JSON-RPC harness vs SDK vs MCP
tags: [openai, sdk, orchestration, transport]
status: active
updated: 2026-09-29
when_to_use: Embedding Codex (auth, history, approvals, streamed events) in a custom client instead of the Codex SDK or a deprecated MCP server
---

## Summary

**`codex app-server`** is the open-source JSON-RPC harness the Codex IDE extensions use. Use it when your product owns login, conversation history, approvals, and a live event stream. Use the **Codex SDK** for CI/automation threads. Do **not** start new work on `codex mcp-server` — it cannot carry Codex session semantics (diffs, skills, steering).

## Notes

- Protocol: JSON-RPC 2.0 **without** the `"jsonrpc":"2.0"` header. Handshake is `initialize` then `initialized`; anything earlier is `Not initialized`. Then `thread/start` | `resume` | `fork`, `turn/start`, optional `turn/steer` / `turn/interrupt`. Notifications: `item/*`, `turn/completed`, etc. Generate per-version schemas: `codex app-server generate-ts` / `generate-json-schema`.
- Transports: default **stdio** (`--listen stdio://`); **Unix socket** (`unix://` or `unix://PATH`, HTTP Upgrade); experimental/unsupported **WebSocket** (`--listen ws://IP:PORT`) with `/readyz` and Origin-less `/healthz` (Origin present → 403); `--listen off` exposes nothing. Non-loopback WS is unauthenticated by default — set auth **before** exposing it. Overload returns `-32001` (`Server overloaded; retry later.`).
- WS auth (enforced before `initialize`): `--ws-auth capability-token` with `--ws-token-file` or `--ws-token-sha256 HEX`; or `--ws-auth signed-bearer-token --ws-shared-secret-file` plus optional `--ws-issuer` / `--ws-audience` / `--ws-max-clock-skew-seconds`. Client sends `Authorization: Bearer …` on the handshake. Prefer a token file over argv. `--ws-token-sha256` is a verifier only — the client still needs the raw token.
- Remote TUI: `codex app-server --listen ws://127.0.0.1:4500` then `codex --remote ws://…` (`ws://`, `wss://`, `unix://`). Put the bearer in an env var (`--remote-auth-token-env`), never on the argv. Use `wss://` + auth off localhost. `--code-mode-host wss://…` is experimental and shared by every thread in the process.
- Client `initialize.params.capabilities` includes `optOutNotificationMethods`, `requestAttestation`, and `mcpServerOpenaiFormElicitation`. Set `clientInfo.name` for Compliance Logs; new enterprise clients should be allowlisted with OpenAI. App-server also speaks skills (`skills/list`, `skills/changed`, `plugin/skill/read`) and MCP (`mcpServer/oauth/login`, `mcpServer/resource/read`, config reload). The SDK wraps a subset for `thread.run`.

## Sources

- [Codex App Server](https://developers.openai.com/codex/app-server) — accessed 2026-09-29
- [codex-rs/app-server README](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md) — accessed 2026-09-02
- [Codex SDK](https://developers.openai.com/codex/sdk) — accessed 2026-09-02

