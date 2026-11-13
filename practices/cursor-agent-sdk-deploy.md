---
id: cursor-agent-sdk-deploy
title: Agent SDK deploy — pushed Git ref to Cursor hosting or serve
tags: [cursor, sdk, hosting, ops]
status: active
updated: 2026-11-13
when_to_use: Running agent-sdk deploy, setting hosting.egressDomains/secretNames, rotating the alias token, or self-hosting agent-sdk serve
---

## Summary

**`agent-sdk deploy`** builds a **pushed** Git ref onto Cursor-managed hosting and prints a URL. Uncommitted changes do not ship. Self-host with `agent-sdk serve` when you need your own network or process controls. Not a dashboard Automation (`cursor-automations`) and not Python `Agent.create` (`cursor-sdk`). Early-alpha `architecture: "v1"` must migrate first (`cursor-agent-sdk-migrate-v2`).

## Notes

- Loop: `agent-sdk login` → `validate` → `deploy`. Override source with `--repo` / `--ref` / `--path` / `--slug`. The command waits until **running**. Redeploy the **same** slug; each redeploy **replaces** watched repositories — pass every `--cursor-events-repo` again or it watches only the GitHub source repo. `deployment get <slug>` checks a rollout. `deploy` refuses v1 and points at `migrate`.
- Privacy Mode: **available** (deployment data stored like other Cursor data; model requests get Privacy Mode handling). **Privacy Mode (Legacy)** refuses `deploy`, hosted sessions, **and** evals. Switch, or ask a team admin when the team enforces Legacy.
- `hosting.egressDomains`: lowercase hostnames, no scheme/path; add `:port` only for raw TCP. Team policy can reject a host — a running deployment keeps the last successful list. `*.example.com` as an **agent** entry skips the apex (list `example.com` too); a **team** `*.example.com` includes the apex. Raw TCP needs a team `CIDR:port`. `deploy --json` lists `egress.effective`. `secretNames` are **names** only — never `CURSOR_*` or `NAME=VALUE` on `secret set`. Hosted secrets arrive **after** modules load; read them inside the handler. SCM channels take `{ secretName: "GITHUB_WEBHOOK_SECRET" }`.
- Use: `session create --slug … --message … --wait` then `session get` / `logs --prod`. Without `--wait` there is no `sessionId` yet. Alias URL + `X-Agent-Alias-Token` for custom routes. First deploy prints the alias token **once**; rotate with `deployment rotate-token`. `publicEndpoint()` only for a webhook provider that verifies its own signature. Sessions, `ctx.host.kv`, and `ctx.host.files` survive replacements; other disk writes may not. Peers: `defineConnection({ agent: "weather-agent" })` then redeploy (`cursor-agent-sdk-peers`).
- Self-host: Node **22.13+**, never Bun. `serve --host 127.0.0.1 --state-root <persistent> --bearer-token …`. TLS/auth in front; keep the bearer unless a proxy authenticates every caller; enable schedules in **one** process per project. Container: `--host 0.0.0.0` behind an authenticating boundary.

## Sources

- [Deploy an Agent SDK project](https://cursor.com/docs/agent-sdk/deployment) — accessed 2026-11-13
- [Agent SDK CLI](https://cursor.com/docs/agent-sdk/reference/cli) — accessed 2026-11-13
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-13
- [Fix common agent problems](https://cursor.com/docs/agent-sdk/troubleshooting) — accessed 2026-11-13
