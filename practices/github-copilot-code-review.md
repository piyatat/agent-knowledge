---
id: github-copilot-code-review
title: GitHub Copilot code review — agentic PR comments
tags: [github, review, ci, orchestration]
status: active
updated: 2026-10-19
when_to_use: Requesting Copilot as a PR reviewer, configuring personal/enterprise auto-review, or contrasting it with Copilot cloud agent / Cursor Bugbot
---

## Summary

**Copilot code review** comments on a pull request (manual Request, or automatic via rulesets). Since 2026-03 it is an **agentic** Actions-hosted loop that can read more of the repo, call MCP, and load skills. It is not Copilot cloud agent opening a PR (`github-copilot-coding-agent`) and not Cursor Bugbot (`cursor-bugbot-review`). Default review type is **Comment** — it does **not** count as a required approval unless you opt into Approve reviews.

## Notes

- Trigger: Reviewers → Copilot on github.com, or REST `copilot-pull-request-reviewer[bot]`. As of 2026-10-02, **REST and GraphQL** can also start a review and set **per-request effort** (Pro / Pro+ / Max / Business / Enterprise). Typical latency < 30s. Push does **not** re-review unless automatic reviews include “Review new pushes”. Re-review can repeat resolved/downvoted comments. “Fix with Copilot” hands a comment to cloud agent (new PR or same-branch commits).
- Instructions from the **head** branch: `.github/copilot-instructions.md`, `.github/instructions/**/*.instructions.md`, root `AGENTS.md`, plus `CLAUDE.md` / `GEMINI.md` / `REVIEW.md` if present (`github-copilot-instructions`). Skills in `.github/skills` (prefer a `code-review` directory name). MCP from repo Copilot settings (GitHub + Playwright on by default); disable “Allow Copilot to use MCP tools when reviewing pull requests” to keep MCP for cloud agent only.
- Agentic review runs on GitHub Actions. Opting out of GitHub-hosted runners requires a one-time self-hosted setup or reviews fall back to a limited mode. Comments can show skill/MCP attributions; session logs list tools used. Since 2026-09-11 the review agent can use the Copilot SDK **shell toolset** behind the agent firewall (build/test/scripts/APIs), not only file reads.
- **Lite** effort now uses an **ensemble** of agents (vendor: more addressed high/medium findings, ~8% lower review cost in their experiment). Applying a Copilot suggestion now drafts a **smart commit message**. On rereview, Copilot **auto-resolves** its own comments that a later commit addressed — remaining open threads are the outstanding set.
- Personal settings (GA 2026-09-23) live under profile → Copilot settings → **code review**, on **every** Copilot plan including Business and Enterprise (previously Pro/Pro+/Max only, one auto-review toggle). Independently: auto-review when you create / coauthor / leave draft; auto-review **new pushes**; auto-review **draft** PRs you create or coauthor; default effort **Lite** or **Balanced**. That default applies to requested and automatic reviews; a manual Reviewers request can still pick a different effort.
- **Balanced is now the GitHub default** (change took effect 2026-09-28; announced 2026-08-28). Explicit **Lite** settings were kept. Inheritance: enterprise → org → repo → personal; each level can override. Enterprise path: AI controls → Agents → Copilot code review. Balanced uses a higher-reasoning model and more AI credits (and may use slightly more Actions minutes).
- **2026-10-08 org billing:** by default a licensed member’s review burns **their** Copilot quota (fails if exhausted). Org owners can switch **Choose how members with a Copilot license are billed** to **Organization** (repo-owning org AI Credits; paid usage must be on; optional budget) under Copilot → Policies. **Only allow Copilot code review to be triggered by authorized users** restricts requests to a license **from this org/enterprise** (blocks personal/external licenses). Org-on cannot be turned off at the repo. Do not treat Copilot as a merge gate. Issue/PR text, MCP, and shell-tool output are untrusted (`prompt-injection-agent-defense`). Classifier secret checks on `/security-review`: `github-secret-detection-model`.

## Sources

- [Using GitHub Copilot code review on GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/copilot-code-review) — accessed 2026-09-07
- [Copilot code review now runs on an agentic architecture](https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/) — accessed 2026-09-07
- [Using custom instructions to unlock the power of Copilot code review](https://docs.github.com/en/copilot/tutorials/customize-code-review) — accessed 2026-09-07
- [Adding agent skills for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) — accessed 2026-09-07
- [Auto-resolution and analysis updates in Copilot code review](https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review/) — accessed 2026-09-14
- [More ways to request and configure Copilot code reviews](https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews/) — accessed 2026-09-28
- [About GitHub Copilot code review](https://docs.github.com/en/copilot/concepts/agents/code-review) — accessed 2026-10-04
- [Using GitHub Copilot code review](https://docs.github.com/en/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review) — accessed 2026-10-04
- [Copilot code review: API support and new default effort level](https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level/) — accessed 2026-10-04
- [Copilot code review: New organization billing options and controls](https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls/) — accessed 2026-10-19
