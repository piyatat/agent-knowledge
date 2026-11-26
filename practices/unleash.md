---
id: unleash
title: Unleash — feature flags evaluated in the SDK, with an admin MCP server
kind: service
tags: [unleash, flags, experiments, mcp]
status: active
updated: 2026-11-26
when_to_use: Evaluating feature flags inside the app from a polled Unleash configuration, or letting an agent change those flags
---

## Summary

**Unleash** is a feature-flag server. Backend SDKs poll the configuration and evaluate flags in the app, so an end-user check is not an API call. Open Source is free to run yourself and is capped at one project, two environments, and 5,000 flags. Pay-as-you-go Enterprise is $75 per seat per month after a 14-day trial with no card. Cloud includes 53 million API requests a month, then $5 per million. The remote MCP server is an Enterprise feature on your own instance. Use Unleash when evaluations should stay in-process. Use GrowthBook (`growthbook`), Statsig (`statsig`), or LaunchDarkly (`launchdarkly`) when the flags already live there.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-26 that page stayed on the URL. It says 14 days, then $75 per user per month, cancel any time, no card. The pricing page uses “seat” for the same $75 and defines a seat as an Unleash user, not an end user of your app. Hosted pay-as-you-go is US or EU. Self-hosted pay-as-you-go has a five-seat minimum. Annual Enterprise is a contract (99.99% uptime, private-instance and IP-restriction add-ons). Open Source has no seat cap and does not include SSO, SCIM, granular roles, change-request approvals, or a support SLA.
- **MCP.** The remote server is `https://<your-instance>/api/admin/mcp` after an admin enables it. Enabling it allows OAuth dynamic client registration. Browser login issues a personal access token for 24 hours with that user’s permissions and only redirects to localhost, so Claude Desktop and Claude on the web cannot use it. A personal access token or a service-account token sent as `Authorization: Bearer` is the other remote option. The local server is the path on Open Source and on a plan without the remote server. It needs Node.js 24, `UNLEASH_BASE_URL` without a trailing `/api`, and `UNLEASH_PAT`. It acts as that token. The current server is outcome tools (version 2). Version 0.5 of `@unleash/mcp` is the previous tool set.
- **What an agent can change.** A release describes the end state of one environment and replaces that environment’s targets. A missing flag is created switched off until a later enable or release. Experiments are set up only; the server does not score them. Audit search covers at most 31 days, in pages of 25. The server archives flags and does not delete them. It refuses to rewrite an environment whose targets are not a gradual rollout, such as a user-id list, and tells the agent to use the UI. Approvals and token management stay in the UI.
- **Plans and meters.** Client-side monthly active users are unlimited on the paid plans, and flag evaluations are not billed. The 53 million requests are SDK synchronizations. Extra requests on cloud pay-as-you-go are billed at $5 per million. They are not a hard stop. Flag metrics are kept 90 days. Paid audit logs are kept up to two years. A change that looks applied may only be a change request. Details: `unleash-change-request-and-oss-cap`.

## Sources

- [Unleash pricing](https://www.getunleash.io/pricing) — accessed 2026-11-26
- [Unleash MCP server](https://docs.getunleash.io/integrate/mcp) — accessed 2026-11-26
- [Unleash quickstart](https://docs.getunleash.io/get-started/quickstart) — accessed 2026-11-26
- [Sign up for Unleash hosted](https://auth.app.getunleash.io/sign-up) — accessed 2026-11-26
- [Unleash](https://www.getunleash.io/) — accessed 2026-11-26
