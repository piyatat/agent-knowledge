---
id: claude-code-advisor
title: Claude Code advisor — second-model consult at decision points
tags: [claude, orchestration, tokens, cost]
status: active
updated: 2026-09-14
when_to_use: Enabling /advisor or advisorModel, or choosing advisor vs opusplan vs a stronger /model
---

## Summary

The **advisor** is an experimental **server tool**: the main Claude Code model may consult a second, typically stronger model mid-task (plan, recurring error, “am I done?”). The advisor sees the full transcript and returns guidance. It is not a subagent (`claude-code-subagents`), not `/effort` (`claude-code-effort`), and not `opusplan`. Anthropic API only (not Bedrock / Google Agent Platform / Foundry).

## Notes

- Enable: `/advisor opus` (saves `advisorModel` in user settings), `"advisorModel": "opus"`, or `claude --advisor opus` (session-only; not listed in `--help`). `/advisor` / `/advisor off` also work in `-p`, Agent SDK, Desktop, and Remote Control (v2.1.260+). `CLAUDE_CODE_DISABLE_ADVISOR_TOOL=1` hides the command; `--advisor` then no-ops. Needs feature-flag fetch — `DISABLE_TELEMETRY` keeps it off.
- Pairing: advisor must be ≥ main. Aliases `fable` / `opus` / `sonnet` track CLI defaults. Haiku 4.5 can *call* but cannot *be* an advisor. Fable mains only accept Fable advisors. A rejected pairing is not attached; some illegal pairs still attach and then every request 400s until you change `/advisor`. Subagents inherit the advisor and re-check against **their** model.
- Timing is model-driven. You can prompt “consult the advisor”; there is no call cap. Transcript shows `Advising` then Reviewed / Declined (`Ctrl+O`). Claude usually follows guidance but should surface conflicts when files or a failed step contradict it.
- Cost: each consult bills the advisor’s full-transcript read at advisor rates (API) or plan usage (subscription; Fable advisor may need usage-credits consent). Toggling `/advisor` does **not** bust the main prompt cache; the advisor’s own read is never cached across calls. `/usage` includes advisor tokens.
- Prefer advisor for long tasks where most turns are cheap. For “every turn needs the strong model,” switch `/model` instead.

## Sources

- [Escalate hard decisions with the advisor tool](https://code.claude.com/docs/en/advisor) — accessed 2026-09-14
- [CLI reference](https://code.claude.com/docs/en/cli-reference) — accessed 2026-09-14
- [Model configuration](https://code.claude.com/docs/en/model-config) — accessed 2026-09-14
