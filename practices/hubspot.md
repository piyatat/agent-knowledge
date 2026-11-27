---
id: hubspot
title: HubSpot — free CRM with a remote read-write MCP server
kind: service
tags: [hubspot, crm, mcp, contacts]
status: active
updated: 2026-11-27
when_to_use: Reading or updating HubSpot contacts, deals, and tickets, or letting an agent change that CRM
---

## Summary

**HubSpot** is a hosted CRM for contacts, companies, deals, tickets, and marketing content. Free tools stay at $0 with no expiration and no card: two users and 1,000 contacts. The free CRM FAQ also says “no limits on customer data” in that same sentence. The product catalog caps free accounts at 1,000 contacts and paid accounts at 15 million. Plan against the catalog. A remote MCP server at `https://mcp.hubspot.com` can read and write CRM data. It is not the developer MCP server used to build apps. Use HubSpot when the customer record already lives there. Use Airtable (`airtable`) when the system of record is a base. Use Intercom (`intercom`) when the job is a support inbox.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-27 that URL stayed HTTP 200 (title Get started with HubSpot). The free CRM page links to it. MCP is `https://mcp.hubspot.com`. OAuth 2.1 with PKCE is required. The developer docs say you create an MCP auth app in the account and connect a client with that app’s client id and secret. Newly added scopes need a disconnect and reconnect. `get_user_details` reports what this account can use. Access tokens expire. The MCP page does not print the lifetime. The remote server is separate from the local developer MCP server.
- **Free and paid.** Free is $0, no card, and no expiration, with two users. The free CRM page lists Starter starting at $15 per seat each month. The product catalog lists 1,000 contacts on a free account and 15 million on a paid account. The FAQ line “no limits on customer data” does not raise the 1,000-contact cap.
- **API capacity.** The headless-pricing post of 2026-11-18 says calls from agents to the existing APIs count toward the plan’s included API capacity and do not consume HubSpot Credits. The post does not print a credit price. Credits are described for a separate governed agent environment. Developer usage guidelines for a privately distributed app: Free and Starter are 100 requests per 10 seconds per app and 250,000 per day per account; Professional is 190 and 625,000; Enterprise is 190 and 1,000,000. The daily cap is shared across apps. The burst cap is per app. A capacity pack is $500 a month, at most two. The guidelines say each pack adds 1,000,000 calls a day and sets the burst at 250 per 10 seconds per app. The product catalog lists Professional at 650,000 daily calls, and burst totals of 350, 440, and 690 per 10 seconds once packs are added. Plan against the usage guidelines until those pages match. HTTP 429 names `policyName` `DAILY` or `SECONDLY`. The daily limit resets at midnight in the account time zone. OAuth responses omit the daily remaining headers. A marketplace public OAuth app is 110 per 10 seconds, and a capacity pack does not raise that cap.
- **Search is stricter.** The MCP page says the server is based on the CRM search API. That API allows five requests per second per account, 200 records per page, and 10,000 results per query. A query may use five filter groups and six filters in a group, and 18 filters in total. A body over 3,000 characters is HTTP 400. New and updated records can lag. Archived records do not appear. A free account cannot create a custom pipeline through MCP. It can edit the default pipeline.
- **What MCP writes.** `manage_crm_objects`, segment writes, and several content tools require explicit user confirmation before the change runs. Publishing website pages and blog posts, and `render_asset`, is limited to Claude, ChatGPT, and Gemini. Social writes need the `social.publish` scope. If Sensitive Data is on, conversation and activity data is blocked on MCP and remains available on the CRM APIs. Quotes in beta need Revenue Hub Professional or Enterprise and the `manage revenue objects` scope. Details: `hubspot-search-cap-and-mcp-confirm`.

## Sources

- [Remote HubSpot MCP server](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/integrate-with-the-remote-hubspot-mcp-server) — accessed 2026-11-27
- [MCP server generally available](https://developers.hubspot.com/changelog/remote-hubspot-mcp-server-is-now-generally-available) — accessed 2026-11-27
- [API usage guidelines](https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines) — accessed 2026-11-27
- [CRM Search API](https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm) — accessed 2026-11-27
- [Technical limits](https://legal.hubspot.com/hubspot-product-and-services-catalog/technical-limits) — accessed 2026-11-27
- [Headless pricing](https://www.hubspot.com/company-news/pricing-headless) — accessed 2026-11-27
- [Free CRM](https://www.hubspot.com/products/crm) — accessed 2026-11-27
- [HubSpot sign-up](https://app.hubspot.com/signup-hubspot/crm) — accessed 2026-11-27
