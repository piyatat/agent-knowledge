---
id: github-copilot-automations
title: Copilot automations — personal vs shared cloud-agent workflows
tags: [github, automations, orchestration, cron]
status: active
updated: 2026-10-30
when_to_use: Creating a personal or shared Copilot automation, or contrasting it with VS Code local automations / Agentic Workflows
---

## Summary

A **Copilot automation** is a saved prompt + type + triggers + tools + optional model / AI-credit caps that starts a **cloud agent** session without you assigning the task. Private/internal repos only. **Personal** vs **shared** is chosen at create time and **cannot** change later. Not IDE agent mode, not Cursor Automations (`cursor-automations`), not a one-shot assign (`github-copilot-coding-agent`), and not a committed `.md` + lockfile (`github-agentic-workflows`). Definitions are **not** in git.

## Notes

- Create from repo **Agents → Automations**, Copilot app Automations tab, VS Code Agents window (1.144+, `chat.automations.cloud.enabled`), or REST. Write access required. Plans: Pro / Pro+ / Max / Business / Enterprise. Org must allow cloud agent **and** automations (both default on). Public repos: unavailable.
- **Personal:** only you see/edit the definition; runs act as **you** and bill **your** AI credits. **Shared** (rolling out 2026-10-28): anyone with repo **read** sees it; **write** can edit; AI credits bill the **repo owner** (org or user); GitHub actions are attributed to **Copilot**; extra required approval on PRs it opens unless a ruleset disables that (branch-protection rules cannot). Shared keeps running if the creator leaves. Org-owned shared runs need **Allow use of Copilot cloud agent billed to the organization**. Sessions + logs are visible to repo readers for **both** types.
- Triggers: hourly/daily/weekly; issue created; PR opened; PR synchronized; plus a wider event catalog (and API start with extra prompt context). Optional search-query / files-changed / label / assignee filters. Default: ignore events from users **without write**. Org/repo can opt in to untrusted authors — high risk. Shared can also ignore events from Copilot in the cloud.
- Tools are the privilege boundary. GitHub tools stay in **this** repo (push, labels, discussions, hide comments, reactions, …). MCP tools use repo MCP settings **and** can reach whatever that server’s credentials allow — review before enabling. Connectors can feed scheduled work in the Copilot app (`github-copilot-connectors`). Suggest-tools is optional. Inherits repo instructions, skills, firewall, secrets — never put secrets in the prompt.
- Optional AI-credit caps: per-run (min 30), daily (00:00 UTC), weekly (Monday 00:00 UTC), monthly (1st 00:00 UTC). Daily/weekly/monthly do **not** stop an in-flight run. Automations can propose tool/trigger/prompt improvements (including across a group); you apply or dismiss. Contrast: VS Code **local** automations need the machine up (`vscode-agent-automations`).

## Sources

- [Copilot automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations) — accessed 2026-10-30
- [Creating automations with Copilot cloud agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations) — accessed 2026-10-30
- [Build shared workflows for your team with Copilot Automations](https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations/) — accessed 2026-10-30
- [Create and manage Copilot Automations in Visual Studio Code](https://github.blog/changelog/2026-10-28-create-and-manage-copilot-automations-in-visual-studio-code/) — accessed 2026-10-30
- [About GitHub Agentic Workflows](https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows) — accessed 2026-10-30
