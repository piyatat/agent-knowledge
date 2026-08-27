---
id: mcp-icons
title: MCP icons — Implementation, Tool, Prompt, Resource
tags: [mcp, ux, security, design]
status: active
updated: 2026-08-27
when_to_use: Adding icons to an MCP server/tool/prompt/resource or reviewing a host that renders them
---

## Summary

MCP 2026-07-28 lets servers attach an `icons` array of `Icon` objects to **Implementation**, **Tool**, **Prompt**, and **Resource**. Hosts use them for UI only. Treat `src` and bytes as untrusted.

## Notes

- Each icon: required `src` (HTTPS URL or `data:` URI), optional `mimeType`, `sizes` (`["48x48"]`, `["any"]` for SVG, or several sizes), optional `theme` (`light` / `dark`).
- Clients that render icons **MUST** support `image/png` and `image/jpeg` (`image/jpg`). They **SHOULD** also support `image/svg+xml` and `image/webp`.
- Reject unsafe schemes and redirects (`javascript:`, `file:`, `ftp:`, `ws:`, local app URIs). Disallow scheme changes and cross-origin redirects. Prefer same-origin as the MCP server.
- Fetch **without** cookies, `Authorization`, or other client credentials. Cap size/dimensions/frames (GIF). Treat declared MIME as advisory; sniff magic bytes; allowlist types.
- SVG **MAY** contain executable JavaScript. Sanitize, sandbox, or disable SVG. Multiple icons: pick by size/theme; do not treat icons as capability or trust signals.

## Sources

- [MCP Base Protocol — icons (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic) — accessed 2026-08-27
- [SEP-973 — icons and websiteUrl](https://modelcontextprotocol.io/seps/973-expose-additional-metadata-for-implementations-res.md) — accessed 2026-08-27
