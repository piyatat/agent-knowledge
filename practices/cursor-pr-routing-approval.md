---
id: cursor-pr-routing-approval
title: Cursor PR Routing & Approval — reviewers and low-risk auto-approve
tags: [cursor, review, approvals, automations]
status: active
updated: 2026-08-29
when_to_use: Auto-assigning PR reviewers or auto-approving low-risk changes without treating the agent as a full code review
---

## Summary

**PR Routing & Approval** is a Cursor-managed Automation: it can request reviewers (ownership + commit history) and/or approve PRs that meet your criteria. It is a **router/gate**, not a substitute for review. Enable at least one primary action — Request Reviewers or Approve PR.

## Notes

- Signals (optional): Bugbot Review Context, Security Review Context (Teams/Enterprise), risk score + maximum risk for approval. When reviewer contexts are on, the agent waits for those checks. Findings that need a human, or risk above the threshold, block approval.
- Repo policy files: for each changed path, walk the directory and ancestors for the **exact** basename `APPROVAL_POLICY.md`. `POLICY.md`, `approval_policy.md`, and `APPROVAL_POLICY.md.bak` are ignored. Closest file wins; ancestors still apply unless they conflict. Conflicts → most specific, then stricter, then no auto-approve.
- Optional `.cursor/approval-policies/ROUTING.md` (YAML list of `product` / `boundary` / `policies`). Missing routing does **not** disable directory discovery.
- If the PR itself changes `APPROVAL_POLICY.md`, `ROUTING.md`, or a routed policy, the agent uses the **base-branch** text (or requires a human). A PR cannot relax its own review bar.
- Applicable policy prompts override generic criteria, risk thresholds, custom prompt, and default posture. Team members can view the automation; only admins edit it.
- Triggers: PR opened, PR pushed/updated, PR commented (regex). Optional Slack/Teams/MCP. Do not enable Approve PR until routing-only behavior looks right.

## Sources

- [PR Routing & Approval](https://cursor.com/docs/approval-agents) — accessed 2026-08-29
- [Security Agents](https://cursor.com/docs/security-agents) — accessed 2026-08-29
- [Automations (help)](https://cursor.com/help/ai-features/automations) — accessed 2026-08-29
