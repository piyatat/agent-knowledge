---
id: cursor-cloud-pr-artifacts
title: Cloud Agent PR artifacts, remote desktop, and CI autofix
tags: [cursor, ci, computer-use, security]
status: active
updated: 2026-08-28
when_to_use: Reviewing Cloud Agent PRs via screenshots/video, taking remote desktop, or controlling GitHub Actions auto-fix
---

## Summary

Cloud Agents verify work **on the VM**: computer use (mouse/keyboard/browser), **artifacts** (screenshots, videos, logs) on the PR, optional **remote desktop** handoff, and **automatic GitHub Actions follow-ups** on PRs they opened (Teams). Treat GitHub-embedded artifact URLs as public.

## Notes

- Computer use: the agent starts the app, clicks through UI, and records proof before pushing. Containment still applies (`computer-use-containment`). Dockerfile-based environments need Debian/Ubuntu for computer use.
- Artifacts attach to the PR so reviewers need not check out the branch. Opt-in **Allow posting artifacts to GitHub** embeds them in the GitHub description. GitHub’s image proxy needs public URLs — those links are long and unguessable but **unauthenticated**. Do not put secrets in screenshots.
- Remote desktop: take control of the agent VM, test, then hand control back. The checkout stays in the cloud.
- CI autofix (Teams, GitHub Actions only): the agent retries failures on PRs **it created**, up to **10** follow-ups. Skips when you pushed a human commit, sent a follow-up message, or the same check already fails on the **base** commit. Disable globally (Dashboard → Cloud Agents → My Settings) or per PR with `@cursor autofix off` / `on`. For your own PRs, `@cursor please fix the CI failures`. This is **not** Bugbot Autofix (`cursor-bugbot-review`).
- Subscriptions (`cursor-cloud-always-on`) are the wait loop (review comments, CI, Slack). Autofix is the automatic CI hop without a new prompt.

## Sources

- [Cloud Agent capabilities](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-28
- [Cloud Agents help](https://cursor.com/help/ai-features/cloud-agents) — accessed 2026-08-28
- [Cloud Agents overview](https://cursor.com/docs/cloud-agent) — accessed 2026-08-28
