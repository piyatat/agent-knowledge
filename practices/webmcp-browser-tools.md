---
id: webmcp-browser-tools
title: WebMCP — page-declared tools for in-browser agents
tags: [webmcp, mcp, browser, tools]
status: draft
updated: 2026-08-31
when_to_use: A website should expose structured tools to a browser agent instead of relying on DOM scraping
---

## Summary

**WebMCP** is a proposed browser API so a page can register JSON-Schema tools that an in-page agent calls instead of guessing clicks. Chrome documents an **origin trial** (from Chrome 149) plus `chrome://flags/#enable-webmcp-testing`. It is **not** remote MCP, **not** NLWeb, and **not** a W3C Recommendation. Prefer `draft` until a browser ships it unflagged.

## Notes

- Two surfaces (Chrome docs, updated 2026-08): **Imperative** — `document.modelContext.registerTool({ name, description, inputSchema, execute })`; **Declarative** — annotate a `<form>` with `toolname` / `tooldescription` (optional `toolautosubmit`). The browser synthesizes a schema from fields.
- Discovery: `document.modelContext.getTools()` (same-origin by default; `fromOrigins` + `exposedTo` for cross-origin). `executeTool(tool, jsonArgs)` runs one. `AbortSignal` unregisters or cancels in-flight work. `toolchange` fires when the list changes. Chrome 153+ can unregister without aborting in-flight executes.
- Security: origin-isolated documents only (`document.domain` / `Origin-Agent-Cluster: ?0` disables the API). Gated by the `tools` Permissions Policy (default `self`). Cross-origin iframes need `allow="tools"`. Chrome’s stated design is **human-in-the-loop local browsing**, not headless autonomy. Agents must visit the page to discover tools.
- Annotations can carry MCP-like hints (`readOnlyHint`, `untrustedContentHint`). Sensitive actions should still require a user confirmation dialog. React (`usewebmcp`) and Angular have experimental helpers.
- Contrast: remote **MCP** is JSON-RPC to a server; **NLWeb** is a site-wide `/ask` + `/mcp` content endpoint; **computer-use** still actuates pixels when the page has no tools.

## Sources

- [WebMCP (Chrome)](https://developer.chrome.com/docs/ai/webmcp) — accessed 2026-08-31
- [WebMCP Imperative API](https://developer.chrome.com/docs/ai/webmcp/imperative-api) — accessed 2026-08-31
- [WebMCP Declarative API](https://developer.chrome.com/docs/ai/webmcp/declarative-api) — accessed 2026-08-31
