---
id: modal-sandboxes
title: Modal Sandboxes — containers for untrusted agent code
kind: service
tags: [modal, sandbox, isolation, sdk]
status: active
updated: 2026-11-15
when_to_use: Running agent-generated or user code in a Modal container that can burst CPU and memory
---

## Summary

**Modal Sandboxes** are containers for untrusted or agent-generated code, driven from the Python `modal` SDK, the JavaScript `modal` package (`ModalClient`), or `github.com/modal-labs/modal-client/go`. Create one with `Sandbox.create` / `sandboxes.create` on a Modal App, then `exec` commands. This is not E2B (`e2b-sandboxes`), Daytona (`daytona-sandboxes`), or Vercel Sandbox (`vercel-sandbox`). Cursor can also place a Cloud Agent worker on a Modal account (`cursor-self-hosted-integrations`); that worker runs the Cursor CLI and is not this Sandbox API.

## Notes

- **Auth.** `modal token new` opens a browser session and writes a profile. `modal token set --token-id --token-secret` is the non-interactive path. `--expires-in` (for example `12h`, `7d`, `90d`) shortens a token; otherwise the lifetime is the workspace maximum. `modal token rotate` replaces the active token. Do not commit the token secret.
- **Lifetime.** Default maximum is **5 minutes**; pass `timeout` up to **24 hours** (JavaScript: `timeoutMs`). Longer work should filesystem-snapshot and start a new sandbox. Optional `idle_timeout` ends a sandbox that has no running `exec`, no stdin writes, and no open tunnel TCP connection. A request is charged for the **whole** life of the sandbox, including time spent waiting.
- **Resources and price.** Default request is **0.125** physical CPU cores (1 core = 2 vCPUs) and **128 MiB**. The sandbox can burst above that. Billing is **`max(request, actual)`** per second for CPU and memory. The product page lists sandbox CPU at **$0.1419 per physical core-hour** and memory at **$0.0240 per GiB-hour**, and says sandboxes are priced like non-preemptible Functions (**3×** the Function list price). The same page’s FAQ caps concurrent containers at **100** on Starter and **5,000** on Team (Enterprise is custom). Set a limit tuple when an agent is inside (`cpu=(request, limit)`, `memory=(request, limit)`) so a runaway process cannot burst without a cap. Root disk on the VM runtime is a fixed **512 GiB**. GPU sandboxes require `runtime="gvisor"` and **can be preempted**.
- **Network.** Outbound to any public IP is allowed by default. `block_network=True` drops all of it (and cannot be combined with allowlists). Otherwise DNS is unrestricted. `outbound_cidr_allowlist` filters by IP; `outbound_domain_allowlist` (beta) allows **TLS port 443** only. Inbound is closed unless you open a tunnel. Pass secrets into the sandbox; do not bake them into the image. `include_oidc_identity_token=True` injects `MODAL_IDENTITY_TOKEN`.
- **Snapshots.** Filesystem and directory snapshots default to a **30-day** TTL (Python SDK **v1.5**, Go/JS **v0.8.0**; earlier filesystem snapshots did not expire). Pass `ttl=None` to keep one. Memory snapshots expire after **7 days**, cannot be extended, cannot use GPUs, and restore only on the same instance type. Taking a snapshot **terminates** the sandbox today. Open TCP connections do not survive. You cannot snapshot while `exec` is still running.
- **Alternatives.** E2B or Daytona when you want pause/resume of a long-lived computer. Vercel Sandbox when the job is already a Vercel project and Active CPU billing fits. Cloudflare Agents (`cloudflare-agents`) when you want a durable object rather than a container you start and stop. Use the Cursor worker integration when the loop should stay Cursor’s and only the machine should be yours.
- **Caveats.** The 5-minute default kills an agent that is waiting on a model. A high CPU or memory **request** bills even while the sandbox is idle. Domain allowlists do not cover non-443 traffic, and DNS stays open unless you block the network entirely. A memory snapshot is not a 24-hour session.

## Sources

- [Sandboxes](https://modal.com/docs/guide/sandboxes) — accessed 2026-11-15
- [Sandbox resources and pricing](https://modal.com/docs/guide/sandbox-resources) — accessed 2026-11-15
- [Sandbox snapshots](https://modal.com/docs/guide/sandbox-snapshots) — accessed 2026-11-15
- [Sandbox networking](https://modal.com/docs/guide/sandbox-networking) — accessed 2026-11-15
- [modal token](https://modal.com/docs/reference/cli/token) — accessed 2026-11-15
- [Modal Sandboxes product page](https://modal.com/products/sandboxes) — accessed 2026-11-15
