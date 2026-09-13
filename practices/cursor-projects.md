---
id: cursor-projects
title: Cursor Projects — coordinator, shared context, subscriptions
tags: [cursor, orchestration, subagent, automations]
status: active
updated: 2026-09-13
when_to_use: Starting a Cursor Project for a multi-PR feature, migration, or standing “gardening” job instead of a single chat
---

## Summary

**Cursor Projects** (beta, 2026-09-10) is a long-lived coordinator: you chat with one agent that **does not write code**. It plans, delegates to Cloud Agent workers, and brings finished work back for review. Shared files sync across every cloud and local machine the Project uses. Not a single Cloud Agent chat (`cursor-cloud-always-on`), not a saved Automation rule (`cursor-automations`), and not a parent `/in-cloud` subagent (`cursor-custom-subagents`).

## Notes

- Open from the left-hand nav. The coordinator stays responsive because it only delegates. It can run more parallel workers than a laptop; when something must run on your machine, it spins up a **local** agent. Closing the laptop does not stop the Project computer.
- **Shared context** is a Project-owned file set (research, artifacts, how to test, how you prefer work). Agents append what they learn so later workers skip re-onboarding. Treat it as durable memory: untrusted Slack/PR text can poison it (`agent-memory-poisoning`).
- **Subscriptions** on the coordinator: watch a Slack channel, run on a schedule, or follow PRs (open, CI, merge) and act without a new prompt. Same event-family as cloud-agent subscriptions, but scoped to the Project rather than one conversation.
- Documented patterns: **feature** (research → plan → parallel implement/test → optional local try → post-ship log/bug follow-up); **migration** (agree a safe approach, apply incrementally, review tightly at first then less); **gardening** (never-done quality/regression work — e.g. scan every PR for design-system drift).
- Best for work that outlives one chat (multi-PR features, migrations, jobs while you are away). Still review PRs; do not treat the coordinator as a merge gate. Cloud MCP / secrets / network follow Cloud Agent rules (`cursor-cloud-mcp-http-vs-stdio`, `cursor-cloud-secrets-network`).

## Sources

- [Introducing Projects](https://cursor.com/blog/projects) — accessed 2026-09-13
- [Cursor Projects changelog](https://cursor.com/changelog/projects) — accessed 2026-09-13
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-13
- [Cloud Agent capabilities](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-09-13
