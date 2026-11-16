---
id: stagehand
title: Stagehand v4 — browser SDK for agents
kind: tool
tags: [stagehand, browser, sdk, cdp]
status: active
updated: 2026-11-16
when_to_use: Driving a browser from agent code with act, extract, and observe, locally or on Browserbase
---

## Summary

**Stagehand v4** is Browserbase’s SDK for browser agents. You launch or attach a Chromium browser, then call `act`, `extract`, and `observe`. It talks to Chrome over the Chrome DevTools Protocol and has **no Playwright dependency**. A local Chrome window does not need a Browserbase account; `browserbase.launch` is the hosted path (`browserbase`). It is not `@playwright/mcp` and not a coding agent’s built-in browser.

## Notes

- **Install.** Node.js **22.18+** (Bun works): `pnpm add @browserbasehq/stagehand 'zod@~4.4.3'`. Keep Zod on the **4.4.x** line; a newer Zod minor can break `extract()` schemas. Python **3.11+**: `pip install stagehand`. Go **1.26+**: `go get github.com/browserbase/stagehand/packages/sdk-go/v4@v4.0.0`. Chromium only — no Firefox, WebKit, or bundled browser download. A local run needs Chrome already installed.
- **Two browsers.** `localBrowser.launch()` (Python `local_browser.launch`) runs Chrome on the machine. `browserbase.launch({ apiKey })` uses a Browserbase session. `localBrowser.connect({ cdpUrl })` and `browserbase.connect({ apiKey, sessionId })` attach to one that is already running. v3’s `new Stagehand()` plus `init()` is gone: get a browser from a factory, then `Stagehand.create({ browser })`. `stagehand.close()` does **not** close the browser; call `browser.close()` yourself. Stagehand closes only browsers it launched.
- **Auth.** The SDK does not read environment variables or `.env` files, and it ignores `BROWSERBASE_BASE_URL` / `STAGEHAND_API_URL` unless you pass URLs in code. A **local** browser cannot use the Model Gateway — pass `model` and that provider’s API key into `create`. On Browserbase, the Model Gateway can pick a model from the Browserbase key, and server-side action caching is available. Neither exists locally.
- **Coding agents.** The repo README points agents at the `browse` CLI (`npm install -g browse`, then `npx skills add browserbase/stagehand --skill browse`) for local `browse open` / `snapshot` without an LLM key or Browserbase account. The same CLI is the documented prerequisite for deploying a script as a **Browserbase Function**, which runs beside the browser and reads the API key from an encrypted project secret. A hosted MCP server at `https://mcp.browserbase.com/mcp` exposes `navigate`, `act`, `observe`, and `extract` with `Authorization: Bearer` and **does** need a Browserbase key.
- **Page tools.** On browsers Stagehand launches, it turns on `WebMCP,WebMCPTesting,DevToolsWebMCPSupport`. `page.tools()` lists tools the page registered (`webmcp-browser-tools`). Prefer one of those over `act()` when it exists; fall back to `act` when the list is empty. An attached browser without those flags returns an empty list.
- **Alternatives.** A Browserbase session plus Playwright or Puppeteer when you do not want natural-language actions. Playwright MCP when the coding agent should stay on a local stdio browser. Cursor Browser or Claude in Chrome when that product already has a browser tool.
- **Caveats.** The quickstart opens a **visible** local window. Do not commit `BROWSERBASE_API_KEY` or model keys. v3 code that constructs Stagehand directly will not run on v4.

## Sources

- [Stagehand v4 installation](https://docs.stagehand.dev/v4/first-steps/installation) — accessed 2026-11-16
- [Stagehand v4 quickstart](https://docs.stagehand.dev/v4/first-steps/quickstart) — accessed 2026-11-16
- [Browser configuration](https://docs.stagehand.dev/v4/configuration/browser) — accessed 2026-11-16
- [Migrate v3 to v4](https://docs.stagehand.dev/v4/migrations/v3) — accessed 2026-11-16
- [Migrate Playwright to v4](https://docs.stagehand.dev/v4/migrations/playwright) — accessed 2026-11-16
- [Deploying Stagehand](https://docs.stagehand.dev/v4/best-practices/deployments) — accessed 2026-11-16
- [Stagehand WebMCP](https://docs.stagehand.dev/v4/basics/webmcp) — accessed 2026-11-16
- [browserbase/stagehand](https://github.com/browserbase/stagehand) — accessed 2026-11-16
