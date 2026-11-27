---
id: hubspot-search-cap-and-mcp-confirm
title: HubSpot search stopped at 10,000 rows, or MCP did not write
kind: knowledge
tags: [hubspot, crm, mcp, limits]
status: active
updated: 2026-11-27
when_to_use: A HubSpot search returned 400 past the first pages, a 429 arrived under the daily cap, or an MCP write never landed
---

## Summary

HubSpot (`hubspot`) MCP search follows the CRM search API: five requests a second, 200 rows a page, and 10,000 results per query. Paging past that is HTTP 400, even when the account is under its daily API cap. Create and update tools wait for an explicit confirmation. Sensitive Data blocks conversations and activities on MCP only. The developer usage guidelines and the product catalog disagree on Professional’s daily call cap.

## Notes

- **The search cap is not the daily cap.** The MCP server is based on CRM search. That API allows five requests per second per account and stops a single query at 10,000 results. A page holds at most 200 records. More than five filter groups, more than six filters in a group, more than 18 filters in total, or a body over 3,000 characters is HTTP 400. Records created or edited a moment ago can be missing. Archived records never appear. A free account can edit the default pipeline and cannot create a custom one.
- **A listed write tool can still do nothing.** `manage_crm_objects` and the segment and content write tools present the change and require explicit user confirmation before they run. Website pages, blog posts, and `render_asset` are limited to Claude, ChatGPT, and Gemini. Social writes need `social.publish`. With Sensitive Data on, calls, emails, meetings, notes, tasks, and conversations are blocked on MCP and still available through the CRM APIs. New object scopes show `REQUIRES_REAUTHORIZATION` until the user reconnects. The local developer MCP server builds apps and CMS assets. It does not read this account’s CRM.
- **Two limit tables.** Privately distributed apps in the usage guidelines are 100 requests per 10 seconds and 250,000 a day on Free and Starter, 190 and 625,000 on Professional, and 190 and 1,000,000 on Enterprise. The product catalog lists Professional at 650,000 a day and shows higher burst totals after a capacity pack. Plan against the usage guidelines. HTTP 429 sets `policyName` to `DAILY` or `SECONDLY`. The day resets at midnight in the account time zone. The free CRM FAQ’s “no limits on customer data” sits in the same sentence as a 1,000-contact cap. The catalog repeats that cap and lists 15 million contacts on a paid account.

## Sources

- [Remote HubSpot MCP server](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/integrate-with-the-remote-hubspot-mcp-server) — accessed 2026-11-27
- [MCP server generally available](https://developers.hubspot.com/changelog/remote-hubspot-mcp-server-is-now-generally-available) — accessed 2026-11-27
- [CRM Search API](https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm) — accessed 2026-11-27
- [API usage guidelines](https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines) — accessed 2026-11-27
- [Technical limits](https://legal.hubspot.com/hubspot-product-and-services-catalog/technical-limits) — accessed 2026-11-27
- [Free CRM](https://www.hubspot.com/products/crm) — accessed 2026-11-27
