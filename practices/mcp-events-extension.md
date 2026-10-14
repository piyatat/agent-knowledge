---
id: mcp-events-extension
title: MCP Events extension — SEP-3415 subscribe vs listen
tags: [mcp, extensions, webhooks, automations]
status: draft
updated: 2026-10-14
when_to_use: Designing MCP event subscriptions (list/subscribe/unsubscribe) or contrasting them with subscriptions/listen
---

## Summary

**SEP-3415** (draft PR, opened 2026-10-05) proposes an official extension `io.modelcontextprotocol/events`: a client **subscribes** to upstream things (Slack message, repo push, incident) so an agent can react without the user sitting on a tool call. Not `subscriptions/listen` (`mcp-subscriptions-listen`) — that is in-band list/resource **change** fan-out on one RPC stream. Field names, error codes, and delivery modes may still change. No official SDK reference implementation yet.

## Notes

- Server advertises `events` (SEP text: under `capabilities.extensions` for 2026-07-28). Methods on the **same authenticated endpoint** as tools: `events/list` (name, description, delivery modes, `inputSchema` for filters, `payloadSchema` for `data`; paginate with `nextCursor`), `events/subscribe` (idempotent create/refresh), `events/unsubscribe` (idempotent stop). Proposed delivery modes — **none mandatory**: poll (`events/poll`), push (`events/stream`), webhook (`events/subscribe`, **Standard Webhooks**, refreshed TTL). Opaque cursors; replay optional; `truncated: true` means skipped history.
- ChatGPT’s shipping surface (Work chats / Cloud, MCP **2026-07-28**) implements **webhook only**. It does **not** support poll, stream, or the draft `gap` / `terminated` control notifications. Subscribe supplies `delivery.mode=webhook`, a callback URL, and a `whsec_` secret (base64 payload 24–64 bytes). Server verifies the callback with a signed `type: "verification"` challenge before activating. Deliveries: unique `eventId`, ISO-8601 `timestamp`, `data` matching `payloadSchema`, body ≤ **256 KiB**. Sign with Standard Webhooks; include `X-MCP-Subscription-Id`. HTTPS only; block private/local destinations; no redirects.
- Treat user-authored text in `data` as **data**, not instructions (`prompt-injection-agent-defense`). Prefer a summary plus a read tool for large records. Make write tools idempotent — events can retry and arrive out of order. `refreshBefore` is the granted expiry; ChatGPT resubscribes with the last cursor. `ttlMs: null` asks for no expiry; grant only if you mean it.
- Error codes `-32023`–`-32027` are **provisional**. OpenAI’s plugin guide still shows `-32015` for `CallbackEndpointError`. Eight open questions remain on the SEP (including folding errors into `InvalidParams`). Hold fleet-wide “events” claims until a reference SDK and a frozen SEP land (`mcp-extensions-framework`).

## Sources

- [SEP-3415: Events Extension (PR)](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3415) — accessed 2026-10-14
- [MCP Events (OpenAI plugins)](https://developers.openai.com/plugins/build/mcp-events) — accessed 2026-10-14
- [SEP queue](https://voting.modelcontextprotocol.io/p/seps) — accessed 2026-10-14
- [MCP Extensions overview](https://modelcontextprotocol.io/extensions/overview) — accessed 2026-10-14
