---
id: openai-codex-github-action
title: Codex GitHub Action — openai/codex-action@v1
tags: [openai, github, ci, permissions]
status: active
updated: 2026-09-04
when_to_use: Running Codex via codex exec in GitHub Actions instead of Claude Code or Cursor CLI
---

## Summary

`openai/codex-action@v1` installs the Codex CLI, starts a **Responses API proxy** for the key, and runs **`codex exec`**. It is not `anthropics/claude-code-action` (`claude-code-github-action`) and not Cursor `@cursor` (`cursor-github-cloud-agents`). Prefer this over exporting `CODEX_API_KEY` into a job that also runs repo-controlled build scripts.

## Notes

- Inputs: `openai-api-key` (secret), optional `responses-api-endpoint` (full URL including `/v1/responses` for Azure), `prompt` **or** `prompt-file`, optional `output-file`, `working-directory`, `model`, `effort`, `codex-home`, `codex-version`, `codex-args`, `output-schema` / `output-schema-file`. Output `final-message` is how later jobs post a PR comment.
- Permissions: prefer `permission-profile: ":workspace"` (edit checkout) or `":read-only"` (review). Profiles need CLI **0.138.0+** and cannot combine with `sandbox` or `safety-strategy: read-only` (`openai-codex-permissions`). Omitting both still uses legacy `workspace-write`.
- `safety-strategy`: default **`drop-sudo`** (Linux/macOS: strip sudo, `/run` root sockets including Docker, `no_new_privs`). Mutations persist on **reused self-hosted runners** — last step on a disposable host. `unprivileged-user` needs `codex-user`. `unsafe` is required on Windows runners. `read-only` still lets the process see the key in memory via the proxy.
- Actor gate: write access required unless `allow-users` / `allow-bot-users` (`allow-bots` only for `github-actions[bot]`). Do not switch to `pull_request_target` just to reach forks. Checkout with `persist-credentials: false`; post comments from a **second job** that does not run Codex.
- Protected `codex-args` reject overrides that change permissions, trust, providers, or command execution. `:workspace` does not grant network — install deps **before** the action step.

## Sources

- [Codex GitHub Action](https://developers.openai.com/codex/github-action.md) — accessed 2026-09-04
- [openai/codex-action README](https://github.com/openai/codex-action/blob/main/README.md) — accessed 2026-09-04
- [Permissions](https://learn.chatgpt.com/docs/permissions) — accessed 2026-09-04
