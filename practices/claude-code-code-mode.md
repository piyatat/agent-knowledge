---
id: claude-code-code-mode
title: Claude Code Code Mode — JS REPL for batched tool calls
tags: [claude, tools, sandbox, experimental]
kind: knowledge
status: active
updated: 2026-11-23
when_to_use: Turning on experimental Code Mode so Claude writes JavaScript that calls tools in one step, or diagnosing why it will not start
---

## Summary

**Code Mode** (Claude Code **v2.1.323+**, 2026-11-12) is an **experimental** opt-in: Claude writes JavaScript that calls Bash/Read/Edit and friends, and Claude Code runs that script in the session. The conversation shows tool results (diffs, command output), not the script — open it with **Ctrl+O**. It is Claude Code’s product surface of `code-mode-tool-orchestration`, not OpenAI programmatic tool calling and not MCP Code Mode.

## Notes

- Off by default; may change or vanish. Opt in with `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` in the **shell** or **user** `~/.claude/settings.json` `env` (project settings are **ignored** so a cloned repo cannot turn it on). First session asks you to confirm; then the banner reads `Code Mode (experimental) is on`. `0` in either place wins over `1` in the other. Orgs **block** it by putting `0` in managed settings — in-flight sessions keep going until restart; users cannot be opted in from managed settings.
- Requirements: native `claude` **interactive terminal**; Claude subscription or Console. The Code Mode docs page, read 2026-11-23, still says it does not run through a gateway, Amazon Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform, Microsoft Foundry, Claude Models on Google Cloud, or a custom `ANTHROPIC_BASE_URL`. Changelog **2.1.331** (2026-11-23) says terminal sessions on Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, and Claude Platform on AWS can use it. A gateway and Claude Models on Google Cloud are only in the docs block list. If `/status` names a reason, that reason wins (`claude-code-mode-provider-docs`). Not HIPAA / ZDR. Models **Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.2**. Windows needs Git for Windows. **Does not** work with `-p`, Agent SDK, VS Code panel, Desktop, cloud sessions, Remote Control, Chrome, computer use, or API key helpers. **v2.1.329 (2026-11-19):** Code Mode can be on while OpenTelemetry **events and metrics** are enabled (each tool call the script makes emits them), and it starts when telemetry, nonessential traffic, or feature flags are off. **Tracing** still keeps it off. Managed settings can still keep it off. A mod that lists only some tools no longer turns Code Mode off. Use managed settings for that (`claude-code-mode-hook-fail-open`).
- **Agent teams (v2.1.326, 2026-11-16):** Code Mode and `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` can be on together. Teammates run in Code Mode in the default **in-process** display and **start without it in split panes**. The reason `it can't be used together with agent teams yet` means this install is older than 2.1.326 — update, or unset the teams variable. `it doesn't work in background jobs` on a teammate's split pane is the same split-pane limit (`claude-code-agent-teams`).
- Resume only in the terminal **with Code Mode still on**. Sessions started without it stay without it. You cannot move a Code Mode session to Desktop, background it, or `/fork` a background copy.
- Permissions: each tool call still hits deny/ask rules and `PreToolUse`. In **auto**, the classifier reviews the **script**, not each call, and does not see runtime values — keep rules/hooks for paths you must control. Inspect the script with a `PreToolUse` matcher on **`REPL`** (`tool_input.code`). Waiting code stops at **10 minutes**; background code (start in auto or `bypassPermissions`) can run up to **two hours**. A denied Bash pattern can still be rewritten — pair with `claude-code-sandboxing`.
- **v2.1.325** (2026-11-13): a Code Mode script follows `EnterWorktree` and no longer writes `~` paths into the project. `/mcp` no longer shows a server as connected after its sign-in expired. Text typed with Yes on a permission or plan dialog is delivered. Resuming a session that ended mid-script waits for the next prompt.
- **v2.1.328 (2026-11-19):** Code Mode no longer runs `UserPromptSubmit` hooks, managed ones included, on a script’s output. To redact that output, use a `PostToolUse` hook with `updatedToolOutput`. Auto and bypass-permissions modes also dropped a 0.75 second pause after most scripts.
- **v2.1.329 (2026-11-19):** A `PreToolUse` hook that **errors** no longer refuses a script’s tool call. That matches behavior outside Code Mode. Set `"onFailure": "block"` on a command, HTTP, or MCP tool hook that must refuse (`claude-code-mode-hook-fail-open`). A script may declare its own `log`, `preview`, or `sleep`. A read of a line range over 256 MiB is refused.
- **v2.1.331 (2026-11-23):** Resuming with `--resume` or `--continue` in another permission mode keeps thinking and the prompt cache. A session that started in a mode that asks keeps that mode’s limits on scripts. A long script hands Claude a path to the uncut output. `--bare` tells Claude which calls the scripts can make. A `!` or slash command typed while a script runs no longer sends a model request about every second (`claude-code-mode-provider-docs`).
- Troubleshooting: `/status` and the “isn’t available” line name the reason (`it isn't open to your account yet`, tracing on, `--restricted` without `REPL`, agent teams on a build older than v2.1.326, …). Do not treat a hook crash as a deny. Exit 2 still blocks. `"onFailure": "continue"` lets the call through.

## Sources

- [Run tool calls from code with Code Mode](https://code.claude.com/docs/en/code-mode) — accessed 2026-11-23
- [v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323) — accessed 2026-11-13
- [v2.1.325](https://github.com/anthropics/claude-code/releases/tag/v2.1.325) — accessed 2026-11-15
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-23
- [v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331) — accessed 2026-11-23
- [v2.1.326](https://github.com/anthropics/claude-code/releases/tag/v2.1.326) — accessed 2026-11-16
