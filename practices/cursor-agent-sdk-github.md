---
id: cursor-agent-sdk-github
title: Agent SDK githubChannel — PR/CI wakes vs @cursor mentions
tags: [cursor, sdk, github, orchestration]
status: active
updated: 2026-11-12
when_to_use: Wiring githubChannel() in a Cursor Agent SDK bot, replaying a PR, or choosing it instead of @cursor Cloud Agents
---

## Summary

`githubChannel()` wakes a versioned Agent SDK bot from GitHub events, resumes **one session per pull request**, and lets hooks/tools call Octokit as the host. With `cursorAccount`, Cursor pulls events — no public webhook URL, GitHub App, or PAT. Not `@cursor` on an issue/PR (`cursor-github-cloud-agents`), not a dashboard Automation (`cursor-automations`), and not Slack (`cursor-agent-sdk-slack`).

## Notes

- File: `bot/channels/github.ts`. Import `githubChannel` and `defaultGitHubAuth` from `@grok/agent-sdk/channels/github`. Connect GitHub in Cursor, then `agent-sdk login`. Hooks: `onPullRequest`, `onComment`, `onIssue`, `onCheckSuite`, `onCheckRun`, `onWorkflowRun`, `onStatus`, catch-all `onEvent`. Each returns `{ auth }` (model turn as the sender), `{ task }` (host function, may `send` later), or `null` (ignore). Set `botName` so the agent’s own comments do not re-trigger it.
- Repos: `cursorAccount: { repos: ["acme/checkout"] }` — every repo in one channel must share one GitHub **owner**. Or `cursorAccount: true` plus `agent-sdk serve --cursor-events --repo …` / `agent-sdk deploy --cursor-events-repo …`. Each deploy **replaces** the watch list; `agent-sdk deployment update` changes it without a full redeploy.
- Tools post via `ctx.host.github.getOctokit()` and `parseGitHubPrContinuationKey(ctx.session.continuationKey)`. The model never picks the PR. Guard `ctx.session.purpose === "eval"` so evals do not post. Hooks share the same credential as `ctx.github.getOctokit()`, plus `ctx.thread.post()`, `ctx.repository`, `ctx.conversation`. Prefer a `{ task }` for deterministic labels; use `{ auth }` when the model should read logs.
- Replay: `agent-sdk github replay acme/checkout#42 --dir . --action opened` (or a PR URL). `--events '*'` plus `--conclusion failure` for CI. `--dry-run --fixtures-dir fixtures/github` writes payloads instead of posting. Templates: review and triage; follow the `bdk-github` skill for setup.
- Enterprise Server / self-delivered github.com webhooks: `api.apiBaseUrl` plus `credentials: { token: { secretName }, webhookSecret: { secretName } }`. Webhook URL `…/v1/channels/github`. Hosted deliveries with a bad signature get **401** and never reach the agent. Event pull and `github replay` only hit **github.com** — test GHES from saved fixtures. Local env vars vs hosted deployment secrets use the same `secretName`. Coalesce bursts per PR; drop the buffer when the PR closes.

## Sources

- [GitHub agents](https://cursor.com/docs/agent-sdk/guides/github) — accessed 2026-11-12
- [Channels](https://cursor.com/docs/agent-sdk/reference/channels) — accessed 2026-11-12
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-12
