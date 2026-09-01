---
id: openai-agents-sdk
title: OpenAI Agents SDK — Agent + Runner vs Responses API
tags: [sdk, orchestration, handoff, tools]
status: active
updated: 2026-09-01
when_to_use: Choosing openai-agents (Python/JS) instead of owning the Responses API loop yourself
---

## Summary

`openai-agents` is a small runtime on top of the **Responses API**: `Agent` + `Runner`, tools, guardrails, handoffs, sessions, tracing. It is not the chat-completions SDK and not Cursor/Claude Code’s coding-agent loop. Use Responses directly when you want to own turns; use this SDK when the runtime should run tools, pause for HITL, or host a sandbox workspace.

## Notes

- Install `pip install openai-agents`. `Runner.run` / `run_sync` loops until the task completes. Built-in tracing hooks the OpenAI eval/fine-tune suite.
- Orchestration: **agents-as-tools** (`Agent.as_tool()`) keeps the manager in charge; **handoffs** transfer the user-facing turn to a specialist. Prefer code-level `asyncio.gather` / evaluator loops when the graph should be deterministic (`multi-agent-handoffs`).
- HITL: `needs_approval` on function tools, `Agent.as_tool`, `ShellTool`, `ApplyPatchTool`, and MCP (`require_approval` / hosted `tool_config`). Interruptions serialize with `RunState.to_json()` / `from_json()`; resume the **top-level** agent. Hosted shell environments do not support `needs_approval`.
- Sandbox agents (`SandboxAgent`, **beta**): isolated workspace, `Manifest`, client swap (Unix-local / Docker / hosted), resumable sessions — use when the job is files/repos, not a chat turn. Details: `openai-sandbox-agents`. Also: MCP servers as tools, Sessions memory, Realtime/voice (`gpt-realtime-2.1`).
- Computer use: `computerTool()` + a local `Computer` implementation; GA batched `actions[]` (`openai-computer-tool`). Tool search stays on the Responses API (`tool-search-defer-loading`).

## Sources

- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) — accessed 2026-08-30
- [Agent orchestration](https://openai.github.io/openai-agents-python/multi_agent/) — accessed 2026-08-30
- [Human-in-the-loop](https://openai.github.io/openai-agents-python/human_in_the_loop/) — accessed 2026-08-30
- [Tools (JS SDK)](https://openai.github.io/openai-agents-js/guides/tools/) — accessed 2026-08-30
- [Sandbox Agents (OpenAI API)](https://developers.openai.com/api/docs/guides/agents/sandboxes) — accessed 2026-09-01
