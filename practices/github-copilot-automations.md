---
id: github-copilot-automations
title: Copilot cloud-agent automations — schedule and repo events
tags: [github, automations, orchestration, cron]
status: active
updated: 2026-09-13
when_to_use: Creating a Copilot cloud-agent automation for schedule/issue/PR events, or contrasting it with Cursor Automations
---

## Summary

A **Copilot automation** is a saved prompt + triggers + tools + model that starts a **cloud agent** session without you assigning the task each time. Private/internal repos only. Not IDE agent mode, not Cursor Automations (`cursor-automations`), and not a one-shot “assign Copilot” session (`github-copilot-coding-agent`). Definitions are **not** committed to git.

## Notes

- Create from the repo **Agents → Automations** pane or the Copilot app Automations tab. Write access required. Plans: Pro / Pro+ / Max / Business / Enterprise. Org must allow cloud agent **and** automations (both default on). Public repos: unavailable.
- Triggers: hourly/daily/weekly schedule; issue created; PR opened; PR synchronized. Optional search-query filters; PR triggers can also filter by files changed. **Run now** tests without waiting. Default: ignore events from users **without write** (prompt-injection). Org/repo can opt in to untrusted authors — treat that as high risk.
- Tools are the privilege boundary (push, labels, open PR, …). Suggest-tools is optional. One repo per automation. Issue edits can include rationale/confidence (auto-apply high-confidence). Inherits repo instructions, skills, firewall, and **repository secrets** — never put secrets in the prompt. Sessions + logs are visible to anyone with repo read; the automation record itself is **private to the creator**.
- Billing: each run = Actions minutes + AI credits, billed to the **creator**. PRs/pushes are attributed to that user (they cannot approve their own). Actions workflows on those PRs still wait for write-access approval.
- Contrast: Cursor Automations are standing Cloud Agent rules (multi-repo, Slack/Linear/webhooks). Copilot automations stay on one GitHub repo and GitHub events. See also GitHub Agentic Workflows if you need the definition in-repo and reviewable.

## Sources

- [About Copilot automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations) — accessed 2026-09-13
- [Creating automations with Copilot cloud agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations) — accessed 2026-09-13
- [Managing access to GitHub Copilot cloud agent](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/access-management) — accessed 2026-09-13
- [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) — accessed 2026-09-13
