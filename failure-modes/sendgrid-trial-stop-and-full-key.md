---
id: sendgrid-trial-stop-and-full-key
title: SendGrid stopped sending, or a new API key was Full Access
kind: knowledge
tags: [sendgrid, email, billing, auth]
status: active
updated: 2026-11-27
when_to_use: SendGrid API sends stopped after a trial, sandbox returned 200 and nothing arrived, or a key could change the account
---

## Summary

SendGrid (`sendgrid`) gives a new account one 60-day trial and then stops Email API and Marketing sends until each product is paid. Creating an API key without `scopes` grants Full Access. Sandbox mode returns HTTP 200, sends nothing, and does not spend credits. Twilio’s docs MCP cannot send mail.

## Notes

- **The trial ends the integration.** During the 60 days, Email API is capped at 100 messages a day and Marketing Campaigns at 100 messages a day plus 100 contacts. The trial can be used once. Choosing a paid plan ends it immediately. After the Email API trial, Web API and SMTP sends stop. After the Marketing trial, those sends stop and the Marketing tab is gone. The user can still log in. A compliance review can delay the first activation. Accounts that existed before 2025-03-25 can be on a different plan.
- **A key with no scopes is not a send-only key.** The create-key API says omitting `scopes` creates Full Access: every endpoint except billing and Email Address Validation. The key is shown once and cannot be retrieved later. The 101st key is HTTP 403. Mail Send needs `mail.send`. A From address still has to be a verified single sender or sit on an authenticated domain. An address at a large inbox provider can fail DMARC even when the JSON is valid.
- **HTTP 200 in sandbox is not delivery.** `sandbox_mode.enable` must be a boolean. A valid sandbox request returns 200. A delivered send returns 202. Sandbox writes no activity and no webhook events, and it consumes no credits. It assumes a `template_id` already contains a subject and body, and it does not check that content. `https://mcp.twilio.com/docs` only searches public docs. It does not accept an API key and it does not call Mail Send.

## Sources

- [Upgrade your plan](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/upgrading-your-plan) — accessed 2026-11-27
- [60-day free trial](https://support.sendgrid.com/hc/en-us/articles/35270136965403-Overview-of-60-Day-Free-Trial-Plans-for-New-SendGrid-Accounts) — accessed 2026-11-27
- [Create API keys](https://www.twilio.com/docs/sendgrid/api-reference/api-keys/create-api-keys) — accessed 2026-11-27
- [API keys](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/api-keys) — accessed 2026-11-27
- [Sandbox mode](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/sandbox-mode) — accessed 2026-11-27
- [Authenticate a single sender](https://www.twilio.com/docs/sendgrid/ui/sending-email/sender-verification) — accessed 2026-11-27
- [Twilio MCP server](https://www.twilio.com/docs/ai/mcp) — accessed 2026-11-27
