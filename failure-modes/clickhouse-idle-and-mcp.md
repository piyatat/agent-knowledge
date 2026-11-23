---
id: clickhouse-idle-and-mcp
title: A ClickHouse service wakes while idle, or MCP cannot change the data
kind: knowledge
tags: [clickhouse, billing, mcp, analytics]
status: active
updated: 2026-11-23
when_to_use: A ClickHouse Cloud bill grew while nobody queried, a paused query timed out, or an agent could not insert or alter through MCP
---

## Summary

ClickHouse Cloud (`clickhouse-cloud`) stops compute billing while a service is paused, and keeps billing storage and backups. The default IP allow list is the whole internet, and scanners can move an idle service back to active. The managed MCP server is read-only even after you enable it, and the Postgres query tools refuse API keys.

## Notes

- **Idle is not free.** Compute is not billed while the service is paused. Storage and backups are. The default backup is every 24 hours, kept one day, at the same per-TB rate as table data. A new service allows connections from anywhere. ClickHouse warns that crawlers probing public IPs can wake that service and create compute charges. Restrict the allow list. A client that connects to a paused service can time out; it has to wait for the wake and retry. Automatic idling is a poor fit for a path users hit constantly. Turn it off if that delay is unacceptable. Gen 2 compute, still in private preview, does not support automatic idling.
- **It may refuse to pause.** Adaptive idling overrides the timeout you set. The service stays up while merges are running, and while the number of parts is above 10,000, so background work can finish. If the server took 15–30 minutes to start, the idle timeout becomes 15 minutes; 30–60 minutes of startup becomes a 30-minute timeout; more than 60 minutes becomes one hour. Those figures are not how long a client waits on a service that is already paused. While paused, refreshes of refreshable materialized views, S3Queue consumption, and new merges stop. Merges already running finish first. Leave idling off if those have to keep moving.
- **MCP cannot write.** Enable the remote server on each service or the endpoint does not accept connections. Enabling or disabling it on a ClickHouse service needs `control-plane:service:manage-mcp`. Every tool is annotated read-only: no inserts, no schema changes, no service changes. `run_select_query` still needs a `serviceId`. Postgres `run_postgres_select_query`, slow-query tools, and metrics require an OAuth sign-in. A Cloud API key cannot call them. OAuth sees only the organizations and services that person can open. An API key is limited to the roles and expiry on that key. The Basic header is `base64(key_id:key_secret)`. That encoding is not a secret store; do not commit it. Organization cost queries cover at most 31 days.
- **Two MCP servers.** `https://mcp.clickhouse.cloud/mcp` is the managed cloud server. The GitHub `mcp-clickhouse` server is a local process with `run_select_query`, `list_databases`, and `list_tables`, aimed at any ClickHouse including one you host. Pointing an agent at the local server does not enable the cloud endpoint, and the cloud endpoint does not manage a self-hosted node.
- **Size floor.** Basic cannot change its memory allocation. A single replica is limited to 8–12 GiB; a larger size needs two or more replicas. The $300 trial ends at 30 days or when the credits are gone, and usage after that is pay-as-you-go with no monthly minimum. Idle wake-ups and stored bytes still count.

## Sources

- [Automatic idling](https://clickhouse.com/docs/products/cloud/features/autoscaling/idling) — accessed 2026-11-23
- [Remote MCP in Cloud](https://clickhouse.com/docs/products/cloud/features/ai-ml/remote-mcp) — accessed 2026-11-23
- [ClickHouse Cloud pricing](https://clickhouse.com/pricing) — accessed 2026-11-23
- [ClickHouse Cloud pricing (markdown)](https://clickhouse.com/pricing.md) — accessed 2026-11-23
- [ClickHouse Cloud billing overview](https://clickhouse.com/docs/products/cloud/reference/billing/billing-overview) — accessed 2026-11-23
