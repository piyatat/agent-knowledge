---
id: cursor-self-hosted-integrations
title: Self-Hosted Machines — partner hosts and sandbox templates
tags: [cursor, ops, sandbox, isolation]
status: active
updated: 2026-09-02
when_to_use: Running Cloud Agent tool execution on AWS Lambda, Daytona, E2B, Modal, Vercel, Cloudflare, Namespace, or Coder instead of a Cursor-managed VM
---

## Summary

Partner **Integrations** are Team Pool workers on infrastructure you already run. Cursor still owns the agent loop; the host only needs the Cursor CLI and outbound HTTPS. Guides and reference templates (Lambda MicroVMs, Cloudflare Containers, Kubernetes) are **reference architectures** — you own the image, secrets, scaling, and validation.

## Notes

- Documented partner hosts: **AWS Lambda, Cloudflare, Namespace, Modal, Daytona, E2B, Vercel, Coder**. Same worker contract as a VM: install CLI, authenticate with a service account key, `agent worker --pool <name> start`.
- Cursor also documents Kubernetes (Helm + `WorkerDeployment` operator) and Google Cloud Run Worker Pools (static count + a second pool that polls `/v0/private-workers/summary` to autoscale).
- Caps: **200 workers per user**, **1000 per team** (contact Cursor above that). Cost is model pricing **plus** your host bill — managed Cloud Agents include the VM.
- Outbound only: `api2.cursor.sh`, `api2direct.cursor.sh` (session); `downloads.cursor.com` (CLI / macOS Computer Use); `cloud-agent-artifacts.s3.us-east-1.amazonaws.com` (PR/dashboard artifacts). Blocking artifacts does not stop the agent. No inbound ports or VPN required; `HTTPS_PROXY` is supported.
- Prefer managed Cloud Agents + PrivateLink/Tunnel/Tailscale when the only need is private Git. Use a partner host for custom OS/hardware, existing sandbox fleets, or policy that keeps the checkout off Cursor VMs (`cursor-self-hosted-agents`).
- Any-repo pools pair well with ephemeral sandboxes: point `--worker-dir` at an empty workspace and optionally `--clone-git-repos`. Do not co-locate multiple credential-enabled workers under one OS user (`--clone-git-repos` / `--mint-github-token` / `--sync-dashboard-secrets`).

## Sources

- [Self-Hosted Machines](https://cursor.com/docs/cloud-agent/self-hosted) — accessed 2026-09-02
- [Team Pools](https://cursor.com/docs/cloud-agent/bring-your-own-machine/pools) — accessed 2026-09-02
- [Self-hosted machines (changelog)](https://cursor.com/changelog/self-hosted-machines) — accessed 2026-09-02
- [Cloud Run Worker Pools](https://cursor.com/docs/cloud-agent/self-hosted-cloud-run.md) — accessed 2026-09-02
