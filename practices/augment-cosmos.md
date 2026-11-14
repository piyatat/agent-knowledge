---
id: augment-cosmos
title: Augment Cosmos — hosted agents, experts, and triggers
kind: service
tags: [augment, hosting, automations, sandbox]
status: active
updated: 2026-11-14
when_to_use: Waking an Augment agent on a PR, ticket, Slack message, or schedule in a cloud or self-hosted sandbox
---

## Summary

**Cosmos** is Augment’s hosted agent runtime. Experts run in a sandbox (Augment cloud or a self-hosted daemon), read repos, and wake from GitHub, Slack, Linear, PagerDuty, cron, or a webhook. You drive sessions from the web app, phone, or Slack. The local terminal agent is **Auggie** (`augment-auggie`). Not Cursor Automations (`cursor-automations`) and not the Copilot cloud coding agent (`github-copilot-coding-agent`).

## Notes

- **Access:** an Augment account. Business plan docs include Cosmos and Auggie, up to **50** seats with no per-seat charge, **$100/month** and **$100** of included usage, then pay-as-you-go. Cosmos cloud compute is **$0.19/hour**, billed in **5-minute** increments rounded up (7 minutes bills as 10). There is no service fee on compute. The **40%** service fee applies to LLM tokens, billed at the provider’s public list price. Enterprise covers more seats and custom setup.
- **Building blocks:** an **Expert** is the template (instructions, model, environment, capabilities, triggers, shared or private). An **Environment** is the VM image: base image, repos, env vars. A **Capability** bundles tools or MCP servers (CLI, GitHub, Linear, Slack, web). A **Trigger** starts or wakes an Expert. **Skills** follow the Agent Skills spec and live in Files. **Files** are a virtual filesystem; shared files are org-visible, private files stay with the user. Sessions can be private or shared.
- **Where it runs:** a **cloud environment** starts each session from a fresh snapshot, scales for the workload, and allows only configured egress. Ingress (opening the sandbox in a browser) is not enabled. A **self-hosted daemon** (`auggie daemon` on a laptop, VM, or devbox) keeps disk and network of that host, adds no compute charge, and concurrency is capped by how many daemons you connect. Use a daemon when the job needs a VPC, local hardware, or data that cannot leave your network.
- **Auth and policy:** same user Augment login as Auggie. `toolPermissions` from managed, repo, and user settings apply to Cosmos cloud agents at startup. Commit `.augment/settings.json` when a rule (for example blocking `git merge`) must hold for every cloud agent on that repo. The IDE extension does not enforce those rules.
- **Alternatives:** Cursor Cloud Agents when the team already lives in Cursor (`cursor-cloud-always-on`). Codex cloud environments when the thread should stay in Codex (`openai-codex-cloud-environments`). Auggie on the laptop when you need a local shell and no trigger.
- **Caveats:** a cloud session does not keep the previous disk. A daemon has the host’s network and secrets — do not point an untrusted trigger at one (`prompt-injection-agent-defense`). Environment network policy and session network access are separate settings.

## Sources

- [What is Augment Cosmos?](https://docs.augmentcode.com/cosmos/getting-started) — accessed 2026-11-14
- [Cosmos environments](https://docs.augmentcode.com/cosmos/environments/overview) — accessed 2026-11-14
- [Cloud environments](https://docs.augmentcode.com/cosmos/environments/cloud) — accessed 2026-11-14
- [Token-based pricing](https://docs.augmentcode.com/models/token-based-pricing) — accessed 2026-11-14
- [Tool permissions](https://docs.augmentcode.com/cli/permissions) — accessed 2026-11-14
- [Introduction](https://docs.augmentcode.com/introduction) — accessed 2026-11-14
