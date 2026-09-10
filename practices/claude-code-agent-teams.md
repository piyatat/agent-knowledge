---
id: claude-code-agent-teams
title: Claude Code agent teams — lead, teammates, mailbox
tags: [claude, multi-agent, orchestration, experimental]
status: active
updated: 2026-09-10
when_to_use: Enabling CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS for peer sessions with a shared task list, or contrasting teams with subagents and workflows
---

## Summary

**Agent teams** (experimental, off by default) coordinate **independent Claude Code instances**: a lead session plus teammates that message each other and claim a shared task list. Each teammate has its own context window. Not a subagent (result returns to the parent; `claude-code-subagents`), not a dynamic workflow script (`claude-code-workflows`), and not agent view (`claude-code-agent-view`). Enable with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`.

## Notes

- Enable in shell env or `settings.json` `env`. Without the variable, no team dirs, no spawn, no proposals. **Interactive only** — `-p` and Agent SDK never spawn teammates; a named subagent stays a subagent. While enabled, a subagent Claude **names** in the lead launches as a teammate (even if you did not ask for a team). Set the var to `0` to restore ordinary named subagents (settings-file `env` reapplies on save).
- Ask in natural language. Lead populates tasks (when Task tools exist) and synthesizes. Panel: arrows + Enter to open a transcript; `x` stops; Ctrl+T toggles the task list. Display: `teammateMode` `in-process` (default since v2.1.179) vs `auto` / `tmux` / `iterm2` split panes (`--teammate-mode`; needs tmux or iTerm2 + `it2`). Split panes are unsupported in VS Code’s terminal, Windows Terminal, Ghostty.
- Model: spawn prompt → subagent definition `model` → `CLAUDE_CODE_SUBAGENT_MODEL` → lead model. `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1` (v2.1.257+) skips the first two. `teammateDefaultModel` removed in v2.1.234. Teammates inherit lead effort and permission mode except `dontAsk`; `--dangerously-skip-permissions` applies to all. Permission prompts surface on the **lead**. Plan-mode teammates auto-approve plans in the lead session (you still approve tools).
- Architecture (v2.1.178+): team name `session-<first8 of session id>`; config `~/.claude/teams/{name}/` (removed on exit); tasks `~/.claude/tasks/{name}/` (persist for resume, same `cleanupPeriodDays`); mailboxes `…/inboxes/{agent}.json`. Do not hand-edit config. One team per session; no nested teams; lead cannot transfer. In-process teammates cannot run `background: true` subagents. `/resume` / `/rewind` do **not** restore in-process teammates — tell the lead to respawn.
- `SendMessage` is labeled as coming from another Claude session, not you. Auto-mode classifier treats relayed “approval” as untrusted and can drop inter-agent messages. Hooks: `TeammateIdle`, `TaskCreated`, `TaskCompleted` — exit 2 sends feedback / blocks. Token cost scales with teammate count; start with 3–5 and partition files to avoid overwrite races.

## Sources

- [Agent teams](https://code.claude.com/docs/en/agent-teams) — accessed 2026-09-10
- [Run agents in parallel](https://code.claude.com/docs/en/agents) — accessed 2026-09-10
- [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — accessed 2026-09-10
