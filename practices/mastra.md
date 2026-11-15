---
id: mastra
title: Mastra — TypeScript agents and workflows
kind: tool
tags: [mastra, sdk, orchestration, mcp]
status: active
updated: 2026-11-15
when_to_use: Building a TypeScript agent with tools, approval gates, and workflows in one framework
---

## Summary

**Mastra** is a TypeScript framework for agents and workflows. Scaffold with `npm create mastra@latest`, or install `@mastra/core`, `zod`, and the `mastra` package. Pass models as `provider/model` strings (`openai/gpt-6.1-sol`); the process needs that provider’s key (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`). Code outside `ee/` directories is Apache-2.0. It is not LangGraph (`langgraph`) and not Google ADK (`google-adk`).

## Notes

- **Tools.** Define them with `createTool()` (`id`, `description`, Zod `inputSchema`, `execute`). A plain object tool **silently does not run**. `execute` receives validated input, then a context (`requestContext`, `abortSignal`, and the rest).
- **Approval.** `requireApproval: true` on a tool, or `requireToolApproval: true` on `stream()` / `generate()`, pauses **before** `execute` (the flags combine with OR). The stream emits `tool-call-approval`; call `approveToolCall` or `declineToolCall` with the `runId`. A decline `reason` is what the model sees instead of a tool result. If a `requireToolApproval` function throws, Mastra **requires** approval. `generate()` returns `finishReason: 'suspended'` and a `runId`. `suspend()` inside `execute` is a second pause: code after `await suspend(...)` still runs, so return immediately.
- **MCP.** `@mastra/mcp` speaks revision **2026-07-28** over stdio and Streamable HTTP. `MCPClient` can set `requireToolApproval` per server; treat server `annotations` as untrusted. The dev server’s built-in endpoint is `/api/mcp` and answers **501** until you install `@mastra/mcp`. It accepts only `Authorization: Bearer` (not session cookies or an `apiKey` query). Callers need `mcp:read` to connect and `mcp:execute` to see tools; the default `viewer` role has read and not execute. Each tool also needs the backing HTTP route’s permission.
- **Workflows** use the in-process engine unless you attach a runner such as Inngest. Studio is the local UI from the create command. The scaffold includes a workspace, shell tools, web access, and schedules — treat that as code execution (`malicious-skills-supply-chain`).
- **License.** Apache-2.0 covers the repo except directories named `ee/` (the core README names `@mastra/core/auth/ee` and `@mastra/core/agent-builder/ee`). Those are the Mastra Enterprise License (version 2.0, effective 2026-09-22): source-available for development and testing; production needs a written agreement with Kepler Software and a license key.
- **Alternatives.** LangGraph when you want an explicit checkpointed graph in Python or TypeScript. Pydantic AI (`pydantic-ai`) for a typed Python loop. Strands (`strands-agents`) when the loop should sit on Bedrock.
- **Caveats.** Shipping `ee/` auth or agent-builder into production without a license is outside the grant. An approval flag does nothing until something calls approve or decline. A browser session cannot call `/api/mcp`.

## Sources

- [Get started](https://mastra.ai/docs/getting-started/installation) — accessed 2026-11-15
- [Human-in-the-loop](https://mastra.ai/docs/agents/human-in-the-loop) — accessed 2026-11-15
- [MCP](https://mastra.ai/docs/connections/mcp) — accessed 2026-11-15
- [Built-in MCP server](https://mastra.ai/docs/server/mcp) — accessed 2026-11-15
- [Workflows](https://mastra.ai/docs/workflows/overview) — accessed 2026-11-15
- [Mastra LICENSE.md](https://github.com/mastra-ai/mastra/blob/main/LICENSE.md) — accessed 2026-11-15
- [@mastra/core README](https://github.com/mastra-ai/mastra/blob/main/packages/core/README.md) — accessed 2026-11-15
- [Mastra Enterprise Edition license](https://github.com/mastra-ai/mastra/blob/HEAD/ee/LICENSE) — accessed 2026-11-15
