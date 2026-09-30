---
id: openai-codex-cloud-environments
title: Codex Cloud environments — publish, secrets, and VPN
tags: [openai, sandbox, ops, orchestration]
status: active
updated: 2026-09-30
when_to_use: Creating a reusable Codex Cloud environment, sharing it in a workspace, or contrasting it with local CLI sandbox
---

## Summary

A Codex **Cloud environment** is the **published filesystem recipe** for ChatGPT Codex Cloud tasks: repos, install/start, env/secrets, network, optional VPN/OIDC. Each **new task** gets an isolated workspace from that snapshot; an **existing task** keeps its own files (including uncommitted work). Not the local CLI sandbox (`openai-codex-permissions`) and not Cursor `.cursor/environment.json`. **Codex Cloud (Legacy)** still backs some Code Review / Linear / GitHub flows and is slated for deprecation.

## Notes

- Create on web or desktop: Work in → Cloud → Create environment (or Settings → Codex Cloud → Environments). Codex inspects selected **GitHub** repos, installs deps, and tests with you. **Save** writes config; **Publish** freezes the prepared disk for new tasks. **Republish** after Edit; old tasks keep their state. Sharing (**Who can use**) is the setup, not someone else’s task files. Skills in the **repo** travel; personal local skills do not.
- Install script vs **Start skill**: recorded from the setup conversation — you do not have to hand-write them. Background **repository refresh** updates the tree while keeping dependency caches (does not rerun install/start). Default VM: Plus 2 vCPU / 8 GiB / 8 GiB disk; Pro/Business/Enterprise/Edu 4 / 16 / 32. Saved VM state recoverable **~7 days** after last turn. Computer/browser use, GitLab, and GHES are **not** supported yet.
- Secrets: **environment variables** (process-visible) vs **network secrets** (HTTPS:443 proxy substitution; programs see a placeholder). Saving a network secret also allowlists its domains. **Personal vault** holds per-user values for shared environments (optional keys; environment-specific overrides the “all environments” default). Agent-visible env can leak in transcripts — prefer network secrets for registry tokens.
- Network: Agent Security (Enterprise) stacks with the environment’s allowlist. Package-managers preset lists npm/PyPI/crates/Go/Maven/etc. **Tailscale** VPN (Reusable + Ephemeral auth keys); IPv4 only, no private DNS, no native DB/SSH. **OIDC** (Enterprise, request access) attaches a workload identity; personal cloud IAM does not transfer.
- Start tasks from the same published environment on web/mobile/desktop; Slack/Teams `@ChatGPT` can pick a shared environment when Cloud delegation is on. Contrast Agents API hosted sandboxes (`openai-agents-api`).

## Sources

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments) — accessed 2026-09-30
- [openai/codex-universal](https://github.com/openai/codex-universal) — accessed 2026-09-04
- [AGENTS.md](https://agents.md/) — accessed 2026-09-04
