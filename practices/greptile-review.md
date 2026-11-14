---
id: greptile-review
title: Greptile — hosted pull-request review and local CLI
kind: service
tags: [review, github, gitlab, credits]
status: active
updated: 2026-11-14
when_to_use: Adding a hosted reviewer on GitHub, GitLab, Bitbucket, or Cursor Origin, or reviewing a local branch with the Greptile CLI
---

## Summary

**Greptile** reviews pull requests with codebase context and can comment, score confidence, and (in beta) approve. Cloud connects GitHub, GitLab.com, Bitbucket Cloud, and **Cursor Origin** (beta). Enterprise adds GitHub Enterprise Server, GitHub Enterprise Cloud with data residency, self-managed GitLab, Bitbucket Data Center, and Gitea. Perforce is on-premises only. Not CodeRabbit (`coderabbit-review`), Copilot review (`github-copilot-code-review`), or Bugbot (`cursor-bugbot-review`).

## Notes

- **Access:** an org admin connects a provider, then **links** the org, group, or workspace and **enables** repos. Connecting the app does not start reviews. GitHub uses the Greptile Apps GitHub App (all repos or selected). GitLab uses an access token plus a webhook; CLI onboarding asks for a service-account, group, or project token with the **Developer** role and the `api` scope. `greptile login` can create the account. The onboard wizard refuses agent environments (`CLAUDECODE`, `CLAUDE_CODE`, `CURSOR_AGENT`, `CODEX_*`) and a non-TTY; a human has to approve the browser sign-in.
- **CLI:** Node 22+ for npm (`npm install -g greptile@latest`) or Homebrew (`brew install greptileai/tap/greptile`). Docs describe CLI **v3.2.3**. `greptile review` compares **committed** commits on the current branch to the default branch and **ignores uncommitted changes**. It holds back files that look like secrets; `--include` sends them anyway. CI uses `GREPTILE_API_KEY` — do not pass the key as an argument. `greptile review status` exits `0` when HEAD has a completed review and `3` while one is still running.
- **Tiers and price:** prepaid credits at **$1** each, shared by the org. **Base** is 1 credit, **Plus** 3, **Apex** 10. **Auto** picks a tier from size, risk, and complexity and you pay for the tier that ran. Only completed reviews spend credits. A **TREX** run is 3 more credits when at least one flow returns pass or fail. CLI reviews cost the same and are **not** on the free plan. Without `--plus` or `--apex`, the CLI runs **Base** even if the org default is higher. A comment `@greptileai review this at apex` can raise a PR review, not lower it. Set `effort` in `.greptile/config.json` (`base`, `plus`, `apex`, `auto`); in a monorepo the **highest** directory tier touched by the PR wins. When credits hit zero, new reviews pause.
- **Auto-approve (beta):** only a clean **5/5** review, and only at or below a risk cap you set. With no cap the ceiling is Critical. Risk is judged from what the change does, **not the path** — a file under a sensitive directory can still look Low. Use `excludePaths` when a path must stay human-reviewed. GitHub, GitLab, Bitbucket Cloud, and Gitea only. Drafts, new commits after the review started, and `do-not-merge` / `manual-review` labels block it. Human “requested changes” do **not**. Policy is read from the **base** branch, so a PR cannot loosen `.greptile` for itself. A later push dismisses the approval. It is one host approval, not a merge.
- **Filters:** `excludeAuthors` **replaces** the default bot list (`dependabot[bot]`, `renovate[bot]`). Keep the bots in the array if you still want them skipped.
- **Alternatives:** CodeRabbit when you want seat pricing and IDE/CLI review on the free tier’s terms. Copilot review when the org already pays for Copilot. `greptile review` before push when you want the same reviewer locally.
- **Caveats:** `--include` skips the secret-file check. Auto-approve is a beta signal, not required reviewers or code owners. Origin support is beta on Greptile Cloud (`cursor-origin`).

## Sources

- [Code providers](https://www.greptile.com/docs/integrations/code-providers) — accessed 2026-11-14
- [5-minute quickstart](https://www.greptile.com/docs/quickstart) — accessed 2026-11-14
- [CLI onboarding](https://www.greptile.com/docs/code-review/cli-onboarding) — accessed 2026-11-14
- [Greptile CLI](https://www.greptile.com/docs/code-review/greptile-cli) — accessed 2026-11-14
- [Review tiers](https://www.greptile.com/docs/code-review/review-tiers) — accessed 2026-11-14
- [Billing](https://www.greptile.com/docs/account/billing-seats) — accessed 2026-11-14
- [Auto-approve PRs](https://www.greptile.com/docs/code-review/auto-approve-prs) — accessed 2026-11-14
