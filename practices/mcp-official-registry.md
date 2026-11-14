---
id: mcp-official-registry
title: Official MCP Registry — publish and discover server metadata
kind: service
tags: [mcp, discovery, supply-chain, registry]
status: active
updated: 2026-11-14
when_to_use: Publishing or discovering a public MCP server's install metadata
---

## Summary

The **official MCP Registry** (`https://registry.modelcontextprotocol.io`) is a **preview** metadata index for **public** MCP servers: reverse-DNS name, `server.json` install hints, and a REST API. It does not host package bytes and it does not certify the code (`mcp-registry-admission`). Host apps should read a **downstream aggregator** that implements the same OpenAPI, not this origin as their runtime catalog.

## Notes

- **Access:** read `GET /v0.1/servers` with no auth (`search`, `version=latest` or an exact version, `updated_since`, cursor pagination). `search` must be at least **three** characters or the API returns **422**. Results are ordered by name, then by **version string as text** (`1.10.0` sorts before `1.2.0`) — do not treat the first row as latest unless you passed `version=latest`. Production base URL above; staging is `https://staging.registry.modelcontextprotocol.io`.
- **Publish:** install `mcp-publisher`, then `mcp-publisher login` and `mcp-publisher publish` from the project that holds `server.json`. GitHub device login (`login github`) grants `io.github.<user>/*` always. `io.github.<org>/*` requires you to be an **Owner** of that org; ordinary membership is not enough. Domain names (`com.example/server`) use DNS or HTTP auth. DNS TXT records go on the **apex** (`example.com`), not `_mcp-auth.example.com`. HTTP auth is a file at `https://example.com/.well-known/mcp-registry-auth`. Ed25519 keygen needs OpenSSL 3 (macOS LibreSSL cannot `genpkey` Ed25519).
- **What you may list:** public npm/PyPI/Docker (or other supported package types) or a **public** remote URL. Private networks and private package registries are out of scope. Forking the registry for self-host is unsupported; implement the OpenAPI on your own service if you need a private catalog.
- **Remotes:** `remotes[].type` is `streamable-http` (preferred) or deprecated `sse`. Namespace auth does **not** check that you control `remotes[].url`. Several names may share one URL. Consumers key off **name + version**, not the URL. Headers and `{variables}` in the URL are declared in `server.json` (`isSecret` for tokens).
- **CI:** GitHub Actions can publish with OIDC (no extra secret), a PAT (`read:org` for org namespaces), or `MCP_PRIVATE_KEY` for DNS. An org registry token can **overwrite every server** in that namespace. Store it as an environment secret with branch and reviewer rules. The official workflow verifies the `mcp-publisher` tarball with the Sigstore bundle from the release.
- **Limits:** preview — breaking changes and **data resets** can happen before GA. The registry does not scan package contents; npm/PyPI/Docker and aggregators do. Maintainers can take listings down.
- **Alternatives:** a curated private catalog or an aggregator marketplace. Pin the package digest yourself after intake (`mcp-server-trust-failures`).
- **Caveats:** a listing is a pointer. `npx`/`uvx` of a floating tag is a different artifact than the version string in the registry.

## Sources

- [The MCP Registry](https://modelcontextprotocol.io/registry/about) — accessed 2026-11-14
- [How to authenticate when publishing](https://modelcontextprotocol.io/registry/authentication) — accessed 2026-11-14
- [Quickstart: publish a server](https://modelcontextprotocol.io/registry/quickstart) — accessed 2026-11-14
- [Publishing remote servers](https://modelcontextprotocol.io/registry/remote-servers) — accessed 2026-11-14
- [Automate publishing with GitHub Actions](https://modelcontextprotocol.io/registry/github-actions) — accessed 2026-11-14
- [Official MCP Registry API](https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/official-registry-api.md) — accessed 2026-11-14
