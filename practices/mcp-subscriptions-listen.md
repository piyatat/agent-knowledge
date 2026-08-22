---
id: mcp-subscriptions-listen
title: MCP subscriptions/listen for change notifications
tags: [mcp, transport, reliability, ops]
status: active
updated: 2026-08-22
when_to_use: Receiving tools/prompts/resources change events on 2026-07-28 without a standalone GET SSE or resources/subscribe
---

## Summary

`subscriptions/listen` is one long-lived RPC whose **response stream** is the notification channel. Clients opt in per event type. Nothing is pushed unsolicited. The stream is **not resumable** — drop ⇒ re-listen and refetch.

## Notes

- Filter fields: `toolsListChanged`, `promptsListChanged`, `resourcesListChanged`, `resourceSubscriptions` (URI list). Servers **MUST NOT** emit types the client did not request. The first frame **MUST** be `notifications/subscriptions/acknowledged` with the honored subset; treat omitted types as unsupported.
- Correlation: `io.modelcontextprotocol/subscriptionId` in `_meta` equals the listen request’s JSON-RPC `id`. Required for demux on stdio (shared channel, interleaved subscriptions).
- Ends when the client closes SSE / sends `notifications/cancelled`, the server returns a graceful `resultType: "complete"` on the listen id, or the transport dies. After stdio reconnect, **MUST** listen again — servers keep no subscription state.
- Progress and logs stay on the *originating request’s* stream (scoped, cancellable). `subscriptions/listen` is for list/resource *change* fan-out only. Complements `ttlMs` cache: a notification invalidates a still-fresh list.
- Servers may cap concurrent listens and per-stream backlogs and then end the stream (client refetches; there is no replay). Pair with deterministic `tools/list` + cache hints so you are not subscribed *and* polling.

## Sources

- [MCP subscriptions (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/subscriptions) — accessed 2026-08-22
- [The 2026-07-28 Specification (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — accessed 2026-08-22
- [MCP TypeScript SDK — subscribe to changes](https://ts.sdk.modelcontextprotocol.io/v2/clients/subscriptions.html) — accessed 2026-08-22
