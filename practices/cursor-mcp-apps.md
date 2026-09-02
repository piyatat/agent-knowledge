---
id: cursor-mcp-apps
title: Cursor as an MCP Apps host
tags: [cursor, mcp, ux, extensions]
status: active
updated: 2026-09-02
when_to_use: Shipping or reviewing an MCP tool that returns interactive UI inside Cursor (not a Canvas, not AG-UI/A2UI)
---

## Summary

Cursor documents the **MCP Apps extension as Supported**. Tools may return interactive UI **plus** the normal tool payload. Progressive enhancement still applies: a host that cannot render the app must get a usable text/structured result. Protocol details live in `mcp-apps-extension`; this note is the **Cursor host** matrix.

## Notes

- Official feature table: Tools, Prompts, Resources, Roots, Elicitation, and **Apps (extension)** are Supported. Help text: “Cursor supports the MCP Apps extension, so MCP tools can return interactive UI in chat.”
- Do not confuse with **Canvases** (Cursor-built artifacts next to chat) or **AG-UI / A2UI** (`ag-ui-vs-a2ui`). MCP Apps are the *tool server’s* sandboxed HTML; Canvases are a Cursor-native view.
- Approval: MCP tools follow **Run Modes**. Auto-review allowlists run immediately; everything else goes through the classifier (`cursor-permissions-json`). App-initiated `tools/call` must stay on the same consent path as model-initiated calls (SEP-1865).
- Cloud Agents get MCP from the dashboard, not `mcp.json`. Enterprise allowlists (command/URL patterns) and User MCP Network Denylist still apply to the server that hosts the app.
- If you only need a form/chart inside the IDE, MCP Apps is the right primitive. If the product frontend owns widgets, use A2UI. If you need a standard agent↔UI event stream, use AG-UI.

## Sources

- [Model Context Protocol (Cursor)](https://cursor.com/docs/mcp) — accessed 2026-09-02
- [MCP integrations (help)](https://cursor.com/help/customization/mcp) — accessed 2026-09-02
- [MCP Apps overview](https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html) — accessed 2026-09-02
