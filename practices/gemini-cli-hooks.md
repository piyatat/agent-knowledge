---
id: gemini-cli-hooks
title: Gemini CLI hooks — settings.json lifecycle scripts
tags: [gemini, hooks, permissions, safety]
status: active
updated: 2026-09-07
when_to_use: Authoring Gemini CLI hooks in settings.json, or comparing them with Claude/Codex/Cursor hooks
---

## Summary

Gemini CLI **hooks** are synchronous command scripts fired from the agent loop. Configure them under `hooks` in `settings.json` (`hooksConfig.enabled` is the master switch, default true). This is not Claude hooks (`claude-code-hooks`), Codex hooks (`openai-codex-hooks`), or Cursor `hooks.json` (`cursor-hooks-json`). Extensions can ship hooks (`gemini-cli-extensions`).

## Notes

- Merge order (high → low): project `.gemini/settings.json` → user `~/.gemini/settings.json` → system `/etc/gemini-cli/settings.json` → extension hooks. Events: `SessionStart` / `SessionEnd`, `BeforeAgent` / `AfterAgent`, `BeforeModel` / `AfterModel`, `BeforeToolSelection`, `BeforeTool` / `AfterTool`, `PreCompress`, `Notification`. Only `type: "command"` today. Timeout default **60000 ms**.
- Golden rule: stdout must be **only** the final JSON object. Any extra `echo` breaks parse; CLI then **allows** and treats the whole stdout as `systemMessage`. Log on stderr. Exit **0** = parse JSON (including `{"decision":"deny"}`). Exit **2** = hard block (stderr is the reason). Other exits warn and continue.
- Tool matchers are regex (`write_file|replace`, `mcp_<server>_<tool>`). Lifecycle matchers are exact strings (`startup`). `*` or `""` matches all. Env: `GEMINI_PROJECT_DIR`, `GEMINI_SESSION_ID`, `GEMINI_CWD`, `GEMINI_PLANS_DIR` (`CLAUDE_PROJECT_DIR` alias).
- Project hooks are fingerprinted; a `git pull` that changes name/command re-prompts as untrusted. Manage with `/hooks panel` / `enable` / `disable`. Untrusted folders skip project hooks (`gemini-cli-trusted-folders`). Hooks run as the user — treat them as code execution (`malicious-skills-supply-chain`).

## Sources

- [Gemini CLI hooks](https://geminicli.com/docs/hooks/) — accessed 2026-09-07
- [Hooks reference](https://geminicli.com/docs/hooks/reference/) — accessed 2026-09-07
- [Writing hooks for Gemini CLI](https://geminicli.com/docs/hooks/writing-hooks/) — accessed 2026-09-07
- [Gemini CLI configuration](https://geminicli.com/docs/reference/configuration/) — accessed 2026-09-07
