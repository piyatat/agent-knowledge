---
id: github-code-scanning-ai-scan
title: GitHub AI Scan — PR diffs and on-demand repo backlog
kind: service
tags: [github, security, review, ci]
status: active
updated: 2026-11-14
when_to_use: Enabling AI Scan on PRs or a repo backlog, budgeting Code Security AI Credits, or PATCHing repository_scan
---

## Summary

**AI Scan** is GitHub’s AI code-scanning engine. **AI Scan for pull requests** is GA (2026-10-15): advisory annotations on PR diffs for languages/frameworks CodeQL skips (PHP, Shell, Terraform HCL, Dockerfiles, JSP, Blazor, …). **AI Scan for repositories** is **public preview** (2026-10-28): an on-demand default-branch scan that writes **backlog alerts** beside CodeQL. REST can now set both `pr_scan` and `repository_scan` (2026-11-13). Not Copilot cloud agent (`github-copilot-coding-agent`) and not agentic autofix (`github-agentic-autofix`). No Copilot license is required.

## Notes

- **PR scan (GA):** runs when code scanning is on, the repo’s PR setting is on, and the PR is not a fork/Dependabot and touches a supported extra language. Independent of CodeQL default setup. Findings show on Conversation / Files changed with an **AI** badge; they **do not** fail the Code scanning check and **cannot** be required in rulesets.
- **Repo scan (preview):** write access starts a scan of the **latest default-branch commit**. The agent picks likely-vulnerable files inside a time budget (caps: **30 minutes** and **150,000** Code Security AI credits per scan). Not exhaustive; not scheduled; not on push; **no self-hosted runners**. When CodeQL alerts exist, matching findings are suppressed best-effort (duplicates still happen). Merging a fix does **not** auto-rescan; alerts close automatically only if the exact triggering line changed.
- **Availability:** org public (no active-committer license); org private/internal needs GitHub Code Security or Advanced Security; personal **public** yes; personal **private** no. Not GitHub Enterprise Server. Enterprise policy defaults to **Not allowed** and gates **both** PR and repo scan; allowing it does **not** auto-enable orgs.
- **REST:** `GET`/`PATCH /orgs/{org}/code-scanning/ai-scan` and `/repos/{owner}/{repo}/code-scanning/ai-scan` with `pr_scan` and/or `repository_scan` = `enabled` | `disabled`. Org disable blocks repo enable; org enable inherits with per-repo opt-out. Enterprise deny → **422**. Updating both in one request is all-or-nothing (422 leaves neither changed). **Enabling `repository_scan` does not start a scan.** Org owners/security managers patch the org; repo admins opt a repo out. Scopes: org `admin:org` / `write:org` / `repo`; repo GET `security_events` (or `public_repo` for public); repo PATCH `repo` (or `public_repo`).
- **Billing:** Code Security AI Credits (included Copilot credits first, then metered/budgets). A hard budget with no credits left means **no findings** until the budget or cycle resets. Personal public repos bill the user unless a Copilot seat from an org/enterprise covers them. The engine does **not** read `.github/copilot-instructions.md` or `CLAUDE.md`. Expect false positives.

## Sources

- [AI Scan for pull requests](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections) — accessed 2026-10-15
- [AI Scan for pull requests generally available](https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available/) — accessed 2026-10-15
- [AI Scan for a repository's backlog](https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan-for-repositories) — accessed 2026-11-14
- [AI Scan for repositories in public preview](https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview/) — accessed 2026-11-14
- [Manage AI Scan for repositories using the REST API](https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api/) — accessed 2026-11-14
- [REST API endpoints for code scanning](https://docs.github.com/en/rest/code-scanning/code-scanning?apiVersion=2026-03-10) — accessed 2026-11-14
