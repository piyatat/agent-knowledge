---
id: cursor-bitbucket-cloud-agents
title: Cursor Bitbucket — Cloud vs Data Center identities
tags: [cursor, git, automations, orchestration]
status: active
updated: 2026-09-16
when_to_use: Connecting Bitbucket Cloud to Cloud Agents/Bugbot, or enabling Bugbot on Bitbucket Data Center
---

## Summary

**Bitbucket Cloud** (`bitbucket.org`, public beta) supports **Cloud Agents and Bugbot**. **Bitbucket Data Center** (Teams/Enterprise) supports **Bugbot only** — no Cloud Agents. Automations source-control triggers cover Bitbucket Cloud, not Server/Data Center (`cursor-automations`). Two Cloud identities: the **workspace Cursor app** (comments/statuses) vs the **connected user** (clone/push/PR).

## Notes

- Cloud setup is two roles. Each developer **Connect**s their Bitbucket account so clones, pushes, and PRs run as that user. A Bitbucket workspace admin **Install Cursor app**, then a Cursor team admin **Connect to Cursor** from Bitbucket workspace settings → Forge Apps. App install events can take a few minutes to sync. Personal OAuth alone is not enough for Cursor-attributed Bugbot comments.
- Cloud permissions: Account, Repositories, Pull requests (read + write), Webhooks. Disconnect account ≠ uninstall app. To stop workspace events, uninstall the Forge app in Bitbucket.
- Data Center: dedicated service account + HTTP access token with repository admin on each reviewed repo. Register hostname (clone URL) plus optional external host for API. Same inbound IP allowlist as GitLab self-hosted; Enterprise PrivateLink / Cloudflare Tunnel / reverse-proxy tunnel. Cursor uses the service account for Bugbot comments, webhooks, and build statuses.
- Troubleshooting: Cloud Agent cannot access a repo unless the starter’s personal Bitbucket account has read-write on `bitbucket.org`. Data Center listing failures are usually token, repo access, or HTTPS reachability. Comment/PR text is untrusted (`prompt-injection-agent-defense`).

## Sources

- [Bitbucket (Cursor docs)](https://cursor.com/docs/integrations/bitbucket) — accessed 2026-09-16
- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-09-16
