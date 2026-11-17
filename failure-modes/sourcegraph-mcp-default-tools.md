---
id: sourcegraph-mcp-default-tools
title: Sourcegraph MCP docs and the default tool list disagree
kind: knowledge
tags: [sourcegraph, mcp, search, reliability]
status: active
updated: 2026-11-17
when_to_use: A Sourcegraph MCP client cannot start Deep Search, or it starts one you did not budget for
---

## Summary

Sourcegraph’s MCP docs and its 16 November 2026 changelog describe different tools on `/.api/mcp`. A client that trusts either page can call a tool the instance does not list, or can start a quota-backed Deep Search from the default URL.

## Notes

- **Two first-party descriptions.** The changelog says the default endpoint now exposes every MCP tool, including `deepsearch`, `compare_revisions`, `go_to_definition`, `find_references`, `list_refs`, `get_contributor_repos`, and `nls_search`. The docs tool matrix, still showing the older split on **2026-11-17**, puts `deepsearch` only on `/.api/mcp/all` and `/.api/mcp/deepsearch`, and lists `nls_search` on the default endpoint only when Code Finder is unavailable. `/.api/mcp/all` remains. An instance that has not taken the release still matches the docs.
- **What to do.** Call the server’s tool list after connect. Do not hard-code which path has `deepsearch`. If the admin set `mcp.tools.disabled`, the name is omitted and calls are rejected even when the changelog says it is on by default.
- **Cost and time.** Deep Search uses the instance quota and can take minutes. Code Finder is metered too; a spent entitlement returns an error. Disable `deepsearch` in site config when agents should only read existing conversations (`deepsearch_read`).
- **Auth lookalikes.** `invalid_scope` means the OAuth client asked for something other than `mcp` (DCR clients cannot request `user:all`). `403` is a missing `mcp` scope or missing `MCP#ACCESS`. `404` means MCP is off, which is a different failure from a missing tool (`sourcegraph`).

## Sources

- [Sourcegraph MCP server](https://sourcegraph.com/docs/api/mcp) — accessed 2026-11-17
- [Every Sourcegraph MCP tool, on the default endpoint](https://sourcegraph.com/changelog/mcp-every-tool-by-default) — accessed 2026-11-17
- [MCP authentication](https://sourcegraph.com/docs/api/mcp/authentication) — accessed 2026-11-17
