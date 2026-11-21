---
id: upstash-redis
title: Upstash Redis — serverless Redis and an account MCP server
kind: service
tags: [upstash, redis, cache, mcp]
status: active
updated: 2026-11-21
when_to_use: Caching or rate-limiting with hosted Redis, or letting an agent run commands and change Upstash databases
---

## Summary

**Upstash Redis** is hosted Redis with a REST API for runtimes that cannot hold a TCP connection, plus the Redis protocol. The account MCP server at `https://mcp.upstash.com/mcp` manages Redis and the rest of the account (QStash, Workflow, Vector, Search, Box, and Blob) over Streamable HTTP. A separate local MCP runs commands against one database whose REST token sits in the client. Use this for cache, counters, and short-lived state. Use Upstash Vector (`upstash-vector`) for embeddings, and Neon (`neon`) or Supabase (`supabase`) for relational data.

## Notes

- **Access.** Create a database in the console at `links.get`. The account MCP guide (`links.docs`) is the client pointer. OAuth asks for a personal or team scope and whether the grant is read-only. A headless client sends a developer API key as a Bearer token in the form `email:API_KEY`. Read-only grants disable every tool that changes state and omit credentials. Append `?features=redis` to hide the other products. A name the server does not recognize is dropped; if every name is dropped, the connection has no tools.
- **Commands.** Data-plane tools on the account server call Redis with credentials that stay on the server. `redis_get_database` and `redis_create_database` include the REST token only when called with `include_credentials: true`. Listings never include it. `redis_run_command` is marked destructive because it accepts any command, including a pipeline. On a read-only connection it allowlists read commands. The local Redis MCP is the narrow alternative: it needs that database’s REST URL and token, or a `rediss://` URL. A standard token can run every command. A read-only token cannot write, and it also blocks `SCAN` and `KEYS`.
- **Plans (pricing page, 2026-11-21).** Free is $0, with 250 MB of data and 10 GB of bandwidth. Pay as you go is **$0.20 per 100,000 commands**, storage at $0.25 per GB after the first 1 GB, bandwidth free through 200 GB then $0.03 per GB, and a 100 GB data cap. Max request size is 10 MB and max record size is 100 MB. The first 10 databases are free, then $0.50 each, up to 100. Fixed plans start at $10/month for 250 MB and do not charge per command. Prod Pack is an optional **$200/month per database**. REST requests use the same command price. `AUTH`, `HELLO`, `SELECT`, `COMMAND`, `CONFIG`, `INFO`, `PING`, `RESET`, and `QUIT` are not charged. Plan and budget tools do not quote prices; they link the pricing page and expect a confirmation. The MCP server cannot move a database back to Free or onto Enterprise.
- **Branches.** `redis_create_branch` makes a copy with its own endpoint and password, billed as pay-as-you-go. A database that still has branches cannot be deleted.
- **Alternatives.** Upstash Vector when the payload is embeddings. The vector, Qdrant, and Pinecone notes when search is by meaning rather than by key.
- **Caveats.** A standard token in the local MCP config can flush the database, and a branch starts a paid database. Details: `upstash-redis-token-and-plan`.

## Sources

- [Upstash account MCP](https://upstash.com/docs/agent-resources/mcp) — accessed 2026-11-21
- [Upstash Redis MCP](https://upstash.com/docs/redis/sdks/mcp) — accessed 2026-11-21
- [Redis REST API](https://upstash.com/docs/redis/features/restapi) — accessed 2026-11-21
- [Redis pricing](https://upstash.com/pricing/redis) — accessed 2026-11-21
- [Upstash console](https://console.upstash.com/) — accessed 2026-11-21
