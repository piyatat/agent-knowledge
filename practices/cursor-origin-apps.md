---
id: cursor-origin-apps
title: Origin apps — Vercel, Depot, Buildkite, and the Origin API
tags: [cursor, git, ci, hosting]
status: active
updated: 2026-09-02
when_to_use: Connecting preview/CI apps to an Origin repo, or writing an internal Origin API app (JWT + installation tokens)
---

## Summary

Origin **Apps** are installed at the **codebase** (`cursor.com/codebase/settings/apps`), then enabled per repository. Early beta third-party apps: **Vercel** (deploys + PR previews), **Depot** and **Buildkite** (CI on **Origin-hosted** repos only). Internal apps call `https://api.cursor.com/v1/origin` with app JWTs and short-lived `oit_…` installation tokens.

## Notes

- Repo Settings → Apps lists what’s on that repo; **Manage Apps** opens codebase settings. Changelog: connect Vercel for PR previews that ship on merge; Depot/Buildkite can run existing GitHub Actions workflows; Buildkite also runs native pipelines.
- **Depot/Buildkite do not run on GitHub-mirrored repos** — those keep CI on GitHub. Vercel is also the **Publish** target for Start-from-scratch Cloud Agents (`cursor-origin`); that is an account link, not this Apps tab.
- Internal apps: create the app in codebase settings. Auth is **app JWT** (app-level: metadata, installations, mint tokens, webhook recovery) then **installation access token** (`oit_…`) for repo-scoped APIs, check runs, and Git HTTPS clone. Never send the installation **receipt** as a Bearer token — store `sub` (installation id) and mint.
- Base URL `https://api.cursor.com/v1/origin`. OIDC discovery at `/.well-known/openid-configuration`; JWKS at `/keys` (EdDSA). User CLI traffic is `origin api` with the user’s credential — not the app path.
- Webhooks: verify `webhook-id` / `webhook-timestamp` / `webhook-signature` (`v1ed,`) against JWKS; reject timestamps older than ~300s. Failed deliveries listable 7 days via app JWT. Use short-lived JWTs; mint installation tokens just-in-time.

## Sources

- [Origin repository settings](https://cursor.com/docs/origin/settings) — accessed 2026-09-02
- [Codebase settings](https://cursor.com/docs/origin/codebase-settings) — accessed 2026-09-02
- [Origin API](https://cursor.com/docs/origin/api) — accessed 2026-09-02
- [Origin Code Hosting changelog](https://cursor.com/changelog/origin-code-hosting) — accessed 2026-09-02
- [Start from scratch, without a repo](https://cursor.com/changelog/start-from-scratch) — accessed 2026-09-02
