---
id: cursor-cli-cloud-handoff
title: Cursor CLI cloud handoff — & transfer vs /in-cloud
tags: [cursor, cli, orchestration, session]
status: active
updated: 2026-09-12
when_to_use: Sending a Cursor CLI conversation to a Cloud Agent with &, or contrasting it with /in-cloud
---

## Summary

Cursor CLI **cloud handoff** prefixes a message with **`&`** to transfer the **live conversation** to a Cloud Agent VM+branch, then you pick it up at cursor.com/agents (web/mobile). The local CLI can keep working. Not `/in-cloud` (next parent task as a **cloud subagent** while you stay local — `cursor-custom-subagents`) and not starting a Cloud Agent from Slack/GitHub (`cursor-slack-cloud-agents`, `cursor-github-cloud-agents`). Needs Cloud Agents access on a Git repo.

## Notes

- Docs form: `& refactor the auth module and add comprehensive tests`. Changelog: transfers preserve selected model and workspace path; the prompt shows status; `Esc` / `Ctrl-C` cancels; failure details stay visible. Plan mode’s persistent menu can **Build in Cloud** and carries plan content into the cloud agent.
- Contrast: `&` moves **this** thread; `/in-cloud` / `/babysit` spawn a child on a cloud VM while the parent continues. Cloud MCP comes from team cursor.com/agents config, not local `mcp.json` (`cursor-cloud-mcp-http-vs-stdio`). Cloud Agents always run Max Mode (no toggle) and bill API rates at the model’s max context (`cursor-cloud-always-on`).
- Related CLI session tools: `--resume [thread id]`, `agent resume` / `--continue` / `/resume`, `agent ls`. Worktrees: `-w` / `--worktree` under `~/.cursor/worktrees/` (`cursor-worktrees`). Headless `-p` still has full write access (`cursor-cli-headless`) — `&` is interactive.

## Sources

- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-09-12
- [CLI overview](https://cursor.com/docs/cli/overview) — accessed 2026-09-12
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-09-12
- [Subagents](https://cursor.com/docs/subagents) — accessed 2026-09-12
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-12
