---
id: mcp-server-discover
title: MCP server/discover (capability probe)
tags: [mcp, discovery, stateless, transport]
status: active
updated: 2026-08-23
when_to_use: Implementing or calling server/discover on 2026-07-28 instead of an initialize handshake
---

## Summary

`server/discover` is the 2026-07-28 replacement for learning versions, capabilities, and display identity **without** a session. Servers **MUST** implement it. Clients **MAY** skip it and call any RPC, handling `UnsupportedProtocolVersionError` if the version is wrong.

## Notes

- Request carries only standard `_meta` (protocol version, `clientInfo`, `clientCapabilities`). Response includes `supportedVersions`, `capabilities`, optional `instructions`, plus cache fields (`ttlMs`, `cacheScope`) like other list/read results.
- `io.modelcontextprotocol/serverInfo` in response `_meta` is **self-reported**. Use it for UI, logs, and debugging. Do **not** change client security behavior from it (name/version is not a trust root).
- When to call: (1) show a server’s versions/capabilities in one hop instead of probing `tools/list` + `prompts/list` + `resources/list`; (2) **stdio** dual-era clients **SHOULD** send `server/discover` first — there is no HTTP status to drive fallback.
- HTTP clients can still land any method first and use the protocol-version header / unknown-method status codes. Discovery is convenience, not a handshake.
- Cache discover like other 2026-07-28 list results; a `public` cache of user-specific capability sets is a leak.

## Sources

- [MCP Discovery (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/discover) — accessed 2026-08-23
- [The 2026-07-28 Specification (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — accessed 2026-08-23
- [How AgentCore Gateway supports the MCP 2026-07-28 spec](https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/) — accessed 2026-08-23
