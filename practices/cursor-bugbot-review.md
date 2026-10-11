---
id: cursor-bugbot-review
title: Cursor Bugbot — PR review agent
tags: [cursor, review, ci, evals]
status: active
updated: 2026-10-11
when_to_use: Wiring Cursor’s PR review agent (comments, checks, /review, Autofix) without treating it as a merge gate by default
---

## Summary

Bugbot is a Cursor-managed review agent: it diffs PRs, comments with fixes, and publishes a CI check. Findings default to **neutral**, so requiring the check only proves a run happened — it does not block merge unless you enable fail-on-unresolved. Local **Agent Review** (`cursor-agent-review`) reviews the working tree inside Cursor and does not publish this check. **Security Review** (`cursor-security-agents`) is a separate Teams/Enterprise bot for exploitable bugs; Cursor’s 2026-09-23 launch keeps style and quality on Bugbot.

## Notes

- Triggers: automatic on each PR update, or `cursor review` / `bugbot run` comments. In Cursor 3.7+, `/review` / `/review-bugbot` (and `/review-security`) can run before push; if the same diff later opens as a PR, Bugbot can skip a duplicate GitHub/GitLab pass.
- Providers: GitHub (incl. GHES), GitLab, Bitbucket, Azure DevOps (limited), Origin. Enable per repo from Automations. Individual installs review only PRs you author; team/enterprise installs review all contributors on enabled repos.
- Check names: GitHub `Cursor Bugbot`; Bitbucket key `cursor-bugbot`; Azure DevOps `cursor-bugbot/review`. Conclusions: `success` (no issues and no leftover unresolved comments), `neutral` (findings, cancelled by a newer commit, or internal error — **default for findings**), `failure` only when fail-on-unresolved is configured. No `skipped` status.
- Autofix (beta) can spawn a Cloud Agent to patch reported bugs; GitHub may show a separate `Cursor Bugbot Autofix` check (`success`/`neutral` only). Still apply HITL and secret scanning to those agents.
- Incremental review (review only since last pass) avoids re-flagging already-accepted hunks. “Only when mentioned” and “only once per PR” are personal/team overrides. Re-reviews read existing PR comments to reduce duplicates. `BUGBOT.md` rules also apply to local Agent Review.
- Enterprise API (`admin:*`, 30 rpm): `POST /bugbot/review` with `prUrl` (GitHub PR or GitLab MR). `dryRun: true` runs the pipeline and persists findings without SCM comments/checks (still billed; extra 10 rpm). Web release notes (week of 2026-09-28): optional `postSuccessComment` (default `true`); set `false` to skip the “found no new issues” comment. Poll `GET /analytics/team/bugbot-reviews` (`read:*`) by `request_id`. `cost_cents` is null when the review is not billed separately; the same week adds `billed` and reports undiscounted model cost for seat-based / free-trial reviews.

## Sources

- [Bugbot docs](https://cursor.com/docs/bugbot) — accessed 2026-10-11
- [Cursor web release notes](https://cursor.com/docs/release-notes/web) — accessed 2026-10-11
- [Rollouts and Security Review (changelog)](https://cursor.com/changelog/rollouts-and-security-reviewer) — accessed 2026-09-24
- [Agent Review](https://cursor.com/docs/agent/agent-review) — accessed 2026-09-17
- [Building a better Bugbot](https://cursor.com/blog/building-bugbot) — accessed 2026-08-22
