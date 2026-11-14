---
id: mcp-registry-admission
title: MCP registry is discovery, not a trust root
tags: [mcp, security, supply-chain, ops]
kind: knowledge
status: active
updated: 2026-11-14
when_to_use: Installing, pinning, or allowlisting MCP servers from the public registry or npx/uvx
---

## Summary

The official MCP Registry is a **preview metadata index** (namespace + `server.json` pointers to npm/PyPI/Docker/remote URLs). It authenticates publisher namespaces; it does **not** certify code, tool honesty, or runtime stability. Production hosts should consume a curated private catalog, not the public registry directly.

## Notes

- Registry data: reverse-DNS name (`io.github.user/server`), package or remote URL, install args/env, description. Package registries hold the actual bits; the MCP Registry maps names to those bits.
- Namespace auth (GitHub / DNS / HTTP challenge) stops random impersonation of `com.example/*`. It does not stop a legit publisher from shipping a malicious update ("rug pull") or a compromised dependency.
- Official docs: hosts should talk to **downstream aggregators** that implement the registry OpenAPI, not to `registry.modelcontextprotocol.io` as the runtime source of truth. Private servers do not belong in the public registry. Publish and read paths: `mcp-official-registry`.
- **Org namespaces:** `io.github.<org>/*` requires a GitHub **Owner** of that org. Ordinary membership no longer lets someone publish or overwrite servers under the org name. A CI token for that namespace can overwrite **every** server in it — keep it on a protected environment, not a repo secret every writer can reach.
- **Remote URLs are not authenticated.** GitHub login proves the GitHub account; DNS/HTTP login proves the **name’s** domain. Neither checks that `remotes[].url` is on that domain, and several names may share one URL. Key allowlists by **name + version**, not by URL. DNS TXT for domain auth must be on the **apex**, not a `_mcp-auth` selector — a selector or a stale apex TXT fails verification.
- Security scanning is delegated to npm/PyPI/Docker and to aggregators. Treat a listing as intake, then pin a digest/version, scan, stage, and promote through an allowlist.
- Runtime `npx`/`uvx` of `@latest` makes the running server a moving artifact: access review assumed a fixed binary. Pin versions (or vendored images) the same way you pin production dependencies.
- Re-approve when the artifact, tool list, permissions, endpoint, or publisher changes. Pair with sandboxing and least-privilege OAuth — registry membership is not an allow.

## Sources

- [The MCP Registry (about)](https://modelcontextprotocol.io/registry/about) — accessed 2026-08-22
- [MCP Registry in 2026: discover, verify, connect](https://digitalthoughtdisruption.com/2026/07/20/mcp-registry-discover-verify-safely-connect-servers/) — accessed 2026-08-22
- [MCP supply chain: treat servers as artifacts](https://nhimg.org/articles/mcp-supply-chain-security-means-treating-servers-as-artifacts/) — accessed 2026-08-22
- [How to authenticate when publishing](https://modelcontextprotocol.io/registry/authentication) — accessed 2026-11-14
- [Publishing remote servers](https://modelcontextprotocol.io/registry/remote-servers) — accessed 2026-11-14
- [Automate publishing with GitHub Actions](https://modelcontextprotocol.io/registry/github-actions) — accessed 2026-11-14
