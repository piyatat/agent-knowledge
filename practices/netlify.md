---
id: netlify
title: Netlify — credit-metered hosting and an OAuth MCP server
kind: service
tags: [netlify, hosting, mcp, deploy]
status: active
updated: 2026-11-24
when_to_use: Deploying a site or serverless app on Netlify, or letting an agent publish it through Netlify MCP
---

## Summary

**Netlify** hosts sites, functions, blob storage, and a database, and meters them in credits. Accounts created on or after 2025-09-04 use the credit-based plans. Free is $0 with 300 credits and a hard stop. Personal is $9 a month with 1,000 credits. Pro starts at $20 a month with 3,000 credits, shared environment variables, and unlimited members. The remote MCP server is `https://mcp.netlify.com/mcp` and acts as a Netlify user. There is no separate agent identity. Use Netlify for a site with preview deploys and a credit cap. Use Railway (`railway`) or Render (`render`) for a long-running service, or Fly.io (`fly-io`) for Machines.

## Notes

- **Access.** Sign up at `links.get`. The agent guide is `links.docs`. The remote MCP server uses OAuth 2.1 with PKCE and dynamic client registration. A personal access token also works as a bearer token on that server, on the REST API, and on the local MCP server. The token is the user who created it. On a SAML SSO team, a personal access token is refused unless access to that team was granted when the token was created. Resetting the Netlify password invalidates every personal access token and OAuth token created before the reset. Revoke grants under User settings, Applications. The previous MCP host `https://netlify-mcp.netlify.app/mcp` still answers. New connections should use `https://mcp.netlify.com/mcp`.
- **Credits (pricing page and credit docs, 2026-11-24).** Free is 300 credits, no auto-recharge, $0. Personal is $9 a month, 1,000 credits, and an optional pack of 500 credits for $5. Pro starts at $20 a month for 3,000 credits, with an optional pack of 1,500 credits for $10, and higher monthly allotments up to 20,000. Unused monthly credits roll over only on Pro allotments of 5,000 or more, and those credits last one extra cycle. Auto-recharge stays off until a team owner turns it on, and it applies to the whole team. A production deploy costs 15 credits. Deploy previews, branch deploys, and failed deploys do not. Web bandwidth is 20 credits per GB, web requests are 2 credits per 10,000, and compute for functions, preview servers, agent runners, and the database is 10 credits per GB-hour. Agent Runners and AI Gateway model spend is 180 credits per dollar of model cost. Forms are not metered. Moving a legacy plan onto credits is one-way.
- **Pause.** The credit balance is shared by every project on the team. At zero, every project pauses. Visitors see “Site not available”, and the projects stop taking requests, form submissions, and deploys, including previews. Free cannot buy credits. Wait for the next cycle or upgrade. A paid team resumes by buying a pack, turning on auto-recharge, or upgrading. An agent run that hits zero keeps the work already done and cancels the run. Continue it after the team has credits again.
- **Other limits.** The REST API allows about 500 requests a minute for most calls. Deploys are limited to 3 a minute and 100 a day. Free and Personal include one concurrent build for the whole team. Shared environment variables, private organization repositories, and password protection are Pro features. Each of those plans lists a 500-project cap.
- **Caveats.** A run of production publishes, or a modest amount of bandwidth, spends the Free allotment and pauses the whole team. A token minted before a password reset is dead. Details: `netlify-credit-pause-and-token`.

## Sources

- [Authenticating AI agents with Netlify](https://www.netlify.com/auth.md) — accessed 2026-11-24
- [Agent setup overview](https://docs.netlify.com/build/build-with-ai/agent-setup-guides/agent-setup-overview/) — accessed 2026-11-24
- [Credit-based pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/) — accessed 2026-11-24
- [How credits work](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/) — accessed 2026-11-24
- [Resume paused projects](https://docs.netlify.com/manage/accounts-and-billing/billing/resume-paused-projects/) — accessed 2026-11-24
- [Billing FAQ for credit-based plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/) — accessed 2026-11-24
- [Agent Runners overview](https://docs.netlify.com/build/build-with-ai/agent-runners/overview/) — accessed 2026-11-24
- [Netlify pricing](https://www.netlify.com/pricing/) — accessed 2026-11-24
- [Netlify](https://www.netlify.com/) — accessed 2026-11-24
