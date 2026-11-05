---
id: cursor-cloud-apps
title: Cursor Cloud Agent Apps — hosted web apps with Postgres and Cursor auth
tags: [cursor, hosting, security, ux]
status: active
updated: 2026-11-05
when_to_use: Asking a Cloud Agent to build, preview, or publish a live web app, or contrasting it with Origin marketplace apps and canvases
---

## Summary

**Cloud Agent Apps** (2026-11-05) let a **cloud agent** scaffold a web app, optionally provision **Postgres**, put private/team access behind **Cursor sign-in**, and **publish** a live URL after deterministic plus agentic security checks. Paid plans with cloud agents. **Not local Agent.** Not Origin marketplace apps (`cursor-origin-apps`), not in-chat canvases (`cursor-canvases`), and not ChatGPT Sites (`openai-codex-sites`).

## Notes

- Be explicit (“build an app” / “deploy this repo as an app”). Start from scratch (new Origin repo) or deploy an existing **GitHub** or Origin repo. GitLab and other forges are **coming soon**. A tray appears for preview + publish; you pick the URL (changeable later). Nothing goes live until you publish and checks pass. Failed checks list fixes; tell the agent to repair, then publish again.
- Hosting is a **dedicated account** per team (or per individual). Isolated from other teams/users. Database is auto-provisioned Postgres when needed. Private and team apps require Cursor sign-in for the people/groups you share with. **Public** (anyone with the link, no Cursor auth) is allowed on individual plans; **Teams/Enterprise default off** — an admin can enable it in the Apps dashboard. Disallowing public moves existing public apps back to team visibility.
- Secrets: the agent **never sees values**. Team admins usually create team secrets in the Apps dashboard; personal secrets if you have access. Use them for warehouses and other systems. This is not Cloud Agent VM env/runtime/build secrets (`cursor-cloud-secrets-network`).
- Automated callers cannot complete Cursor sign-in. Send a Cursor API key in **`x-cursor-app-token`** on every request (header only — no query param, no cookie). Personal keys open apps the owner can open; team keys open only team apps they were granted; public apps open for either. A denied key gets the sign-in redirect. Requests are marked automated and identify the **key**, never a person. Admins can disallow API-key access. Grok Bot / scripts / CI use this (`cursor-grok-bot`).
- Always-on publish checks (even if AI review is off): block secrets in app files; block credential files; never publish `.env`; never publish source maps. An AI security review also runs; team admins can **add** review-prompt rules (cannot remove built-ins). Admins can approve a blocked publish **except** malicious code, hardcoded secrets, or exposed credentials; unpublish any app; turn Apps on/off. Setting changes go to the team audit log (`cursor-organization-audit-logs`).
- Hosting is separate from Cursor product services and may be revoked for AUP/account/legal reasons. Treat generated apps as untrusted if another agent later consumes them (`prompt-injection-agent-defense`).

## Sources

- [Apps (Cloud Agents)](https://cursor.com/docs/cloud-agent/apps) — accessed 2026-11-05
- [Build Live Apps in Cursor (changelog)](https://cursor.com/changelog) — accessed 2026-11-05
- [Cloud Agent security](https://cursor.com/docs/cloud-agent/security) — accessed 2026-11-05
