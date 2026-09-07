---
id: gemini-cli-headless
title: Gemini CLI headless — -p scripts and JSON output
tags: [gemini, cli, ci, orchestration]
status: active
updated: 2026-09-07
when_to_use: Scripting Gemini CLI in CI, or choosing -p / --output-format vs an interactive session
---

## Summary

Gemini CLI **headless** mode runs one prompt and exits (no TUI). Trigger with `-p` / `--prompt`, or when stdin/stdout is not a TTY. This is the Gemini equivalent of `claude -p` (`claude-code-headless`) and Cursor `agent -p` (`cursor-cli-headless`). Pair with folder trust (`gemini-cli-trusted-folders`) and sandbox (`gemini-cli-sandboxing`).

## Notes

- Auth in CI: API key (`GOOGLE_API_KEY` / `GEMINI_API_KEY`) or Vertex (`GOOGLE_APPLICATION_CREDENTIALS`, `GOOGLE_CLOUD_PROJECT`, `GOOGLE_GENAI_USE_VERTEXAI`). Cached interactive OAuth is not a CI strategy. Pipe context: `git diff | gemini -p "…"`. Positional args without `-p` stay interactive unless pipes/redirects force headless.
- `--output-format json`: one object with `response`, `stats`, optional `error` — pipe `.response` to `jq`. `--output-format stream-json`: JSONL events (`init`, `message`, `tool_use`, `tool_result`, `error`, `result`). Default is plain text on stdout.
- Exit codes: `0` success, `1` general/API error, `42` bad input, `53` turn limit. Useful flags: `-m` model, `--yolo` / `--approval-mode` (`auto_edit` | `plan`), `--sandbox`, `--include-directories`. `security.disableYoloMode` blocks `--yolo` (`gemini-cli-settings`).
- If `security.folderTrust.enabled` is on and the workspace is untrusted, headless throws `FatalUntrustedWorkspaceError`. Bypass for that session: `--skip-trust` or `GEMINI_CLI_TRUST_WORKSPACE=true`. Unpaid / Google One accounts may have been moved to Antigravity CLI — verify the binary before baking CI.

## Sources

- [Headless mode reference](https://geminicli.com/docs/cli/headless/) — accessed 2026-09-07
- [Automate tasks with headless mode](https://geminicli.com/docs/cli/tutorials/automation/) — accessed 2026-09-07
- [Trusted Folders](https://geminicli.com/docs/cli/trusted-folders/) — accessed 2026-09-07
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-07
