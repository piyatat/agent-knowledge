---
id: claude-code-code-review
title: Claude Code review — /code-review, ultrareview, GitHub App
tags: [claude, review, github, ci]
status: active
updated: 2026-09-12
when_to_use: Running /code-review or ultrareview, or enabling Claude GitHub PR review
---

## Summary

Claude Code has **three** review surfaces: local **`/code-review`** (background subagent on your diff), cloud **`/code-review ultra`** / `claude ultrareview` (multi-agent sandbox on Claude Code on the web), and org **Code Review** (GitHub App posts inline comments + a neutral check run). Research preview. Not Bugbot (`cursor-bugbot-review`), not Copilot review (`github-copilot-code-review`), not Codex `/review` (`openai-codex-review`).

## Notes

- Local: `/review` is an alias (since v2.1.223). Default target is commits ahead of upstream plus uncommitted changes; pass a path, PR number, branch, or `main...feature`. `--fix` edits the tree (background edits are **outside** `/rewind` — use git). `--comment` posts inline PR comments. Effort `low`–`max` is remembered across sessions; `ultra` does not update it. Claude may start `/code-review` itself unless `skillOverrides.code-review` is `user-invocable-only`. Local review follows `CLAUDE.md`, **not** `REVIEW.md`.
- Ultrareview: claude.ai login; unavailable on Bedrock / Agent Platform / Foundry / ZDR (falls back to local). Scope: branch vs default (or named base) including dirty tree, or a `github.com` / connected GHES PR (PR mode clones remotely — no local bundle). Diff caps ~500 files / 8k lines. Pro/Max get 3 one-time free runs, then ~$5–$25 usage credits; Team/Enterprise has no free allotment. `claude -p '/code-review ultra'` prints a tracking link; paid launches from `-p` need `claude ultrareview` (running it is consent). `--post` (v2.1.227+) comments on `github.com` PRs from your connected GitHub account — keep the session open.
- GitHub App Code Review: Team/Enterprise Owners; not ZDR. Triggers per repo: once on open/ready, every push, or manual `@claude review` / `@claude review always` (subscribe). Check run is **always neutral**. `REVIEW.md` at repo root is highest-priority review prompt (no `@` imports). Average ~$15–25 / review on usage credits, not plan included usage.

## Sources

- [Code Review](https://code.claude.com/docs/en/code-review) — accessed 2026-09-12
- [Find bugs with ultrareview](https://code.claude.com/docs/en/ultrareview) — accessed 2026-09-12
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-09-12
