---
id: claude-code-effort
title: Claude Code effort — /effort, ultracode, skill frontmatter
tags: [claude, tokens, cost, orchestration]
status: active
updated: 2026-09-13
when_to_use: Setting /effort or ultracode, or overriding effort on a skill/subagent
---

## Summary

**Effort** is adaptive reasoning spend per request (`low` → `max`). `/effort` and the `/model` slider set it. **Ultracode** is not a model level: it sends `xhigh` and turns on dynamic workflows (`claude-code-workflows`). Not `/compact` (`claude-code-context-window`) and not a model alias (`/model fable`).

## Notes

- Supported levels depend on the model. Fable 5.1/5, Opus 5, Sonnet 5, Opus 4.8/4.7: `low|medium|high|xhigh|max`. Opus/Sonnet 4.6: no `xhigh` (request falls back to the highest supported ≤ asked). Default is `high` except Opus 4.7 (`xhigh`). `max` is session-only unless `CLAUDE_CODE_EFFORT_LEVEL=max`.
- Resolution (ultracode off): env / `--effort` / `/effort` → (Fable 5, Opus 4.8/4.7 only) a **hold** on that model’s default until you confirm a level with `Enter` or a typed `/effort` → `modelSettings` / `effortLevel` → model default. `s` in the slider (v2.1.257+) is session-only and does **not** end the hold. `-p` `/effort` is session-only and does not break the hold — use `--effort` at launch.
- Set: `/effort [level|auto]`, `/model` arrows, `--effort`, `CLAUDE_CODE_EFFORT_LEVEL`, user `effortLevel` / per-model `modelSettings`, Remote Control (session-only, v2.1.234+). Skill/subagent frontmatter `effort` overrides the session but **not** the env var; org `maxEffortLevel` still caps it.
- Ultracode: `/effort ultracode`, `claude --effort ultracode` (v2.1.203+), `"ultracode": true`, or slider. `effortLevel` / `CLAUDE_CODE_EFFORT_LEVEL` reject `ultracode`; an env level other than `xhigh` disables workflow orchestration. Off when workflows are disabled, the model lacks `xhigh`, or a cap is below `xhigh`.
- `ultrathink` in a prompt is a one-turn in-context nudge; the API effort field does not change. “think hard” is ordinary text. Enterprise roles can cap max effort per model (v2.1.195+). Header/footer show the active level.

## Sources

- [Model configuration](https://code.claude.com/docs/en/model-config) — accessed 2026-09-13
- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-13
- [Dynamic workflows](https://code.claude.com/docs/en/workflows) — accessed 2026-09-13
