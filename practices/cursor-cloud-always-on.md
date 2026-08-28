---
id: cursor-cloud-always-on
title: Cursor cloud agents — subscriptions, /goal, isolated subagents
tags: [cursor, orchestration, subagent, durability]
status: active
updated: 2026-08-28
when_to_use: Designing always-on Cursor cloud agents that wake on PRs/Slack/cron or hold a long-lived objective
---

## Summary

Cloud agents are an event-driven harness: **subscriptions** wake one conversation on GitHub/Slack/Linear/timers, `/goal` holds an objective across loops, subagents can get **own VMs**, and steering queues until the next tool call. Origin (`cursor-origin`) can be the SCM. Automatic GitHub Actions retries are `cursor-cloud-pr-artifacts`, not a subscription.

## Notes

- Subscriptions belong to **one** conversation; events arrive as follow-ups with full context. Bursts coalesce — the agent re-reads the PR/thread/issue before acting. Max lifetime **180 days**; agents unsubscribe when the wait is done. Prompt it (“keep this PR green until merge”) or use `/subscribe`. Recurring timers also have `/loop`.
- Integrations: **GitHub** (one PR, a repo, or one author’s PRs; CI on a branch); **Slack** (thread replies, channel messages, new public channels); **Linear** (issue create/state, comments); **Timers** (delay or cron). Requires the matching Cursor integration.
- `/goal` is not a one-shot prompt — e.g. “fix all flaky tests and make CI green.” Pair with a Custom Mode (pinned skill) so the skill stays always-on (token cost vs progressive loading).
- Isolated subagent VMs: each child gets a clean project copy. Steering follow-ups wait for the next tool boundary instead of interrupting a long edit.
- Untrusted review text, Slack, and Linear comments are prompt-injection surface. Pair with HITL, secret scanning, and skip autofix after human commits (`cursor-cloud-pr-artifacts`).

## Sources

- [Cloud Agent capabilities — Subscriptions](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-28
- [Cloud Agents and Cursor Harness Improvements (2026-08-19)](https://cursor.com/changelog/08-19-26) — accessed 2026-08-22
- [Cursor changelog index](https://cursor.com/changelog) — accessed 2026-08-28
- [Cloud Agents help](https://cursor.com/help/ai-features/cloud-agents) — accessed 2026-08-28

