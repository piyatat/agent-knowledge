---
id: agent-output-secret-scanning
title: Secret scanning for agent-written code and commits
tags: [security, secrets, ci, gitleaks]
status: active
updated: 2026-10-19
when_to_use: Agents edit repos or propose commits that might leak keys into git history
---

## Summary

Assume agents will occasionally paste secrets into files. Block them with **pre-commit scanners and CI**, then layer host secret protection (GitHub’s classifier, push protection) where the forge supports it. Hooks alone are skippable; history leaks require **rotation**, not just deletion.

## Notes

- Install Gitleaks (or equivalent) as a pre-commit hook **before** agent-heavy workflows; scan staged diffs. Mirror the same scan in CI/required checks — `git commit --no-verify` bypasses local hooks.
- Never commit `.env`; keep production keys off laptops; treat `NEXT_PUBLIC_` / `VITE_` as public by design.
- If a secret lands in git: **rotate first**, then scrub history; deleting the line is not enough. Baselining helps adopt scanners on legacy repos without drowning in old findings.
- Don't "test" scanners with documented example keys (often allowlisted); use synthetic realistic shapes.
- GitHub (2026-10-07): a **ModernBERT** classifier now scores generic/password-like strings in context for secret-scanning **alerts** (included in GHSP/GHAS). **Push protection** and Copilot **`/security-review`** secret checks are preview/opt-in and can consume **AI Credits** — do not let an agent enable them. See `github-secret-detection-model`. Local gitleaks still catches agent commits that never reach github.com.

## Sources

- [gitleaks](https://github.com/gitleaks/gitleaks) — accessed 2026-08-10
- [Purpose-built model for leaked secret detection](https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection/) — accessed 2026-10-19
- [GitHub’s model for secret detection](https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/) — accessed 2026-10-19
- [Catching Secrets in AI-Generated Code Before They Reach Git](https://dev.to/marcin_brzozka_ff45b1ccb6/catching-secrets-in-ai-generated-code-before-they-reach-git-2kdk) — accessed 2026-08-10
- [I let an AI agent into my repo — lock down first](https://dev.to/mikobuilds/i-let-an-ai-agent-into-my-repo-heres-what-i-lock-down-first-5145) — accessed 2026-08-10
