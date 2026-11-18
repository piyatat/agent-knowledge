---
id: augment-auggie
title: Auggie CLI — Augment's terminal coding agent
kind: tool
tags: [augment, cli, acp, permissions]
status: active
updated: 2026-11-18
when_to_use: Running Augment's coding agent in a terminal, CI job, or ACP editor instead of Cosmos cloud
---

## Summary

**Auggie** is Augment Code’s terminal agent (`auggie`). It indexes the repo through Augment’s context engine, loads rules and skills, and can call MCP. The 10 November 2026 changelog calls **1.2.0** the first stable 1.x release, a rewrite on the pi coding agent (`pi-coding-agent`), and says an untagged npm install now installs 1.x. The CLI overview, read on 18 November 2026, still labels the 1.x docs as a prerelease and still shows the `prerelease` dist-tag. Hosted, event-driven runs are **Cosmos** (`augment-cosmos`). The Augment IDE extension does not enforce `toolPermissions`.

## Notes

- **Install:** The install page linked from `links` is the place to get the CLI. It asks for Node.js 20+, macOS, Windows via WSL, or Linux, and zsh, bash, or fish. Log in with `auggie auth login` (add `--headless` with no browser). The changelog says a 0.x install with auto-update on moves to 1.x. To stay on 0.x, install the `v0-release` dist-tag and set `"autoUpdate": false` in `~/.augment/settings.json`, or set `AUGMENT_DISABLE_AUTO_UPDATE=1`. Sessions from 0.x stay out of `/resume` until `/import-legacy-sessions` in that project. Interactive mode auto-updates. `auggie` starts a session; `auggie --print` (`-p`) exits after one instruction (`--mode stream` or `json`). `auggie --acp` speaks Agent Client Protocol (`agent-client-protocol-acp`).
- **Auth:** tokens belong to the **user**, not the team. `auggie token print` emits session JSON for automation — pass it as `AUGMENT_SESSION_AUTH` or `--augment-session-json`. Treat that JSON as a secret. `auggie auth logout` drops the local token only; `auggie token revoke` revokes the user’s tokens.
- **Rules and MCP:** workspace `.augment/rules/` and user `~/.augment/rules/` (`.md` / `.mdc`). Also `AGENTS.md`, else `CLAUDE.md`, walking parents, plus `.augment-guidelines`. User rules are always applied. CLI rule types are `always_apply`, `agent_requested`, and `manual`; **manual rules are IDE-only and the CLI skips them**. `--rule` adds a file or directory; `--no-rules` turns discovery off. MCP lives in `~/.augment/settings.json` (`auggie mcp add`, `--project` → `.augment/settings.json`, `--local` → `.augment/settings.local.json`). `--mcp-config` overrides settings. Skills load from `.augment/skills/` and `.claude/skills/`.
- **1.2.0 breaks.** `/persona` is gone; use custom agents, rules, and `/permissions`. Shift+Tab changes reasoning effort. Tools are `read`, `edit`, `write`, `grep`, `find`, and `bash`. Hooks that still name the old tools match for now. `bash` hook payloads no longer list changed files. The agent sees the last **2000** lines or **50 KB** of bash output, plus a path to the rest. Inline completions and Gist session sharing are removed. MCP tool discovery in `/settings` is Automatic, Always on, or Always off.
- **Permissions:** `toolPermissions` in settings JSON, honored by the CLI and by Cosmos, and not by the code extension. Within one file, first match wins. Across managed (`/etc/augment/settings.json`), project, local, user, and `--permission`, the **most restrictive** match wins: `deny` > `webhook-policy` > `script-policy` > `ask-user` > `allow`. `ask-user` with no interactive UI is a deny. `permission` must be `{ "type": "deny" }` — a bare string is dropped (with a startup warning). Shell rules match the `bash` tool via `shellInputRegex`. Unmatched tools follow implicit CLI behavior, so an allow-list is not a closed sandbox unless you also deny the rest. Legacy names such as `read_file` do not match permission rules; use `read`, `edit`, `write`, `grep`, `find`, and `bash`. Hooks may still match the old names for now.
- **Pricing:** documented **Business** plan is **$100/month** with **$100** of included usage (LLM tokens at provider list price, a **40%** service fee on LLM usage only, and Cosmos compute). Up to **50** seats, no per-seat charge. After the included balance, pay-as-you-go continues at the same rates. More than 50 seats is Enterprise. The fee applies to Auggie model calls, not only Cosmos.
- **Alternatives:** `claude -p` (`claude-code-headless`), `codex exec` (`openai-codex-exec`), or Cursor `agent -p` (`cursor-cli-headless`) when you already pay for that agent. Use Cosmos when the run must wake on GitHub, Slack, Linear, or cron in a remote sandbox.
- **Caveats:** do not commit webhook URLs or session JSON. A repo `.augment/settings.json` applies to every CLI and Cosmos agent in that repo. Review rules and MCP definitions before trusting a checkout (`malicious-skills-supply-chain`).

## Sources

- [Introducing Auggie CLI](https://docs.augmentcode.com/cli/overview) — accessed 2026-11-18
- [Install Auggie CLI](https://docs.augmentcode.com/cli/setup-auggie/install-auggie-cli) — accessed 2026-11-14
- [Login and authentication](https://docs.augmentcode.com/cli/setup-auggie/authentication) — accessed 2026-11-14
- [CLI flags and options](https://docs.augmentcode.com/cli/reference) — accessed 2026-11-14
- [Rules and guidelines](https://docs.augmentcode.com/cli/rules) — accessed 2026-11-14
- [Tool permissions](https://docs.augmentcode.com/cli/permissions) — accessed 2026-11-14
- [Token-based pricing](https://docs.augmentcode.com/models/token-based-pricing) — accessed 2026-11-14
- [Auggie CLI 1.2.0 release notes](https://www.augmentcode.com/changelog/auggie-cli-1-2-0-release-notes) — accessed 2026-11-18
