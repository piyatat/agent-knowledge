---
id: mcp-server-cards
title: MCP Server Cards — discovery without connecting (SEP-2127 draft)
tags: [mcp, discovery, roadmap, extensions]
status: draft
updated: 2026-08-29
when_to_use: Planning well-known MCP server metadata / “business cards” — not a shipped 2026-07-28 feature
---

## Summary

An **MCP Server Card** is a proposed document a client can fetch **without** opening a protocol session, so catalogs and UIs can reason about a server first. SEP-2127 is still a Working Group draft. Do not implement a private `.well-known` dialect and call it MCP.

## Notes

- Charter scope: what the document is, its format, and how it is discovered (well-known URL vs resource-based). Out of scope: changing initialize/transports, and a general server registry (Registry WG owns catalogs).
- Stay close to registry `server.json` — the two formats should not diverge. Experimental repo: `modelcontextprotocol/experimental-ext-server-card`. Official extension IDs still follow `mcp-extensions-framework`.
- Today you still connect (or call `server/discover` on 2026-07-28) to learn capabilities. OAuth `.well-known` PRM/AS metadata (`mcp-authorization-discovery`) is **not** a Server Card.
- External “AI Card” / catalog linking is an open coordination item, not a spec requirement.
- Treat anything you ship now as proprietary until Core Maintainers accept the SEP and SDKs land. Mark integrations draft.

## Sources

- [Server Card Working Group charter](https://modelcontextprotocol.io/community/working-groups/server-card) — accessed 2026-08-29
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — accessed 2026-08-29
- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-08-29
