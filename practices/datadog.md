---
id: datadog
title: Datadog — observability and a site-specific MCP server
kind: service
tags: [datadog, observability, mcp, logs]
status: active
updated: 2026-11-24
when_to_use: Querying Datadog logs, traces, or monitors from an agent, or changing monitors through MCP
---

## Summary

**Datadog** is hosted observability for metrics, traces, logs, monitors, and related products. Its remote MCP server answers tool calls with the signed-in user’s own permissions, so an agent sees the same data that user sees in the UI. The server does not send that data to a third-party model; the coding client does, under that client’s agreement. GovCloud sites (`ddog-gov.com` and `us2.ddog-gov.com`) are unsupported. A 14-day trial is the public entry. Use Axiom (`axiom`) for usage-priced event storage, including an organization an agent provisions itself. Use Honeycomb (`honeycomb`) when each span should count toward a monthly event cap. Use Grafana Cloud (`grafana-cloud`) when the data already lives in Prometheus, Loki, and Tempo. Use Sentry (`sentry`) or PostHog (`posthog`) when the source of truth is an error tracker or product analytics, not the Datadog org.

## Notes

- **Access.** Create an org at `links.get`. OAuth is the usual client login. Each Datadog site has its own MCP host: add `mcp.` in front of the site and append `/v1/mcp`. US1 is `https://mcp.datadoghq.com/v1/mcp`, US3 `https://mcp.us3.datadoghq.com/v1/mcp`, US5 `https://mcp.us5.datadoghq.com/v1/mcp`, EU1 `https://mcp.datadoghq.eu/v1/mcp`, AP1 `https://mcp.ap1.datadoghq.com/v1/mcp`, AP2 `https://mcp.ap2.datadoghq.com/v1/mcp`, and UK1 `https://mcp.uk1.datadoghq.com/v1/mcp`. An API key plus application key, or a personal or service access token, is an alternate login and skips OAuth application scopes. The setup guide is `links.docs`.
- **Permissions.** Organization MCP Access defaults to on. Organization MCP Write Access defaults to off, which hides write tools for everyone. The Read Only role has MCP Read. Standard and Admin have MCP Read and MCP Write. A call also needs the ordinary permission for that resource, such as Monitors Write. Data Access Control and log restriction queries still apply. Admins can strip scopes from one AI client’s OAuth app; that blocks the action in that client even when the user can do it in the UI. Removing a scope revokes existing authorizations that included it.
- **Tools.** With no `toolsets` parameter, only `core` tools are registered. `toolsets=all` enables generally available toolsets except `chat` and anything in Preview. Preview sets, requested by name, include `gpu-monitoring`, `live-debugger`, and `remote-actions`. `remote-actions` can read files, list directories, and run read-only shell commands on instrumented hosts. Most tools query Datadog directly. A few, such as semantic search or turning natural language into a query, use models Datadog hosts. Fair use is 50 tool calls per 10 seconds, with no monthly tool-call cap stated on the docs page.
- **Plans.** The marketing trial is 14 days. This note does not restate SKU prices; the public pricing pages are the source for what a given product costs after the trial.
- **Telemetry.** Datadog records MCP usage, including errors and user identifiers, and context such as prompts that led to a tool call, for 120 days. Every tool call is also an Audit Trail event named MCP Server. The product is HIPAA-eligible; the connected AI client still has to meet the org’s compliance bar.
- **Caveats.** The wrong site host, write access left off, and a key that bypasses OAuth scopes are the usual misses. Details: `datadog-mcp-write-and-site`. The local Code Security MCP is a separate scanner for SAST, SCA, IaC, secrets, and SBOM. Point agents at that page only when the task is a local code scan.

## Sources

- [Datadog MCP Server](https://docs.datadoghq.com/mcp_server/) — accessed 2026-11-22
- [Set up the Datadog MCP Server](https://docs.datadoghq.com/mcp_server/setup/) — accessed 2026-11-22
- [Access control for MCP](https://docs.datadoghq.com/account_management/rbac/mcp_access/) — accessed 2026-11-22
- [Datadog free trial](https://www.datadoghq.com/free-datadog-trial/) — accessed 2026-11-22
- [Datadog sign-up](https://app.datadoghq.com/signup) — accessed 2026-11-22
