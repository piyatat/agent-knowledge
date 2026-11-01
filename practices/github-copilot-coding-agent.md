---
id: github-copilot-coding-agent
title: GitHub Copilot cloud agent — Actions-hosted coding
tags: [github, orchestration, ci, agents-md]
status: active
updated: 2026-11-01
when_to_use: Assigning Copilot a background coding task on GitHub, or choosing Cloud sandbox vs Actions
---

## Summary

**Copilot cloud agent** (docs still say “coding agent” in older posts) researches a GitHub-hosted repo, plans, edits on a branch, and can open **one PR** per session. **2026-10-28:** where the client offers a choice, the default runtime is a **cloud sandbox** (`github-copilot-sandbox`); pick **Actions** when you need setup steps, larger/self-hosted runners, or Windows. It is not IDE agent mode, not Cursor `@cursor` (`cursor-github-cloud-agents`), and not `openai/codex-action`.

## Notes

- Start from GitHub.com Agents UI, issue assignee **Copilot**, `@copilot` on a PR, VS Code / JetBrains / CLI / Mobile, REST API, GitHub MCP, Slack/Teams, or automations (schedule / issue events). Deep research/plan-before-PR is GitHub.com (and Slack/Teams); Jira/Linear/Azure Boards entry points open a PR directly. Sessions can resume across web, Mobile, app, VS Code, and CLI.
- Knowledge: repo `AGENTS.md` (root + nested), `.github/copilot-instructions.md`, org instructions, plus **Copilot Memory** (GA — facts + initiator prefs; `github-copilot-memory`). Semantic code search is automatic (`github-copilot-code-search`). Custom agents, MCP (repo settings; GitHub + Playwright on by default), hooks, and skills customize the run. Cloud agent vs CLI custom-agent files: `.github/agents` vs `~/.copilot/agents`.
- Limits: one repo, one branch, one PR per **Actions** coding-agent task; cloud-sandbox sessions may attach **multiple repos with the same owner**. Default MCP context is that repo unless repo MCP settings widen it. Incompatible rulesets/branch protection (e.g. author allowlists) block the agent unless Copilot is a bypass actor. Paid Copilot plans; Business/Enterprise need the policy enabled; repo owners can opt out.
- Cost: model AI credits plus either **Actions minutes** (59-minute hard cap; `copilot-setup-steps.yml` can shorten `timeout-minutes` but cannot exceed 59) or **cloud-sandbox** compute/memory/storage from the shared included-compute pool (billing from November 2026). Contrast `claude-code-github-action` and Codex cloud (`openai-codex-cloud-environments`).
- Issue/comment text is untrusted (`prompt-injection-agent-defense`). Do not treat the agent as a merge gate.

## Sources

- [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) — accessed 2026-11-01
- [About cloud sandboxes for GitHub Copilot](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes) — accessed 2026-11-01
- [Work from anywhere with a new, connected Copilot cloud experience](https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/) — accessed 2026-11-01
- [GitHub Copilot cloud agent how-tos](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent) — accessed 2026-09-04
- [Invoking custom agents](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents) — accessed 2026-09-04
- [About GitHub Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory) — accessed 2026-11-01

