---
id: github-copilot-agent-merge
title: Agent Merge — watch a PR and fix CI or conflicts
tags: [github, review, orchestration, ux]
status: active
updated: 2026-10-30
when_to_use: Enabling Watch and fix on a GitHub PR, or contrasting cloud Agent Merge with the VS Code / Copilot app loop
---

## Summary

**Agent Merge** watches a pull request and starts work when a blocker you chose appears. On github.com (2026-10-28) the merge-box **Watch and fix** control can allow **fix failed Actions workflows**, **resolve merge conflicts**, or both. Fixes run in an **Actions-hosted** cloud environment (not a cloud sandbox). It does **not** merge unless you also enable GitHub auto-merge. Not Copilot code review (`github-copilot-code-review`) and not assigning the whole task to cloud agent (`github-copilot-coding-agent`).

## Notes

- github.com: paid Copilot plan; org/enterprise must allow Copilot in the cloud; repo **Enable automations** must be on. **Unsupported:** forks and stacked PRs. Per-PR: merge box → Watch and fix → pick actions. Default-on: Settings → Copilot → Cloud → **Enable Agent Merge automatically for pull requests I create**, then the same two switches. Disable: **Unassign Copilot**. REST: `GET/PUT/DELETE /agents/repos/{owner}/{repo}/pulls/{pull_number}/agent-merge` with `allowed_actions`: `fix_ci` and/or `resolve_merge_conflicts`. Only the user who last enabled it can change allowed actions. Write access required.
- When a selected blocker appears, Copilot starts in an Actions-based environment and posts a timeline event (failed workflow vs conflict). Uses the same customizations as other Actions-hosted Copilot tasks: `copilot-setup-steps.yml`, repo instructions, repo skills. AI credits bill the **enabler**, not necessarily the PR author. Combine with auto-merge if you want GitHub to merge once reviews and checks pass — Agent Merge does not turn auto-merge on.
- Copilot app / VS Code still have a **session** Agent Merge loop (review comments → CI → conflicts → rerun) that does not merge for you. VS Code: `chat.agentMerge.enabled`, per-session **Enable Agent Merge for Active Session**. Distinct from Agents-window **Merge** on a worktree (merge the agent branch into your workspace).
- Always read the resulting diff and re-check workflows. Do not treat Agent Merge as a merge gate. Required reviewers, CODEOWNERS, and status checks still apply.

## Sources

- [Getting pull requests ready to merge with Agent Merge](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/watch-and-fix-pull-requests) — accessed 2026-10-30
- [REST API endpoints for Agent Merge](https://docs.github.com/en/rest/pulls/agent-merge) — accessed 2026-10-30
- [Agent Merge watches and fixes pull requests in the cloud](https://github.blog/changelog/2026-10-28-agent-merge-watches-and-fixes-pull-requests-in-the-cloud/) — accessed 2026-10-30
- [Visual Studio Code 1.136 — Agent Merge](https://code.visualstudio.com/updates/v1_136) — accessed 2026-10-30
