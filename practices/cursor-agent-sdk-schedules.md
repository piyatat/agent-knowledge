---
id: cursor-agent-sdk-schedules
title: Agent SDK schedules vs reminders — cron at deploy vs per-conversation
tags: [cursor, sdk, cron, automations]
status: active
updated: 2026-11-12
when_to_use: Adding bot/schedules/* or createReminder to an Agent SDK agent, or choosing them instead of a dashboard Automation
---

## Summary

An Agent SDK **schedule** is defined at deploy time under `bot/schedules/*` (5-field cron, UTC, whole agent). A **reminder** is armed at runtime on one conversation (`createReminder` / `host.reminders`). Neither is a dashboard Automation (`cursor-automations`) nor Claude `/loop` (`claude-code-scheduled-tasks`). Dev `serve --dev` fires neither — dispatch by hand.

## Notes

- Markdown schedule: `cron:` frontmatter plus a prompt body. Each fire starts a **task-mode** session with that prompt and runs to `session.completed` / `session.failed` with no follow-ups. TypeScript: `defineSchedule({ cron, run })` — exactly one of `markdown` or `run`. `run` gets `receive` (hand off to a channel), `waitUntil`, `callTool`, `appAuth` (schedule-scoped principal), and `host` (`mcp`, `github`, `slack`, `reminders`).
- Hosting: each deploy **replaces** hosted schedules with `bot/schedules/`. Name = path without extension; 1–100 `[A-Za-z0-9._/-]`, starts with a letter or digit; **max 64** per deploy. `run` must finish in **26 minutes** including `receive` / `waitUntil`. Module memory does not survive to the next fire — persist in `ctx.host.kv` or `ctx.host.files`. At most one run per scheduled time; a stopped deployment skips fires. Production `agent-sdk serve`: enable schedules in **exactly one** process per project, or `--no-schedules`.
- Dev dispatch: `POST http://127.0.0.1:3000/<slug>/v1/dev/schedules/<name>` (example `heartbeat`). Playground and `handle.dispatchSchedule("heartbeat")` do the same. Schedules, reminders, webhooks, and evals **do not wait** for MCP Connect (`cursor-agent-sdk-mcp-oauth`) — authorize those servers with `mcp oauth` first.
- Reminders: belong to one channel continuation and stay armed across restarts. Cadence: `every`, `cron`, `delay`, or `at`. Prompt reminder injects `prompt` (plus `until` so the model knows when to cancel). Named handler in `bot/reminders/*.ts` via `defineReminder` starts a model turn only if it calls `followup`. Same API on channel handlers, tools, and schedule runs as `host.reminders`. `builtinTools: { reminders: true }` exposes `reminders_create` / `list` / `cancel` for the current conversation.
- Dev reminders: `GET …/v1/dev/reminders` lists; `POST …/v1/dev/reminders/<id>` fires one; `handle.dispatchReminder(id)` from code. Cancel when the subject ends (e.g. `pull_request.closed`). Keep wake prompts generic so the agent re-reads live state.

## Sources

- [Schedules and reminders](https://cursor.com/docs/agent-sdk/reference/schedules) — accessed 2026-11-12
- [Channels](https://cursor.com/docs/agent-sdk/reference/channels) — accessed 2026-11-12
- [Connect a private MCP server with OAuth](https://cursor.com/docs/agent-sdk/guides/mcp-oauth) — accessed 2026-11-12
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-12
