---
id: mcp-deprecated-roots-sampling
title: Deprecated MCP Roots, Sampling, and Logging
tags: [mcp, glossary, migration, deprecation]
status: active
updated: 2026-08-12
when_to_use: Auditing older MCP servers that still advertise roots/sampling/logging capabilities
---

## Summary

As of MCP 2026-07-28, **Roots**, **Sampling**, and **Logging** are deprecated with ≥12 months before removal. Migrate to explicit tool params, direct LLM API calls, and OpenTelemetry/stderr logging.

## Notes

- **Roots** → pass paths as tool parameters, resource URIs, or server config.
- **Sampling** → call provider APIs from the server; avoid reverse dependency on the client LLM.
- **Logging** → stderr for stdio; OTel for hosted observability.
- Legacy HTTP+SSE transport is also on the deprecation path — prefer Streamable HTTP.
- Track deprecations in server capability ads; dual-implement during transition.

## Sources

- [SEP-2577: Deprecate Roots, Sampling, and Logging](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2577-deprecate-roots-sampling-and-logging.md) — accessed 2026-08-12
- [AAIF: MCP 2026-07-28 migration](https://aaif.io/blog/mcp-2026-07-28-whats-changing-and-how-to-migrate) — accessed 2026-08-12
