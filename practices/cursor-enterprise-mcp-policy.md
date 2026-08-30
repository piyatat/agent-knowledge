---
id: cursor-enterprise-mcp-policy
title: Cursor enterprise MCP — allowlist vs marketplace distribution
tags: [cursor, mcp, security, governance]
status: active
updated: 2026-08-30
when_to_use: Separating who may run an MCP server from how it gets installed (Teams/Enterprise)
---

## Summary

**Distribution ≠ policy.** Team MCP / marketplace **offers** servers. The Enterprise **MCP Allowlist** **approves** command or URL patterns. Allowlisting does not install anything; linking to a marketplace does not enable every developer.

## Notes

- Cloud Agents read Team MCP from Dashboard → Integrations & MCP. To expose the same server in IDE/CLI/Agent Window, **Add to Team Marketplace** (Default marketplace). Install mode (Default Off / Default On / Required) is a Plugins setting. Removing a linked MCP plugin can delete the Team MCP server for local **and** cloud — read the confirm dialog (`cursor-plugins`).
- Allowlist (Enterprise → Team Settings → MCP Configuration): command entries match the **full** `command + args` string (path-resolved `npx` — use a leading `*`); URL entries match the remote URL (`https://*.acme.com/*`). Optional per-server **Tools** list; empty = all tools on that server. Wildcards use `*`.
- Effective MCP auto-run allowlist **replaces**, does not merge: (1) dashboard/admin, (2) MDM `~/.cursor/permissions.json` (`server:tool`, `server:*`, `*:tool`, `*:*`), (3) editor / inline Add to allowlist.
- Stdio network modes: Allow all / Allowlist / Deny all / **No sandbox**. Remote HTTP/SSE are limited to the URL pattern. User MCP extensions can be allowed outside admin patterns, then constrained by a User MCP Network Denylist.
- Adjacent Enterprise controls: **Repository Blocklist** (refuse index/work); **Protected Git Scopes** (lock a GitHub/GitLab org/group to this Cursor org so unsanctioned teams cannot run Cloud Agents/Bugbot on it — claimer must be Git admin + Cursor admin). Model access is a separate union of team + Organization Group allows.

## Sources

- [Model Context Protocol (Cursor)](https://cursor.com/docs/mcp) — accessed 2026-08-30
- [Model and Integration Management](https://cursor.com/docs/enterprise/model-and-integration-management) — accessed 2026-08-30
- [Enterprise](https://cursor.com/docs/enterprise) — accessed 2026-08-30
