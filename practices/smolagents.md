---
id: smolagents
title: smolagents — Hugging Face code agents
kind: tool
tags: [smolagents, sdk, sandbox, python]
status: active
updated: 2026-11-15
when_to_use: Running a small Python agent that acts by writing code, or sandboxing that code off the host
---

## Summary

**smolagents** is Hugging Face’s Python library for short agent loops. **`CodeAgent`** writes actions as Python (loops, helpers, nested calls). **`ToolCallingAgent`** uses ordinary JSON tool calls when you do not want generated code. Install with `pip install 'smolagents[toolkit]'`. It is a library plus small CLIs (`smolagent`, `webagent`), not Claude Code Code Mode (`claude-code-code-mode`) and not a coding-agent IDE.

## Notes

- **Models and tools.** `InferenceClientModel()` calls the Hugging Face Inference API (pass `model_id` to pin one). OpenAI, Anthropic, and other APIs use `LiteLLMModel` from `smolagents[litellm]`. Local weights use `smolagents[transformers]`. Tools can be a Python class, a LangChain tool, an MCP server, or a Hub Space. The toolkit extra includes defaults such as DuckDuckGo search. Share an agent or tool to the Hub as a Gradio Space.
- **Local executor.** The default `CodeAgent` runs model-written code **in your process**, through `LocalPythonExecutor` rather than a raw interpreter. Imports are denied unless you authorize them (including submodules; `numpy.*` allows the tree). Operations the executor does not implement raise. A loop is capped (the docs’ `while True` example stops at 1,000,000 iterations). That is not a sandbox: an authorized package can still fill the disk or escape. Hugging Face says the only robust isolation is a remote executor.
- **Remote executors.** `executor_type="e2b"`, `"modal"`, `"blaxel"`, or `"docker"` runs **snippets** in that sandbox (`e2b-sandboxes`, `modal-sandboxes`) while the model call stays local. Use the agent as a context manager, or call `cleanup()`, so the sandbox is torn down. Because model credentials are not copied into the sandbox, this snippet mode does **not** support multi-agent setups that would call the model from inside. For that, run the whole agent inside the sandbox and accept that the sandbox then holds the API keys.
- **Auth.** Each model class needs its provider credential in the environment. A remote executor needs that vendor’s account and extra (`smolagents[e2b]`, `smolagents[blaxel]`, and so on) in addition to the model key.
- **Alternatives.** Claude Code Code Mode when the host is already Claude Code and the script must be JavaScript under its permission rules. Pydantic AI (`pydantic-ai`) or LangGraph (`langgraph`) when you want a typed tool loop or checkpoints instead of generated Python. A full coding agent (Cursor, Codex, Claude Code) when the job is editing a repo.
- **Caveats.** `executor_type` left at the default is local execution. Authorizing `random` or `Pillow` re-opens paths the import list was meant to close. Prompt injection from a page the agent fetched becomes code on the next step. Public agents that accept arbitrary tasks are an execution service — put them in E2B, Modal, Blaxel, or Docker.

## Sources

- [smolagents](https://huggingface.co/docs/smolagents/index) — accessed 2026-11-15
- [Secure code execution](https://huggingface.co/docs/smolagents/tutorials/secure_code_execution) — accessed 2026-11-15
