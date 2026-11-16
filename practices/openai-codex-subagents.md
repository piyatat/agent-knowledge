---
id: openai-codex-subagents
title: Codex subagents — parallel threads and custom agent TOML
tags: [openai, subagent, orchestration, isolation]
kind: knowledge
status: active
updated: 2026-11-16
when_to_use: Delegating Codex or ChatGPT Work to parallel subagents, or authoring .codex/agents TOML
---

## Summary

**Codex subagents** (and ChatGPT Work) spawn specialized **agent threads**, then fold summaries back into the parent. Current local Codex releases enable this by default via **`agents.enabled`** (true). **`features.multi_agent` is deprecated**: Codex **0.168.0** (2026-11-13) warns when that flag is set and points at `agents.enabled` to turn subagent tools off. Not Claude `.claude/agents` (`claude-code-subagents`) and not Cursor `.cursor/agents` (`cursor-custom-subagents`).

## Notes

- Trigger by asking to spawn or delegate, or via `AGENTS.md` / skills. ChatGPT Work **Ultra** can delegate proactively; other intelligence levels need an explicit ask. Each subagent burns its own model and tool tokens. Prefer parallel **read-heavy** work. Parallel writes conflict. In the CLI, **`/subagents`** lists and switches threads. An approval can surface from an inactive thread; `o` opens that thread. Headless runs **fail** actions that need a fresh approval.
- Built-ins: `default`, `worker`, `explorer`. Custom agents are TOML under `~/.codex/agents/` or `.codex/agents/` with required `name`, `description`, `developer_instructions`. A custom `name` that matches a built-in wins. Optional model fields: `model`, `model_reasoning_effort`, `model_reasoning_summary`, `model_verbosity`. You can set `features.shell_tool`, `features.apps`, `features.plugins`, `features.memories`, or `features.request_permissions_tool` to false, and disable skills with `skills.config`.
- **Sandbox, approvals, provider, and MCP do not move with the file.** Subagents inherit the parent turn, including `/permissions` and `--yolo`. `sandbox_mode`, `approval_policy`, `model_provider`, and `mcp_servers` inside a custom agent file do **not** override the parent. Instructions can say “do not edit”; they do not create a read-only sandbox. Put MCP servers in the parent config. ChatGPT Work runs subagents in its hosted environment and does not expose the local sandbox control.
- Global knobs stay in `[agents]`: `enabled`, `max_concurrent_threads_per_session` (`max_threads` is a legacy alias), `default_subagent_model`, `default_subagent_reasoning_effort`, `interrupt_message` (default true). Explicit spawn values beat the `[agents]` defaults. If a spawn or default picks a model and neither sets effort, Codex uses that model’s default effort.

## Sources

- [Subagents (Codex)](https://developers.openai.com/codex/subagents) — accessed 2026-11-16
- [Codex CLI 0.168.0](https://github.com/openai/codex/releases/tag/rust-v0.168.0) — accessed 2026-11-16
