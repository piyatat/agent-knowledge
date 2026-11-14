---
id: coderabbit-review
title: CodeRabbit — hosted pull-request review
kind: service
tags: [review, github, gitlab, ci]
status: active
updated: 2026-11-14
when_to_use: Adding a hosted pull-request reviewer on GitHub, GitLab, Bitbucket, or Azure DevOps
---

## Summary

**CodeRabbit** is a hosted reviewer that comments on pull requests and merge requests (summary, findings, one-click fixes) and can approve when you opt in. It is not GitHub Copilot code review (`github-copilot-code-review`), Cursor Bugbot (`cursor-bugbot-review`), or Codex `/review` (`openai-codex-review`). **CodeRabbit Agent** (Slack/Discord investigate-and-open-a-PR) is a separate on-demand product.

## Notes

- **Access:** sign in at coderabbit.ai with the git host account, connect the org (you need permission to install apps / own the org), and grant the repos. GitHub uses the CodeRabbit GitHub App. GitLab.com: project **Owner or Maintainer** can install selected projects; a **group Owner** can cover the group and later repos. Allow `coderabbit.ai` on GitLab. Self-managed GitLab, GitHub Enterprise Server, and Bitbucket Data Center can connect without inbound access. Bitbucket Cloud and Azure DevOps have their own install guides. Default config starts reviewing as soon as the app is on the repo.
- **Auth:** the git-host login is the admin path. Reviews run as the CodeRabbit bot. GitLab group access tokens used for the integration require **Premium or Ultimate**. A project install does not by itself restrict which repos the review token can see.
- **Config:** repo-root **`.coderabbit.yaml`**. Omitting `version`, or `version: 2`, is configuration V2. Chat commands use `@coderabbitai` (`review`, `full review`, `pause`, `resume`, `approve`, `help`). `approve` resolves CodeRabbit threads and, only with Automatic Approvals on, can approve.
- **Pricing (docs, 2026-11-14):** Free needs no card (unlimited public and private repos). The plan text limits Git reviews to **summarization** and sends code review to the **VS Code extension and CLI**; the rate table still lists **1 PR / 3 IDE / 3 CLI** reviews per developer per hour and **150** files per review. New orgs get a **14-day Advanced** trial. **OSS** public repos get Team features; the hourly cap varies with project popularity. **Essentials** $24/dev/month annual ($30 monthly): PR reviews, knowledge base, linters/SAST, fixes. **Team** $48 ($60): plus triage, plan, unit tests, merge-conflict resolution, CI fixer. **Advanced** $72 ($90): plus continuous PR security review. **Enterprise:** sales; adds self-host, SSO, API, custom RBAC, audit logs. Deep Scan and CodeRabbit Agent are usage-priced. Public repos under **10 stars** need a manual `@coderabbitai review` (or the status-comment button).
- **Approvals:** **off by default**. Turn on with `reviews.auto_approvals.enabled` (legacy alias `reviews.request_changes_workflow` — do not set both differently). An approval is **one** git-host approval. It does not merge, and it does not satisfy required checks or code owners. With a single required approval, the PR **author’s** `@coderabbitai approve` can pass **without** a finished review of the latest commit or passing pre-merge checks, unless `allow_author_approval: false`. Path or team overrides can withhold approval; that withhold does **not** block merge unless the host requires CodeRabbit’s review. Dismiss stale approvals after you turn the feature off.
- **Alternatives:** Copilot review when you already pay for Copilot and want GitHub-native effort levels. Bugbot when the repo is on Cursor Automations. Codex `codex review` for a local or CI diff with no bot install.
- **Caveats:** incremental reviews after each push spend the hourly PR allowance. Reviews over **300** files are outside usage-priced overflow. MCP connections cap by plan (5 / 10 / 15 / 20 on Essentials through Enterprise).

## Sources

- [Platform overview](https://docs.coderabbit.ai/platforms/overview) — accessed 2026-11-14
- [Plans and pricing](https://docs.coderabbit.ai/management/plans) — accessed 2026-11-14
- [Configuration V2 reference](https://docs.coderabbit.ai/reference/configuration) — accessed 2026-11-14
- [Automatic Approvals](https://docs.coderabbit.ai/pr-reviews/automatic-approvals) — accessed 2026-11-14
- [Choose an approval policy](https://docs.coderabbit.ai/pr-reviews/approval-policies) — accessed 2026-11-14
- [Pull request reviews](https://docs.coderabbit.ai/overview/pull-request-review) — accessed 2026-11-14
