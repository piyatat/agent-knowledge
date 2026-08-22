---
id: mcp-registry-admission
title: MCP registry is discovery, not a trust root
tags: [mcp, security, supply-chain, ops]
status: active
updated: 2026-08-22
when_to_use: Installing, pinning, or allowlisting MCP servers from the public registry or npx/uvx
---

## Summary

The official MCP Registry is a **preview metadata index** (namespace + `server.json` pointers to npm/PyPI/Docker/remote URLs). It authenticates publisher namespaces; it does **not** certify code, tool honesty, or runtime stability. Production hosts should consume a curated private catalog, not the public registry directly.

## Notes

- Registry data: reverse-DNS name (`io.github.user/server`), package or remote URL, install args/env, description. Package registries hold the actual bits; the MCP Registry maps names to those bits.
- Namespace auth (GitHub / DNS / HTTP challenge) stops random impersonation of `com.example/*`. It does not stop a legit publisher from shipping a malicious update ("rug pull") or a compromised dependency.
- Official docs: hosts should talk to **downstream aggregators** that implement the registry OpenAPI, not to `registry.modelcontextprotocol.io` as the runtime source of truth. Private servers do not belong in the public registry.
- Security scanning is delegated to npm/PyPI/Docker and to aggregators. Treat a listing as intake, then pin a digest/version, scan, stage, and promote through an allowlist.
- Runtime `npx`/`uvx` of `@latest` makes the running server a moving artifact: access review assumed a fixed binary. Pin versions (or vendored images) the same way you pin production dependencies.
- Re-approve when the artifact, tool list, permissions, endpoint, or publisher changes. Pair with sandboxing and least-privilege OAuth — registry membership is not an allow.

## Sources

- [The MCP Registry (about)](https://modelcontextprotocol.io/registry/about) — accessed 2026-08-22
- [MCP Registry in 2026: discover, verify, connect](https://digitalthoughtdisruption.com/2026/07/20/mcp-registry-discover-verify-safely-connect-servers/) — accessed 2026-08-22
- [MCP supply chain: treat servers as artifacts](https://nhimg.org/articles/mcp-supply-chain-security-means-treating-servers-as-artifacts/) — accessed 2026-08-22
