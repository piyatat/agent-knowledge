---
id: claude-code-self-hosted
title: Claude Code self-hosted environments — org runners for cloud sessions
tags: [claude, ops, isolation, hosting]
status: active
updated: 2026-09-18
when_to_use: Running Claude Code cloud sessions on your hosts instead of Anthropic-managed environments
---

## Summary

A **self-hosted environment** (public beta, Team/Enterprise, off by default) executes **cloud** Claude Code sessions on runners you operate. The control plane, queue, and inference stay at `api.anthropic.com`. Not Remote Control (`claude-code-remote-control`), not Cursor Team Pools (`cursor-self-hosted-agents`), and not a substitute for local CLI/IDE sessions.

## Notes

- Enable **Allow self-hosted environments** on the Cloud environments admin page (needs cloud sessions on). Create an environment, copy the one-time **environment key** (365-day expiry), start `claude self-hosted-runner --environment-secret-file … --base-dir …`. Sessions started from claude.ai/code, mobile/desktop, routines, `claude --cloud` / `--environment`, and Claude Tag can route here. **Claude Security** and **Code Review** do not yet. Repos are **GitHub** only.
- A runner locks to the first session’s **owner** (user account, or the Claude Tag agent). Size the fleet by concurrent owners. Default `--drain-grace-sec 0` exits when work finishes so an orchestrator can restart with a clean disk. `--retire-at` is for signal-less host kills. ~60s missed polls requeue the session.
- Anthropic never inbound-connects. Egress is outbound HTTPS to `api.anthropic.com` (plus git/proxy hosts). Inference **cannot** go through Bedrock / Vertex Agent Platform / Foundry / a gateway. **ZDR orgs cannot use this**. Checkout and artifacts stay on your machines; prompts/tool results still go to Anthropic. Billing is the same Claude Code usage as hosted environments.

## Sources

- [Self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments) — accessed 2026-09-18
- [Self-hosted environments quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) — accessed 2026-09-18
- [Deploy self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments-deploy) — accessed 2026-09-18
- [Self-hosted environments reference](https://code.claude.com/docs/en/self-hosted-environments-reference) — accessed 2026-09-18
