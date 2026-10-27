---
id: github-copilot-s2s-auth
title: Copilot SDK server-to-server auth — org installation tokens
tags: [github, sdk, auth, identity]
status: active
updated: 2026-10-27
when_to_use: Authenticating a Copilot SDK service with a GitHub App installation token instead of a signed-in user
---

## Summary

**Server-to-server authentication** (public preview, 2026-10-27) lets a **GitHub App installed on an organization** call the Copilot SDK with a short-lived **installation access token**. Usage is attributed and billed to that org; org **model policies, budgets, and spending controls** apply. No user Copilot subscription. Not a signed-in user / OAuth user token, not BYOK, and not the GitHub Actions `GITHUB_TOKEN` path (separate policy). Not enterprise- or user-account installations.

## Notes

- Outside Actions: create a GitHub App with organization **Copilot Requests = Read-only** (the name is access, not “free” — it spends org AI credits). Install it on the **organization** that should be billed. Mint a `ghs_` installation token with `{ "permissions": { "organization_copilot_requests": "read" } }`. Tokens expire in **one hour** — mint a replacement before expiry and restart the SDK client (child process) or host runtime (in-process / existing URI).
- Pass the token as the SDK’s explicit `gitHubToken` / `github_token` and set `useLoggedInUser: false`. That flag **also ignores** `COPILOT_GITHUB_TOKEN` / `GH_TOKEN` / `GITHUB_TOKEN` and stored CLI/`gh` credentials. For an already-running runtime URI only, set `COPILOT_GITHUB_TOKEN` on **that** process. Do not treat a user PAT as this path.
- GitHub Actions is a different path: `permissions: copilot-requests: write` on the built-in `GITHUB_TOKEN`, plus the org policy **Allow use of Copilot CLI billed to the organization**. No App and no stored secret. That org policy is **not** required for App installation tokens.
- Org owners: review owner/purpose/permissions before approving; enable **Stop usage when budget limit is reached** if a budget must actually halt spend (alert-only budgets do not). You cannot budget per app. Stop one app by **suspending or uninstalling** the org installation (also cuts its other org access). CSV AI usage reports expose `app_client_id`; match it to the org installations API `client_id` / `app_slug`. The field is empty for user, Actions, GitHub-owned apps, and pre-attribution rows.
- Failures: `401` → expired/invalid token; `403` “installation access tokens are not enabled” → org has not turned on App auth; `Not authenticated` with `useLoggedInUser: false` → token was not passed on the SDK option; model unavailable → org policy or runtime. Treat prompt/tool text as untrusted (`prompt-injection-agent-defense`).

## Sources

- [GitHub Copilot supports server-to-server authentication](https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication/) — accessed 2026-10-27
- [Server-to-server authentication](https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/server-to-server-tokens) — accessed 2026-10-27
- [Authentication (Copilot SDK)](https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/authenticate) — accessed 2026-10-27
- [Manage GitHub Apps that use your organization's Copilot](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-app-copilot-access) — accessed 2026-10-27
