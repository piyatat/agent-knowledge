---
id: claude-skills-api
title: Claude Skills API — GA container skills vs filesystem skills
tags: [skills, sdk, api, orchestration]
status: active
updated: 2026-08-30
when_to_use: Loading Skills on the Claude Messages API (/v1/skills, container) instead of SKILL.md on disk
---

## Summary

On **19 August 2026** Agent Skills and `/v1/skills` left beta on the Claude API: no `skills-2025-10-02` header is required (old header still works). API Skills are **not** the same surface as Claude Code filesystem skills or claude.ai uploads — they do not sync.

## Notes

- Wire shape: Messages `container.skills[]` with `type` + `skill_id` (optional `version`), plus a **code execution** tool. Cap is **20** Skills per request. Anthropic-managed ids: `pptx`, `xlsx`, `docx`, `pdf`. Custom ids look like `skill_01…`; versions like `skver_01…` or `latest`.
- Progressive disclosure still applies: list metadata first, load `SKILL.md` when matched, then scripts/refs. API runtime is a sandbox with **no network** and **no runtime package install** — only preinstalled code-execution packages.
- Sharing: API custom Skills are **workspace-wide**. claude.ai custom Skills are **per user** (no admin org distribution). Claude Code uses `~/.claude/skills/` and `.claude/skills/` (and plugins). Copy the zip/folder per surface yourself.
- SDK (27 Aug 2026): `client.skills` is GA. On new-enough SDKs, `client.beta.skills` also drops the beta header; `delete()` then removes the Skill **and all versions**. Requests that still send the header keep the old single-version delete.
- Not covered by ZDR. Treat uploaded Skills like software (`malicious-skills-supply-chain`). Content scanning on claude.ai/Cowork does not cover API uploads.

## Sources

- [Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) — accessed 2026-08-30
- [Using Agent Skills with the API](https://platform.claude.com/docs/en/build-with-claude/skills-guide) — accessed 2026-08-30
- [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview) — accessed 2026-08-30
- [Extend agents with skills (Agent SDK)](https://code.claude.com/docs/en/agent-sdk/skills) — accessed 2026-08-30
