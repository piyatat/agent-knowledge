---
id: cursor-agent-review
title: Cursor Agent Review — local working-tree review
tags: [cursor, review, git, ux]
status: active
updated: 2026-09-17
when_to_use: Running a local Agent Review on uncommitted/unpushed changes, or contrasting it with Bugbot on PRs
---

## Summary

**Agent Review** is an in-editor review of **local** changes. It is not Bugbot on a remote PR (`cursor-bugbot-review`), not Security Agents (`cursor-security-agents`), and not a merge check. Configure under Settings → Agents → Agent Review (Cursor **3.11+**: Git & PRs → Pull Requests).

## Notes

- Triggers: **automatic after every commit** (when enabled), slash `/agent-review` in the agent input, or Source Control → Agent Review (diff of all local changes vs **main**, not only the last edit).
- Depth: **Quick** (cheap/fast — small diffs, formatting, sanity check) vs **Deep** (slower/costlier — complex logic, security-sensitive, large refactors).
- Also reads repository **`BUGBOT.md`** rules (same files Bugbot uses). Local findings do not publish a GitHub/GitLab check by themselves; open a PR if you need Bugbot’s CI check / Autofix.
- Treat review output as advisory. Pair Deep reviews with HITL before merge (`human-in-the-loop-approvals`). Untrusted comment/rule text in `BUGBOT.md` is still instruction context (`prompt-injection-agent-defense`).

## Sources

- [Agent Review](https://cursor.com/docs/agent/agent-review) — accessed 2026-09-17
- [Bugbot](https://cursor.com/docs/bugbot) — accessed 2026-09-17
