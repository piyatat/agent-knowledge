---
id: knock
title: Knock — cross-channel notifications and an OAuth MCP server
kind: service
tags: [knock, notifications, messaging, mcp]
status: active
updated: 2026-11-24
when_to_use: Sending one product workflow across email, in-app, push, SMS, and chat, or letting an agent edit those workflows
---

## Summary

**Knock** is hosted notification infrastructure. One workflow can deliver email, in-app feed or toast, push, SMS, Slack, and other channels, and it stores the recipient profiles. A remote MCP server at `https://mcp.knock.app/mcp` signs in with OAuth, or with a service token for a client that has no browser. Free is $0 with no card. Use Knock when several channels share one workflow and one preference model. Use Resend (`resend`) or Loops (`loops`) when the job is email only. Knock still leaves delivery to your own downstream provider, and that provider bills you separately.

## Notes

- **Access.** Create an account at `links.get` (the site sends that URL to the dashboard login, which also creates the account). Environment API keys under Platform → API keys send messages into one environment. A service token (`knock_st_…`) from Settings → Service tokens calls the Management API, the CLI, and the MCP server. Only an owner or admin can mint one. It inherits that person’s full Management API access, is shown once, and does not authorize the message-sending API.
- **MCP.** Interactive clients use OAuth and a consent screen. Read resources, Manage resources, Knock agent, Debug, and Documentation start on. Manage data (users, tenants, objects) starts off. A service token skips consent and turns every capability on, including the deprecated ones. Manage resources can delete resources the Management API can delete. Workflows are not exposed as individual trigger tools unless you opt in. Headless use passes the service token as `Authorization: Bearer`.
- **Plans (pricing page and plans doc, 2026-11-24).** Free includes 10,000 messages, 500 guide recipients, and 500 agent credits a month. Starter is $250/month for 50,000 messages, then $0.005 each, plus 2,500 guide recipients ($0.05 each after that) and 2,000 agent credits ($0.01 each after that). The pricing cards define extra agent credits at $0.01. Enterprise is custom and adds per-tenant branding and preferences, per-tenant guides, translations, batch renders above 10 items, custom roles, SAML, directory sync, warehouse sync, and a HIPAA BAA. Going over Free does not hard-stop delivery; Knock asks you to add a billing method for the next month. The cycle anchor is the day you upgrade, and overage is billed in arrears.
- **What counts.** A message is one successful delivery to one user on one channel, so email plus in-app is two messages. Skipped steps, bounces, and guide views are not messages. Guide recipients are a separate meter: a user who sees at least one guide that month. Usage from every environment shares the same plan. Sandboxed channel sends are previewed and are not billed. A channel condition that lets a message through is billed.
- **Environments.** A new account has production only. Enabling environments adds development, copies the default email layout and nothing else, and cannot be turned off. Content is edited in the environment where it was created and promoted upward. Users, tenants, messages, and broadcasts stay per environment.
- **Caveats.** A service token can change production, and in-app steps cannot be sandboxed. Details: `knock-sandbox-and-service-token`.

## Sources

- [Knock MCP server](https://docs.knock.app/ai/mcp-server) — accessed 2026-11-24
- [Service tokens](https://docs.knock.app/developer-tools/service-tokens) — accessed 2026-11-24
- [Knock plans and usage](https://docs.knock.app/manage-your-account/knock-plans) — accessed 2026-11-24
- [Environments](https://docs.knock.app/version-control/environments) — accessed 2026-11-24
- [Knock pricing](https://knock.app/pricing) — accessed 2026-11-24
- [Knock sign-up](https://dashboard.knock.app/signup) — accessed 2026-11-24
- [Knock](https://knock.app/) — accessed 2026-11-24
