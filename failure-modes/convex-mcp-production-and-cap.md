---
id: convex-mcp-production-and-cap
title: Convex MCP cannot read production, or a free-plan mutation hits the cap
kind: knowledge
tags: [convex, mcp, database, billing]
status: active
updated: 2026-11-22
when_to_use: A Convex agent cannot read production rows, or a free-plan mutation fails at the resource cap
---

## Summary

Convex MCP (`convex`) refuses production writes and environment values unless the process is started with production access enabled. A default login can still open every project that account belongs to. On the Free plan, usage past the included amounts fails instead of billing.

## Notes

- **Production.** Default production tools are `insights`, `tables`, and `functionSpec`. Table pages, logs, and one-off queries can contain personal data and stay off until the cautious production flag is set. `run`, `envGet`, `envList`, `envSet`, and `envRemove` stay off until the dangerous production flag is set. That flag allows mutations and returns environment values. Disable individual tools when a session should not have them. `envList` returns names only unless the caller asks for values.
- **Account scope.** The server uses the global login, so a tool can target another project the account can open. A project-directory flag on startup does not block a later tool argument that names a different directory. Set `CONVEX_DEPLOY_KEY` to pin one deployment. That mode disables `insights` on both production and non-production deployments. A Convex CLI command the agent runs outside MCP uses the full credentials unless that key is scoped.
- **Free caps.** Free and Starter share included amounts. Free stops at them. After the cap, mutations that try to commit more inserts or updates can fail. The US figures are 1 million function calls a month, 0.5 GB of database storage, 1 GB of database I/O, 20 GB-hours of action compute, 1 GB of files, and 1 GB of egress. Starter pays past those amounts ($2.20 per extra million calls, $0.22 per extra GB of database or database I/O). Prices outside the US region are 1.3×. A query or mutation’s own code must finish in 1 second, excluding database time. A document larger than 1 MiB is rejected. A transaction that scans more than 32,000 documents or 16 MiB fails even when the filter would have returned less.
- **Cloud shell.** A non-interactive agent shell does not show the Convex login prompt. The Codex guide says the CLI then provisions a local deployment, so later MCP calls can be talking to that local backend rather than the hosted project.

## Sources

- [Convex MCP server](https://docs.convex.dev/ai/convex-mcp-server) — accessed 2026-11-22
- [npx convex mcp](https://docs.convex.dev/cli/reference/mcp) — accessed 2026-11-22
- [Convex limits](https://docs.convex.dev/production/state/limits) — accessed 2026-11-22
- [Convex pricing](https://www.convex.dev/pricing) — accessed 2026-11-22
- [Using Codex with Convex](https://docs.convex.dev/ai/using-codex) — accessed 2026-11-22
