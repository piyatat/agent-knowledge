---
id: playwright-mcp-containment
title: Playwright MCP is not a security boundary
tags: [mcp, browser, security, sandbox]
status: active
updated: 2026-11-16
when_to_use: Connecting @playwright/mcp (or similar browser MCP) to a coding agent
---

## Summary

Microsoft’s Playwright MCP drives a real browser from accessibility snapshots. The project states it is **not a security boundary**. Origin allow/block lists do **not** apply to redirects. Prefer CLI+SKILLS for token-heavy coding agents; keep MCP when you need a persistent page and iterative tree inspection.

## Notes

- Official contrast: **CLI + SKILLS** for high-throughput coding agents (smaller schemas, less a11y-tree dump); **MCP** for exploratory / long-lived browser state (`playwright-mcp`). Pin a version — the README example uses `@latest`, and the package was still **0.0.x** (0.0.85 on 2026-11-09).
- `--allowed-origins` / `--blocked-origins` are convenience filters, not isolation (`PLAYWRIGHT_MCP_ALLOWED_ORIGINS`). The README says an allowlist **does not** serve as a security boundary and **does not** affect redirects. Default is allow-all.
- `--isolated` keeps the profile in memory (needed for concurrent clients — one persistent profile cannot be shared). Prefer `storageState` files over stuffing login secrets into the model. Config `secrets` and `redactUrlParams` rewrite tool responses; the README calls both a convenience, not a security feature. `webmcp` collection is **on by default**.
- Networked HTTP MCP (`--port 8931`, and Docker published with `--host 0.0.0.0`) is a full browser on the wire. Prefer stdio; if HTTP, authenticate and bind to localhost.
- Page content, traces, screenshots, and storage-state files are prompt-injection and secret-exfil channels. Run in a container/VM with no prod egress.

## Sources

- [microsoft/playwright-mcp](https://github.com/Microsoft/playwright-mcp) — accessed 2026-08-22
- [MCP Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — accessed 2026-08-22
- [Playwright MCP security guide](https://microsoft-playwright-mcp.mintlify.app/guides/security) — accessed 2026-08-22
- [Playwright MCP README](https://github.com/microsoft/playwright-mcp/blob/main/README.md) — accessed 2026-11-16
- [@playwright/mcp on npm](https://www.npmjs.com/package/@playwright/mcp) — accessed 2026-11-16
