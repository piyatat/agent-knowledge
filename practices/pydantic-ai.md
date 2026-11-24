---
id: pydantic-ai
title: Pydantic AI — typed Python agent framework
kind: tool
tags: [pydantic, sdk, orchestration, mcp]
status: active
updated: 2026-11-24
when_to_use: Building a typed Python agent with Pydantic AI, including MCP tools and approval gates
---

## Summary

**Pydantic AI** is a Python library for an agent loop with typed outputs, tools, and model providers. The full install is `pip install pydantic-ai` or `uv add pydantic-ai` (**Python 3.11+**), which pulls OpenAI, Anthropic, and Google clients plus CLI, MCP, evals, and Logfire. `pydantic-ai-slim[...]` installs one extra at a time. It is not the OpenAI Agents SDK (`openai-agents-sdk`) and not Strands (`strands-agents`). Hosted traces for that stack are Logfire (`logfire`).

## Notes

- **Models:** pass a provider string such as `anthropic:claude-sonnet-5-5` or `openai:gpt-6.1-sol`. The process needs that provider’s API key. Logfire is optional; the install page points at `uvx logfire-cli wizard --task pydantic-ai` for a free local trace setup.
- **Tools run in-process by default.** `@agent.tool` / `@agent.tool_plain` execute in the same Python process as soon as the model calls them. For a human gate, set `requires_approval=True` (or raise `ApprovalRequired`). For work another system must finish, raise `CallDeferred`. Handle those with a `HandleDeferredToolCalls` capability in-process, or end the run on `DeferredToolRequests` and resume with `DeferredToolResults` (a new `run_id`; correlate with `conversation_id`). Without that, a file or shell tool is not paused for approval.
- **Limits:** `UsageLimits` on `run` / `run_sync` / `run_stream` covers requests, tool calls, tokens, and cost. Crossing one raises `UsageLimitExceeded`. Token and cost limits are checked **after** the response is billed, and that response is kept as interrupted. `tool_calls_limit` is checked **before** execution: if one parallel batch would exceed it, **none** of those tools run. `request_limit` counts model responses committed to history, not transport retries.
- **MCP:** prefer the `MCP` capability (`pydantic-ai-slim[mcp]`, FastMCP 4). It runs the server locally unless you set `native=True`. The default id is the URL hostname — two servers on one host need an explicit `id`. FastMCP 4’s modern mode does not support server-initiated sampling or elicitation; the client warns if you configure those. AG-UI is a separate extra (`ag-ui-vs-a2ui`).
- **Alternatives:** Strands when Bedrock-in-process and a TypeScript SDK matter. Google ADK (`google-adk`) when the deploy target is Gemini Enterprise. Microsoft Agent Framework (`microsoft-agent-framework`) for .NET.
- **Caveats:** `requires_approval` does nothing until something resolves the deferred call. A missing `UsageLimits` lets a retrying tool loop until the provider bill stops it. Do not put secrets in tool docstrings; they are sent to the model.

## Sources

- [Installation](https://pydantic.dev/docs/ai/install/) — accessed 2026-11-15
- [Agents](https://pydantic.dev/docs/ai/agents/) — accessed 2026-11-15
- [Function tools](https://pydantic.dev/docs/ai/tools/) — accessed 2026-11-15
- [Deferred tools](https://pydantic.dev/docs/ai/deferred-tools/) — accessed 2026-11-15
- [MCP overview](https://pydantic.dev/docs/ai/mcp/overview) — accessed 2026-11-15
- [MCP client](https://pydantic.dev/docs/ai/mcp/client) — accessed 2026-11-15
