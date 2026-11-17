---
id: snyk-agent-scan-executes
title: Snyk Agent Scan starts MCP servers to read their tools
tags: [snyk, mcp, security, supply-chain]
status: active
updated: 2026-11-17
when_to_use: Running Agent Scan on an untrusted mcp.json, or a CI scan that never prompts
---

## Summary

Agent Scan learns tool descriptions by starting each stdio server’s command and by calling each remote MCP URL with that server’s headers. A scan of an untrusted config is itself code execution and an outbound request.

## Notes

- **Interactive runs** ask before each server. The prompt shows the name and the command or URL; env and headers are redacted. Declining records `user_declined` and does not contact that server.
- **Non-interactive** scans (background, push-key, and a TTY-less CI run) still contact remote servers. They do not start stdio servers unless `--dangerously-run-mcp-servers` is set. That flag also skips the consent prompt.
- **Remote guards.** Destinations that resolve to link-local or the documented cloud-metadata addresses are refused (`169.254.0.0/16`, `fe80::/10`, `fd00:ec2::254`, `100.100.100.200`). Loopback and other private addresses are allowed. Redirects are not followed. DNS is checked before the request and again at connect time, so a rebinding window remains (`mcp-localhost-dns-rebinding`).
- Run the scan in a sandbox when the config is third-party. Review every command before approving it (`snyk-agent-scan`, `mcp-local-server-security`).

## Sources

- [snyk/agent-scan README](https://github.com/snyk/agent-scan/blob/main/README.md) — accessed 2026-11-17
