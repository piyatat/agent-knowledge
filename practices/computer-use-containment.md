---
id: computer-use-containment
title: Computer-use and browser-agent containment
tags: [security, sandbox, browser, computer-use]
status: active
updated: 2026-09-02
when_to_use: Granting agents desktop, GUI, or browser control beyond scoped APIs
---

## Summary

Contain computer-use agents by hard environment boundaries (VM/sandbox, filesystem mounts, egress controls) plus approval gates for high-impact actions — model training alone will not stop prompt injection through the screen. Product-specific wiring: Cursor self-hosted workers (`cursor-self-hosted-computer-use`), managed Cloud Agent artifacts (`cursor-cloud-pr-artifacts`), Claude toolsets (`claude-computer-browser-toolsets`), OpenAI computer (`openai-computer-tool`).

## Notes

- Prefer **containment** (what the agent can reach) over hoping the model never misbehaves: sandboxes, VMs, network egress proxies.
- Mount host files with explicit modes (read-only / read-write / no-delete); resolve **symlinks before** path allowlist checks to prevent escape.
- Treat tool and page content as untrusted input — poisoned READMEs and DOM text are prompt-injection carriers. A worker that streams a desktop or uploads screenshots expands the same surface to reviewers and the host vendor.
- Require human approval for irreversible or externally visible actions (send mail, pay, delete, publish). Desktop-sharing “take control” is a person-in-the-loop, not a substitute for egress/FS walls.
- Disable unused browser extensions; isolate profiles; never place long-lived production credentials inside the agent environment.
- Defense in depth: model refusal + runtime monitors + environment walls. None alone is enough.

## Sources

- [How we contain Claude across products (Anthropic)](https://www.anthropic.com/engineering/how-we-contain-claude) — accessed 2026-08-10
- [Trustworthy agents in practice (Anthropic)](https://www.anthropic.com/research/trustworthy-agents) — accessed 2026-08-10
- [Guardrails and human review (OpenAI)](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals) — accessed 2026-08-10
- [Computer use and desktop sharing (Cursor)](https://cursor.com/docs/cloud-agent/bring-your-own-machine/computer-use) — accessed 2026-09-02
