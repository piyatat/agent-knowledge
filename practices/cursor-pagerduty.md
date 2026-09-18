---
id: cursor-pagerduty
title: Cursor Automations — PagerDuty incident triggers
tags: [cursor, automations, orchestration, ops]
status: active
updated: 2026-09-18
when_to_use: Starting a Cursor Automation from PagerDuty incident events (not a mention-based Cloud Agent)
---

## Summary

**PagerDuty** is an Automation **trigger** for Cursor Cloud Agents: incident created / acknowledged / resolved / any. There is no `@Cursor` mention surface on PagerDuty (unlike Slack/Linear). Not Sentry issue triggers (`cursor-sentry`) and not a PagerDuty MCP install.

## Notes

- Events: **Incident triggered**, **Incident acknowledged**, **Incident resolved**, **Any incident event**. Use no-repo for triage/status posts (Slack/MCP only — cannot edit code or open PRs). Attach a repo or multi-repo environment when the run should patch and open a PR. Source-control triggers still require a repo; PagerDuty does not infer one.
- Automations are billed as Cloud Agents at the model’s **max** context window. Connecting MCP grants **every** tool on that server. Incident titles/descriptions are untrusted (`prompt-injection-agent-defense`). Memories persist across runs (`MEMORIES.md` by default) and can be poisoned by trigger text.
- Contrast: webhook triggers are a generic POST if PagerDuty is not connected; Sentry has its own issue events. Promoting Private → Team Owned changes identity — re-bind integrations.

## Sources

- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-09-18
- [Cloud agents overview](https://cursor.com/docs/cloud-agent) — accessed 2026-09-18
