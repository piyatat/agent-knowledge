---
id: claude-code-mode-hook-fail-open
title: A Claude Code PreToolUse error no longer stops a Code Mode tool call
kind: knowledge
tags: [claude, hooks, code-mode, permissions]
status: active
updated: 2026-11-20
when_to_use: A PreToolUse hook that used to block Code Mode now lets the tool call through, or Code Mode stays off because tracing is on
---

## Summary

Claude Code **v2.1.329** (2026-11-19) changed Code Mode (`claude-code-code-mode`) in two ways that break older assumptions. A `PreToolUse` hook that errors no longer refuses a tool call made from a script. OpenTelemetry **events and metrics** can be on, but **tracing** still keeps Code Mode off.

## Notes

- **Hook errors are fail-open inside a script.** Before 2.1.329, a `PreToolUse` hook that failed or timed out refused the call Claude’s code was making. The changelog says that error now behaves as it does outside Code Mode: the call continues. A hook that must refuse needs `"onFailure": "block"` on a command, HTTP, or MCP tool hook (`claude-code-hooks`). Exit 2 still blocks. Do not rely on a crash, a timeout, or a non-zero exit other than 2.
- **Tracing still disables Code Mode. Events do not.** 2.1.329 can turn Code Mode on while OpenTelemetry events and metrics are enabled. Each tool call the script makes sends those events. Tracing still keeps Code Mode off. The same release starts Code Mode when telemetry, nonessential traffic, or feature flags are turned off. An administrator can still keep it off in managed settings. If `/status` says Code Mode is unavailable because of telemetry, check whether **tracing** is the exporter that is on.
- **A partial mod no longer disables it.** A mod that lists only some tools used to turn Code Mode off without saying so. 2.1.329 stops that. Use managed settings to keep Code Mode off. A script that declares its own `log`, `preview`, or `sleep` is allowed. A read of a line range over **256 MiB** is refused.

## Sources

- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-20
- [Run tool calls from code with Code Mode](https://code.claude.com/docs/en/code-mode) — accessed 2026-11-16
