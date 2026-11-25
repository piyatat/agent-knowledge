---
id: postmark-approval-and-sandbox-quota
title: Postmark blocks an unapproved recipient, or a sandbox send spends the free quota
kind: knowledge
tags: [postmark, email, deliverability, billing]
status: active
updated: 2026-11-25
when_to_use: Postmark refused a recipient, a test send used the monthly allowance, or a bulk broadcast returned error 14
---

## Summary

A new Postmark (`postmark`) account can send only to domains it has verified until a person approves it. Sandbox servers look delivered and still count toward the monthly email allowance, including the free plan’s hard stop at 100. The bulk broadcast API is a second approval, and creating a server without a type creates a live server.

## Notes

- **Approval.** Only the account owner can request it. Review is under 24 hours on weekdays and longer on weekends. While you wait, sends to a domain you added and confirmed work, and so does the sink address `test@blackhole.postmarkapp.com`, which is dropped after Postmark accepts it. Link tracking stays off until approval. The API overview lists error 413 with HTTP 422 as “This account is not approved to send email.” Templates, inbound, webhooks, and extra users can be set up during the wait.
- **What still spends the allowance.** A sandbox server processes the message, shows Delivered, fires webhooks, and counts toward the monthly volume. It never reaches an inbox, and a server cannot be switched between sandbox and live after it is created. The Servers API defaults `DeliveryType` to Live when the field is omitted, so an account token that creates a server creates a sending server unless sandbox is explicit. `POSTMARK_API_TEST` in the server-token header is a different path: the overview says that send is not delivered. The free plan’s 100 emails do not roll over and cannot go into overage. Paid overage is calculated at the end of the cycle and added to the next plan charge.
- **Broadcast is separate.** Transactional and broadcast traffic do not share IPs. Broadcast messages need an opt-out link. The bulk API is for broadcast streams only, and it is subject to its own approval. Until that approval, the endpoint returns HTTP 422 and error 14, and no bulk request id is created. Omitting `MessageStream` on that endpoint selects the broadcast stream. A failed address in the batch means resubmitting the whole request. Each message, transactional or broadcast, counts toward the same monthly plan limit.
- **Tokens.** A server token cannot create servers or domains. An account token can, and it belongs to the owner or an account admin. Three server tokens is the maximum on one server. SMTP secrets are shown once.

## Sources

- [Account approval](https://postmarkapp.com/support/article/1084-how-does-the-account-approval-process-work) — accessed 2026-11-25
- [Postmark API overview](https://postmarkapp.com/developer/api/overview) — accessed 2026-11-25
- [Server sandbox mode](https://postmarkapp.com/developer/user-guide/sandbox-mode/server-sandbox-mode/) — accessed 2026-11-25
- [Account and server API tokens](https://postmarkapp.com/support/article/1008-what-are-the-account-and-server-api-tokens) — accessed 2026-11-25
- [Bulk email](https://postmarkapp.com/developer/api/bulk-email) — accessed 2026-11-25
- [Message streams](https://postmarkapp.com/message-streams) — accessed 2026-11-25
- [Postmark pricing](https://postmarkapp.com/pricing) — accessed 2026-11-25
