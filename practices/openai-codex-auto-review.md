---
id: openai-codex-auto-review
title: Codex auto-review — Guardian reviewer at the sandbox edge
tags: [openai, approvals, sandbox, security]
status: active
updated: 2026-09-13
when_to_use: Setting approvals_reviewer = auto_review, or writing guardian / [auto_review].policy
---

## Summary

**Auto-review** (Guardian) swaps **who** approves a sandbox-boundary request: a separate reviewer agent instead of you. The main Codex agent keeps the same `sandbox_mode` / writable roots / network limits. It is a reviewer, **not** a permission grant. Needs an interactive `approval_policy` (`on-request` or granular). `never`, `:danger-full-access`, or `--yolo` never create a reviewable request (`openai-codex-sandbox`).

## Notes

- Flow: agent in `read-only` / `workspace-write` → needs to cross the boundary → if `approvals_reviewer = "auto_review"`, a second agent sees a compact transcript + the exact request (no hidden chain-of-thought) → approve continues; deny tells the main agent not to workaround and to take a **materially safer** path or ask you.
- Triggers: escalated shell/exec, blocked network, edits outside writable roots, MCP/app tools that need approval, Computer Use to a **new** domain. Routine in-sandbox work is not reviewed. ChatGPT desktop **app-level** Computer Use prompts still go to the user. Daybreak “Approve for me” is the same mode when org policy allows it.
- Policy: default text in openai/codex `core/src/guardian/policy.md` (plus `policy_template.md`). Local `[auto_review].policy` **replaces** the tenant section (copy the full current policy first). Managed `guardian_policy_config` in `requirements.toml` wins. Designed to block exfil, credential probing, persistent weakening, high-damage destructive actions — **not** a deterministic guarantee.
- Circuit breaker: 3 consecutive denials or 10 denials in the last 50 reviews in the same turn aborts the turn. Timeouts are not treated as “unsafe.” TUI `/approve` retries **one** exact denied action; the reviewer still runs and can deny again. Up to 10 recent denials per task.
- Reduce volume by tightening the sandbox (`writable_roots`, narrow command prefixes), not by teaching the reviewer to rubber-stamp. An allowlisted network dest does not by itself trigger review — add `decision = "prompt"` or MCP approval. Transcripts under `~/.codex/sessions`.

## Sources

- [Auto-review](https://developers.openai.com/codex/concepts/sandboxing/auto-review) — accessed 2026-09-13
- [Agent approvals & security](https://developers.openai.com/codex/agent-approvals-security) — accessed 2026-09-13
- [Managed configuration](https://developers.openai.com/codex/enterprise/managed-configuration) — accessed 2026-09-13
- [Advanced configuration](https://developers.openai.com/codex/config-advanced) — accessed 2026-09-13
