---
id: notion-mcp
title: Notion MCP — hosted workspace tools for agents
kind: service
tags: [notion, mcp, docs, auth]
status: active
updated: 2026-11-21
when_to_use: Giving a coding agent Notion pages and databases through Notion's hosted MCP server
---

## Summary

**Notion MCP** is Notion’s hosted MCP server for the pages and databases a workspace member can already open. The Streamable HTTP endpoint is `https://mcp.notion.com/mcp`. It is not the Cursor handoff that starts a Cloud Agent from a Notion page (`cursor-notion`), and it is not the unmaintained open-source `notion-mcp-server` package.

## Notes

- **Access.** Connect from the assistant’s connector list, from Settings → Notion MCP inside Notion, or by adding the URL above. Notion MCP works on every plan. Only workspace **members** can authorize; a guest is refused. The agent then sees content that member can access in the selected workspace. Sign up at `links.get`. The connect guide is `links.docs`.
- **Auth.** The usual path is OAuth in the browser. On Business and Enterprise, a workspace owner can create an MCP token in the developer portal and send it as a bearer token, with no browser sign-in. Enterprise workspaces with SAML SSO can use enterprise-managed authorization. An organization policy in the assistant can still block the server.
- **Protocol.** The hosted server speaks MCP `2026-07-28` and still accepts 2025 clients on the same `/mcp` URL. A standalone `GET /mcp` returns HTTP 405; send the JSON-RPC POST. The legacy SSE URL `https://mcp.notion.com/sse` shuts down on **23 February 2027**. Notion says the open-source package is no longer maintained, and it tells Antigravity users to add the hosted URL rather than the gallery connector that still uses that package.
- **Plan gates.** `notion-search` works on every plan. `notion-connector-search` needs Business or Enterprise with Notion AI. Saved-view queries work on every plan. SQL through `notion-query-data-sources` is unlimited on Business or Enterprise with Notion AI; other plans get a limited number of SQL queries against one data source at a time. Some search filters, including last edited by and last edited date, exist only on Business and Enterprise. On other plans those filters are dropped and the result says so. `notion-create-file-upload` accepts images and other files up to **20 MiB**, subject to the workspace file-size limit.
- **Rate limits.** Every tool call counts toward Notion’s API limits: **600 requests per minute** per connection on Business and Enterprise, **180** on other plans, over a 60-second window, plus a separate limit shared by every connection in the workspace. Notion MCP retries a limit once when the wait is **2 seconds or less**. A longer wait comes back immediately as a tool error with `code: "rate_limited"`.
- **Alternatives.** The Notion REST API when the caller is a server you operate, not an interactive MCP client. `cursor-notion` when the task is to assign a spec to a Cursor Cloud Agent.
- **Caveats.** A short rate-limit retry, a dropped filter, or the SSE URL are the usual misses. Details: `notion-mcp-plan-and-rate-limit`.

## Sources

- [Connect to Notion MCP](https://developers.notion.com/guides/mcp/get-started-with-mcp) — accessed 2026-11-21
- [Notion MCP overview](https://developers.notion.com/guides/mcp/overview) — accessed 2026-11-21
- [Build an MCP client for Notion](https://developers.notion.com/guides/mcp/build-mcp-client) — accessed 2026-11-21
- [Notion MCP rate limits](https://developers.notion.com/guides/mcp/rate-limits) — accessed 2026-11-21
- [Request limits](https://developers.notion.com/reference/request-limits) — accessed 2026-11-21
- [Notion sign-up](https://www.notion.com/signup) — accessed 2026-11-21
