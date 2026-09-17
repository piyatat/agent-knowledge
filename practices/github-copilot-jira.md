---
id: github-copilot-jira
title: Copilot cloud agent from Jira — assign, @mention, automation
tags: [github, automations, orchestration, ux]
status: active
updated: 2026-09-17
when_to_use: Starting Copilot cloud agent from a Jira work item, or contrasting Jira assign vs Cursor `@Cursor` on Jira
---

## Summary

The **GitHub Copilot for Jira** app starts **Copilot cloud agent** from Jira Cloud (title, description, labels, comments, custom fields such as acceptance criteria). It is not Cursor `@Cursor` on Jira (`cursor-jira`), not Linear `@Cursor` (`cursor-linear-cloud-agents`), and not a GitHub-side Copilot Automation (`github-copilot-automations`). **Continue in Chat** updates the existing PR; a later `@GitHub Copilot` comment on the work item opens a **new** PR.

## Notes

- Prerequisites: paid Copilot plan; Jira Cloud with AI enabled and **Rovo** on. Jira site admin + GitHub org owner/App manager install both the Atlassian Forge app and the GitHub App (GitHub.com Marketplace, or GHE.com via the Data Residency listing). Users with **write** on the target repo can trigger. First use links the personal GitHub account.
- Triggers: assign **GitHub Copilot** on the work item, mention `@GitHub Copilot` in a comment, or Jira Automation **Use GitHub Copilot**. Name the repo in the description/comment (`@GitHub Copilot … in octo-org/octorepo`). Activity streams into the Jira chat panel with a link to the GitHub session. If nothing appears in ~1 minute, refresh.
- Customization: model name and custom agent in the ticket text; workspace-level custom instructions (default repo, etc.) so the agent does not pause mid-run. Cost is Actions minutes + AI credits (`github-copilot-coding-agent`).
- Assigning Copilot copies Jira context onto the PR — **visible to everyone if the repo is public**. SSO orgs may need an active SAML session, including after adding a new org to the app. Work-item text is untrusted (`prompt-injection-agent-defense`).

## Sources

- [Integrating Copilot cloud agent with Jira](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-jira) — accessed 2026-09-16
- [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) — accessed 2026-09-16
