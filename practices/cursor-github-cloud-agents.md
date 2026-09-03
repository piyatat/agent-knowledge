---
id: cursor-github-cloud-agents
title: Cursor GitHub — App install vs @cursor mentions
tags: [cursor, github, automations, orchestration]
status: active
updated: 2026-09-03
when_to_use: Connecting the Cursor GitHub App, or starting a Cloud Agent with @cursor / @cursoragent on an issue or PR
---

## Summary

The **Cursor GitHub App** is the SCM connect so Cloud Agents, Bugbot, and Automations can clone and open PRs. Commenting **`@cursor`** (or **`@cursoragent`** for self-hosted routing) **starts a Cloud Agent**. That is not Bugbot (`cursor-bugbot-review`), not a saved Automation, and not a running agent’s GitHub **subscription**.

## Notes

- Admin setup: Dashboard → Integrations → GitHub (all or selected repos). GHES v3.8+ needs inbound Cursor access plus outbound webhooks; Enterprise can use IP allowlists, AWS PrivateLink, or Cloudflare Tunnel. Protected Git Scopes lock a GitHub org to one Cursor org (`cursor-enterprise-mcp-policy`).
- Mentions: `@cursor` on a GitHub issue or PR (Bitbucket: PR only) starts a run on that repo. For Team Pools / My Machines, comment `@cursoragent pool=…`, `self_hosted=true`, or `worker=` / `machine=` — only repo **OWNER** / **COLLABORATOR** commenters may route to self-hosted workers; others stay on managed VMs (or are skipped if self-hosted is required). This is intentional on public repos.
- The App’s permission set covers clone/PR/issues/checks/Actions (CI re-run), plus admin read for mergeability. Reinstall from github.com/apps/cursor if the install is missing. Artifacts in PR descriptions are a separate Cloud Agents dashboard opt-in (`cursor-cloud-pr-artifacts`).
- Do not treat App install as “agents are on.” Bugbot, Automations, and `@cursor` mentions are separate features on the same connection. PR/issue comment text is untrusted (`prompt-injection-agent-defense`).

## Sources

- [GitHub (Cursor docs)](https://cursor.com/docs/integrations/github) — accessed 2026-09-03
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-03
- [Team Pools](https://cursor.com/docs/cloud-agent/self-hosted/pool) — accessed 2026-09-03
- [My Machines](https://cursor.com/docs/cloud-agent/self-hosted-guides/my-machines) — accessed 2026-09-03
- [Cloud Agent capabilities](https://cursor.com/docs/cloud-agent/capabilities.md) — accessed 2026-09-03
