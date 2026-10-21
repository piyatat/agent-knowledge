---
id: github-cli-expiring-oauth
title: GitHub CLI expiring OAuth — refreshable tokens (v2.103.0)
tags: [github, cli, auth, security]
status: active
updated: 2026-10-21
when_to_use: Opting gh into --expiring OAuth, or debugging a script that cached gh auth token
---

## Summary

**GitHub CLI v2.103.0** (public preview, 2026-10-21) can store an **expiring access token plus a rotating refresh token** instead of a long-lived OAuth token. Opt in with `gh auth login --expiring` or `gh config set expiring_credentials enabled`. Not a Copilot CLI login (`github-copilot-cli`) and not a PAT / `GH_TOKEN` you supply yourself. Default remains the non-expiring token.

## Notes

- Preference, not a guarantee: `--expiring` **asks** for refreshable credentials. If the host or OAuth app cannot issue them, `gh` falls back to a normal non-expiring token. A host already configured for them may issue expiring tokens even without the flag. `--expiring=false` requests a non-expiring token even when the config is on. `gh auth refresh` without the flag **keeps the current kind** — pass `--expiring` (or enable the setting) when changing scopes, or you can replace an expiring credential with a long-lived one.
- Availability: **github.com** and **ghe.com** today. **GHES 3.23+** issues them; earlier GHES falls back. GitHub says this will become the **default for new sign-ins** in a later release. Existing sign-ins and env-var / `--with-token` tokens are unchanged until you re-login.
- Day to day: `gh` refreshes in the background. `gh auth status` shows expiry (and refreshes a near-expiry token unless `--no-refresh`). `gh auth token` prints a **fresh** access token unless `--no-refresh`. **Do not cache** that string in a script, extension, or another tool — it dies in hours. Read it again each time. `GH_TOKEN` / Actions `github.token` stay the automation path; they do not use this refresh loop.
- Git over HTTPS: run `gh auth setup-git` so `gh` is the credential helper and can rotate for `git push` / `git pull`. **Git 2.46+** lets `gh` mark the credential non-cacheable; older Git still works but a caching helper can keep an expired token. Coding agents that shell out to `gh` or copy `gh auth token` into MCP / HTTPS headers will fail after expiry if they stash the value (`github-copilot-sandbox`).

## Sources

- [GitHub CLI: Opt in to expiring, auto-refreshing OAuth tokens](https://github.blog/changelog/2026-10-21-github-cli-opt-in-to-expiring-auto-refreshing-oauth-tokens/) — accessed 2026-10-21
- [Authenticating with GitHub CLI](https://docs.github.com/en/github-cli/github-cli/authenticating-with-github-cli) — accessed 2026-10-21
- [gh auth login](https://cli.github.com/manual/gh_auth_login) — accessed 2026-10-21
- [gh config](https://cli.github.com/manual/gh_config) — accessed 2026-10-21
- [gh auth refresh](https://cli.github.com/manual/gh_auth_refresh) — accessed 2026-10-21
