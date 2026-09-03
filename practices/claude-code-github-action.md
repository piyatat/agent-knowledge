---
id: claude-code-github-action
title: Claude Code GitHub Action — @claude in workflows
tags: [claude, github, ci, orchestration]
status: active
updated: 2026-09-03
when_to_use: Wiring anthropics/claude-code-action so @claude (or a prompt) runs Claude Code inside GitHub Actions
---

## Summary

`anthropics/claude-code-action` runs **Claude Code on a GitHub Actions runner**. Interactive mode waits for `@claude` (configurable `trigger_phrase`); automation mode runs when the workflow supplies `prompt`. This is not Cursor `@cursor` (`cursor-github-cloud-agents`), not Claude **Code Review** (no workflow file), and not Claude Code on the web. The Action is built on the Claude Agent SDK.

## Notes

- Setup: `/install-github-app` from a local `claude` session (needs `gh` auth) installs the Claude GitHub App, writes `ANTHROPIC_API_KEY` or `CLAUDE_CODE_OAUTH_TOKEN`, and opens a PR with workflow files — or install the App, add the secret, and copy `examples/claude.yml` yourself. Org rollout: one App install, one org Actions secret (API key, not a personal OAuth token), workflow per repo (or a reusable workflow).
- Auth alternatives: Claude API key, `claude setup-token` OAuth, workload identity federation (`anthropic_federation_rule_id` + org/service-account ids; needs `id-token: write`), or Bedrock / Google Agent Platform / Microsoft Foundry (`use_bedrock` / `use_vertex` / `use_foundry`). The official App’s permission set is shared with Code Review and web auto-fix; GitHub will not let you accept a subset. A custom App with Contents/Issues/PRs covers **only** this Action.
- Actor gates (both modes): issue/PR events require **write** access unless `allowed_non_write_users` + your own `github_token`; **bots** are rejected unless listed in `allowed_bots` (scheduled runs inherit the last workflow editor — list that bot if needed). Interactive results post as a comment; automation results stay in the run log unless the prompt has a posting tool.
- Inputs: `claude_args` (CLI flags, wins over settings), `settings` (JSON string or path — hooks, env, permissions), `plugin_marketplaces` / `plugins` (newline-separated). `enableAllProjectMcpServers` is forced on. Who can trigger + untrusted issue text are injection surfaces (`prompt-injection-agent-defense`).

## Sources

- [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions.md) — accessed 2026-09-03
- [claude-code-action configuration](https://github.com/anthropics/claude-code-action/blob/main/docs/configuration.md) — accessed 2026-09-03
