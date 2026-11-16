---
id: llamaindex-workflows
title: LlamaIndex Workflows — event-step agent flows
kind: tool
tags: [llamaindex, sdk, orchestration, python]
status: active
updated: 2026-11-16
when_to_use: Building a Python agent as typed events and steps instead of a LangGraph or a hand-rolled loop
---

## Summary

**LlamaIndex Workflows** is an async Python library: a step receives an event, does work (including an LLM or tool call), and returns the next event. Install it alone with `pip install llama-index-workflows`, or use the copy bundled in `llama-index-core` as `llama_index.core.workflow`. It is not LangGraph (`langgraph`), not a hosted coding agent, and not LlamaParse.

## Notes

- **Shape.** Subclass `Workflow`, mark methods with `@step`, and type the event in and out. User events are Pydantic models. `StartEvent` starts a run (keyword arguments to `run()` become its fields). `StopEvent(result=…)` ends it and that result is what `await w.run(...)` returns. A branch is an `if` that returns a different event type. A loop returns an event an earlier step accepts. A finite batch is `list[Event]` out and `list[Event]` in. Open-ended fan-out uses `ctx.send_event`. Shared per-run state is `ctx.store`. Clients and models that must not be serialized go through `Resource(...)`.
- **Run it.** Scripts need one `asyncio.run` entry point. `Workflow(timeout=60)` is in **seconds**. `run()` returns an awaitable handler; keep the handler if you want `stream_events()` before the final result. `workflow.validate()` checks that start and stop exist and that produced events have consumers. A step that only receives `ctx.send_event` traffic looks unreachable — mark `@step(skip_graph_checks=["reachability"])` when that is intentional.
- **Models and auth.** The library does not ship a model login. The docs’ sample uses `pip install llama-index-llms-openai` and `OpenAI(...)`, so the provider key is yours. Missing `StartEvent` attributes **raise**; `ev.get("topic")` is the optional form.
- **Where it runs.** The process is yours. Gemini Enterprise Agent Runtime (`gemini-agent-runtime`) documents a LlamaIndex template for deploy. The workflows guide also points at separate notebooks for human-in-the-loop steps and for checkpointing a run so it can resume; those are not the default `run()` path.
- **Alternatives.** LangGraph when you need a checkpointer and `thread_id` in the graph library. Pydantic AI (`pydantic-ai`) for a typed tool loop with approval gates. Mastra (`mastra`) when the agent is TypeScript.
- **Caveats.** `llama-index-core` and `llama-index-workflows` are two import paths for the same idea — mixing them in one project is how examples drift. A workflow with no reachable `StopEvent` fails validation rather than hanging only at runtime. Timeout is on the workflow object, not per step.

## Sources

- [Workflows introduction](https://developers.llamaindex.ai/python/llamaagents/workflows/) — accessed 2026-11-16
- [Agents](https://developers.llamaindex.ai/python/framework/use_cases/agents/) — accessed 2026-11-16
- [Agent Runtime — supported frameworks](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime) — accessed 2026-11-16
