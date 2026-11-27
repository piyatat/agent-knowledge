---
id: airbyte
title: Airbyte Cloud — data syncs billed in credits, with a write-capable MCP
kind: service
tags: [airbyte, etl, sync, mcp]
status: active
updated: 2026-11-27
when_to_use: Moving source data into a warehouse on a schedule, or letting an agent start and inspect those syncs
---

## Summary

**Airbyte Cloud** copies data from sources into destinations and can let an agent read those systems. A trial lasts 14 days or 400 credits, whichever comes first, and it starts after the first successful sync. The pricing page asks for no card and lists Standard at $20 a month. Running out of credits does not stop syncs. Overage is billed later. The hosted MCP server can create connections and start syncs unless the client uses the read-only URL. Use Airbyte when data has to move into a warehouse on a schedule. Use Snowflake (`snowflake`) or ClickHouse Cloud (`clickhouse-cloud`) when the tables are already there and the agent only needs to query them.

## Notes

- **Access.** The homepage links sign-up to `links.get`. On 2026-11-27 that URL stayed HTTP 200 (title Airbyte). The credits doc uses the same URL. Hosted MCP is `https://mcp.airbyte.com/mcp`. The client registers itself during OAuth. A sign-in that goes unused for 14 days may need to be repeated. With several workspaces, the server starts in the default one. A client that cannot open a browser sends an application’s client id and secret on each request as `Client-Id` and `Client-Secret`. That application acts as the user who created it. A bearer access token expires after 15 minutes. `https://mcp.airbyte.com/mcp?read-only=true` removes create, change, delete, run, and cancel. Self-managed Core can run a local MCP server. The docs say that path has known issues. Core is free to self-host under the Elastic License 2.0.
- **Credits and plans.** APIs and custom sources cost 6 credits per million rows. Databases and files cost 4 credits per GB, measured on the serialized records, which can be larger than the database reports. A full refresh charges every row. An incremental sync charges rows that were added, edited, or deleted. The 2026-09-23 release notes say the Standard price then in effect is $20 a month with 5 credits, then $5 per extra credit. The pricing page on 2026-11-27 shows that $20 card, about 1 GB, and Plus at $189. It does not print the Plus credit count or the overage rate. The 2026-09-15 notes, which later notes still use, list the $189 tier as 40 credits with $5 overage, then 100 credits at $449, 250 at $999, 500 at $1,799, 1,000 at $3,199, and 2,000 at $4,999, with a lower overage rate on the larger tiers. Unused credits roll over for three months. Standard syncs at most hourly. Plus syncs every 15 minutes and includes SSO, field renaming, and two workspaces. A 2026-09-09 note said three Plus workspaces. The 2026-09-10 and 2026-09-15 notes say two. Plan against two. Pro and Enterprise Flex are contracted capacity, priced in data workers rather than credits. The pricing page says Pro can sync every five minutes. Passing $10,000 of credit usage in a billing period charges the saved card immediately. Billing alerts email only. They do not stop syncs, can arrive a day late, and exist on Standard and Plus once a card is on file. Continuing after the trial requires a card. Airbyte accepts cards on self-serve plans.
- **What an agent can do.** The default MCP URL includes `run_connection_sync` and `create_connection`. A permanent delete requires the resource name to contain `delete-me` or `deleteme`, unless the delete guard is turned off. The server enforces that marker on delete. The advanced configuration page says the agent should add it with a rename only after the person explicitly agrees. Direct reads and search are read-only, need an organization admin to enable the context layer, and share a free cap of 100,000 calls per organization per month. They fail when the connector secret lives in an external secrets manager. They use the credentials stored on the connector, so the agent can see rows that the Airbyte user cannot see in the source, or miss rows that the user can see. Direct reads also count against the source’s own rate limit and can spend destination compute. Pipeline tools do not count toward the 100,000. Since 2026-11-06, a manual sync on Standard or Plus also waits out the plan’s minimum frequency, with a five-minute grace, measured from the start of the last successful sync. A failed or cancelled sync does not start that wait. Details: `airbyte-credit-arrears-and-sync`.

## Sources

- [Airbyte MCP](https://docs.airbyte.com/platform/airbyte-mcp) — accessed 2026-11-27
- [Install the Airbyte MCP](https://docs.airbyte.com/platform/airbyte-mcp/install) — accessed 2026-11-27
- [Airbyte MCP tools](https://docs.airbyte.com/platform/airbyte-mcp/tools) — accessed 2026-11-27
- [Advanced Airbyte MCP configuration](https://docs.airbyte.com/platform/airbyte-mcp/advanced-configuration) — accessed 2026-11-27
- [Manage credits](https://docs.airbyte.com/platform/cloud/managing-airbyte-cloud/manage-credits) — accessed 2026-11-27
- [Airbyte pricing](https://airbyte.com/pricing) — accessed 2026-11-27
- [Airbyte Cloud release notes](https://docs.airbyte.com/release_notes/cloud) — accessed 2026-11-27
- [Airbyte sign-up](https://cloud.airbyte.com/signup) — accessed 2026-11-27
- [Airbyte](https://airbyte.com/) — accessed 2026-11-27
