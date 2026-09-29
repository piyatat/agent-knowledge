---
id: cursor-origin-apps
title: Origin apps — Vercel, Depot, Buildkite, and the Origin API
tags: [cursor, git, ci, hosting]
status: active
updated: 2026-09-29
when_to_use: Connecting preview/CI apps to an Origin repo, or writing an internal Origin API app (JWT + installation tokens)
---

## Summary

Origin **Apps** are installed at the **codebase** (`cursor.com/codebase/settings/apps`), then enabled per repository. Early beta third-party apps: **Vercel** (deploys + PR previews), **Depot** and **Buildkite** (CI on **Origin-hosted** repos only). Internal apps call `https://api.cursor.com/v1/origin` with app JWTs and short-lived installation tokens. Early beta — pin the OpenAPI spec.

## Notes

- Repo Settings → Apps lists what’s on that repo; **Manage Apps** opens codebase settings. Changelog: connect Vercel for PR previews that ship on merge; Depot/Buildkite can run existing GitHub Actions workflows; Buildkite also runs native pipelines. **Depot/Buildkite do not run on GitHub-mirrored repos** — those keep CI on GitHub. Vercel is also the **Publish** target for Start-from-scratch Cloud Agents (`cursor-origin`).
- Auth: **app JWT** (metadata, installations, mint tokens, webhook recovery) then **installation access token** (`oit_…`, ≤15 min, never past the app JWT) for repo APIs, check runs, and Git HTTPS. **Create Installation User Token** (`…/user_access_tokens`, `namespace:user_tokens:write`) mints a ≤15 min token that acts as a named member (`userId` / `userEmail`); user actors may show `performedVia.app`. Never send the installation **receipt** as Bearer — store `sub` and mint. User CLI is `origin api` (`cursor-origin`).
- 2026-09 path change: namespace grants and SSH CA endpoints live under `/v1/origin/namespaces/{namespaceSlug}` — `/owners/{ownerSlug}` was **removed**. **Add App Installation Repositories** unions `repoIds` onto an installation (does not change scopes). **Get Pull Request Mergeability** returns `mergeable` / `blocked` plus typed `blockers` (stacked PRs included). `version.potentialMergeCommit.state` is `prepared` | `merge_conflict` | `unknown`.
- **Inbound IP allowlist** (team namespaces with the feature): `GET/PATCH …/inbound-ip-allowlist` plus entry CRUD. When `enabled` and at least one entry is on, git/API/downloads from **Cursor users** must come from listed CIDRs. App JWTs, installation tokens, installation user tokens, and service accounts are **not** restricted. Writes need a user credential with `namespace:settings:write`; you cannot lock yourself out.
- Webhooks: verify `webhook-id` / `webhook-timestamp` / `webhook-signature` (`v1ed,`) against JWKS; reject timestamps older than ~300s. New: `repository.check_run.updated` and `repository.check_run.annotations.created`. Check runs may stay `failing` (still pending for required checks) until `completed`. Mirror cutover is `cursor-origin-migrations`.

## Sources

- [Origin API](https://cursor.com/docs/origin/api) — accessed 2026-09-29
- [Origin API changelog](https://cursor.com/docs/api/origin/changelog) — accessed 2026-09-29
- [Codebase settings](https://cursor.com/docs/origin/codebase-settings) — accessed 2026-09-29
- [Origin repository settings](https://cursor.com/docs/origin/settings) — accessed 2026-09-02
- [Origin Code Hosting changelog](https://cursor.com/changelog/origin-code-hosting) — accessed 2026-09-02

