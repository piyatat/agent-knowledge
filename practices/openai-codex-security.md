---
id: openai-codex-security
title: Codex Security plugin — scans, diffs, and cloud review
tags: [openai, plugins, security, review]
status: active
updated: 2026-09-15
when_to_use: Installing Codex Security for a local scan, a diff scan in CI, or @codex security review on GitHub
---

## Summary

**Codex Security** is an installable Codex plugin that runs authorized security review: repository/folder scan, higher-recall deep scan, or a **diff** scan of a PR/commit/patch. Findings land in a workbench plus `report.md` / JSON. **Codex Security cloud** (research preview) scans connected **GitHub** repos. Not `/review` (`openai-codex-review`) and not Guardian auto-review (`openai-codex-auto-review`). Scan only code you own or are allowed to assess.

## Notes

- Install from Plugins (desktop Security sidebar) or CLI `/plugins` → Codex Security, then `/new`. CLI: `codex plugin add codex-security@openai-curated`. Skills: `$codex-security:security-scan`, `deep-security-scan` (whole repo), `security-diff-scan`, `fix-finding`. First local scan: Codebase, deep scan **off**, entire repo or one folder; keep the task running until it finishes.
- Outputs: `report.md`, optional `findings/` and `hardening/`, plus `scan-manifest.json`, `findings.json`, `coverage.json`. Keep the directory together so links work. Optional `SECURITY.md` (root or nested; closest wins) is **policy context, not executable instructions**. Build/test commands stay in `AGENTS.md`.
- CI: install CLI + plugin with a throwaway `CODEX_HOME`; expose `CODEX_API_KEY` only for the scan (often from `CODEX_SECURITY_API_KEY`). `codex exec --sandbox workspace-write` with a **read-only** prompt that names `$codex-security:security-diff-scan` and the merge-base..head range. Unset tokens in `after_script` when posting notes.
- GitHub PRs: `@codex security review` (research preview) is a separate, deeper pass than `@codex review`; overlap is expected. GitLab cloud review is code-review, not this cloud product (`openai-codex-gitlab`). Export can create SARIF/CSV/JSON or gated tracker issues — still a model, not a SAST replacement. Review every finding before shipping a fix.

## Sources

- [Codex Security plugin quickstart](https://developers.openai.com/codex/security/plugin) — accessed 2026-09-15
- [Codex Security](https://developers.openai.com/codex/security) — accessed 2026-09-15
- [Run a Codex Security scan](https://developers.openai.com/codex/security/plugin/scans) — accessed 2026-09-15
- [Review code changes for security](https://developers.openai.com/codex/security/plugin/code-changes) — accessed 2026-09-15
- [Review GitHub pull requests with Codex](https://learn.chatgpt.com/docs/third-party/github) — accessed 2026-09-15
