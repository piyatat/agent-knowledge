---
id: cursor-design-mode
title: Cursor Design Mode — visual prompts in the Agents Window browser
tags: [cursor, ux, browser, design]
status: active
updated: 2026-09-11
when_to_use: Pointing Agent at a live UI element, drawing on the page, or contrasting Design Mode with Agent/Ask/Plan/Debug
---

## Summary

**Design Mode** is a pointing layer on the Agents Window **browser**: click elements, multi-select, draw on a frozen viewport, or narrate by voice so the agent edits the matching source. It is not a fifth chat mode (`cursor-agent-modes`) and not the Browser tool by itself (`cursor-browser`).

## Notes

- Open the Agents Window browser, then `Cmd+Shift+D` to toggle. Off returns to normal browsing. Shortcuts: Shift+drag selects an area; `Cmd+L` adds the element to chat; Option+click adds it to the input. Voice stays available while agents run so you can queue the next change.
- Selecting an element adds **identity** (xpath, component, attributes, computed styles, React fiber props) plus a **screenshot** of layout and page state. Multi-select is for relationships (“make A match B”). Drawing annotates a frozen frame so the agent sees the exact viewport you marked.
- Flow: send an edit, move to the next region, send another before the first finishes — multiple subagents, hot reload in the running app. Docs recommend a fast UI-strong model (Composer 2.5).
- Still uses the same Browser isolation and approval rules as `cursor-browser` (workspace profile, allowlists). Pair with `computer-use-containment` if the page is authenticated. Plan/Ask modes do not replace this: Design Mode is how you **target** UI while Agent edits.

## Sources

- [Design Mode](https://cursor.com/docs/agent/design-mode) — accessed 2026-09-11
- [Agents Window](https://cursor.com/docs/agent/agents-window) — accessed 2026-09-11
- [Browser](https://cursor.com/docs/agent/tools/browser) — accessed 2026-09-11
