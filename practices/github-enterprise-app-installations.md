---
id: github-enterprise-app-installations
title: GitHub App enterprise installations — GA permissions vs org install
tags: [github, auth, governance, security]
status: active
updated: 2026-10-23
when_to_use: Replacing a classic enterprise PAT with a GitHub App, or installing an App on the enterprise account itself
---

## Summary

**Enterprise installations** for GitHub Apps are **generally available** (2026-10-23). An App installed on the **enterprise account** receives only the **enterprise** permissions it requested — it does **not** inherit org or repository access. Install separately on each org/repo that needs those scopes. Aimed at replacing classic PATs for governance / security / admin automation. Not Copilot cloud-agent identity (`github-copilot-coding-agent`) and not `gh` expiring OAuth (`github-cli-expiring-oauth`).

## Notes

- Who can install: enterprise owner. The App must request enterprise-level permissions (other requested permissions are ignored at this install). Owner can be the enterprise, an org inside it, or a **public** third-party App via the developer’s install link. A **private** App owned outside the enterprise cannot be installed.
- Token: the App mints an **enterprise installation token** (or acts as an enterprise member). Rate limit matches a GHEC org, **per installation** — enterprise + two orgs = three tokens. Acting on a user’s behalf still requires that user to be allowed to do the operation (for example invite members).
- New / expanded permissions (changelog): enterprise org+repo **policies** (R/W — forking, default perms, visibility, create/delete repo, issue delete, invitations, deploy keys, protected branches, dependency insights, org/repo projects); **bypass requests** (read push-rule / repo-policy bypasses); **enterprise settings** (R/W profile; read is required for the policy permission); **2FA** requirements and disallowed auth methods; **verifiable domains** (enterprise and org, write); **IP allowlists** (enterprise and org — entries, enforcement, trust of GitHub Apps, EMU user-level enforcement); **access restrictions** (write); enterprise **repository rulesets** (write, REST + GraphQL). Existing **enterprise people** now reads `EnterpriseRepositoryInfo` / outside collaborators and can add the caller as owner/member; **enterprise billing** write covers Marketplace member-purchasing.
- Docs lag: the “Installing a GitHub App on your enterprise” page still labels the feature **public preview** and lists older capabilities (create orgs, install Apps across orgs, SCIM, billing/budgets, SSO-authorize classic PATs / SSH keys). Treat the **2026-10-23 changelog as GA** for the new permission table; keep the docs’ **limitations** until they catch up: not every enterprise API works yet; **enterprise installations do not currently receive enterprise webhooks**.
- GHES: the new permissions ship in **GHES 3.24**. Prefer an App over a classic PAT in agent/CI automation that must change enterprise policy — still least-privilege the permission set, and still install on each org that needs repo writes.

## Sources

- [Enterprise installations for GitHub Apps generally available](https://github.blog/changelog/2026-10-23-enterprise-installations-for-github-apps-generally-available/) — accessed 2026-10-23
- [Installing a GitHub App on your enterprise](https://docs.github.com/en/enterprise-cloud@latest/apps/using-github-apps/installing-a-github-app-on-your-enterprise) — accessed 2026-10-23
