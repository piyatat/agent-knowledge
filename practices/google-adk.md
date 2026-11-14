---
id: google-adk
title: Google Agent Development Kit (ADK)
kind: tool
tags: [google, sdk, orchestration, gemini]
status: active
updated: 2026-11-14
when_to_use: Building a production Gemini or Google Cloud agent in code instead of Gemini CLI or Jules
---

## Summary

**Agent Development Kit (ADK)** is Google’s open-source, code-first framework for building, evaluating, and deploying agents. It is **not** Gemini CLI (`gemini-cli-gemini-md`), **not** Jules (`google-jules`), and **not** Antigravity (`antigravity-cli`). Optimized for Gemini and Google Cloud, but model- and deployment-agnostic. **ADK 2.0** (Python GA 2026-05-19, Go GA 2026-06-30, TypeScript GA 2026-08-21) adds graph, dynamic, and collaborative workflows.

## Notes

- **Install:** Python 3.10+ `pip install google-adk` then `adk create my_agent` / `adk run my_agent`. Dev UI: `adk web --port 8000` from the parent of the agent folder — **development only**, not production. TypeScript: `npm install @google/adk @google/adk-devtools`. Go v2: `go get google.golang.org/adk/v2` (Go **1.26.10+** for ADK Go ≥2.7.0; v1 line is `google.golang.org/adk@v1`). Java 17: Maven/Gradle `com.google.adk:google-adk:1.14.0` (+ optional `google-adk-dev`). Kotlin JVM: `google-adk-kotlin-core` 1.5.0 plus the KSP processor for `@Tool`.
- **Auth:** Gemini API → `GOOGLE_API_KEY` in `.env`. Gemini Enterprise **Agent Platform** → `GOOGLE_CLOUD_PROJECT`, `GOOGLE_CLOUD_LOCATION` (example `us-central1`), `GOOGLE_GENAI_USE_ENTERPRISE=True`. Regional endpoints may reject the `gemini-flash-latest` alias — pin a version from the Gemini models list. LiteLLM / Ollama / vLLM / Apigee wrappers cover non-Google models.
- **Limits:** Gemini **429 RESOURCE_EXHAUSTED** is quota; raise quota or set client `HttpRetryOptions`. Interactions API (Python ≥1.21.0) cannot mix built-in tools with custom function tools unless you convert the built-in (`GoogleSearchTool(bypass_multi_tools_limit=True)`).
- **Deploy:** containerize anywhere, or one-command to Cloud Run, GKE, or Agent Runtime (Agent Platform) for managed auth, Cloud Trace, and scaling without changing agent code.
- **Alternatives:** Microsoft Agent Framework (`microsoft-agent-framework`), OpenAI Agents SDK (`openai-agents-sdk`), Claude Agent SDK (`claude-agent-sdk`). Use Gemini CLI when the job is a local coding session, not a deployed agent.
- **Caveats:** ADK 2.0 is a graph runtime; review Python 1.x → 2.0 breaking changes before upgrading. `adk web` is not a production server.

## Sources

- [Agent Development Kit](https://adk.dev/) — accessed 2026-11-14
- [Python Quickstart](https://adk.dev/get-started/python/) — accessed 2026-11-14
- [Installation](https://adk.dev/get-started/installation/) — accessed 2026-11-14
- [AI Models for ADK agents](https://adk.dev/agents/models/) — accessed 2026-11-14
- [Google Gemini models for ADK agents](https://adk.dev/agents/models/google-gemini/) — accessed 2026-11-14
- [ADK 2.0](https://github.com/google/adk-docs/blob/main/docs/2.0/index.md) — accessed 2026-11-14
