---
id: motherduck
title: MotherDuck — hosted DuckDB, with a read-write remote MCP server
kind: service
tags: [motherduck, duckdb, analytics, mcp]
status: active
updated: 2026-11-23
when_to_use: Querying analytical tables with hosted DuckDB, or letting an agent read and write a MotherDuck organization
---

## Summary

**MotherDuck** is a serverless analytics warehouse built on DuckDB. Each organization is tied to one cloud region chosen when it is created. Lite is $0 and includes 10 GB and 10 Pulse compute-unit hours a month. Business is $250 a month plus usage. The remote MCP server is `https://api.motherduck.com/mcp`. OAuth and a default access token can write. Use MotherDuck when the workload is DuckDB SQL in the cloud. Use ClickHouse Cloud (`clickhouse-cloud`) when the agent should stay on a read-only analytics API.

## Notes

- **Access.** Sign up at `links.get`. That URL stayed put on 2026-11-23 and did not add a session token. The marketing site’s get-started controls open an OAuth authorize URL; keep the app URL as the stable sign-up page. Interactive MCP clients sign in with OAuth. A headless client sends `Authorization: Bearer` and a token from **Settings → Access Tokens**. A token is read/write unless its type is Read Scaling. The plan table marks Read Scaling off on Lite and on for Business and Enterprise.
- **What an agent can do.** `query` runs read-only SQL. `query_rw` can change data. The remote server is read-write. Hiding `query_rw` in the client leaves the tool callable. A read scaling token makes the server reject writes, including `query_rw`, and the tool can still show up in the list. Those replicas can lag the writer by a few minutes. Read scaling tokens replace the one-click OAuth connector. Guide, Dive, Flight, sharing, and delete tools are separate from the SQL tool. The docs say a terminal agent should prefer the MotherDuck CLI for file-shaped work, because large results go to disk. Details: `motherduck-mcp-write-and-unclaimed`.
- **Plans (pricing doc, 2026-11-23).** Lite: $0 platform fee, Pulse Ducklings only, 10 CU hours and 10 GB included, 3 active users, 2 service accounts. Extra Pulse compute in AWS `us-east-1` and `us-west-2` is $0.60 per hour. Storage there is $0.04 per GB-month, averaged over the month. Business: $250 a month, then usage, Pulse through Giga, read scaling, 10 users, unlimited service accounts, and a 99.9% availability target. AWS has six regions in three price tiers. Azure has `eastus` and `uksouth`. Giga is not listed for Azure. Pulse bills per query, with a minimum of 1 CU-second, and has no cooldown. Standard and larger sizes bill wall-clock time, including a cooldown after the last query (Standard’s default is 1 minute; the minimum is 1 minute).
- **Trial and agent accounts.** A new organization gets 7 days on any Duckling size with no card and no spend cap. When that ends, queries stop until an admin selects Lite or Business. An agent can also create its own Lite organization. That path does not use the 7-day trial. An unclaimed organization is deleted after 72 hours. Claiming it does not merge it into an organization the person already owns.
- **AI charges.** AI Units are separate from compute. The default cap is 10 AI Units per Duckling session, resetting after 24 hours in a long session. FixIt is free. The pricing page says agent chat is on paid plans and free trials, and is off on the Free plan. The agent-signup page says Lite (with limits) is the plan some product messages call Free.
- **Alternatives.** ClickHouse Cloud (`clickhouse-cloud`) for large columnar scans with a read-only MCP. Neon (`neon`) or Supabase (`supabase`) for transactional Postgres. Local DuckDB when the data should stay on the machine that runs the agent.

## Sources

- [Connect to the MotherDuck MCP server](https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/mcp-setup/) — accessed 2026-11-23
- [Connect with an access token](https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/connect-with-access-token/) — accessed 2026-11-23
- [Restricting to read-only access](https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/securing-read-only-access/) — accessed 2026-11-23
- [MotherDuck pricing](https://motherduck.com/docs/about-motherduck/billing/pricing/) — accessed 2026-11-23
- [Create and claim accounts for AI agents](https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-account-signup/) — accessed 2026-11-23
- [MotherDuck](https://motherduck.com/) — accessed 2026-11-23
- [MotherDuck app](https://app.motherduck.com/) — accessed 2026-11-23
