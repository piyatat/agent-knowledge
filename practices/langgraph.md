---
id: langgraph
title: LangGraph — checkpointed agent graphs
kind: tool
tags: [langgraph, sdk, orchestration, durability]
status: active
updated: 2026-11-15
when_to_use: Building a Python or TypeScript agent as an explicit graph that can pause, resume, and survive a crash
---

## Summary

**LangGraph** (MIT) is the LangChain library for an agent as a graph: nodes, conditional edges, and a checkpointer that snapshots state per `thread_id`. Install Python with `pip install -U langgraph` (it includes `langgraph-checkpoint`) or JavaScript with `@langchain/langgraph`. Model calls need that provider’s API key. It is the graph runtime, not Pydantic AI (`pydantic-ai`), Strands (`strands-agents`), or Mastra (`mastra`). Hosting is LangSmith Agent Server (`langsmith-agent-server`); that product checkpoints for you.

## Notes

- **Tools run in your process** when the tool node invokes them. Nothing pauses for a person until you call `interrupt()` inside a node **and** compile with a checkpointer. Resume with `Command(resume=…)` on the **same** `thread_id`. The interrupted node **starts again from the beginning**, so work before `interrupt()` runs twice. Several `interrupt()` calls in one node match resume values **in order**.
- **`thread_id` is the cursor.** Without it the checkpointer cannot save or resume. Reusing the id with **new input** applies reducers and starts at the entry point; it does not continue unfinished work. After an error, `invoke(None, config)` retries unfinished work. Replaying history uses a snapshot from `get_state_history()`. A new id starts empty.
- **Where state lives.** `InMemorySaver` is RAM and disappears on process restart. Install `langgraph-checkpoint-sqlite` for a local file, or `langgraph-checkpoint-postgres` / `langgraph-checkpoint-mongodb` for production. Async graphs need the async saver (`AsyncPostgresSaver`, and so on). On Agent Server you do not configure a saver yourself.
- **Durability** on `invoke` / `stream`: `"exit"` writes only when the run ends (a crash mid-run leaves **no** thread); `"async"` writes during the next step and can lose a checkpoint if the process dies first; `"sync"` commits before the next step. Nodes that already finished in a failed super-step are stored as pending writes and are not re-run.
- **Auth and tracing.** The graph itself has no login. Set the model provider key (the quickstart uses `ANTHROPIC_API_KEY`). Optional LangSmith traces need `LANGSMITH_TRACING=true` and `LANGSMITH_API_KEY`. Current docs are also on MCP at `https://docs.langchain.com/mcp` and `https://reference.langchain.com/mcp`.
- **Alternatives.** Pydantic AI when you want a typed Python tool loop with deferred approvals. Mastra when the app is TypeScript and workflows live in the same package. Google ADK (`google-adk`) when the deploy target is Gemini Enterprise Agent Engine.
- **Caveats.** `InMemorySaver` looks durable until the process restarts. `"exit"` cannot recover a crash. An `interrupt()` placed after a side effect (a charge, a send, a file write) repeats that side effect on resume. A missing `thread_id` silently skips persistence.

## Sources

- [LangGraph quickstart (Python)](https://docs.langchain.com/oss/python/langgraph/quickstart) — accessed 2026-11-15
- [LangGraph quickstart (JavaScript)](https://docs.langchain.com/oss/javascript/langgraph/quickstart) — accessed 2026-11-15
- [Checkpointers](https://docs.langchain.com/oss/python/langgraph/checkpointers) — accessed 2026-11-15
- [Interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts) — accessed 2026-11-15
- [LangGraph license](https://github.com/langchain-ai/langgraph/blob/main/LICENSE) — accessed 2026-11-15
