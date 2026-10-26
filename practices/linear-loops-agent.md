---
id: linear-loops-agent
title: Linear Loops — scheduled and event-triggered Linear Agent
tags: [linear, automations, mcp, orchestration]
status: active
updated: 2026-10-26
when_to_use: Automating Linear Agent on a schedule or Slack/GitHub/issue event, or contrasting Loops with Cursor @Cursor mentions
---

## Summary

A **Linear Loop** is a saved Linear Agent workflow that runs in the background on a **schedule** or a supported **issue / project / initiative / cycle / release / pull-request / Slack** event. Paid plans; runs draw **workspace AI credits**. Not a Cursor `@Cursor` Cloud Agent (`cursor-linear-cloud-agents`) and not a Cursor Automation Linear trigger (`cursor-automations`).

## Notes

- Create from sidebar **Loops**, a team Loops tab, a template, a prompt, or by iterating in Linear Agent chat (⌘/Ctrl+J) then asking Linear to save the loop. Configure trigger, instructions, MCP connectors, and **Capabilities & access** (team scope, reasoning, web, code, external sources). Caps: 100 loops/team, 500 workspace-level, 100 unpublished drafts/person, 8 conditions/loop.
- **Reasoning** (2026-10-22): **Auto** (workspace default), **Low**, **Medium**, **High**. Higher costs more. **Workspace templates** (same changelog): Save as template copies instructions/trigger/settings, not owner, enabled state, team access, trusted sources, or connector auth. Slack/chat, pull-request, and webhook triggers cannot be saved as templates. Owners gate who can manage loops and templates.
- **GitHub PR triggers** need the Linear GitHub integration plus Settings → Loops → **Allow loops to access code**. Personal GitHub access is not enough. Events include create, ready for review, status (including Merged), reviewers, labels, pushes, checks, reviews, comments. Merged is a PR status change, not a deploy. **Run now** is unavailable for PR triggers. Access code: Disabled / Read / Read & write (write needs coding sessions enabled).
- **Slack message triggers**: new **top-level** messages in selected **public** channels only. No private channels, DMs, thread replies, edits, guest posts, Linear/Asks posts, or bot mentions. Admin must enable Linear Agent + Allow Loops access on the Slack workspace. Shared Slack connection (not a personal Slack MCP) for posting; personal Slack MCP is for individual auth. Loop Slack posts link back to the run.
- MCP connectors are workspace-scoped; Enterprise owners / Business admins can allowlist servers. Per-loop **Manage tools…** plus optional auto-approve. Web access can send workspace content off-Linear — leave it off for sensitive loops. Treat trigger text (Slack/GitHub/issues) as untrusted (`prompt-injection-agent-defense`). Out of credits → loops pause unless auto top-up is on.

## Sources

- [Loops](https://linear.app/docs/loops) — accessed 2026-10-26
- [Linear Agent](https://linear.app/docs/linear-agent) — accessed 2026-10-26
- [More ways to run and share Loops](https://linear.app/changelog/2026-10-22-slack-and-github-loops) — accessed 2026-10-26
- [GitHub (Linear)](https://linear.app/docs/github) — accessed 2026-10-26
