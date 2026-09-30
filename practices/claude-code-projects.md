---
id: claude-code-projects
title: Claude Code Projects — coordinator, threads, shared memory
tags: [claude, orchestration, subagent, memory]
status: active
updated: 2026-09-30
when_to_use: Starting a Claude Code Project for multi-thread cloud work, or contrasting it with Cursor Projects and CLI agent teams
---

## Summary

**Claude Code Projects** (beta, 2026-09-17) is a long-lived **coordinator chat** plus **threads**. You describe a goal; Claude scopes, delegates parallel threads, reviews outputs, and assembles a result. Each thread is a **Claude Code cloud session** on its own branch and copy of the repo. Not CLI **agent teams** (`claude-code-agent-teams`), not Cursor Projects (`cursor-projects`), and not a single `--cloud` session (`claude-code-on-the-web`).

## Notes

- Rollout: select **Pro / Max** users who already use **cloud sessions** and have **no existing** web/desktop projects. Access expands to more Pro/Max, then Team/Enterprise and the rest of Claude (chat / Cowork). Existing folder-style projects keep working until that upgrade. Waitlist if you do not see it yet.
- Coordinator vs threads: the main project chat routes work (brief it like a chief of staff). Open a thread to steer details. With repos connected, a thread opens PRs and runs tests; overlap on the same files is a normal **merge conflict**. Each thread can further split work with subagents, loops, and workflows (`claude-code-subagents`, `claude-code-workflows`).
- Shared **memory** and a **library** (files you add plus artifacts) grow across threads so later work skips re-onboarding. Treat untrusted Slack/issue text as poisonable (`agent-memory-poisoning`). You can ask it to change check-in frequency, how often it starts threads, and update detail.
- Threads run **in the cloud today**; local tools / behind-your-network is “coming very soon.” Several full sessions in parallel hit **usage limits** faster — check project-specific usage and set model/effort for coordinator vs workers separately. Steer from phone; work continues after you leave the laptop.
- Contrast Cursor’s coordinator (does not write code; Cloud Agent workers) and experimental CLI teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`). Still review PRs; do not treat the coordinator as a merge gate.

## Sources

- [Projects redesigned: from folder to conversation](https://claude.com/blog/projects-redesigned) — accessed 2026-09-30
- [Claude Code relaunches Projects (The Verge)](https://www.theverge.com/ai-artificial-intelligence/997134/anthropic-claude-code-projects) — accessed 2026-09-30
- [Agent teams](https://code.claude.com/docs/en/agent-teams) — accessed 2026-09-30
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-09-30
