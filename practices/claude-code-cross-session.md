---
id: claude-code-cross-session
title: Claude Code cross-session messaging — ListAgents and SendMessage
tags: [claude, session, multi-agent, orchestration]
status: active
updated: 2026-09-19
when_to_use: Passing a finding between local Claude Code sessions, or locking down SendMessage / inbound peer mail
---

## Summary

**Cross-session messaging** (v2.1.224+, macOS/Linux) lets one Claude Code session send **plain text** to another. Claude discovers peers with `ListAgents` (`/list-agents` / `/peers`) and delivers with `SendMessage`. A message is never conversation history or files. Not agent teams (`claude-code-agent-teams`), not resume, not Remote Control steering (`claude-code-remote-control`).

## Notes

- Same-machine: per-session Unix inbox socket (user-restricted). `/status` shows `Peer address` (`uds:`); hooks/Bash see `CLAUDE_CODE_MESSAGING_SOCKET`. Sessions must share a filesystem — host vs container cannot see each other; two sessions in one container can. `-p` binds a socket; `--bare` does not. Cross-machine / web: only **replies**, via Remote Control or Anthropic; `isolatePeerMachines: true` forces approval even in bypass mode.
- Inbound `crossSessionInbound`: `accept` / `hold` / `refuse`. Default uses permission-mode classes (prompting vs bypassing, including plan-as-bypass). Held messages show an approval dialog (`dialogExpiry` default 5 minutes; cap 100). A peer message cannot approve prompts, change `CLAUDE.md`/settings, or run slash commands. Receiving session’s own permission rules still apply. Usage is charged like a typed prompt once delivered.
- Turn off receive with `refuse` (project/local `refuse` wins). Turn off send/list with permission deny on bare `SendMessage` and `ListAgents` — that also kills teammate/subagent messaging, which shares `SendMessage`. Org managed settings can combine both. Feature stays off on native Windows, Bedrock / Claude Platform on AWS / Vertex Agent Platform / Foundry, or when `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` / `DISABLE_TELEMETRY` / `DO_NOT_TRACK` / `DISABLE_GROWTHBOOK` disable flag evaluation.
- Loops are throttled (per-sender rate limit, identical-repeat drop, 50 unread cap). Claude may send unprompted after a breaking change. Treat peer text as untrusted (`prompt-injection-agent-defense`).

## Sources

- [Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging) — accessed 2026-09-19
- [Tools reference](https://code.claude.com/docs/en/tools) — accessed 2026-09-19
- [What's new 2026-w32](https://code.claude.com/docs/en/whats-new/2026-w32) — accessed 2026-09-19
