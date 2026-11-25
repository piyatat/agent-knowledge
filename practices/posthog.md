---
id: posthog
title: PostHog — product analytics, flags, and a hosted MCP server
kind: service
tags: [posthog, analytics, flags, mcp]
status: active
updated: 2026-11-25
when_to_use: Querying product analytics, feature flags, or errors in PostHog, or letting an agent change them
---

## Summary

**PostHog** is a hosted product platform: analytics, session replay, feature flags, experiments, error tracking, logs, surveys, and LLM observability. A remote MCP server at `https://mcp.posthog.com/mcp` lets an agent read and write that project. Connecting and calling tools is free; the underlying queries still consume each product’s usage, and tools that run a model bill PostHog AI credits. Those AI tools appear only when the organization has AI data processing on. Use PostHog when flags, product analytics, and errors should live in one project. Use Statsig (`statsig`) when gates and experiments are the product and analytics is secondary. Use GrowthBook (`growthbook`) when flags and experiments should be seat-priced or self-hosted. Use Sentry (`sentry`) when the job is application errors and Seer. Use Langfuse (`langfuse`), Braintrust (`braintrust`), or Opik (`opik`) when the job is model and tool traces.

## Notes

- **Access.** US Cloud sign-up is `links.get`. EU Cloud sign-up is a separate host, `https://eu.posthog.com/signup`. OAuth is the path the docs recommend. A client without OAuth can send a personal API key that uses the MCP Server preset as a bearer token. Scale and Enterprise platform add-ons can use enterprise-managed authorization (ID-JAG) through an identity provider. The MCP host routes the session to the US or EU region of the account that signed in. The wizard and client pages live in the docs; this note does not repeat them.
- **What an agent can do.** Query analytics and HogQL, read and change feature flags and experiments, triage error tracking, read logs and session replay, and manage surveys, warehouse objects, and data-pipeline destinations. One connection is one account. Each agent session keeps its own active organization and project. A pin (`project_id` or `organization_id`, or the matching headers) chooses where that session starts. The login can still reach every project that grant allows. Restricting the OAuth screen to named projects, or using a project-scoped key, makes other projects return `403`. Read-only mode drops create, update, and delete tools.
- **Tool list.** The server has two modes. CLI mode exposes one `exec` tool and loads the rest on demand. Tools mode registers every tool. Claude, Claude Code, Cowork, and Codex default to CLI mode. Cursor defaults to tools mode. Override with the `mode` query or the `x-posthog-mcp-mode` header (`cli` or `tools`).
- **Plans (pricing page, 2026-11-22).** Free needs no card: unlimited members, one project, one-year event retention, and a monthly allowance that stops rather than billing. That allowance includes 1 million analytics events, 5,000 recordings, 1 million feature-flag requests, 100,000 exceptions, 100,000 AI-observability events shared with evaluations, 500 PostHog AI credits (listed as worth $5), and 10 GB of logs. The same allowance applies to PostHog Web, Slack, Desktop, and MCP. Billing is organization-wide, so extra projects do not add a second free allowance. Pay-as-you-go keeps that free allowance, then charges usage, and raises the cap to six projects and two-year event retention. Most products accept a billing limit. Logs kept past the 14-day default are $0.05 per GB for each month they are kept, and the Logs billing limit does not cap that retention charge.
- **Alternatives.** Statsig (`statsig`) or LaunchDarkly (`launchdarkly`) for gates and experiments when product analytics is not the main job. Sentry for error monitoring with a coding-agent handoff. Langfuse, Braintrust, or Opik for agent traces.
- **Caveats.** A free org drops events past the allowance, and a pin is a start location. Details: `posthog-mcp-quota-and-pin`.

## Sources

- [PostHog MCP](https://posthog.com/docs/model-context-protocol) — accessed 2026-11-22
- [PostHog MCP FAQ](https://posthog.com/docs/model-context-protocol/faq) — accessed 2026-11-22
- [PostHog pricing](https://posthog.com/pricing) — accessed 2026-11-22
- [PostHog US sign-up](https://us.posthog.com/signup) — accessed 2026-11-22
- [PostHog EU sign-up](https://eu.posthog.com/signup) — accessed 2026-11-22
