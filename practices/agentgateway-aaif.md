---
id: agentgateway-aaif
title: agentgateway — AAIF proxy for MCP, A2A, and LLM traffic
tags: [aaif, mcp, a2a, gateway]
status: active
updated: 2026-09-01
when_to_use: Putting a policy/observability proxy in front of MCP servers, A2A agents, or LLM backends instead of exposing them raw
---

## Summary

**agentgateway** is an Apache-2.0, Rust data plane plus control plane for MCP, A2A, LLM inference, HTTP, and gRPC. It is an **AAIF-hosted** Linux Foundation project (Growth-stage, 2026) — infrastructure, not a protocol. Use it when you need federation, authz, and metrics in front of many tool servers; do not treat it as a replacement for MCP or A2A themselves.

## Notes

- AAIF stack (their split): AGENTS.md = instructions; goose = local runtime; MCP = tools/data; **agentgateway** = routing/policy/observability; A2A = peer tasks. Same foundation does not merge the wires.
- Why not a generic API gateway: MCP/A2A are JSON-RPC with long-lived streams, server-initiated messages, and fan-out (`tools/list` across many backends). Traditional Envoy-style HTTP hops are short-lived and session-unaware. agentgateway adds MCP virtualization (one client endpoint, many backends, per-client tool policy), protocol upgrade/fallback, JWT/RBAC, CEL policies, and built-in metrics/tracing.
- Deploy **standalone** (binary / Docker / single Helm; editable config + `agctl`) or **Kubernetes** (CRDs + Gateway API control plane). Same proxy can front ordinary REST/gRPC so you do not run a separate “AI gateway.”
- Security: JWT, API keys, MCP authn/authz, extAuthz, mTLS, CORS, local/remote rate limits, prompt/budget guards. Treat federated tools as untrusted until policy says otherwise (`mcp-server-trust-failures`).
- Conformant to Kubernetes Gateway API; config can update via xDS without downtime. Docs: agentgateway.dev (standalone vs kubernetes sections).

## Sources

- [Introduction (agentgateway)](https://agentgateway.dev/docs/standalone/latest/about/introduction/) — accessed 2026-09-01
- [agentgateway joins AAIF](https://aaif.io/blog/agentgateway-joins-aaif-as-an-open-gateway-for-agentic-ai-infrastructure) — accessed 2026-09-01
- [agentgateway/agentgateway](https://github.com/agentgateway/agentgateway) — accessed 2026-09-01
