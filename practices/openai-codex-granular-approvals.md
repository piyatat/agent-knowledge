---
id: openai-codex-granular-approvals
title: Codex granular approval_policy — per-category prompt gates
tags: [openai, approvals, permissions, security]
status: active
updated: 2026-09-14
when_to_use: Auto-rejecting some Codex prompt categories while keeping sandbox escalations interactive
---

## Summary

**Granular** `approval_policy` is a TOML object, not `on-request` / `never`. Each category is independently **allowed to surface** (`true`) or **auto-rejected** (`false`). It does not widen `sandbox_mode`. Pair with `approvals_reviewer` (`user` or `auto_review`) on the categories that still prompt (`openai-codex-auto-review`).

## Notes

- Shape: `approval_policy = { granular = { sandbox_approval, rules, mcp_elicitations, request_permissions, skill_approval } }` (all booleans). `true` = interactive prompt may appear; `false` = that category is denied without asking. Useful in CI-ish local runs that must still escalate sandbox/network but must never accept `request_permissions` or skill-script prompts.
- Categories: `sandbox_approval` (leave FS/network boundary); `rules` (execpolicy `prompt` rules); `mcp_elicitations` (MCP elicitation); `request_permissions` (model-requested extra grants); `skill_approval` (skill-script run). App/MCP tools with `destructive_hint` still need approval unless a read annotation wins (`openai-codex-apps`).
- Reviewer: `approvals_reviewer = "auto_review"` only runs when a prompt would have been interactive (`on-request` **or** granular with that category `true`). `never` and `:danger-full-access` create nothing to review. `/approve` retries one auto-review denial.
- `on-failure` is deprecated. Global `approval_policy = "untrusted"` is **retired** and can prevent Codex/ChatGPT Work from starting — use project `trust_level = "untrusted"` or `on-request` (`openai-codex-sandbox`). Managed `allowed_approval_policies` may list `granular`.
- Example: keep sandbox + execpolicy prompts, fail-closed on permissions/skills:

```toml
approval_policy = { granular = {
  sandbox_approval = true,
  rules = true,
  mcp_elicitations = true,
  request_permissions = false,
  skill_approval = false
} }
```

## Sources

- [Agent approvals & security](https://developers.openai.com/codex/agent-approvals-security) — accessed 2026-09-14
- [Configuration Reference](https://developers.openai.com/codex/config-reference) — accessed 2026-09-14
- [Advanced configuration](https://developers.openai.com/codex/config-advanced) — accessed 2026-09-14
