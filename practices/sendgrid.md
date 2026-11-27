---
id: sendgrid
title: SendGrid — Twilio email API with a 60-day trial
kind: service
tags: [sendgrid, email, twilio, messaging]
status: active
updated: 2026-11-27
when_to_use: Sending transactional email from a Twilio account after a sender is verified
---

## Summary

**SendGrid** is Twilio’s email API. A new account gets one 60-day trial: 100 Email API messages a day and, separately, 100 Marketing Campaigns messages a day with 100 stored contacts. After those 60 days, sending stops until that product is on a paid plan. There is no hosted MCP server that sends mail. Twilio’s docs MCP indexes SendGrid’s public docs and does not call the account. Use SendGrid when email should live on the same Twilio account as SMS. Use Resend (`resend`) when an agent should manage mail over MCP. Use Postmark (`postmark`) when a reviewed transactional stream matters more than a Twilio login.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-27 that URL returned HTTP 302 to `https://login.sendgrid.com/unified_login/start?screen_hint=signup` with no one-time token. The SendGrid product page links to `https://signup.sendgrid.com/`. The login page links there too. An email address can be used once across Twilio products. An existing Twilio user adds SendGrid from the product switcher instead of a second signup. A compliance review can hold a new account. The support article says to wait and watch for that email. The API key is shown once. An account can hold 100 keys. The 101st create returns HTTP 403. Omitting `scopes` when creating a key grants Full Access, which is every endpoint except billing and Email Address Validation. Billing needs its own key. Mail Send needs the `mail.send` scope. Global calls use `https://api.sendgrid.com`. EU regional subusers use `https://api.eu.sendgrid.com`.
- **Trial.** The upgrade page and the support article agree. The trial starts on the signup date, lasts 60 days, and does not ask for a card. Email API: 100 messages a day by Web API or SMTP. Marketing Campaigns: 100 messages a day and 100 contacts. The two products upgrade and downgrade separately. The trial is available once. Upgrading ends it immediately, and it cannot be restarted. When the Email API trial ends, API and SMTP sends stop until a paid Email API plan is chosen. When the Marketing trial ends, those sends stop and the Marketing tab is unavailable. Login still works. Accounts created before this trial, including some Microsoft Azure accounts, can differ. The article dates the trial to accounts created from 2025-03-25.
- **Paid plans.** The pricing page lists Essentials starting at $19.95 a month, Pro starting at $89.95 a month, and Premier as custom. The page says overage charges may apply and does not print the per-email overage. Pro includes dedicated IPs and single sign-on. The v3 Mail Send FAQ allows up to 10,000 requests per second and up to 1,000 recipients on one message. Other endpoints publish their own caps in `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`. Over an endpoint cap the API returns HTTP 429.
- **What a send actually does.** Twilio requires a verified single sender or an authenticated domain. A From address on a large inbox provider can fail DMARC. The docs warn not to use that address. Sandbox mode (`mail_settings.sandbox_mode.enable` set to the boolean `true`) validates the JSON shape and returns HTTP 200. A real send returns HTTP 202. Sandbox does not deliver, does not write Email Activity or the Event Webhook, and does not consume credits. It does not check the subject and body inside a `template_id`. A quoted `true` is rejected with `The sandbox mode enable param should be a boolean value.` Details: `sendgrid-trial-stop-and-full-key`.
- **Agents and docs.** `https://mcp.twilio.com/docs` searches public Twilio and SendGrid docs. It takes no account credential and cannot send. Community MCP servers that call Mail Send are not this product. A key with Full Access can send, manage contacts, and read stats. Prefer a key scoped to `mail.send` for an agent that only sends.

## Sources

- [Upgrade your plan](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/upgrading-your-plan) — accessed 2026-11-27
- [60-day free trial](https://support.sendgrid.com/hc/en-us/articles/35270136965403-Overview-of-60-Day-Free-Trial-Plans-for-New-SendGrid-Accounts) — accessed 2026-11-27
- [Email API pricing](https://www.twilio.com/en-us/products/email-api/pricing) — accessed 2026-11-27
- [Create API keys](https://www.twilio.com/docs/sendgrid/api-reference/api-keys/create-api-keys) — accessed 2026-11-27
- [API keys](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/api-keys) — accessed 2026-11-27
- [Sandbox mode](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/sandbox-mode) — accessed 2026-11-27
- [v3 Mail Send FAQ](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/v3-mail-send-faq) — accessed 2026-11-27
- [Rate limits](https://www.twilio.com/docs/sendgrid/api-reference/how-to-use-the-sendgrid-v3-api/rate-limits) — accessed 2026-11-27
- [Authenticate a single sender](https://www.twilio.com/docs/sendgrid/ui/sending-email/sender-verification) — accessed 2026-11-27
- [Twilio MCP server](https://www.twilio.com/docs/ai/mcp) — accessed 2026-11-27
- [How to create a SendGrid account](https://support.sendgrid.com/hc/en-us/articles/35394877582235-How-to-Create-a-SendGrid-Account) — accessed 2026-11-27
- [SendGrid sign-up](https://signup.sendgrid.com/) — accessed 2026-11-27
- [Twilio SendGrid](https://www.twilio.com/en-us/sendgrid) — accessed 2026-11-27
