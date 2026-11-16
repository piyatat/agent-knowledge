---
id: browser-use
title: browser-use 1.0 — Python browser agent and CLI
kind: tool
tags: [browser-use, browser, python, cdp]
status: active
updated: 2026-11-16
when_to_use: Driving a browser from Python or a coding agent with browser-use 1.0 instead of Stagehand or Playwright MCP
---

## Summary

**browser-use 1.0** is an MIT-licensed Python library. The agent writes Python (browser helpers plus raw Chrome DevTools Protocol) in a persistent REPL on **Pydantic AI** (`pydantic-ai`). Defaults are the `bu-fast` model and a **Browser Use Cloud** browser, both billed to one `BROWSER_USE_API_KEY`. The coding-agent **CLI** pipes Python at a browser; it does not take a natural-language `run` command. It is not Stagehand (`stagehand`) and not `@playwright/mcp` (`playwright-mcp`).

## Notes

- **Install.** Python **3.11+**. The quickstart pins `browser-use==1.0.0` (`uv add` or `pip install`) and says not to use `>=`, because a new release can break callers. Upgrade by changing the pin. 0.x docs live under `/open-source/legacy/0.x/` (`pip install 'browser-use<1'`). Removed 1.0 options raise `TypeError` before a browser starts; a few 0.x knobs (`flash_mode`, `use_thinking`, `max_failures`) warn and are ignored. 0.x CLI subcommands (`open`, `click`, `run`, …) print what replaced them.
- **Auth and cost.** Create a key at cloud.browser-use.com and set `BROWSER_USE_API_KEY`, or run `browser-use login` (over SSH, `--device-code`). The CLI stores the key in `~/.config/browser-harness/auth.json`. The env var wins over the stored key. A `.env` in the working directory is read on import. The library is free. The default model and cloud browsers bill the Browser Use account; `result.cost_usd` is the model cost of that run. `ChatOpenAI` / `ChatAnthropic` / `ChatGoogle` (or any Pydantic AI model) plus `Browser('chromium')` keep the run off that gateway. `Browser('chromium')` uses installed Chrome, Chromium, or Edge; `browser-use install` downloads Chromium if none is present.
- **Run.** `Agent(task)` then `run_sync()` or `await agent.run()`. `max_steps` belongs on `run()`, not the constructor (default **100** model requests, `timeout` **1700** seconds). The browser start and stop are outside the timeout. One `run()` per `Agent`, and one running `Agent` per `Browser`, or `run()` raises `RuntimeError`. After the browser is requested, failures return `status='error'` instead of raising (`result.error`). A delivered run can be `status='completed'` with `success` false when the agent reports the task unfinished. Hitting the step or time budget still gets one delivery turn; otherwise status is `max_steps` or `timeout` and you read `result.partial`. `run_sync()` raises inside a running event loop (Jupyter, async). Pass secrets as `sensitive_data`, not in the task string.
- **CLI for coding agents.** `uv tool install 'browser-use==1.0.0'`, then `browser-use skill install` writes a skill into `~/.agents` and into installed agents (claude, codex, copilot, cursor, gemini, openclaw, opencode). The agent pipes Python (`browser-use <<'PY'`). By default the CLI attaches to **the Chrome you already have open**, including its tabs, cookies, and logins; macOS needs an Allow click or `browser-use mac-approve`. `BU_CDP_URL` plus a distinct `BU_NAME` targets another DevTools endpoint. `start_remote_daemon("work")` opens a named cloud browser that bills until stop or timeout. After a name has run a cloud browser, that name does not fall back to local Chrome; `BU_NAME=… browser-use --reload` resets it. `browser-use --cli-mcp` starts an MCP server.
- **Hosted API.** New cloud integrations use the separate **`browser-use-sdk`** package (`from browser_use_sdk.v4 import BrowserUse`), not `from browser_use import Agent`. Cloud HTTP auth is `X-Browser-Use-API-Key` without a Bearer prefix (`browser-use` cloud quickstart).
- **Alternatives.** Stagehand (`stagehand`) when the caller wants `act` / `extract` / `observe` on CDP without a Python REPL agent. Playwright MCP (`playwright-mcp`) when a coding agent should click from accessibility snapshots. Browserbase (`browserbase`) when you only need a hosted browser, not this agent.
- **Caveats.** A default `Agent()` spends cloud credits and drives a remote browser. The CLI’s default Chrome session can act as the signed-in user. `completed` is not the same as the task succeeding. Do not commit `BROWSER_USE_API_KEY`.

## Sources

- [browser-use 1.0 introduction](https://docs.browser-use.com/open-source/introduction) — accessed 2026-11-16
- [browser-use quickstart](https://docs.browser-use.com/open-source/quickstart) — accessed 2026-11-16
- [browser-use Agent](https://docs.browser-use.com/open-source/agent) — accessed 2026-11-16
- [browser-use CLI](https://docs.browser-use.com/open-source/browser-use-cli) — accessed 2026-11-16
- [Browser Use Cloud quickstart](https://docs.browser-use.com/cloud/quickstart) — accessed 2026-11-16
