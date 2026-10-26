---
id: cursor-cloud-pr-artifacts
title: Cloud Agent PR artifacts, remote desktop, and CI autofix
tags: [cursor, ci, computer-use, security]
status: active
updated: 2026-10-26
when_to_use: Reviewing Cloud Agent PRs via screenshots/video, taking remote desktop, or controlling GitHub Actions auto-fix
---

## Summary

Cloud Agents verify work **on the VM**: computer use (mouse/keyboard/browser), **artifacts** (screenshots, videos, logs) on the PR, optional **remote desktop** handoff, and **automatic GitHub Actions follow-ups** on PRs they opened (Teams). Treat GitHub-embedded artifact URLs as public. Interactive **canvases** are a separate shareable artifact (`cursor-canvases`).

## Notes

- Computer use: the agent starts the app, clicks through UI, and records proof before pushing. Containment still applies (`computer-use-containment`). Dockerfile-based environments need Debian/Ubuntu for computer use. Self-Hosted: start the worker with `--computer-use`.
- Artifacts attach to the PR so reviewers need not check out the branch. Opt-in **Allow posting artifacts to GitHub** embeds them in the GitHub description. GitHub’s image proxy needs public URLs — those links are long and unguessable but **unauthenticated**. Do not put secrets in screenshots. Week of 2026-10-05: links inside PR-description tables/HTML now render; Cursor no longer posts a public link for a file it could not confirm exists, and later turns do not re-announce the same artifacts.
- **Slack unfurls** (same week): a cloud-agent artifact link (including a public share) expands with file name, type, and video length **only** when the sharer can access the artifact, and is skipped in channels shared outside the workspace (`cursor-slack-cloud-agents`). Origin-hosted PR links also unfurl a short description excerpt, including Changes/Commits tab URLs.
- Remote desktop: take control of the agent VM, test, then hand control back. The checkout stays in the cloud.
- **Draft vs ready** (week of 2026-10-19): Cloud Agents, including Project workers, now open PRs **ready for review** unless you or the task ask for a draft. Codebase settings → Pull requests → **Never open PRs as drafts** keeps every new PR (yours and the agent’s) ready even when a draft is requested. Agent comments/replies/reviews on **private Origin** PRs append an **Open in Web** button to the run (`cursor-origin`).
- CI autofix (Teams, GitHub Actions only): the agent retries failures on PRs **it created**, up to **10** follow-ups. Skips when you pushed a human commit, sent a follow-up message, or the same check already fails on the **base** commit. Disable globally (Dashboard → Cloud Agents → My Settings) or per PR with `@cursor autofix off` / `on`. For your own PRs, `@cursor please fix the CI failures`. This is **not** Bugbot Autofix (`cursor-bugbot-review`).
- Subscriptions (`cursor-cloud-always-on`) are the wait loop (review comments, CI, Slack). Autofix is the automatic CI hop without a new prompt.

## Sources

- [Cloud Agent capabilities](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-10-26
- [Cloud Agents release notes](https://cursor.com/docs/release-notes/cloud-agents) — accessed 2026-10-26
- [Slack (Cursor docs)](https://cursor.com/docs/integrations/slack) — accessed 2026-10-17
- [Cloud Agents help](https://cursor.com/help/ai-features/cloud-agents) — accessed 2026-08-28
- [Cloud Agents overview](https://cursor.com/docs/cloud-agent) — accessed 2026-10-17
