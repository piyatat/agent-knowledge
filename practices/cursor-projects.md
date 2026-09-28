---
id: cursor-projects
title: Cursor Projects — coordinator, shared context, subscriptions
tags: [cursor, orchestration, subagent, automations]
status: active
updated: 2026-09-28
when_to_use: Starting a Cursor Project for a multi-PR feature, migration, or standing “gardening” job instead of a single chat
---

## Summary

**Cursor Projects** (beta, rolling out) is a long-lived coordinator: you chat with one agent that **does not write code**. It plans, delegates to Cloud Agent workers, and brings finished work back for review. Shared files sync across every cloud and local machine the Project uses. Not a single Cloud Agent chat (`cursor-cloud-always-on`), not a saved Automation rule (`cursor-automations`), and not a parent `/in-cloud` subagent (`cursor-custom-subagents`).

## Notes

- Open **Projects** in the Agents Window left-hand nav → New Project (icon + name; empty name becomes “New Project”). Workspace is a repo already available to Cloud Agents (Connect GitHub if missing). Pick the coordinator model, then Create. Docs: **not on Enterprise plans**. Also unavailable with **Privacy Mode (Legacy)** — Projects store code in the cloud while they run.
- The coordinator stays responsive because it only delegates. Open any worker it starts to follow or talk to it. It can run more parallel workers than a laptop; when something must run on your machine, it spins up a **local** agent. Closing the laptop does not stop the Project computer.
- **Shared context** is a Project-owned file set (research, artifacts, how to test, how you prefer work). Agents append what they learn so later workers skip re-onboarding. Treat it as durable memory: untrusted Slack/PR text can poison it (`agent-memory-poisoning`).
- **Subscriptions**: ask the coordinator to watch a Slack channel, run on a schedule, or follow PRs (open, CI, merge). After the first one, a **Listening** pill lists events (channel message, PR activity, CI on a branch, daily cron). Remove a subscription from that list. Same event-family as cloud-agent subscriptions, but scoped to the Project.
- Best for work that outlives one chat (multi-PR features, migrations, jobs while you are away). Still review PRs; do not treat the coordinator as a merge gate. Cloud MCP / secrets / network follow Cloud Agent rules (`cursor-cloud-mcp-http-vs-stdio`, `cursor-cloud-secrets-network`).

## Sources

- [Projects (Cursor docs)](https://cursor.com/docs/agent/projects) — accessed 2026-09-28
- [Introducing Projects](https://cursor.com/blog/projects) — accessed 2026-09-28
- [Cursor changelog](https://cursor.com/changelog) — accessed 2026-09-28
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-13
- [Cloud Agent capabilities](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-09-13
