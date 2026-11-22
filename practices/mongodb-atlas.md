---
id: mongodb-atlas
title: MongoDB Atlas — document clusters and a hosted MCP server
kind: service
tags: [mongodb, atlas, database, mcp]
status: active
updated: 2026-11-22
when_to_use: Hosting MongoDB for an app, or letting an agent query Atlas through the managed MCP server
---

## Summary

**MongoDB Atlas** is hosted MongoDB: a Free cluster, a usage-priced Flex tier, and dedicated clusters. MongoDB also hosts an MCP server at `https://mcp.mongodb.com` for Atlas only. Registered interactive clients (Cursor, Claude, Codex, ChatGPT, Devin, Grok Build, and others on the access-models page) connect with OAuth as the signed-in user. An agent you build uses an MCP configuration and client credentials that an owner creates. Use Atlas when the data is documents. Use Neon (`neon`), Supabase (`supabase`), or PlanetScale (`planetscale`) for relational Postgres.

## Notes

- **Access.** Register at `links.get`. The MCP overview is `links.docs`. User-delegated access works only with AI clients MongoDB has registered. The client acts as that Atlas user and cannot exceed the user’s roles. An Organization Owner turns AI client access on and picks read-only or read-write for every registered client at once. It is disabled by default, except in organizations Atlas creates when someone new signs up. You cannot enable one client and leave another off, and you cannot limit it to one project. A custom or headless agent uses programmatic access: an Organization Owner or Project Owner creates an MCP configuration, Atlas returns a client id, a client secret, and `https://mcp.mongodb.com`, and the configuration’s roles (read-only is preselected) are what the agent gets. Ingress credentials reach the MCP server; a separate egress service account calls Atlas and is not shown to the client. Deployments that are not Atlas (Community or Enterprise Advanced) use a local MCP server you run.
- **Free cluster (docs still say “formerly M0”).** One per project. 512 MB of storage, counting uncompressed BSON plus indexes. 100 operations per second. 500 connections. 100 databases and 500 collections. 10 GB in and 10 GB out over a rolling seven days. Sort memory 32 MB. Aggregation pipelines stop at 50 stages, and `allowDiskUse` is ignored. MongoDB 8.0, three-node replica set, no sharding, no private endpoints, no customer-managed keys. Backups are a private preview (daily snapshot, up to four kept). Atlas pauses a Free cluster after 30 days with zero connections and may deactivate idle Free clusters under the terms of service. The pricing page also lists shared M2 at $9/month and M5 at $25/month.
- **Paid shape.** Flex on the pricing page runs about $8 to $30 per month by operations tier. Dedicated clusters (M10 and up) are billed hourly; the same pricing page shows more than one AWS rate table, so read the current sheet for the cloud and region. Free and Flex are not charged for egress. The MCP overview says Atlas Infinite clusters are outside this feature during public preview.
- **MCP limits.** The managed server allows 2,000 requests per IP per minute and 500 per user per minute, and MongoDB says those numbers can change without notice. A 429 means the request was not processed. Each MCP-configuration service account holds at most 100 active access tokens, each valid for one hour. Atlas does not record every tool call; audit events name the authorizing user and client, or the configuration’s service account.
- **Alternatives.** Turso (`turso`) for SQLite. Neon or PlanetScale for Postgres. Convex (`convex`) for a hosted document API with its own MCP.
- **Caveats.** A self-built agent cannot use the marketplace OAuth path, and a paused or throttled Free cluster looks like a dead database. Details: `mongodb-atlas-mcp-and-free-tier`.

## Sources

- [MongoDB MCP server overview](https://www.mongodb.com/docs/mcp-server/overview/) — accessed 2026-11-22
- [MCP access models](https://www.mongodb.com/docs/mcp-server/remote-mcp/access-models/) — accessed 2026-11-22
- [Managed MCP rate limits](https://www.mongodb.com/docs/mcp-server/remote-mcp/rate-limits/) — accessed 2026-11-22
- [Atlas Free cluster limits](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/) — accessed 2026-11-22
- [MongoDB pricing](https://www.mongodb.com/pricing) — accessed 2026-11-22
- [Atlas registration](https://www.mongodb.com/cloud/atlas/register) — accessed 2026-11-22
