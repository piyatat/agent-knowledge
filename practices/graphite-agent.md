---
id: graphite-agent
title: Graphite Agent — GitHub PR review and stacking
kind: service
tags: [graphite, review, github, stacking]
status: active
updated: 2026-11-15
when_to_use: Adding a hosted GitHub pull-request reviewer that also stacks PRs, or starting a Cursor Cloud Agent from Graphite
---

## Summary

**Graphite** is a GitHub-only pull-request inbox, stacking CLI, and merge queue. **Graphite Agent** reviews new pull requests in repos you enable: it comments on bugs and can suggest fixes. A separate **Agents** action in Graphite starts **Cursor Cloud Agents** (`cursor-github-cloud-agents`) to open or update a PR. It is not CodeRabbit, Greptile, Qodo, or Copilot code review.

## Notes

- **Access.** New accounts install the **Graphite GitHub App**. OAuth is not offered for new signups; older OAuth users stay supported. The app is what receives webhooks, runs the merge queue, and scopes which repos Graphite can reach. GitHub is the only git host. **GitHub Enterprise Server** is an Enterprise feature. Personal-repo AI reviews require the app on the personal account, then “Join team”; you can enable reviews only on repos you own.
- **Enable reviews.** In AI code review settings, pick repos (or the org) that are already synced and save. Graphite Agent then reviews **new** pull requests, comments on GitHub, and suggests fixes. No workflow change is required for reviewers. Rules, exclusions, and file exclusions are on the Rules & exclusions tab. The dashboard Overview shows issues found, acceptance, and PRs reviewed.
- **Plans (billing page, 2026-11-15).** Prices are per seat per month, **billed annually**. **Hobby** (personal repos, $0): limited AI chat and limited AI reviews, plus CLI / VS Code / MCP and AI PR titles. **Starter** $20: limited PR reviews and chat; no review customization, suggested fixes, or CI summaries. **Team** $40: unlimited chat and PR reviews, rules, suggested fixes, CI summaries, code-indexing and AI privacy controls, basic merge queue. **Enterprise:** custom, GHES, SAML/SSO, audit log, advanced merge queue. A Team-plan trial lasts 30 days or until you upgrade. After that, an org workspace loses Graphite features; a personal workspace drops to Hobby.
- **Seats.** Graphite bills people who join the workspace **or whose PR Graphite Agent reviews**. There is no empty-seat cap. Adding a reviewer on a busy repo can add seats. Admins add and remove users; seat changes show up on a later invoice (prorated).
- **Cursor Agents inside Graphite.** Requires a signed-in **Cursor Pro** (or higher) account, Cursor authorized on the GitHub org, and repo access. New task picks repo, base branch, prompt, and model; the Cloud Agent opens a **draft** PR. On an open PR, **Agent** is available to the **PR author** and commits to the branch. Reviewers use Graphite Chat instead. You can continue a Cursor Cloud Agent thread from Graphite after the PR exists. Graphite’s Agents page says Cursor processes the code only to finish the task and does not store it for training; confirm that against `cursor-privacy-mode` before you rely on it.
- **Alternatives.** CodeRabbit, Greptile, or Qodo when you need GitLab, Bitbucket, or Azure DevOps as well as GitHub. Copilot code review or Cursor Bugbot when the reviewer should be the forge or IDE vendor you already pay. Graphite’s own CLI when the job is stacking, not a review comment.
- **Caveats.** Enabling Agent review on a repo bills authors Graphite has not otherwise invited. Starter’s “limited” reviews are not the Team unlimited quota. Do not treat Graphite Agent as a merge gate; it comments beside human review and CI.

## Sources

- [AI Reviews](https://graphite.com/docs/ai-reviews) — accessed 2026-11-15
- [AI reviews setup](https://graphite.com/docs/ai-reviews-setup) — accessed 2026-11-15
- [Billing and plans](https://graphite.com/docs/billing-plans) — accessed 2026-11-15
- [Pricing FAQ](https://graphite.com/docs/pricing-faq) — accessed 2026-11-15
- [Authenticate with the GitHub App](https://graphite.com/docs/authenticate-with-github-app) — accessed 2026-11-15
- [Agents](https://graphite.com/docs/agents) — accessed 2026-11-15
