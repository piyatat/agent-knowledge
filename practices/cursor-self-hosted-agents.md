---
id: cursor-self-hosted-agents
title: Cloud Agents — managed VM vs My Machines vs Self-Hosted Pool
tags: [cursor, ops, security, isolation]
status: active
updated: 2026-08-27
when_to_use: Deciding whether Cloud Agent tool calls stay on Cursor VMs or move to a worker you operate
---

## Summary

The **agent loop always runs in Cursor's cloud**. What you choose is where **tool calls** execute: Cursor-managed isolated VMs (default), **My Machines** (one user's worker), or Enterprise **Self-Hosted Pool**. Prefer managed + private connectivity unless policy requires the checkout on your metal.

## Notes

- Use BYOM only if written policy keeps the checkout/tools inside the perimeter, private services are unreachable via Tailscale/PrivateLink/allowlists, or you need custom OS/hardware/persistent disk. Cursor-hosted agents are Ubuntu VMs; customize with a Dockerfile; ARM is account-team.
- **Managed:** Cursor provisions isolation, snapshots, artifacts, capacity. You own repos, secrets, and network policy. Cost is model pricing; no separate worker fleet bill. Private Git/APIs: AWS PrivateLink (preferred for GHES/GitLab), Cloudflare Tunnel, or Tailscale in the VM (`cursor-cloud-secrets-network`).
- **My Machines:** personal laptop/devbox/VM. Worker is per-user, per-repo, must stay online. You own cleanup, deps, and credentials. Fine for a one-off local state; not an org fleet.
- **Self-Hosted Pool:** service-account auth, labels, Kubernetes, autoscaling, GPU/high-mem profiles. Company hosts run terminal, edits, browser, and **local MCP**. You patch images, reset VMs, monitor, and incident-respond.
- All three support Privacy Mode and secrets. Self-hosted workers have historically failed under **Privacy Mode (Legacy)** because enablement still hits cloud-agent APIs — use standard Privacy Mode (`cursor-privacy-mode`).
- Docs claim managed is enough for most teams. If the only need is private network reach, try allowlists/Tunnel/PrivateLink before standing up a pool.

## Sources

- [Governed Cloud Agents / self-hosted overview](https://cursor.com/docs/cloud-agent/self-hosted) — accessed 2026-08-27
- [Choose where Cloud Agents run](https://cursor.com/docs/cloud-agent/self-hosted-guides/choose-runtime) — accessed 2026-08-27
- [Secrets & Network — private connectivity](https://cursor.com/docs/cloud-agent/security-network) — accessed 2026-08-27
