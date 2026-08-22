---
id: cursor-cloud-always-on
title: Cursor cloud agents — subscriptions, /goal, isolated subagents
tags: [cursor, orchestration, subagent, durability]
status: active
updated: 2026-08-22
when_to_use: Designing always-on Cursor cloud agents that wake on PRs/Slack/cron or hold a long-lived objective
---

## Summary

Cursor’s 2026-08-19 harness treats cloud agents as an event-driven system: **subscriptions** wake a run on PR/Slack/schedule, `/goal` holds an objective across loops, subagents can get their **own VMs**, and steering messages queue until the next tool call instead of interrupting.

## Notes

- Subscriptions (cloud agents only for now): watch a PR, Slack thread, or scheduled task and resume when it changes. Agents auto-subscribe to PRs they open and try to drive CI + bot comments to done.
- `/goal` is not a one-shot prompt — example: “fix all flaky tests and make CI green.” Pair with a Custom Mode (pinned skill) or `/loop` for recurring check-ins.
- Custom Modes pin a skill in chat (⌥⏎ / Alt+Enter from `/`) so that skill stays always-on. That is the opposite of progressive skill loading — budget tokens accordingly.
- Isolated subagent VMs: each child gets a clean project copy and context so parallel swarms do not collide on the parent working tree. Use for “test my change in a fresh env” rather than sharing one dirty checkout.
- Steering: follow-ups wait for the next tool boundary. Prefer this over killing a mid-flight edit when the run may last an hour.
- Still apply HITL, secret scanning, and sandbox rules — always-on plus auto-PR-follow-up increases blast radius if a subscription fires on untrusted review text.

## Sources

- [Cloud Agents and Cursor Harness Improvements (2026-08-19)](https://cursor.com/changelog/08-19-26) — accessed 2026-08-22
- [Cursor changelog index](https://cursor.com/changelog) — accessed 2026-08-22
- [Cursor gives cloud agents subscriptions, /goal and subagent VMs](https://aiweekly.co/alerts/cursor-gives-cloud-agents-subscriptions-goal-and-subagent-vms) — accessed 2026-08-22
