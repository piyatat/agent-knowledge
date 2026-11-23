---
id: launchdarkly-mcp-writes-and-token
title: LaunchDarkly MCP could change flags, or an API token was rejected
kind: knowledge
tags: [launchdarkly, flags, mcp, auth]
status: active
updated: 2026-11-23
when_to_use: A LaunchDarkly agent turned a flag on, a hosted MCP call returned 401 with an API token, or an old tool name failed after reconnecting
---

## Summary

LaunchDarkly’s hosted MCP server (`launchdarkly`) shows every tool by default, including updates and deletes. The `writes` query parameter only hides tools from that client. The same docs page both tells a headless agent to send an API access token and says the hosted server rejects those tokens. A 401 on a Bearer token means the reject sentence is the one that applied.

## Notes

- **The default connection can write.** `writes=destructive` is the default and includes tools that update or delete. `writes=none` and a shorter `toolsets` list are chosen by the client in the URL. LaunchDarkly’s warning on that page says the parameters do not limit what the connection can do, because the client can connect again with different values. Limit access with the role of the member who authorizes OAuth, or with the role on a token if a token works. A Reader base role is the example they give for an agent that only reads flags. A 403 after the OAuth screen is a permissions miss on that account. The troubleshooting section says the server needs create, read, update, and delete on flags and AgentControl configs for the projects you use, and recommends a Writer base role when that is the work.
- **API tokens are described twice, in opposite ways.** Early on the hosted-MCP page: the server accepts only OAuth access tokens and rejects personal and service API tokens, so do not put one in the client config. The authenticate section, and the Claude Code example, say a headless agent should send a personal or service token as `Authorization: Bearer`. The 403 section then says both “if you see 401 and the config includes an API token, check that the token was not reset” and “if you see 401, confirm the config does not include an API token, because the server rejects them.” Prefer OAuth. If a headless token gets 401, stop retrying with a new header shape and use a client that can complete OAuth, or the local server where the docs still tell you to. Keep any token out of a committed config. OAuth tokens last two hours, with a refresh, and the person authorizes again every 90 days.
- **Names and injected text.** Until the client reconnects to `https://mcp.launchdarkly.com/mcp`, calls that use the earlier tool names fail and ask for a reconnect. `list-flags` and `get-agentcontrol-config` are two of the renamed tools. Flag descriptions, approval text, logs, and context attributes are model input. A description can tell the model to turn a flag on or to copy an SDK key. Review calls that change data before the client runs them.
- **Developer stops; Foundation bills.** On Developer, the pricing card says you are never billed and you upgrade at the limit. The comparison grid says AI-run ingestion stops at 5,000. Quote the pricing-page meters (service connections, client-side MAU, AI runs, replays, errors, spans, logs) after the 14 unlimited days. The getting-started “1,000 users or contexts” and “10,000 experiment keys” are a different pair of units. Foundation bills past the included amounts, so a pay-as-you-go account can keep going and show up on the invoice.

## Sources

- [LaunchDarkly hosted MCP server](https://launchdarkly.com/docs/home/getting-started/mcp-hosted) — accessed 2026-11-23
- [Get started with LaunchDarkly](https://launchdarkly.com/docs/home/getting-started) — accessed 2026-11-23
- [LaunchDarkly pricing](https://launchdarkly.com/pricing/) — accessed 2026-11-23
