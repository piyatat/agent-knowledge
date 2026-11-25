---
id: ably
title: Ably — hosted realtime pub/sub and AI Transport
kind: service
tags: [ably, realtime, pubsub, ai-transport]
status: active
updated: 2026-11-25
when_to_use: Publishing a live stream or agent output to many subscribed clients
---

## Summary

**Ably** is a hosted realtime platform. Clients attach to channels for pub/sub, presence, chat, and AI Transport, which forwards an agent’s stream to every subscribed device. Billing is monthly active users identified by `clientId`. Connections from the server SDK and from the AI Transport agent SDK are left out of that count. The docs describe API keys and tokens, not a hosted MCP server. Use Ably when many clients must receive the same live stream. Use Liveblocks (`liveblocks`) when people and agents share a document room. Use Convex (`convex`) when the app also needs a database.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-25 that page stayed on the URL and is titled Sign up | Ably Realtime. Servers authenticate with an API key (basic auth), and only over TLS. Device clients should use a token your server issues. An access token lasts at most 24 hours. A revocable token lasts at most 1 hour. A server SDK that connects with a token must carry the JWT claim `x-ably-clientType` set to `server`. Without that claim Ably returns error 40167 and HTTP 401. A client that holds the API key can claim any `clientId`, so that id is not proof of who the caller is.
- **Who counts as a user.** Ably counts an MAU when a `clientId` connects or calls from a user’s device, once per app per calendar month, not once per account. The same person with two `clientId` values counts twice. A device with no `clientId` is rejected. REST or a custom client that does not declare `clientType=server` counts as a user. MQTT clients count unless the `clientId` starts with `server-`. Clients on the Pusher adapter always count as users. AI Transport agents created with that SDK are excluded, the same way server-package clients are.
- **Plans (pricing docs, 2026-11-25).** Free is 500 MAU a month and does not require a card. Pro is $29 a month billed annually, or $35 month to month, for 1,000 MAU. Business starts at $349 annually or $419 monthly for the same 1,000. Further published steps are 5,000, 10,000, 25,000, and 50,000 MAU. Extra MAU on Pro or Business are $0.05, invoiced in arrears, and the app is not blocked for passing the allowance. Enterprise is a contract. Pro and Business also sit under a fair-use policy that is separate from the limit tables.
- **Caveats.** Passing the MAU allowance bills you. Passing the message or connection ceiling rejects traffic. A channel subscriber can read tool traffic the agent published. Details: `ably-mau-and-message-block`.

## Sources

- [Ably pricing overview](https://ably.com/docs/platform/pricing) — accessed 2026-11-25
- [Ably limits](https://ably.com/docs/platform/pricing/limits) — accessed 2026-11-25
- [Ably token auth](https://ably.com/docs/auth/token) — accessed 2026-11-25
- [Ably basic auth](https://ably.com/docs/auth/basic) — accessed 2026-11-25
- [Ably AI Transport](https://ably.com/docs/ai-transport.md) — accessed 2026-11-25
- [Sign up for Ably](https://ably.com/sign-up) — accessed 2026-11-25
- [Ably](https://ably.com/) — accessed 2026-11-25
- [Ably docs](https://ably.com/docs) — accessed 2026-11-25
