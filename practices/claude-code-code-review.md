---
id: claude-code-code-review
title: Claude Code review — /code-review, ultrareview, GitHub App
tags: [claude, review, github, ci]
status: active
updated: 2026-10-23
when_to_use: Running /code-review or ultrareview, or enabling Claude GitHub PR review
---

## Summary

Claude Code has **three** review surfaces: local **`/code-review`** (background subagent on your diff), cloud **`/code-review ultra`** / `claude ultrareview` (multi-agent sandbox on Claude Code on the web), and org **Code Review** (GitHub App posts inline comments + a **neutral** check run). Not Bugbot (`cursor-bugbot-review`), not Copilot review (`github-copilot-code-review`), not Codex `/review` (`openai-codex-review`).

## Notes

- Local: `/review` is an alias (since v2.1.223). Default target is commits ahead of upstream plus uncommitted changes; pass a path, PR number, branch, or `main...feature`. `--fix` edits the tree (background edits are **outside** `/rewind` — use git). `--comment` posts inline PR comments. Effort `low`–`max` is remembered across sessions; `ultra` does not update it. Claude may start `/code-review` itself unless `skillOverrides.code-review` is `user-invocable-only`. Local review follows `CLAUDE.md`, **not** `REVIEW.md`.
- Ultrareview: claude.ai login; unavailable on Bedrock / Agent Platform / Foundry / ZDR / CMEK (falls back to local). Scope: branch vs default (or named base) including dirty tree, or a `github.com` PR (PR mode clones remotely — no local bundle; GHES: review the local branch). Diff caps ~500 files / 8k lines. Pro/Max get 3 one-time free runs, then ~$5–$25 usage credits; Team/Enterprise has no free allotment. `claude -p '/code-review ultra'` prints a tracking link and **does not wait**; paid launches from `-p` need `claude ultrareview` (running it is consent). `--post` (v2.1.227+) comments on `github.com` PRs from your connected GitHub account — keep the session open. Exit: `0` completed, `1` fail/stop/timeout/**untrusted**, `130` Ctrl-C.
- **Workspace trust** (v2.1.309, 2026-10-22): `claude ultrareview` **asks** `Trust? [y/N]` on a TTY (git + project settings can then run). In CI / redirected output it exits `Error: Workspace not trusted`. Scripts pass **`--trust-workspace`** (no value — put the PR number or base **before** it: `claude ultrareview 1234 --trust-workspace`). The flag is **this run only** and writes nothing. To review an untrusted PR, run it from a branch you trust (the PR is cloned in the cloud). Escape hatch: `CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK=1`. Trusting a folder means honoring its git hooks and project settings — use only on checkouts you accept.
- GitHub App Code Review: Team/Enterprise Owners; not ZDR / HIPAA BAA / CMEK. GHES and GHEC data residency supported (`ghe.com` hostname). Runs on Anthropic infra (not self-hosted). Triggers per repo: once on open/ready, every push, or manual. Check run is **never a failure**. `REVIEW.md` on the **base/default** branch is the review prompt (never the PR’s own changes; no `@` imports). Org review **level**: Quick / Standard (default) / Deep. v2.1.307 (2026-10-21) documents **`@claude review stop`** (aliases `off`, `pause`) to end an `@claude review always` subscription **without** starting or canceling an in-flight review. `once` is the same as a single `@claude review`. Comment must be a **new top-level** PR comment, command on the first line; write/maintain/admin only; bots ignored. In **After every push** repos a comment cannot stop reviews — convert the PR to a draft instead. Before mid-2026, bare `@claude review` subscribed; use `always` if you still want that.

## Sources

- [Code Review](https://code.claude.com/docs/en/code-review) — accessed 2026-10-22
- [Read and request reviews on a pull request](https://code.claude.com/docs/en/code-review-pull-requests) — accessed 2026-10-22
- [Find bugs with ultrareview](https://code.claude.com/docs/en/ultrareview) — accessed 2026-10-23
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-09-12
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-10-23
