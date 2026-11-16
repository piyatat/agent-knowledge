---
id: chrome-devtools-mcp
title: Chrome DevTools MCP — live Chrome for coding agents
kind: tool
tags: [chrome, mcp, browser, debugging]
status: active
updated: 2026-11-16
when_to_use: Letting a coding agent inspect a live Chrome page, record a performance trace, or read the console
---

## Summary

**Chrome DevTools for agents** (`chrome-devtools-mcp`, Apache-2.0, Google) is an MCP server and a `chrome-devtools` CLI that drive Chrome through Puppeteer and DevTools. The agent can snapshot, trace, and debug a live page. It is not Playwright MCP (`playwright-mcp`), not Cursor Browser (`cursor-browser`), and not a containment boundary (`chrome-devtools-mcp-profile`).

## Notes

- **Install.** Node.js LTS, current stable Chrome, and npm. MCP config: `npx -y chrome-devtools-mcp@latest`. The browser starts on the first tool that needs it, not when the server merely connects. Gemini CLI: `gemini extensions install` of `ChromeDevTools/chrome-devtools-mcp`, or `gemini mcp add`. Claude Code: marketplace `ChromeDevTools/chrome-devtools-mcp`, plugin `chrome-devtools-mcp@chrome-devtools-plugins`. Codex: `codex mcp add chrome-devtools -- npx chrome-devtools-mcp@latest`. Antigravity 2.0 bundles the browser sub-agent. Global CLI: `npm i -g chrome-devtools-mcp@latest`, then `chrome-devtools navigate_page`.
- **What you get.** Performance traces (CrUX field data is on unless `--no-performance-crux`), network, console with source maps, screenshots, and input. `--slim` keeps three tools: navigation, script, screenshot. Skills ship in the package (`chrome-devtools`, `a11y-debugging`, `debug-optimize-lcp`, and others). Update skills when you update the server; they describe one version’s tools. **1.13.0** (2026-11-11) added logpoints and page-scoped network mocks.
- **Auth and profile.** There is no product login. The default user-data directory is `$HOME/.cache/chrome-devtools-mcp/chrome-profile` and **persists**. `--isolated` uses a temp profile that is deleted when the browser closes. `--autoConnect` attaches to a local Chrome 144+ that already has remote debugging (default channel `stable`). `--browserUrl` / `--wsEndpoint` attach to a DevTools port you already opened.
- **Limits.** Official support is Google Chrome and Chrome for Testing, plus fixes for the latest Extended Stable. Other Chromium browsers are unsupported. Headless is off unless `--headless`. Usage statistics are on unless `--no-usage-statistics`, `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS`, or `CI`. `--no-javascript-evaluation` disables the server’s evaluate tools and `javascript:` navigations; page scripts and clicks still run, and `--experimentalDevtools` can still drive the DevTools console.
- **Alternatives.** Playwright MCP when the agent should use the accessibility tree and you already pin `@playwright/mcp`. Stagehand or browser-use when the loop is `act` / Python CDP. A hosted browser (`browserbase`) when the agent must not touch this machine’s Chrome.
- **Caveats.** Connecting to a signed-in Chrome, or reusing the persistent profile after a login, lets the agent read that session (`chrome-devtools-mcp-profile`). `@latest` in a shared config floats. A config file the agent can write (`~/.config/cd4a/config.json`, or `--config`) can change `executablePath`, `chromeArg`, and URL patterns.

## Sources

- [Get started with Chrome DevTools for agents](https://developer.chrome.com/docs/devtools/agents/get-started) — accessed 2026-11-16
- [chrome-devtools-mcp README](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/README.md) — accessed 2026-11-16
- [Configuration](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/configuration.md) — accessed 2026-11-16
- [Changelog 1.13.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/CHANGELOG.md) — accessed 2026-11-16
