---
id: gemini-cli-custom-commands
title: Gemini CLI custom commands — TOML slash prompts
tags: [gemini, prompts, cli, skills]
status: active
updated: 2026-09-17
when_to_use: Authoring ~/.gemini/commands or project .gemini/commands TOML slash commands, or contrasting them with Agent Skills
---

## Summary

Gemini CLI **custom commands** are `.toml` files that become `/name` (or `/ns:name`) shortcuts. User `~/.gemini/commands/` vs project `<cwd>/.gemini/commands/` (project wins on name clash). Not Agent Skills (`gemini-cli-skills`), not `GEMINI.md` (`gemini-cli-gemini-md`), and not Cursor `.cursor/commands` (`cursor-slash-commands`).

## Notes

- Required `prompt` string; optional `description` (shows in `/help`). Path relative to `commands/` becomes the slash name; subdirs map `/` → `:`. After edits: `/commands reload`; list files with `/commands list`.
- Args: if the prompt contains `{{args}}`, it is replaced raw in the body and **shell-escaped** inside `!{…}`. If there is no `{{args}}`, typed args are appended after two newlines (or omitted).
- `!{shell}` injects command output (confirm dialog after a security check; failed commands include stderr + `[Shell command exited with code N]`). Nested braces must balance — otherwise wrap in a script. `@{path}` injects a file, multimodal media, or a directory listing (respects `.gitignore` / `.geminiignore`); processed **before** `!{…}` and `{{args}}`. Paths must stay in the workspace.
- Confirm every `!{…}` before it runs. Treat command output and injected files as untrusted (`prompt-injection-agent-defense`). Prefer Skills when the workflow needs a `SKILL.md` package + `activate_skill`; use TOML commands for short, repo-shared slash prompts.

## Sources

- [Custom commands (Gemini CLI)](https://geminicli.com/docs/cli/custom-commands/) — accessed 2026-09-17
- [Agent Skills (Gemini CLI)](https://geminicli.com/docs/cli/skills/) — accessed 2026-09-17
- [Ignore files (.geminiignore)](https://geminicli.com/docs/cli/gemini-ignore/) — accessed 2026-09-17
