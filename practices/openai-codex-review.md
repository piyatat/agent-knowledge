---
id: openai-codex-review
title: Codex /review — working-tree review without edits
tags: [openai, review, cli, git]
status: active
updated: 2026-09-09
when_to_use: Running Codex /review or codex review, or contrasting it with Copilot/Bugbot PR review
---

## Summary

Codex **`/review`** (TUI/app/IDE) and **`codex review`** (headless) start a dedicated reviewer on a Git diff. Findings are prioritized; the working tree is **not** modified. Git repo required. This is not GitHub Copilot code review (`github-copilot-code-review`) and not Cursor Bugbot (`cursor-bugbot-review`). Applying suggested fixes uses the session’s normal sandbox/approvals (`openai-codex-sandbox`).

## Notes

- Interactive scopes: review against a **base branch** (merge-base diff), **uncommitted** (staged + unstaged + untracked), a **commit**, or **custom** instructions. App/IDE review pane also has Unstaged / Staged / Commit / Branch / Last turn and can switch among attached repos. `/review` is **disabled while a task is in progress** — wait for the turn to finish.
- Headless: `codex review` takes exactly one of `--uncommitted`, `--base`, `--commit`, or a custom prompt. `--title` only with `--commit`. Use in CI instead of hoping the TUI picker is available (`openai-codex-github-action`).
- Model: current session model unless `review_model` is set in `config.toml`. Settings → General → Code review **Detached** runs review in a separate chat. Inline comments in the app pane are guidance — send an explicit follow-up (“address the inline comments”) before expecting edits.
- PR loop in the ChatGPT desktop app needs `gh` authenticated and the project on the PR branch. Contrast `@codex review` on GitHub (separate surface). Do not treat Codex review as a merge gate.

## Sources

- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-09-09
- [Code review (ChatGPT / Codex)](https://learn.chatgpt.com/docs/code-review) — accessed 2026-09-09
- [Codex CLI command reference — codex review](https://developers.openai.com/codex/cli/reference) — accessed 2026-09-09
