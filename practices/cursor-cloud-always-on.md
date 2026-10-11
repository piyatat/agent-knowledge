---
id: cursor-cloud-always-on
title: Cursor cloud agents — subscriptions, /goal, isolated subagents
tags: [cursor, orchestration, subagent, durability]
status: active
updated: 2026-10-11
when_to_use: Designing always-on Cursor cloud agents that wake on PRs/Slack/cron or hold a long-lived objective
---

## Summary

Cloud agents are an event-driven harness: **subscriptions** wake one conversation on GitHub/Slack/Linear/timers, `/goal` holds an objective across loops, subagents can get **own VMs**, and steering waits until the next tool call. Origin (`cursor-origin`) can be the SCM. The same runs show up in the **iOS** inbox (`cursor-ios`). Automatic GitHub Actions retries are `cursor-cloud-pr-artifacts`, not a subscription. New Cloud picks use the **repo’s default environment**; OOM-killed shells now report the memory limit so the agent can retry smaller.

## Notes

- Subscriptions belong to **one** conversation; events arrive as follow-ups with full context. Bursts coalesce — the agent re-reads the PR/thread/issue before acting. Max lifetime **180 days**; agents unsubscribe when the wait is done. Prompt it (“keep this PR green until merge”) or use `/subscribe`. Recurring timers also have `/loop`.
- Integrations: **GitHub** (one PR, a repo, or one author’s PRs; CI on a branch); **Slack** (thread replies, channel messages, new public channels); **Linear** (issue create/state, comments); **Timers** (delay or cron). Requires the matching Cursor integration. Slack mentions in a cloud prompt now render as `@Name` (not raw user IDs) when you open the run.
- `/goal` is not a one-shot prompt — e.g. “fix all flaky tests and make CI green.” Pair with a Custom Mode (pinned skill) so the skill stays always-on (token cost vs progressive loading), or with `/loop` when you want recurring check-ins. In the CLI, Ctrl+C **pauses** the goal; it continues across idle and headless runs. `/goal` is rolling out / gated — try a new chat if the slash is missing (`cursor-cli-headless`).
- Isolated subagent VMs: each child gets a clean project copy. Steering follow-ups wait for the next tool boundary instead of interrupting a long edit — queue vs steer vs interrupt is `cursor-message-queue`.
- Environment: clicking Cloud (or cycling with Cmd+;) now starts on the repo default environment instead of a teammate’s saved one. If the run falls back to the default image without your setup, the environment status row shows a warning chip and count (`cursor-environment-json`). IDE 3.24: an OOM-killed shell tells the agent the memory limit so it can explain and retry with less memory. “Open in Cursor” Cloud Agent links open in the Agents Window instead of an Incorrect Repository dialog.
- Untrusted review text, Slack, and Linear comments are prompt-injection surface. Pair with HITL, secret scanning, and skip autofix after human commits (`cursor-cloud-pr-artifacts`). Personal `~/.cursor/skills/` reach these VMs only if Sync Skills is on (`cursor-skills-cloud-sync`).

## Sources

- [Cloud Agent capabilities — Subscriptions](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-28
- [Cursor IDE release notes](https://cursor.com/docs/release-notes/ide) — accessed 2026-10-11
- [Cursor web release notes](https://cursor.com/docs/release-notes/web) — accessed 2026-10-11
- [Cloud Agents and Cursor Harness Improvements (2026-08-19)](https://cursor.com/changelog/08-19-26) — accessed 2026-10-05
- [Cursor Agent](https://cursor.com/docs/agent/overview) — accessed 2026-10-05
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-10-05
- [Cloud Agents help](https://cursor.com/help/ai-features/cloud-agents) — accessed 2026-08-28
- [Cursor for iOS](https://cursor.com/docs/cloud-agent/mobile) — accessed 2026-09-20
