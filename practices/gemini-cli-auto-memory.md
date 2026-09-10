---
id: gemini-cli-auto-memory
title: Gemini CLI Auto Memory — inbox patches and drafted skills
tags: [gemini, memory, skills, experimental]
status: active
updated: 2026-09-10
when_to_use: Enabling experimental.autoMemory or reviewing /memory inbox candidates, vs editing GEMINI.md yourself
---

## Summary

Gemini CLI **Auto Memory** is an experimental background extractor: it mines **idle local transcripts** and drafts memory `.patch` files plus `SKILL.md` candidates. Nothing is applied until you approve it in `/memory inbox`. Complementary to hierarchical `GEMINI.md` (`gemini-cli-gemini-md`) and explicit “remember this” edits. Not Claude auto `MEMORY.md` (`claude-code-memory`) and not Codex local memories (`openai-codex-memories`). Off by default.

## Notes

- Enable `experimental.autoMemory: true` in `~/.gemini/settings.json` or project `.gemini/settings.json`, then **restart** (the extractor starts at boot). Disable by setting `false` and restarting; inbox files stay on disk until you drain them or delete the project memory directory.
- Eligibility: sessions under `~/.gemini/tmp/<hash>/chats/` that have been **idle ≥ 3 hours** and have **≥ 10 user messages**. Active, trivial, and sub-agent sessions are skipped. A lock in the project memory dir serializes extractors; a state file + throttle prevent back-to-back scans.
- Safety: candidates land in a project-local inbox. The extractor cannot edit active memory files, settings, credentials, or **project `GEMINI.md`**. Skill patches are parsed and dry-run before surfacing; memory patches are target-allowlisted and applied atomically only on approve. It is instructed to redact secrets and not copy large tool outputs verbatim. Extraction still sends transcript excerpts to the configured model (preview Flash).
- `/memory inbox` groups new skills, skill updates, and memory updates. Promote a skill to `~/.gemini/skills/` (user) or `.gemini/skills/` (workspace). Private memory patches hit the project memory directory; global patches hit only `~/.gemini/GEMINI.md`. Applied memory reloads in the current session; promoted skills appear next session under normal skill precedence (`gemini-cli-skills`).
- Inbox is per-project. Treat drafted skills/patches as untrusted (`agent-memory-poisoning`). `advanced.autoConfigureMemory` in settings is **Node heap sizing**, not this feature.

## Sources

- [Auto Memory](https://geminicli.com/docs/cli/auto-memory/) — accessed 2026-09-10
- [Manage context and memory](https://geminicli.com/docs/cli/tutorials/memory-management/) — accessed 2026-09-10
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-10
