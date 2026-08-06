---
id: mcp-progressive-disclosure
title: Progressive disclosure for MCP / tool surfaces
tags: [mcp, tools, context, tokens]
status: active
updated: 2026-08-06
when_to_use: Designing or reviewing MCP servers / large tool lists that may bloat context
---

## Summary

When tool **definitions** (not results) eat a large share of the context window, do not inject every full schema up front. Expose a **lean catalog** for selection, then load full schemas / docs **on demand**.

## Notes

- Official MCP client guidance: progressive discovery is for when definitions take a significant fraction of context (example thresholds discussed around **1–5%** of the window). Small tool sets can stay fully loaded.
- Practical pattern many teams use:
  1. **Index** — id + one-line descriptor (selection only)
  2. **Overview / manifest** — summary + which detail parts exist
  3. **Detail** — full schema / docs fetched after the tool is chosen
- Anthropic-style guidance reported in secondary sources: keep roughly **3–5** always-loaded core tools; mark the rest deferred / searchable (`defer_loading`-style stubs). OpenAI-oriented notes similarly warn against huge always-visible namespaces (order-of-magnitude: keep namespaces small, e.g. under ~10 functions where possible).
- Write tool descriptions as **selectors** (“what / when to use / when not”), not tutorials. Put long how-to in resources the agent fetches after selecting the tool.
- Meta-tools like `search_tools` help when the catalog is large: search → load definition → call.

## Sources

- [MCP client best practices — progressive discovery](https://modelcontextprotocol.io/docs/develop/clients/client-best-practices) — accessed 2026-08-06
- [Architecting tools for AI agents at scale (Ziółkowski)](https://gziolo.pl/2026/04/09/research-architecting-tools-for-ai-agents-at-scale/) — accessed 2026-08-06
- [Progressive Disclosure for MCP (Developers Digest skill notes)](https://www.developersdigest.tech/library/skills/progressive-disclosure-mcp) — accessed 2026-08-06
- [Optimizing AI Agents with Progressive Disclosure (Ardalis)](https://ardalis.com/optimizing-ai-agents-with-progressive-disclosure/) — accessed 2026-08-06
