---
id: openai-codex-memories
title: Codex local memories — ~/.codex/memories vs AGENTS.md
tags: [openai, memory, cli, privacy]
status: active
updated: 2026-09-10
when_to_use: Enabling Codex features.memories, using /memories, or contrasting local memory files with AGENTS.md
---

## Summary

Codex **local memories** are generated files under `~/.codex/memories/` (or `$CODEX_HOME/memories/`) that carry useful context from **idle prior threads** into later ones. Off by default (`features.memories`). Complementary to checked-in `AGENTS.md` (`openai-codex-agents-md`) — keep must-follow rules in AGENTS.md. Not ChatGPT web memory, not Claude `MEMORY.md` (`claude-code-memory`), not Gemini Auto Memory (`gemini-cli-auto-memory`). ChatGPT Work uses account/workspace memory, not this local store.

## Notes

- Enable: ChatGPT desktop Settings → Personalization → Enable memories, or `config.toml` `[features] memories = true`. Per-thread `/memories` in the TUI / desktop app toggles **use existing** vs **generate from this thread** without changing the global flag. The IDE extension uses the connected host’s store. Chat-level choices do not flip global settings.
- Generation is background and delayed: Codex skips active/short threads and waits until a thread is idle long enough (default `memories.min_rollout_idle_hours` = **6**, clamp 1–48). Also skipped when remaining rate-limit % is below `memories.min_rate_limit_remaining_percent` (default **25**). `memories.generate_memories` (default true) gates whether new threads become inputs; `memories.use_memories` (default true) gates injection. `memories.disable_on_external_context` (alias `no_memories_if_mcp_or_web_search`) excludes threads that used MCP, web search, or tool search.
- Other knobs: `extract_model` / `consolidation_model`; `max_raw_memories_for_consolidation` (default 256, cap 4096); `max_rollout_age_days` (default 30, 0–90); `max_rollouts_per_startup` (default 16, cap 128); `max_unused_days` (default 30). Files include summaries, durable entries, recent inputs, and evidence — treat as generated state; do not hand-edit as the control plane.
- Codex redacts secrets from generated fields; still review `~/.codex/memories/` before sharing `CODEX_HOME`. Treat injected memories as untrusted (`agent-memory-poisoning`). Computer History (macOS desktop) can feed memories from allowed apps/sites — a separate surface.

## Sources

- [Memories (Codex)](https://developers.openai.com/codex/customization/memories) — accessed 2026-09-10
- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-09-10
- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-09-10
- [Customization – Codex](https://developers.openai.com/codex/concepts/customization) — accessed 2026-09-10
