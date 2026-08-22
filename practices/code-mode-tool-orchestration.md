---
id: code-mode-tool-orchestration
title: Code-mode tool orchestration (MCP + programmatic calling)
tags: [mcp, tools, tokens, sandbox]
status: active
updated: 2026-08-22
when_to_use: Tool catalogs or intermediate results are too large to hop through the model on every call
---

## Summary

Instead of the model calling every tool directly, expose tools as **code APIs** (or a hosted JS program) so the agent loads definitions on demand, filters/joins in the runtime, and returns a small result. Direct calls stay better when each hop needs fresh judgment or a hard approval boundary.

## Notes

- Anthropic pattern: generate a filesystem of MCP wrappers (`servers/<name>/<tool>.ts`). The model lists/reads only the files it needs, then writes code that calls several tools in one sandbox turn. Intermediate blobs never enter context unless logged.
- OpenAI **Programmatic Tool Calling**: add `programmatic_tool_calling`, set `allowed_callers: ["programmatic"]` on eligible tools. The model writes JS that runs in a fresh isolated V8 (no Node, no network except enabled tools). Use for filter/join/loop; keep writes and citation-sensitive work on direct calls.
- Filter large tool results in code (e.g. 10k rows → 5-row sample) before `console.log` / `text(...)`. That is the main token win versus stuffing full payloads through the transcript.
- Privacy: keep PII in the execution environment; tokenize before anything reaches the model, then detokenize on the outbound tool call.
- Deferred tools (`defer_loading`) are **not** visible inside an already-running program — the model must tool-search/load them first. MCP `require_approval` can still pause a program until a human approves.
- Sandbox, resource limits, and egress allow-lists are mandatory. Code mode is not a substitute for isolation; it adds a second attack surface (generated code) in exchange for fewer model-visible tokens.

## Sources

- [Code execution with MCP (Anthropic)](https://www.anthropic.com/engineering/code-execution-with-mcp) — accessed 2026-08-22
- [Programmatic Tool Calling (OpenAI)](https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling) — accessed 2026-08-22
- [The next generation of MCP (Cloudflare — Code Mode)](https://blog.cloudflare.com/mcp-v2/) — accessed 2026-08-22
