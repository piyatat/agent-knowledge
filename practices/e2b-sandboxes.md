---
id: e2b-sandboxes
title: E2B — pauseable Linux VMs for agent code
kind: service
tags: [e2b, sandbox, isolation, sdk]
status: active
updated: 2026-11-15
when_to_use: Running agent-generated code in an isolated Linux VM you can pause and resume
---

## Summary

**E2B** provides on-demand **Linux VMs** (sandboxes) so an agent can execute code, use a filesystem, and reach the network without running on the caller’s host. You drive them from the JavaScript or Python SDK (or the CLI). This is a sandbox service, not a coding agent. Local OS sandboxes inside Claude Code, Codex, or Cursor are a different layer (`agent-code-sandboxing`).

## Notes

- **Access:** `npm i e2b` or `pip install e2b`. Authenticate with `E2B_API_KEY`, or pass `apiKey` / `api_key` to `Sandbox.create`. The same key covers SDK and CLI. Find it in the E2B console. Do not commit it. Docs also publish a public MCP server at `https://docs.e2b.dev/mcp` (no auth) and `https://docs.e2b.dev/llms.txt`.
- **Lifecycle:** every sandbox has a timeout, **default 5 minutes** if you omit it. JavaScript `timeoutMs` is **milliseconds**; Python `timeout` is **seconds**. `setTimeout` / `set_timeout` resets the clock from the call, it does not add to the remaining time. When the timeout fires, **`onTimeout: 'kill'` is the default** — the VM is gone and cannot resume. Set `onTimeout: 'pause'` (Python `on_timeout`) to save filesystem **and memory** (running processes included). `autoResume` wakes a paused sandbox on the next SDK call or HTTP request to one of its URLs. `kill` discards state immediately.
- **Plans (docs, 2026-11-14):** **Hobby** is $0/month with **$100** one-time credits, max continuous run **1 hour**, **10** concurrent sandboxes, create rate **1/sec**, 8 vCPU, 8 GiB RAM, 10 GiB disk. **Pro** is **$150/month** (no extra credits), continuous run **24 hours**, **100** concurrent included (add-ons of 500 slots for $500/month, up to 1,100), create rate **5/sec**, 20 GiB disk, higher CPU/RAM on request. Enterprise is custom. Pro raises limits; it does not add credit. Compute bills **per second while running** (vCPU and RAM allocated, not consumed). Paused or killed sandboxes are not billed for compute and paused ones do not count toward concurrency. Paused sandboxes are kept until you kill them. The pricing page is the source of truth for per-second rates; the FAQ’s convenience figures were about **$0.0504 per vCPU-hour** and **$0.0162 per GiB-hour**.
- **Templates** define the image a sandbox boots from. Default size called out in the billing guide is **2 vCPU and 512 MiB**. OpenAI Agents SDK can run a `SandboxAgent` inside E2B (`pip install openai-agents[e2b]`).
- **Alternatives:** Daytona (`daytona-sandboxes`) when you need containers, Windows, GPU, or macOS as well as Linux VMs. Vercel Sandbox (`vercel-sandbox`) when the caller is a Vercel project and Active CPU billing matters. The coding agent’s own sandbox when the loop already runs on the developer machine. Cloudflare Agents when you want a durable agent object rather than a VM you manage (`cloudflare-agents`).
- **Caveats:** a forgotten sandbox with the default timeout is destroyed, not paused. Mixing JS milliseconds and Python seconds shortens or stretches the lifetime by 1000×. The API key is the whole project’s control plane.

## Sources

- [E2B documentation](https://docs.e2b.dev/) — accessed 2026-11-14
- [Sandbox lifecycle](https://docs.e2b.dev/sandbox) — accessed 2026-11-14
- [How long does a sandbox live?](https://docs.e2b.dev/faq/sandbox-lifetime) — accessed 2026-11-14
- [API key](https://docs.e2b.dev/api-key) — accessed 2026-11-14
- [Billing and limits](https://docs.e2b.dev/billing) — accessed 2026-11-14
- [How do I calculate the price of a sandbox?](https://docs.e2b.dev/faq/calculate-sandbox-price) — accessed 2026-11-14
- [OpenAI Agents SDK on E2B](https://docs.e2b.dev/agents/openai-agents-sdk) — accessed 2026-11-14
