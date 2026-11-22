---
id: fly-free-overage-and-mcp-grant
title: Fly bills the whole month after $5, or MCP refuses a write
kind: knowledge
tags: [fly, mcp, hosting, billing]
status: active
updated: 2026-11-22
when_to_use: Fly usage crossed the free allowance, a stopped Machine still costs money, or MCP refused a write
---

## Summary

Fly.io (`fly-io`) Free usage above $5 moves the personal organization to Pay As You Go and bills that whole month from the first cent. Stopped Machines and detached volumes still cost money. Fly MCP will not invent a missing scope, and a retried `create_machine` can start a second billable Machine.

## Notes

- **Allowance cliff.** The no-card credit is $1 for 7 days. After a card, $5 a month covers the personal org only. One Developer Managed Postgres cluster is $4 of that $5 and pauses after 15 minutes without a client. When usage passes $5, Fly lifts Free limits and bills the entire month at standard rates. Upgrading yourself does the same. A second organization is Pay As You Go from the start. `get_credit_balance` reports purchased credit only; trial grants are absent, and the field is null when a parent org pays the bill.
- **Idle is not free.** A stopped or suspended Machine bills $0.15 per GB-month of rootfs. A volume bills its provisioned size at $0.15 per GB-month even while detached, and it cannot be shrunk. Region multipliers apply to CPU and RAM (São Paulo is 1.615 times Ashburn) and not to volumes. A Sprite that is asleep still accrues cold storage at $0.02 per GB-month. The getting-started page still says new accounts start on Pay As You Go; the Free plan page contradicts that. Read the Free plan page before telling someone the first month is waived.
- **Grant and retries.** OAuth consent is the ACL. New tools stay unavailable until the user reconnects. `create_machine` and `create_volume` are billable. If the call times out, check whether the resource exists before calling again. `delete_app` is permanent. `exec_machine_command` and secret writes need their own scopes. Secret values never come back, and deleting a missing secret name can still succeed.
- **Postgres reads.** `query_postgres_database` runs as `pg_read_all_data` with a 5-second timeout. More than 1,000 rows is an error, so add a limit. Integers above 2^53 need a cast to text. Cluster create and fork are asynchronous; poll until the cluster is ready. Postgres tools will not drop a cluster or reset a password.
- **Sprites.** `get_sprite_info` does not wake a Sprite. Reading files, logs, or runtime state may. `file_write` accepts up to 16 MiB. The grant can restrict names by prefix and cap how many Sprites that client may create.

## Sources

- [Fly MCP](https://fly.io/mcp/) — accessed 2026-11-22
- [Fly.io pricing](https://fly.io/pricing/) — accessed 2026-11-22
- [Fly.io resource pricing](https://docs.fly.io/about/pricing) — accessed 2026-11-22
- [Fly.io Free plan](https://docs.fly.io/about/free-plan) — accessed 2026-11-22
- [Sign up and sign in to Fly.io](https://docs.fly.io/getting-started/sign-up-sign-in) — accessed 2026-11-22
