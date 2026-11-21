---
id: smithery-proxy-shutdown
title: A Smithery MCP URL or API key stopped working on 31 October 2026
kind: knowledge
tags: [smithery, mcp, registry, migration]
status: active
updated: 2026-11-21
when_to_use: An MCP client still points at server.smithery.ai, run.tools, or a Smithery API key
---

## Summary

Smithery shut down its MCP proxy and managed identity on **31 October 2026**. Hosted URLs, accounts, and API keys stopped. `smithery.ai` remains a public directory that lists each server’s own MCP URL. A client still aimed at the proxy cannot connect through Smithery.

## Notes

- **What stopped.** Smithery’s notice lists server URLs on `run.tools` and `server.smithery.ai`, the Smithery API, Connect, and Toolbox, Smithery accounts and API keys, and the Smithery CLI and SDKs (those releases marked deprecated). Connecting through Smithery is not available after that date. Paid plans were cancelled, with charges since 5 August 2026 refunded.
- **What remains.** `smithery.ai` stays up as a non-proxied directory, now powered by Arcade. Verified server pages show the vendor endpoint (the notice’s example is `mcp.linear.app/mcp` in place of a `server.smithery.ai` or `run.tools` URL). Use that vendor URL and that vendor’s sign-in. Publishing and discovery of install metadata for a public server belong on the official MCP Registry (`mcp-official-registry`).
- **Hosted auth elsewhere.** A client that needed Smithery to hold Gmail, Slack, or similar OAuth tokens needs another connection manager. Composio (`composio`) is the hosted tool-auth service already in this directory. Smithery’s notice points the same job at Arcade, the company that now runs the directory.

## Sources

- [The future of Smithery](https://www.smithery.ai/future) — accessed 2026-11-21
