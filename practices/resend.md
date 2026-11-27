---
id: resend
title: Resend — transactional email and a hosted MCP server
kind: service
tags: [resend, email, mcp, messaging]
status: active
updated: 2026-11-27
when_to_use: Sending app email through Resend, or letting an agent manage domains, templates, and inbound mail
---

## Summary

**Resend** is a hosted email API for transactional sends, inbound mail, broadcasts, and automations. A remote MCP server at `https://mcp.resend.com/mcp` lets an agent act on one team over Streamable HTTP. The same sending tools exist as a local server; inbox threads exist only on the remote server. Use Resend when the app sends its own mail. Use Loops (`loops`) when marketing and transactional mail share one audience. Use Postmark (`postmark`) when a reviewed transactional stream matters more than an MCP server. Use SendGrid (`sendgrid`) when the mail should sit on a Twilio account. Use Composio (`composio`) when the agent should use someone’s Gmail account instead.

## Notes

- **Access.** Create an account at `links.get`. The MCP guide (`links.docs`) is the client pointer. Browser clients sign in with OAuth and approve the team. Revoke that grant from the team’s settings. A client with no browser sends a Resend API key as a Bearer token. An API key is `full_access` (any resource, including creating more keys) or `sending_access` (send only, optionally one domain).
- **What an agent can do.** Send, list, update, cancel, and batch emails; read inbound messages; manage domains, templates, contacts, segments, topics, broadcasts, automations, webhooks, and request logs. The remote server also covers inboxes: threads, labels, drafts, replies, and forwards. The local package does not.
- **Plans (pricing and quota pages, 2026-11-21).** Transactional Free is $0: 3,000 emails a month, 100 a day, 3 domains, and 1,000 marketing contacts. Pro is $20/month for 50,000 emails or $35/month for 100,000, then $0.90 per extra 1,000, with 10 domains. Scale starts at $90/month for 100,000. Paid plans have no daily cap. Each `To`, `Cc`, or `Bcc` recipient counts as its own email, and each inbound message counts too. Overage sending stays off until a team admin enables it; the default cap is 400% of the monthly quota. All plans include 10,000 automation runs a month and 3 inboxes. Extra inboxes on a paid transactional plan are $1 each. A domains add-on is $20/month for 100 more domains. A dedicated IP is $30/month on Scale when sending more than 3,000 emails a day. Email content is kept 30 days except on Enterprise.
- **Sending.** Mail to anyone except the account owner needs a verified domain. The test sender `onboarding@resend.dev` delivers only to that owner. Verifying a subdomain does not authorize the root domain. Every account starts at 10 requests per second, shared by every key on the team. A batch of up to 100 emails is one request against that rate.
- **Alternatives.** Knock (`knock`) when one workflow should also reach in-app, push, SMS, or chat, with a downstream sender still billed on its own. Composio when the mailbox is a user’s Google or Microsoft account. Stripe (`stripe`) for taking payment, not for delivering mail.
- **Caveats.** A quota failure is not retried, and a full-access key in a headless client can mint more keys. Details: `resend-quota-and-test-domain`.

## Sources

- [Resend MCP server](https://resend.com/docs/mcp-server) — accessed 2026-11-21
- [Resend pricing](https://resend.com/docs/knowledge-base/what-is-resend-pricing) — accessed 2026-11-21
- [Account quotas and limits](https://resend.com/docs/knowledge-base/account-quotas-and-limits) — accessed 2026-11-21
- [Add and verify a domain](https://resend.com/docs/add-a-domain) — accessed 2026-11-21
- [Create an API key](https://resend.com/docs/api-reference/api-keys/create-api-key) — accessed 2026-11-21
- [Resend sign-up](https://resend.com/signup) — accessed 2026-11-21
- [Send emails with n8n and Resend](https://resend.com/docs/knowledge-base/n8n-integration) — accessed 2026-11-21
