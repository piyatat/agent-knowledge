---
id: cursor-enterprise-mcp-policy
title: Cursor enterprise MCP — allowlist vs marketplace distribution
tags: [cursor, mcp, security, governance]
status: active
updated: 2026-10-22
when_to_use: Separating who may run an MCP server from how it gets installed (Teams/Enterprise)
---

## Summary

**Distribution ≠ policy.** Team MCP / marketplace **offers** servers. The Enterprise **MCP Allowlist** **approves** command or URL patterns. Allowlisting does not install anything; linking to a marketplace does not enable every developer. Dashboard home for both is now **Plugins & MCPs** (was Integrations & MCP).

## Notes

- Cloud Agents read Team MCP from Dashboard → **Plugins & MCPs**. To expose the same server in IDE/CLI/Agent Window, **Add to Team Marketplace** (Default marketplace). Install mode (Default Off / Default On / Required) is a Plugins setting. Removing a linked MCP plugin can delete the Team MCP server for local **and** cloud — read the confirm dialog (`cursor-plugins`). Team MCP config and plugin variables are shared; only team (or org) admins edit them. Week of 2026-10-05: one searchable **Plugins & MCPs** table, plus a **Team list enforcement** toggle on the Plugins page. When that list is on, Allowlist rules that apply only under enforcement are marked; each server shows access status (**Read-only**, **Cloud only**, …) with a tooltip for why IDE/CLI blocks it.
- Allowlist (Enterprise → Team Settings → **MCP Configuration**; Plugins & MCPs links here): command entries match the **full** `command + args` string (path-resolved `npx` — use a leading `*`); URL entries match the remote URL (`https://*.acme.com/*`). Per-server **Tools** list (empty = all tools). Week of 2026-10-05: **Add Rule** can pick a configured team server (Allowed / Already allowed / Blocked) instead of typing; for a URL server, **Choose Tools** lists live tools after you sign in. The server detail dialog also lets admins limit a URL MCP’s or plugin’s tools from that preview. Wildcards use `*`.
- Effective MCP auto-run allowlist **replaces**, does not merge: (1) dashboard/admin, (2) MDM `~/.cursor/permissions.json` (`server:tool`, `server:*`, `*:tool`, `*:*`), (3) editor / inline Add to allowlist.
- Stdio network modes: Allow all / Allowlist / Deny all / **No sandbox**. Remote HTTP/SSE are limited to the URL pattern. User MCP extensions can be allowed outside admin patterns, then constrained by a User MCP Network Denylist. Grok Bot’s **Apply to MCP servers** switch (off by default) is a separate network allowlist (`cursor-grok-bot`).
- Adjacent Enterprise controls: **Repository Blocklist** (refuse index/work in editor/CLI — not Cloud Agents / Automations / Bugbot); **Protected Git Scopes** (lock a GitHub/GitLab org/group to this Cursor org so unsanctioned teams cannot run Cloud Agents/Bugbot on it — claimer must be Git admin + Cursor admin). Model access is a separate union of team + Organization Group allows.

## Sources

- [Model Context Protocol (Cursor)](https://cursor.com/docs/mcp) — accessed 2026-10-22
- [Model and Integration Management](https://cursor.com/docs/enterprise/model-and-integration-management) — accessed 2026-10-22
- [Cursor web release notes](https://cursor.com/docs/release-notes/web) — accessed 2026-10-22
- [permissions.json reference](https://cursor.com/docs/reference/permissions) — accessed 2026-10-22
- [Enterprise](https://cursor.com/docs/enterprise) — accessed 2026-08-30
