---
id: mcp-scope-challenges
title: MCP request-time OAuth scope challenges
tags: [mcp, oauth, security, auth]
status: active
updated: 2026-09-30
when_to_use: Returning RFC 6750 insufficient_scope from an MCP tool/resource/prompt, or wiring TypeScript SDK scopeChallenge
---

## Summary

**Request-time scope challenges** let an MCP server reject a call **before** the handler (or SSE stream) runs, with HTTP **403** `insufficient_scope` and the **exact** scopes that operation needs. TypeScript SDK **2.1.0** (2026-09-23) adds per-primitive `scopeChallenge` plus `requireScopes(...)`. This is the step-up flow already described in MCP auth — now as SDK preflight, not ad-hoc checks inside tools. Complementary to DPoP (`mcp-dpop-extension`); not a replacement for audience-bound OAuth (`mcp-oauth-scopes`).

## Notes

- Register `scopeChallenge` on `registerTool` / `registerResource` / `registerPrompt` (and templates). The callback sees the parsed JSON-RPC request and verified `AuthInfo`. Return `undefined` to continue; return `{ scopes, errorDescription? }` to challenge. Invalid / thrown challenges **fail closed**. `requireScopes("a", "b")` is a static all-of helper; unauthenticated requests stay the auth gate’s problem.
- Transports (`createMcpHandler`, Streamable HTTP) emit RFC 6750 403 **before** handler side effects. Default `WWW-Authenticate` lists **only this operation’s** scopes (RFC 6750 §3.1), not a union of every scope the server has ever asked. Opt in to the broader hint with `scopeChallenge.includeGrantedScopes`. Include RFC 9728 `resource_metadata` when `AuthInfo` has a PRM URL (or HTTPS RFC 8707 `resource` well-known fallback).
- Clients should accumulate prior + challenged scopes and re-authorize, with a cap to avoid loops (MCP step-up). Do **not** start streaming or mutate state, then decide the token was too weak.
- DPoP in the same SDK release is **opt-in** on the client (`OAuthClientProvider.dpop()`). Scope challenges work with Bearer tokens too. If the AS does not advertise DPoP, proofs are not protecting you — still split read vs write scopes per tool.

## Sources

- [server/scopeChallenge (TypeScript SDK)](https://ts.sdk.modelcontextprotocol.io/v2/api/@modelcontextprotocol/server/server/scopeChallenge.html) — accessed 2026-09-30
- [feat(server): add request-time OAuth scope challenges](https://github.com/modelcontextprotocol/typescript-sdk/pull/1624) — accessed 2026-09-30
- [MCP Authorization (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) — accessed 2026-09-30
- [MCP SDK 2.1.0: OAuth DPoP Tokens and Scope Challenges](https://fluidlabs.com/resources/mcp-sdk-2-1-0-oauth-dpop-scope-challenges) — accessed 2026-09-30
