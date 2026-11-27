---
id: vercel
title: Vercel — framework hosting with a hosted MCP server
kind: service
tags: [vercel, hosting, mcp, deploy]
status: active
updated: 2026-11-27
when_to_use: Deploying a web app on Vercel, or letting an agent inspect logs and publish a deployment
---

## Summary

**Vercel** hosts framework apps, functions, and static sites on a global network. Hobby is $0 and stops when included usage is spent. Pro is $20 a month, includes one deploying seat and $20 of usage credit, then bills on demand. A remote MCP server at `https://mcp.vercel.com` can search docs, manage projects, read logs and analytics, and create deployments, including production. Use Vercel when the app is a framework deploy. Use Netlify (`netlify`), Railway (`railway`), Render (`render`), or Fly.io (`fly-io`) when that host already owns the project. Use Vercel Sandbox (`vercel-sandbox`) for a microVM, and Vercel Workflows (`vercel-workflows`) for a durable workflow.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-27 that URL stayed on itself with HTTP 200, and the homepage links `/signup`. The page offers Google, GitHub, ChatGPT, Apple, and email. MCP is `https://mcp.vercel.com` on every plan, with OAuth. A client uses a Client ID Metadata Document or a client Vercel has reviewed. Cursor, Claude Code, Codex CLI, and VS Code with Copilot are on the supported list. The connection has the same reach as that Vercel user. There is no separate MCP fee.
- **Hobby.** The Hobby plan page lists 4 Active CPU-hours, 360 GB-hours of provisioned memory, 1 million function invocations, 100 GB of fast data transfer, 10 GB of fast origin transfer, and 1 million CDN requests. Also included: 5,000 image transformations, 50,000 Web Analytics events, 50,000 Workflow events, and 1 GB of Workflow data writes. The comparison table lists 200 projects, 100 deployments a day, a 300-second function duration, and 1 hour of runtime logs. Hobby cannot buy more usage. Web Analytics collection can resume after 7 days. Most other included limits wait 30 days. A team that Vercel has set to paused does not come back on that timer. Details: `vercel-hobby-pause-and-mcp-write`.
- **Pro.** The platform fee is $20 a month and includes one deploying seat plus $20 of usage credit. The credit applies from the first unit, expires at the end of the month, and does not roll over. Past the credit, usage is on demand. The pricing page lists Active CPU starting at $0.128 an hour, provisioned memory starting at $0.0106 per GB-hour, and invocations at $0.60 per million. Extra Owner or Member seats are $20 a month. Viewer seats are free. The comparison table lists 6,000 deployments a day, function duration of 300 seconds by default and up to 800 seconds (1,800 seconds in an extended beta), and 1 day of runtime logs. Password Protection is $20 a month per protected project. With automatic approval on, a commit author who already has a Vercel account and pushes to a private connected repository is added as a $20 Developer seat.
- **What a deploy spends.** Active CPU bills while function code runs, and pauses during I/O. Provisioned memory bills for the whole time the instance is handling requests, including that wait. Invocations count failed requests. A pricing-page deploy without an account expires unless someone claims it onto a Hobby account. The pricing page does not print how long that claim window lasts.
- **What MCP can change.** `create_deployment` can set `target` to production; omitting it builds a preview. `deploy_to_vercel` is on root connections, requires `preview` or `production`, and accepts inline files only: 300 files, 3 MiB each, 4 MiB total encoded. It cannot read a local path. `get_project_env` returns a decrypted value. `create_project_env` can upsert over an existing variable. Project-scoped connections do not register `deploy_to_vercel`.
- **Spend controls.** Reaching the end of the $20 credit does not stop Pro deployments. New Pro customers get a spend notification at $200. That notification does not pause projects. Pause is a separate Spend Management action on a team or project budget, and the check runs every few minutes, so spend can pass the amount. A team budget on Pro counts usage past the credit. A project budget counts usage the credit still covers. On Pro, AI Gateway and v0 usage does not count toward those budgets. Raising the amount does not resume a paused project.
- **Caveats.** A paused Hobby team stays paused until a person moves it, and an MCP session can ship production and read environment values. Details: `vercel-hobby-pause-and-mcp-write`.

## Sources

- [Vercel pricing](https://vercel.com/pricing) — accessed 2026-11-27
- [Hobby plan](https://vercel.com/docs/plans/hobby) — accessed 2026-11-27
- [Pro plan](https://vercel.com/docs/plans/pro-plan) — accessed 2026-11-27
- [Account plans](https://vercel.com/docs/plans) — accessed 2026-11-27
- [Fluid compute pricing](https://vercel.com/docs/functions/usage-and-pricing) — accessed 2026-11-27
- [Spend Management](https://vercel.com/docs/spend-management) — accessed 2026-11-27
- [Use Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp) — accessed 2026-11-27
- [Vercel MCP deployments](https://vercel.com/docs/agent-resources/vercel-mcp/tools/deployments) — accessed 2026-11-27
- [Vercel MCP environment variables](https://vercel.com/docs/agent-resources/vercel-mcp/tools/environment-variables) — accessed 2026-11-27
- [Sign up for Vercel](https://vercel.com/signup) — accessed 2026-11-27
- [Vercel](https://vercel.com/) — accessed 2026-11-27
