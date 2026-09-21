---
id: claude-code-security-guidance
title: Claude security-guidance plugin — in-session edit and commit review
tags: [claude, plugins, security, hooks]
status: active
updated: 2026-09-21
when_to_use: Installing security-guidance so Claude reviews its own edits, or adding repo-specific security patterns
---

## Summary

The **security-guidance** plugin (`security-guidance@claude-plugins-official`) reviews **code Claude is writing** and tells Claude to fix it in the same session. It is automatic — no slash command. Three depths: per-edit string match (no model), end-of-turn background review, and a deeper agentic review on Claude’s `git commit` / `git push`. Companion to PR Code Review (`claude-code-code-review`) and the on-demand Claude Security plugin (`claude-code-security`). All plans.

## Notes

- Install in the terminal CLI: `/plugin install security-guidance@claude-plugins-official` (user scope → every new local session). Desktop: Plugins → Add plugin. VS Code: Manage plugins. Cloud / shared repos: `"enabledPlugins": { "security-guidance@claude-plugins-official": true }` in `.claude/settings.json` (or managed settings). User-scoped plugins do **not** follow you into cloud sessions.
- Python: 3.7+ on `PATH` for the pattern layer. End-of-turn / commit reviews prefer 3.10+ (`python3.13`…`python3.10`, then `python3` / `python` / `py -3`). First run creates `~/.claude/security/` and pip-installs the Claude Agent SDK (needs network). Older Python or failed install: first-party auth falls back to a single-shot commit review; Bedrock / Agent Platform skip model-backed layers. End-of-turn and commit reviews **skip outside a git repo**; per-edit still runs.
- Per-edit (no usage cost): `eval(`, `new Function`, `os.system`, `child_process.exec`, `pickle`, `dangerouslySetInnerHTML` / `.innerHTML`, `document.write`, `.github/workflows/` edits. One warning per pattern per file per session. Extend with `.claude/security-patterns.yaml` (or `.yml` / `.json`; YAML needs importable PyYAML). Cap 50 custom rules; catastrophic-regex skipped.
- End-of-turn: git diff of the turn (edits, Bash, subagents) → separate Claude with a security prompt. Background; up to 30 files; at most three consecutive re-prompts. Catches authz bypass, IDOR, injection, SSRF, weak crypto. Commit/push layer (Claude’s Bash only — not your shell or `!`): reads callers/sanitizers; 20/hour; silent if it duplicates the turn review. Default models Opus 4.7; override with `SECURITY_REVIEW_MODEL` / `SG_AGENTIC_MODEL`.
- Project guidance: `.claude/claude-security-guidance.md` (plus `~/.claude/` and `.local.md`). Additive, ≤ 8 KB combined — cannot suppress built-in classes. **Does not block writes or commits.** Disable layers via `ENABLE_PATTERN_RULES=0`, `ENABLE_STOP_REVIEW=0`, `ENABLE_COMMIT_REVIEW=0`, `ENABLE_CODE_SECURITY_REVIEW=0`, or `SECURITY_GUIDANCE_DISABLE=1`. Logs: `~/.claude/security/log.txt`. Built on hooks (`SessionStart`, `UserPromptSubmit`, `PostToolUse`, `Stop`) — see `claude-code-hooks`.

## Sources

- [Catch security issues as Claude writes code](https://code.claude.com/docs/en/security-guidance) — accessed 2026-09-21
- [Scan your codebase for vulnerabilities](https://code.claude.com/docs/en/claude-security) — accessed 2026-09-21
- [Discover and install plugins](https://code.claude.com/docs/en/discover-plugins) — accessed 2026-09-21
