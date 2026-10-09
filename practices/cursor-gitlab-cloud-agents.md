---
id: cursor-gitlab-cloud-agents
title: Cursor GitLab — Cloud Agents and Bugbot (Premium+)
tags: [cursor, gitlab, automations, orchestration]
status: active
updated: 2026-10-09
when_to_use: Connecting GitLab.com or self-hosted GitLab to Cursor Cloud Agents, Bugbot, or Automations
---

## Summary

The **GitLab** integration is the SCM connect so Cloud Agents, Bugbot, and Automations can clone GitLab repos and open merge requests. That is not `@cursor` on GitHub (`cursor-github-cloud-agents`) and not Codex GitLab (`openai-codex-gitlab`). Mentions and saved Automations are separate features on the same connection.

## Notes

- GitLab.com and Self-Hosted both need a **paid GitLab plan (Premium or Ultimate)** — project access tokens do not exist on GitLab Free. Cursor admin + GitLab maintainer for the connect flow. Self-Hosted also needs a **Cursor Teams or Enterprise** plan.
- GitLab.com: Dashboard → Integrations → GitLab → install → **Sync Repos**. Self-Hosted: instance-level GitLab application (`Trusted`/`Confidential`, scopes `api` + `write_repository`, redirect `https://cursor.com/gitlab-connected`), then Dashboard → Advanced → GitLab Self-Hosted with Application ID/Secret. Inbound Cursor access + outbound webhooks. The documented IPv4 allowlist **grew** (Oct 2026) beyond the original three addresses — copy the current list from the GitLab docs rather than hard-coding. Enterprise: AWS PrivateLink, Cloudflare Tunnel, or a reverse-proxy tunnel (no Google Private Service Connect). Delete Instance removes OAuth credentials, webhook secret, service-account/user tokens, and Cursor-created webhooks; Bugbot settings and learned rules survive a same-hostname reconnect.
- **Protected Git Scopes** lock a GitLab group/namespace to one Cursor org (GitLab Owner). After connect: enable Bugbot and Cloud Agents per repo. Automations can use GitLab MR/push triggers; **Comment on PR** accepts GitLab MR URLs including self-hosted. Git PR triggers accept a nested GitLab group (`group/subgroup`) or an org URL as the org scope (`cursor-automations`).
- MR/issue text is untrusted (`prompt-injection-agent-defense`). Do not treat App install as “agents are on.”

## Sources

- [GitLab (Cursor docs)](https://cursor.com/docs/integrations/gitlab) — accessed 2026-10-09
- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-10-09
- [Cursor web release notes](https://cursor.com/docs/release-notes/web) — accessed 2026-10-09
