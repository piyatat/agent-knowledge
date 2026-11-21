---
id: neon
title: Neon — serverless Postgres that scales to zero
kind: service
tags: [neon, postgres, database, mcp]
status: active
updated: 2026-11-21
when_to_use: Giving an app or agent a hosted Postgres that branches and suspends when idle
---

## Summary

**Neon** is hosted Postgres whose compute suspends after inactivity and whose branches copy a database the way a git branch copies a repo. Current plan docs also call the database Lakebase Postgres. A hosted MCP server at `https://mcp.neon.tech/mcp` lets an agent manage projects, branches, and SQL. Use Neon when the job is Postgres that can scale to zero. Use Supabase (`supabase`) when Auth, Storage, and Edge Functions should ship in the same project.

## Notes

- **Access.** Sign up at `links.get`. OAuth is the fit for a local IDE (no static secret in the project). A headless agent uses an API key as a bearer token. The `neon mcp` command can write that config; by default it mints a new key. The hosted server is the current one. The local stdio package is deprecated, and the old `/sse` and `/message` URLs return **410 Gone**.
- **What an agent can do.** Tools cover projects, branches, computes, schema, SQL, snapshots, managed auth, docs search, functions, storage, and realtime. Docs search and `list_incidents` need no credentials. SQL tools connect as the database owner unless the URL sets `roleName`. `run_sql` returns **100 rows** by default and can be raised to **10,000**. `?readonly=true` keeps reads and blocks writes, including `get_connection_string`. `?projectId=` hides project-admin tools. `?secrets=none` redacts credentials in tool results. `secrets=all` also returns auth-provider secrets you stored.
- **Plans (docs updated 2026-11-18).** Free is $0: **100 projects**, 10 branches per project, **100 CU-hours and 1 GB** of storage per project (20 GB per account), autoscaling up to 2 CU, and scale-to-zero after 5 minutes that cannot be turned off. Launch has no monthly minimum: **$0.106 per CU-hour**, **$0.35 per GB-month**, up to 16 CU, and the same 5-minute suspend, which can be disabled. Scale is **$0.222 per CU-hour**, suspend from 1 minute to always on, autoscaling to 16 CU, and fixed sizes up to 56 CU. A CU is about 4 GB of RAM. Invoices under $0.50 are not collected. An Agent Plan, for platforms that provision many databases, has unlimited projects and Launch-rate compute; its other limits differ from Scale.
- **Auth on the product.** Plan pages include managed auth MAU caps (60k on Free, 1M on Launch and Scale). That is Neon’s own auth, separate from Clerk (`clerk`).
- **Alternatives.** Supabase (`supabase`) for the broader backend bundle. Pinecone (`pinecone`) or Qdrant (`qdrant-cloud`) when the store is vectors, not rows.
- **Caveats.** Neon recommends the MCP server for development and test data, not production databases. Idle computes, large sizes, and API-key scope: `neon-scale-to-zero-and-mcp`.

## Sources

- [Neon plans](https://neon.com/docs/introduction/plans) — accessed 2026-11-21
- [Neon MCP server](https://neon.com/docs/ai/neon-mcp-server) — accessed 2026-11-21
- [Neon CLI mcp](https://neon.com/docs/cli/mcp) — accessed 2026-11-21
- [Scale to zero](https://neon.com/docs/introduction/scale-to-zero) — accessed 2026-11-21
- [Neon sign-up](https://neon.com/signup) — accessed 2026-11-21
