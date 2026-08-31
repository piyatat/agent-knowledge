---
id: openai-codex-sdk
title: OpenAI Codex SDK — coding threads vs Agents SDK
tags: [sdk, openai, orchestration, sandbox]
status: active
updated: 2026-08-31
when_to_use: Driving Codex CLI/app-server from TypeScript or Python instead of openai-agents or a raw Responses loop
---

## Summary

The **Codex SDK** controls the Codex coding agent (CLI / IDE / cloud) as **threads**: start, `run`, resume. It is not `openai-agents` (generic Agent + Runner on the Responses API) and not Cursor/Claude Code’s loop. Official docs: use this SDK for coding-focused automation; if Codex is one specialist in a larger graph, orchestrate elsewhere. **`codex mcp-server` is deprecated**.

## Notes

- TypeScript: `npm install @openai/codex-sdk` (Node 18+, server-side). `new Codex()` → `startThread()` → `thread.run(prompt)`. Call `run` again on the same thread, or `resumeThread(threadId)` for a past one. App-server path is for custom clients that own auth, history, approvals, and streamed events.
- Python: `pip install openai-codex` (3.10+; stable). Talks to the local Codex **app-server** over JSON-RPC. Published wheels pin a Codex CLI runtime — override only with `CodexConfig(codex_bin=...)`. `with Codex() as codex:` then `thread_start(...)` / `thread.run(...)`. `AsyncCodex` for async apps.
- Sandbox presets on `thread_start` / later `run`/`turn`: `Sandbox.read_only`, `Sandbox.workspace_write` (workspace + configured writable roots), `Sandbox.full_access`. Omitting `sandbox=` uses app-server default. A sandbox passed to `run`/`turn` sticks for later turns on that thread.
- Do not start new integrations on `codex mcp-server` / `codex()` + `codex-reply()` MCP tools — docs keep that guide only for existing callers. Security scans with structured findings are a separate Codex Security TypeScript SDK (beta access).
- Pair with `openai-agents-sdk` when you need handoffs/guardrails around a coding specialist; pair with `claude-agent-sdk` / `cursor-sdk` when the host should be those products instead.

## Sources

- [Codex SDK](https://developers.openai.com/codex/sdk) — accessed 2026-08-31
- [Codex SDK (learn.chatgpt.com)](https://learn.chatgpt.com/docs/codex-sdk) — accessed 2026-08-31
