---
id: cursor-bugbot-review
title: Cursor Bugbot — PR review agent
tags: [cursor, review, ci, evals]
status: active
updated: 2026-08-22
when_to_use: Wiring Cursor’s PR review agent (comments, checks, /review, Autofix) without treating it as a merge gate by default
---

## Summary

Bugbot is a Cursor-managed review agent: it diffs PRs, comments with fixes, and publishes a CI check. Findings default to **neutral**, so requiring the check only proves a run happened — it does not block merge unless you enable fail-on-unresolved.

## Notes

- Triggers: automatic on each PR update, or `cursor review` / `bugbot run` comments. In Cursor 3.7+, `/review` / `/review-bugbot` (and `/review-security`) can run before push; if the same diff later opens as a PR, Bugbot can skip a duplicate GitHub/GitLab pass.
- Providers: GitHub (incl. GHES), GitLab, Bitbucket, Azure DevOps (limited). Enable per repo from Automations. Individual installs review only PRs you author; team/enterprise installs review all contributors on enabled repos.
- Check names: GitHub `Cursor Bugbot`; Bitbucket key `cursor-bugbot`; Azure DevOps `cursor-bugbot/review`. Conclusions: `success` (no issues and no leftover unresolved comments), `neutral` (findings, cancelled by a newer commit, or internal error — **default for findings**), `failure` only when fail-on-unresolved is configured. No `skipped` status.
- Autofix (beta) can spawn a Cloud Agent to patch reported bugs; GitHub may show a separate `Cursor Bugbot Autofix` check (`success`/`neutral` only). Still apply HITL and secret scanning to those agents.
- Incremental review (review only since last pass) avoids re-flagging already-accepted hunks. “Only when mentioned” and “only once per PR” are personal/team overrides. Re-reviews read existing PR comments to reduce duplicates.

## Sources

- [Bugbot docs](https://cursor.com/docs/bugbot.md) — accessed 2026-08-22
- [Building a better Bugbot](https://cursor.com/blog/building-bugbot) — accessed 2026-08-22
- [Bugbot updates (June 2026)](https://cursor.com/blog/bugbot-updates-june-2026) — accessed 2026-08-22
