---
id: playwright-mcp
title: Playwright MCP — browser tools for coding agents
kind: tool
tags: [playwright, mcp, browser, cli]
status: active
updated: 2026-11-16
when_to_use: Giving a coding agent a local browser through @playwright/mcp instead of Stagehand or a hosted browser
---

## Summary

**Playwright MCP** (`@playwright/mcp`, Apache-2.0) is Microsoft’s MCP server for browser automation. The model acts on the accessibility tree, not screenshots. It is a stdio (or optional HTTP) server any MCP client can launch. It is not Stagehand (`stagehand`), not browser-use (`browser-use`), and not a security boundary (`playwright-mcp-containment`).

## Notes

- **Install.** The package README requires **Node.js 18+**; the Playwright getting-started page requires **Node.js 20+**. Use 20 or newer. Standard config is `npx` with `@playwright/mcp`. The README example uses `@latest`. Pin an exact version in shared configs — the package was still **0.0.85** on 2026-11-09, so do not assume a 1.0 tool list. Claude Code: `claude mcp add playwright npx @playwright/mcp@<pin>`. Cursor: Settings → MCP, command type, the same `npx` args. VS Code: `code --add-mcp`.
- **How it runs.** Default is a **headed** browser so you can watch it; pass `--headless` for CI. The configuration page’s browser values are `chrome` (documented default), `firefox`, `webkit`, and `msedge`. A persistent profile is the default and only one client can use it; concurrent clients need `--isolated` or distinct `--user-data-dir` (`PLAYWRIGHT_MCP_ISOLATED`). `--storage-state` loads cookies into an isolated context. Prefer that file over pasting a session into the prompt.
- **MCP vs CLI.** The README tells coding agents to prefer **Playwright CLI + SKILLS** when token budget matters: MCP tool schemas and accessibility trees are large. Keep this server when the loop needs a long-lived page and repeated snapshots (exploratory automation, self-healing tests).
- **HTTP and config.** Headless workers or machines without a display can run `npx @playwright/mcp --port 8931` and point the client at `http://localhost:8931/mcp`. `--host 0.0.0.0` binds every interface. `--config` loads a JSON file. `webmcp` collection is **on by default**. `secrets` and `redactUrlParams` rewrite tool responses; the README says both are convenience, not security.
- **Auth.** Stdio inherits your user. There is no login of its own. An HTTP listener is a browser on the network unless you bind loopback and put a proxy in front (`playwright-mcp-containment`).
- **Alternatives.** browser-use (`browser-use`) when a Python agent should write CDP itself, including against your open Chrome. Stagehand (`stagehand`) for `act` / `extract` / `observe`. Cursor Browser (`cursor-browser`) or Claude in Chrome (`claude-code-chrome`) when that product already has a browser tool. Browserbase (`browserbase`) for a hosted session.
- **Caveats.** `@latest` in a committed MCP config will change tools out from under you. Origin allow and block lists do not stop redirects. A shared persistent profile breaks a second client. Do not treat redaction as containment.

## Sources

- [Playwright MCP README](https://github.com/microsoft/playwright-mcp/blob/main/README.md) — accessed 2026-11-16
- [Playwright MCP getting started](https://playwright.dev/docs/getting-started-mcp) — accessed 2026-11-16
- [Playwright MCP configuration](https://playwright.dev/mcp/configuration/options) — accessed 2026-11-16
- [@playwright/mcp on npm](https://www.npmjs.com/package/@playwright/mcp) — accessed 2026-11-16
