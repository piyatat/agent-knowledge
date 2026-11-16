---
id: inspect-ai
title: Inspect — Python evals for agents and models
kind: tool
tags: [inspect, evals, sandbox, python]
status: active
updated: 2026-11-16
when_to_use: Writing a Python eval that runs a tool-using agent, or scoring Claude Code or Codex inside a sandbox
---

## Summary

**Inspect** is an open-source evaluation framework from the UK AI Security Institute and Meridian Labs. A task is a dataset, a solver (one generate call or an agent), and a scorer. You run it locally with your own model keys. It is not Braintrust (`braintrust`) and not a CI prompt file (`promptfoo`).

## Notes

- **Install.** `pip install inspect-ai`. Run `inspect eval task.py --model <provider>/<model>` and open logs with `inspect view`. The same `eval()` function works from Python. A VS Code extension helps author tasks. Docs for agents: `https://inspect.aisi.org.uk/llms.txt` (index) and `llms-guide.txt` (full text, large). Model packages are separate: `openai`, `anthropic`, `google-genai`, or Hugging Face `transformers`. Built-in providers also include local Hugging Face, vLLM, and SGLang.
- **Agents.** `react()` is the reason-act-observe loop with the tools you pass (`bash()`, `todo_write()`, custom tools, MCP). `deepagent()` adds subagents, a memory tool, and `todo_write` for longer tasks. `sandbox="docker"` (or Kubernetes, Modal, Proxmox, Vagrant, or an extension) is where bash and untrusted code run. Limits cover tokens, messages, and time. Checkpointing and intervention exist for long runs.
- **Coding agents.** The separate package `inspect-swe` (`pip install inspect-swe`) runs Claude Code, Codex CLI, or Gemini CLI inside the sandbox and bridges them to the model under test. `agent_bridge()` redirects in-process OpenAI, Anthropic, or Google clients to Inspect. `sandbox_agent_bridge()` does the same for a process in the sandbox that talks to `localhost:13131` (`OPENAI_BASE_URL`, `ANTHROPIC_BASE_URL`, or `GOOGLE_GEMINI_BASE_URL`).
- **Auth.** There is no Inspect account. Export the provider key the model id needs (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`, `HF_TOKEN`). The sandbox bridge means the agent under test must not be given a real provider key if the point is to score *that* model through Inspect.
- **Alternatives.** Promptfoo when the suite is YAML in CI and the target is an HTTP endpoint. Braintrust when traces and scores must live in a hosted project. Cursor Agent SDK evals (`cursor-agent-sdk-evals`) when the system under test is a Cursor agent, not a Python solver.
- **Caveats.** Multi-agent setups often fail to beat a tuned `react()`; the docs say to baseline the simple agent first. `inspect-swe` runs the real coding agent, so the sandbox image and the bridge port are the containment, not the prompt. Do not point the sandbox agent at a production API key.

## Sources

- [Inspect](https://inspect.aisi.org.uk/) — accessed 2026-11-16
- [Using agents](https://inspect.aisi.org.uk/agents.html) — accessed 2026-11-16
- [Deep Agent](https://inspect.aisi.org.uk/deepagent.html) — accessed 2026-11-16
- [Agent bridge](https://inspect.aisi.org.uk/agent-bridge.html) — accessed 2026-11-16
- [Tutorial](https://inspect.aisi.org.uk/tutorial) — accessed 2026-11-16
