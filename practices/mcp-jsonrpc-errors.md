---
id: mcp-jsonrpc-errors
title: MCP JSON-RPC error codes (−32020..−32022, −32602)
tags: [mcp, schema, reliability, transport]
status: active
updated: 2026-08-26
when_to_use: Mapping MCP 400s / JSON-RPC errors, or choosing a code instead of inventing −3200x
---

## Summary

MCP 2026-07-28 uses JSON-RPC 2.0 codes for generic failures and **reserves −32020…−32099** for spec-defined errors. Do not emit leftover −32000…−32019 codes. Resource-not-found is **−32602**, not −32002.

## Notes

- Standard: −32700 ParseError, −32600 InvalidRequest, −32601 MethodNotFound (including missing capability), −32602 InvalidParams, −32603 InternalError.
- Spec-defined: **−32020 HeaderMismatch** (HTTP header vs body `_meta` / `Mcp-Method` / `Mcp-Name`); **−32021 MissingRequiredClientCapability** (`data.requiredCapabilities`); **−32022 UnsupportedProtocolVersion** (`data.supported` versions to retry). These often surface as HTTP **400**.
- Historical, **MUST NOT emit** on 2026-07-28: **−32002** (old resource-not-found — clients SHOULD still accept it from old servers); **−32042** (2025-11-25 URL elicitation). Missing `_meta` fields are −32602 + HTTP 400.
- `resources/read` of an unknown URI: −32602 with `data.uri`. **MUST NOT** return empty `contents[]` for a missing resource (ambiguous vs empty file). Internal read failures: −32603.
- Application errors SHOULD sit **outside** −32768…−32000. SDKs historically used −32000/−32001 for timeout/session-not-found — do not collide with the spec partition.
- Version probe: treat −32022 as modern negotiation; do not treat an arbitrary −32601 as a signal to speak a legacy dialect.

## Sources

- [MCP Basic — error codes (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic) — accessed 2026-08-26
- [MCP resources — error handling](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) — accessed 2026-08-26
- [MCP changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — accessed 2026-08-26
