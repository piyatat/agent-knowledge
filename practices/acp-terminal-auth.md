---
id: acp-terminal-auth
title: ACP terminal authentication — out-of-band login
tags: [acp, auth, session, interoperability]
status: active
updated: 2026-09-27
when_to_use: Implementing ACP auth/login vs a terminal login method, or debugging IDE reconnect-after-login
---

## Summary

ACP **terminal authentication** (stabilized in schema v1.7.0 / 2026-08-20) is an out-of-band login: the Client launches the **same configured Agent program** in an interactive TTY, waits for exit 0, then **reconnects and reinitializes**. It is not `auth/login`, not MCP OAuth, and not the removed v2 Client `terminal/*` execution APIs.

## Notes

- Advertise Client support only as `capabilities.auth.terminal: {}` when you can reproduce the Agent invocation **in the Agent’s execution environment**. Omit or `null` if the connection is remote and you cannot spawn that binary locally. Agents must advertise `type: "terminal"` methods **only** when that capability is present.
- Method descriptor: `methodId`, `name`, `type: "terminal"`, optional `args` (appended) and `env` (unique `name`s; override the base launch env). The descriptor **cannot** name a command — the Client uses its own Agent config so the Agent cannot pick an unrelated binary. Prefer args that enter a login-only flow and exit.
- Flow: spawn interactive process → user completes TUI login → exit 0 = success; non-zero, no status, or cancel = failure → new ACP connection + `initialize` → retry the gated operation. **Do not** send `auth/login` with a terminal `methodId`. ACP defines no in-band success string.
- `authMethods` non-empty still requires the Agent to implement **both** `auth/login` and `auth/logout`. Standard `type: "agent"` uses `auth/login`; `terminal` does not. After `auth/logout`, running sessions may keep going, die, or start returning `auth_required` — Clients must re-prompt. Custom types must start with `_`.
- Orthogonal to `capabilities.auth` extensions and to v2 removing Client filesystem/terminal **execution**. Cursor `agent acp` docs may still describe v1 `authenticate` (`cursor-acp-extensions`).

## Sources

- [ACP authentication](https://agentclientprotocol.com/protocol/v2/authentication) — accessed 2026-09-27
- [Terminal Authentication RFD](https://agentclientprotocol.com/rfds/auth-methods) — accessed 2026-09-27
- [ACP RFD updates](https://agentclientprotocol.com/rfds/updates) — accessed 2026-09-27
- [ACP CHANGELOG](https://github.com/agentclientprotocol/agent-client-protocol/blob/main/CHANGELOG.md) — accessed 2026-09-27
