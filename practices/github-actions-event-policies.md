---
id: github-actions-event-policies
title: GitHub Actions execution policies — actors, events, PRT default block
tags: [github, ci, security, policies]
status: active
updated: 2026-11-02
when_to_use: Agents authoring pull_request_target workflows, or admins restricting who/which events may start Actions
---

## Summary

**Workflow execution protections** (Actions → **Policies**, not General) are allowlists for **who** may trigger workflows and **which events** may run them, evaluated **before** a run starts so a malicious workflow file never executes. GitHub’s default public-repo policy **blocks `pull_request_target`** unless you explicitly allow it — **enforced 2026-12-02** (brownouts **2026-11-09** and **2026-11-16**, 16:00–18:00 UTC). Not lockfiles (`github-actions-workflow-lockfiles`) and not Copilot’s separate “require approval for workflow runs on agent PRs.”

## Notes

- Levels: enterprise / organization / repository. Layer several small policies rather than one mega-policy. Target by visibility, deployment status, custom properties, and **workflow path**. Enforcement: **active** / **disabled** / **evaluate** (GHEC insights: would-have-blocked). REST: `restrict_actions_actors` + `restrict_action_events`.
- **Actor rules:** default is anyone with **write**. Allowlist users, roles, teams, Apps, bots (API types include `User`, `Bot`, `Team`, `App`, `RepositoryRole`, …). Docs list **Copilot** and **Dependabot** among identities you can allow or omit. GitHub **built-in** feature processes are exempt; a workflow that must run **as** `dependabot[bot]` (or similar) still needs that identity on the allowlist.
- **Event rules:** `push`, `pull_request`, `pull_request_target`, `workflow_dispatch`, … Default **public-repo** policy blocks `pull_request_target` unless a more specific event policy already exists. **Private/internal** repos are unaffected. **Not GHES.** Insights before the first brownout; then either keep the block or allow PRT for named workflows.
- **PRT risk:** the workflow file and default `actions/checkout` come from the **base default branch** (secrets + write token). The pwn-request is checking out PR head (`ref: github.event.pull_request.head.sha`, fork `repository:`, `gh pr checkout`) and then **executing** it (`make test`, `npm install`, …). Prefer `pull_request`. If you must keep PRT: least-privilege `GITHUB_TOKEN`, treat cache as read-only (default), ephemeral runners, never execute untrusted checkout. `actions/checkout` `allow-unsafe-pr-checkout: true` is an explicit opt-out of the checkout guard — review it.
- **Require lockfile** is a third rule on the same policy type (`github-actions-workflow-lockfiles`). Agents that add Actions should not invent `on: pull_request_target` for ordinary CI.

## Sources

- [pull_request_target blocked by default December 2](https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2/) — accessed 2026-11-02
- [About Actions policies](https://docs.github.com/en/actions/concepts/about-actions-policies) — accessed 2026-11-02
- [Governing execution of GitHub Actions workflows](https://docs.github.com/en/actions/how-tos/administer/control-workflow-execution) — accessed 2026-11-02
- [Securely using pull_request_target](https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target) — accessed 2026-11-02
- [REST API endpoints for GitHub Actions policies](https://docs.github.com/en/rest/actions/policies) — accessed 2026-11-02
