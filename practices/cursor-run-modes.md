---
id: cursor-run-modes
title: Cursor Run Modes and Read Access
tags: [cursor, permissions, sandbox, security]
status: active
updated: 2026-10-06
when_to_use: Choosing Auto-review vs Allowlist vs Run Everything, or restricting local agent reads to the workspace
---

## Summary

**Run Modes** (Settings → Agents → Approvals & Execution) decide when a **local** Cursor agent asks before shell, MCP, and Fetch. **Auto-review** is the recommended default: allowlisted calls run, other shells sandbox when they can, everything else goes to a backend classifier. **Read Access** (Cursor **3.23**, 2026-10-01) is a separate control: System (default, read outside the workspace) vs Workspace (ask first). Cloud Agents skip Run Modes — they already run on a dedicated VM.

## Notes

- Modes: **Auto-review** (sandbox + classifier), **Allowlist** (deterministic prefixes; sandbox optional; no classifier), **Run Everything** (no sandbox, no classifier, no prompts). Ask Every Time is deprecated (3.5+); empty Allowlist is the equivalent. Not a fifth chat mode (`cursor-agent-modes`) and not `permissions.json` / `sandbox.json` themselves.
- Auto-review order: allowlist → sandbox if the command fits file/network limits → else classifier. A sandboxed command that fails on a sandbox restriction can be **rerun outside** after classifier review. The classifier may make read-only `ReadFile` / `Grep` / `Glob` / `ListDir` on your machine (for example to read a script). A block can still become an approval prompt if the agent insists. **Not a security boundary.**
- Classifier models: Gemini 3.5 Flash Lite, fallback Claude 4.5 Haiku. Team model policy applies. Blocking Haiku 4.5 can gray out Auto-review even when the team Run Mode includes it — members fall back to Allowlist. Keep Haiku 4.5 allowed; if the toggle is gray, enable it, fully quit, reopen.
- **Read Access** (3.23+; hidden in Run Everything): **System** vs **Workspace**. Workspace: outside-workspace file reads prompt with the full path; Grep skips those files unless on the Read Allowlist; sandboxed commands on macOS/Linux see workspace + allowlist + common system/toolchain/cert paths and a **private** temp dir. Boundary also includes `~/.cursor/projects/<this-project>` plus `~/.cursor` skills/rules/plugins folders. Allowlist: absolute folders, globs (`*` — sandboxed commands get the parent folder), `~`. `sandbox.json` `readBoundary` / `additionalReadPaths` override Settings (project file wins). CLI: `sandbox.readBoundary` in `cli-config.json` plus `Read(...)` in `permissions.allow`.
- Team (Enterprise): Read Controls in Team Settings → Security & automation (or an org group). **System** leaves the choice to members; **Workspace** forces it. Team Read Allowlist **adds** to the member list unless **Read Control User Extensions** is off (then only the team list). Extra protections still prompt: Browser, file-deletion, external-file. Pair with `cursor-permissions-json` (when to ask) and `cursor-sandbox-json` (what a sandboxed shell can reach).

## Sources

- [Run Modes](https://cursor.com/docs/agent/security/run-modes) — accessed 2026-10-06
- [Agent Security](https://cursor.com/docs/agent/security) — accessed 2026-10-06
- [permissions.json reference](https://cursor.com/docs/reference/permissions) — accessed 2026-10-06
