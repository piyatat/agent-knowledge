---
id: claude-code-routines
title: Claude Code routines — cloud schedule, API, and GitHub triggers
tags: [claude, automations, cron, orchestration]
status: active
updated: 2026-09-11
when_to_use: Creating a /schedule cloud routine, or choosing routines vs Desktop scheduled tasks vs /loop
---

## Summary

A **routine** is a saved Claude Code prompt plus repos, environment, and connectors that runs on Anthropic-managed cloud (or a self-hosted environment) without your laptop. Triggers: schedule, HTTP `/fire`, and GitHub PR/release events. Research preview on Pro / Max / Team / Enterprise. Not a Desktop scheduled task (local, app must be open), not `/loop` (session-scoped cron), and not Cursor Automations (`cursor-automations`).

## Notes

- Create at claude.ai/code/routines, Desktop Routines → Cloud, or CLI `/schedule` (alias `/routines`). All three write the same account. Team/Enterprise Owners disable everyone with the Routines toggle. Requires claude.ai login — API keys, Bedrock / Agent Platform / Foundry hide `/schedule`.
- Runs are autonomous cloud sessions: no permission picker. Scope via selected GitHub repos (clone default branch; Claude pushes `claude/`-prefixed branches), environment network/vars/setup script, and connectors. Local `claude mcp add` servers do **not** appear — add a claude.ai connector or committed `.mcp.json`. Actions use **your** GitHub / connector identity. Routines are per-account, not shared.
- Schedule: hourly / daily / weekdays / weekly (local wall-clock → UTC; min 1h). Custom cron via `/schedule update`. One-off times auto-disable after fire and do **not** count against the daily routine-run cap. Stagger is a few minutes, stable per routine.
- API: add trigger on the web, generate a one-time bearer token, POST to the routine `/fire` URL with beta header `experimental-cc-routine-2026-04-01`. Optional `text` arrives in an untrusted `routine-fire-payload` wrapper — the saved prompt must opt in to acting on it.
- GitHub: needs the Claude GitHub App (not just `/web-setup`). Events: pull_request and release actions; PR filters (author, title, base/head, labels, draft/merged). Preview hourly caps drop extra events. CLI GitHub triggers need v2.1.225+.
- Contrast: Desktop Local tasks need the app awake, min 1 minute, access local files, store prompts in `~/.claude/scheduled-tasks/*/SKILL.md`. `/loop` is in-session (7-day expiry, 50-task cap, `CLAUDE_CODE_DISABLE_CRON=1`). Channels push events into an **open** local session (`claude-code-channels`).

## Sources

- [Automate work with routines](https://code.claude.com/docs/en/routines) — accessed 2026-09-11
- [Schedule recurring tasks in Claude Code Desktop](https://code.claude.com/docs/en/desktop-scheduled-tasks) — accessed 2026-09-11
- [Run prompts on a schedule](https://code.claude.com/docs/en/scheduled-tasks) — accessed 2026-09-11
