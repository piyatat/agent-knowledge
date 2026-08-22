---
id: cursor-automations
title: Cursor Automations — standing rules vs subscriptions
tags: [cursor, automations, orchestration, cron]
status: active
updated: 2026-08-22
when_to_use: Configuring scheduled or event-triggered Cursor cloud agents (not a running agent’s PR/Slack subscription)
---

## Summary

A **Cursor Automation** is a standing rule you save (trigger + prompt + tools + repo scope). A **subscription** is something a *running* cloud agent takes on (watch this PR/thread). Do not treat them as the same wake-up mechanism.

## Notes

- Create at cursor.com/automations, from the Agents Window, `/automate`, or a Marketplace template. Triggers include cron, GitHub/GitLab/Bitbucket PR/push, Slack, webhooks, Linear, Sentry, and PagerDuty. Any trigger firing starts a run.
- Repo scope: **none** (Slack/MCP/PagerDuty only — cannot edit code or open PRs), **single repo**, or **multi-repo** environment. Source-control triggers require a repo. Slack/cron default to no repo unless you set one.
- Connecting an MCP server grants **every tool** on that server. Only attach servers whose blast radius matches the automation. Memories persist across runs (`MEMORIES.md` by default) and can be poisoned by untrusted trigger text — disable or treat as untrusted if the trigger is public Slack/webhooks.
- Permission scope changes **identity**: Private / Team Visible run as the creator (usage billed to them); Team Owned runs as the team automations service account (usage from the team pool). After promoting to Team Owned, regenerate webhook API keys and re-bind MCP OAuth to the service account.
- External identity: GitHub comments/reviews as `cursor`; team-owned PRs as `cursor`; private automations open PRs as your GitHub user. Fork PRs are rejected except **merged** (starts from the merge commit).
- Computer use is on by default for automation cloud agents — contain it like any browser/desktop grant. Billing is cloud-agent usage; automations always use the model’s max context window.

## Sources

- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-08-22
- [Cloud Agents and Cursor Harness Improvements (2026-08-19)](https://cursor.com/changelog/08-19-26) — accessed 2026-08-22
