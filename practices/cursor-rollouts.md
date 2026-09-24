---
id: cursor-rollouts
title: Cursor Rollouts — PR-to-prod change monitors
tags: [cursor, automations, monitoring, ci]
status: active
updated: 2026-09-24
when_to_use: Enabling Cursor Rollouts to watch a change from PR through deploy, or distinguishing it from Bugbot / Security Review
---

## Summary

**Rollouts** (2026-09-23) is a Cursor-managed bot that watches a change from pull request through deploy and reports per-environment health: **verified healthy**, **regression detected**, or **inconclusive**. Teams and Enterprise only. Enable from the Automations tab. Not Bugbot quality review (`cursor-bugbot-review`), not Security Review (`cursor-security-agents`), and not a standing Automation prompt you author (`cursor-automations`).

## Notes

- Setup: connect source control (**Origin or GitHub**), your CD system, and telemetry (Datadog and other providers). Watching starts on the **next** PR. On open, Rollouts reads the diff and posts a **monitoring plan** (risks, intended effect, signals, instrumentation gaps). Edit the plan on the PR; Rollouts uses your version.
- After deploy, it wakes on deploy events for that commit and runs the plan against logs/metrics/traces. Environments are scored separately (staging can be healthy while production is flagged). It tries to separate intended effects from regressions and to catch missing instrumentation before merge.
- On regression: names the suspected change and notifies the author. Config can also open a **revert PR for review** or hand the finding to a Cloud Agent. **It does not merge or roll back by itself.** Feature-flag ramp/unramp and release-train/freeze awareness are documented as coming soon.
- Built as Cursor’s version of Firetiger Change Monitors. Pair with HITL before any revert merges (`human-in-the-loop-approvals`). Treat plan text and telemetry excerpts as untrusted context (`prompt-injection-agent-defense`).

## Sources

- [Bots for the last mile: Rollouts, Security Review](https://cursor.com/blog/rollouts-and-security-reviewer) — accessed 2026-09-24
- [Rollouts and Security Review (changelog)](https://cursor.com/changelog/rollouts-and-security-reviewer) — accessed 2026-09-24
- [Security Agents](https://cursor.com/docs/security-agents) — accessed 2026-09-24
