---
id: claude-code-artifacts
title: Claude Code artifacts — live claude.ai pages from a session
tags: [claude, ux, hosting, mcp]
status: active
updated: 2026-09-21
when_to_use: Publishing a Claude Code session as a claude.ai artifact, or wiring MCP connectors into a live page
---

## Summary

A **Claude Code artifact** is a single HTML/Markdown page Claude publishes from the session to a private `claude.ai` URL that **updates in place**. Share org-wide (Team/Enterprise) or via a public link (Pro/Max; Team/Enterprise if an Owner enables External sharing). Not a backend app (`openai-codex-sites`), not a PR “artifact” (`cursor-cloud-pr-artifacts`), and not A2A Task artifacts (`a2a-task-lifecycle`). Needs `/login` (claude.ai), Anthropic API (not Bedrock / Agent Platform / Foundry), and no CMEK / HIPAA / ZDR.

## Notes

- CLI ≥ 2.1.183 or Desktop ≥ 1.13576.0. Off by default in Agent SDK, GitHub Action, MCP-server, and when `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` is set. Auto mode can publish without a prompt; Manual/Accept edits ask once, then republish silently unless capabilities, public share, or “latest version” sharing changed. `Ctrl+]` reopens the latest; `CLAUDE_CODE_ARTIFACT_AUTO_OPEN=0` skips the browser. `/artifacts` (v2.1.208+) lists yours + shared (o open, c copy, Enter attach).
- Updates: same URL, versioned; pick the viewer version in Share. Cross-session: pass the URL or attach via `/artifacts`. Team/Enterprise: viewers vs **editors** (editor republishes from another session). Org-shared pages take comments (v2.1.221+); `@claude` / Send to Claude activates a thread. Session watches comments (v2.1.228+); auto-reply follows permission mode; 60 activations/hour then pause. Public share **disables comments**.
- **MCP connectors on the page** (v2.1.209+): live fetch through the **viewer’s** claude.ai connections, after a first-call permission. Local `.mcp.json` servers can feed the *build* but not the published page. Claude declares allowed connectors at publish; v2.1.265+ refuses publish if **no** declared tool names match. Connector-backed pages **cannot** be public. Owner toggle: Enable artifact connectors. Actions (post/update) also run as the viewer.
- `/design` (v2.1.265+) publishes a Design-artifact canvas of editable artboards (PNG/PDF export). Page CSP: Google Fonts + five CDNs (cdnjs, unpkg, Tailwind, jQuery, selected jsDelivr); images as data URIs; `fetch` only own origin + Fonts. No self-started downloads — declare the downloads capability. One file, UTF-8 (or LE UTF-16 BOM), ≤ 16 MiB rendered. Viewer origin `*.claudeusercontent.com`.
- Disable: `/config` Artifacts, `"enableArtifact": false`, `CLAUDE_CODE_DISABLE_ARTIFACT=1`, or deny the `Artifact` tool. Project/local false (v2.1.242+) cannot be overridden by a higher `true`. Compliance API lists/deletes org artifacts. Treat shared pages as untrusted HTML (`prompt-injection-agent-defense`).

## Sources

- [Share session output as artifacts](https://code.claude.com/docs/en/artifacts) — accessed 2026-09-21
- [Feature availability](https://code.claude.com/docs/en/feature-availability) — accessed 2026-09-21
- [Tools reference](https://code.claude.com/docs/en/tools-reference) — accessed 2026-09-21
