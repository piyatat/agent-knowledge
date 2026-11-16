---
id: vercel-ai-sdk
title: Vercel AI SDK — ToolLoopAgent and harnesses
kind: tool
tags: [vercel, sdk, typescript, orchestration]
status: active
updated: 2026-11-16
when_to_use: Building a TypeScript tool-calling agent with the Vercel AI SDK instead of Mastra or LangGraph
---

## Summary

The **AI SDK** (`ai` on npm) is Vercel’s TypeScript toolkit for text, structured output, tools, and agents across providers. **`ToolLoopAgent`** is the documented agent loop. A separate **Harness** surface runs Claude Code, Codex, or Pi through `HarnessAgent`. It is not Mastra (`mastra`), not LangGraph (`langgraph`), and not the Vercel Sandbox microVM (`vercel-sandbox`).

## Notes

- **Install.** The Node.js quickstart wants **Node.js 22+** and pnpm: `pnpm add ai zod dotenv`. That path uses a **Vercel AI Gateway** key in `AI_GATEWAY_API_KEY` and model ids such as `anthropic/claude-sonnet-5.5`. A direct provider is another package (for example `pnpm add @ai-sdk/openai`) and a provider instance. `zod` defines tool and output schemas.
- **Loop.** Construct `new ToolLoopAgent({ model, instructions, tools })`, then `generate({ prompt })` or `stream({ prompt })`. Each step is one generation: text finishes the loop, a tool call runs `execute` and continues. Default stop is **`isStepCount(20)`**. The loop also stops when finish reason is not tool-calls, a tool has no `execute`, a call needs approval, or a `stopWhen` condition hits. `toolChoice` is `'auto'` unless you set `'required'`, `'none'`, or a named tool. `isLoopFinished()` runs until tools are done and can spin.
- **Tools and approval.** `tool({ description, inputSchema, execute })`. Credentials belong in `toolsContext` plus the tool’s `contextSchema`, not in the prompt. `toolApproval` on the agent (`'user-approval'`, `'approved'`, `'denied'`, or a function) overrides a tool’s `needsApproval`. `allowSystemInMessages` defaults to rejecting `role: "system"` inside `prompt` / `messages` because that is a prompt-injection path; put standing instructions in `instructions`.
- **Sandbox flag.** `experimental_sandbox` is per call (`generate` / `stream`). Passing it does **not** sandbox the tool. `execute` must call the sandbox itself, and the sandbox description is not added to the prompt unless you include it. Shell or code tools without that delegation run on the host (`agent-code-sandboxing`).
- **UI and harnesses.** `createAgentUIStreamResponse({ agent, uiMessages })` is the route helper. `InferAgentUIMessage` types `useChat`. `@ai-sdk/tui` wraps a `ToolLoopAgent` in a terminal UI. `HarnessAgent` is how the SDK runs an existing coding-agent harness; it is not `ToolLoopAgent` with a shell tool.
- **Alternatives.** Mastra when you want workflows, MCP permissions, and a dev server in one TypeScript project. LangGraph when the loop must be an explicit checkpointed graph. Pydantic AI (`pydantic-ai`) for a typed Python loop.
- **Caveats.** A gateway model string does not work without `AI_GATEWAY_API_KEY` or a direct provider package. The 20-step default cuts off long tool chains. System messages in the user prompt are rejected until you opt in. An experimental sandbox left unused does not contain `execute`.

## Sources

- [AI SDK introduction](https://ai-sdk.dev/docs/introduction) — accessed 2026-11-16
- [Node.js quickstart](https://ai-sdk.dev/docs/getting-started/nodejs) — accessed 2026-11-16
- [Building agents](https://ai-sdk.dev/docs/agents/building-agents) — accessed 2026-11-16
- [Agents overview](https://ai-sdk.dev/docs/agents/overview) — accessed 2026-11-16
- [ToolLoopAgent reference](https://ai-sdk.dev/docs/reference/ai-sdk-core/tool-loop-agent) — accessed 2026-11-16
