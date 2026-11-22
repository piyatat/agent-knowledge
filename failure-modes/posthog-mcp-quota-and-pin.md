---
id: posthog-mcp-quota-and-pin
title: PostHog MCP hits a rate limit, or a write lands in the wrong project
kind: knowledge
tags: [posthog, mcp, billing, flags]
status: active
updated: 2026-11-22
when_to_use: A PostHog MCP call returns 429, a flag serves the quota default, or a write lands in the wrong project
---

## Summary

PostHog (`posthog`) meters the MCP server per credential, and the free plan drops data once a product allowance is gone. A project pin only chooses where a session starts. The same login can still switch to another project it can open.

## Notes

- **MCP rate limit.** The server allows 480 requests per minute and 4,800 per hour for one OAuth token or one personal API key, before the call reaches the PostHog API. Opening a session, the client-ready notice, and listing tools each count. Over the limit the response is `429` with `Retry-After`. A client that opens a new session on every prompt spends that budget before the first tool call. Personal API keys also count against the default API limits, per key. OAuth requests skip those default API limits. Some endpoints add a shared project or organization limit. Sentiment and trace-summary tools have a lower extra limit because they call a model.
- **Quota.** On the free plan, events past the monthly allowance are dropped, and feature flags return a default quota-limited response. The same drop happens on pay-as-you-go after a product’s billing limit. Unused allowance does not roll over. Usage from every project in the organization shares one allowance. Logs kept longer than 14 days bill $0.05 per GB for each month retained, and that charge continues after the Logs ingestion limit is hit.
- **Wrong project.** A `project_id` pin or `x-posthog-project-id` header sets the starting project. `switch-project` stays available unless the key itself is limited to one project. Limit the OAuth grant to named projects, or use a project-scoped personal API key, when the agent must stay in one project. One MCP connection signs in as one account and follows that account’s US or EU region. A second region needs a second connection. If the client reuses one browser session, each OAuth entry can authorize as the same account. A distinct personal API key per entry keeps the accounts apart. A client that drops the conversation id starts a new conversation on the pin, or on whichever project is open in PostHog when there is no pin.
- **AI tools.** Tools that call a model are omitted while AI data processing is off, and their use counts as PostHog AI spend when it is on. Issue text, survey answers, and query results are untrusted content.

## Sources

- [PostHog MCP FAQ](https://posthog.com/docs/model-context-protocol/faq) — accessed 2026-11-22
- [PostHog pricing](https://posthog.com/pricing) — accessed 2026-11-22
