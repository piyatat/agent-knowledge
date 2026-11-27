---
id: airtable
title: Airtable — bases, interfaces, and a hosted MCP server
kind: service
tags: [airtable, database, mcp, records]
status: active
updated: 2026-11-27
when_to_use: Reading or updating records in an Airtable base, or letting an agent build tables and automations
---

## Summary

**Airtable** stores records in bases and can present them as interfaces, forms, and automations. Plans are per workspace. Free allows 1,000 records per base and 1,000 API calls per workspace each month. A hosted MCP server at `https://mcp.airtable.com/mcp` is on every plan, including Free, at no extra charge, and it uses that same API quota. Use Airtable when the system of record is a base. Use Notion (`notion-mcp`) for pages and databases in Notion. Use Convex (`convex`) or Neon (`neon`) when the data should live in an application database.

## Notes

- **Access.** The homepage links sign-up to `links.get`. A direct request for that URL from this runner returned HTTP 403, so the stored URL is the vendor’s own href. MCP is `https://mcp.airtable.com/mcp`. OAuth can limit which bases, apps, and workspaces the client may use, and the server supports dynamic client registration. A personal access token is the path for a script or server. The getting-started page lists write scopes for records, schema, and comments alongside the read scopes. The token page is `https://airtable.com/create/tokens`. An admin can block MCP the same way they block API access.
- **Who can write.** A base owner or creator can change schema and records. An editor can change records. A commenter or read-only collaborator can read. Interface-only users see the pages and data those interfaces expose. Creating a new base needs a workspace owner or creator. A creator permission that exists only on a base cannot create another base. Automations created through MCP arrive paused until a person turns them on. The server can delete an automation that is already off, and it can publish interface pages.
- **Plans.** The plans overview lists Free at 1,000 records per base, 1,000 API calls per workspace per month, 1 GB of attachments, two weeks of history, and 100 automation runs. The first workspace starts a 14-day Team trial. Later Free workspaces do not. Adding a payment method during that trial upgrades the workspace to Team and starts billing. Team is $24 per billable collaborator each month, or $20 billed annually: 50,000 records, 100,000 API calls, 20 GB of attachments, and 25,000 automation runs. Self-serve Business is $54 or $45 annually: 125,000 records, unlimited monthly API calls, 100 GB, and 100,000 automation runs. Business and Enterprise Scale require a private email domain. Record caps sum across every table in the base. A workspace holds up to 1,500 bases. A base holds up to 1,000 tables and 1,000 views, and a table holds up to 500 fields.
- **Seats.** The plans overview bills Team collaborators at Commenter and above, including interface commenters. On self-serve Business it bills Owner, Creator, and Editor, and it lists Commenters as non-billable. The pricing FAQ says Team and Business charge users who have edit permissions on at least one base, and it does not mention Commenters. Plan against the plans overview before adding a Team commenter. Read-only collaborators, form submissions, and share links are unpaid on both pages. Free allows 5 Editor or Creator collaborators and 50 Commenters.
- **API.** Five requests a second per base, and 50 a second per personal access token, on every plan. A burst past that returns HTTP 429, and the next requests fail until 30 seconds have passed. Creating records batches at most 10 per request. Monthly caps apply to Free and Team only. MCP calls, including schema reads, count toward that monthly number. Automation runs reset on the first of the calendar month, and failed or canceled runs count.
- **Caveats.** Free API use past 1,000 calls gets one 30-day grace, then blocks. An agent with write scopes can change records and schema. Details: `airtable-api-grace-and-mcp-write`.

## Sources

- [Airtable plans overview](https://support.airtable.com/articles/2277136852-airtable-plans-overview) — accessed 2026-11-27
- [Airtable pricing](https://airtable.com/pricing) — accessed 2026-11-27
- [Managing API call limits](https://support.airtable.com/articles/7735693959-managing-api-call-limits-in-airtable) — accessed 2026-11-27
- [Using the Airtable MCP server](https://support.airtable.com/articles/9897799762-using-the-airtable-mcp-server) — accessed 2026-11-27
- [Airtable MCP](https://www.airtable.com/platform/mcp) — accessed 2026-11-27
- [MCP server overview](https://airtable.com/developers/agents/mcp/getting-started) — accessed 2026-11-27
- [Sign up for Airtable](https://airtable.com/signup) — accessed 2026-11-27
- [Airtable](https://www.airtable.com/) — accessed 2026-11-27
