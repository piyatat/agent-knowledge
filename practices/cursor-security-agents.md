---
id: cursor-security-agents
title: Cursor Security Agents — reviewer vs vulnerability scanner
tags: [cursor, security, review, automations]
status: active
updated: 2026-10-11
when_to_use: Wiring Cursor-managed security review on PRs or a scheduled codebase scan (not Bugbot quality review)
---

## Summary

**Security Agents** are Cursor-managed Automations that hunt vulnerabilities. **Security Reviewer** (GA 2026-09-23, Teams/Enterprise) runs on git PR/MR events; **Vulnerability Scanner** runs on cron against the repo at rest. Both need Cloud Agents **except** a team Security Reviewer triggered by a PR event, which runs on Cursor-managed hosting. They are not Bugbot (`cursor-bugbot-review`), not Rollouts (`cursor-rollouts`), and they do not auto-approve PRs (`cursor-pr-routing-approval`).

## Notes

- Reviewer SCM: Origin, GitHub, GitLab. **Not** Bitbucket Cloud/Data Center or Azure DevOps — use Bugbot there. Vulnerability Scanner also skips Bitbucket. Docs: **draft PRs are skipped**. The 2026-09-23 launch posts **one** review comment listing exploitable bugs. Style and quality stay with Bugbot. Team rules (e.g. “external calls go through this client”) are enforced on every reviewed PR. Dismiss a finding with a reason and it will not be re-raised on that PR.
- Default hunt: injection (SQL/command/template; blog also lists LDAP), authn/authz bypasses including checks a refactor stopped running, secrets in source, SSRF / unvalidated redirects, unsafe deserialization, dependency CVEs. Changelog also calls out tracing user input. Each finding has severity, attack path, and a proposed / one-click fix.
- Configure under Automations. Built-in checks toggle per agent. Custom instructions set threat-model priorities. A Reviewer needs **at least one tool or MCP** to save; a Scanner can save without one and reports to **Flagged vulnerabilities** (group by repo; status Active/Dismissed; feedback Useful/False Positive/Unimportant; severity; Fix in Cursor / View in codebase on Origin). Connecting an MCP server grants every tool on that server.
- Scanner: **one schedule per agent**. Edit the existing cron to change timing; create another Scanner for a second cadence. Scopes over **1,000** repos can hit provider rate limits — split them. Web notes: Recent Runs on the Security Agents page lists Vulnerability Scanner next to reviewer runs. Every run is clickable (transcript, or a summary when none exists).
- Interactive: `/review-security` or `/review` in Cursor 3.7+, cursor.com/agents, and the **Cursor CLI** reviews the branch vs the default base (committed + uncommitted). Ask for uncommitted-only or name a non-default base.
- Billing is the **team usage pool** under a shared team service account. Analytics “fixed” is an LLM judgment of later diffs — treat as a dashboard signal. Pair with HITL before merge. PR Routing refuses auto-approval when these agents report findings that need a human. Admin-only pages show an **Admin Only** label; you can save a security agent without linking your own Slack if Send to Slack channels are unchanged.

## Sources

- [Security Agents](https://cursor.com/docs/security-agents) — accessed 2026-10-11
- [Cursor web release notes](https://cursor.com/docs/release-notes/web) — accessed 2026-10-11
- [Bots for the last mile: Rollouts, Security Review](https://cursor.com/blog/rollouts-and-security-reviewer) — accessed 2026-09-24
- [Rollouts and Security Review (changelog)](https://cursor.com/changelog/rollouts-and-security-reviewer) — accessed 2026-09-24
- [PR Routing & Approval](https://cursor.com/docs/approval-agents) — accessed 2026-10-11
