---
id: claude-code-design
title: Claude Design — /design, /design-sync, standalone shutdown
tags: [claude, ux, artifacts, design]
status: active
updated: 2026-10-16
when_to_use: Using /design or /design-sync, migrating claude.ai/design systems, or contrasting Design with Code artifacts
---

## Summary

**Claude Design** is the Design **artifact template**: a conversation plus an on-canvas artboard editor. It now lives in ordinary Claude chats, Claude Code (`/design`, `/design-sync`), and the Artifacts tab. The standalone site **`claude.ai/design` closes 2026-12-14**. Not a generic Code artifact page (`claude-code-artifacts`) and not a Cursor/VS Code coding-agent canvas (`cursor-canvases`, `vscode-agent-canvases`).

## Notes

- Surfaces: chat (or Output → Design), Artifacts tab template, Claude Code `/design` (create/edit/sync; import a design into the repo or export code as a live prototype), iOS/Android view/edit (share settings stay on web/desktop). `/design-sync` pulls a design system from GitHub, uploads, or the local codebase so Claude checks output against real components. v2.1.302 notices on `/design-sync` and `/design-login` warn about the Dec 14 close. Cloud sessions: `/design consent` / `revoke` failures point to `claude.ai/design/settings`, not `/design-login`.
- Plans: Free / Pro / Max / Team / Enterprise; on by default. Enterprise default-on **2026-10-15** (owners can enable earlier under Organization settings → Artifacts). Design, Slides, and Docs default on that day except HIPAA orgs; Dashboards and Motion stay off until an admin enables them. Usage shares the **same** plan pool as chat and Claude Code (no separate Design allowance). ZDR orgs cannot turn on artifacts — download standalone projects before close.
- Migration: Artifacts page → **Migrate team design systems**. One org-wide pass; anyone who can use Design can start it. Empty systems and built-in starter themes are skipped. Published non-private systems become org-visible. Migrated systems are not self-editable on the settings page — ask Claude to change them. Chats, comments, and public standalone links **do not** transfer and are deleted after close. Projects stay on standalone until close (Artifacts lists up to 60 and opens them there).
- Enterprise: Artifacts master switch required. Design systems default **on** for Team, **off** for Enterprise. Custom roles need Artifacts permissions. Owners set a default design system after migrate. Multi-person editing is still basic.

## Sources

- [Get started with Claude Design](https://support.claude.com/en/articles/14604416-get-started-with-claude-design) — accessed 2026-10-16
- [Migrate from standalone Claude Design to Claude](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude) — accessed 2026-10-16
- [Claude Design product page](https://claude.com/product/design) — accessed 2026-10-16
- [v2.1.302 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) — accessed 2026-10-16
