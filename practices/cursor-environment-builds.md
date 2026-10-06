---
id: cursor-environment-builds
title: Cursor Cloud Agent environment Builds
tags: [cursor, ops, reliability, ci]
status: active
updated: 2026-10-06
when_to_use: Speeding up or debugging Cloud Agent VM startup (clone/install vs start/terminals)
---

## Summary

A **Build** is a background snapshot of a prepared Cloud Agent environment (repos cloned, `install` finished). New agents, automations, and reviews boot from the latest **successful** Build so a broken install does not take down the fleet. **Always on** as of the week of 2026-09-28 — there is no off switch; every non-draft environment gets automatic builds. No extra cost.

## Notes

- Lifecycle: trigger → prepare (base image + default-branch clones + `install`) → disk snapshot with per-repo SHAs → activate. Failed Builds never replace the active one. Cursor keeps pre-warmed copies so the next run forks a live machine. Environments that previously had builds off now show their active build and recurring failures; the Trigger dialog no longer warns that builds are off.
- Triggers: recurring schedule, config/secret save, manual, agent-requested (setup). Recurring checks **skip** when default branches and config are unchanged (expected mix of Skipped + Success). Automatic rebuilds keep going after a temporary source-control access failure and stop only after **three** such failures in a row. A down self-hosted SCM is reported as a source-control outage.
- Command split: `install` = Build-time, idempotent deps/artifacts (disk only — processes die at snapshot). `start` / `terminals` = per-run services and tmux apps. Putting Docker-up in `install` is a miss.
- Git: default-branch runs start at the Build’s recorded commit; **Update stale builds** + threshold (default 24h, `0` = always pull) refreshes at agent start. Feature branches reuse the Build disk then checkout the requested branch; refresh deps if the branch changed lockfiles.
- Secrets: team/environment secrets are available during Builds (private registries). **User** secrets appear only at agent start and must not be baked into the shared snapshot. Version history labels public-API saves as **API**.
- Debug from the Builds tab or Cursor Cloud MCP. **Fix Build** on a failed build whose snapshot expired now starts an agent from the latest successful snapshot plus the failed build’s logs, instead of failing. Launching from a Dockerfile build failure prefills a fix prompt.

## Sources

- [Cloud Agent Builds](https://cursor.com/docs/cloud-agent/builds) — accessed 2026-10-06
- [Cloud Agents release notes](https://cursor.com/docs/release-notes/cloud-agents) — accessed 2026-10-06
- [Cloud agents start 3x faster with builds](https://cursor.com/blog/builds) — accessed 2026-08-23

