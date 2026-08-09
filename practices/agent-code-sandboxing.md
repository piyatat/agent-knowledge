---
id: agent-code-sandboxing
title: Sandboxing agent code execution
tags: [sandbox, security, firecracker, gvisor]
status: active
updated: 2026-08-09
when_to_use: Agents run shell, Python, or other LLM-generated code that must not escape the host
---

## Summary

Shared-kernel Docker is weak for untrusted agent code. Prefer microVMs (Firecracker) or gVisor for production isolation; pass argv lists, never shell=True.

## Notes

- Threat model: deliberate escape + prompt-driven misuse—not just buggy scripts.
- Firecracker/Kata: hardware isolation, dedicated kernel—default for multi-tenant untrusted exec.
- gVisor: user-space kernel intercepts syscalls—stronger than runc, lighter than full VMs for many workloads.
- WASM/isolates: capability-first for constrained tasks without full Linux ABI.
- Even 'just run tests/grep' is code execution if model strings reach a shell—validate args and sandbox anyway.

## Sources

- [AI Agent Sandboxing: MicroVMs, gVisor, WASM](https://zylos.ai/research/2026-04-04-ai-agent-sandboxing-security-isolation) — accessed 2026-08-09
- [Choosing a Sandbox for AI Agent Code Execution (2026)](https://tanayshah.dev/blog/choosing-agent-sandbox-2026/) — accessed 2026-08-09
- [Sandboxing an Agent That Executes Code](https://dev.to/multigrid/sandboxing-an-agent-that-executes-code-1noi) — accessed 2026-08-09
