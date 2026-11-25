---
id: convex
title: Convex — hosted backend and a local MCP server
kind: service
tags: [convex, database, mcp, backend]
status: active
updated: 2026-11-25
when_to_use: Giving an app a hosted Convex backend, or letting an agent inspect a Convex deployment
---

## Summary

**Convex** is a hosted application backend: queries, mutations, actions, file storage, crons, and text and vector search. The agent interface in the current docs is a local MCP server shipped with the Convex CLI. It uses the account login by default, so it can see every project that login can open, while production stays limited until the operator opts in. Use Neon (`neon`) or Supabase (`supabase`) when the app needs Postgres. Use Convex when the app’s functions and data should live in one hosted deployment. Use Liveblocks (`liveblocks`) when the missing piece is a shared room rather than that backend.

## Notes

- **Access.** Sign up at `links.get`. The MCP server runs on the machine that starts the CLI and talks to the deployment selected for that process. The default target is the development deployment. Production reads that can include personal data (`data`, `logs`, `runOneoffQuery`) need the cautious production flag. Environment reads and writes (`envGet`, `envList`, `run`, `envSet`, `envRemove`) need the dangerous production flag. A deploy key in `CONVEX_DEPLOY_KEY` limits the server to one deployment and disables the `insights` tool. The docs page is the pointer for how to start the server; this note does not repeat the command.
- **What an agent can do.** `status` lists deployments. `tables` and `functionSpec` describe schema and functions. `data` pages through a table. `runOneoffQuery` runs a read-only JavaScript query. `run` calls a deployed function. `logs` returns recent function logs. `insights` reports optimistic-concurrency conflicts and read-limit events from the last 72 hours. `envList` can include values when the caller asks. On a development deployment those tools are available together. On production, the default set is the non-PII reads: `insights`, `tables`, and `functionSpec`.
- **Plans (pricing and limits pages, 2026-11-22, US regions).** Free and Starter share the S16 class: 1–6 developers and 40 deployments. Free hard-caps included usage. Starter bills past it. Included amounts: 1 million function calls a month, then $2.20 per extra million on Starter; 0.5 GB database storage and 1 GB database I/O a month, then $0.22 per extra GB; 20 GB-hours of action compute, then $0.33 per extra GB-hour; 1 GB of files and 1 GB of egress. Professional is $25 per developer per month, up to 20 developers, with larger included amounts (25 million calls, 50 GB database and database I/O). Other regions are 1.3× the US prices on the limits page. Query and mutation user code is limited to 1 second. A document is at most 1 MiB.
- **Cloud agents.** In a non-interactive shell the CLI does not prompt for a login. The Codex guide says that path provisions a local deployment instead of the hosted project. A separate Convex CLI invocation outside MCP uses the full login unless a scoped deploy key is set. Passing a project directory to the MCP process does not stop a tool call from naming another project.
- **Caveats.** Production writes, environment values, and the free-plan caps fail closed. Details: `convex-mcp-production-and-cap`.

## Sources

- [Convex MCP server](https://docs.convex.dev/ai/convex-mcp-server) — accessed 2026-11-22
- [npx convex mcp](https://docs.convex.dev/cli/reference/mcp) — accessed 2026-11-22
- [Convex limits](https://docs.convex.dev/production/state/limits) — accessed 2026-11-22
- [Convex pricing](https://www.convex.dev/pricing) — accessed 2026-11-22
- [Using Codex with Convex](https://docs.convex.dev/ai/using-codex) — accessed 2026-11-22
- [Convex sign-up](https://www.convex.dev/signup) — accessed 2026-11-22
