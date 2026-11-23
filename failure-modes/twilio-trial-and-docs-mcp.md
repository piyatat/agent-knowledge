---
id: twilio-trial-and-docs-mcp
title: A Twilio trial rejects a custom SMS, or the docs MCP looks like the account API
kind: knowledge
tags: [twilio, sms, trial, mcp]
status: active
updated: 2026-11-23
when_to_use: A Twilio SMS to a real user failed on a new account, US 10DLC will not register, or an agent treated the Twilio MCP server as permission to send
---

## Summary

A Twilio (`twilio`) trial lasts 30 days, texts only verified numbers in the sign-up country, and refuses custom SMS, email, and WhatsApp bodies. US 10DLC registration is impossible until the account is paid. The MCP server at `https://mcp.twilio.com/docs` searches public docs and cannot place a call or send a message.

## Notes

- **Trial sends fail closed.** No card is required. After 30 days the trial resources stop. SMS and voice go only to the country of the phone number used at sign-up, and only to verified recipients. Five verified numbers is the account cap, shared with WhatsApp, Voice, and Verify. The sign-up number counts as one. The same number can be verified on at most three accounts. Outbound uses a shared trial number you do not choose and do not keep after upgrade; the number can differ by product and by recipient. SMS must be one of Twilio’s templates (order confirmation, appointment reminder, and similar). A custom body is not accepted. The same template rule covers email and WhatsApp. Voice templates work; some TwiML verbs are blocked. Email on the trial goes only to the sign-up address. The included units are 100 SMS, 100 WhatsApp messages, 75 voice minutes, 3,000 emails, 40 verifications, and 100 lookups, counted on the parent account. An organization may have two parent accounts with trial units.
- **Upgrade does not register a US long code.** Upgrading removes the verified-recipient cap and the template-only rule, and grants a new set of free units even if the trial bundle was partly used. An event that needs more units than remain is billed at the current rate; leftover units stay. US application-to-person traffic from a 10-digit long code still needs A2P 10DLC. Trial accounts cannot submit that registration. You need a paid account, a purchased US 10DLC number, and a campaign whose status is VERIFIED. Standard campaign review is up to five business days; Twilio says to contact support if it is still in progress after ten. Toll-free numbers need toll-free verification before they message the US or Canada. Twilio documents that verification as free. The first month of a purchased US local or US/Canada toll-free number is free; the trial number itself is not transferred.
- **MCP is a catalog.** The server is a public beta and is outside the support terms and the SLA. It accepts no Account SID, API key, or other credential. `twilio__search` and `twilio__retrieve` return public specs and articles. They do not execute the API. Search defaults to the newest version of an operation. Programmable Messaging `v1` comes back ahead of legacy `v2010` unless `filter.version` says otherwise. An agent that “sends an SMS” through this server has only read the docs.
- **Which credential.** Prefer an API key SID and secret as HTTP Basic, and revoke that one key if it leaks. The Account SID and Auth Token are for the APIs that still require them, including Accounts resources, token rotation, and test credentials. A Standard key cannot manage accounts. A Main key is as broad as the Auth Token. Test credentials are not the live SID and token.

## Sources

- [Twilio trial account](https://www.twilio.com/docs/usage/trials) — accessed 2026-11-23
- [Get started with your Twilio free trial account](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account) — accessed 2026-11-23
- [Requests to Twilio](https://www.twilio.com/docs/usage/requests-to-twilio) — accessed 2026-11-23
- [A2P 10DLC registration application quickstart](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/quickstart) — accessed 2026-11-23
- [Twilio MCP server](https://www.twilio.com/docs/ai/mcp) — accessed 2026-11-23
