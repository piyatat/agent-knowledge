---
id: claude-code-elicitation
title: Claude Code MCP elicitation — form, URL, and hooks
tags: [claude, mcp, elicitation, hooks]
status: active
updated: 2026-10-03
when_to_use: Debugging Claude Code MCP login/approval dialogs, or auto-answering elicitation with a hook
---

## Summary

Claude Code hosts MCP **elicitation** without extra config: **form** mode shows fields; **URL** mode opens a browser then asks you to confirm in the CLI. `Elicitation` / `ElicitationResult` hooks can accept, decline, or override the payload. Protocol modes live in `mcp-elicitation-modes`. Not OAuth client setup (`claude-code-mcp`) and not ACP elicitation (`acp-elicitation`).

## Notes

- Form: dialog with the server’s `requestedSchema` (username, confirmations, enums). URL: Claude Code opens the page (auth, payment, third-party consent); finish in the browser, then confirm in the terminal. Do not put secrets in form fields if you can use URL mode (`mcp-elicitation-modes`).
- After Claude Code 2.1.287, MCP **2025-11-25 URL prompts** (for example sign-in) are on. If a previously working server stops connecting, add `"bareElicitationCapability": true` on that `.mcp.json` entry so the client advertises elicitation the way the older server expects.
- Hooks (`claude-code-hooks`): matcher is the **MCP server name**. `Elicitation` fires when the server asks; exit 2 or `action: decline|cancel` denies it. `hookSpecificOutput.content` can fill form fields on `accept`. `ElicitationResult` fires after the user answers and **before** the response is sent; exit 2 / decline blocks the reply. Notification types include `elicitation_dialog`, `elicitation_url_dialog`, `elicitation_complete`, `elicitation_response`. Headless / Agent SDK: only `elicitation_complete` and `elicitation_response` fire UI notifications; interactive dialogs are absent — use the hook or `canUseTool`.
- Auto-responding a URL elicitation in CI is an approval of an **out-of-band** page. Prefer declining in `-p` / `--bare` unless the URL host is allowlisted. Treat the server-chosen URL as untrusted (`prompt-injection-agent-defense`).

## Sources

- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp) — accessed 2026-10-03
- [Hooks reference](https://code.claude.com/docs/en/hooks) — accessed 2026-10-03
- [Automate actions with hooks](https://code.claude.com/docs/en/hooks-guide) — accessed 2026-10-03
- [Agent SDK hooks](https://code.claude.com/docs/en/agent-sdk/hooks) — accessed 2026-10-03
- [Claude Code changelog v2.1.287](https://github.com/anthropics/claude-code/releases/tag/v2.1.287) — accessed 2026-10-03
- [MCP elicitation (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) — accessed 2026-10-03
