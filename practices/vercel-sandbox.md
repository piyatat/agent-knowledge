---
id: vercel-sandbox
title: Vercel Sandbox — Firecracker microVMs for agent code
kind: service
tags: [vercel, sandbox, isolation, sdk]
status: active
updated: 2026-11-15
when_to_use: Running untrusted or agent-generated code in a Vercel Firecracker microVM with Active CPU billing
---

## Summary

**Vercel Sandbox** runs untrusted or agent-generated commands in a **Firecracker** Linux microVM with its own filesystem and network. Drive it from `@vercel/sandbox` (JS), `vercel-sandbox` (Python 3.11+), or the `sandbox` CLI (`sandbox run …`). Persistence is the default: stop saves state and resume continues. This is not Vercel Functions, and not E2B (`e2b-sandboxes`) or Daytona (`daytona-sandboxes`).

## Notes

- **Auth:** prefer the project **OIDC** token (`VERCEL_OIDC_TOKEN`). Locally, `vercel link` then `vercel env pull`. On Vercel, production auth is automatic. Use a Vercel **access token** when that OIDC token is absent (external CI, or a machine that is not a linked project).
- **Image and session:** default image is `vercel/sandbox/universal` (Ubuntu, current Node.js LTS, Python 3.14, coding agents, common utilities). Custom OCI images come from Vercel Container Registry. Default **timeout is 5 minutes**; extend it in code. Max session is **45 minutes on Hobby** and **24 hours on Pro/Enterprise**. That cap is one running session: it resets when the sandbox stops and resumes, so a persistent sandbox can outlive it. Each sandbox (SDK 3.0.0+ or a custom image) gets **64 GB** ephemeral NVMe. Up to **4 drives** per run.
- **Plans (`iad1` rates on the pricing page, 2026-11-15):** Hobby included **5 CPU-hours**, **420 GB-hours** memory, **5,000** creations, **10** concurrent sandboxes, max **4 vCPU / 8 GB**. Pro and Enterprise meter Active CPU at **$0.128/hour** and provisioned memory at **$0.0212/GB-hour**, **10,000** concurrent, max **8 vCPU / 16 GB** (Pro) or **32 vCPU / 64 GB** (Enterprise). Pro usage draws the **$20/month** credit first. Hobby creation pauses after the included quota; the pricing page describes that pause both as the next billing cycle and as 30 days after first use — re-read it before promising a reset date.
- **Billing shape:** **Active CPU** charges only while the CPU is busy, so time spent waiting on a model or HTTP call is cheap on CPU. **Memory is provisioned**, so an idle-but-running sandbox still accrues memory. **Stop** ends both. Snapshot storage and drives are separate line items.
- **Alternatives:** E2B or Daytona when the job is not tied to a Vercel project. Cloudflare Agents (`cloudflare-agents`) when you want a durable agent object rather than a VM you start and stop.
- **Caveats:** leaving a sandbox running “just in case” bills provisioned memory for the whole wait. Hobby’s 10-concurrent and 45-minute caps will reject an agent fan-out that Pro would allow. OIDC from `vercel env pull` is a credential; do not commit it.

## Sources

- [Vercel Sandbox](https://vercel.com/docs/sandbox) — accessed 2026-11-15
- [Sandbox pricing and quotas](https://vercel.com/docs/sandbox/pricing) — accessed 2026-11-15
- [JS SDK reference](https://vercel.com/docs/sandbox/sdk-reference) — accessed 2026-11-15
- [Python SDK reference](https://vercel.com/docs/sandbox/python-sdk-reference) — accessed 2026-11-15
