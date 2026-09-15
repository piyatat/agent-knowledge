---
id: openai-codex-gitlab
title: Codex GitLab — @codex review and cloud MR tasks
tags: [openai, gitlab, review, orchestration]
status: active
updated: 2026-09-15
when_to_use: Connecting GitLab.com or self-managed GitLab to Codex cloud, or requesting @codex review on a merge request
---

## Summary

**Codex GitLab** (beta, all ChatGPT plans) runs in **Codex cloud**. Mention `@codex review` on a merge request, optionally auto-review on open/push, or `@codex` to start a cloud coding chat. Not local `/review` (`openai-codex-review`), not GitHub `@codex review`, and not Cursor Origin/GitLab hosting.

## Notes

- GitLab.com uses the standard ChatGPT/Codex connector. Self-managed or Dedicated GitLab needs a **workspace-admin** app template plus a **service account** (`api` PAT): Codex can create one (Developer on selected groups or projects) or you paste an existing token (encrypted, shown once). Admins can revoke/replace tokens in Codex Cloud → Settings → Connectors. A managed-workspace admin can disable the connector.
- **Reviews** need GitLab activity: a project webhook (“Enable Codex activity from GitLab”) or, on self-managed/Dedicated, a **group webhook** (Owner, Premium/Ultimate, GitLab **19.0+** signed webhooks; on 19.0 confirm `webhook_signing_token`). Group activity covers descendant projects for reviews but **does not** create environments. GitLab.com also requires a **project environment** to enable reviews.
- **Coding tasks** (edit, commit, push, `@codex fix the P1`) need a project environment (`openai-codex-cloud-environments`). Desktop GitHub-style “Create pull request” is **not** in this beta. Collapsed/oversize GitLab diffs can block a review.
- Manual `@codex review` can include P0–P2; automatic reviews default to P0/P1. Policy: Review my MRs / team / all / follow personal; trigger On MR open, On every push, or Smart Trigger (experimental). Put `## Code Review Rules` in the nearest `AGENTS.md` (`openai-codex-agents-md`). Rules do not replace tests or required approvals.
- Troubleshoot: wrong app/environment, failed webhook deliveries, unsigned SSL hooks, expired PAT, service account missing Developer, or using a phrase other than `@codex review`. Always review diffs; models err.

## Sources

- [Review GitLab merge requests with Codex](https://learn.chatgpt.com/docs/third-party/gitlab) — accessed 2026-09-15
- [Connecting GitLab to ChatGPT and Codex](https://help.openai.com/en/articles/20001486-connecting-gitlab-to-chatgpt-and-codex) — accessed 2026-09-15
- [ChatGPT & Codex changelog — GitLab support](https://learn.chatgpt.com/docs/changelog) — accessed 2026-09-15
- [Review GitHub pull requests with Codex](https://learn.chatgpt.com/docs/third-party/github) — accessed 2026-09-15
