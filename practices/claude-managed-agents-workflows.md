---
id: claude-managed-agents-workflows
title: Claude Managed Agents multiagent — workflows, subagents, advisor
tags: [claude, orchestration, workflows, api]
status: active
updated: 2026-10-22
when_to_use: Enabling multiagent_20261001 on a hosted Managed Agent, or choosing workflows vs subagents vs advisor
---

## Summary

**Managed Agents** `multiagent.type: multiagent_20261001` (public beta, header `managed-agents-2026-04-01`) lets the session agent **delegate to subagents**, **write a dynamic workflow** the server runs in the background, and optionally **consult an advisor** mid-turn. This is the hosted harness (`claude-managed-agents`), not Claude Code `/workflows` (`claude-code-workflows`) and not Copilot `extension.mjs` workflows (`github-copilot-dynamic-workflows`).

## Notes

- Defaults with this type: `subagents` and `workflows` **enabled** (inline agents on); `advisor` **disabled**. Set `{"type": "disabled"}` to turn one off. Sending `null` restores the default (so it **turns workflows/subagents back on**). A session copies the block at create — later agent edits do not change an existing session.
- **Subagents:** the lead delegates and can follow up on a persistent thread. One level only (listing another multiagent agent is `400`). Max **25** child threads at a time (idle included; primary / advisor / workflow-run threads do not count). Each list (`subagents.predefined_agents`, `workflows.predefined_agents`) holds up to **20** unique agents. Entries: `{type, id, version?}`, a bare `id`, or `{type: "self"}`. Disable `inline_agents` to allow **only** the listed set (empty list then `400`).
- **Workflows:** the lead writes a program; the server runs it as `wrun_…`. No extra API call and **no approval gate** before start (prompt the agent to plan-and-wait if you need one). Permissions apply to tools the run’s agents call, not to starting the run. Inline workflow agents use the lead’s model; list predefined agents to use other models. `workflow_run.created` / `status_running` / `status_idle` / `phase_*` / `status_ended` / `error` arrive on the **session** stream (not webhooks). End `result`: `completed` (does not mean every thread succeeded), `stopped`, or `error` (`timeout_error`, `program_error`, `thread_limit_error`, `unknown_error`).
- Limits (docs): **64** threads working at once in one run (not an API guarantee); **1,000** agents started over a run’s life (`thread_limit_error`; retries can create more than 1,000 threads); default lifetime **24h** (`timeout_error`; pause time still counts); **10** open runs per session (`max_workflow_runs_error`; idle counts). Runs do not nest. Set a **session budget at create** — runs pause at the cap and resume when you raise/remove it.
- **Advisor:** `{"type": "enabled", "model": "…"}`. Primary thread only; billed at the advisor model. Reserves name `anthropic.advisor`. Advice arrives as `agent.thread_message_received` (no `agent.tool_use`). Advisor must be at least as capable as the lead.
- Shared sandbox/vaults; MCP is **per agent definition** (inline agents inherit the lead). A `limited` environment rejects listed agents whose MCP host is not in `allowed_hosts` unless `allow_mcp_servers: true`. Do not name custom tools `ant__*`. Pin `inference_geo` consistently or omit it on every listed agent.

## Sources

- [Multiagent orchestration](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration) — accessed 2026-10-22
- [Workflow runs](https://platform.claude.com/docs/en/managed-agents/workflow-runs) — accessed 2026-10-22
- [Session threads](https://platform.claude.com/docs/en/managed-agents/session-threads) — accessed 2026-10-22
- [Claude Managed Agents overview](https://platform.claude.com/docs/en/managed-agents/overview) — accessed 2026-10-22
