---
id: cursor-self-hosted-pools
title: Cursor Team Pools — named routing, any-repo, hibernation
tags: [cursor, ops, isolation, orchestration]
status: active
updated: 2026-09-02
when_to_use: Routing Cloud Agents to a named self-hosted worker fleet, scaling to zero, or keeping workspace state across idle follow-ups
---

## Summary

A **Team Pool** is a durable named queue: Cloud Agent sessions wait until a Self-Hosted Machines worker claims them. The agent loop stays in Cursor’s cloud; the worker runs tools. Enterprise + a **service account** API key are required. Pools survive scale-to-zero and can **hibernate** idle machines so a follow-up resumes on the same workspace.

## Notes

- Start from the workspace (or any-repo dir): `agent worker --pool gpu start`. Omitting the name joins `default`. One session claims one worker. Personal/user/team keys cannot start pool workers — only a service account key (`CURSOR_API_KEY`).
- **Repo-backed** pools match `repo=` labels from git remotes (up to 20 `--worker-dir` roots; first root is primary). **Any-repo** pools match on pool name only and appear under Any repo. Default any-repo does **not** clone; `--clone-git-repos` (implies `--mint-github-token`) is opt-in and only on a named non-`default` any-repo pool.
- `--idle-release-timeout` (default 3600s, env `CURSOR_WORKER_IDLE_RELEASE_TIMEOUT`) keeps the process up for follow-ups, then exits 0 so a supervisor can recycle. Pass `0` to disable. After release, a restart lands on a **fresh** machine unless hibernation is configured.
- Hibernation: set `workerReadyTimeoutSeconds` on the pool (API `POST /v0/private-workers/pools`; default `0` = reacquire immediately). Snapshot on idle, then on `claimed_offline` restore and start with the same `CURSOR_AGENT_WORKER_ID`.
- Controller: `agent worker controller --spawn …` watches pending-request SSE and claims. Warm mode (`--warm-idle`) is one controller per pool. Custom controllers use `/v0/private-workers/*` (paths still say `private-workers`).
- Triggers: Slack/GitHub `pool=<name>` or `self_hosted=true`; Linear `pool=` / `[pool=]`. GitHub only honors OWNER/COLLABORATOR for self-hosted opt-in on public repos. API: `env.type: "pool"` + `env.name`.
- `sessionStart` / `sessionEnd` **do** run on these workers (managed Cloud Agents skip them). Prompt-based and Tab hooks still do not. stdio MCP runs on the worker; HTTP/SSE MCP stays on Cursor’s backend.

## Sources

- [Team Pools](https://cursor.com/docs/cloud-agent/bring-your-own-machine/pools) — accessed 2026-09-02
- [Self-Hosted Machines](https://cursor.com/docs/cloud-agent/self-hosted) — accessed 2026-09-02
- [Self-hosted machines (changelog)](https://cursor.com/changelog/self-hosted-machines) — accessed 2026-09-02
- [Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints) — accessed 2026-09-02
