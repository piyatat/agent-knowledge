---
id: cursor-continual-learning
title: Cursor Continual Learning — AGENTS.md from transcripts
tags: [cursor, memory, plugins, agents-md]
status: active
updated: 2026-10-02
when_to_use: Installing the continual-learning plugin, or debugging noisy AGENTS.md learned-section updates
---

## Summary

**Continual Learning** is an official Cursor **plugin** (`/add-plugin continual-learning`) that incrementally writes durable facts into repo `AGENTS.md` from agent transcripts. A `stop` hook may queue the `continual-learning` skill; that skill (never auto-picked) delegates to the `agents-memory-updater` subagent. Not a native product “Memories” store, not Cursor rules (`.mdc`), and not Copilot Memory (`github-copilot-memory`).

## Notes

- Flow: eligible `stop` → hook `followup_message` → skill → updater. Skill frontmatter `disable-model-invocation: true` so ordinary turns do not trigger it. State: `.cursor/hooks/state/continual-learning.json` (cadence) and `continual-learning-index.json` (processed transcript mtimes). Transcripts read from `~/.cursor/projects/<workspace-slug>/agent-transcripts/`.
- Cadence defaults: ≥10 completed turns, ≥120 minutes since last run, and a newer transcript mtime. **Trial mode** (plugin default): ≥3 turns / 15 minutes, expires after 24 hours, then falls back. Override with `CONTINUAL_LEARNING_MIN_TURNS` / `_MIN_MINUTES` / `_TRIAL_*` (legacy `CONTINUOUS_LEARNING_*` still accepted).
- Writes **only** `## Learned User Preferences` and `## Learned Workspace Facts` as plain bullets (max 12 each). Updates matching bullets in place; no evidence/confidence tags; no secrets or one-off instructions. Empty harvest → exact reply `No high-signal memory updates.` and still refreshes the index.
- Review the learned sections; untrusted Slack/web/tool text in transcripts can become standing instructions (`agent-memory-poisoning`). Keep the rest of `AGENTS.md` human-authored (`agents-md-and-rules-budget`, `agents-md-open-format`). Cloud Agents do not load `~/.cursor/hooks.json`; this plugin’s project hook files must be in the repo to run there (`cursor-hooks-json`).

## Sources

- [continual-learning README](https://github.com/cursor/plugins/tree/main/continual-learning) — accessed 2026-10-02
- [agents-memory-updater](https://cursor.com/marketplace/agents/agents-memory-updater) — accessed 2026-10-02
- [Cursor Plugins marketplace — Continual Learning](https://cursor.com/marketplace/cursor/continual-learning) — accessed 2026-10-02
- [Rules / AGENTS.md](https://cursor.com/docs/context/rules) — accessed 2026-10-02
