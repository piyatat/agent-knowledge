---
id: claude-code-advisor
title: Claude Code advisor — second-model consult at decision points
tags: [claude, orchestration, tokens, cost]
status: active
updated: 2026-10-14
when_to_use: Enabling /advisor or advisorModel, or choosing advisor vs opusplan vs a stronger /model
---

## Summary

The **advisor** is an experimental **server tool**: the main Claude Code model may consult a second, typically stronger model mid-task (plan, recurring error, “am I done?”). The advisor sees the full transcript and returns guidance. It is not a subagent (`claude-code-subagents`), not `/effort` (`claude-code-effort`), and not `opusplan`. The **advisor docs** still say **Anthropic API only** (not Bedrock / Google Agent Platform / Foundry). CLI **v2.1.300** (2026-10-14) added `/advisor` on **Claude Platform on AWS** as an opt-in — treat the docs page as lagging and confirm in-session.

## Notes

- Enable: `/advisor opus` (saves `advisorModel`), `"advisorModel": "opus"`, or `claude --advisor opus` (session-only; not in `--help`). `/advisor` with no args opens a picker (or prints aliases in `-p` / SDK / Desktop / Remote Control, v2.1.260+). `/advisor off` clears it. `CLAUDE_CODE_DISABLE_ADVISOR_TOOL=1` hides the command; `--advisor` then no-ops. Needs feature-flag fetch — `DISABLE_TELEMETRY` keeps it off. An `availableModels` allowlist that excludes the saved advisor is not invoked — pick an allowed model.
- Pairing: advisor must rank ≥ main. Aliases `fable` / `opus` / `sonnet` track CLI defaults. Haiku 4.5 can *call* but cannot *be* an advisor. Fable mains only accept Fable advisors (Fable 5.1 requires v2.1.257+). Haiku 5.5 as main or advisor needs v2.1.293+. Sonnet 5.5 advising Opus 4.7/4.8 needs v2.1.287+. Claude Code omits a weaker advisor; if the API refuses an attached pair it resends **without** advisor (no error) until `/clear` or `/compact`. Subagents inherit and re-check against **their** model.
- AWS (v2.1.300 changelog): no advisor runs until you pick one with `/advisor`, `advisorModel`, or `--advisor`. Docs page still lists AWS as unsupported — verify before relying on Bedrock-style gateways (`claude-code-gateway`).
- Timing is model-driven. Prompt “consult the advisor”; there is no call cap. Transcript: `Advising` then Reviewed / Declined / Unavailable (`Ctrl+O`). Claude usually follows guidance but should surface conflicts when files or a failed step contradict it. Fable-as-advisor on some plans needs one-time usage-credits consent via `/model fable` first.
- Cost: each consult bills the advisor’s full-transcript read at advisor rates (API) or plan usage (subscription). Toggling `/advisor` does **not** bust the main prompt cache; the advisor’s own read is never cached across calls. `/usage` includes advisor tokens. Prefer advisor for long tasks where most turns are cheap; switch `/model` when every turn needs the strong model.

## Sources

- [Escalate hard decisions with the advisor tool](https://code.claude.com/docs/en/advisor) — accessed 2026-10-14
- [CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-14
- [v2.1.300 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.300) — accessed 2026-10-14
- [CLI reference](https://code.claude.com/docs/en/cli-reference) — accessed 2026-10-14
- [Model configuration](https://code.claude.com/docs/en/model-config) — accessed 2026-10-14
