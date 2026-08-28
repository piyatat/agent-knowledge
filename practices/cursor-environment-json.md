---
id: cursor-environment-json
title: Cloud Agent environment.json — install vs start vs terminals
tags: [cursor, ops, config, ci]
status: active
updated: 2026-08-28
when_to_use: Authoring .cursor/environment.json, choosing snapshot vs Dockerfile, or splitting install from per-run services
---

## Summary

Commit `.cursor/environment.json` so Cloud Agent **Builds** are reproducible. Resolution order: repo `environment.json` → personal saved environment → team saved environment. `install` is Build-time (disk only); `start` / `terminals` are per-run processes. Builds (`cursor-environment-builds`) snapshot the result — they do not replace this file.

## Notes

- Resolution: first match wins. No repo file → personal override is useful for trying a config before rolling it out to the team. Multi-repo environments clone every selected repo onto the VM so one agent can change frontend/backend together.
- Two base-machine styles: `"snapshot": "<id>"` (dashboard snapshot) or `"build": { "dockerfile", "context" }`. Dockerfile/context paths are **relative to `.cursor`**. Omitted `context` defaults to `.cursor`. `.`, `./`, and `..` mean the **repo root**. `install` runs from the project root. Do not `COPY` the full project — Cursor checks out the commit.
- Command split: `install` = idempotent deps/codegen/artifacts (processes die at snapshot). `start` = Docker, DBs, tunnels. `terminals` = app processes in a shared `tmux`. Putting `docker compose up` in `install` is a miss.
- Computer use needs a Debian/Ubuntu-based Dockerfile image. Secrets belong in the Secrets tab / environment-scoped secrets, not baked `.env.local` in the snapshot (`cursor-cloud-secrets-network`).
- Feature-branch `environment.json` changes: push, then start an agent **on that branch**. Cursor reuses the active Build disk, checks out the branch, and can rerun `install` when lockfiles changed.

## Sources

- [Cloud Environment Setup](https://cursor.com/docs/cloud-agent/setup) — accessed 2026-08-28
- [Cloud Agent Builds](https://cursor.com/docs/cloud-agent/builds) — accessed 2026-08-28
- [Cloud Agents overview](https://cursor.com/docs/cloud-agent) — accessed 2026-08-28
