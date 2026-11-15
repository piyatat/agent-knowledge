---
id: daytona-sandboxes
title: Daytona — sandboxes for agent computers
kind: service
tags: [daytona, sandbox, isolation, sdk]
status: active
updated: 2026-11-15
when_to_use: Running agent code in a Daytona sandbox (container, VM, GPU, or macOS) you can stop, pause, or archive
---

## Summary

**Daytona** sells isolated computers for agents: a Linux **container** by default, or a Linux/Windows **VM**, a **GPU** machine, or **macOS** on Apple silicon. You create them from the dashboard, the Python/TypeScript SDK, the CLI, or the HTTP API. This is a sandbox service, not a coding agent. E2B (`e2b-sandboxes`) and Vercel Sandbox (`vercel-sandbox`) are the closer alternatives when you only need a Linux microVM.

## Notes

- **Access:** account at `app.daytona.com`, API key from the dashboard keys page, `DAYTONA_API_KEY` for the SDK and `Authorization: Bearer` on the API. Quickstart creates with `POST https://api.daytona.com/sandboxes`. Lifecycle examples in the sandboxes guide call `app.daytona.io`. Use the host the page for that call names. CLI/MCP: install the CLI from the MCP docs, then `daytona login`. The MCP server can manage sandboxes, files, git, processes, code execution, computer use, and previews.
- **Shape:** default container is **1 vCPU, 1 GB RAM, 3 GiB disk**. The sandboxes guide states an organization cap of **4 vCPUs, 8 GB RAM, and 10 GB disk**. GPU sandboxes are ephemeral (up to 8 GPUs). Spot GPU needs Tier 2+ and fails immediately if capacity is gone. KVM/nested virt is off until support enables it.
- **Lifecycle:** container can stop and **archive**, not pause. Linux/Windows VMs can **pause/resume** (filesystem and memory) and fork; they do not archive. GPU can stop, not pause. **Auto-stop defaults to 15 minutes** and fires even while processes inside are running — internal work does not reset the timer; `0` disables it. VM classes that can pause default to **auto-pause 60 minutes** with auto-stop off when neither interval is set. Auto-delete is off unless you set it; `0` deletes as soon as the sandbox stops. Ephemeral sandboxes delete on stop. Linked children are always ephemeral and die with the parent.
- **Plans (pricing page, 2026-11-15):** **Starter** is $0 plus compute, **$200** one-time credits, 100 sandboxes, sessions up to **24 hours**. **Team** is **$250/month** plus compute, $100/month credits, 5,000 sandboxes, sessions up to **48 hours**. Stopped or paused sandboxes are not billed for CPU or memory. Billing docs: an ephemeral Linux sandbox cannot be stopped or paused, so it meters until delete; macOS is charged as a Mac reservation, not as that per-sandbox meter. CPU is billed as the greater of measured use and the reserved guarantee.
- **Alternatives:** E2B when you want a pause-by-default Linux VM and already have that SDK. Vercel Sandbox when the caller is already a Vercel project and Active CPU billing matters. The coding agent’s own OS sandbox when the loop already runs on the developer machine (`agent-code-sandboxing`).
- **Caveats:** a 15-minute default stop kills a long inference or install that nobody pokes from outside. Mixing `api.daytona.com` and `app.daytona.io` from different doc pages will 401 or 404 a key that is valid on the other host. The API key is the organization’s control plane.

## Sources

- [Sandboxes](https://www.daytona.io/docs/en/sandboxes/) — accessed 2026-11-15
- [Daytona quickstart](https://www.daytona.com/docs/quickstart) — accessed 2026-11-15
- [Pricing](https://www.daytona.com/pricing) — accessed 2026-11-15
- [Billing](https://www.daytona.com/docs/billing) — accessed 2026-11-15
- [Daytona MCP server](https://www.daytona.com/docs/mcp) — accessed 2026-11-15
