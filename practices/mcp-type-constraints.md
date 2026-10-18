---
id: mcp-type-constraints
title: MCP schema type constraints — SEP-2778 size and format limits
tags: [mcp, schema, security, reliability]
status: draft
updated: 2026-10-18
when_to_use: Reviewing whether an MCP SDK should reject oversized titles/URIs, or tracking SEP-2778 before treating limits as spec
---

## Summary

**SEP-2778** (open draft, sponsored by @dsp-ant) would add **JSDoc / schema type constraints** to MCP’s draft TypeScript schema: string size caps, URI/MIME formats, non-negative counters, and similar limits aimed at XSS, open redirects, injection, and DoS. Backward compatible **unless** an implementation already sends uncommon values (empty descriptions, huge strings, negative counters). Not accepted — SDK maintainers have flagged it as a **breaking** runtime change.

## Notes

- Intent: one shared set of limits so clients, servers, and SDKs agree on message shape; enable generated docs and tests; keep SDKs consistent across languages. Repeated field shapes (`uri`, `mimeType`, `description`, `title`, `name`) were factored into **aliases** so a constraint is declared once.
- Concrete worry from SDK WG (2026-09-29): there is no non-breaking way to add a max length. A description that was valid yesterday errors tomorrow. Maintainers sampled public registries: about **2%** of tool descriptions exceed **1024** characters, including the sequential-thinking reference server and GitHub’s MCP server. Limits therefore have to be **protocol-version-scoped** (the PR already only touches `schema/draft`). Multi-version SDKs would validate differently per negotiated version.
- Behavior on violation is still open. Requests can already use JSON-RPC **−32602** (invalid params). Most limits sit on **server list results** (titles, descriptions) where a client cannot “error the result.” Drop the item vs fail the whole list vs log-only is unspecified.
- Status as of 2026-10-13: still `draft`; Core Maintainers asked to consider the set or a subset; sponsor pinged by the SEP bot. Do not ship hard 1024-char tool-description rejects as if they were 2026-07-28. Authoring hygiene still belongs in `tool-description-hygiene` / `mcp-output-schema` regardless of this SEP.

## Sources

- [SEP-2778: Adding Type Constraints to the MCP](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2778) — accessed 2026-10-18
- [MCP Spec TPM](https://plan.modelcontextprotocol.io/seps) — accessed 2026-10-18
- [Feature Lifecycle and Deprecation Policy](https://modelcontextprotocol.io/community/feature-lifecycle) — accessed 2026-10-18
