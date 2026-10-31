---
id: claude-code-effort
title: Claude Code effort — /effort, ultracode, skill frontmatter
tags: [claude, tokens, cost, orchestration]
status: active
updated: 2026-10-31
when_to_use: Setting /effort or ultracode, disabling ultrathink, or overriding effort on a skill/subagent
---

## Summary

**Effort** is adaptive reasoning spend per request (`low` → `max`). `/effort` and the `/model` slider set it. **Ultracode** is not a model level: it sends `xhigh` and turns on dynamic workflows (`claude-code-workflows`). Not `/compact` (`claude-code-context-window`) and not a model alias (`/model fable`).

## Notes

- Supported levels depend on the model. Fable 5.1/5, Opus 5.5/5, Sonnet 5.5/5, Haiku 5.5, Opus 4.8/4.7: `low|medium|high|xhigh|max`. Opus/Sonnet 4.6: no `xhigh` (request falls back to the highest supported ≤ asked). Default is `high` except Opus 5.5 / Sonnet 5.5 / Haiku 5.5 (`medium`) and Opus 4.7 (`xhigh`). `max` is session-only unless `CLAUDE_CODE_EFFORT_LEVEL=max`.
- Resolution (ultracode off): env / `--effort` / `/effort` → (Fable 5, Opus 4.8/4.7 only) a **hold** on that model’s default until you confirm a level with `Enter` or a typed `/effort` → `modelSettings` / `effortLevel` → model default. `s` in the slider (v2.1.257+) is session-only and does **not** end the hold. `-p` `/effort` is session-only and does not break the hold — use `--effort` at launch.
- Set: `/effort [level|auto]`, `/model` arrows, `--effort`, `CLAUDE_CODE_EFFORT_LEVEL`, user `effortLevel` / per-model `modelSettings`, Remote Control (session-only, v2.1.234+). Skill/subagent frontmatter `effort` overrides the session but **not** the env var; org `maxEffortLevel` still caps it. v2.1.292+: the **Agent** tool takes an `effort` parameter so a spawned sub-agent runs at the level you ask for (`claude-code-subagents`).
- **2026-10-31:** `CLAUDE_CODE_SUBAGENT_EFFORT` sets the level subagents run at when **nothing else names one** (`low|medium|high|xhigh|inherit`), instead of inheriting the session. Frontmatter / Agent `effort` and `CLAUDE_CODE_EFFORT_LEVEL` still win. `CLAUDE_CODE_DISABLE_ULTRATHINK` turns the `ultrathink` keyword off (the word is ordinary text). VS Code now runs `ultrathink` at `xhigh` and shows it in rainbow, matching the terminal (v2.1.311+ can also raise a typed terminal `ultrathink` to `xhigh` on 5.5 / Fable 5.1).
- Ultracode: `/effort ultracode`, `claude --effort ultracode` (v2.1.203+), `"ultracode": true`, or slider. `effortLevel` / `CLAUDE_CODE_EFFORT_LEVEL` reject `ultracode`; an env level other than `xhigh` disables workflow orchestration. Off when workflows are disabled, the model lacks `xhigh`, or a cap is below `xhigh`.
- `ultrathink` in a prompt is a one-turn in-context nudge unless the hosts above raise that turn to `xhigh`. “think hard” is ordinary text. Enterprise roles can cap max effort per model (v2.1.195+). Header/footer show the active level.
- **Opus 4.8 fast mode** is deprecated as of **2026-10-30** and **removed 2026-11-30**. After removal, fast-mode requests on Opus 4.8 **error** and do **not** fall back to standard Opus 4.8 — migrate to Opus 5.5 for the speedup.

## Sources

- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-10-31
- [Model configuration](https://code.claude.com/docs/en/model-config) — accessed 2026-10-31
- [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — accessed 2026-10-31
- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-13
- [Dynamic workflows](https://code.claude.com/docs/en/workflows) — accessed 2026-09-13
- [CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-31
