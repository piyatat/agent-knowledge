---
id: github-copilot-slack-teams
title: Copilot cloud agent in Slack and Microsoft Teams
tags: [github, slack, orchestration, automations]
status: active
updated: 2026-09-26
when_to_use: Starting or steering a Copilot cloud agent from Slack or Microsoft Teams, or contrasting it with Cursor @cursor
---

## Summary

**`@GitHub` in Slack or Microsoft Teams** (public preview) starts a **Copilot cloud agent** session from chat. Work continues in a GitHub-hosted **cloud sandbox**; the thread is the decision context. Not Cursor Slack/Teams (`cursor-slack-cloud-agents`, `cursor-microsoft-teams`) and not the Actions-assigned issue flow you start on github.com (`github-copilot-coding-agent`).

## Notes

- Prerequisites: paid Copilot (Business/Enterprise for the Slack/Teams preview), cloud-agent **and** cloud-sandbox policies on, GitHub Slack/Teams app installed, account linked. Write access on the target repo is required to mutate; others can still add thread context. Guests / outside collaborators cannot start or steer. Enterprise-owned repos need the Slack/Teams GitHub App installed with an explicit repo allowlist.
- Identity: **DM** acts as the linked user (issues/PRs under that account). **Channel/thread** creates artifacts as the Copilot **app identity**. If the repo already requires ≥1 approval, rulesets add **one extra** approval for those app-authored PRs (default on). The **entire thread** is captured into generated artifacts — use a DM or a new thread to limit context (`prompt-injection-agent-defense`).
- Slack: Copilot opens a dedicated **Slack Code** channel (one session per channel; archive when done; history stays searchable). `@GitHub settings` sets a **shared** channel default repo (not available in DMs; first session can set it). 2026-09-25: Slack files/attachments/message links as context; per-conversation model stickiness; Slack channel default owners/repos; safer repo switching so a superseded session cannot keep writing to the old repo.
- Teams: mention `@GitHub` (Public Developer Preview client). 2026-09-25: inline images, forwarded-message context, channel/thread history; similar-issue check before creating an issue; links back to the originating conversation. Usage is Copilot cloud-agent credits; sandbox compute is billed separately.

## Sources

- [Integrating Copilot cloud agent with Slack](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-slack) — accessed 2026-09-26
- [Updates to GitHub Copilot for Slack and Microsoft Teams](https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams/) — accessed 2026-09-26
- [The new GitHub Copilot experience in Slack](https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/) — accessed 2026-09-26
- [Shared agentic work with GitHub Copilot in Microsoft Teams](https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams/) — accessed 2026-09-26
