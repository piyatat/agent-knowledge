---
id: postmark
title: Postmark — transactional email with a manual sending review
kind: service
tags: [postmark, email, messaging, deliverability]
status: active
updated: 2026-11-25
when_to_use: Sending transactional application email through Postmark after a domain is verified
---

## Summary

**Postmark** is a hosted email API that keeps transactional mail on a different sending path from broadcast mail. Every account starts on a free Developer plan of 100 emails a month, and a person reviews the account before it can send beyond domains you have verified. The developer docs describe server and account tokens, not a hosted MCP server. Use Postmark when inbox placement and that review matter. Use Resend (`resend`) or Loops (`loops`) when an agent should manage mail over MCP. Use Knock (`knock`) when one workflow must also reach in-app, push, or chat; Postmark can still be the email provider under Knock.

## Notes

- **Access.** Sign up at `links.get`. That page stayed on the URL on 2026-11-25 and is titled Sign Up for Postmark. A server token (`X-Postmark-Server-Token`) sends and reads mail for one server. Account owners, account admins, and that server’s admins can see it. A server can have three API tokens. An account token (`X-Postmark-Account-Token`) is for the account owner or an account admin and is what creates servers and sender signatures or domains. A missing or wrong token is HTTP 401. The header value `POSTMARK_API_TEST` is accepted as a server token for a send that is not delivered.
- **Streams and servers.** Transactional mail uses the outbound stream and goes to one recipient per message. Broadcast mail uses a separate stream and a separate IP pool, and it requires an opt-out link. Creating a server without a type creates a live server. A sandbox server never reaches a real inbox, shows as delivered, and still counts toward the monthly allowance. The type cannot be changed later. The bulk endpoint (`/email/bulk`) is broadcast-only, needs its own approval, and defaults to the broadcast stream when `MessageStream` is omitted.
- **Plans (pricing page, 2026-11-25).** Developer is $0 and 100 emails a month, it does not expire, and it allows no overage. There is no plan between 100 and 10,000. Basic is $15 a month for 10,000 then $1.80 per extra 1,000, with 45-day retention and 5 custom sending domains. Pro is $16.50 for 10,000 then $1.30 per 1,000, with retention customizable up to 365 days (45 by default), 10 custom domains, and inbound processing. Platform is $18 for 10,000 then $1.20 per 1,000, with unlimited custom domains and inbound. The Basic card does not list inbound. Unused emails do not roll over. Paid overage is added to the next month’s plan charge. A dedicated IP starts at $50 a month on Pro or higher, for accounts sending 300,000 emails a month or more.
- **Caveats.** Until the account is approved, mail to addresses outside verified domains is refused, and a sandbox send still spends the 100-email allowance. Details: `postmark-approval-and-sandbox-quota`.

## Sources

- [Postmark API overview](https://postmarkapp.com/developer/api/overview) — accessed 2026-11-25
- [Account and server API tokens](https://postmarkapp.com/support/article/1008-what-are-the-account-and-server-api-tokens) — accessed 2026-11-25
- [Account approval](https://postmarkapp.com/support/article/1084-how-does-the-account-approval-process-work) — accessed 2026-11-25
- [Server sandbox mode](https://postmarkapp.com/developer/user-guide/sandbox-mode/server-sandbox-mode/) — accessed 2026-11-25
- [Message streams](https://postmarkapp.com/message-streams) — accessed 2026-11-25
- [Bulk email](https://postmarkapp.com/developer/api/bulk-email) — accessed 2026-11-25
- [Postmark pricing](https://postmarkapp.com/pricing) — accessed 2026-11-25
- [Sign up for Postmark](https://account.postmarkapp.com/sign_up) — accessed 2026-11-25
- [Postmark](https://postmarkapp.com/) — accessed 2026-11-25
