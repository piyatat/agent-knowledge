---
id: strands-agents
title: Strands Agents — in-process Python and TypeScript harness
kind: tool
tags: [strands, sdk, orchestration, amazon]
status: active
updated: 2026-11-15
when_to_use: Building a Python or TypeScript agent loop with Strands instead of Google ADK or a hand-rolled Bedrock loop
---

## Summary

**Strands Agents** is an open-source SDK that runs an agent loop **inside your process**. There is no hosted control plane to provision first. Amazon Bedrock is the default model; Anthropic, OpenAI, Gemini, Ollama, and others are a model object swap. It is not AgentCore (`bedrock-agentcore`), which is where you might host the result, and not Google ADK (`google-adk`) or the Microsoft Agent Framework (`microsoft-agent-framework`).

## Notes

- **Install:** Python 3.10+ `pip install strands-agents`. Extras such as `strands-agents[anthropic]`, `[openai]`, `[gemini]`, and `[ollama]` add providers. TypeScript: Node.js 22+ ESM, `npm install @strands-agents/sdk`. The feature table (updated 2026-11-04) shows Python ahead of TypeScript on Ollama, LiteLLM, and bidirectional voice. Both sides have tools, MCP, hooks, graphs, swarms, workflows, A2A, sessions, and OpenTelemetry.
- **Auth:** `Agent()` with no model uses **Bedrock**, Claude Sonnet 4.6 in **`us-west-2`**. Give the process a Bedrock API key (`AWS_BEARER_TOKEN_BEDROCK`), standard AWS credentials, or an IAM role, and enable the model in the Bedrock console. Other providers read their own keys (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`). Ollama needs a local server and no cloud key.
- **Tools:** pass vended tools (file edit, shell, HTTP) or a `@tool` function. The Python quickstart’s `file_editor` writes the process working directory. Nothing in that path is a separate sandbox. A docs MCP server is optional for coding agents: `uvx strands-agents-mcp-server` (search and fetch docs only).
- **Deploy:** the SDK stays in your app (FastAPI, Express, Lambda, or a container). Put the same code on AgentCore or another host when you need a managed runtime. Sessions can use file, S3, or a repository manager (Python and TypeScript).
- **Alternatives:** ADK when the agent should deploy to Gemini Enterprise Agent Platform with `adk` tooling. Pydantic AI (`pydantic-ai`) when the loop should be typed Python with deferred approvals. OpenAI Agents SDK (`openai-agents-sdk`) when the loop should stay on the Responses API.
- **Caveats:** a bare `Agent()` spends the AWS account’s Bedrock quota in `us-west-2`. Shell and file tools run as the process user unless you add your own sandbox. Do not treat the docs MCP server as a way to execute code.

## Sources

- [Get started](https://strandsagents.com/docs/user-guide/sdk/quickstart/overview/) — accessed 2026-11-15
- [Python quickstart](https://strandsagents.com/docs/user-guide/sdk/quickstart/python/) — accessed 2026-11-15
- [Strands harness SDK](https://github.com/strands-agents/harness-sdk) — accessed 2026-11-15
