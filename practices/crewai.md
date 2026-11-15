---
id: crewai
title: CrewAI — Python crews and flows
kind: tool
tags: [crewai, sdk, orchestration, python]
status: active
updated: 2026-11-15
when_to_use: Building a Python multi-agent crew with Flows, or scaffolding one with the crewai CLI
---

## Summary

**CrewAI** is a Python framework that pairs **Flows** (stateful, event-driven control) with **Crews** (role-playing agents that collaborate on tasks). Install the CLI with `uv tool install crewai`. It is not LangGraph (`langgraph`) and not a hosted runtime — CrewAI AMP and the LangSmith Agent Server (`langsmith-agent-server`) are the hosted options.

## Notes

- **Install.** Python **>=3.10 and <3.14**. `uv tool install crewai`, then `uv tool update-shell` if the binary is not on `PATH`. CrewAI **0.175.0** needs `openai >= 1.13.3`. `crewai create crew <name>` scaffolds a **JSON** project: `agents/*.jsonc`, `crew.jsonc`, `skills/`, `tools/`, `knowledge/`, `.env`. `crewai install` then `crewai run`. The older Python/YAML layout (`crew.py`, `config/agents.yaml`) is `crewai create crew <name> --classic`. Upgrade the global CLI with `uv tool install crewai --upgrade`; that does not bump the copy inside a project venv.
- **Models.** Set `MODEL=provider/model-id` (example shape `openai/gpt-5.6-terra`) in `.env`, on the agent, or with `LLM(model=…)`. Native SDK extras cover OpenAI, Anthropic, Gemini, Azure, Bedrock, and Snowflake Cortex (`uv add "crewai[openai]"` and the matching extra). Other providers go through LiteLLM, which you add yourself. Keys: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, and `GEMINI_API_KEY` or `GOOGLE_API_KEY`. Some reasoning models ignore or reject `temperature`.
- **Shape.** Docs say production apps should start with a Flow and call a Crew only for a step that needs a team. A Flow holds state and branching. A Crew holds agents (role, goal, backstory, tools) and tasks. `{placeholder}` text is filled from `crew.jsonc` `inputs` or an interactive prompt. Coding agents can load upstream skills with `npx skills add crewaiinc/skills`.
- **Hosted.** **CrewAI AMP** is their SaaS (sign-up at `app.crewai.com`, including a no-code builder). **CrewAI Factory** is a container you run, including on-prem. Either is separate from `crewai run` on a laptop. To put a crew on LangSmith Agent Server, wrap it in the Functional API; that still needs a LangSmith key and the model key.
- **Supply chain.** CrewAI’s own packages set `exclude-newer = "3 days"`, so transitive dependencies they pull will not resolve a release younger than three days. Your direct dependencies are not under that pin. Tools you put in `tools/` execute as your code.
- **Alternatives.** LangGraph when you want an explicit checkpointed graph. Mastra (`mastra`) for TypeScript. Google ADK (`google-adk`) when the deploy target is Gemini Enterprise. OpenAI Agents SDK (`openai-agents-sdk`) for a handoff loop on the Responses API.
- **Caveats.** A JSON scaffold will not match a YAML tutorial unless you pass `--classic`. Crew tools are not a sandbox. Do not commit `.env`. Windows builds can fail on `chroma-hnswlib` until the Visual Studio C++ build tools are installed.

## Sources

- [CrewAI introduction](https://docs.crewai.com/en/introduction) — accessed 2026-11-15
- [Installation](https://docs.crewai.com/en/installation) — accessed 2026-11-15
- [LLMs](https://docs.crewai.com/en/concepts/llms) — accessed 2026-11-15
- [Deploy other frameworks (CrewAI on Agent Server)](https://docs.langchain.com/langsmith/deploy-other-frameworks) — accessed 2026-11-15
