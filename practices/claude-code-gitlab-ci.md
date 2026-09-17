---
id: claude-code-gitlab-ci
title: Claude Code GitLab CI/CD — @claude jobs and MRs
tags: [claude, gitlab, ci, orchestration]
status: active
updated: 2026-09-17
when_to_use: Running Claude Code in GitLab CI/CD (beta) from @claude comments or MR/web triggers
---

## Summary

**Claude Code for GitLab CI/CD** (beta, GitLab-maintained) runs the Claude Code CLI / Agent SDK in an isolated job and lands changes via MRs. Not `anthropics/claude-code-action` on GitHub (`claude-code-github-action`), not Cursor GitLab Cloud Agents (`cursor-gitlab-cloud-agents`), and not Codex `@codex` on GitLab (`openai-codex-gitlab`).

## Notes

- Quick start: masked `ANTHROPIC_API_KEY` + a `.gitlab-ci.yml` job (`node:24-alpine3.21`, install script, `PATH` includes `~/.local/bin`). Rules typically `web` and `merge_request_event`. Production: OIDC to **Bedrock** (`CLAUDE_CODE_USE_BEDROCK=1`, `AWS_ROLE_TO_ASSUME`) or **Google Agent Platform** (`CLAUDE_CODE_USE_VERTEX=1`, WIF + `GCP_*` vars) instead of a long-lived key.
- Headless: `claude -p "$AI_FLOW_INPUT"` with `--permission-mode acceptEdits` and `--allowedTools "Bash Read Edit Write mcp__gitlab"`. Optional `/bin/gitlab-mcp-server`. Mention triggers need a notes webhook → pipeline trigger API with `AI_FLOW_INPUT` / `AI_FLOW_CONTEXT` / `AI_FLOW_EVENT` when the comment contains `@claude` (not `/claude`).
- GitLab API: default `CI_JOB_TOKEN`, or masked `GITLAB_ACCESS_TOKEN` (Project Access Token, `api` scope) if the job must comment/open MRs. Bedrock model IDs are region-prefixed (`us.anthropic.claude-sonnet-4-6`).
- Guide with root `CLAUDE.md`. Cap `--max-turns` and job `timeout`. Cost is runner minutes **plus** tokens. Issue/MR text is untrusted (`prompt-injection-agent-defense`). Review Claude’s MRs like any other contributor.

## Sources

- [Claude Code GitLab CI/CD](https://code.claude.com/docs/en/gitlab-ci-cd) — accessed 2026-09-17
- [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions) — accessed 2026-09-17
- [CLI reference (Claude Code)](https://code.claude.com/docs/en/cli-reference) — accessed 2026-09-17
