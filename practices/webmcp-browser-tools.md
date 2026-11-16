---
id: webmcp-browser-tools
title: WebMCP — page-declared tools for in-browser agents
tags: [webmcp, mcp, browser, tools]
status: draft
updated: 2026-11-16
when_to_use: A website should expose structured tools to a browser agent instead of relying on DOM scraping
---

## Summary

**WebMCP** is a proposed browser API so a page can register JSON-Schema tools that an in-page agent calls instead of guessing clicks. Chrome documents an **origin trial** (from Chrome 149) plus `chrome://flags/#enable-webmcp-testing`. It is **not** remote MCP, **not** NLWeb, and **not** a W3C Recommendation. Prefer `draft` until a browser ships it unflagged.

## Notes

- Two surfaces (Chrome docs, updated 2026-08): **Imperative** — `document.modelContext.registerTool({ name, description, inputSchema, execute })`; **Declarative** — annotate a `<form>` with `toolname` / `tooldescription` (optional `toolautosubmit`). The browser synthesizes a schema from fields.
- Discovery: `document.modelContext.getTools()` (same-origin by default; `fromOrigins` + `exposedTo` for cross-origin). `executeTool(tool, jsonArgs)` runs one. `AbortSignal` unregisters or cancels in-flight work. `toolchange` fires when the list changes. Chrome 153+ can unregister without aborting in-flight executes.
- Security: origin-isolated documents only (`document.domain` / `Origin-Agent-Cluster: ?0` disables the API). Gated by the `tools` Permissions Policy (default `self`). Cross-origin iframes need `allow="tools"`. Chrome’s stated design is **human-in-the-loop local browsing**, not headless autonomy. Agents must visit the page to discover tools.
- Annotations can carry MCP-like hints (`readOnlyHint`, `untrustedContentHint`). Sensitive actions should still require a user confirmation dialog. Chrome’s overview (updated 2026-10-07) still lists an **origin trial from Chrome 149**, the same testing flag, and experimental helpers in React, Angular, and Vue. It is still not a W3C Recommendation.
- **Stagehand v4** (`stagehand`) launches local Chrome with `--enable-features=WebMCP,WebMCPTesting,DevToolsWebMCPSupport` and lists tools via `page.tools()` (snapshot, default **1000 ms** wait). Attaching to a browser without those flags returns an empty list. Stagehand treats `readOnly`, `untrustedContent`, and `autosubmit` as **page hints**, not browser enforcement — do not pass `untrustedContent` output to a model as instructions. Prefer a published tool over `act()`; if `page.tools()` is empty, the agent is back to driving the UI.
- Contrast: remote **MCP** is JSON-RPC to a server; **NLWeb** is a site-wide `/ask` + `/mcp` content endpoint; **computer-use** still actuates pixels when the page has no tools.

## Sources

- [WebMCP (Chrome)](https://developer.chrome.com/docs/ai/webmcp) — accessed 2026-11-16
- [Stagehand WebMCP](https://docs.stagehand.dev/v4/basics/webmcp) — accessed 2026-11-16
- [WebMCP Imperative API](https://developer.chrome.com/docs/ai/webmcp/imperative-api) — accessed 2026-08-31
- [WebMCP Declarative API](https://developer.chrome.com/docs/ai/webmcp/declarative-api) — accessed 2026-08-31
