---
id: cursor-self-hosted-agents
title: Cloud Agents — managed VM vs My Machines vs Team Pools
tags: [cursor, ops, security, isolation]
status: active
updated: 2026-09-02
when_to_use: Deciding whether Cloud Agent tool calls stay on Cursor VMs or move to a worker you operate
---

## Summary

The **agent loop always runs in Cursor's cloud**. What you choose is where **tool calls** execute: Cursor-managed isolated VMs (default), **My Machines** (one user's worker), or Enterprise **Team Pools**. Prefer managed + private connectivity unless policy requires the checkout on your metal. Named routing, hibernation, and partner hosts are `cursor-self-hosted-pools` / `cursor-self-hosted-integrations`.

## Notes

- Use BYOM only if written policy keeps the checkout/tools inside the perimeter, private services are unreachable via Tailscale/PrivateLink/allowlists, or you need custom OS/hardware/persistent disk. Cursor-hosted agents are Ubuntu VMs; customize with a Dockerfile; ARM is account-team.
- **Managed:** Cursor provisions isolation, snapshots, artifacts, capacity. You own repos, secrets, and network policy. Cost is model pricing; no separate worker fleet bill. Private Git/APIs: AWS PrivateLink (preferred for GHES/GitLab), Cloudflare Tunnel, or Tailscale in the VM (`cursor-cloud-secrets-network`).
- **My Machines:** personal laptop/devbox/VM via `agent worker start` + user/personal API key. Multiple agents can share one machine. You own cleanup, deps, credentials, and uptime. Fine for local state; not an org fleet.
- **Team Pools:** service-account auth, durable named queues, labels, Kubernetes/controller autoscaling. Company hosts run terminal, edits, computer-use, and **stdio MCP**. HTTP/SSE MCP still originates from Cursor's backend. Caps: 200 workers/user, 1000/team.
- What leaves the worker: file contents, terminal output, diffs, screenshots, local MCP results, routing metadata, and (if sharing) the desktop stream. Checkout, build cache, and machine-local creds stay. Artifacts upload to Cursor-managed S3 unless you block that host.
- All three support Privacy Mode and secrets. Self-hosted workers have historically failed under **Privacy Mode (Legacy)** because enablement still hits cloud-agent APIs — use standard Privacy Mode (`cursor-privacy-mode`).
- Docs still recommend managed for most teams. If the only need is private network reach, try allowlists/Tunnel/PrivateLink before standing up a pool.

## Sources

- [Self-Hosted Machines](https://cursor.com/docs/cloud-agent/self-hosted) — accessed 2026-09-02
- [Choose where Cloud Agents run](https://cursor.com/docs/cloud-agent/bring-your-own-machine/choose-runtime) — accessed 2026-09-02
- [Secrets & Network — private connectivity](https://cursor.com/docs/cloud-agent/security-network) — accessed 2026-09-02
- [Self-hosted machines (changelog)](https://cursor.com/changelog/self-hosted-machines) — accessed 2026-09-02
