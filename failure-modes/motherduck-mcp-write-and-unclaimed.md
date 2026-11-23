---
id: motherduck-mcp-write-and-unclaimed
title: MotherDuck MCP wrote data, or an agent-created organization disappeared
kind: knowledge
tags: [motherduck, mcp, billing, analytics]
status: active
updated: 2026-11-23
when_to_use: A MotherDuck agent changed tables it was only supposed to read, a Standard Duckling kept billing after the query, or an unclaimed organization vanished
---

## Summary

MotherDuck’s remote MCP server (`motherduck`) exposes a read-write tool next to the read-only one. Blocking that tool in the client does not stop a caller who can still invoke it. A read scaling token is the server-side read-only path, and the plan table does not include it on Lite. An organization an agent creates on its own is deleted, with its data, 72 hours after creation if nobody claims it.

## Notes

- **Read-only is a token type, or a client toggle.** OAuth and a default access token run as that user, and the remote server is documented as read-write. `query` is the read-only SQL tool. `query_rw` writes. Turning `query_rw` off in the client’s tool list is local: the server still offers it. A read scaling token connects to replicas that reject writes, so `query_rw` fails even when the client shows it. Those replicas can lag the writer by a few minutes. Creating that token is a manual header, which replaces the OAuth connector. The pricing table marks Read Scaling unavailable on Lite and included on Business. Other MCP tools (guides, Dives, Flights, sharing, delete) are outside the SQL pair. Hiding `query_rw` does not make those read-only.
- **Cooldown and the trial.** Pulse, the only Duckling size on Lite, bills the query itself (minimum 1 CU-second) and has no cooldown. Standard and larger sizes bill wall-clock time plus a cooldown after the last query. Standard’s default cooldown is 1 minute, and the floor is 1 minute. `SHUTDOWN` waits for running queries and then stops the Duckling; `SHUTDOWN TERMINATE` stops it immediately. The 7-day trial has no card and no spend cap, on any Duckling size. After it ends, nobody in the organization can run queries until an admin picks Lite or Business.
- **Unclaimed agent accounts.** The agent signup endpoint creates a Lite (with limits) organization, returns a token and a claim URL, and does not consume the 7-day trial. The account and its data are deleted 72 hours after creation if nobody opens the claim link. The claim makes the person the owner of that organization. It does not merge into an organization they already have. The token in the signup response is a live credential. Keep it out of a repo and out of a prompt other tools can read.

## Sources

- [Restricting to read-only access](https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/securing-read-only-access/) — accessed 2026-11-23
- [Connect with an access token](https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/connect-with-access-token/) — accessed 2026-11-23
- [MotherDuck pricing](https://motherduck.com/docs/about-motherduck/billing/pricing/) — accessed 2026-11-23
- [Create and claim accounts for AI agents](https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-account-signup/) — accessed 2026-11-23
