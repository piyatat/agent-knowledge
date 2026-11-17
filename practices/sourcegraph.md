---
id: sourcegraph
title: Sourcegraph — code search and MCP for agents
kind: service
tags: [sourcegraph, mcp, search, code]
status: active
updated: 2026-11-17
when_to_use: Letting a coding agent search and navigate a private multi-repo codebase through Sourcegraph MCP
---

## Summary

**Sourcegraph** is a code-intelligence platform: keyword and semantic search, revision history, code navigation, and Deep Search across the repositories an instance has indexed. Agents reach it through the instance’s **MCP** server. This is the search backend, not Amp (`amp-agent`), which is Sourcegraph’s coding agent.

## Notes

- **Access.** Enterprise, including single-tenant Sourcegraph Cloud. The pricing page starts at **$16k** minimum annual contract and includes AI credits, Deep Search, and MCP. A cloud trial is requested from the contact page linked in `links`. The public instance at sourcegraph.com indexes open-source code only. MCP docs say the server is supported on Enterprise plans. The endpoint is `https://<instance>/.api/mcp`.
- **Auth.** OAuth 2.0 or a Sourcegraph access token. Dynamic client registration is on by default and can only request the `mcp` scope. Admins who pre-approve clients create an OAuth client with that scope, then can set `auth.idpDynamicClientRegistrationEnabled` to false (existing DCR tokens stop working). Token clients send `Authorization: token <access token>`, and the token can be limited to `mcp`. OAuth access tokens expire after **one hour**; each refresh returns a new one-time refresh token. `MCP#ACCESS` is on the built-in User role unless an admin removes it. Repository permissions still apply. `mcp.enabled` defaults to true; false makes `/.api/mcp` return 404.
- **Tools.** Search, file read, repo and ref listing, commit and diff search, a sandboxed Lua `evaluator`, Code Finder, and Deep Search. Files over **128KB** return the first **200** lines. `list_files` caps at **1000** entries. Code Finder is synchronous and metered; an exhausted quota returns an error. Deep Search is a longer agentic conversation and spends the instance’s Deep Search quota. Admins remove tools for every endpoint with `mcp.tools.disabled`.
- **Which URL.** `/.api/mcp` is the default. `/.api/mcp/all` is the full set. `/.api/mcp/deepsearch` is Deep Search only. A **2026-11-16** changelog says the default endpoint now lists every tool, including `deepsearch` and navigation, because clients load tools on demand. The MCP docs page, fetched **2026-11-17**, still shows the older matrix (no `deepsearch` on the default endpoint; `nls_search` only when Code Finder is unavailable). List tools from the live server (`sourcegraph-mcp-default-tools`).
- **Alternatives.** Serena (`serena`) for symbol tools on a repo you have checked out. Copilot code search (`github-copilot-code-search`) when the code already lives on GitHub. Amp when the job is a coding thread, not a search API.
- **Caveats.** Pointing an agent at `/.api/mcp` can start Deep Search on instances that have taken the 16 November change. That call spends quota and can run for minutes. Treat file and search text as untrusted (`prompt-injection-agent-defense`).

## Sources

- [Sourcegraph MCP server](https://sourcegraph.com/docs/api/mcp) — accessed 2026-11-17
- [MCP authentication](https://sourcegraph.com/docs/api/mcp/authentication) — accessed 2026-11-17
- [Every Sourcegraph MCP tool, on the default endpoint](https://sourcegraph.com/changelog/mcp-every-tool-by-default) — accessed 2026-11-17
- [Sourcegraph pricing](https://sourcegraph.com/pricing) — accessed 2026-11-17
- [Getting started](https://sourcegraph.com/docs/getting-started) — accessed 2026-11-17
- [Sourcegraph Cloud](https://sourcegraph.com/docs/cloud) — accessed 2026-11-17
