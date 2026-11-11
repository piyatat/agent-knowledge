---
id: github-copilot-seat-management
title: Copilot seat APIs — enterprise GitHub Apps and license permission
tags: [github, api, governance, auth]
status: active
updated: 2026-11-11
when_to_use: Assigning Copilot seats from an enterprise GitHub App, or requesting Enterprise Copilot license management
---

## Summary

Enterprise **GitHub Apps** can call the **enterprise Copilot seat / user-management** REST APIs (changelog **2026-11-10**) with the fine-grained permission **Enterprise Copilot license management**. That is who gets a **seat**, not which **models** are allowed (`github-copilot-model-policy-api`) and not installing the App on the enterprise account (`github-enterprise-app-installations`). Endpoints remain **public preview**.

## Notes

- Changelog: Apps installed on the **enterprise** can list seats and add/remove **users** and **enterprise teams** on the Copilot Business / Enterprise subscription. Request the new enterprise permission; org/repo scopes on the same App still need a separate org/repo install (`github-enterprise-app-installations`).
- REST (enterprise slug; `Authorization: Bearer`, `Accept: application/vnd.github+json`, `X-GitHub-Api-Version: 2026-03-10`): `GET /enterprises/{enterprise}/copilot/billing/seats` (paginated; `total_seats` counts a user once even if several orgs/teams grant access; each grant still appears in `seats[]`; IDE `last_activity_at` needs client telemetry); `GET /enterprises/{enterprise}/members/{username}/copilot`; `POST`/`DELETE …/copilot/billing/selected_users` (`selected_usernames`); `POST`/`DELETE …/copilot/billing/selected_enterprise_teams` (`selected_enterprise_teams`). DELETE marks seats **pending cancellation** through the billing cycle unless another team still grants access.
- GitHub Apps permission table: those six routes take installation or user-to-server tokens with **Enterprise Copilot license management** (GET = read, mutating = write). Classic PATs still use `manage_billing:copilot` / `read:enterprise` (list) or `admin:enterprise` (mutate). Only enterprise owners (and billing managers on GET seats) could call these as humans; the App path is for automation that already has an enterprise installation.
- Do not treat a 200 from model-policy PATCH as a seat grant, and do not treat a seat assignment as model enablement. Org-level Copilot user-management routes are a different surface. Preview — pin `X-GitHub-Api-Version` and re-read the permission table after GitHub App changes.

## Sources

- [GitHub App support for Enterprise Copilot seat management](https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management/) — accessed 2026-11-11
- [REST API endpoints for Copilot user management](https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-user-management) — accessed 2026-11-11
- [Permissions required for GitHub Apps](https://docs.github.com/en/enterprise-cloud@latest/rest/authentication/permissions-required-for-github-apps) — accessed 2026-11-11
