---
id: cursor-jira
title: Cursor Jira — assign or @Cursor Cloud Agents
tags: [cursor, automations, orchestration, ux]
status: active
updated: 2026-09-17
when_to_use: Starting a Cloud Agent from a Jira work item, or contrasting Cursor Jira with Copilot-for-Jira
---

## Summary

Cursor’s **Jira** app starts a **Cloud Agent** when you assign the work item to Cursor or mention `@Cursor`. Teams/Enterprise only; Jira Commercial Cloud with **Rovo**. This is not a saved Automation (`cursor-automations`), not Linear `@Cursor` (`cursor-linear-cloud-agents`), and not GitHub Copilot for Jira (`github-copilot-jira`).

## Notes

- Install: Cursor admin → Integrations → Jira → Atlassian Marketplace app → Connect to Cursor. Need a repo provider (GitHub / GitLab / Azure DevOps / Bitbucket), usage-based pricing, and privacy. **Not** Atlassian HIPAA, FedRAMP, or Government Cloud. Privacy Mode (Legacy) is unsupported.
- Auth: **service account** uses only team Cloud Agent settings; **Require individual authentication** runs as each user (their routing/model/repo defaults; agents appear on their dashboard). First user-level kickoff prompts account linking.
- Use: assign Cursor, or `@Cursor` with `repo=owner/repo`, `branch=…`, `model=…`. Follow-up is **Rovo chat** on the work item (or the Cloud Agent in Cursor). Status + PR links post back on the ticket.
- Repo resolution: explicit `repo`/`branch`/`model` → names/keywords in the ticket → Dashboard **routing rules** (keyword → repo) → recent agent activity → default repo. Service/user account must have repo access or launch fails. Ticket text is untrusted (`prompt-injection-agent-defense`).

## Sources

- [Jira (Cursor docs)](https://cursor.com/docs/integrations/jira) — accessed 2026-09-17
- [Linear (Cursor docs)](https://cursor.com/docs/integrations/linear) — accessed 2026-09-17
