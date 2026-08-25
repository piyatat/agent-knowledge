---
id: a2a-streaming-async
title: A2A streaming SSE vs push-notification webhooks
tags: [a2a, streaming, webhooks, security]
status: active
updated: 2026-08-25
when_to_use: Choosing A2A message/stream vs webhook push for long tasks, or threat-modeling Agent Card pushNotifications
---

## Summary

A2A long work is a **Task**, not a one-shot HTTP body. If the Agent Card has `capabilities.streaming`, use SSE (`SendStreamingMessage` / subscribe + `tasks/resubscribe`). If `capabilities.pushNotifications`, register an HTTPS webhook. Negotiate from the card — do not assume every peer streams.

## Notes

- SSE: HTTP 200 + `text/event-stream`. Events carry JSON-RPC-shaped results: `Task` snapshot, `TaskStatusUpdateEvent`, `TaskArtifactUpdateEvent` (`append` / `lastChunk` for chunked artifacts). Stream ends on terminal or interrupted states (`COMPLETED`, `FAILED`, `CANCELED`, `REJECTED`, `INPUT_REQUIRED`).
- Reconnect: if SSE drops while the task is still active, resubscribe (`SubscribeToTask` / `tasks/resubscribe`). Backfill of missed events is implementation-defined.
- Push: `PushNotificationConfig` on `SendMessage`/`SendStreamingMessage` or later `CreateTaskPushNotificationConfig`. Fields: webhook `url`, optional client `token`, optional `authentication` for the **server** to auth to you. Notify on significant states; payload is a `StreamResponse`. Then `GetTask` for the full object.
- **Server (outbound POST):** do not POST to arbitrary client URLs (SSRF / DDoS amplifier). Allowlist, ownership challenges, egress controls. Authenticate to the webhook as configured (Bearer/OAuth, API key, HMAC, mTLS).
- **Webhook (inbound):** verify the A2A server (JWT+JWKS, HMAC, token). Reject stale timestamps; use `jti`/event ids against replays. Rotate keys.
- Use SSE for interactive/low-latency; push for hours-long or serverless clients. Pair with `webhook-receiver-freshness` if the handler can go silent while still returning 200.

## Sources

- [A2A Streaming & Asynchronous Operations](https://a2a-protocol.org/latest/topics/streaming-and-async/) — accessed 2026-08-25
- [A2A Protocol specification](https://a2a-protocol.org/latest/specification/) — accessed 2026-08-25
- [A2A streaming-and-async (GitHub docs)](https://github.com/a2aproject/A2A/blob/main/docs/topics/streaming-and-async.md) — accessed 2026-08-25
