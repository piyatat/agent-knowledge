---
id: turso
title: Turso Cloud — hosted SQLite, two engines, and an OAuth MCP server
kind: service
tags: [turso, sqlite, database, mcp]
status: active
updated: 2026-11-22
when_to_use: Giving an app or agent many SQLite databases, embedded sync, or SQL over a hosted MCP server
---

## Summary

**Turso Cloud** hosts two SQLite-compatible engines. The Turso engine is a rewrite with concurrent writes; cloud docs still mark databases on that engine as early preview. **libSQL** is the older fork that has run on the platform for years. A hosted MCP server at `https://mcp.turso.ai/mcp` lets an agent manage organizations, groups, and databases and run SQL, using OAuth 2.1. Free starts at $0 with no card. Use Turso for a fleet of SQLite databases or local sync. Use Neon (`neon`) or PlanetScale (`planetscale`) when the schema is Postgres.

## Notes

- **Engines and clients.** A local database, including one that syncs to the cloud, uses the Turso packages (`@tursodatabase/database`, `pyturso`, and the Go and Rust equivalents). A remote Turso-engine database uses the serverless drivers (`@tursodatabase/serverless`, `turso_serverless`). A remote libSQL database uses the libSQL clients (`@libsql/client`, `libsql`). Drizzle and Prisma on TypeScript run on `@libsql/client`. The serverless drivers speak SQL over HTTP and do not keep a connection open.
- **Access.** Sign up at `links.get`. The MCP guide is `links.docs`. OAuth consent picks an organization, then either one group or the whole organization, and for a group a permission set (read-only, full access, or custom). Unscoped tokens are rejected. The server holds no privilege of its own; each tool calls the platform API with that token, and the call is audited. Disconnect and sign in again to change scope. Cursor cloud agents do not read a local MCP config; the docs say to add `https://mcp.turso.ai/mcp` on the account.
- **What an agent can do.** Separate tools list, create, delete, and branch databases (including point-in-time branches), change delete-protection and allow rules, and run read-only SQL, writes, deletes, and schema changes. Recovery tools list and restore databases and groups deleted within five days. Read-only and destructive tools are labeled.
- **Plans (pricing page, 2026-11-22).** Free is $0: 100 databases, 5 GB storage, 500 million rows read, 10 million rows written, and 3 GB of syncs per month. Point-in-time restore is 1 day. Restore-deleted is not included. Developer is $5.99/month ($4.99 billed yearly): unlimited databases, 9 GB, 2.5 billion reads, 25 million writes, 10 GB syncs, 10-day PITR, and restore-deleted. Scaler is $29/month. Pro is $499/month and adds SSO, BYOK, HIPAA, and SOC 2. Overages are off by default. A branch or a point-in-time restore consumes a database slot and storage quota. Rows read count every row touched, including an unindexed scan, not only rows returned.
- **Alternatives.** Neon (`neon`) or Supabase (`supabase`) for Postgres. PlanetScale (`planetscale`) for Vitess or Postgres clusters that do not scale to zero. Convex (`convex`) when the API is a hosted document backend.
- **Caveats.** Hitting any one quota blocks every database while overages are off, and a delete on Free is not guaranteed to come back. Details: `turso-quota-block-and-engine`.

## Sources

- [Turso Cloud](https://docs.turso.tech/turso-cloud) — accessed 2026-11-22
- [Turso SDKs](https://docs.turso.tech/sdk/introduction) — accessed 2026-11-22
- [Turso MCP](https://docs.turso.tech/integrations/mcp) — accessed 2026-11-22
- [Turso pricing](https://turso.tech/pricing.md) — accessed 2026-11-22
- [Recover deleted databases](https://docs.turso.tech/features/recover-deleted-databases) — accessed 2026-11-22
- [Turso sign-up](https://app.turso.tech/signup) — accessed 2026-11-22
