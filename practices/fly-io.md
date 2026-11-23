---
id: fly-io
title: Fly.io — Machines, Sprites, and an OAuth MCP server
kind: service
tags: [fly, hosting, mcp, machines]
status: active
updated: 2026-11-23
when_to_use: Running an app on Fly Machines, or letting an agent manage Machines and Postgres through Fly MCP
---

## Summary

**Fly.io** runs apps as Machines billed by the second while started, plus Sprites and Managed Postgres. The personal organization starts on the Free plan: $1 for 7 days with no card, then $5 of usage a month after a card is added. The remote MCP server is `https://mcp.fly.io` and signs in with OAuth. Use Fly when the app should run close to a region and scale by starting and stopping Machines. Use Railway (`railway`) when you want sleep-on-idle services and a project dashboard, or Vercel Sandbox (`vercel-sandbox`) for a short Firecracker session.

## Notes

- **Access.** Sign up at `links.get`. Any OAuth MCP client uses `https://mcp.fly.io` (`links.docs`). There is no API token to paste into the client. Consent names organizations, apps, and Sprites. A later tool does not widen that grant; reconnect to pick it up. Revoke a client under Account → MCP Clients. The server can list and change existing apps’ Machines, volumes, and secret names, run read-only SQL on Managed Postgres, and manage Sprites. It does not create apps, run a general deploy, or administer the organization. IP addresses and certificates are read-only. Postgres tools do not delete clusters, change users, or return passwords.
- **Price shape (Ashburn `iad` / Secaucus `ewr`).** The smallest always-on Machine, `shared-cpu-1x` with 256 MB, is $2.19 for 30 days, billed per second while `started`. Other regions multiply CPU and RAM (São Paulo `gru` is 1.615). Stopped or suspended Machines still cost $0.15 per GB-month of rootfs. Volumes are $0.15 per GB-month of **provisioned** size, including while detached, and `extend_volume` cannot shrink them. Egress is $0.02/GB in North America and Europe, $0.04 in Asia Pacific, Oceania, and South America, and $0.12 in Africa and India. Inbound transfer and a shared IPv4 are free. A dedicated IPv4 is $2/month.
- **Free plan.** Only the personal organization can be on Free. Without a card, the $1 expires in 7 days and then new resources cannot be created. With a card, $5 resets on the 1st and covers Machines, volumes, snapshots, transfer, Sprites, and one Managed Postgres Developer cluster ($4/month, so about $1 remains for everything else). Limits: 1 member, 3 Machines, no performance CPUs, volumes up to 5 GB each, 3 Sprites, no extensions, no dedicated IPv4. Crossing $5 moves the org to Pay As You Go and bills the **whole month** at standard rates, not only the part above $5. The pricing card’s “credit card required” line is the monthly $5 allowance; the Free plan page is the one that spells out the no-card $1.
- **MCP sharp edges.** `create_machine` starts a billable Machine unless launch is skipped, and a lost response is not retried for you. `exec_machine_command` needs `fly:machines:exec`. Full Machine config, metadata, and process args need `fly:machines:sensitive:read`. Secret values are never returned. `query_postgres_database` is read-only, times out at 5 seconds, rejects results over 1,000 rows, and returns large integers as doubles. Reading Sprite files, logs, or services can wake a sleeping Sprite. Sprite cold storage bills at $0.02 per GB-month while the Sprite exists.
- **Docs disagree on the starting plan.** The Free plan page and the pricing page say every new account starts on Free. The getting-started sign-up page still says new accounts start on Pay As You Go. Follow the Free plan page before assuming the first deploy is unmetered or already on Pay As You Go.
- **Alternatives.** Railway (`railway`) for a PaaS with included credit. Render (`render`) for git-backed services, a Free spin-down tier, and workspace plans. E2B (`e2b-sandboxes`) or Daytona (`daytona-sandboxes`) when the job is an isolated sandbox API rather than an app you keep.

## Sources

- [Fly MCP](https://fly.io/mcp/) — accessed 2026-11-22
- [Fly.io pricing](https://fly.io/pricing/) — accessed 2026-11-22
- [Fly.io resource pricing](https://docs.fly.io/about/pricing) — accessed 2026-11-22
- [Fly.io Free plan](https://docs.fly.io/about/free-plan) — accessed 2026-11-22
- [Sign up and sign in to Fly.io](https://docs.fly.io/getting-started/sign-up-sign-in) — accessed 2026-11-22
- [Fly.io sign-up](https://fly.io/app/sign-up) — accessed 2026-11-22
