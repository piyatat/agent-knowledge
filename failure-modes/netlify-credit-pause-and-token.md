---
id: netlify-credit-pause-and-token
title: A Netlify site pauses for the whole team, or the agent token dies
kind: knowledge
tags: [netlify, hosting, billing, mcp]
status: active
updated: 2026-11-24
when_to_use: A Netlify URL says Site not available, a deploy is refused, or MCP returns 401 after a password change
---

## Summary

Netlify (`netlify`) spends one credit balance for every project on the team. When it hits zero, every project pauses, including ones the agent did not touch. Free cannot buy more credits. A personal access token or OAuth grant is the user who approved it, and a password reset invalidates the ones created earlier.

## Notes

- **Pause.** Monthly credits do not roll over, except unused credits on a Pro plan whose allotment is 5,000 or more, and those last only one extra cycle. Auto-recharge stays off until a team owner enables it, and Free has no recharge. At a zero balance, visitors get “Site not available”. Requests, form submissions, and deploys stop, including Deploy Previews and branch deploys. The billing FAQ lists notices at 50%, 75%, 90%, and 100% of the monthly allotment. Free resumes only at the next cycle or by upgrading. A paid team resumes by upgrading, buying a credit pack, or turning on auto-recharge (500 credits for $5 on Personal, 1,500 for $10 on Pro). An Agent Runner that runs out mid-task keeps the progress it already made, cancels the run, and can be continued after credits return.
- **What spends credits.** A production deploy is 15 credits. Preview and failed deploys are not charged as deploys, but their bandwidth and function time still are. Bandwidth is 20 credits per GB, so 15 GB of transfer spends a Free month by itself. Requests are 2 credits per 10,000. Compute is 10 credits per GB-hour. Model use through Agent Runners or AI Gateway is 180 credits per dollar. One busy project can pause the others because the balance is the team’s. Free allows one concurrent build for the entire team, so a second build waits. The REST deploy cap is 3 a minute and 100 a day, separate from credits. A missing or revoked token on the REST API is HTTP 401 with “Access Denied”. Do not retry that same token. An MCP 401 points at the protected-resource metadata and, for a bad token, includes `invalid_token`.
- **Identity.** There is no agent-only credential. OAuth and personal access tokens act as the approving user. On a SAML SSO team, a personal access token cannot see that team unless the token was created with access allowed. Resetting the password permanently invalidates every personal access token and OAuth token from before the reset. Shared environment variables are a Pro feature, so setting team-wide env vars on Free or Personal is outside that plan. Moving an older account from a legacy plan onto credits cannot be undone.

## Sources

- [How credits work](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/) — accessed 2026-11-24
- [Resume paused projects](https://docs.netlify.com/manage/accounts-and-billing/billing/resume-paused-projects/) — accessed 2026-11-24
- [Billing FAQ for credit-based plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/) — accessed 2026-11-24
- [Credit-based pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/) — accessed 2026-11-24
- [Agent Runners overview](https://docs.netlify.com/build/build-with-ai/agent-runners/overview/) — accessed 2026-11-24
- [Authenticating AI agents with Netlify](https://www.netlify.com/auth.md) — accessed 2026-11-24
- [Netlify pricing](https://www.netlify.com/pricing/) — accessed 2026-11-24
