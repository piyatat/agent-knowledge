---
id: github-copilot-hooks
title: GitHub Copilot hooks — CLI and cloud-agent lifecycle scripts
tags: [github, hooks, permissions, safety]
status: active
updated: 2026-09-10
when_to_use: Authoring .github/hooks JSON or ~/.copilot/hooks for Copilot CLI / cloud agent, or contrasting with Claude/Cursor/Codex hooks
---

## Summary

Copilot **hooks** run shell (or CLI `exec`) commands at session/tool lifecycle events. Same JSON `version: 1` shape on **Copilot CLI** (local) and **cloud agent** (ephemeral Linux sandbox), but discovery and the event set differ. Not Claude `settings.json` hooks (`claude-code-hooks`), not Cursor `hooks.json` (`cursor-hooks-json`), not Codex `hooks.json` (`openai-codex-hooks`). Must-never policy belongs here, not in instructions.

## Notes

- CLI load order (all matching entries **run**): machine policy → user → project → plugins. Policy: Linux/macOS `/etc/github-copilot/policy.d/*.json` (root-owned, not group/world-writable) or Windows `C:\ProgramData\GitHub\Copilot\policy.d\` + `HKLM\Software\Policies\GitHub\Copilot`; cannot be turned off with `disableAllHooks` and ignore folder-trust. Project: `.github/hooks/*.json`. User: `~/.copilot/hooks/` (`$COPILOT_HOME/hooks/`). Also inline `hooks` in `.github/copilot/settings.json` / `settings.local.json`, `~/.copilot/settings.json`, and cross-tool `.claude/settings.json`. Plugins: `hooks.json` or `hooks/hooks.json`.
- Cloud agent: only `.github/hooks/*.json` in the clone. Linux; honor `bash` (or fallback `command`); ignore `powershell`. cwd `/workspace` (or `/root`). Filesystem is ephemeral — persist via an `http` hook if you need logs. Firewall defaults to GitHub/Copilot hosts. Tokens: `GITHUB_COPILOT_API_TOKEN`, `GITHUB_COPILOT_GIT_TOKEN`; **no** `GITHUB_TOKEN`. Non-interactive; tools pre-granted.
- Events (CLI has the full set): `sessionStart`, `sessionEnd`, `userPromptSubmitted`, `preToolUse` (can allow/deny), `postToolUse`, `agentStop`, `subagentStop`, `errorOccurred`. Command fields: `type: "command"`, `bash` / `powershell` / `command`, optional `cwd`, `env`, `timeoutSec` (default **30**). CLI-only: `exec` + `args` (no shell). Directory files drop a bad item; inline `settings.json` hooks are all-or-nothing. Hooks are **synchronous** and block the agent — keep them short.
- Deny: stdout JSON `permissionDecision: "deny"` (or `"allow"`). Progress lines `{"type":"progress","message":"…"}` are stripped before parse. Sanitize hook stdin; do not log secrets. Treat hook scripts as privileged code (`malicious-skills-supply-chain`).

## Sources

- [About hooks for GitHub Copilot](https://docs.github.com/en/copilot/concepts/agents/hooks) — accessed 2026-09-10
- [GitHub Copilot hooks reference](https://docs.github.com/en/copilot/reference/hooks-reference) — accessed 2026-09-10
- [Using hooks with Copilot CLI](https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks) — accessed 2026-09-10
