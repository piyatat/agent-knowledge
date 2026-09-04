---
id: openai-codex-permissions
title: Codex permission profiles — filesystem and network
tags: [openai, permissions, sandbox, security]
status: draft
updated: 2026-09-04
when_to_use: Constraining local Codex command sandboxing with [permissions] profiles instead of sandbox_mode
---

## Summary

Codex **permission profiles** (beta, CLI **0.138.0+**) are named least-privilege policies: filesystem roots plus optional command-network rules. Built-ins: `:read-only`, `:workspace`, `:danger-full-access`. They do **not** compose with legacy `sandbox_mode` / `[sandbox_workspace_write]` / `--sandbox` — if any of those are present, the old sandbox wins unless managed `allowed_permission_profiles` forces profiles. Marked **draft** because the feature is still changing.

## Notes

- Set `default_permissions` to a built-in or a `[permissions.<name>]` table. Prefer `extends = ":workspace"` or `":read-only"`; `:danger-full-access` cannot be a parent. Layers merge workspace roots. `deny` beats equally specific `read`/`write`. Empty filesystem tables stay restricted and warn at startup.
- Network: `network.enabled = true` only permits sockets; domain allow/deny apply **only** when `features.network_proxy = true` (or managed `[experimental_network]`). Without a proxy, commands can egress unrestricted. `*` is allow-only; deny overrides allow. Local/private IPs stay blocked unless listed or `allow_local_binding` is true.
- Managed `allowed_permission_profiles` is an allowlist: omitted built-ins and future names are denied. During mixed-version rollouts you can keep `allowed_sandbox_modes` until every client is ≥ 0.138.0.
- Profiles govern **local sandboxed commands** only. Connectors, MCP, browser/computer-use, web search, and Codex **cloud** internet settings are separate (`openai-codex-cloud-environments`).
- GitHub Action: set `permission-profile` **or** legacy `sandbox`, not both. `safety-strategy: read-only` also forces the old sandbox (`openai-codex-github-action`).

## Sources

- [Permissions](https://learn.chatgpt.com/docs/permissions) — accessed 2026-09-04
- [openai/codex-action README](https://github.com/openai/codex-action/blob/main/README.md) — accessed 2026-09-04
