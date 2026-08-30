---
id: claude-computer-browser-toolsets
title: Claude computer and browser toolsets (20260801 GA)
tags: [computer-use, tools, browser, security]
status: active
updated: 2026-08-30
when_to_use: Implementing Claude desktop or in-page browser control after the 2026-08-19 GA
---

## Summary

On **19 August 2026** computer use left beta as `computer_toolset_20260801` (no beta header). The same day shipped `browser_toolset_20260801` for a **viewport you host**. Both are **client toolsets**: Anthropic publishes the schema; your app executes every member call. Not available on Claude Managed Agents.

## Notes

- Computer: one tools entry, **17** members (`screenshot`, `left_click`, `type`, `zoom`, …). Calls are `tool_use` blocks with `name` = member and `"toolset_name": "computer"`. No `action` field. Rejects legacy `display_width_px` / `display_height_px` / `enable_zoom` on the entry — use `configs` (per-member `enabled`, `defer_loading`). Do not combine with `computer_20251124` or another tool named `computer`.
- Browser: page structure (a11y tree, refs, forms, tabs) **plus** pixels. Default **27** members (`navigate`, `read_page`, …); four more (`javascript_exec`, `file_upload`, `read_console`, `read_network`) are off until enabled. Prefer this when the task stays in webpages.
- **Batch actions** are sequential, not parallel: run members in `content` order, stop at first failure, still return a `tool_result` for every block (computer halt text: `Not executed: an earlier computer action in this turn failed.`). Confirm HITL **before each** block. Echo `toolset_name` on every result.
- Models: Fable 5, Mythos 5, Opus 5, Sonnet 5, Opus 4.8 on the Claude API and Google Cloud. Older models stay on `computer_20251124` + beta header. Often pair computer with independent `bash_20250124` and `text_editor_20250728`.
- Containment still required (VM, egress allowlist, no prod creds). Screenshot classifiers may force user confirmation; opt-out is a support request, not a flag.

## Sources

- [Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) — accessed 2026-08-30
- [Browser use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool) — accessed 2026-08-30
- [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview) — accessed 2026-08-30
