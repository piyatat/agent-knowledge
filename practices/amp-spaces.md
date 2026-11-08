---
id: amp-spaces
title: Amp Spaces — coordinating agent that spawns threads
tags: [amp, orchestration, multi-agent, ux]
status: active
updated: 2026-11-08
when_to_use: Using Amp Spaces to spawn/coordinate threads, or distinguishing them from Amp thread voice calls and Devin Desktop Spaces
---

## Summary

**Amp Spaces** (2026-11-06) are a conversation with **one coordinating agent** whose job is to spawn and steer **threads** in a single Amp project. You chat in the Space; Amp starts parallel threads and posts each as a live card. Not an orb (`amp-agent`), not Puck, not Devin Desktop Spaces (`devin-desktop-acp`), and not the per-thread voice/video **Space** tab (`ampcode.com/docs/collaborate/space`).

## Notes

- Create from the sidebar **Spaces** section (**+** / New Space): **Name**, optional **Goal** (keeps spawned threads aimed at it), **Project**, **Shared with**. Ask in the chat; Amp answers or starts a thread per piece of work. Click a card to open the thread beside the chat, iterate there, and ship. To talk instead of type, start the Space’s **Huddle**.
- Bring in a thread you started elsewhere by asking the Space (or Puck / the thread) with its link or ID. The thread must be yours and shared at least as widely as the Space; a thread another thread started, or one already in another Space, cannot be added. Once added, Space members can prompt it while the Space is multiplayer.
- Slack: link **public** channels Amp is in. Only `@Amp` mentions reach the Space. Only a Space shared with the **whole workspace** can link channels. Teammate comments on Space messages stay human-only until someone mentions `@amp`.
- Sharing: workspace/group share turns **multiplayer** on. Shared Spaces start threads only in **orbs or workspace-shared runners** (not personal runners); they message only threads everyone can see with multiplayer on. **Only You** Spaces are not multiplayer.
- Progress chart (last 30 days under the Goal): **Shipped** (commits on default branch via `Amp-Thread-ID` trailer, merged GitHub PR, or Ship archive — needs Amp-hosted repos, GitHub App, or GitLab **Push Updates**), **Archived**, **Open**. Hosts Amp cannot see (Bitbucket, self-hosted Forgejo/Gitea) show **Done** instead. `amp.git.commit.ampThread.enabled` off means those commits do not count as shipped.

## Sources

- [Spaces](https://ampcode.com/docs/markdown/spaces) — accessed 2026-11-08
- [Spaces (launch)](https://ampcode.com/news/spaces) — accessed 2026-11-08
- [Agent to Agent](https://ampcode.com/docs/orbs/agent-to-agent) — accessed 2026-11-08
- [Space (thread voice/video)](https://ampcode.com/docs/collaborate/space) — accessed 2026-11-08
