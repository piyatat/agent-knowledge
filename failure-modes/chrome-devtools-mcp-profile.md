---
id: chrome-devtools-mcp-profile
title: Chrome DevTools MCP reuses a signed-in browser
kind: knowledge
tags: [chrome, mcp, browser, security]
status: active
updated: 2026-11-16
when_to_use: A coding agent can read cookies or act as you because Chrome DevTools MCP reused a profile or attached to your browser
---

## Summary

`chrome-devtools-mcp` exposes whatever Chrome it is attached to: pages, cookies, storage, and network. The default is a **persistent** profile under the server’s own cache directory, not a fresh browser every run. `--autoConnect` and a DevTools URL attach to a Chrome you already use. Treat that as the same class of leak as an unscoped Playwright profile (`playwright-mcp-containment`).

## Notes

- **Persistent default.** `--isolated` defaults to false. The documented user-data directory is `$HOME/.cache/chrome-devtools-mcp/chrome-profile` (channel suffix when not stable). A login the agent completes, or that you complete in that window, is still there on the next run.
- **Attach to your Chrome.** `--autoConnect` connects to local Chrome 144+ for the given `--channel` (default `stable`) after remote debugging is enabled at `chrome://inspect/#remote-debugging`. `--browserUrl` and `--wsEndpoint` attach to a port you opened. That Chrome’s existing tabs and cookies are visible to the MCP client. The server starts the browser on the first tool that needs it; merely connecting the MCP server does not.
- **Flags that feel like a sandbox.** `--no-javascript-evaluation` turns off evaluate tools, logpoints, `initScript`, and `javascript:` / `data:` / `vbscript:` navigations. Page JavaScript and clicks still run. With `--experimentalDevtools`, input tools can drive the DevTools console, and that path is not covered by the flag. `--fileNavigations false` blocks new `file:` navigations; it does not cover pages already open or other filesystem paths the browser can reach.
- **URL patterns.** `--allowedUrlPattern` needs Chrome 149+. Patterns with regexp groups, named groups, or partial IPv4 wildcards are rejected because they are not enforced on redirects or subresources. An omitted port matches only the scheme default. Updating patterns with `--watchConfig` restricts later requests; targets already open on a newly disallowed URL stay attached.
- **Config rewrite.** The server loads `~/.config/cd4a/config.json` (and the Windows equivalent) unless discovery is disabled. If the agent can write that file or the path passed to `--config`, it can change `executablePath`, `chromeArg`, and the URL lists. Keep that file and its parent out of the agent’s write set.
- **Mitigation.** Pass `--isolated` for a throwaway profile. Do not set `--autoConnect` or a DevTools URL on a daily-driver Chrome. Prefer a narrow `--allowedUrlPattern`. Opt out of usage stats with `--no-usage-statistics` when the task must not report tool latency to Google; `CI` disables that collection.

## Sources

- [chrome-devtools-mcp README](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/README.md) — accessed 2026-11-16
- [Configuration](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/configuration.md) — accessed 2026-11-16
- [Get started with Chrome DevTools for agents](https://developer.chrome.com/docs/devtools/agents/get-started) — accessed 2026-11-16
