---
id: cursor-agent-sdk-debug
title: Agent SDK troubleshooting — playground, 401/403/409, traces
tags: [cursor, sdk, reliability, ops]
status: active
updated: 2026-11-13
when_to_use: A local Agent SDK playground is blank, a turn misbehaves, or GitHub/Slack/MCP/schedules fail with 401/403/409
---

## Summary

Start every Agent SDK debug with **`agent-sdk validate --dir .`**, then **`agent-sdk info --dir . --json`**, then one reproduction and the serve log or session trace. Hosted start failures are `cursor-agent-sdk-deploy`. This is the local/runtime table, not hillclimbing quality (`cursor-agent-sdk-evals`).

## Notes

- Playground: blank / “no agents” → `agent-sdk serve` is not running (a built SPA with no backend serves nothing). File edits don’t show → open the URL `serve --dev` prints as **playground**, not `:3000`, then press Enter in that terminal to reload. Sessions on disk but empty list → the list is the **calling principal**; `--dev` / `--allow-anonymous` shows all, or open `?sessionId=ses_...`.
- Turns: `NGHTTP2_FRAME_SIZE_ERROR` on read/grep → **Bun**; rerun under Node **22.13+**. Missing API key → `CURSOR_API_KEY` / `CURSOR_API_KEY_FILE` / `CURSOR_SERVICE_ACCOUNT_KEY` or `agent-sdk login`. Login works, model rejects → point `CURSOR_API_BASE_URL` and `CURSOR_BACKEND_URL` at the **same** host. Replies quote ancestor `AGENTS.md` → `defineAgent({ local: { cwd } })` (default cwd is a cache under `~/.cache`). Model lists IDE `cursor` tools, never MCP → `advertiseTools: true`. `validate` clean, CI typecheck fails → JSON-shaped returns; `type` not `interface`.
- HTTP: `401` off loopback → send bearer / alias / channel credential. `403` on stream → same identity that created the session. `409` on follow-up → stale `continuationToken`, busy session, or a **task** session (no follow-ups). `409 session_busy` on `call --session` → wait, drop `--session`, or mark a read-only tool `effect: "read"`. Works on loopback, blocked via tunnel → `localDevStrict()`; use `--bearer-token`. Never `--allow-anonymous` with account MCP.
- GitHub: `github forward` 401 → blank `GITHUB_TOKEN`/`GH_TOKEN` so the relay uses `gh` login. `Hook already exists` → one forwarder per repo. Slack `channel idle … missing credentials` → `agent-sdk slack doctor`. MCP: local tokens **do not** reach a deployment — use `cursorAccount: true` (`cursor-agent-sdk-mcp-oauth`). Schedules/reminders silent under `--dev` → `POST /<slug>/v1/dev/schedules/<id>` (dev never auto-fires). One schedule on several self-hosted processes → `--no-schedules` on all but one (`cursor-agent-sdk-schedules`).
- Trace: `agent-sdk session get <id> --prod --slug <slug> --view events` or `--file <trace>`. Pair `actions.requested` with `action.result`. `turn.failed` + `"turn interrupted"` is a follow-up or stop, not a crash.

## Sources

- [Fix common agent problems](https://cursor.com/docs/agent-sdk/troubleshooting) — accessed 2026-11-13
- [Agent SDK CLI](https://cursor.com/docs/agent-sdk/reference/cli) — accessed 2026-11-13
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-13
