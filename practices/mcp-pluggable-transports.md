---
id: mcp-pluggable-transports
title: MCP pluggable transports — SDK interface, not more core wires (SEP-2598)
tags: [mcp, transport, sdk, extensions]
status: draft
updated: 2026-10-18
when_to_use: Asking for WebSocket, gRPC, or SSH as an MCP core transport, or implementing a custom SDK Transport
---

## Summary

**SEP-2598** (deferred by Core Maintainers; author update 2026-10-15) argues that **stdio** and **Streamable HTTP** stay the only **Standard** transports. Extra wires (WebSocket, gRPC, SSH) belong in a **pluggable SDK `Transport` interface**, with popular ones eligible later as SEP-2133 extensions. It is **not** in the 2026-07-28 spec. Prefer `mcp-stdio-transport` / `mcp-streamable-http-transport` for production.

## Notes

- Why “no” to more core transports: each addition compounds spec text and **every** Tier 1 SDK. The SEP’s default is keep the Standard set small and give SDKs a supported extension point instead of forking JSON-RPC framing per community PR (WebSocket SEP-1288, gRPC SEP-1352, SSH SEP-2325).
- Split: **SDK core** ships a public `Transport` interface plus a reusable conformance harness. **Implementations** ship as independent packages. Neither layer counts toward SDK conformance tiering (aligned with SEP-2133’s extension carve-out). Interface-vs-package also avoids the bootstrap paradox of negotiating an extension over `initialize` before a transport exists.
- Wire format: the SEP would relax “MUST preserve JSON-RPC on the wire” for custom transports, in exchange for a **bidirectional JSON-RPC mapping** so translating proxies stay tractable. Reviewers asked to let custom transports omit parts of MCP; that strictness is one reason the original vote **Deferred**.
- 2026-10-15 plan before re-vote: split into (1) **separating data model from transport representation** (Transports WG PR), (2) removing the JSON-RPC-on-the-wire requirement for custom transports, (3) this SEP making a pluggable interface a **Tier 1 SDK** requirement. Existing stable-major SDKs would be grandfathered until the next major version.
- Until that lands: do not claim gRPC/WebSocket MCP as spec-compliant. A third-party package that speaks MCP semantics over another session is an **integration**, not a Standard transport (`mcp-2026-roadmap` still lists HTTP-native work separately).

## Sources

- [SEP-2598: Pluggable Transports](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2598) — accessed 2026-10-18
- [MCP Spec TPM](https://plan.modelcontextprotocol.io/seps) — accessed 2026-10-18
- [MCP stdio (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio) — accessed 2026-10-18
- [Roadmap — Model Context Protocol](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-10-18
