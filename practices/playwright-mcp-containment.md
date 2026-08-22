---
id: playwright-mcp-containment
title: Playwright MCP is not a security boundary
tags: [mcp, browser, security, sandbox]
status: active
updated: 2026-08-22
when_to_use: Connecting @playwright/mcp (or similar browser MCP) to a coding agent
---

## Summary

Microsoft’s Playwright MCP drives a real browser from accessibility snapshots. The project states it is **not a security boundary**. Origin allow/block lists do **not** apply to redirects. Prefer CLI+SKILLS for token-heavy coding agents; keep MCP when you need a persistent page and iterative tree inspection.

## Notes

- Official contrast: **CLI + SKILLS** for high-throughput coding agents (smaller schemas, less a11y-tree dump); **MCP** for exploratory / long-lived browser state. Pin a version — `@latest` is a rug-pull vector.
- `--allowed-origins` / `--blocked-origins` are convenience filters, not isolation. Blocklist is evaluated first; without an allowlist, non-blocked origins still load. Redirects ignore both. Default is allow-all.
- Filesystem: workspace-root (or cwd) only unless `--allow-unrestricted-file-access`; `file://` navigation is blocked by default. `--isolated` keeps the profile in memory (needed for concurrent clients — one persistent profile cannot be shared). Prefer `storageState` files over stuffing login secrets into the model.
- Networked HTTP MCP (e.g. Docker on `0.0.0.0:8931`) is a full browser on the wire. Prefer stdio; if HTTP, authenticate and bind to localhost. Host-header checks exist to blunt DNS rebinding — they are not auth.
- Page content, traces, HAR, screenshots, and storage-state files are prompt-injection and secret-exfil channels. Run in a container/VM with no prod egress. Treat `browser_run_code*` style tools as host-equivalent execution if enabled.

## Sources

- [microsoft/playwright-mcp](https://github.com/Microsoft/playwright-mcp) — accessed 2026-08-22
- [MCP Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — accessed 2026-08-22
- [Playwright MCP security guide](https://microsoft-playwright-mcp.mintlify.app/guides/security) — accessed 2026-08-22
