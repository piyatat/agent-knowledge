---
id: context7
title: Context7 — current library docs for agents
kind: service
tags: [context7, mcp, docs, discovery]
status: active
updated: 2026-11-16
when_to_use: Fetching current library documentation into a coding agent instead of relying on training data
---

## Summary

**Context7** (Upstash) is a hosted documentation index with an MCP server, a CLI, and a REST API. An agent resolves a library id, then pulls reranked snippets for a question. It is not a site index you publish yourself (`llms-txt`) and not OpenAI’s docs MCP (`openai-docs-mcp`).

## Notes

- **Access.** Remote MCP is `https://mcp.context7.com/mcp`. OAuth clients use `https://mcp.context7.com/mcp/oauth` (HTTP only; stdio still needs an API key). Keys are created in the dashboard and are sent as `Authorization: Bearer` or `Context7-API-Key`. A 401 means the key should start with `ctx7sk`. `npx ctx7 setup` (or `npx ctx7 setup --cursor`) signs in and writes the client config; `npx ctx7 remove` undoes that setup. Paste-a-prompt setup is `Read https://context7.com/get-started.md and set up Context7`.
- **Tools.** MCP tools match the REST lookups: `resolve-library-id` (search libraries) and `query-docs` (snippets for a library id, question, and optional language). REST also has `GET /api/v3/search`, which picks up to four libraries for you. Library ids are URL paths such as `/vercel/next.js` or `/websites/uploadcare`. Pin a release with `/owner/repo/v1.2.3` or `@v1.2.3`. An unknown version still returns the closest indexed docs and says which version was served; an unknown branch name such as `canary` is `404 version_not_found`.
- **Plans.** Free is $0: 1,000 calls a month across MCP, CLI, Search, and REST, then requests stop until the next UTC month, with 20 bonus calls a day. Pro is $10 per seat per month, 2,000 calls per seat, then $5 per 1,000. Private repositories are Pro or Enterprise at $5 per 1 million parsed tokens. Enterprise adds SSO and a self-hosted deployment. The usage API also names a `payg` plan that includes no requests and bills every call. One search-plus-context pair is two calls; `GET /api/v2/usage` does not count.
- **Cursor Cloud Agents.** They do not read `~/.cursor/mcp.json` or a repo `.cursor/mcp.json`. Add an HTTP server in the Cloud Agent UI. Header names with underscores can be dropped by the proxy; use `Context7-API-Key`. A green “ready” status does not prove the key was sent — query a private library that belongs to that key.
- **Alternatives.** `llms.txt` when you control the site and the agent can fetch one index. A vendor docs MCP when you only need that vendor. Context7 when the agent needs many public libraries and version pins.
- **Caveats.** Public chunks are classified for prompt injection and malware patterns before indexing; flagged chunks are not indexed. Treat returned snippets as untrusted anyway (`prompt-injection-agent-defense`). Do not commit the API key. Free accounts hard-stop at the monthly cap.

## Sources

- [Context7 API guide](https://context7.com/docs/api-guide) — accessed 2026-11-16
- [Context7 plans and pricing](https://context7.com/docs/plans-pricing) — accessed 2026-11-16
- [Context7 for Cursor](https://context7.com/docs/clients/cursor) — accessed 2026-11-16
- [Context7 MCP clients](https://context7.com/docs/resources/all-clients) — accessed 2026-11-16
- [Context7 data safety](https://context7.com/docs/security/data-safety) — accessed 2026-11-16
- [Get API usage](https://context7.com/docs/api-reference/usage/get-api-usage) — accessed 2026-11-16
