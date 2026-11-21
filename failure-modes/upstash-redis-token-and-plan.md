---
id: upstash-redis-token-and-plan
title: An Upstash Redis token can wipe keys, or a plan change starts billing
kind: knowledge
tags: [upstash, redis, mcp, billing]
status: active
updated: 2026-11-21
when_to_use: An Upstash agent ran a destructive Redis command, a REST token appeared in the transcript, or a free database started costing money
---

## Summary

The local Upstash Redis MCP (`upstash-redis`) puts a database token in the client. The standard token can run any command, including deletes. The account MCP keeps that token on the server unless a tool is called with `include_credentials: true`. Creating a branch or changing plan can leave the Free tier.

## Notes

- **Tokens.** Prefer the account server at `https://mcp.upstash.com/mcp` with a read-only OAuth grant when the agent only needs to inspect. `include_credentials: true` on `redis_get_database` or `redis_create_database` copies the REST URL and token into the conversation. A read-only connection omits them even if that flag is set. On the local server, a read-only token still cannot `SCAN` or `KEYS`, so a “list every key” command fails closed. `redis_reset_credentials` replaces the password and REST tokens and disconnects current clients.
- **Commands and plans.** `redis_run_command` is destructive on purpose. Read-only mode allowlists read commands and refuses anything else, including a command the server does not recognize. `redis_create_branch` is a new pay-as-you-go database. `redis_change_plan`, `redis_set_prod_pack` ($200/month), and `redis_set_budget` change the bill. Budgets are whole dollars, 0 for no cap or 20 to 10,000. The server will not move a database back to Free. Read-region changes on a fixed plan add that tier’s per-region price and can run at most once every 30 minutes. Plan tools link `https://upstash.com/pricing/redis.md` and do not include the price in the tool result.
- **Free and pay-as-you-go caps.** Free stops at 250 MB and 10 GB of bandwidth. Pay as you go is $0.20 per 100,000 commands, with storage at $0.25 per GB after the first 1 GB, and it rejects the database growing past 100 GB. REST calls are priced as commands. A loop of reads adds up even when each value is small. `PING` and `INFO` are not charged; ordinary `GET` and `SET` are.
- **Empty tool list.** `?features=` with only unrecognized names starts a connection that reports `tools/list` as an unknown method. Check the feature name before treating the server as down.

## Sources

- [Upstash account MCP](https://upstash.com/docs/agent-resources/mcp) — accessed 2026-11-21
- [Upstash Redis MCP](https://upstash.com/docs/redis/sdks/mcp) — accessed 2026-11-21
- [Redis REST API](https://upstash.com/docs/redis/features/restapi) — accessed 2026-11-21
- [Redis pricing](https://upstash.com/pricing/redis) — accessed 2026-11-21
