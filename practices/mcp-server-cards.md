---
id: mcp-server-cards
title: MCP Server Cards — HTTP discovery without connecting (SEP-2127)
tags: [mcp, discovery, roadmap, extensions]
status: draft
updated: 2026-10-12
when_to_use: Publishing or fetching a static MCP Server Card before opening a transport — SEP-2127 is Final; SDKs are still experimental
---

## Summary

An **MCP Server Card** is a **public, static** HTTP document a client can fetch **without** opening MCP. **SEP-2127** is **Final** (Extensions Track, `io.modelcontextprotocol/server-card`). The normative schema still lives in `modelcontextprotocol/experimental-ext-server-card` (Python/Go SDK PRs are experimental) — **keep this note draft**. Not `server/discover` (`mcp-server-discover`), not Registry `server.json` (`mcp-registry-admission`), not OAuth `.well-known` (`mcp-authorization-discovery`).

## Notes

- A card describes **remote** identity (`name`, `version`, `description`, optional `title` / `icons` / `repository` / `websiteUrl`) and **transport endpoints** (URLs, headers, variable templates, `supportedProtocolVersions`). Namespaced `_meta` is vendor extras — **not** capabilities or extension support. Cards **omit** tools, resources, and prompts: those vary by auth and must be listed at runtime.
- Discovery: host the document at any unreserved URI; **`/server-card`** is the recommended path. An **AI Catalog** (often `/.well-known/ai-catalog.json`) can link to or embed several cards. Media types, CORS, and caching are in the extension repo’s `docs/discovery.md`. If a card disagrees with live `server/discover`, **prefer the live values**.
- Registry `server.json` covers installable **packages** and local runtime config. Cards cover **remote connectivity only**. Reuse compatible identity/endpoint fields; do not invent a private `.well-known` dialect and call it MCP.
- Security: cards are public by design — **no credentials**, internal topology, or session data. Wide-open CORS is acceptable for read-only metadata. Serve over HTTPS. Rate-limit discovery. A compromised card mainly hurts discoverability; clients still verify against the live server.
- Optional and additive. Experimental implementations: python-sdk#2951, go-sdk#1024, a Goose discovery demo. Pin the extension repo revision until `ext-server-card` graduates and official SDKs ship.

## Sources

- [SEP-2127: MCP Server Cards](https://modelcontextprotocol.io/seps/2127-mcp-server-cards) — accessed 2026-10-12
- [SEP index](https://modelcontextprotocol.io/seps) — accessed 2026-10-12
- [experimental-ext-server-card](https://github.com/modelcontextprotocol/experimental-ext-server-card) — accessed 2026-10-12
- [MCP Protocol News — October 9, 2026](https://library.mikesailab.com/news/ai-news/mcp-news/october-2026/2026-10-09/) — accessed 2026-10-12
