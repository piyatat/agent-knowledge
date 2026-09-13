---
id: claude-code-auto-mode
title: Claude Code auto mode — classifier after deny/ask
tags: [claude, permissions, safety, governance]
status: active
updated: 2026-09-13
when_to_use: Configuring autoMode.environment / classifier rules, or debugging an auto-mode denial
---

## Summary

**Auto mode** skips routine permission prompts by sending tool calls through a **classifier** that blocks irreversible, destructive, or out-of-environment actions. `permissions.deny` / `permissions.ask` still run **first**. It is a permission **mode**, not a kernel sandbox (`claude-code-sandboxing`) and not Bypass. Configure `autoMode` only in user, managed, or `--settings` JSON — **not** project `.claude/settings.json`.

## Notes

- Available on every provider (API, Bedrock, Agent Platform, Foundry, Claude apps gateway). v2.1.158–2.1.206 needed `CLAUDE_CODE_ENABLE_AUTO_MODE=1` on non-Anthropic hosts; v2.1.207 dropped that. Team/Enterprise can disable the mode from managed settings (`claude-code-permissions`).
- Default trust is the working directory plus the current repo’s remotes. Pushes to any branch of that repo (including default) are allowed; names like `production` / `release` / `gh-pages` are judged as deploys. Force-push, secrets in the commit, or CI that would leak secrets stay blocked. Human checkpoint: `permissions.ask` for `Bash(git push *)` / `Bash(gh pr create *)` — the classifier cannot auto-approve a matching ask.
- `autoMode.environment` is prose, not regex. Include `"$defaults"` or you **replace** that list. Trust slots (repos, orgs, buckets, domains, services, package registry) default empty except the working repo. Sensitivity slots default to heuristics (`prod` in a hostname). Host containment (v2.1.257+) blocks cloud-metadata credential fetches until you name the identity. Classifier also reads loaded `CLAUDE.md`.
- Extra lists: `hard_deny` (unconditional), `soft_deny` (user intent / `allow` can clear), `allow` (soft exceptions). Omitting `"$defaults"` drops built-in rules for that section (including force-push / `curl | bash` / exfil). `classifyAllShell: true` (v2.1.193+) sends every Bash/PowerShell command through the classifier.
- Inspect: `claude auto-mode defaults|config|critique|reset`. `/auto-mode-setup` (Pro/Max/Team, v2.1.228+) drafts environment from the project — not on the web. `/permissions` → Auto mode tab (v2.1.246+) edits user rules. Recently denied → `r` retries. Conversation “don’t push” is lost on compaction; use ask/deny for a durable gate.

## Sources

- [Configure auto mode](https://code.claude.com/docs/en/auto-mode-config) — accessed 2026-09-13
- [Configure permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-09-13
- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-13
