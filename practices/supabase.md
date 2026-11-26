---
id: supabase
title: Supabase — hosted Postgres, auth, and an MCP server
kind: service
tags: [supabase, postgres, auth, mcp]
status: active
updated: 2026-11-26
when_to_use: Hosting an app’s Postgres with Auth and Storage, or letting an agent query a Supabase project
---

## Summary

**Supabase** is hosted Postgres plus Auth, Storage, Realtime, and Edge Functions. Unused products are optional. A remote MCP server at `https://mcp.supabase.com/mcp` lets an agent list tables, run SQL, apply migrations, and manage projects after OAuth. Use Supabase when the app wants that bundle. Use Neon (`neon`) when the need is scale-to-zero Postgres without the rest. Use Clerk (`clerk`) when sign-in should stay a separate product; Clerk can be a Supabase third-party auth provider. Use Firebase (`firebase`) when the app should sit on Firestore and Firebase Auth instead of Postgres.

## Notes

- **Access.** Create an organization at `links.get`. Interactive MCP uses OAuth and dynamic client registration, so a personal access token is not required. A CI job that cannot open a browser can send a project-scoped personal access token as a bearer token. A client that requires its own OAuth app must be granted every scope today; finer MCP scopes are not available yet. The local CLI server is a different endpoint (`http://localhost:54321/mcp`) and is not this hosted service.
- **What an agent can do.** Database tools include `list_tables`, `execute_sql`, and `apply_migration`. Debugging tools query logs and advisors. Account tools can create and pause projects unless the URL sets `project_ref`, which hides them. Branching tools require a paid plan. The Storage group is off unless enabled. Notebooks exist only on the hosted server. `read_only=true` runs SQL as a read-only Postgres role. `features=` limits which groups are exposed. None of those limits are the default.
- **Plans (pricing page, 2026-11-21).** Free is $0: **2 active projects**, **500 MB** database, **50,000 MAU**, 5 GB egress, 1 GB file storage. A free project **pauses after one week** idle; you can keep more projects paused. Pro starts at **$25/month**, includes **$10** of compute credit (one Micro instance), 8 GB disk per project, 100,000 MAU then $0.00325, and does not pause for inactivity. A second Micro project adds its own compute. Spend caps are on by default on Pro. Team starts at **$599/month**. Database branching on Pro is **$0.01344 per branch-hour**. The platform can also be self-hosted; this entry is the hosted service.
- **Auth product.** Auth MAUs are included as above. MCP sign-ins for your own users, if you build a separate MCP server on Supabase Auth, count as those users’ MAUs, not as an extra MCP fee. Clerk’s native integration replaced the deprecated JWT template (deprecated **1 April 2025**).
- **Alternatives.** Neon (`neon`) for branchable Postgres that suspends. Clerk (`clerk`) when auth is the product and Postgres is elsewhere.
- **Caveats.** SQL results can contain prompt injection. Destructive-SQL prompts are a guardrail, not a guarantee. Details: `supabase-mcp-sql-and-pause`.

## Sources

- [Supabase MCP server](https://supabase.com/docs/guides/ai-tools/mcp) — accessed 2026-11-21
- [Supabase pricing](https://supabase.com/pricing) — accessed 2026-11-21
- [Supabase sign-up](https://supabase.com/dashboard/sign-up) — accessed 2026-11-21
- [Integrate Supabase with Clerk](https://clerk.com/docs/guides/development/integrations/databases/supabase) — accessed 2026-11-21
