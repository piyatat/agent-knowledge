---
id: cursor-projects
title: Cursor Projects — coordinator, shared context, subscriptions
tags: [cursor, orchestration, subagent, automations]
status: active
updated: 2026-10-25
when_to_use: Starting a Cursor Project for a multi-PR feature, migration, or standing “gardening” job instead of a single chat
---

## Summary

**Cursor Projects** (beta, rolling out) is a long-lived coordinator: you chat with one agent that **does not write code**. It plans, delegates to Cloud Agent workers, and brings finished work back for review. Shared files sync across every cloud and local machine the Project uses. Not a single Cloud Agent chat (`cursor-cloud-always-on`), not a saved Automation rule (`cursor-automations`), and not a parent `/in-cloud` subagent (`cursor-custom-subagents`).

## Notes

- Open **Projects** in the Agents Window left-hand nav → New Project (icon + name; empty name becomes “New Project”). Workspace is a repo already available to Cloud Agents (Connect GitHub if missing). Pick the coordinator model, then Create. **Premium+ / Teams / Enterprise / legacy paid** (Enterprise needs Cursor **3.21.9+**). Not on Free, Plus, or Hobby (no Cloud Agents). Unavailable with **Privacy Mode (Legacy)** — Projects store code in the cloud while they run.
- The coordinator stays responsive because it only delegates. Open any worker it starts to follow or talk to it. It can run more parallel workers than a laptop; when something must run on your machine, it spins up a **local** agent. Closing the laptop does not stop the Project computer. A coordinator can **switch a worker’s model** on the next turn when it messages that worker. Cloud Agents RN: a worker started with a **variant of the coordinator’s model** keeps the coordinator’s **context window** (does not jump to 1M); coordinators with **>1,000** workers list the newest.
- **Add / remove chats** (docs 2026-10): drag an eligible top-level Cloud Agent chat onto a Project row, or the chat’s sidebar **Add to Project**. A local chat, when the action is offered, is converted to **Remote Control** first (`cursor-remote-control`). Remove via the Agents-list menu.
- **@-mention messaging** (week of 2026-10-05): mention another agent to the coordinator and it can **read that transcript and send messages**. It can also message its **parent** coordinator; the receiver can reply. Access follows yours — only agents you mention **and** can still open. A coordinator message to a busy worker is delivered **into the current turn** by default. Subagent tool calls now **stream live** under the parent task instead of appearing only when the child finishes. A worker started on one **named** Self-Hosted Machine uses **that machine’s** repo/folder, not the Project repo (`cursor-self-hosted-pools`). Targeting a **pool** instead of one machine errors — name a machine.
- **Automatically allow Projects to place their work** (Cloud Agents **security** setting, admin-only): when **on**, Project agents may start on any self-hosted machine or pool the Project owner can reach without asking. When **off**, the coordinator asks in the Project chat before using a **new** machine or pool. Settings docs: **off for every team**. Web release notes (same week) said off for Enterprise and on for others, and also mentioned environments/repos — treat the settings page as current, and confirm the toggle on your team before assuming auto-placement.
- **Shared context** is a Project-owned file set (research, artifacts, how to test, how you prefer work). Agents append what they learn so later workers skip re-onboarding. Treat it as durable memory: untrusted Slack/PR text can poison it (`agent-memory-poisoning`).
- **Subscriptions**: ask the coordinator to watch a Slack channel, run on a schedule, or follow PRs (open, CI, merge). After the first one, a **Listening** pill lists events (channel message, PR activity, CI on a branch, daily cron). Remove a subscription from that list. Same event-family as cloud-agent subscriptions, but scoped to the Project.
- Best for work that outlives one chat (multi-PR features, migrations, jobs while you are away). Still review PRs; do not treat the coordinator as a merge gate. Cloud MCP / secrets / network follow Cloud Agent rules (`cursor-cloud-mcp-http-vs-stdio`, `cursor-cloud-secrets-network`).

## Sources

- [Projects (Cursor docs)](https://cursor.com/docs/agent/projects) — accessed 2026-10-25
- [Cloud Agents release notes](https://cursor.com/docs/release-notes/cloud-agents) — accessed 2026-10-25
- [Cloud Agents settings](https://cursor.com/docs/cloud-agent/settings) — accessed 2026-10-17
- [Cursor web release notes](https://cursor.com/docs/release-notes/web) — accessed 2026-10-17
- [Introducing Projects](https://cursor.com/blog/projects) — accessed 2026-10-09
- [Cursor changelog](https://cursor.com/changelog) — accessed 2026-10-09
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-13
- [Cloud Agent capabilities](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-09-13
