---
id: twilio
title: Twilio — SMS, voice, and Verify, with a docs-only MCP
kind: service
tags: [twilio, sms, voice, messaging]
status: active
updated: 2026-11-23
when_to_use: Sending an SMS or WhatsApp message, placing a call, or checking a phone number from an app
---

## Summary

**Twilio** is a hosted API for SMS, WhatsApp, voice, Verify, Lookup, and email. A new account is a **30-day** trial with a fixed bundle of free units and no card. Custom message bodies, unverified recipients, and US 10DLC registration are not available on that trial. The hosted MCP server at `https://mcp.twilio.com/docs` only searches public API docs. It does not send messages and it does not use an account. Use Twilio when the product must text or call. Use Resend (`resend`) for application email alone, and Deepgram (`deepgram`) or LiveKit (`livekit-agents`) when the job is transcription or a media room.

## Notes

- **Access.** Sign up at `links.get`. The trial docs use that URL. API requests use HTTP Basic. Prefer an API key SID as the username and the key secret as the password, and revoke that key if it leaks. Use the Account SID as the username and the Auth Token as the password only when the API reference says so: account and subaccount management, Auth Token rotation, and test credentials. A Main key can do what the Auth Token can. A Standard key cannot call Accounts resources. Restricted keys (Key resource v1) limit which resources they touch. Test credentials are a separate SID and token from the live ones. Store them outside the agent.
- **MCP.** Public beta, not covered by the support terms or the SLA. No account and no credential. Tools are `twilio__search` (ranked operations and articles) and `twilio__retrieve` (parameter schemas for ids from search). It indexes public OpenAPI specs, including SendGrid and Segment docs. When several versions exist it returns the latest unless you set `filter.version`. Programmable Messaging has both legacy `v2010` and current `v1`. Execute-on-your-account tools are listed as planned, not available.
- **Trial (docs, 2026-11-23).** No card. Expires 30 days after sign-up; unused trial resources stop. Included units, tracked on the parent account: 100 SMS, 100 WhatsApp messages, 75 voice minutes, 3,000 emails, 40 verifications, 100 lookups. SMS and voice stay in the country of the sign-up phone number. Email stays on the sign-up address. You can verify at most five recipient numbers, shared across Messaging, WhatsApp, Voice, and Verify. The sign-up number is verified automatically. One number can sit on at most three accounts worldwide. An organization can have at most two parent accounts that still have trial units. Outbound traffic uses a shared Twilio trial number, which you do not keep after upgrade, and which can differ by product and recipient. SMS, email, and WhatsApp must use Twilio’s templates. Custom bodies are refused. Voice may use a template or custom TwiML with some verbs blocked. RCS is after upgrade. Trials exist only in the countries listed on the trial page.
- **After upgrade.** A fresh set of free units is granted, including another 100 messages and 75 voice minutes, even if the trial units were partly used. A single event larger than the remainder is billed at the normal rate and the leftover units stay. Upgrading during sign-up adds 30% to those post-upgrade units, except Conversations products and the free first month of a phone number. The first month of a purchased US local or US/Canada toll-free number is free. Verified-recipient limits and the template-only rule go away. US 10DLC traffic to US recipients needs A2P registration, which a trial account cannot start. Standard campaigns can take up to five business days; sending waits until the campaign is VERIFIED. Toll-free numbers must be verified before they text the US or Canada, and Twilio says that verification is free. Details: `twilio-trial-and-docs-mcp`.
- **Alternatives.** Resend (`resend`) for transactional email without a phone number. Deepgram (`deepgram`) for speech-to-text. LiveKit (`livekit-agents`) for a realtime audio or video room. Stripe (`stripe`) for payments, not messaging.

## Sources

- [Twilio trial account](https://www.twilio.com/docs/usage/trials) — accessed 2026-11-23
- [Get started with your Twilio free trial account](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account) — accessed 2026-11-23
- [Requests to Twilio](https://www.twilio.com/docs/usage/requests-to-twilio) — accessed 2026-11-23
- [A2P 10DLC registration application quickstart](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/quickstart) — accessed 2026-11-23
- [Twilio MCP server](https://www.twilio.com/docs/ai/mcp) — accessed 2026-11-23
- [Twilio sign-up](https://www.twilio.com/try-twilio) — accessed 2026-11-23
- [Twilio](https://www.twilio.com/) — accessed 2026-11-23
