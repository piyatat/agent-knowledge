---
id: ably-mau-and-message-block
title: Ably billed two users for one person, or blocked the account on messages
kind: knowledge
tags: [ably, realtime, billing, auth]
status: active
updated: 2026-11-25
when_to_use: An Ably connection returned 40111 or 40167, publishes returned 40112, or one person counted as many monthly users
---

## Summary

Ably (`ably`) does not stop the app when monthly active users pass the allowance. It does stop the account when the message volume or the concurrent-connection ceiling is hit. A server that authenticates with a token and omits the signed `server` client type is rejected, and a REST call that never declares itself as a server is billed as a user.

## Notes

- **MAU versus a hard limit.** Extra MAU on Pro and Business are $0.05 and the app keeps running. Free includes 500 MAU. Count is per app and per `clientId`. One person on a phone and a laptop with different ids is two MAU. A missing `clientId` on a device is rejected. Give each user one id, embed it in the token, and do not share an id across users. Server-package clients and AI Transport agents are excluded. A direct REST or custom realtime client is counted as a user unless API-key auth sends `clientType=server`, or token auth puts `x-ably-clientType=server` on the JWT. MQTT counts unless the `clientId` begins with `server-`. Pusher-adapter clients always count.
- **What actually blocks.** Error 40111 means a new realtime connection was refused because the account is at its concurrent connection limit. Free is 500. Pro and Business are 100,000. HTTP requests do not count toward that number. Every package allows 10 concurrent connections for one `clientId`. Error 40112, HTTP 401, means the account passed its message volume, and that page says the account is blocked. Free is 6,000,000 messages a month, 250,000 an hour, and 500 a second. Message size is the UTF-8 `name`, `clientId`, `data`, and `extras` before compression, and a batch counts as one combined size. The cap is 64 KiB on Free and 256 KiB on Pro and Business. Error 40009 is the size rejection. Presence multiplies messages: the limits page’s example of 200 members entering and leaving is about 80,400 messages. Presence itself caps at 200 members on a channel unless server-side batching is on. Dropped connections keep state for 2 minutes. Free history defaults to 24 hours and cannot be kept past 30 days. The pricing FAQ says the fair-use policy does not suspend an account on its own. That path is separate from error 40112.
- **Token shape.** Error 40167 means a connection declared itself a server but the token has no signed client-type claim. A server SDK using token auth needs that claim. Tokens issued to devices do not. Basic auth sends the API key, so it belongs on a server you operate, over TLS. The key holder can choose any `clientId`. AI Transport puts the agent’s stream, including tool inputs and outputs, on a channel any subscribed client with that capability can read. The SDK does not store the conversation.

## Sources

- [Ably pricing overview](https://ably.com/docs/platform/pricing) — accessed 2026-11-25
- [Ably limits](https://ably.com/docs/platform/pricing/limits) — accessed 2026-11-25
- [Ably token auth](https://ably.com/docs/auth/token) — accessed 2026-11-25
- [Ably basic auth](https://ably.com/docs/auth/basic) — accessed 2026-11-25
- [Error 40167](https://ably.com/docs/platform/errors/codes/40167-untrusted-client-type-declaration) — accessed 2026-11-25
- [Error 40112](https://ably.com/docs/platform/errors/codes/40112-account-message-limit-exceeded) — accessed 2026-11-25
- [Ably error codes](https://ably.com/docs/platform/errors/codes) — accessed 2026-11-25
- [Ably pricing FAQs](https://ably.com/docs/platform/pricing/faqs) — accessed 2026-11-25
- [Ably AI Transport](https://ably.com/docs/ai-transport.md) — accessed 2026-11-25
