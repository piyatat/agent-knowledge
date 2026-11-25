---
id: stytch-test-host-and-sandbox
title: Stytch refused an email, or a test send never left the sandbox
kind: knowledge
tags: [stytch, auth, email, rate-limits]
status: active
updated: 2026-11-25
when_to_use: A Stytch login returned billing_not_verified, a magic link never arrived, or SMS OTP in Test returned 429
---

## Summary

Stytch (`stytch`) keeps Test and Live on different hosts, and a success from the sandbox address does not mean an email was sent. Until a card is on the account, live endpoints that require billing return HTTP 400, and email is limited to the signup domain. Test SMS OTP is capped at 60 sends an hour per project, and the hour resets on the clock, not from the first send.

## Notes

- **Wrong environment.** Test keys, the public token, and users belong to `https://test.stytch.com`. Live keys belong to `https://api.stytch.com`. A user created on one host is absent on the other. Ids carry the environment, so a `user-test-` id is not a live user. Extra Test environments do not share data with the default Test environment either.
- **Billing gates.** `billing_not_verified` is HTTP 400: that endpoint cannot be used on Live until a card is added, and the error says to try it on Test. `billing_not_verified_for_email` is a different HTTP 400: until a card is added, mail goes only to you or to coworkers on the email domain used to sign up. The email error does not say Test is exempt. `sandbox@stytch.com` is only for a direct API call in Test. A correct request returns HTTP 200 and sends no email. The same address does not work through a frontend or mobile SDK. The sandbox page lists fixed magic-link tokens that produce a success, a 401, and a 404 from the authenticate endpoint.
- **Rate limits.** Intervals are not rolling. The documented Test SMS OTP send limit is 60 an hour per project. The 61st call is HTTP 429, and the counter clears at the top of the next hour. Email magic link Send, Login or Create, and Invite share one request a second per email address. A 429 `too_many_requests` body does not name which limit fired. SMS to countries other than the US and Canada is off by default for customers who were not already sending SMS before October 2023. Turning it on takes a country allowlist and a card. The workspace MCP server is OAuth into the project and can upload templates and change configuration. It is not a read-only view of users.

## Sources

- [Stytch API keys](https://stytch.com/docs/resources/workspace-management/api-keys) — accessed 2026-11-25
- [Consumer API overview](https://stytch.com/docs/api-reference/consumer/api/overview) — accessed 2026-11-25
- [Consumer API 400 errors](https://stytch.com/docs/api-reference/consumer/api/errors/400) — accessed 2026-11-25
- [Sandbox values](https://stytch.com/docs/api-reference/consumer/api/resources/sandbox-values) — accessed 2026-11-25
- [Stytch rate limits](https://stytch.com/docs/resources/policies/platform/rate-limits) — accessed 2026-11-25
- [Send an SMS OTP](https://stytch.com/docs/api-reference/consumer/api/otp/via-sms/send) — accessed 2026-11-25
- [Stytch MCP server](https://stytch.com/docs/resources/workspace-management/stytch-mcp-server) — accessed 2026-11-25
