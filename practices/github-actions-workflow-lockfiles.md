---
id: github-actions-workflow-lockfiles
title: GitHub Actions workflow lockfiles — pin uses: to reviewed commits
tags: [github, ci, security, supply-chain]
status: active
updated: 2026-10-18
when_to_use: Pinning GitHub Actions/reusable workflows so a moved tag cannot change what a run executes, including agent-authored workflows
---

## Summary

**Workflow dependency lockfiles** (public preview, 2026-10-14) pin every `uses:` action — including **transitive** deps and reusable-workflow calls — to a verified commit in `.github/workflows/actions.lock`. GitHub Actions then runs those SHAs even if a tag or branch moves. Not SHA-pinning inside the YAML, not Dependabot by itself, and not an Agentic Workflow `.lock.yml` (`github-agentic-workflows`). Locking does **not** prove the dependency is safe — review before you lock.

## Notes

- Why: `uses: org/action@v3` or `@main` resolves at **run time**. A compromised maintainer who moves the tag can change what your CI executes with no repo diff. The lockfile records `ref`, `commit`, plus `owner_id` / `repo_id` so a renamed or hijacked repo name does not silently match.
- Generate with `gh extension install github/gh-actions-lock`, then `gh actions-lock` (or pass one workflow path). **Never edit the lockfile by hand.** The extension also rewrites workflow `uses` to the **specific version** it resolved (`@v3` → `@v3.1.0`) without changing the commit. In-repo `uses: ./…` becomes `uses: $/…` (inherently pinned to the running commit; no lockfile entry). Local paths that do not resolve to a real action from the **repo root** are skipped — fix the path and rerun.
- After a workflow is **onboarded**, every action it uses must be in the lockfile; the locked commit is what runs **and** what allowed-actions policies check. The SHA must still exist on a branch of the source repo. Coverage is **this repo**. Transitive action deps are included; deps of a **reusable workflow in another repo** are covered by **that** repo’s lockfile — onboard shared-workflow repos first.
- Keep current: rerun `gh actions-lock` when you add/remove `uses`. Dependabot version updates on an **already onboarded** workflow regenerate the matching lockfile row in the same PR; it will **not** onboard for you. Tags/branches are trusted from the lockfile until you `--relock`. If the tag moved legitimately, `--relock`; if the original commit is gone, `--relock --accept-moved`. Verify in CI with `gh actions-lock --verify` (docs also mention `--verify-local --no-fix` for a pre-commit hook).
- **Require lockfile** policy (enterprise / org / repo, also preview): blocks runs of workflows with `uses:` unless they are locked. Pilot Evaluate mode first or you will stop unready repos. You can keep “require full-length SHA” on during rollout — onboarded workflows are checked against the **locked** SHA. Changelog/docs: GitHub Enterprise Cloud (including data residency). Coding agents that add Actions should generate/update `actions.lock` in the same change.

## Sources

- [Workflow dependency lockfiles](https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles) — accessed 2026-10-18
- [Locking action dependencies in a repository's workflows](https://docs.github.com/en/actions/how-tos/secure-your-work/lock-workflow-dependencies) — accessed 2026-10-18
- [Enforcing lockfiles for action dependencies](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/administer/enforce-workflow-lockfiles) — accessed 2026-10-18
- [GitHub Actions workflow lockfiles in public preview](https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/) — accessed 2026-10-18
