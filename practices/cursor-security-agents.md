---
id: cursor-security-agents
title: Cursor Security Agents — reviewer vs vulnerability scanner
tags: [cursor, security, review, automations]
status: active
updated: 2026-08-29
when_to_use: Wiring Cursor-managed security review on PRs or a scheduled codebase scan (not Bugbot quality review)
---

## Summary

**Security Agents** are Cursor-managed Automations that hunt vulnerabilities. **Security Reviewer** runs on git PR/MR events; **Vulnerability Scanner** runs on cron against the repo at rest. Both need Cloud Agents. They are not Bugbot (`cursor-bugbot-review`) and they do not auto-approve PRs (`cursor-pr-routing-approval`).

## Notes

- Configure under Automations. Built-in security checks can be toggled per agent. Custom instructions set threat-model priorities and how the agent should use attached tools.
- Each agent needs **at least one tool or MCP** (Slack, issue tracker, extra context). Connecting an MCP server grants every tool on that server — same blast-radius rule as other automations.
- Interactive: `/review-security` or `/review` in Cursor 3.7+ and on cursor.com/agents reviews the branch vs the default base (committed + uncommitted). Ask for uncommitted-only or name a non-default base. CLI support is not shipped yet.
- Billing is the **team usage pool** under a shared team service account, not the triggering user’s quota.
- Analytics: vulnerabilities found, issues fixed, resolution rate. “Fixed” is an LLM judgment of later diffs, not a guaranteed verifier — treat the rate as a dashboard signal.
- Pair with HITL before merge. PR Routing can consume Security Review Context and will refuse auto-approval when these agents report findings that need a human.

## Sources

- [Security Agents](https://cursor.com/docs/security-agents) — accessed 2026-08-29
- [PR Routing & Approval](https://cursor.com/docs/approval-agents) — accessed 2026-08-29
- [Automations (help)](https://cursor.com/help/ai-features/automations) — accessed 2026-08-29
