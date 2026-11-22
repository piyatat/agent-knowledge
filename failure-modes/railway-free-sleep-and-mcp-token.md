---
id: railway-free-sleep-and-mcp-token
title: A Railway service sleeps or stops, or MCP rejects the token
kind: knowledge
tags: [railway, mcp, hosting, billing]
status: active
updated: 2026-11-22
when_to_use: A Railway service slept or stopped, MCP rejected a token, or an agent deploy also billed model tokens
---

## Summary

Railway (`railway`) Free services sleep when they stop sending traffic, and they stop entirely once the monthly $1 is spent. The hosted MCP server refuses project tokens. The CLI’s local MCP server is a different tool list from `mcp.railway.com`, and Railway Agent tokens share the plan’s included usage with compute.

## Notes

- **Sleep versus stop.** On Free, a service with no outbound traffic for 5 to 10 minutes sleeps and wakes on the next request. Sleep is not triggered by a quiet inbound side, so a worker that polls or holds a socket stays billable. After the $1 of CPU, RAM, egress ($0.05/GB), and volume is gone, services stop until the next cycle or an upgrade. Volume and bucket bytes are kept. The one-time Trial grant is $5 for 30 days; when it ends, services stop until you move to Free or Hobby. Trial volumes are deleted 30 days after the credits expire unless the account is upgraded.
- **Trial network.** A Trial that Railway has not verified through GitHub is a Limited Trial: outbound network is restricted and only some ports are open. Verification is automatic. Hobby ($5, always-on, custom domains, region choice) is the documented way off that restriction.
- **Identity.** `mcp.railway.com` does not accept a project token. CLI mode needs a `railway login` user session and CLI **5.44.0** or later. OAuth is scoped to the workspaces and projects chosen at consent. An old editor entry that still runs `npx @railway/mcp-server` is the deprecated package; the install command does not remove it.
- **Wrong tool surface.** Prompts written for the remote server (`redeploy`, `accept-deploy`, feature flags, cloud-agent tasks) do not match the local server (`deploy`, `remove_service`, `delete_domain`, `remove_bucket`, `remove_volume`, variables, logs). Local destructive tools preview first and wait for `confirm`. `accept-deploy` commits staged changes. `run-cloud-agent-task` starts billable work.
- **Shared credit, two rates.** Hobby’s $5 and Pro’s $20 cover container usage, Railway Agent tokens, and VM usage together. Agent tokens are a separate invoice line at Anthropic pass-through rates. A sandbox or cloud-agent VM is $50 per GB-month of RAM and $50 per vCPU-month, and memory keeps billing while the VM waits. Free and Trial cap each environment at 10 sandboxes and 10 checkpoints. Crossing the included amount bills the combined overage.
- **Unclaimed VM.** The Free plan docs also describe a short-lived VM you can open before an account exists. Unclaimed boxes are deleted with their files. High demand can disable that path until you sign up.

## Sources

- [Railway MCP server](https://docs.railway.com/ai/mcp-server) — accessed 2026-11-22
- [Railway pricing](https://docs.railway.com/pricing) — accessed 2026-11-22
- [Railway pricing plans](https://docs.railway.com/pricing/plans) — accessed 2026-11-22
- [Railway Free plan](https://docs.railway.com/pricing/free-plan) — accessed 2026-11-22
