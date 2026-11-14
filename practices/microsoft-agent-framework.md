---
id: microsoft-agent-framework
title: Microsoft Agent Framework — .NET / Python successor to SK and AutoGen
kind: tool
tags: [microsoft, sdk, orchestration, foundry]
status: active
updated: 2026-11-14
when_to_use: Building a .NET or Python agent after Semantic Kernel or AutoGen, or hosting one on Foundry
---

## Summary

**Microsoft Agent Framework** is the production SDK that succeeded **Semantic Kernel** and **AutoGen**. It combines AutoGen-style agent abstractions with SK’s sessions, middleware, and telemetry, plus graph workflows. **v1.0** (2026-04-03) for .NET and Python is the supported surface. It is **not** Foundry Agent Service (`foundry-agent-service`) — that is the hosted runtime — and not Copilot CLI. Go is a **public preview** (`github.com/microsoft/agent-framework-go`, Go 1.26+).

## Notes

- **Install:** Python `pip install agent-framework` (does **not** auto-load `.env` — call `load_dotenv()` or export vars). .NET `dotnet add package Microsoft.Agents.AI` or `Microsoft.Agents.AI.Foundry`. Coding-agent skill: `agent-framework-builder-python`. Releases observed 2026-11: Python **1.26.0** (2026-11-13), .NET **1.28.0** (2026-11-06).
- **Auth:** Foundry samples use `AzureCliCredential` / `DefaultAzureCredential` against a project endpoint (`https://…services.ai.azure.com/api/projects/…`). First-party connectors: Microsoft Foundry, Azure OpenAI, OpenAI, Anthropic, Amazon Bedrock, Google Gemini, Ollama. MCP for tools; A2A for peer agents (docs still flag A2A 1.0 “coming soon” on some paths — confirm the package you pin).
- **When agent vs workflow:** open-ended tool use → `Agent`; well-defined steps / fan-out → workflow (`WorkflowBuilder` on all SDKs; Python also has experimental `@workflow`). If a function can do the job, do not use an agent.
- **Limits:** Go preview omits declarative agents, CodeAct, and functional workflows. Foundry computer-use GA is `FoundryAITool.CreateComputerTool()`; some non-hosted loops still hit OpenAI SDK serialization limits. Third-party servers/models are Non-Microsoft Products — you own cost, data residency, and safety filters.
- **Alternatives:** OpenAI Agents SDK (`openai-agents-sdk`), Claude Agent SDK (`claude-agent-sdk`), Google ADK (`google-adk`). Stay on SK/AutoGen only while migrating (`Migrate from Semantic Kernel` / `Migrate from Autogen`).
- **Caveats:** Hosting on Foundry is a separate service note. Do not treat middleware as a substitute for HITL on irreversible tools (`human-in-the-loop-approvals`).

## Sources

- [Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/) — accessed 2026-11-14
- [Microsoft Agent Framework Overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) — accessed 2026-11-14
- [Microsoft Agent Framework Version 1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) — accessed 2026-11-14
- [python-1.26.0](https://github.com/microsoft/agent-framework/releases/tag/python-1.26.0) — accessed 2026-11-14
- [dotnet-1.28.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.28.0) — accessed 2026-11-14
