---
id: openai-codex-subagents
title: Codex subagents — parallel threads and custom agent TOML
tags: [openai, subagent, orchestration, isolation]
status: active
updated: 2026-09-18
when_to_use: Delegating Codex/ChatGPT Work work to parallel subagents, or authoring ~/.codex/agents TOML
---

## Summary

**Codex subagents** (and ChatGPT Work) spawn specialized **agent threads**, then fold summaries back into the parent. Current local Codex releases enable this by default (`features.multi_agent` / `[agents].enabled`). Not Claude `.claude/agents` (`claude-code-subagents`) and not Cursor `.cursor/agents` (`cursor-custom-subagents`).

## Notes

- Trigger by asking to spawn/delegate, or via `AGENTS.md` / skills. ChatGPT Work **Ultra** can delegate proactively; other intelligence levels need an explicit ask. Each subagent burns its own model/tool tokens. Prefer parallel **read-heavy** work (explore, tests, triage); treat parallel writes as conflict-prone.
- Built-ins: `default`, `worker`, `explorer`. Custom agents are TOML under `~/.codex/agents/` or `.codex/agents/` with required `name`, `description`, `developer_instructions`. Optional overrides: `model`, `model_reasoning_effort`, `sandbox_mode`, `mcp_servers`, `skills.config`. A custom `name` that matches a built-in wins. Defaults live in `[agents]` (`max_concurrent_threads_per_session`, `default_subagent_model`, `default_subagent_reasoning_effort`).
- Inheritance: unset model/effort follows parent (or the spawned model’s default effort). Live parent `/permissions` or `--yolo` overrides a custom file’s sandbox defaults. CLI `/agent` switches threads; inactive threads can still raise approval overlays (`o` opens the source thread). Headless runs fail actions that need a fresh approval. Experimental `spawn_agents_on_csv` is one-row-per-worker batching.

## Sources

- [Subagents (Codex)](https://developers.openai.com/codex/subagents) — accessed 2026-09-18
- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-09-18
- [Sample Configuration (Codex)](https://developers.openai.com/codex/config-sample) — accessed 2026-09-18
