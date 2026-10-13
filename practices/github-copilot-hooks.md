---
id: github-copilot-hooks
title: GitHub Copilot hooks — CLI and cloud-agent lifecycle scripts
tags: [github, hooks, permissions, safety]
status: active
updated: 2026-10-13
when_to_use: Authoring .github/hooks JSON or ~/.copilot/hooks for Copilot CLI / cloud agent, including Autopilot and custom-agent scopes
---

## Summary

Copilot **hooks** run shell, HTTP, or (CLI) prompt commands at session/tool lifecycle events. Same JSON `version: 1` shape on **Copilot CLI** (local) and **cloud agent** (ephemeral Linux sandbox), but discovery and the event set differ. CLI **1.0.97** adds **agent-scoped declarative hooks** for custom agents. Not Claude `settings.json` hooks (`claude-code-hooks`), not Cursor `hooks.json` (`cursor-hooks-json`), not Codex `hooks.json` (`openai-codex-hooks`).

## Notes

- CLI load order (all matching entries **run**): machine policy → user → project → plugins. Policy: Linux/macOS `/etc/github-copilot/policy.d/*.json` (root-owned, not group/world-writable) or Windows `C:\ProgramData\GitHub\Copilot\policy.d\` + `HKLM\Software\Policies\GitHub\Copilot`; cannot be turned off with `disableAllHooks` and ignore folder-trust. Project: `.github/hooks/*.json`. User: `~/.copilot/hooks/` (`$COPILOT_HOME/hooks/`). Also inline `hooks` in `.github/copilot/settings.json` / `settings.local.json`, `~/.copilot/settings.json`, and cross-tool `.claude/settings.json`. Plugins: `hooks.json` or `hooks/hooks.json`.
- Cloud agent: only `.github/hooks/*.json` in the clone. Linux; honor `bash` (or fallback `command`); ignore `powershell`. cwd `/workspace` (or `/root`). Filesystem is ephemeral — persist via an `http` hook if you need logs. Firewall defaults to GitHub/Copilot hosts. Tokens: `GITHUB_COPILOT_API_TOKEN`, `GITHUB_COPILOT_GIT_TOKEN`; **no** `GITHUB_TOKEN`. Non-interactive; tools pre-granted.
- Events (CLI has the full set): `sessionStart`, `sessionEnd`, `userPromptSubmitted`, `userPromptTransformed` (rewrite model-facing text), `preToolUse` (allow/deny/modify), `permissionRequest` (short-circuit allow/deny **before** the permission service; sandbox-bypass `allow` does **not** pre-approve the escape), `postToolUse`, `postToolUseFailure`, `preCompact`, `agentStop`, `subagentStart`, `subagentStop`, `notification` (CLI-only, fire-and-forget), `errorOccurred`. Cloud: `notification` does not fire; `permissionRequest` is a no-op (use `preToolUse`; `"ask"` becomes `"deny"`). CLI **1.0.97 Autopilot** does the same for `preToolUse` `"ask"` — deny instead of a permission dialog nobody is watching (`github-copilot-autopilot`).
- `subagentStart` / `subagentStop`: matcher is a regex on **agent name**. `subagentStart` cannot block spawn; `additionalContext` is prepended to the child prompt. Built-in **`general-purpose` does not emit these events**; `explore`, `task`, `code-review`, `rubber-duck`, `research`, `security-review`, and user `.agent.md` profiles do (`github-copilot-custom-agents`).
- Command fields: `type: "command"`, `bash` / `powershell` / `command`, optional `cwd`, `env`, `timeoutSec` (default **30**; `timeout` is an alias). CLI-only: `exec` + `args` (no shell). HTTP hooks POST the payload (`https://` only, except localhost when `COPILOT_HOOK_ALLOW_LOCALHOST=1`). Prompt hooks (`type: "prompt"`) are `sessionStart` + new interactive sessions only — not resume, not `-p`. Directory files drop a bad item; inline `settings.json` hooks are all-or-nothing. Hooks are **synchronous** and block the agent — keep them short.
- Deny/allow: stdout JSON `permissionDecision` / `behavior`. Progress lines `{"type":"progress","message":"…"}` (optional `"temporary": true`) are stripped before parse. Command `preToolUse` is **fail-closed** on crash/non-zero (exit `2` denies even if stdout said allow); timeouts and HTTP errors are **fail-open**. `modifiedPrompt` from config-file `userPromptSubmitted` is ignored (SDK programmatic hooks only). Sanitize stdin; do not log secrets (`malicious-skills-supply-chain`).

## Sources

- [About hooks for GitHub Copilot](https://docs.github.com/en/copilot/concepts/agents/hooks) — accessed 2026-10-12
- [GitHub Copilot hooks reference](https://docs.github.com/en/copilot/reference/hooks-reference) — accessed 2026-10-12
- [Hooks configuration](https://docs.github.com/en/copilot/reference/hooks-configuration) — accessed 2026-10-12
- [Using hooks with Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-hooks) — accessed 2026-10-12
- [copilot-cli 1.0.97](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-13
- [Allowing GitHub Copilot CLI to work autonomously](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/autopilot) — accessed 2026-10-13
- [copilot-cli 1.0.96](https://github.com/github/copilot-cli/releases/tag/v1.0.96) — accessed 2026-10-12
