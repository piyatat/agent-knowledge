---
id: cursor-agent-sdk-slack
title: Agent SDK slackChannel — mentions, DMs, and channel posts
tags: [cursor, sdk, slack, orchestration]
status: active
updated: 2026-11-12
when_to_use: Adding slackChannel() to a Cursor Agent SDK bot, running agent-sdk slack create, or choosing it instead of @cursor Slack Cloud Agents
---

## Summary

`slackChannel()` wakes an Agent SDK bot on a mention, DM, or watched channel post, keeps one thread as one session, and can reply as a single post, a live stream, or agent-owned cards. `agent-sdk slack create` mints a Cursor-managed Slack app. Not `@cursor` Cloud Agents in Slack (`cursor-slack-cloud-agents`) and not GitHub (`cursor-agent-sdk-github`).

## Notes

- File: `bot/channels/slack.ts` with `slackChannel` from `@grok/agent-sdk/channels/slack`. `envPrefix: "TRIAGE"` reads `TRIAGE_SLACK_BOT_TOKEN` / `TRIAGE_SLACK_APP_TOKEN` so two bots on one host do not collide. Mentions and DMs wake by default; `onAppMention` / `onDirectMessage` / `onChannelPost` return `{}` to start a turn or `null` to skip. Follow-ups in the same thread resume the session. All messages in one DM share a session unless `continuation: "slack.dmthread/v2"` (each top-level DM gets its own thread).
- Reply modes: `post` (status chip, then one complete reply); `stream` (message grows; optional `reasoningCard` / `toolCards`); `agentic` (bot owns timing — mount `slackCommunication` from `@grok/agent-sdk/extensions/slack-communication`, tools `post-update` / `post-card`). Agentic `cards.display`: `timeline` (one card per step) vs `plan` (one checklist; optional `title` ≤256 chars; `pending` only with `plan`).
- Channel posts: `engagement.channelPosts.allow` is 1–10 IDs starting `C` or `G`, plus optional `#name` (`channels:read` needed for names). `"*"` alone watches **thread replies** in joined channels, never top-level posts. Pass `--channel-posts` on `slack create` and invite the bot. `debounceMs` has **no effect** on Cursor hosting.
- Policy: `blockExternals` defaults true (Slack Connect guests ignored). `respondTo: "author"` keeps the session between the starter and the bot. Hooks can `ctx.thread.post()`; tools use `ctx.host.slack.getClient()`. MCP Connect waits only if `toolApprovals: true` (`cursor-agent-sdk-mcp-oauth`).
- Connect: `agent-sdk login` → `agent-sdk slack create --dir .` writes tokens to `.env.local` without printing them → `agent-sdk slack doctor --prefix TRIAGE`. Same wizard under Deployed Agents → Integrations. Workspace admin approval: keep `slack create` running and open the Request approval link — installing from Deployed Agents does **not** send that request. `botScopes` in project-root `slack-manifest.json` replaces the default list; required: `app_mentions:read`, `assistant:write`, `channels:history`, `chat:write`, `groups:history`, `im:history`, `reactions:read`. Cursor rejects Slack Marketplace forbidden families (`admin.*`, `identity.*`, `search:read*`, `triggers:*`, `apps_configuration:*`, `workflow.steps:execute`). Own app: `agent-sdk slack init --manual` plus the `bdk-setup-slack` skill.

## Sources

- [Slack Agents](https://cursor.com/docs/agent-sdk/guides/slack) — accessed 2026-11-12
- [Channels](https://cursor.com/docs/agent-sdk/reference/channels) — accessed 2026-11-12
- [Connect a private MCP server with OAuth](https://cursor.com/docs/agent-sdk/guides/mcp-oauth) — accessed 2026-11-12
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-12
