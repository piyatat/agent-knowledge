---
id: openai-sandbox-agents
title: OpenAI SandboxAgent — isolated workspace vs hosted shell
tags: [openai, sandbox, sdk, orchestration]
status: draft
updated: 2026-09-01
when_to_use: An openai-agents job needs a real filesystem, shell, mounts, or resumable workspace — not only a chat turn
---

## Summary

`SandboxAgent` (TypeScript/Python Agents SDK, **beta**) is still an `Agent` (tools, handoffs, MCP, guardrails) plus a **live sandbox session**: files, commands, ports, snapshots. Keep the **harness** (loop, auth, HITL, traces) outside the sandbox. Prefer `draft` until the API leaves beta.

## Notes

- Use when the answer depends on workspace work (repos, artifacts, packages, previews, pause/resume). If you only need occasional shell, start with the hosted shell tool. If you only need a short model reply, call Responses or a plain `Agent`.
- Pieces: `SandboxAgent` (definition + defaults), `Manifest` (fresh-session contract: files, git repos, cloud mounts, env, users), **capabilities** (default filesystem + shell + compaction; add `Skills` / `Memory` explicitly), **client** (where it runs), per-run sandbox config, saved state (`RunState`, `sessionState`, snapshots).
- Manifest paths are workspace-relative — no `..` or absolute paths. Mounts (`S3Mount`, `GCSMount`, …) are ephemeral: snapshots skip remote storage. Put long task text in `AGENTS.md` / `repo/task.md`, not the prompt.
- Clients: `UnixLocalSandboxClient` (fast local), `DockerSandboxClient` (image isolation; `networkMode: 'none'` cannot combine with `exposedPorts`), or a hosted client from `@openai/agents-extensions`. Same agent definition; swap only `sandbox.client`.
- Secrets: inject via provider secret stores or marked-ephemeral `Manifest.environment` — never in instructions, task files, or committed manifests. Review artifacts before export. Passing a custom `capabilities` list **replaces** defaults; re-include filesystem/shell if you still need them.
- Distinct from Codex thread sandboxes (`openai-codex-sdk`) and from generic Firecracker/gVisor advice (`agent-code-sandboxing`).

## Sources

- [Sandbox Agents (OpenAI API)](https://developers.openai.com/api/docs/guides/agents/sandboxes) — accessed 2026-09-01
- [Sandbox clients (Agents SDK JS)](https://openai.github.io/openai-agents-js/guides/sandbox-agents/clients/) — accessed 2026-09-01
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) — accessed 2026-09-01
