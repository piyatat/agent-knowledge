---
id: cursor-cloud-agents-api
title: Cursor Cloud Agents API — durable agent plus runs
tags: [cursor, api, sdk, orchestration]
status: active
updated: 2026-10-16
when_to_use: Launching Cloud Agents over HTTPS, or scripting saved environments via /v1/environments
---

## Summary

`https://api.cursor.com/v1/agents` is a **public-beta HTTP API**: a durable `agent` (`bc-…`) plus per-prompt `run`s. Saved Cloud Agent environments are a separate **`/v1/environments`** surface (same auth). It is not `cursor-sdk` (Python `Agent.create`) and not the CLI. Auth is a user or service-account API key (Basic `-u KEY:` or `Authorization: Bearer`). v1 webhooks are **not** shipped — legacy v0 still has them.

## Notes

- `POST /v1/agents` creates an agent and enqueues the first run. Body: `prompt.text` (required), optional `prompt.images` (max 5, 15 MB, png/jpeg/gif/webp), `model.id` from `GET /v1/models`, `name`, `autoCreatePR`, `skipReviewerRequest`, `mode` (`agent` default, or `plan`), `customSubagents` (max 20; names must not collide with `explore` / `debug` / `shell` / `computerUse`).
- Placement: `repos[]` (max **300**, was 20; each needs `url`; optional `startingRef` or `prUrl`) **or** `env` (`cloud` / `pool` / `machine`). Omit both for a no-repo agent. `env.type: "pool"` without `repos` targets an any-repo pool; unknown pool name is `400`. `workOnCurrentBranch: true` pushes to the starting ref instead of `cursor/…`. Changelog week of 2026-10-13: large environments also **load ~5× faster**.
- `envVars` (max 50; names must not start with `CURSOR_`) cannot combine with a client-supplied `agentId`. Beta: if the field is not enabled for the account it is **silently ignored**. Idempotent create: pass `agentId` as `bc-…` — a replay returns `409 agent_id_conflict`.
- Follow-up: `POST /v1/agents/{id}/runs`. One active run per agent (`409 agent_busy`). Optional `mcpServers` on the follow-up **replace** create-time inline MCP for that run. Agent lifecycle: `ACTIVE` (keep the VM), `IDLE` (hibernatable; recoverable errors also report IDLE), `ARCHIVED` (terminal). List items are identity-only — `GET /v1/agents/{id}` for repos/flags; run status is on the run, not the agent.
- Inline `mcpServers` (max 50): `http`/`sse` + `url` (no userinfo in URL) or `stdio` + `command` inside the VM. Private-worker pool endpoints stay on **`/v0/private-workers`** and require the pool’s service-account key.
- Saved environments (changelog: **Environments API beta**): `POST /v1/environments` body `owner` (`personal` | `team`), `name` (unique per owner; `409 environment_name_conflict` can include `environmentId`), `repos[]` (required; max **300**; empty array = no-repo; `400 repository_access` if Cursor cannot reach a URL), `environmentJson` as a **JSON-encoded string** matching `.cursor/environment.json` (`cursor-environment-json`; `400 validation_error`). List `GET /v1/environments` (personal + team the key can see; team admins / service-account keys see every team env; drafts/deleted omitted). GET/PATCH/DELETE `/v1/environments/{id}`; `GET …/history`; secrets `GET/PUT /v1/environments/{id}/secrets`. Builds: `POST …/builds`, GET `…/builds/{buildId}`, GET `…/builds/active` (`cursor-environment-builds`). GET may also return `repoFile` (`url` + `path`) when config is read from a repo file, plus `versionId`. Dashboard Environments view points here for scripts.

## Sources

- [Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints) — accessed 2026-10-16
- [Cloud Agents API overview](https://cursor.com/docs/cloud-agent/api/overview) — accessed 2026-10-16
- [Cloud Agents settings](https://cursor.com/docs/cloud-agent/settings) — accessed 2026-10-16
- [Cursor changelog — Environments API](https://cursor.com/changelog) — accessed 2026-10-16
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-10-07
- [Cloud Agent Builds](https://cursor.com/docs/cloud-agent/builds) — accessed 2026-10-07
