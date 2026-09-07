---
id: github-copilot-code-review
title: GitHub Copilot code review — agentic PR comments
tags: [github, review, ci, orchestration]
status: active
updated: 2026-09-07
when_to_use: Requesting Copilot as a PR reviewer, or contrasting it with Copilot cloud agent / Cursor Bugbot
---

## Summary

**Copilot code review** comments on a pull request (manual Request, or automatic via rulesets). Since 2026-03 it is an **agentic** Actions-hosted loop that can read more of the repo, call MCP, and load skills. It is not Copilot cloud agent opening a PR (`github-copilot-coding-agent`) and not Cursor Bugbot (`cursor-bugbot-review`). Default review type is **Comment** — it does **not** count as a required approval unless you opt into Approve reviews.

## Notes

- Trigger: Reviewers → Copilot on github.com, or REST `copilot-pull-request-reviewer[bot]`. Typical latency < 30s. Push does **not** re-review unless automatic reviews include “Review new pushes”. Re-review can repeat resolved/downvoted comments. “Fix with Copilot” hands a comment to cloud agent (new PR or same-branch commits).
- Instructions from the **head** branch: `.github/copilot-instructions.md`, `.github/instructions/**/*.instructions.md`, root `AGENTS.md`, plus `CLAUDE.md` / `GEMINI.md` / `REVIEW.md` if present (`github-copilot-instructions`). Skills in `.github/skills` (prefer a `code-review` directory name). MCP from repo Copilot settings (GitHub + Playwright on by default); disable “Allow Copilot to use MCP tools when reviewing pull requests” to keep MCP for cloud agent only.
- Agentic review runs on GitHub Actions. Opting out of GitHub-hosted runners requires a one-time self-hosted setup or reviews fall back to a limited mode. Comments can show skill/MCP attributions; session logs list tools used.
- Do not treat Copilot as a merge gate. Issue/PR text and MCP results are untrusted (`prompt-injection-agent-defense`). Contrast Cursor Security Agents (`cursor-security-agents`) for vendor-managed security review.

## Sources

- [Using GitHub Copilot code review on GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/copilot-code-review) — accessed 2026-09-07
- [Copilot code review now runs on an agentic architecture](https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/) — accessed 2026-09-07
- [Using custom instructions to unlock the power of Copilot code review](https://docs.github.com/en/copilot/tutorials/customize-code-review) — accessed 2026-09-07
- [Adding agent skills for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) — accessed 2026-09-07
