---
id: cursor-origin-apps
title: Origin apps — marketplace, publish, and the Origin API
tags: [cursor, git, ci, hosting, marketplace]
status: active
updated: 2026-10-13
when_to_use: Installing an Origin marketplace app, publishing one for review, or calling the Origin API with app JWTs
---

## Summary

Origin **Apps** live under codebase settings (`cursor.com/codebase/settings/apps`). Install **marketplace** apps there, then enable them per repo. Create a **private** app in your namespace for the Origin API (`https://api.cursor.com/v1/origin`). **2026-10-13:** the marketplace is open to public submissions and lists 20+ partner apps. Early beta — pin the OpenAPI spec.

## Notes

- Codebase Apps opens a **Marketplace** plus a **Manage** view. Install screens mark **Verified by Cursor** (listed) vs **Not verified**. A request-to-install can pick all or selected repos (install-link repo preselected); namespace owners / team admins get email on request, approval, and deny. You can cancel a pending request. **Depot / Buildkite / other CI** still run on **Origin-hosted** repos only — GitHub-mirrored repos keep CI on GitHub (`cursor-origin`). Vercel remains the **Publish** target for Start-from-scratch Cloud Agents.
- Changelog categories (2026-10-13): Deployments (Cloudflare, Netlify, Render, Spacelift, Vercel); CI (Buildkite, CircleCI, CloudBees, Depot, EngFlow, Namespace, RWX); Code review (CodeRabbit, Greptile, Tenki); Security (Artemis, Semgrep, Socket, Upwind); Monitoring (Sentry); Project management (Linear). Listing ≠ runtime allowlist.
- Visibility: **Private** (namespace only) → **Public** (any Origin team can install from a direct `client_id=app_01…` link; needs ≥1 default scope; **not** listed yet) → **Listed** (Cursor review). Unlist / Private hides the listing; existing installs keep working. Relisting a formerly Listed app that went Private needs a **new** submit. Marketplace install URL: `https://cursor.com/codebase/apps/install?client_id=<APP_ID>&source=app-metadata&returnTo=/codebase/settings/apps` — do **not** add `scope` or `redirect_uri` (those are partner-initiated install). Public listing pages work only after Listed.
- Submit (namespace admin): 5–10 min demo (no sign-in: unlisted YouTube / public Drive) covering product flows, Origin install/uninstall both directions, personal **and** team, all-repos **and** selected-repos; optional site-started install, new vs existing user, repo link, scope update. Description required; slug optional (immutable once listed); tags optional. Cursor reviews every submission.
- Auth: **app JWT** then **installation access token** (`oit_…`, ≤15 min). **Create Installation User Token** acts as a named member (`userId` / `userEmail`); actors may show `performedVia.app`. Never send the installation **receipt** as Bearer. User CLI is `origin api` (`cursor-origin`). Inbound IP allowlists apply to **people**, not apps/service accounts/agents (up to 1,000 CIDRs). Webhooks: `webhook-id` / `webhook-timestamp` / `webhook-signature` (`v1ed,`); reject stale timestamps. Mirror cutover is `cursor-origin-migrations`.

## Sources

- [Origin Apps](https://cursor.com/docs/origin/apps) — accessed 2026-10-13
- [Publish to the App Marketplace](https://cursor.com/docs/origin/apps/publish) — accessed 2026-10-13
- [Origin App Marketplace (changelog)](https://cursor.com/changelog) — accessed 2026-10-13
- [Origin release notes](https://cursor.com/docs/release-notes/origin) — accessed 2026-10-13
- [Origin API](https://cursor.com/docs/origin/api) — accessed 2026-09-29
- [Origin API changelog](https://cursor.com/docs/api/origin/changelog) — accessed 2026-09-29
- [Codebase settings](https://cursor.com/docs/origin/codebase-settings) — accessed 2026-09-29
- [Origin repository settings](https://cursor.com/docs/origin/settings) — accessed 2026-09-02


