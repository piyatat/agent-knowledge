---
id: airtable-api-grace-and-mcp-write
title: Airtable API calls return 429, or MCP wrote schema and records
kind: knowledge
tags: [airtable, database, mcp, billing]
status: active
updated: 2026-11-27
when_to_use: Airtable API calls returned 429, a base stopped accepting records, or an agent changed schema
---

## Summary

Airtable (`airtable`) gives a Free workspace one 30-day grace after 1,000 API calls in a month, then returns HTTP 429 until the next calendar month. Team workspaces past 100,000 calls slow to 2 requests a second. MCP uses that same quota, and a write-scoped connection can create records, change schema, and publish interfaces. New automations stay off until a person enables them.

## Notes

- **Monthly caps and the one grace.** Free is 1,000 public API calls per workspace per month. The first time that workspace passes the cap, a 30-day grace keeps the API working. That grace is available once. After it, extra calls return 429 until the count resets on the first day of the next calendar month, UTC. Team is 100,000 calls, then 2 requests a second until the same reset. Business and Enterprise Scale have no monthly call cap. A 429 on every request while the workspace you opened shows almost no usage usually means the base lives in a different workspace. Schema calls such as listing tables count. Third-party tools and MCP count too. A downgrade to Free applies at the end of the billing cycle, and calls already made that calendar month, including calls made on Team, count toward 1,000. Airtable checks usage about once a day, so the block can start a day or two after the downgrade.
- **The other 429 is a rate limit.** Five requests a second per base, and 50 a second per token, apply on every plan. After that 429, wait 30 seconds before the next call succeeds. A slow filter or a large page can time out on its own while the rate limit is fine.
- **Records stop, data stays.** At the record or attachment cap the base still opens and existing data stays. New records and attachments are refused until the workspace moves to a higher plan. Free is 1,000 records per base, Team 50,000, self-serve Business 125,000, summed across tables. Creates batch at most 10 records per request.
- **MCP writes are the user’s writes.** The documented OAuth and token scopes include record write and schema write. The server can create tables and fields, update records, publish interfaces, and delete automations that are off. An automation it creates stays paused. A commenter or read-only user can read and cannot update records. A creator permission on one base cannot create a new base. The plans overview bills a Team commenter. The pricing FAQ describes Team and Business charges as applying to users with edit permissions and does not list commenters. Plan against the plans overview.

## Sources

- [Managing API call limits](https://support.airtable.com/articles/7735693959-managing-api-call-limits-in-airtable) — accessed 2026-11-27
- [Airtable plans overview](https://support.airtable.com/articles/2277136852-airtable-plans-overview) — accessed 2026-11-27
- [Airtable pricing](https://airtable.com/pricing) — accessed 2026-11-27
- [Using the Airtable MCP server](https://support.airtable.com/articles/9897799762-using-the-airtable-mcp-server) — accessed 2026-11-27
- [MCP server overview](https://airtable.com/developers/agents/mcp/getting-started) — accessed 2026-11-27
- [Airtable MCP](https://www.airtable.com/platform/mcp) — accessed 2026-11-27
