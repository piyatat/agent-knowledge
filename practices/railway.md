---
id: railway
title: Railway — hosted apps and a remote MCP server
kind: service
tags: [railway, hosting, mcp, deploy]
status: active
updated: 2026-11-23
when_to_use: Deploying an app on Railway, or letting an agent manage projects and deploys through Railway MCP
---

## Summary

**Railway** hosts services, single-node databases, volumes, and buckets. Plans are Free ($0, $1 of usage, services sleep), Hobby ($5), Pro ($20), and Enterprise. The subscription fee counts toward resource usage. A hosted MCP server at `https://mcp.railway.com` can create projects, redeploy, and hand work to Railway Agent. Use Railway for a long-running app with a dashboard and domains. Use Fly.io (`fly-io`) for per-second Machines, or Vercel Sandbox (`vercel-sandbox`) for a short isolated microVM.

## Notes

- **Access.** Sign in at `links.get`. A new email creates the account in that same flow. The MCP overview is `links.docs`. The default connection is the Railway CLI (`railway mcp`), which reuses a `railway login` session and needs CLI **5.44.0** or later. Editors that speak OAuth connect to `https://mcp.railway.com` over Streamable HTTP and pick workspaces and projects. OAuth tokens are short-lived and can be revoked in account settings. The server rejects project tokens: it requires a user identity for billing and audit. The npm package `@railway/mcp-server` is deprecated; the server now ships in the CLI.
- **Plans.** Free is $1 of CPU, RAM, egress, and volume each month, no credit card, and it does not roll over. One project, up to 3 services, each up to 1 vCPU and 0.5 GB RAM, one 0.5 GB volume, and one 10 GB bucket. Services sleep after 5 to 10 minutes without **outbound** traffic and wake on the next request. A process that keeps sending (open WebSocket, queue poll, open database connection) stays awake and spends the $1. When the $1 is gone, services stop until the next cycle or an upgrade; volume and bucket files stay. New accounts also get a one-time 30-day Trial with $5. Trial services do not sleep and may use custom domains, cron, and a chosen region. After the Trial, services stop until you switch to Free or upgrade. Hobby is $5 with $5 of included usage, always-on services, and up to 50 services per project.
- **Rates and agent spend.** Container rates are RAM $10 per GB-month, CPU $20 per vCPU-month, egress $0.05 per GB, and volume storage $0.15 per GB-month, billed by the minute while awake. Builds are free. Sandboxes and cloud-agent VMs use another rate: $50 per GB-month of RAM and $50 per vCPU-month. Memory in use, including the OS and filesystem cache, stays billable while the VM waits. Those VM charges and Railway Agent tokens (Anthropic pass-through: Opus 4.6, Sonnet 4.6, Haiku 4.5) draw from the same included credit as compute. Each environment may hold 10 sandboxes and 10 checkpoints on Free or Trial, 50 on Hobby, and 100 on Pro. Starting a cloud agent task is billed.
- **Two MCP surfaces.** CLI and OAuth share `mcp.railway.com` (projects, feature flags, redeploy, `accept-deploy`, Railway Agent, cloud-agent tasks, automations). A machine that cannot reach that host uses the CLI’s local server, which talks to the API directly and exposes a different tool list (services, variables, domains, buckets, volumes, logs). Destructive local calls return a preview until `confirm` is set. Remote destructive tools are marked so clients can prompt.
- **Alternatives.** Fly.io (`fly-io`) for Machines and Sprites. Render (`render`) for a Free web service that spins down after 15 minutes of no inbound traffic, with a separate workspace subscription. Cloudflare Workers (`cloudflare-agents`) for a Durable Object agent. Neon (`neon`) or Supabase (`supabase`) when the database is the product and the app host is separate.
- **Caveats.** A sleeping Free service, a rejected project token, and a local-versus-remote tool mismatch are the usual surprises. Details: `railway-free-sleep-and-mcp-token`.

## Sources

- [Railway MCP server](https://docs.railway.com/ai/mcp-server) — accessed 2026-11-22
- [Railway pricing](https://docs.railway.com/pricing) — accessed 2026-11-22
- [Railway pricing plans](https://docs.railway.com/pricing/plans) — accessed 2026-11-22
- [Railway Free plan](https://docs.railway.com/pricing/free-plan) — accessed 2026-11-22
- [Railway](https://railway.com/) — accessed 2026-11-22
