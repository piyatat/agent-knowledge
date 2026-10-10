---
id: cursor-at-mentions
title: Cursor @ mentions — attach context, do not dump folders
tags: [cursor, context, ux, tokens]
status: active
updated: 2026-10-10
when_to_use: Deciding whether to @-attach files, diffs, terminals, or chats, or to # a pull request
---

## Summary

Type **`@`** in chat to attach known context. Official guidance: mention files when you already know they matter; if you do not, skip it — Agent searches on its own. Folder mentions inject the folder’s contents and are the usual token blow-up. **`#`** (Agents Window **3.23**) is a separate picker for **pull requests**.

## Notes

- Attachable: **Files & Folders** (`@auth.ts`, `@src/components/` — type `/` after a folder to go deeper); **Terminals**; **Chats** (prior conversation); **Git diffs** (`@Commit` working-tree, `@Branch` vs main); **Browser** (built-in browser). Repeat `@` for multiple items.
- **`#` PR picker** (3.23): type `#` in the prompt to pick from your pull requests, including ones the current agent opened. Also works in follow-up question inputs and when you edit a sent message. Dropping a local file onto a remote/cloud prompt is `cursor-remote-file-attach`, not `@`.
- `.cursorignore` files cannot be `@`-mentioned (silent drop). Use `.cursorindexingignore` if you still need to attach a noisy generated file.
- Images: drag-drop or paste (screenshots). Voice: microphone in the input; review the transcript before send.
- Context ring next to the input breaks down tokens: system prompt, tools, rules, skills, MCP, subagents, summarized conversation, live conversation. Near-full windows compact older turns.
- Skills/`/` and Custom Modes are a different primitive (slash vs pinned skill) — do not confuse with `@` attachments.
- `@Docs` (indexed third-party docs) is an Editor-window feature in forum guidance; do not assume it exists in every Agents surface.

## Sources

- [Prompting agents](https://cursor.com/docs/agent/prompting) — accessed 2026-10-10
- [Agents Window release notes](https://cursor.com/docs/release-notes/agents-window) — accessed 2026-10-10
- [@ mentions and context (help)](https://cursor.com/help/customization/context.md) — accessed 2026-08-26
- [Cursor ignore file](https://cursor.com/docs/reference/ignore-file) — accessed 2026-08-26
