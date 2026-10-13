---
id: cursor-environment-json
title: Cloud Agent environment.json — install vs start vs terminals
tags: [cursor, ops, config, ci]
status: active
updated: 2026-10-13
when_to_use: Authoring .cursor/environment.json, choosing snapshot vs Dockerfile, or splitting install from per-run services
---

## Summary

Commit `.cursor/environment.json` so Cloud Agent **Builds** are reproducible. Resolution order: repo `environment.json` → personal saved environment → team saved environment. `install` is Build-time (disk only); `start` / `terminals` are per-run processes. Builds (`cursor-environment-builds`) snapshot the result — they do not replace this file. Self-Hosted Machines use the environment’s **repos only** and never read this file.

## Notes

- Resolution: first match wins. No repo file → personal override is useful for trying a config before rolling it out to the team. Multi-repo environments clone every selected repo onto the VM so one agent can change frontend/backend together.
- Two base-machine styles: `"snapshot": "<id>"` or `"build": { "dockerfile", "context" }`. Dockerfile/context paths are **relative to `.cursor`**. Omitted `context` defaults to `.cursor`. `.`, `./`, and `..` mean the **repo root**. `install` runs from the project root. Do not `COPY` the full project — Cursor checks out the commit. Dockerfile layer cache rebuilds only changed layers. Cursor-configured Dockerfiles are a private-beta Enterprise flow.
- Command split: `install` = idempotent deps/codegen/artifacts (processes die at snapshot). `start` = Docker, DBs, tunnels. `terminals` = app processes in a shared `tmux`. Putting `docker compose up` in `install` is a miss.
- Computer use needs a Debian/Ubuntu-based Dockerfile image. Secrets belong in the Secrets tab / environment-scoped secrets, not baked `.env.local` in the snapshot (`cursor-cloud-secrets-network`).
- Feature-branch `environment.json` changes: push, then start an agent **on that branch**. Cursor reuses the active Build disk, checks out the branch, and can rerun `install` when lockfiles changed. IDE 3.23+: the editor validates/autocompletes `egressAllowlist`, `egressMode`, `image`, inline `build.dockerfileContents`, `chromeExecutablePath`, and `enable_testing` instead of flagging them as unknown.
- **JSONC** (week of 2026-10-05 / CLI **v2026.10.08**): `//` comments, block comments, and trailing commas are accepted **everywhere** the file is read, including `agent env deploy`. A commented file no longer triggers “set up your environment”; snapshot and network settings apply instead of being ignored. Invalid JSONC fails with a pointer to the parse stop.
- Start from scratch (no SCM): paid plan + Origin; Cursor drafts an Origin repo in the background. If Origin is disabled for the team, the agent starts with no repository (`cursor-origin`). New cloud agents pick the **repo’s default environment** (not a teammate’s saved one). A fallback to the default image without setup shows a warning chip on the environment status row.

## Sources

- [Cloud Environment Setup](https://cursor.com/docs/cloud-agent/setup) — accessed 2026-10-13
- [Cloud Agents release notes](https://cursor.com/docs/release-notes/cloud-agents) — accessed 2026-10-13
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-10-13
- [Cursor IDE release notes](https://cursor.com/docs/release-notes/ide) — accessed 2026-10-11
- [Cursor web release notes](https://cursor.com/docs/release-notes/web) — accessed 2026-10-11
- [Cloud Agent Builds](https://cursor.com/docs/cloud-agent/builds) — accessed 2026-10-06
- [Cloud Agents overview](https://cursor.com/docs/cloud-agent) — accessed 2026-08-28
