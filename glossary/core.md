---
id: glossary-core
title: Core glossary
tags: [glossary]
status: active
updated: 2026-08-06
when_to_use: Need shared definitions for agent-tooling terms
---

## Terms

| Term | Meaning here |
| --- | --- |
| **AGENTS.md** | Portable project steering markdown read by multiple coding agents |
| **alwaysApply** | Cursor rule flag: inject on every request (expensive) |
| **MCP** | Model Context Protocol — standard for tool/resource servers |
| **Progressive disclosure / discovery** | Load only catalog stubs first; fetch full tool detail on demand |
| **Tool selection** | Choosing which tool to call from names/descriptions |
| **Schema gate** | Validate tool args against JSON Schema before execution |
| **Referent check** | Validate that IDs/paths exist in the real system |
| **Knowledge corpus** | Curated markdown/SQLite notes for agent lookup (this repo) |
| **Token tax** | Context cost of always-loaded rules/tools |

## Sources

- Aggregated from MCP docs + Cursor rules guides listed in `sources/bibliography.md` — accessed 2026-08-06
