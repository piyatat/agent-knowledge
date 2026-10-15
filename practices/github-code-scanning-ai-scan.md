---
id: github-code-scanning-ai-scan
title: GitHub AI Scan — PR findings for languages CodeQL skips
tags: [github, security, review, ci]
status: active
updated: 2026-10-15
when_to_use: Enabling AI Scan on pull requests, budgeting Code Security AI Credits, or contrasting it with CodeQL / agentic autofix
---

## Summary

**AI Scan for pull requests** (GA **2026-10-15**) is an AI engine that flags vulnerabilities in PR diffs for languages and frameworks **CodeQL does not cover** (examples: PHP, Shell/Bash, Terraform HCL, Dockerfiles, JSP, Blazor). Findings are **advisory PR-only** annotations, not backlog alerts and not a merge gate. It is not Copilot cloud agent (`github-copilot-coding-agent`) and not agentic autofix (`github-agentic-autofix`). No Copilot license is required.

## Notes

- Runs when code scanning is on, the repo’s **AI Scan on pull requests** setting is on, and the PR is **not** a fork or Dependabot and touches a supported extra language. Independent of CodeQL default setup: AI Scan still posts if CodeQL is waiting or failed. Scans on PR open and each new commit.
- Findings show on Conversation and Files changed with an **AI** badge. Most include a suggested remediation; Copilot Autofix may attach a code change the same way it does for CodeQL. They **do not** fail the Code scanning check and **cannot** be required in rulesets. No full-repo scan.
- Availability: org public (no active-committer license); org private/internal needs GitHub Code Security or Advanced Security; personal **public** yes; personal **private** no. Not in a managed-user personal namespace. Enterprise policy defaults to **Not allowed**; allowing it does **not** auto-enable orgs.
- Org enablement turns it on for every eligible repo with code scanning immediately — repos can opt out, but qualifying PRs can burn **Code Security AI Credits** first. Personal public repos toggle it under Code scanning. REST: org/repo `…/code-scanning/ai-scan` with `pr_scan` `enabled` | `disabled`.
- Billing is the Code Security AI Credits SKU (included Copilot credits first, then metered/budgets). A hard budget with no credits left means **no findings** until the budget or cycle resets. The engine uses specialized prompts, **not** `.github/copilot-instructions.md` or `CLAUDE.md`. Categories include string injection, weak crypto, broken access control, secret exposure, SSRF, supply-chain (unpinned actions/packages). Expect false positives; thumbs feedback is the documented signal.

## Sources

- [AI Scan for pull requests](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections) — accessed 2026-10-15
- [AI Scan for pull requests generally available](https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available/) — accessed 2026-10-15
