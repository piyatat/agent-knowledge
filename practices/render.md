---
id: render
title: Render — hosted apps, datastores, and an OAuth MCP server
kind: service
tags: [render, hosting, mcp, deploy]
status: active
updated: 2026-11-24
when_to_use: Deploying a web service, static site, or Postgres on Render, or letting an agent manage that workspace through MCP
---

## Summary

**Render** hosts web services, static sites, workers, cron jobs, Postgres, Redis-compatible Key Value, workflows, and agent sandboxes. The workspace subscription is separate from each service’s compute plan: Hobby is $0, Pro is $25 a month, and Scale is $499 a month, plus compute. A free web service spins down after 15 minutes without inbound traffic. The hosted MCP server is `https://mcp.render.com/mcp`. It can create services, replace environment variables, redeploy, and run read-only SQL. Use Render for a git-backed app with a dashboard. Use Railway (`railway`) or Fly.io (`fly-io`) when those billing shapes fit better, Netlify (`netlify`) when a shared credit cap should pause every site on the team, and Vercel Sandbox (`vercel-sandbox`) for a short isolated microVM.

## Notes

- **Access.** Sign up at `links.get`. The MCP guide is `links.docs`. OAuth is the usual connection. An API key from Account Settings is for a client that cannot open a browser; send it as a bearer token. The key can only touch the workspaces and permissions granted to it. Every MCP action uses the workspace the client selected. Render recommends the hosted server over a copy you run, because the hosted server picks up new tools on its own.
- **Workspace plans.** Hobby is one person and at most 25 services, with 5 GB of outbound bandwidth, 500 build-pipeline minutes, and 2 custom domains. Pro adds unlimited members and services, 25 GB of bandwidth, 1,000 pipeline minutes, 15 custom domains, and horizontal autoscaling. Extra bandwidth is $0.15 per GB. Extra pipeline minutes are $5 per 1,000. Extra custom domains are $0.25 each per month. Log retention is 7 days on Hobby, 14 on Pro, and 30 on Scale. A Pro or Scale workspace with no services and no activity that month does not pay the subscription. Paid compute is prorated to the second while the workload is running. A card check charges $1 and refunds it.
- **Free compute.** Free web services, one Free Postgres database, and one Free Key Value instance are for previews. A Free web service has 512 MB of RAM and spins down after 15 minutes with no inbound HTTP or WebSocket traffic. The next request takes about a minute. Spun-down time does not use the workspace’s 750 Free instance hours. When those hours are gone, every Free web service stays suspended until the next calendar month. Raising the workspace plan does not remove Free-instance limits. Details: `render-free-expiry-and-mcp-env`.
- **MCP scope.** It can create web services, static sites, cron jobs, Postgres, and Key Value. It can read logs and metrics, trigger a deploy, and replace a service’s environment variables. Postgres queries are read-only. It cannot delete a resource, change scaling, create an image-backed service, or set an IP allow list. Web-service response-time metrics need Pro or higher. Render tries to keep connection strings out of the model context and does not guarantee that secrets stay out.
- **Sandboxes.** Isolated VMs for agents suspend when idle. The published rate is $0.12 per active CPU hour, with memory billed while provisioned, and snapshot storage at $0.08 per GB-month. The default concurrent cap is 100 on Hobby and 1,000 on Pro and Scale.
- **Alternatives.** Railway (`railway`) when included credit and sleep-on-idle services are the model. Fly.io (`fly-io`) for per-second Machines. Neon (`neon`) when the database should branch and the app is hosted elsewhere.
- **Caveats.** A Free service that looks down, a Free database that disappears after 30 days, and an MCP call that rewrites every environment variable are the usual surprises.

## Sources

- [Render MCP server](https://render.com/docs/mcp-server) — accessed 2026-11-23
- [Deploy for free](https://render.com/docs/free) — accessed 2026-11-23
- [Render pricing](https://render.com/pricing) — accessed 2026-11-23
- [Render sign-up](https://dashboard.render.com/register) — accessed 2026-11-23
- [Render](https://render.com/) — accessed 2026-11-23
