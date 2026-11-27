---
id: intercom
title: Intercom — support inbox, Fin, and a hosted MCP server
kind: service
tags: [intercom, support, mcp, fin]
status: active
updated: 2026-11-27
when_to_use: Reading or updating an Intercom inbox, help center, or Fin setup from an agent
---

## Summary

**Intercom** is a hosted support inbox with Fin, a help center, and tickets. There is no permanent free plan. A 14-day trial does not require a card and includes Fin and the add-ons. On 2026-11-27 the pricing page’s annual cards showed Essential at $19 per seat per month for new customers, with $29 also on the card, Advanced at $85, and Expert at $132. The same page’s offer descriptions list Essential at $29 and Advanced at $99 per seat per month. Fin is $0.99 per outcome. The MCP server can read conversations and contacts, publish help-center articles, and, over OAuth, ask Fin Operator to change live configuration. Australia-hosted workspaces cannot connect. Use Intercom when the job is the support inbox. Use Customer.io (`customer-io`) for lifecycle messaging. Use HubSpot (`hubspot`) when the record should live in the CRM.

## Notes

- **Access.** The homepage and the pricing page link sign-up to `links.get`. On 2026-11-27 that URL returned HTTP 307 to `https://www.intercom.com/signup/email` with no one-time token, and that page stayed HTTP 200 (title Sign Up | Intercom). US MCP is `https://mcp.intercom.com/mcp`. EU is `https://mcp.eu.intercom.com/mcp`. Requests to the EU host stay in the EU. The `/sse` paths are deprecated. Australia-hosted workspaces are not supported. Using the US endpoint for an EU workspace can fail after Allow with a technical-difficulties page. OAuth shows a consent page, which expires after 15 minutes, then Intercom’s own authorization screen. The application name on the consent page is supplied by the client and is not verified. Dynamic client registration is on, and a redirect URI must be allowlisted unless it is `localhost` or `127.0.0.1`. A bearer token does not receive the Fin Operator tools.
- **Plans.** The trial is 14 days with no card. The pricing FAQ says it includes all features, Fin, and add-ons, and that billing starts when a plan and a payment method are added. One full seat is the minimum. Annual cards on the pricing page: Essential $19, with $29 shown beside it and the line “New customers save 35%”; Advanced $85; Expert $132. Offer text embedded on that page describes Essential as $29 per seat per month and Advanced as $99. Plan against the card that checkout is showing. A monthly price can differ from the annual card. Fin is $0.99 per outcome when the customer confirms, does not ask for more help, or Fin completes a Procedure, including a handoff. At most one charge per conversation, and it is refunded if the conversation is reopened. A spending limit can pause Fin. A learning-center article also prices a sales qualification at $9.99. The pricing-page FAQ does not. Plan against the pricing page for support outcomes. Pro, which includes Operator, starts at $100 per workspace per month. The FAQ says that includes analysis of 500 conversations and 6,000 credits, then $0.01 per extra credit. Copilot is $29 per agent per month on annual billing, or $35 monthly. Fin Voice is $1.99 per voice outcome.
- **What MCP changes.** `create_article` defaults to draft. Setting `state` to `published` publishes it. `update_article` can publish too. `parent_type` is ignored. Placement uses `parent_id`. `add_internal_note` is visible to teammates only and does not reply to the customer. A note on a snoozed conversation assigned to someone else unsnoozes it. The inbox ticket number, such as `#123`, is not an id. Search pages default to 5 items and cap at 150. An OAuth grant made before a permission existed must be disconnected and reconnected. Details: `intercom-region-and-operator-apply`.
- **Rate limits.** Private apps share 10,000 REST calls per minute per workspace. The workspace cap across apps is 25,000 per minute. A public app has its own 10,000 per minute, under the same workspace cap. The minute is split into 10-second windows. HTTP 429 uses the code `rate_limit_exceeded`. The rate-limit headers can be absent. The learning center lists extended API limits on Expert. The rate-limit page does not publish a higher number. It says to ask Intercom. Fin Operator tools share 60 calls per minute per connection, including polls of `get_operator_response`. Only `send_operator_message` spends Operator credits.

## Sources

- [Intercom MCP](https://developers.intercom.com/docs/guides/mcp) — accessed 2026-11-27
- [Fin Operator tools](https://developers.intercom.com/docs/guides/fin-operator-mcp) — accessed 2026-11-27
- [Intercom rate limiting](https://developers.intercom.com/docs/references/rest-api/errors/rate-limiting) — accessed 2026-11-27
- [Intercom pricing](https://www.intercom.com/pricing) — accessed 2026-11-27
- [Intercom pricing guide](https://www.intercom.com/learning-center/intercom-pricing) — accessed 2026-11-27
- [Intercom sign-up](https://www.intercom.com/signup) — accessed 2026-11-27
- [Intercom](https://www.intercom.com/) — accessed 2026-11-27
