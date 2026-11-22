---
id: turso-quota-block-and-engine
title: Turso blocks every database at one quota, or the client speaks to the wrong engine
kind: knowledge
tags: [turso, sqlite, mcp, billing]
status: active
updated: 2026-11-22
when_to_use: Turso queries fail after a limit, a deleted database will not restore, or a libSQL client cannot open a Turso-engine database
---

## Summary

Turso Cloud (`turso`) blocks databases when any one monthly quota is exceeded and overages are off. A database deleted on the Free plan is not guaranteed to return, even after an upgrade. Remote clients also have to match the engine: the Turso rewrite and libSQL do not share a driver.

## Notes

- **One metric blocks the rest.** On Free, or on a paid plan with Overages disabled, crossing storage, rows read, rows written, or syncs blocks databases even when the other meters are under quota. Overages are disabled by default. Free has no overage path; the pricing FAQ says to upgrade. With overages on, the plan keeps serving and bills only the meters that went over. A “Vegas Blackout” can drop one day’s charges from the invoice; it does not erase the usage, and the databases still need overages enabled to keep running past the included amounts.
- **What a row costs.** Rows read and written count rows touched while producing the result, including index maintenance. An unindexed lookup counts the whole table. Drizzle Studio in the dashboard counts as reads, and as writes when it changes data. Each branch and each point-in-time restore uses a database slot and storage quota.
- **Deletes.** Paid plans can restore a database or group for five days, at no extra charge, if an admin has recovery enabled and the region can actually restore it. A row in the deleted list is not that guarantee. Restore uses the UUID, and a reused name needs a new name in the restore body. Point-in-time restore rewinds a database that still exists; it does not bring back a deleted one. The pricing FAQ says a database deleted on Free is not guaranteed to be restorable, and upgrading afterward does not change that. An agent with full access can also turn recovery off for the organization.
- **Engine mismatch.** Cloud docs mark Turso-engine databases as early preview. Remote access to that engine uses the serverless drivers. Remote libSQL uses `@libsql/client`, `libsql`, or the Go and Rust libSQL clients. A local or syncing database uses the Turso embedded packages even when the cloud side is libSQL. TypeScript ORMs that sit on `@libsql/client` are aimed at libSQL, not at the rewrite’s serverless driver.
- **MCP scope.** Consent for the whole organization is full access. A group scope is the narrower grant, with read-only, full access, or a custom set. SQL writes, deletes, and schema changes are separate tools from reads, and the same session can delete a database. Cursor cloud agents ignore a laptop `mcp.json`; the account has to add `https://mcp.turso.ai/mcp` itself.

## Sources

- [Turso pricing](https://turso.tech/pricing.md) — accessed 2026-11-22
- [Turso Cloud](https://docs.turso.tech/turso-cloud) — accessed 2026-11-22
- [Turso SDKs](https://docs.turso.tech/sdk/introduction) — accessed 2026-11-22
- [Turso MCP](https://docs.turso.tech/integrations/mcp) — accessed 2026-11-22
- [Recover deleted databases](https://docs.turso.tech/features/recover-deleted-databases) — accessed 2026-11-22
