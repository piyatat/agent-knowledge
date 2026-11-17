---
id: mem0-agent-accounts
title: Mem0 agent signup creates an unowned account on the machine
tags: [mem0, auth, memory, security]
kind: knowledge
status: active
updated: 2026-11-17
when_to_use: A coding agent offers to create a Mem0 account itself, or memories appear under a user nobody claimed
---

## Summary

Mem0's agent signup mints a Platform account and API key with no email and no owner. The key lands in `~/.mem0/config.json`. Memories stay on that shadow account until a person claims it. The same limit, hit through the API instead of the CLI, comes back as a bare `403`.

## Notes

- **What the CLI does.** `mem0 init --agent` creates an account, writes the key to `~/.mem0/config.json` (mode `0600`), and picks a default `user_id`. Later `mem0 add` and `mem0 search` use that scope when flags are omitted. The account works before anyone owns it. Each command with that key prints a reminder to pass the claim instructions to a person.
- **Claim.** `mem0 init --email <address>` sends a verification code and upgrades the same account. The API key does not change. Memories move with the account, and dashboard, billing, and team features turn on. `--code` supplies the code without a prompt.
- **Quota.** Five agent signups per day per IP. The CLI names the cap and says to wait until midnight UTC. The same rejection through the API is `403 Forbidden` with no explanation and no `Retry-After`. Until someone claims it, the account uses the free-tier quotas (`mem0`).
- **Caller name.** `--agent-caller` is an attribution label for Mem0's own metrics. `mem0 identify` fills it in later and keeps the key.
- **Caveats.** A second machine gets a second account. A shared shell or a copied `~/.mem0` shares the key. Leave that file out of git. Text written through the account is durable memory (`agent-memory-poisoning`).

## Sources

- [Sign up as an agent](https://docs.mem0.ai/platform/agent-signup) — accessed 2026-11-17
- [Pricing FAQ](https://docs.mem0.ai/platform/pricing) — accessed 2026-11-17
