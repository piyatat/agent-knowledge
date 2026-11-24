---
id: knock-sandbox-and-service-token
title: A Knock service token changes production, or a test message still counts
kind: knowledge
tags: [knock, notifications, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: A Knock agent edited the live workflow, a test send appeared on the bill, or in-app messages could not be sandboxed
---

## Summary

A Knock (`knock`) service token skips the MCP consent screen and can change every environment, including production. Sandbox mode suppresses provider delivery and the message meter, but the in-app channel has no sandbox, and any environment can spend the same monthly allowance. Enabling environments does not copy production workflows into development.

## Notes

- **Token scope.** A service token authenticates the Management API, CLI, and MCP server. It does not send messages on the environment API. The creator’s owner or admin role is the token’s role, so a headless client with that token can create, update, and delete workflows. Revoking it in Settings → Service tokens stops it immediately. The secret is shown once. OAuth can leave Manage data off and can turn Manage resources off for a read-only session. A bearer service token cannot.
- **What a test spends.** Sandbox mode on a channel renders a preview and does not hand the message to the downstream provider, and that message is not billed. The workflow test runner can sandbox one run. Sandboxing the channel itself suppresses every recipient in that environment, so keep that on a non-production environment. The in-app channel has no sandbox, because Knock delivers it itself. Channel conditions can limit a non-production email channel to your own domain, and a message that passes the condition is billed. Guide views use the guide-recipient meter, not the message meter. Free does not hard-cap messages when you pass 10,000.
- **Environments and tenants.** Development starts with the default email layout only. Production workflows stay in production until you clone or promote them. You cannot disable environments later. Tenant data and workflow triggers work on every plan. Per-tenant preferences, branding, guides, and translations are Enterprise. EU data residency is not available yet; Knock expects it by the end of 2026.
- **Provider bill.** Knock’s message price is separate from SendGrid, Postmark, Twilio, or whichever channel provider actually delivers. A successful Knock workflow can still fail at that provider.

## Sources

- [Knock MCP server](https://docs.knock.app/ai/mcp-server) — accessed 2026-11-24
- [Service tokens](https://docs.knock.app/developer-tools/service-tokens) — accessed 2026-11-24
- [Knock plans and usage](https://docs.knock.app/manage-your-account/knock-plans) — accessed 2026-11-24
- [Environments](https://docs.knock.app/version-control/environments) — accessed 2026-11-24
- [Knock pricing](https://knock.app/pricing) — accessed 2026-11-24
