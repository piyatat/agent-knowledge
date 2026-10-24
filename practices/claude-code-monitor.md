---
id: claude-code-monitor
title: Claude Code Monitor — background watch vs /loop vs plugin monitors
tags: [claude, automations, tools, session]
status: active
updated: 2026-10-24
when_to_use: Asking Claude Code to tail logs or watch CI without a sleep loop, or declaring plugin monitors
---

## Summary

**Monitor** is a built-in Claude Code tool (v2.1.98+): it runs a background command (or opens a WebSocket) and feeds each event into the same conversation so Claude can react without holding the turn on `Bash` sleep. **v2.1.310** (2026-10-23) also enables Monitor and **plugin monitors** on Bedrock, Vertex, Foundry, and when telemetry / nonessential traffic is disabled. Not `/loop` polling (`claude-code-scheduled-tasks`), not channels (`claude-code-channels`), and not cloud routines (`claude-code-routines`).

## Notes

- Ask Claude to tail a log, poll CI/PR status, watch a directory, or follow a long-running script. Claude typically writes a small script and streams each stdout line as a transcript event. Default deadline **5 minutes**, cap **30 minutes** ( **10 minutes** in `-p` ). At the deadline Claude gets one notice and can restart. Cancel by asking, ending the session, or stopping the subagent that started it. Command watches use the same **Bash** allow/deny patterns (`Monitor(npm run *)`).
- WebSocket: `ws.url` (`ws://` / `wss://`, no embedded credentials) instead of `command` — one call cannot combine both. Text frames become events (even multi-line); binary is a placeholder; **>1 MiB** or socket close ends the watch. Private / link-local / cloud-metadata URLs are denied, as are `sandbox.network.deniedDomains` and hosts outside a managed allowlist when `allowManagedDomainsOnly` is on.
- Plugin monitors (`monitors/monitors.json` or `experimental.monitors`): `name`, `command`, `description`; optional `when` = `always` (default) or `on-skill-invoke:<skill>`. Same mechanism and availability as the tool. **Interactive sessions only** — never `-p`. Run **unsandboxed** at hook trust. Disabling a plugin mid-session does **not** stop already-running monitors. v2.1.310: long **foreground** sleeps are blocked on the same 3P / no-telemetry hosts where Monitor is now available — use Monitor instead of `sleep` loops.
- Contrast: self-paced `/loop` may pick Monitor when it is available, otherwise it polls. Resume does **not** restart background monitors. Linux `CLAUDE_CODE_TOOL_MEMORY_LIMIT` also caps Monitor (v2.1.246+).

## Sources

- [Tools reference — Monitor](https://code.claude.com/docs/en/tools-reference) — accessed 2026-10-24
- [Week 15 · Monitor tool](https://code.claude.com/docs/en/whats-new/2026-w15) — accessed 2026-10-24
- [Run prompts on a schedule](https://code.claude.com/docs/en/scheduled-tasks) — accessed 2026-10-24
- [Plugins reference — Monitors](https://code.claude.com/docs/en/plugins-reference) — accessed 2026-10-24
- [Add components to a plugin](https://code.claude.com/docs/en/plugins/components) — accessed 2026-10-24
- [v2.1.310 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) — accessed 2026-10-24
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-10-24
