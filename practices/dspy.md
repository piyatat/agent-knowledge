---
id: dspy
title: DSPy — program LM calls as typed Python modules
kind: tool
tags: [dspy, sdk, python, optimization]
status: active
updated: 2026-11-17
when_to_use: Building a Python LM program as signatures and modules, then compiling it against a metric
---

## Summary

**DSPy** (Stanford NLP, MIT) is a Python framework that declares tasks as typed **signatures** and runs them with **modules** (`Predict`, `ChainOfThought`, `ReAct`). Optimizers compile the program against a metric. It is a library inside your process, not a coding-agent CLI and not a hosted loop (`pydantic-ai`, `langgraph`).

## Notes

- **Install.** Python **3.10+**. `pip install dspy` or `uv add dspy`. Native provider calls do not need LiteLLM. `pip install "dspy[litellm]"` is the optional compatibility engine. `dspy.LM(..., engine="auto")` prefers native and may select LiteLLM for an unsupported route; if that extra is missing, DSPy errors with the install command instead of switching backends after an auth or timeout failure. `engine="lm15"` stays native; `engine="litellm"` forces compatibility.
- **Auth.** Pass `api_key=` or the provider env var: `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `AZURE_OPENAI_API_KEY` plus `AZURE_OPENAI_ENDPOINT`. Vertex uses Application Default Credentials, `GOOGLE_CLOUD_PROJECT`, and `GOOGLE_CLOUD_LOCATION` with a `vertex:` model id. Ollama uses `ollama_chat/…` against a local server. Model strings look like `openai/gpt-5-nano` or `anthropic/claude-sonnet-4-5-20250929`. Not every historical provider prefix is still native.
- **Call shape.** `dspy.configure(lm=dspy.LM(...))` sets the process default. Pass an `LM` object, not a bare string. `dspy.context` overrides one block. A signature is `"inputs -> outputs"` or a class with `InputField` / `OutputField`; field names are part of the prompt. `ReAct` takes plain Python functions as tools. Caching is **on** by default, so an identical call returns the cached response. `dspy.inspect_history()` shows the rendered prompt.
- **Optimizers.** `GEPA` (and other optimizers) `compile` a module with a metric and a trainset, then `save` the result. Compile spends extra model calls. The saved program is what you reload; the hand-written signature is the starting point.
- **Alternatives.** Pydantic AI when the loop, tools, and approvals are the product. LangGraph when the control flow must pause and resume. LiteLLM proxy (`litellm-proxy`) when many apps share one gateway; DSPy can point at that OpenAI-compatible route.
- **Caveats.** A later `dspy.configure` replaces the process default for every module. A cache hit hides a model or prompt change until you bypass the cache. Optimizer quality tracks the metric you wrote (`llm-judge-bias` if that metric is another model).

## Sources

- [DSPy](https://dspy.ai/current/) — accessed 2026-11-17
- [Setting up DSPy](https://dspy.ai/current/getting-started/installation/) — accessed 2026-11-17
- [Your first program](https://dspy.ai/current/getting-started/first-program/) — accessed 2026-11-17
- [dspy.configure](https://dspy.ai/current/api/utils/configure/) — accessed 2026-11-17
