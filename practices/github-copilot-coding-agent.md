---
id: github-copilot-coding-agent
title: GitHub Copilot cloud agent — Actions-hosted coding
tags: [github, orchestration, ci, agents-md]
status: active
updated: 2026-09-04
when_to_use: Assigning Copilot a background coding task on GitHub, or contrasting it with Cursor/Claude/Codex cloud agents
---

## Summary

**Copilot cloud agent** (docs still say “coding agent” in older posts) researches a **single GitHub-hosted repo**, plans, edits on a branch, and can open **one PR** per session. Execution is an ephemeral **GitHub Actions** environment (hard cap **59 minutes**). It is not IDE agent mode, not Cursor `@cursor` (`cursor-github-cloud-agents`), and not `openai/codex-action`.

## Notes

- Start from GitHub.com Agents UI, issue assignee **Copilot**, `@copilot` on a PR, VS Code / JetBrains / CLI / Mobile, REST API, GitHub MCP, Slack/Teams, or automations (schedule / issue events). Deep research/plan-before-PR is GitHub.com (and Slack/Teams preview); Jira/Linear/Azure Boards entry points open a PR directly.
- Knowledge: repo `AGENTS.md` (root + nested), `.github/copilot-instructions.md`, org instructions, plus optional Copilot Memory (Pro/Pro+/Max preview). Custom agents, MCP (repo settings; GitHub + Playwright on by default), hooks, and skills customize the run. Cloud agent vs CLI custom-agent files: `.github/agents` vs `~/.copilot/agents`.
- Limits: one repo, one branch, one PR per task; default MCP context is that repo unless repo MCP settings widen it. Incompatible rulesets/branch protection (e.g. author allowlists) block the agent unless Copilot is a bypass actor. Paid Copilot plans; Business/Enterprise need the policy enabled; repo owners can opt out.
- Cost: Actions minutes + model AI credits. `copilot-setup-steps.yml` can shorten `timeout-minutes` but cannot exceed 59. Contrast `claude-code-github-action` (runner you configure) and Codex cloud (`openai-codex-cloud-environments`).
- Issue/comment text is untrusted (`prompt-injection-agent-defense`). Do not treat the agent as a merge gate.

## Sources

- [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) — accessed 2026-09-04
- [GitHub Copilot cloud agent how-tos](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent) — accessed 2026-09-04
- [Invoking custom agents](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents) — accessed 2026-09-04
- [Copilot coding agent AGENTS.md](https://github.blog/changelog/2025-08-28-copilot-coding-agent-now-supports-agents-md-custom-instructions/) — accessed 2026-09-04
