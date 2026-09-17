---
id: cursor-xcode
title: Cursor + Xcode MCP bridge (xcrun mcpbridge)
tags: [cursor, mcp, cli, interoperability]
status: active
updated: 2026-09-17
when_to_use: Letting Cursor’s agent build, test, or preview an Xcode project via Apple’s MCP tools
---

## Summary

Xcode **26.3+** ships a built-in MCP server. `xcrun mcpbridge` translates MCP into Xcode’s XPC layer so Cursor can use **20 tools** (files, build/test, issues, SwiftUI preview, docs search) without leaving the editor. Paid Cursor plan; **Xcode must be running with a project open**. This is stdio MCP (`cursor-mcp-json`), not JetBrains ACP (`cursor-jetbrains-acp`).

## Notes

- Enable in Xcode: Settings → Intelligence → Model Context Protocol → **Xcode Tools** / Allow external agents. Cursor: Customize → MCPs → stdio server `xcode-tools` command `xcrun mcpbridge`, or `~/.cursor/mcp.json` `{ "command": "xcrun", "args": ["mcpbridge"] }`, or `agent mcp add xcode-tools -- xcrun mcpbridge`.
- Tool groups: files (`XcodeRead` ≤600 lines/call + offset, Write/Update/Grep/Glob/LS/MakeDir/RM/MV), build/test (`BuildProject`, `GetBuildLog`, `RunAllTests` / `RunSomeTests`, `GetTestList`), diagnostics, intelligence (`RenderPreview`, `DocumentationSearch`, `ExecuteSnippet`), workspace (`XcodeListWindows`).
- Typical loop: open the project in both apps → agent reads/edits via Xcode tools → `BuildProject` / `GetBuildLog` → targeted tests → SwiftUI screenshot. CLI `agent` uses the same `mcp.json` entry.
- Troubleshoot: missing server → Xcode not running / no project. `tabIdentifier` errors → empty Xcode window. Timeouts → build still running in Xcode. Toggle missing → Xcode < 26.3. `unable to find utility "mcpbridge"` → `xcode-select` pointed at CLT; `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` then `xcodebuild -runFirstLaunch`. Treat these tools as a privileged IDE surface (`mcp-server-trust-failures`).

## Sources

- [Xcode (Cursor docs)](https://cursor.com/docs/integrations/xcode) — accessed 2026-09-17
- [MCP overview (Cursor)](https://cursor.com/docs/mcp) — accessed 2026-09-17
