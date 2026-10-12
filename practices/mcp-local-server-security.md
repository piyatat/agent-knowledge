---
id: mcp-local-server-security
title: MCP local server security — stdio is not a sandbox
tags: [mcp, security, stdio, sandbox]
status: draft
updated: 2026-10-12
when_to_use: Installing or reviewing a local stdio MCP server, or writing fleet policy for laptop-side MCP
---

## Summary

A **local MCP server** is an ordinary OS process the host launches (usually **stdio**). The protocol does **not** sandbox it: it inherits the user’s files, env, and egress. Official guidance lives under MCP’s **draft** tutorials — treat this note as **draft** until that page leaves `/docs/draft/`. Protocol OAuth/confused-deputy issues are a different threat model (`mcp-server-trust-failures`, `mcp-oauth-discovery-ssrf`).

## Notes

- Stdio assumes one trust domain. Neither the spec nor the SDKs defend the client against the child. Isolation (container, OS sandbox, VM) is the host’s and operator’s job (`mcp-stdio-transport`, `vscode-mcp`).
- Prefer a **remote** Streamable HTTP server when the job is wrapping a SaaS API. An unnecessary local-only install is a signal. Keep genuine local exceptions (working tree, hardware, local tools).
- Provenance before launch: identifiable publisher, exact package name (typosquats), **pin a version** (not `latest`). `npx`/`uvx` pins usually freeze only the top-level package; pin a container **digest** to freeze the tree. A registry listing is not an endorsement (`mcp-registry-admission`).
- Tool names/descriptions are model-facing instructions. Skim them (Inspector can list tools without a model). Prefer hosts that **re-prompt when definitions change** (rug pull). Every extra server shares the same model context — tool poisoning/shadowing can steer other servers’ tools (`tool-description-hygiene`).
- Containment baseline: `docker run -i --rm` with no home mounts; `--network=none` if no egress is needed. Pass **per-server** scoped tokens, not shell-exported cloud keys. Filesystem allowlists are cooperative; enforcement is the sandbox. Local HTTP bridges need real auth + origin checks, not just `127.0.0.1` (`mcp-localhost-dns-rebinding`).
- Fleet: inventory known client config paths; publish a pinned allowlist; default “third-party = container, no `$HOME`”; plan egress-block + credential rotation when an SDK or server is vulnerable. SEP-1024 requires one-click installers to show the exact command first.

## Sources

- [Local Server Security](https://modelcontextprotocol.io/docs/draft/tutorials/security/local-server-security) — accessed 2026-10-12
- [MCP Inspector security](https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/security) — accessed 2026-10-12
- [MCP stdio (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio) — accessed 2026-10-12
