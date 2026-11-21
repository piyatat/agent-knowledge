---
id: haystack
title: Haystack — Python agents and pipelines
kind: tool
tags: [haystack, sdk, orchestration, python]
status: active
updated: 2026-11-21
when_to_use: Building a Python tool-calling agent as a Haystack component instead of a graph framework
---

## Summary

**Haystack** is deepset’s open-source Python framework for LLM pipelines and tool-calling agents. The `Agent` component loops a chat model and tools until an exit condition hits. Pipelines compose the rest (retrievers, generators, routers). It is a library you run, distinct from deepset’s hosted orchestration platform.

## Notes

- **Access.** Install from `links.get`. The package name is `haystack-ai`. PyPI listed **3.5.0** on 2026-11-21, Python **3.11** or newer, and the PyPI classifiers name the Apache Software License. Optional components are left out of the base install and raise an import error that names the missing package. Model credentials are provider keys (`Secret.from_env_var`), not a Haystack account.
- **Agent loop.** `chat_generator` must be a chat generator that supports tools. `tools` accepts `Tool`, component and pipeline tools, `AgentTool`, `MCPTool`, and toolsets. Names must be unique at each step. `exit_conditions` defaults to `["text"]` (stop when the model replies with no tool call) or a tool name (stop after that tool runs). `exit_reason` is also `"length"`, `"content_filter"`, `"max_agent_steps"`, or a reason a hook wrote to `stop_run`. The agent stops on length and content-filter so it does not resubmit the same request. `state_schema` carries typed values between tools. `on_exit` can set `continue_run` and send the model back; it does not run when the stop is `max_agent_steps`.
- **Approval.** Human review is a `ConfirmationHook` on the `before_tool` hook (`AlwaysAskPolicy`, `AskOncePolicy`, `NeverAskPolicy`). The older `confirmation_strategies` constructor argument is gone. Values injected from state via `inputs_from_state` are applied at execution time and are absent from the confirmation prompt.
- **Agent Pack.** `agent-pack-haystack` ships ready agents (deep research, advanced RAG). The docs mark that package experimental: APIs can change in any release without the usual deprecation policy.
- **Alternatives.** LangGraph (`langgraph`) when the loop must checkpoint and resume after a crash. Pydantic AI (`pydantic-ai`) when the agent should be typed Python with its own approval gates. LlamaIndex Workflows (`llamaindex-workflows`) when the unit of work is typed events.
- **Caveats.** `"text"` remains an exit even when you also name a finish tool, so the model can stop without calling it. Details: `haystack-text-always-exits`.

## Sources

- [Haystack](https://haystack.deepset.ai/) — accessed 2026-11-21
- [Installation](https://docs.haystack.deepset.ai/docs/installation) — accessed 2026-11-21
- [Agent](https://docs.haystack.deepset.ai/docs/agent) — accessed 2026-11-21
- [Hooks](https://docs.haystack.deepset.ai/docs/hooks) — accessed 2026-11-21
- [Human in the Loop](https://docs.haystack.deepset.ai/docs/human-in-the-loop) — accessed 2026-11-21
- [Migration guide](https://docs.haystack.deepset.ai/docs/migration) — accessed 2026-11-21
- [Agent Pack](https://docs.haystack.deepset.ai/docs/agent-pack) — accessed 2026-11-21
- [haystack-ai on PyPI](https://pypi.org/project/haystack-ai/) — accessed 2026-11-21
