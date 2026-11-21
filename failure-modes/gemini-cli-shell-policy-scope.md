---
id: gemini-cli-shell-policy-scope
title: A Gemini CLI shell rule misses the command, or a read-only glob now asks
kind: knowledge
tags: [gemini, permissions, shell, policy]
status: active
updated: 2026-11-21
when_to_use: A Gemini CLI allow or deny rule for a shell command stops matching, or a read-only glob now asks for confirmation
---

## Summary

Gemini CLI **v0.70.0** (2026-11-19) changed two shell-policy behaviors in `gemini-cli-policy-engine`. `commandPrefix` and `commandRegex` match only the top-level `command` argument, and a command that still contains unexpanded shell syntax keeps `ask_user` even when it looks read-only.

## Notes

- **Top-level command only.** Tool arguments are serialized with a `\x00` delimiter on each top-level key. That delimiter is omitted inside nested objects and array items. v0.70 prefixes the generated `commandPrefix` and `commandRegex` patterns with `\x00"command":`, so a `"command"` string buried in another argument no longer matches. `commandRegex` is also wrapped in `(?:...)`. An alternation such as `ls|pwd` matches only at the start of the command value, not later in the JSON. A rule that used to match because the text appeared somewhere in the argument JSON can stop matching after this release. `commandPrefix` and `commandRegex` still cannot share one rule.
- **Unexpanded shell syntax stays a prompt.** Before the known-safe upgrade, the policy engine now checks the unexpanded command text. Brace expansion, parameter expansion, ANSI-C quoting, arithmetic expansion, command or process substitution, and unquoted globs (`*`, `?`, `[...]`) keep the default `ask_user`. Quoted or escaped forms such as `ls '*.md'`, `echo "{a,b}"`, and `\*.md` do not. If the bash parser is missing, times out, or returns a tree with errors, the check also keeps `ask_user`. PowerShell is unchanged. Explicit `allow` rules, including rules that set `commandPrefix` or `argsPattern`, still allow the call. YOLO, plan mode, and non-interactive mode are unchanged, and non-interactive `ask_user` is still `deny`.
- **Docs lag.** The policy page on geminicli.com (page date 30 April 2026, read 2026-11-21) still describes `commandPrefix` as “the command argument starts with” and does not mention the `\x00` anchor. The v0.70 changelog and the merged pull requests are the current behavior. The same page’s worked priority examples still use older tier bases than its tier table (`gemini-cli-policy-engine`).

## Sources

- [Gemini CLI v0.70.0 changelog](https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/latest.md) — accessed 2026-11-21
- [gemini-cli v0.70.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0) — accessed 2026-11-21
- [Anchor commandPrefix to the top-level command](https://github.com/google-gemini/gemini-cli/pull/30355) — accessed 2026-11-21
- [Keep ASK_USER for unresolved shell expansion](https://github.com/google-gemini/gemini-cli/pull/30338) — accessed 2026-11-21
- [Policy engine](https://geminicli.com/docs/reference/policy-engine/) — accessed 2026-11-21
