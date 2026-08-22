---
id: mcp-apps-extension
title: MCP Apps — sandboxed UI in the host
tags: [mcp, ux, security, extensions]
status: active
updated: 2026-08-22
when_to_use: Shipping interactive MCP tool UIs (forms, charts, dashboards) inside a host iframe
---

## Summary

MCP Apps (`SEP-1865`) is an **opt-in extension**: servers declare HTML UI resources on the `ui://` scheme; hosts render them in sandboxed iframes and proxy JSON-RPC over `postMessage`. UI is progressive enhancement — text-only hosts must still get a usable tool result.

## Notes

- Tools link UI via `_meta.ui.resourceUri` (e.g. `ui://weather/forecast`). Hosts can prefetch/review templates before first render.
- Three roles: **server** (tools + HTML), **host** (iframe + AppBridge), **view** (sandboxed App). Views never touch host DOM, cookies, or storage.
- Tool results may split `content` (for the model) from `structuredContent` (for the UI) so dashboards do not bloat the transcript.
- Tools can be `visibility: ["model"]`, `["app"]`, or both. App-only tools (pagination, refresh) stay out of the model catalog.
- CSP is deny-by-default: servers declare allowed network domains; undeclared hosts get no egress. UI-initiated `tools/call` must follow the same consent/audit path as model-initiated calls.
- Hosts advertise UI capability; servers that do not check it should still return meaningful text. Display modes (`inline` / `fullscreen` / `pip`) are requested by the view but decided by the host.

## Sources

- [MCP Apps overview](https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html) — accessed 2026-08-22
- [SEP-1865: MCP Apps](https://modelcontextprotocol.io/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp) — accessed 2026-08-22
- [MCP Apps are live (MCP Blog, 2026-01-26)](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/) — accessed 2026-08-22
