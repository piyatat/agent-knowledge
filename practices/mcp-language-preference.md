---
id: mcp-language-preference
title: MCP per-request language preference — SEP-2792
tags: [mcp, transport, ux, prompts]
status: active
updated: 2026-10-17
when_to_use: Localizing MCP titles/elicitation UI, or mirroring Accept-Language on Streamable HTTP
---

## Summary

**SEP-2792** (accepted by Core Maintainers 2026-10-17; PR still open) carries a user’s natural-language preference on **every** MCP request. Canonical field: `params._meta["io.modelcontextprotocol/acceptLanguage"]` (HTTP `Accept-Language` grammar, RFC 4647 matching). Response `_meta["io.modelcontextprotocol/contentLanguage"]` reports what was used. Not a locale/timezone/currency system (`mcp-request-meta`). Not yet in the published 2026-07-28 spec — wait for merge before claiming fleet support.

## Notes

- Clients SHOULD send a known preference on each request. Servers MAY ignore it; a miss MUST fall back without error. The field is **request-scoped** — switch language mid-conversation; do not store it as session state (`mcp-stateless-core`).
- Localize display strings: `BaseMetadata.title`, `ToolAnnotations.title`, elicitation form titles/descriptions, progress messages (SHOULD). `Error.message` and model-facing / returned body text are MAY. Keep **stable**: names, methods, URIs, schema keys, enums, discriminators, protocol IDs, error codes, `_meta` keys, opaque tokens. An explicit method/tool language argument SHOULD win for the content it controls; `_meta` is the fallback and is available **before** discovery.
- Streamable HTTP: mirror `_meta` to `Accept-Language`; JSON responses mirror the selected language to `Content-Language`. SSE/notifications keep per-message `_meta`. The accepted draft treats a **present** header/`_meta` mismatch as HTTP **400** + **HeaderMismatch (−32020)** (`mcp-jsonrpc-errors`); a **stripped** request header is tolerated. Compare decoded `_meta` to the parsed-and-joined header (RFC 9110 §5.3/§5.5), character for character — casing, spacing, `q` spelling matter. Language-varying responses stay cacheable: include `acceptLanguage` in the MCP cache key; HTTP variants use `Vary: Accept-Language`.
- Errors have no result `_meta`; put `contentLanguage` on `error.data._meta`. Reference impl: TypeScript SDK PR #2158 (draft). Prior art: github-mcp-server translation catalogs. Vote: 4 of 7 Core Maintainers (poll 1368eab9…). Do not invent a capability handshake — both sides opt in by sending/honoring the field.

## Sources

- [SEP-2792: Per-Request User Language Preference](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2792) — accessed 2026-10-17
- [SEP-2792 vote](https://voting.modelcontextprotocol.io/polls/1368eab99def3f3839e2f863cef5ca94) — accessed 2026-10-17
- [TypeScript SDK reference implementation](https://github.com/modelcontextprotocol/typescript-sdk/pull/2158) — accessed 2026-10-17
- [MCP Spec TPM — SEP-2792 accepted](https://plan.modelcontextprotocol.io/seps) — accessed 2026-10-17
