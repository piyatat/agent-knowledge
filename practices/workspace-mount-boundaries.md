---
id: workspace-mount-boundaries
title: Workspace mount boundaries and symlink escapes
tags: [security, sandbox, filesystem, permissions]
status: active
updated: 2026-08-10
when_to_use: Giving coding agents local file access via mounts, workspaces, or folder allowlists
---

## Summary

Filesystem allowlists only work if you resolve symlinks **before** path checks and offer explicit mount modes; otherwise a link inside an approved folder escapes to the host.

## Notes

- Offer graded mounts: read-only, read-write, read-write-no-delete — match blast radius to the task.
- Canonicalize paths and resolve symlinks (and `..`) prior to allowlist comparison.
- Keep production credentials off mounted volumes; prefer host secret stores injected ephemerally.
- Enterprise: admin MDM allowlists for mount roots beat per-chat hope.
- Combine with egress controls — file exfil often leaves via network tools, not just copy.
- Log mount mode + roots at session start for auditability.

## Sources

- [How we contain Claude across products (Anthropic)](https://www.anthropic.com/engineering/how-we-contain-claude) — accessed 2026-08-10
- [AI Agent Sandboxing: MicroVMs, gVisor, WASM](https://zylos.ai/research/2026-04-04-ai-agent-sandboxing-security-isolation) — accessed 2026-08-10
- [Sandboxing an Agent That Executes Code](https://dev.to/multigrid/sandboxing-an-agent-that-executes-code-1noi) — accessed 2026-08-10
