---
id: cursor-automations
title: Cursor Automations — standing rules vs subscriptions
tags: [cursor, automations, orchestration, cron]
status: active
updated: 2026-09-03
when_to_use: Configuring scheduled or event-triggered Cursor cloud agents (not a running agent’s PR/Slack subscription)
---

## Summary

A **Cursor Automation** is a standing rule you save (trigger + prompt + tools + repo scope). A **subscription** is something a *running* cloud agent takes on (watch this PR/thread). `@cursor` mentions in Slack/Linear/GitHub start a one-shot Cloud Agent — those are not Automations (`cursor-slack-cloud-agents`, `cursor-linear-cloud-agents`, `cursor-github-cloud-agents`).

## Notes

- Create at cursor.com/automations, Agents Window, `/automate`, or a Marketplace template. The page also lists Cursor-managed Bugbot, Security Agents, and PR Routing — those have their own notes. Any listed trigger firing starts a run. Billing is cloud-agent usage at the model’s **max** context window (no toggle).
- Repo scope: **none** (Slack/MCP/webhooks/Linear/PagerDuty only — cannot edit code or open PRs), **single repo**, or **multi-repo** environment. Source-control triggers **require** a repo. Slack/cron default to no repo unless you set one.
- Source control (GitHub / GitLab / Bitbucket Cloud): core events are draft opened, PR opened/ready, PR pushed, merged, push-to-branch, top-level PR comment. GitHub also: PR/issue label, CI check completed, issue comment, inline review comment, review submitted, review thread resolved, Actions workflow completed. GitLab adds MR label + approved. Bitbucket Cloud adds approved only (no labels/inline comments; Server/Data Center unsupported). Fork PRs are rejected except **merged** (starts from the merge commit).
- Other triggers: Slack (public channels — new top-level message, emoji, channel created; keyword/regex required to fire on thread replies), webhook (URL + API key after save), Linear (issue created, status changed, end of cycle), Sentry (issue created/updated/any), PagerDuty (triggered/acknowledged/resolved/any).
- Connecting an MCP server grants **every tool** on that server. Memories persist across runs (`MEMORIES.md` by default) and can be poisoned by untrusted trigger text. Permission scope changes **identity**: Private / Team Visible run as the creator; Team Owned runs as the team automations service account — regenerate webhook keys and re-bind MCP OAuth after promoting. Computer use is on by default.

## Sources

- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-09-03
- [Cloud Agents and Cursor Harness Improvements (2026-08-19)](https://cursor.com/changelog/08-19-26) — accessed 2026-08-22
