---
id: claude-code-security
title: Claude Security plugin — multi-agent scan and reviewed patches
tags: [claude, plugins, security, review]
status: active
updated: 2026-09-21
when_to_use: Running /claude-security on a repo or diff, or contrasting it with security-guidance / Code Review / Codex Security
---

## Summary

The **Claude Security** plugin (`claude-security@claude-plugins-official`) runs a **multi-agent** vulnerability scan inside a local Claude Code session: map architecture → threat model → hunt → independent verification → timestamped report. You pick findings; it drafts **reviewed patches you apply yourself**. Not in-session `security-guidance` (`claude-code-security-guidance`), not `/code-review` (`claude-code-code-review`), and not Codex Security (`openai-codex-security`). A separate **managed Claude Security** product (Enterprise) monitors connected repos; the plugin reaches GitLab/Bitbucket and air-gapped trees the hosted product cannot.

## Notes

- Needs a **paid plan** (scan uses dynamic workflows; Pro: enable them in `/config`). `python3` ≥ 3.9 on `PATH` (stdlib only). Git is required for **change scans** and patches; a **full scan** works in any directory. Linux / macOS / Windows.
- Install: `/plugin install claude-security@claude-plugins-official`. Missing marketplace → `/plugin marketplace add anthropics/claude-plugins-official`. Activate with `/reload-plugins` if the install summary says so. Uninstall via `/plugin` or `claude plugin uninstall claude-security`.
- `/claude-security` menu: Scan codebase, scan a **committed** diff (branch vs base, open PR via signed-in `gh`, or a commit), Suggest patches. Uncommitted work is ignored on change scans — commit/stash or run a full scan. Large repos: pick a focused area; the report’s coverage section says what was skipped. Auto mode avoids a permission prompt per agent step (`claude-code-auto-mode`).
- Output is the **only** tree change: `CLAUDE-SECURITY-<timestamp>/` with `.md` / `.jsonl` / SARIF 2.1.0 (CWE) plus a revision stamp (commit or `UNVERSIONED`, effort, dirty-tree flag). Directory ships its own `.gitignore` so `git add` does not sweep reports. Findings appear only after verifier agents; two scans of the same tree can differ.
- Patches: built in a scratch copy against the stamped commit. An independent reviewer runs project tests when present and must vouch that the patch fixes **one** finding, adds no new vuln, and keeps other behavior. Otherwise you get a note, not a patch. Apply with `git apply …/patches/F1.patch` — **never auto-applied**. Stale findings (code moved) are skipped. Prefer one PR per patch.
- Fable models may trip cybersecurity classifiers; Claude Code falls back to Opus and the scan should still finish. Treat reports as research, not a merge gate — keep SAST/SCA in CI.

## Sources

- [Scan your codebase for vulnerabilities](https://code.claude.com/docs/en/claude-security) — accessed 2026-09-21
- [Catch security issues as Claude writes code](https://code.claude.com/docs/en/security-guidance) — accessed 2026-09-21
- [Code Review](https://code.claude.com/docs/en/code-review) — accessed 2026-09-21
