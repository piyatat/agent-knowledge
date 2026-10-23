---
id: github-copilot-slack-teams
title: Copilot cloud agent in Slack and Microsoft Teams
tags: [github, slack, orchestration, automations]
status: active
updated: 2026-10-23
when_to_use: Starting or steering a Copilot cloud agent from Slack or Microsoft Teams, or installing the consolidated GitHub Teams app
---

## Summary

**`@GitHub` in Slack or Microsoft Teams** (public preview) starts a **Copilot cloud agent** session from chat. Work continues in a GitHub-hosted **cloud sandbox**; the thread is the decision context. Not Cursor Slack/Teams (`cursor-slack-cloud-agents`, `cursor-microsoft-teams`) and not the Actions-assigned issue flow you start on github.com (`github-copilot-coding-agent`).

## Notes

- Prerequisites: paid Copilot (Business/Enterprise for the Slack/Teams preview), cloud-agent **and** cloud-sandbox policies on, GitHub Slack/Teams app installed, account linked. Write access on the target repo is required to mutate; others can still add thread context. Guests / outside collaborators cannot start or steer. Enterprise-owned repos need the Slack/Teams GitHub App installed with an explicit repo allowlist.
- Identity: **DM** acts as the linked user (issues/PRs under that account). **Channel/thread** creates artifacts as the Copilot **app identity**. If the repo already requires ≥1 approval, rulesets add **one extra** approval for those app-authored PRs (default on). The **entire thread** is captured into generated artifacts — use a DM or a new thread to limit context (`prompt-injection-agent-defense`).
- Slack: Copilot opens a dedicated **Slack Code** channel (one session per channel; archive when done; history stays searchable). `@GitHub settings` sets a **shared** channel default repo (not available in DMs; first session can set it). 2026-09-25: Slack files/attachments/message links as context; per-conversation model stickiness; Slack channel default owners/repos; safer repo switching so a superseded session cannot keep writing to the old repo.
- Teams: mention `@GitHub` (Public Developer Preview client still required). 2026-09-25: inline images, forwarded-message context, channel/thread history; similar-issue check before creating an issue; links back to the originating conversation. Usage is Copilot cloud-agent credits; sandbox compute is billed separately.
- 2026-10-15: **multi-repo in one conversation** — create issues, open PRs, list your open PRs, or investigate using frontend + backend without switching threads. Mention `@GitHub` **anywhere** in the message (not only at the start). Smoother mid-thread repo switching; Slack shared messages/threads as context; reliability fixes for task startup and interruption recovery. Still one cloud-agent session — do not treat multi-repo as a sandbox boundary (`prompt-injection-agent-defense`).
- 2026-10-23: Microsoft Teams **consolidates** GitHub Notifications + Copilot into one **GitHub** app. Reply **on the notification thread** with `@GitHub` — Copilot uses the linked issue/PR plus thread text (investigate, tests, draft PR). Notifications themselves need **no** Copilot license. Copilot actions still need a **paid** plan, cloud-agent **and** cloud-sandbox policies, and an admin-enabled tenant. If GitHub Notifications is already installed, **update** it (capabilities stay). The **legacy** GitHub app is renamed “GitHub (deprecated)” and **retires 2026-11-16** — install the consolidated app and reconnect `@GitHub`. Mid-Oct → mid-Nov rollout (MC1515929).

## Sources

- [Turn notifications into code with GitHub Copilot in Teams](https://github.blog/changelog/2026-10-23-turn-notifications-into-code-with-github-copilot-in-teams/) — accessed 2026-10-23
- [Integrating GitHub with Teams](https://docs.github.com/en/integrations/how-tos/teams/integrate-github-with-teams) — accessed 2026-10-23
- [Integrating Copilot cloud agent with Teams](https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams) — accessed 2026-10-23
- [Integrating Copilot cloud agent with Slack](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-slack) — accessed 2026-09-26
- [Multi-repo support for Copilot in Slack and Teams](https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates/) — accessed 2026-10-16
- [Updates to GitHub Copilot for Slack and Microsoft Teams](https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams/) — accessed 2026-09-26
- [The new GitHub Copilot experience in Slack](https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/) — accessed 2026-09-26
- [Shared agentic work with GitHub Copilot in Microsoft Teams](https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams/) — accessed 2026-09-26
