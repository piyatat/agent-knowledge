---
id: clickhouse-cloud
title: ClickHouse Cloud — hosted columnar analytics and a read-only MCP
kind: service
tags: [clickhouse, analytics, database, mcp]
status: active
updated: 2026-11-23
when_to_use: Querying a large event or log table with SQL, or letting an agent run read-only analytics against ClickHouse Cloud
---

## Summary

**ClickHouse Cloud** is hosted columnar SQL for analytics. You pay for compute, storage, backups, egress, and ClickPipes, with no monthly minimum. A new organization gets **$300** of credits for **30 days**, then pay-as-you-go. Compute can idle to zero; storage does not. A managed MCP server at `https://mcp.clickhouse.cloud/mcp` lists schema and runs read-only queries after you enable it on that service. Use it for analytical scans. Use Neon (`neon`) or Supabase (`supabase`) for transactional Postgres.

## Notes

- **Access.** Sign up at `links.get`. Warehouse users and passwords come from the service in the console. The remote MCP server is off until you enable it on that service (Connect → MCP). Enabling it needs `control-plane:service:manage-mcp`. Interactive clients use OAuth and see the organizations that user can see. A headless client sends a Cloud API key as HTTP Basic: the key id, a colon, and the secret, then base64. Base64 is not encryption. The key’s roles and expiry are the scope. Managed Postgres read replicas inherit the parent database’s MCP switch.
- **What an agent can do.** Every remote MCP tool is marked read-only. `run_select_query`, `list_databases`, and `list_tables` need a `serviceId`. Other tools cover organizations, services, backups, ClickPipes, and organization cost (at most a 31-day range). Postgres tools (`run_postgres_select_query` and the slow-query and metrics tools) require OAuth and do not work with an API key. The open-source `mcp-clickhouse` process is a different server: local stdio, three query tools, and it can point at self-hosted ClickHouse. It is not this cloud endpoint.
- **Plans (pricing pages, 2026-11-23).** The trial ends after 30 days or when the $300 is spent, whichever comes first, and the account becomes pay-as-you-go. Basic: up to 1 TB, 8–12 GiB total memory, one availability zone, a backup every 24 hours kept for one day. Memory allocation cannot be changed on Basic, and a single replica cannot be larger than 12 GiB. Scale adds unlimited storage, configurable memory, two or more zones, and vertical autoscaling. Enterprise adds SAML, CMEK, and HIPAA and PCI. One compute unit is 8 GiB of RAM and 2 vCPU, metered per minute and priced per unit-hour. The pricing markdown lists AWS us-east-1 basic compute at **$0.21811** per unit-hour and storage at **$25.30** per TB-month; Scale compute there is **$0.29846**. Other regions differ. Backup storage uses the same per-TB rate. That markdown lists public internet egress on AWS us-east-1 at **$0.115/GB**; ingress is not charged. One ClickHouse Credit equals $1 of usage. A Stripe invoice shows one credit as $0.01 so Stripe can bill fractions of the $1 unit.
- **Idle.** The default pauses compute after a period with no user queries. Paused compute is not billed. Storage and backups still are. The new-service IP allow list is “anywhere”; scanners that hit a public address can wake the service. A paused connection can time out, so the client has to retry. The service will not idle while merges run or while active parts exceed 10,000. A slow start stretches the idle timeout, up to an hour if startup took more than 60 minutes. While paused, refreshable materialized views and S3Queue consumption stop. Gen 2 compute, in private preview, does not idle. Details: `clickhouse-idle-and-mcp`.
- **Alternatives.** Neon (`neon`) or Supabase (`supabase`) for row-level application data. The open-source ClickHouse server when you run the process yourself. Datadog (`datadog`) when the job is already-collected traces and metrics, not a warehouse you query.

## Sources

- [ClickHouse Cloud pricing](https://clickhouse.com/pricing) — accessed 2026-11-23
- [ClickHouse Cloud pricing (markdown)](https://clickhouse.com/pricing.md) — accessed 2026-11-23
- [ClickHouse Cloud billing overview](https://clickhouse.com/docs/products/cloud/reference/billing/billing-overview) — accessed 2026-11-23
- [Automatic idling](https://clickhouse.com/docs/products/cloud/features/autoscaling/idling) — accessed 2026-11-23
- [Remote MCP in Cloud](https://clickhouse.com/docs/products/cloud/features/ai-ml/remote-mcp) — accessed 2026-11-23
- [ClickHouse Cloud sign-up](https://console.clickhouse.cloud/signUp) — accessed 2026-11-23
- [ClickHouse](https://clickhouse.com/) — accessed 2026-11-23
