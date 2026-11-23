---
id: sentry
title: Sentry — error monitoring and an OAuth MCP server
kind: service
tags: [sentry, observability, mcp, errors]
status: active
updated: 2026-11-23
when_to_use: Capturing application errors and traces, or letting an agent search Sentry issues and call Seer
---

## Summary

**Sentry** is hosted application monitoring for errors, traces, logs, replays, and cron or uptime checks. A remote MCP server at `https://mcp.sentry.dev/mcp` lets a coding agent search that data over OAuth. Scope the URL to one organization, or to one project, when the user belongs to several. Use Sentry for production errors. Use Langfuse (`langfuse`), Braintrust (`braintrust`), or Opik (`opik`) for model and tool traces. Use `cursor-sentry` or `github-copilot-sentry` when Seer should hand a fix to a coding agent.

## Notes

- **Access.** Create an organization at `links.get`. The agent guide (`links.docs`) is the client pointer; there is no signup flow inside the agent. The first MCP connection opens a browser OAuth grant. A URL with `/{organizationSlug}` or `/{organizationSlug}/{projectSlug}` hides tools the scope does not need. The local `sentry mcp` command uses an existing CLI login instead of a token in the client config. Seer skills are left out of that local server on a self-hosted host unless the operator opts in.
- **What an agent can do.** Find organizations, projects, and DSNs; search issues and events; create a project after the user agrees. Issue titles, stack traces, and comments are untrusted text. A member role can get `403` on project creation. Starting a Cursor or Copilot task from an issue is a separate integration, not a side effect of connecting MCP.
- **Plans (pricing pages, 2026-11-21).** Developer is $0: one user, MCP access, and 5,000 errors a month. That quota cannot be raised without upgrading. Team is $26/month when billed annually with the default prepaid data: unlimited users, 50,000 errors, and Seer only as an add-on. Business is $80/month on the same annual basis. New accounts get a 14-day Business trial, then Developer if they do not upgrade. Paid plans also include 5 GB of logs, 5 GB of application metrics, 5 million spans, 50 replays, one uptime monitor, and one cron monitor. Volume past the reserved amount and the pay-as-you-go budget is dropped. Downgrades apply at the end of the contract.
- **Seer.** Until **8 December 2026**, Seer on Team or Business is **$40 per active contributor per month**. An active contributor makes two or more pull requests in the month on a repository with a Seer feature on. GitHub accounts marked `[bot]` are excluded. GitLab counts every account, including Autofix. The charge is separate from the pay-as-you-go budget. On that date Seer moves to usage-based credits in a Seer Wallet with a daily spend limit. The pricing calculator was not quoting those credit prices on 2026-11-21. Subscriptions from before January 2026 stay on the older $20/month plus $25 of credits until the same date; spend past $25 draws on pay-as-you-go.
- **Alternatives.** Checkly (`checkly`) when the job is a scheduled browser or API check before a user hits the error. Phoenix (`arize-phoenix`) when traces must stay on a host you run. The Cursor and Copilot Sentry notes when the next step is a cloud coding agent.
- **Caveats.** A Developer org stops accepting errors at 5,000, and enabling Seer on many repositories bills every qualifying contributor. Details: `sentry-quota-and-seer-billing`.

## Sources

- [Sentry pricing](https://sentry.io/pricing/) — accessed 2026-11-21
- [Pricing and billing](https://docs.sentry.io/pricing/) — accessed 2026-11-21
- [Manage your error quota](https://docs.sentry.io/pricing/quotas/manage-event-stream-guide/) — accessed 2026-11-21
- [Seer](https://docs.sentry.io/product/ai-in-sentry/seer/) — accessed 2026-11-21
- [Agent guide: set up Sentry](https://docs.sentry.io/ai/agent-setup/get-started/) — accessed 2026-11-21
- [Sentry MCP](https://mcp.sentry.dev/) — accessed 2026-11-21
- [Sentry CLI mcp](https://cli.sentry.dev/commands/mcp/) — accessed 2026-11-21
- [Sentry sign-up](https://sentry.io/signup/) — accessed 2026-11-21
