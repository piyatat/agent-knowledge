---
id: tool-description-hygiene
title: Tool description hygiene (selection quality)
tags: [mcp, tools, naming, lint]
status: active
updated: 2026-08-06
when_to_use: Authoring or linting MCP/CLI tool names and descriptions
---

## Summary

Agents pick tools from **names + descriptions**. Vague verbs and overlapping tools cause wrong selection even when the implementation is fine.

## Notes

- Prefer specific `verb_noun` names: `list_pull_requests`, not `get` / `handle_stuff` / `manage_data`.
- Every description should answer **when to use** and ideally **when not to use** (point to the sibling tool).
- Required schema fields need real descriptions (format, examples), not empty strings.
- Overlapping tools (two search-ish tools with near-identical blurbs) should be merged or explicitly differentiated.
- Local static lint (e.g. project `mcplint`) can catch vague verbs, missing when-to-use, and overlap before runtime evals.

## Sources

- [MCP client best practices](https://modelcontextprotocol.io/docs/develop/clients/client-best-practices) — accessed 2026-08-06
- [Optimizing AI Agents with Progressive Disclosure (Ardalis)](https://ardalis.com/optimizing-ai-agents-with-progressive-disclosure/) — accessed 2026-08-06
- Industry reports that rewriting tool descriptions alone can jump selection success dramatically (often cited Neon-style case studies; verify against primary writeups when tightening numbers).
