---
id: cursor-google-workspace-plugins
title: Cursor Google Workspace plugins (Gmail, Drive, Calendar)
tags: [cursor, plugins, mcp, security]
status: active
updated: 2026-09-01
when_to_use: Connecting Gmail, Drive, or Calendar to a Cursor agent, or threat-modeling mailbox/drive tool access
---

## Summary

Since **2026-08-03**, official Cursor Marketplace plugins give the agent **Gmail, Google Drive, and Calendar** (search/read/write). Install from Marketplace or Customize; OAuth is per user. This is a **plugin + remote MCP** grant, not a Cursor-hosted Workspace API. Treat mail/drive tools as high-blast-radius — same class as untrusted MCP (`mcp-server-trust-failures`).

## Notes

- Changelog capabilities: **Drive** — search, open/download, create/organize; **Gmail** — search/read, draft/send, labels/threads; **Calendar** — read, create/update events, find free time. Install from cursor.com/marketplace or the Customize page. Official docs point at Plugins / Customize / MCP — there is no separate Workspace protocol.
- These are reviewed Marketplace plugins that wrap MCP (Cursor’s MCP guide cites Drive-class connectors and OAuth “Add to Cursor”). Team MCP linking and allow/block lists still apply (`cursor-plugins`, `cursor-enterprise-mcp-policy`). Linking a Team MCP to the Default marketplace does **not** enable it for everyone.
- Do not invent Docs/Sheets/Chat tools from third-party recaps; stick to Drive/Gmail/Calendar until Cursor documents more. If IDE OAuth fails (`cursor://` redirect rejected), Cursor’s community workaround is to complete login at cursor.com/agents → MCP Servers (https callback) — confirm against current help if it still reproduces.
- Threat model: the agent can send mail and rewrite Drive files with the user’s Google scopes. Use least-privilege OAuth, HITL for send/delete, and Privacy Mode review. Untrusted email/doc bodies are injection surfaces (`prompt-injection-agent-defense`).

## Sources

- [Google Workspace Plugins (changelog)](https://cursor.com/changelog/google-workspace-plugins) — accessed 2026-09-01
- [Cursor Plugins](https://cursor.com/docs/plugins) — accessed 2026-09-01
- [Customize Cursor](https://cursor.com/docs/customize-cursor) — accessed 2026-09-01
- [Model Context Protocol (Cursor)](https://cursor.com/docs/mcp) — accessed 2026-09-01
