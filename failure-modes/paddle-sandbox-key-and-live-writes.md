---
id: paddle-sandbox-key-and-live-writes
title: A Paddle sandbox key hit live MCP, or a read-only grant tried to change prices
kind: knowledge
tags: [paddle, payments, mcp, billing]
status: active
updated: 2026-11-23
when_to_use: A Paddle MCP call returned an auth error, a sandbox test moved a live catalog, or an agent could read prices and could not change them
---

## Summary

Paddle (`paddle`) sandbox and live are different accounts, different MCP hosts, and different credentials. A sandbox key cannot sign in to the live server, and a default live OAuth grant cannot change the catalog until someone turns writes on. `execute` is the write path, and the server does not refuse a destructive call on its own.

## Notes

- **Keys do not cross environments.** Sandbox MCP is `https://sandbox-mcp.paddle.com/mcp` and accepts a sandbox API key as a Bearer token. Those keys are prefixed `pdl_sdbx_`. Live MCP is `https://mcp.paddle.com/mcp` and accepts OAuth or a live API key. A sandbox key on the live URL, or a live key on the sandbox URL, fails authentication. The sandbox server does not offer OAuth. Name the two client entries differently (`paddle-sandbox` and `paddle-live` in Paddle’s own examples) so a test prompt is not sent at the live catalog.
- **Live OAuth starts read-only.** The first browser grant can read what that user’s role can read. Price, product, and subscription changes stay blocked until the grant is widened under **Paddle > Connectors > MCPs**. The go-live checklist repeats that: there is no live key to paste for the OAuth path, and writes are a dashboard step. An API-key connection is different. Its scope is whatever was selected when the key was created, including on the sandbox, where a key is the only auth.
- **`execute` is not a dry run.** The agent looks up a method with `search`, then `execute` runs JavaScript that can chain several API calls. Names bound in one `execute` are gone on the next call. Destructive operations carry `destructiveHint`, and the result can include a `warning`. Paddle says agents are not guaranteed to follow that warning. A client set to auto mode decides from the prompt. Approve `execute` in the client when a person should see the call first. A verified live account can take a real checkout; sandbox uses test cards and does not require verification.

## Sources

- [Paddle MCP server](https://developer.paddle.com/sdks/ai/paddle-mcp/) — accessed 2026-11-23
- [Connect the live Paddle MCP server with OAuth](https://developer.paddle.com/changelog/2026/paddle-mcp-oauth/) — accessed 2026-11-23
- [Go-live checklist](https://developer.paddle.com/build/go-live-checklist/) — accessed 2026-11-23
