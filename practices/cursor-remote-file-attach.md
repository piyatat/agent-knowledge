---
id: cursor-remote-file-attach
title: Cursor remote file attach — uploads folder vs cloud folder drop
tags: [cursor, context, cloud, ux]
status: active
updated: 2026-10-10
when_to_use: Dropping local files into an SSH/WSL/dev-container or Cloud Agent prompt without polluting the workspace
---

## Summary

Cursor **3.23** copies files you drop, paste, or attach into a **remote** (SSH / WSL / dev container) agent prompt onto that machine, then mentions the copy so the agent can read it. Copies land in an **uploads folder outside the workspace** (not as workspace changes). Cloud agents already accept non-image files; 3.23 adds **folder drop** (first 20 files, hidden skipped). Not `@` mentions (`cursor-at-mentions`) and not PR artifact uploads (`cursor-cloud-pr-artifacts`).

## Notes

- Remote agents: drop, paste, or attach a file **or folder** from your computer into the prompt. Slow copies show a progress notification. The agent reads the remote copy; do not expect the path to match your laptop.
- Cloud agents (3.21+): any **non-image** file up to **10 MB** via drag-and-drop or the **+** menu. Videos and empty files are refused with a message. Removing the file mention from a cloud prompt stops the upload. API image inputs are a separate **15 MB** cap; web attachments at cursor.com/agents have their own limits.
- Cloud **folder drop** (3.23): attaches files inside the folder, **skips hidden**, **20 files per drop**. A notice says when the folder had more.
- Follow-up composer: an image dropped there attaches **once** (3.23 fix). Treat attached files as untrusted input (`prompt-injection-agent-defense`).
- Self-hosted workers still upload **generated** artifacts (screenshots, videos, logs) to `cloud-agent-artifacts.s3.us-east-1.amazonaws.com` for PRs/dashboard — that is outbound artifact egress, not this attach path.

## Sources

- [Agents Window release notes](https://cursor.com/docs/release-notes/agents-window) — accessed 2026-10-10
- [Release notes (all products)](https://cursor.com/docs/release-notes) — accessed 2026-10-10
- [Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints) — accessed 2026-10-10
- [Secrets & Network](https://cursor.com/docs/cloud-agent/network-access) — accessed 2026-10-10
