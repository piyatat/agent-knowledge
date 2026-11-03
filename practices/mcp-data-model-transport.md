---
id: mcp-data-model-transport
title: MCP data model vs transport representation — SEP-3498 (draft)
tags: [mcp, transport, schema, sdk]
status: draft
updated: 2026-11-03
when_to_use: Assuming MCP JSON-RPC fields are the application types, or tracking the Transports WG split of data model from stdio/HTTP wire format
---

## Summary

**SEP-3498** (Draft, opened 2026-11-02, Transports WG-sponsored, P0) separates MCP **application types** from **how a transport serializes them**. Shared fields: `protocolVersion`, `method`, `metadata`, `payload`. Requests that identify a tool/prompt/resource also have request-level `name`. **Does not change** stdio or Streamable HTTP JSON-RPC on the wire. Not in 2026-07-28. Prerequisite called out by `mcp-pluggable-transports` (SEP-2598). Do not ship SDKs against this until it is accepted.

## Notes

- Why: HTTP-over-stdio and header-vs-`_meta` work (protocol version, trace context) currently duplicate the same facts in JSON-RPC `params._meta` and HTTP headers. If a future transport carries a field only in a header, code that reads `CallToolRequest.params._meta` breaks even though the tool call did not change. Applications should use `request.protocolVersion` / `request.name` regardless of the wire.
- Request `name` (required for these methods; **removed from the payload**): `tools/call` and `prompts/get` → tool/prompt name; `resources/read` → resource **URI** (not display name). `tools/list` and similar omit it. Nested names inside tool arguments stay. Responses and notifications do **not** get `name`. Transport IDs (`jsonrpc`, request `id`, cancellation/subscription routing) stay **outside** the data model.
- Message types are `MCPRequest` / `MCPNotification` / `MCPResponse` / `MCPErrorResponse`. The API operation **must** identify the type — do not guess from method or payload. `metadata.meta` is message-level `_meta` minus protocol version and transport IDs; nested `_meta` (for example `Tool._meta`) stays in the payload. Tool execution failures remain results with `isError`.
- Each transport spec must define encode/decode independently. Stdio still: one JSON-RPC object per line; `name` maps back to `params.name` / `params.uri`; `protocolVersion` maps to `params._meta["io.modelcontextprotocol/protocolVersion"]`. Streamable HTTP keeps its existing JSON-RPC body. Do not serialize `MCPMessage` as a new envelope.
- Status: GitHub PR #3498 (open); discussion Transports WG #58; prototype/schema in the SEP. Until merge, treat JSON-RPC `params` as the public types (`mcp-stateless-core`, `mcp-request-meta`, `mcp-stdio-transport`, `mcp-streamable-http-transport`).

## Sources

- [SEP-3498: Separating Data Model from Transport Representation](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3498) — accessed 2026-11-03
- [SEP-3498 vote / TPM](https://voting.modelcontextprotocol.io/p/seps/3498) — accessed 2026-11-03
- [MCP Spec TPM](https://plan.modelcontextprotocol.io/seps) — accessed 2026-11-03
- [Transports WG #58](https://github.com/modelcontextprotocol/transports-wg/pull/58) — accessed 2026-11-03
