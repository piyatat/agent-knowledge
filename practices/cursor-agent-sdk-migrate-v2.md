---
id: cursor-agent-sdk-migrate-v2
title: Agent SDK migrate — early-alpha architecture v1 to v2
tags: [cursor, sdk, hosting, migration]
status: active
updated: 2026-11-13
when_to_use: An Agent SDK project still depends on @cursor/july, architecture v1, bot/storage.ts, or deployment get does not print architecture v2
---

## Summary

**Architecture v2** is the current hosted Agent SDK runtime: a **short-lived** process per event, with sessions / `ctx.host.kv` / `ctx.host.files` in Cursor-managed storage. **v1** (early alpha) kept one long-lived process. `agent-sdk migrate` opens a **pull request** with source changes; it never deploys or edits secrets. Projects that never deployed on v1 already run on v2.

## Notes

- Need it if any of: `package.json` depends on `@cursor/july`; CI runs the early-alpha CLI; `architecture: "v1"` or `runtime: "grokbot"`; `bot/storage.ts` or `agent/storage.ts`; SCM credential is a **literal**; `/v1` continuation selector; anonymous reminder `run`/`until`; peer URL from a `*_MCP_URL` secret; `agent-sdk deployment get <slug>` does **not** print `architecture: v2`. Swap the package with `npm uninstall @cursor/july && npm install @grok/agent-sdk@latest`. An `agent/` folder still loads (`cursor-agent-sdk`).
- `agent-sdk migrate` checks **source** only (not scripts, CI, or the hosted copy) and prints `Nothing to migrate.` when clean. Commit and **push** first — it starts a Cloud Agent on that ref. Pass `--repo` / `--ref` / `--path` for a source outside the checkout. Exit `1` if the run ends without a PR. `deploy` **refuses** `architecture: "v1"` and points here.
- Review the PR: `@grok/agent-sdk` + `agent-sdk`; no `architecture: "v1"`; durable state in `ctx.host.kv` / `ctx.host.files`; secrets read **inside** the handler; hosted routes return **202**; SCM creds as `{ secretName: "NAME" }` (`validate` warns while v1 is set, **fails** once you remove it); peer URL secrets → `defineConnection({ agent: "<slug>" })`.
- Cutover: **same slug** copies v1 secrets then **replaces** v1 (cannot undo; deletes v1 sessions, KV, files, eval runs). **New slug** keeps v1 serving while you test — required if you use Slack, webhooks, or hosted state; point the trial at a **test** repo so both don’t act on the same events.
- After merge: `agent-sdk deploy --dir . --slug <existing-or-new-slug>`. Reuse every `--cursor-events-repo`; move `--allow-domain` into `hosting.egressDomains`. Deploy **each** agent folder separately. Slack: `agent-sdk slack create --env prod` then uninstall the old app. Peers: same team, then `secret delete` listed URL secrets. New slug: `secret set` each name (no redeploy). Verify with `session create` (`cursor-agent-sdk-deploy`).

## Sources

- [Migrate an early-alpha project to architecture v2](https://cursor.com/docs/agent-sdk/guides/migrate) — accessed 2026-11-13
- [Agent SDK CLI](https://cursor.com/docs/agent-sdk/reference/cli) — accessed 2026-11-13
- [Deploy an Agent SDK project](https://cursor.com/docs/agent-sdk/deployment) — accessed 2026-11-13
- [Fix common agent problems](https://cursor.com/docs/agent-sdk/troubleshooting) — accessed 2026-11-13
