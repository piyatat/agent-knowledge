---
id: openai-codex-slack
title: Codex in Slack and Linear — @Codex cloud chats from chat/issues
tags: [openai, slack, linear, orchestration]
status: active
updated: 2026-09-11
when_to_use: Installing @Codex in Slack or Linear, or contrasting it with local Linear MCP
---

## Summary

**Codex in Slack** and **Codex in Linear** start a **Codex cloud** chat from `@Codex` (or a Linear assignee / triage rule) and reply with a link plus an optional summary. Paid ChatGPT plans with cloud chats, GitHub, and at least one environment. Not local CLI MCP, not Claude Slack (`claude-code-slack`), not Cursor Slack/Linear.

## Notes

- Slack: install the Slack app from Codex settings (workspace admin may need to approve), `/invite @Codex`. Mention in a **channel or thread**; Codex reacts 👀, picks an environment, and replies with a chat link. It reads thread history. Name a repo (`@Codex fix the above in org/repo`) to override. Environment = best match, else last-used; chat uses the **default branch of the first repo** in that environment’s repo map.
- Enterprise: admins can clear “Allow Codex Slack app to post answers on task completion” so Slack gets **only the link** (no environment-derived answer text in-thread).
- Linear: paid plans; Enterprise admins enable cloud chats + the Linear connector. Assign the issue to Codex or `@Codex` in comments (follow-ups continue the same chat). Linear suggests a repo; same environment fallback as Slack. Triage rules can Delegate → Codex; those chats run as the **issue creator**.
- Failures: missing Slack/GitHub/Linear connection → reconnect link. Wrong environment → reply with the env name and mention again. Always review diffs; models err.
- Local Linear (CLI / IDE / desktop) is a different path: `codex mcp add linear --url https://mcp.linear.app/mcp` or `[mcp_servers.linear]` in `~/.codex/config.toml`, then `codex mcp login linear`. That does not spawn a cloud chat (`openai-codex-mcp`).
- Contrast Claude Tag / Claude in Slack (web Claude Code session) and Cursor `@cursor` (`cursor-slack-cloud-agents`, `cursor-linear-cloud-agents`).

## Sources

- [Use Codex in Slack](https://learn.chatgpt.com/docs/third-party/slack) — accessed 2026-09-11
- [Use Codex in Linear](https://learn.chatgpt.com/docs/third-party/linear) — accessed 2026-09-11
- [Codex cloud](https://learn.chatgpt.com/docs/cloud) — accessed 2026-09-11
