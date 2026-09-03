---
id: cursor-cloud-agents-api
title: Cursor Cloud Agents API — durable agent plus runs
tags: [cursor, api, sdk, orchestration]
status: active
updated: 2026-09-03
when_to_use: Launching or following up Cloud Agents over HTTPS instead of the Python SDK, CLI, or editor
---

## Summary

`https://api.cursor.com/v1/agents` is a **public-beta HTTP API**: a durable `agent` (`bc-…`) plus per-prompt `run`s. It is not `cursor-sdk` (Python `Agent.create`) and not the CLI. Auth is a user or service-account API key (Basic `-u KEY:` or `Authorization: Bearer`). v1 webhooks are **not** shipped — legacy v0 still has them.

## Notes

- `POST /v1/agents` creates an agent and enqueues the first run. Body: `prompt.text` (required), optional `prompt.images` (max 5, 15 MB, png/jpeg/gif/webp), `model.id` from `GET /v1/models`, `name`, `autoCreatePR`, `skipReviewerRequest`, `mode` (`agent` default, or `plan`), `customSubagents` (max 20; names must not collide with `explore` / `debug` / `shell` / `computerUse`).
- Placement: `repos[]` (max 20; each needs `url`; optional `startingRef` or `prUrl`) **or** `env` (`cloud` / `pool` / `machine`). Omit both for a no-repo agent. `env.type: "pool"` without `repos` targets an any-repo pool; unknown pool name is `400`. `workOnCurrentBranch: true` pushes to the starting ref instead of `cursor/…`.
- `envVars` (max 50; names must not start with `CURSOR_`) cannot combine with a client-supplied `agentId`. Beta: if the field is not enabled for the account it is **silently ignored**. Idempotent create: pass `agentId` as `bc-…` — a replay returns `409 agent_id_conflict`.
- Follow-up: `POST /v1/agents/{id}/runs`. One active run per agent (`409 agent_busy`). Optional `mcpServers` on the follow-up **replace** create-time inline MCP for that run. Agent lifecycle: `ACTIVE` (keep the VM), `IDLE` (hibernatable; recoverable errors also report IDLE), `ARCHIVED` (terminal). List items are identity-only — `GET /v1/agents/{id}` for repos/flags; run status is on the run, not the agent.
- Inline `mcpServers` (max 50): `http`/`sse` + `url` (no userinfo in URL) or `stdio` + `command` inside the VM. Private-worker pool endpoints stay on **`/v0/private-workers`** and require the pool’s service-account key.

## Sources

- [Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints) — accessed 2026-09-03
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-03
