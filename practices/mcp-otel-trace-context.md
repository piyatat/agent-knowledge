---
id: mcp-otel-trace-context
title: MCP _meta traceparent / tracestate / baggage
tags: [mcp, otel, observability, tracing]
status: active
updated: 2026-08-25
when_to_use: Propagating OpenTelemetry trace context through MCP JSON-RPC _meta (SEP-414)
---

## Summary

On MCP 2026-07-28, W3C **`traceparent`**, **`tracestate`**, and **`baggage`** are reserved `_meta` keys (exception to the vendor-prefix rule). Put them on requests so MCP `tools/call` (and other RPCs) join the same trace as the agent loop. Values MUST follow W3C Trace Context / Baggage. Pair with OTel **GenAI MCP** semantic conventions — this is not prompt-prefix caching.

## Notes

- Example: `params._meta.traceparent` = `00-<trace-id>-<span-id>-<flags>`. Gateways that only see HTTP still need `traceparent` on the **HTTP** request; JSON-RPC `_meta` is for MCP hops that may not be the same HTTP span.
- Other reserved `_meta` keys: `progressToken`, `io.modelcontextprotocol/protocolVersion`, `clientInfo`, `clientCapabilities`, `logLevel`, `subscriptionId`. Do not overload `traceparent` for app correlation ids — use `gen_ai.conversation.id` on spans (`agent-conversation-correlation-otel`).
- `clientInfo` / `serverInfo` are **self-reported** display strings. MUST NOT drive auth or routing.
- Redact baggage and tool args before export (`telemetry-redaction-genai`). Trace context itself is not a secret, but baggage often carries tenant ids.
- Changelog: SEP-414 documents these `_meta` keys as the OTel propagation convention for 2026-07-28.

## Sources

- [MCP Basic — _meta and OpenTelemetry trace context (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic) — accessed 2026-08-25
- [MCP changelog 2026-07-28 (SEP-414)](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — accessed 2026-08-25
- [OpenTelemetry semantic conventions for MCP](https://opentelemetry.io/docs/specs/semconv/gen-ai/mcp/) — accessed 2026-08-25
