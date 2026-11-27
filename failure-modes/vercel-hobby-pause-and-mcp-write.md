---
id: vercel-hobby-pause-and-mcp-write
title: A Vercel Hobby deploy stays paused, or MCP ships production
kind: knowledge
tags: [vercel, hosting, mcp, billing]
status: active
updated: 2026-11-27
when_to_use: A Vercel site returns 503 DEPLOYMENT_PAUSED, or an agent published a production deploy or read an env value
---

## Summary

Vercel (`vercel`) pauses a Hobby team that spends its included usage, and that pause does not lift when 30 days pass. Visitors see `503 DEPLOYMENT_PAUSED`. Pro keeps serving past the $20 credit and bills the rest. The hosted MCP server can create a production deployment and return decrypted environment variables as the connected user.

## Notes

- **A paused Hobby team stays paused.** The plans page says a Hobby plan is paused when it exceeds included usage. The fluid-compute page says a paused Hobby team stays in that state until someone acts, every new and existing deployment is paused, and the 30-day wait does not resume it. A paused Hobby team cannot start a Pro trial. The recovery path on that page is support, or a new Pro team with a card and a transfer of the projects. The Hobby page still says most individual limits wait 30 days, and Web Analytics can resume after 7 days. Plan against the team pause.
- **Pro does not stop at the credit.** Passing the $20 credit switches the team to on-demand usage. The default $200 spend notification does not pause projects. Pause happens only when Spend Management has “pause production deployments” on for a team or project budget. Vercel checks every few minutes, so usage can pass the amount before the pause. Raising the amount stops later pauses and leaves current projects paused until each one is resumed. A project budget counts usage the monthly credit still covers. A team budget counts only usage past that credit.
- **MCP can publish and read secrets.** `create_deployment` with `target` set to `production`, and `deploy_to_vercel` with `target` `production`, ship a production deployment. `get_project_env` returns the decrypted value. `create_project_env` can replace an existing variable when upsert is set. The MCP page does not offer a separate read-only tool list. Access follows the OAuth grant and that user’s team role. `deploy_to_vercel` is absent on a project-scoped connection.

## Sources

- [Account plans](https://vercel.com/docs/plans) — accessed 2026-11-27
- [Fluid compute pricing](https://vercel.com/docs/functions/usage-and-pricing) — accessed 2026-11-27
- [Hobby plan](https://vercel.com/docs/plans/hobby) — accessed 2026-11-27
- [Why has my account or deployment been paused?](https://vercel.com/kb/guide/why-is-my-account-deployment-blocked) — accessed 2026-11-27
- [Spend Management](https://vercel.com/docs/spend-management) — accessed 2026-11-27
- [Vercel MCP deployments](https://vercel.com/docs/agent-resources/vercel-mcp/tools/deployments) — accessed 2026-11-27
- [Vercel MCP environment variables](https://vercel.com/docs/agent-resources/vercel-mcp/tools/environment-variables) — accessed 2026-11-27
