---
id: browserbase
title: Browserbase — hosted browsers for agents
kind: service
tags: [browserbase, browser, sandbox, stagehand]
status: active
updated: 2026-11-15
when_to_use: Giving an agent a hosted browser, or using Search and Fetch before opening a full session
---

## Summary

**Browserbase** hosts isolated browser sessions, plus Search, Fetch, Functions, a model gateway, and **Stagehand** (their SDK: `act`, `extract`, `observe` on top of Playwright-style control). One API key covers the platform. It is not Cursor Browser (`cursor-browser`), not Claude in Chrome (`claude-code-chrome`), and not `@playwright/mcp` on your machine (`playwright-mcp-containment`).

## Notes

- **Access.** Set `BROWSERBASE_API_KEY`. Create a session with `@browserbasehq/sdk` (`sessions.create`), the Python `browserbase` package, or `POST https://api.browserbase.com/v1/sessions` with header `x-bb-api-key`. The response includes a connection URL for Playwright, Puppeteer, Selenium, or Stagehand. Create calls are rate-limited by the plan’s **concurrent session** cap. Search and Fetch are the cheaper path when you only need text; open a browser when the page needs login, JavaScript, or clicks.
- **Session options.** Region (US East, US West, EU Central, UK; Asia Pacific on request for enterprise), viewport, keep-alive after disconnect, proxies, allowed domains, extensions, and a browser context for cookies across sessions. **Recording and logging default to on.** Captcha solving defaults to on in the session API; the Free plan’s feature table lists captcha solving as off. Verified Agent Identity is **Scale** only. Agent Identity and captcha solving do not override a site’s own allow decision.
- **Plans (pricing page, 2026-11-15).** **Free:** $0, 3 concurrent browsers, 1 browser hour, 3 agent runs, 1,000 Search and 1,000 Fetch calls, 15 minutes per session, 7-day retention, $5 of model tokens. **Developer:** $20/mo, 25 concurrent, 100 browser hours then $0.12/hour, captcha solving, 30-day retention. **Startup:** $99/mo, 100 concurrent, 500 hours then $0.10/hour. **Scale:** custom, 250+ concurrent, verified agents, HIPAA BAA and SSO. Included usage is not a hard stop; overage bills at the plan rate. Search is 2 requests/second per project and Fetch is 5 on Free, Developer, and Startup.
- **Stagehand and Functions.** Stagehand is the agent-facing SDK and plugs into LangChain, CrewAI, and Mastra. The model gateway bills models on the same Browserbase key (market price after the Free credit). Functions run your code next to the browser so you are not operating a separate worker. There is no on-prem browser product; enterprise options named on the pricing FAQ are private cloud and VPC, not a laptop install.
- **Alternatives.** Playwright MCP or a local browser when the session must stay on a machine you control. Cursor Browser or Claude in Chrome when the coding agent already has a browser tool. A sandbox VM (`e2b-sandboxes`) when you need a general Linux box, not a browser fleet.
- **Caveats.** Default session replay stores what the agent saw, including anything typed into a page. A Free session ends at 15 minutes. Hitting the concurrency cap fails session create — back off instead of retrying in a tight loop. Do not treat stealth or Agent Identity as permission to ignore a site’s rules.

## Sources

- [What is Browserbase?](https://docs.browserbase.com/introduction/what-is-browserbase) — accessed 2026-11-15
- [Create a browser session](https://docs.browserbase.com/fundamentals/create-browser-session) — accessed 2026-11-15
- [Browserbase pricing](https://www.browserbase.com/pricing) — accessed 2026-11-15
