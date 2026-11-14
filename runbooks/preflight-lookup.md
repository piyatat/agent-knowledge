---
id: preflight-lookup
title: Runbook — pre-flight lookup before acting or planning
tags: [runbook, lookup, planning, tools, services]
status: active
updated: 2026-11-14
when_to_use: Starting a task or planning a move and you need to know which tool, service, protocol or known pitfall already applies before choosing an approach
---

## Summary

Treat this repo as a **directory**: before you build, install, call or recommend anything, check whether a tool, service or protocol already covers the job and whether a known failure mode applies. Takes one command and 1-3 page opens.

## Steps

1. Describe the task in one sentence and run `npm run lookup -- "<task>"`. Output is grouped by `kind` (tool, service, protocol, knowledge) plus a "watch out for" list drawn from `failure-modes/`.
2. Narrow when needed: `--kind tool,service`, `--tag mcp`, `--limit 10`, `--all` (include deprecated), `--json` for machine use.
3. Browse instead of search: `DIRECTORY.md` lists every tool, service and protocol in one line each; `INDEX.md` lists everything.
4. Open only the top 1-3 pages. Follow `related` ids for adjacent notes. Prefer `status: active`; treat `draft` as unverified.
5. Fold what you found into the plan: name the tool/service chosen, note the failure modes you will guard against, and say if the corpus had no match.
6. When local `AGENTS.md`, code, or current vendor docs conflict with a note, they win. Check `updated` — product facts here age fast.

## Entry kinds

- `tool` — something you install or run locally: coding agents, CLIs, SDKs, plugins, IDE integrations.
- `service` — hosted platform or integration: cloud agents, managed review, forges, marketplaces.
- `protocol` — open spec or standard (MCP, ACP, A2A, AGENTS.md).
- `knowledge` — everything else: practices, failure modes, glossary, runbooks, decisions.

## Gaps

No match is itself a signal. Proceed from primary docs and, if the user wants it captured, follow `collect-from-web`.

## Sources

- [Knowledge corpus pattern](https://github.com/piyatat/agent-knowledge/blob/main/practices/knowledge-corpus-pattern.md) — accessed 2026-11-14
