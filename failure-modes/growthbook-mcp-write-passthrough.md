---
id: growthbook-mcp-write-passthrough
title: A GrowthBook write bypasses the skill guardrails, or the free event cap is misread
kind: knowledge
tags: [growthbook, flags, mcp, billing]
status: active
updated: 2026-11-25
when_to_use: A GrowthBook agent deleted a flag, a skill workflow was skipped, or managed-warehouse events stopped at the free allowance
---

## Summary

GrowthBook (`growthbook`) MCP write calls are authenticated passthroughs to the REST API. They accept DELETE and do not check the payload. Bundled skills describe a safer workflow only when the agent loads them. The Cloud Starter managed warehouse includes 1 million events, while one FAQ sentence describes overage as if the allowance were 2 million.

## Notes

- **Guardrails are in the skill text.** `growthbook_api_write` forwards POST, PUT, PATCH, and DELETE. The MCP page says these tools do not validate payloads, and it tells the agent not to invent paths. `growthbook_list_skills` and `growthbook_read_skill` are how the draft, review, and publish steps are supposed to load. Nothing in the server forces that sequence. `https://mcp.growthbook.io/mcp/api` does not even offer the skill tools. MCP 1.x tool names no longer exist; an agent that calls `create_feature_flag` is on the old server.
- **Consent is the cloud control.** The hosted consent screen can be Read only, Human-in-the-loop (documented as the default), Full access, or custom. Human-in-the-loop waits for a person on risky changes. Full access does not. The grant still cannot exceed the signed-in member’s permissions. On a server you run, confirmation is a setting on the API key, not a screen in the MCP client. A secret key should send the requested-by header so the change is attributed; a personal access token already is.
- **Which million events.** The pricing comparison and the get-started page give Cloud Starter 1 million managed-warehouse events and 1 million forwarded events a month, and Pro 2 million then $30 per extra million ($0.03 per 1,000). The pricing FAQ’s line about warehouse overage “after the first 2 million” matches Pro, not Starter. Do not plan a free account as if it included the Pro allowance or as if unused events were billed the same way. CDN overage is a warning in the UI (“CDN usage exceeded”); that FAQ does not say flag evaluation stops. Flags and experiments are listed as unlimited on every cloud tier. Sticky bucketing and safe rollouts are not on Starter.
- **Self-hosted is a different meter.** The free self-hosted plan does not include the managed warehouse. Unlimited users there is not the Cloud Starter cap of 3 users and 1 project.

## Sources

- [Official GrowthBook MCP server](https://docs.growthbook.io/integrations/mcp) — accessed 2026-11-25
- [GrowthBook pricing](https://www.growthbook.io/pricing) — accessed 2026-11-25
- [Get started with GrowthBook](https://www.growthbook.io/get-started) — accessed 2026-11-25
