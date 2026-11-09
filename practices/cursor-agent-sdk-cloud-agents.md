---
id: cursor-agent-sdk-cloud-agents
title: Agent SDK cursor-cloud-agents — delegate coding to Cloud Agents
tags: [cursor, sdk, orchestration, subagent]
status: active
updated: 2026-11-09
when_to_use: Mounting cursor-cloud-agents or the improve extension so an Agent SDK bot can launch, steer, or self-edit via Cloud Agents
---

## Summary

The **`cursor-cloud-agents`** Agent SDK extension lets a versioned `bot/` agent hand coding work to **Cursor Cloud Agents**. The cloud agent works in a repository checkout and can push branches and PRs while the SDK agent keeps talking to the person. **`improve`** builds on it: the agent writes a brief, a cloud agent edits the agent’s own source, and someone on the team reviews/merges before the next deploy. Not the HTTP Cloud Agents API (`cursor-cloud-agents-api`), not Python `Agent.create` (`cursor-sdk`), and not a dashboard Automation (`cursor-automations`).

## Notes

- Mount `bot/extensions/cloud.ts` with `import cursorCloudAgents from "@grok/agent-sdk/extensions/cursor-cloud-agents"`. Launches run as the host’s signed-in account (`agent-sdk login`, `CURSOR_API_KEY`, or `CURSOR_SERVICE_ACCOUNT_KEY`) and spend that account’s **cloud-agent budget**. The mounted agent can launch on a repo or PR, check status, read conversation and edits, steer or stop, and list agents **it** launched. A bundled skill covers when to delegate and how to write a brief the cloud agent can act on alone.
- `cloud.repos` is the allowlist (each `url` plus a default branch or PR). **Without it, launches run with no repository**, so secrets in `cloud.envVars` never reach a repo you did not list. `cloud.teamMcpServers` (max 50 names, case-insensitive) filters team MCP servers; omit it to allow every team server the account can use. Personal servers and `cloud.mcpServers` are **not** filtered. Optional `model` (else the account default) and `apiKey` (launch as that key instead of the host).
- Isolation: each caller sees and steers only the cloud agents they launched. If every caller shares one bearer token, the extension treats them as **one person**. Use authored auth to keep callers apart. To drop a capability such as follow-ups, mount the extension as a directory and disable that tool (`cursor-agent-sdk` extensions).
- **`improve`** (`@grok/agent-sdk/extensions/improve`): also mount cloud-agents with the agent’s **own** repo in `cloud.repos`, then `improve({ repo, path, ref? })`. Adds the `improve__yourself` skill and **no tools**. Ask for one change, how to tell it worked, and what must not change. The agent launches one cloud agent, reports the URL, then the PR plus which checks passed. It **cannot merge or deploy** — a human reviews, merges, and the change goes live on the next `agent-sdk deploy`. Then repeat the original request to confirm.
- `improve` config: `repo` URL, `path` (agent directory in that repo), `ref` (PR target, default `main`), optional `notes` (guidance on every brief, e.g. a required test command), optional `deploy` (who deploys a merged change and when). **Validation checks only the shape** of `repo` and `path` — they must actually match the deployed agent and `cloud.repos`. Peer-agent routing is a different wire (`cursor-agent-sdk-peers`).

## Sources

- [Cloud agents](https://cursor.com/docs/agent-sdk/guides/cloud-agents) — accessed 2026-11-09
- [Self-improvement](https://cursor.com/docs/agent-sdk/guides/improve) — accessed 2026-11-09
- [Extensions](https://cursor.com/docs/agent-sdk/reference/extensions) — accessed 2026-11-09
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-09
