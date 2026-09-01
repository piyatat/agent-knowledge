---
id: cursor-slack-cloud-agents
title: Cursor Slack — @cursor Cloud Agents vs subscriptions
tags: [cursor, slack, automations, orchestration]
status: active
updated: 2026-09-01
when_to_use: Starting or steering a Cloud Agent from Slack, or configuring channel routing / privacy for @cursor
---

## Summary

Slack `@cursor` **starts a Cloud Agent** (plan → work → PR). That is not a **subscription** (a running agent watching a thread) and not an **Automation** (a saved trigger+prompt). Use this page for mention syntax, routing, and Slack privacy; use `cursor-cloud-always-on` / `cursor-automations` for the other two wake-ups.

## Notes

- Install: Dashboard integrations → Slack app → connect a repo provider, usage-based pricing, privacy. Mention `@cursor` with a prompt. Cursor infers repo, model, base branch, or a **named environment** from the text plus recent activity.
- Commands: `@Cursor [prompt]` starts a run, or **follow-up** in a thread that already has an agent (who may follow up is **Team follow-ups**, not ownership). `@Cursor agent [prompt]` (or “start a new agent”) forces a second run. `@Cursor settings` sets **channel** default repo (public channels; overrides personal defaults). `@Cursor list my agents` lists yours. Context menu: follow-up, delete/archive, request id, feedback.
- Options (natural language or `key=value`): `repo`, `env`/`environment` (wins over `repo`), `branch`, `model`, `autopr`, `worker`/`machine` (My Machine), `pool`, `self_hosted`, `channel` (post updates elsewhere). Inline options beat the settings modal; later duplicates win. Quote env names with spaces.
- Routing (Dashboard → Cloud Agents): keyword → repo **or** multi-repo environment. Evaluation order: message content → recent activity → routing rules → channel default → personal default.
- Privacy: Cloud Agents support Privacy Mode but **not** Legacy Privacy Mode (need temp code storage). “Display Agent Summary” (and the external-channel variant) can leak paths/snippets into Slack Connect / guest channels. Thread text is untrusted — treat as prompt-injection (`prompt-injection-agent-defense`).
- Slack scopes include channel/DM history, files read/write (visual diffs), and reactions (⏳/✅/❌). Completions notify in Slack with Open in Cursor / view PR.

## Sources

- [Slack (Cursor docs)](https://cursor.com/docs/integrations/slack.md) — accessed 2026-09-01
- [Cloud Agents and Cursor Harness Improvements](https://cursor.com/changelog/08-19-26) — accessed 2026-09-01
- [Model and Integration Management](https://cursor.com/docs/enterprise/model-and-integration-management) — accessed 2026-09-01
