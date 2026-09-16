---
id: cursor-microsoft-teams
title: Cursor Microsoft Teams — @Cursor Cloud Agents
tags: [cursor, automations, orchestration, ux]
status: active
updated: 2026-09-16
when_to_use: Starting or steering a Cloud Agent from Microsoft Teams, or contrasting @Cursor with Slack/Linear mentions
---

## Summary

Microsoft Teams **`@Cursor`** starts a **Cloud Agent** (plan → work → PR). That is not a saved **Automation** trigger (`cursor-automations`) and not Slack `@cursor` (`cursor-slack-cloud-agents`), though the mention-vs-automation split is the same. You still need a connected repo provider (GitHub, GitLab, Azure DevOps, or Bitbucket).

## Notes

- Install: Dashboard integrations → Microsoft Teams (or the Microsoft Marketplace listing) → install the Cursor app → connect a repo provider, usage-based pricing, privacy. Then mention `@Cursor` with a prompt. Cursor infers repo, model, base branch, or a **named environment** from the text, thread, and recent activity.
- Commands: `@Cursor [prompt]` starts a run, or **follow-up** in a channel thread that already has an agent. `@Cursor help`. `@Cursor unlink` / `disconnect` unbinds the account. Options (natural language or `key=value`): `repo`, `env`/`environment` (wins over `repo`), `branch`, `model`. Quote env names with spaces. Inline options beat inferred names; dashboard defaults apply when nothing is specified.
- Routing: explicit options → message content → recent agent activity → default repository. Launch card: Open in Web / Desktop, switch repository. Completions notify in Teams with a view-PR action. Personal/group chats continue via Open in Web or Desktop rather than thread follow-up.
- Privacy: Cloud Agents support Privacy Mode but **not** Legacy Privacy Mode (need temp code storage). “Display agent summary” can leak paths/snippets. Thread text is untrusted (`prompt-injection-agent-defense`).
- Permissions include identity, DM for setup, channel/chat message read, and team/channel metadata. Works in personal chats, team channels, and group chats.

## Sources

- [Microsoft Teams (Cursor docs)](https://cursor.com/docs/integrations/microsoft-teams) — accessed 2026-09-16
- [Slack (Cursor docs)](https://cursor.com/docs/integrations/slack.md) — accessed 2026-09-16
