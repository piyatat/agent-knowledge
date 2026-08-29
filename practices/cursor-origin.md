---
id: cursor-origin
title: Cursor Origin — git forge for agents (early beta)
tags: [cursor, git, ops, hosting]
status: active
updated: 2026-08-29
when_to_use: Hosting or mirroring repos on Cursor Origin, using the origin CLI, or starting a Cloud Agent without a third-party SCM
---

## Summary

**Origin** is Cursor’s git forge (early beta, paid plans). Teams claim a codebase namespace at `cursor.com/codebase/{owner}/{repo}`, then create Origin-hosted repos or **mirror GitHub**. Cloud Agents can start with **Start from scratch** (no GitHub/GitLab/ADO/Bitbucket connected) and later save the VM into an Origin repo.

## Notes

- Access: Pro / Teams / Enterprise, staged rollout. Admins can disable Origin. Namespace is **not** renameable during beta — pick it carefully. Origin follows the Privacy Mode of the namespace owner (`cursor-privacy-mode`). Legacy Privacy Mode blocks enablement.
- Start from scratch (2026-08-27): pick it in the repo picker, prompt immediately; Cursor creates a background Origin repo. **Create repo** names it (private or internal) when the build looks right. Codebase tab lists it. The agent VM can port-forward into the browser (design mode). **Publish** to a live URL needs a connected Vercel account — not Origin itself.
- Origin-hosted vs mirrored: icons on the codebase list distinguish them. Mirror requires the Cursor GitHub app plus **GitHub admin** on the source. Git history/branches/tags and PRs sync both ways; **Issues and GitHub Actions/secrets do not**. Pushes to a mirrored Origin remote pass through to GitHub (source of truth). **Detach from GitHub** makes Origin standalone and stops passthrough; GitHub is unchanged.
- CLI (`origin`, not `agent`): `curl -fsSL https://downloads.cursor.com/origin/install.sh | sh` → `~/.local/bin/origin`. `origin auth login` sets the git credential helper. `origin repo create`, `create-mirrored`, `clone`, `pr create/merge/review`. `CURSOR_API_KEY` skips the browser login. Agents can install the CLI and push as part of a task.
- Apps (Vercel, Depot, Buildkite) install at codebase settings. Depot/Buildkite run on **Origin-hosted** repos only — mirrored repos keep CI on GitHub. Internal Origin API apps use JWTs + installation tokens (`api.cursor.com/v1/origin`).
- Do **not** mirror just for PR review comments — that is Bugbot (`cursor-bugbot-review`). Mirror when you want Origin browse, PRs, and agent workflows on that history.

## Sources

- [Origin overview](https://cursor.com/docs/origin) — accessed 2026-08-28
- [Mirror a GitHub repository](https://cursor.com/docs/origin/mirror-github) — accessed 2026-08-28
- [Install the Origin CLI](https://cursor.com/docs/origin/cli) — accessed 2026-08-28
- [Origin Code Hosting changelog](https://cursor.com/changelog/origin-code-hosting) — accessed 2026-08-28
- [Start from scratch, without a repo](https://cursor.com/changelog/start-from-scratch) — accessed 2026-08-29
