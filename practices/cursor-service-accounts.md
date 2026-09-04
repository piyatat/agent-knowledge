---
id: cursor-service-accounts
title: Cursor service accounts — Enterprise automation keys
tags: [cursor, identity, auth, ops]
status: active
updated: 2026-09-04
when_to_use: Giving CI, Team Pools, or the Cloud Agents API a non-human Cursor identity
---

## Summary

A Cursor **service account** is an Enterprise, seat-free identity for automations: Cloud Agents API, `CURSOR_API_KEY` for the CLI, and **Team Pool** workers. It is not a user API key, not OIDC (`cursor-cloud-oidc-identity`), and not a personal My Machines login. Usage bills against the team pool; admins can see every run the account starts.

## Notes

- Create under Dashboard → Settings → API Keys → Service Accounts. The key is shown **once**. Rotate invalidates the old key immediately; archive revokes all keys and keeps the record. Name accounts by purpose (Linear bot, pool workers), not by a person.
- Repos: the GitHub App must be connected at the **team** level. A personal GitHub install is not enough. Scope is the team App’s authorized repos.
- API: `Authorization: Bearer` or Basic `-u KEY:` on `https://api.cursor.com`. Current create surface is `POST /v1/agents` (`cursor-cloud-agents-api`); older snippets that POST `/agents` with `repo` are v0-shaped. Private-worker pool endpoints stay on `/v0/private-workers` and **require** this key type — user/personal/team keys are rejected.
- CLI: `export CURSOR_API_KEY=…` then `agent -p --force "…"` in CI (`cursor-cli-headless`). Browser login is the wrong path for cron/Actions.
- Treat the key as a secret: rotate on a schedule, one account per workflow, monitor team analytics, archive unused. Do not commit it or put it in Cloud Agent `envVars`.

## Sources

- [Service Accounts](https://cursor.com/docs/account/enterprise/service-accounts) — accessed 2026-09-04
- [Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints) — accessed 2026-09-04
- [Team Pools](https://cursor.com/docs/cloud-agent/self-hosted/pool) — accessed 2026-09-04
