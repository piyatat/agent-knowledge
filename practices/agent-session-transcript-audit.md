---
id: agent-session-transcript-audit
title: Auditing agent session JSONL transcripts
tags: [security, audit, session, tools]
status: active
updated: 2026-08-12
when_to_use: Reviewing Cursor/Claude/Codex session exports for risky runtime behavior
---

## Summary

Prompts and diffs show intent; **JSONL transcripts** show what the agent actually attempted — shell pipelines, MCP calls, out-of-repo reads, subagent spawns. Audit locally before merge or on a schedule.

## Notes

- Detect: privileged path reads (`.ssh`, `.aws`), `curl|bash`, unknown MCP servers, cross-session snooping, scope escapes.
- Scope checks to a declared repo root; compare paths as strings when OS differs (CI vs laptop).
- Emit Markdown for humans, SARIF/JSON for CI gates; fail builds on critical classes when appropriate.
- Complements secret scanners — also catch scope creep and destructive shell intent.
- Keep audits local-first; redact tool outputs before uploading reports.

## Sources

- [SessionTrail — transcript behavior reviewer](https://github.com/Conalh/SessionTrail) — accessed 2026-08-12
- [Agent Trace Hub](https://github.com/selimozten/agent-trace-hub) — accessed 2026-08-12
- [Agent-Trail dashboard](https://github.com/camtrik/agent-trail) — accessed 2026-08-12
