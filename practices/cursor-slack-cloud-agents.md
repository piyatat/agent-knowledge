---
id: cursor-slack-cloud-agents
title: Cursor Slack — @cursor Cloud Agents vs subscriptions
tags: [cursor, slack, automations, orchestration]
status: active
updated: 2026-10-17
when_to_use: Starting or steering a Cloud Agent from Slack, or configuring channel routing / pool / team billing for @cursor
---

## Summary

Slack `@cursor` **starts a Cloud Agent** (plan → work → PR). That is not a **subscription** (a running agent watching a thread) and not an **Automation** (a saved trigger+prompt). Linear and GitHub have the same mention-vs-automation split (`cursor-linear-cloud-agents`, `cursor-github-cloud-agents`). Use this page for Slack syntax, routing, **Team for Slack Agents**, and default pools.

## Notes

- Install: Dashboard integrations → Slack app → connect a repo provider, usage-based pricing, privacy. Mention `@cursor` with a prompt. Cursor infers repo, model, base branch, or a **named environment** from the text plus recent activity. `@Cursor help` lists current commands. `key=value` inside triple-backtick code is ignored (so `pool=None` in a snippet does not pick a pool).
- Commands: `@Cursor [prompt]` starts a run, or **follow-up** in a thread that already has an agent (who may follow up is **Team follow-ups**, not ownership). `@Cursor agent [prompt]` (or “start a new agent”) forces a second run. `@Cursor settings` sets **channel** default repo (public channels; overrides personal defaults) and shows team/channel default pools. `@Cursor list my agents` lists yours. Context menu: follow-up, **Switch repository** (relaunch against another repo/environment), delete/archive, request id, feedback.
- Options: `repo`, `env`/`environment` (wins over `repo`), `branch`, `model`, `autopr`, `worker`/`machine`, `pool`, `self_hosted`/`sh`, `channel`. Inline options beat the settings modal; later duplicates win. Quote env names with spaces.
- **Team for Slack Agents** (week of 2026-10-05): if you belong to more than one paid Cursor team, pick which team Slack-started agents **run, bill, and take settings from** — at Slack link time or later in Dashboard → Cloud Agents. A Slack workspace pinned to one team wins. Follow-ups stay on the **original** team.
- **Default pools** (Enterprise + Allow Self-Hosted Machines on): `@Cursor pool` / `pool set|unset` (team default, admin) and `pool set|unset channel` (any teammate, this channel). Resolution: message `pool=` / `worker=` / `self_hosted=false` → your default My Machine → channel pool → team pool. Repo-bound pool with no resolved repo, or a repo the pool does not serve, is an **ephemeral reject** — not a managed-infra fallback. Any-repo pool with no repo starts without one (`cursor-self-hosted-pools`). Turning Self-Hosted off ignores both defaults.
- Routing: message content → recent activity → keyword rules (repo **or** environment) → channel default → personal default. Privacy: Privacy Mode yes, **Legacy** no. Display Agent Summary (and the external-channel variant) can leak paths/snippets into Slack Connect. Artifact links unfurl in Slack only when the sharer can access them, and are skipped in channels shared outside the workspace (`cursor-cloud-pr-artifacts`). Thread text is untrusted (`prompt-injection-agent-defense`).

## Sources

- [Slack (Cursor docs)](https://cursor.com/docs/integrations/slack) — accessed 2026-10-17
- [Cloud Agents settings](https://cursor.com/docs/cloud-agent/settings) — accessed 2026-10-17
- [Cloud Agents release notes](https://cursor.com/docs/release-notes/cloud-agents) — accessed 2026-10-17
- [Cloud Agents and Cursor Harness Improvements](https://cursor.com/changelog/08-19-26) — accessed 2026-09-01
- [Model and Integration Management](https://cursor.com/docs/enterprise/model-and-integration-management) — accessed 2026-09-01
