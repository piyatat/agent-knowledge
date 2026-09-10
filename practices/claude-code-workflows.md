---
id: claude-code-workflows
title: Claude Code dynamic workflows — scripted subagent fan-out
tags: [claude, orchestration, subagent, workflows]
status: active
updated: 2026-09-10
when_to_use: Running /deep-research or a saved .claude/workflows script, or choosing workflows vs subagents vs agent teams
---

## Summary

A Claude Code **dynamic workflow** is a JavaScript script the runtime executes **outside** the conversation. Claude writes it; `agent()` / `pipeline()` / `parallel()` spawn subagents; intermediate results stay in script variables. Use when one chat cannot coordinate dozens-to-hundreds of workers, or when the orchestration itself must be rerunnable. Not a subagent (`.claude/agents`, `claude-code-subagents`), not an experimental agent team (`claude-code-agent-teams`), and not Cursor `/goal`.

## Notes

- Surfaces: CLI, Desktop, IDE, `claude -p`, Agent SDK (`allowedTools` include `Workflow`; TS SDK ≥ v0.3.149). Paid plans + API / Bedrock / Agent Platform / Foundry. On Pro, enable the Dynamic workflows row in `/config`. Disable with that toggle, `"disableWorkflows": true`, managed settings, or `CLAUDE_CODE_DISABLE_WORKFLOWS=1`.
- Start: `/deep-research <q>` (bundled; needs WebSearch), ask for a workflow / include keyword `ultracode`, or `/effort ultracode` (v2.1.203+) so Claude plans a workflow per substantive task. The keyword is human-typed only (interactive, IDE, Remote Control, SDK with `origin: { kind: "human" }`). It does **not** fire from `-p`, scheduled tasks, webhooks, or PR comments (since v2.1.210).
- Approve: Auto mode prompts once (skipped under ultracode); Manual / acceptEdits every run unless “don’t ask again” for a named/bundled/plugin workflow; Bypass / `-p` / SDK never prompt — `Workflow` / `Workflow(<name>)` allow rules, Auto classifier, hooks, or `canUseTool` must approve. Spawned subagents still use session permission rules.
- Save: `/workflows` → `s` → `.claude/workflows/` (project; closest existing `.claude/` toward repo root as of v2.1.178) or `~/.claude/workflows/` (`CLAUDE_CONFIG_DIR`). Project name wins over personal. Plugin scripts in `workflows/` run as `/plugin:name`. Refuses writing through a symlink (v2.1.216+). Reload with `/reload-skills`.
- Script: `export const meta = { name, description }` first, literal only. Body: `agent()`, `pipeline()`, `parallel()`, `phase()`, `log()`, global `args`. No `import()`, no FS/shell from the script, no mid-run user input (permission prompts only). `Date.now()` / `Math.random()` / bare `new Date()` throw so relaunch is deterministic. Caps: 16 concurrent agents, 1,000 total, 4,096 items per `pipeline`/`parallel`. Resume in the **same session**; completed agents replay, a mid-fan-out failure reruns later siblings.
- Cost: `/workflows` shows per-agent tokens. Advisory “Large workflow” at >25 agents or 1.5M projected tokens (off under ultracode). Size guideline `workflowSizeGuideline` (`small`/`medium`/`large`/`unrestricted`; default `medium` as of v2.1.219). Fan-out shares prompt cache; first sibling may hold others ≤5s (`CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS`).

## Sources

- [Dynamic workflows](https://code.claude.com/docs/en/workflows) — accessed 2026-09-10
- [Run agents in parallel](https://code.claude.com/docs/en/agents) — accessed 2026-09-10
- [Agent SDK subagents — Workflow tool](https://code.claude.com/docs/en/agent-sdk/subagents) — accessed 2026-09-10
