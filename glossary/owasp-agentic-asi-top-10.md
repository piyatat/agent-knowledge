---
id: owasp-agentic-asi-top-10
title: OWASP ASI Top 10 vs AST Skills Top 10
tags: [owasp, security, glossary, failure-modes]
status: active
updated: 2026-08-24
when_to_use: Mapping agent security work to OWASP codes — ASI01–ASI10 (applications) vs AST01–AST10 (skills)
---

## Summary

**ASI** is the OWASP Top 10 for **Agentic Applications** (2026): risks of autonomous systems that plan, use tools, keep memory, and talk to other agents. **AST** is a different list — Agentic **Skills** Top 10 — for `SKILL.md` marketplaces. Do not mix the prefixes.

## Notes

- Released by the OWASP GenAI Security Project (Dec 2025) as a peer-reviewed starting point for builders and defenders. Complementary to the LLM Top 10 (prompt/model) and to AST (skill packages).
- ASI01 Agent Goal Hijack — injected instructions redirect objectives (e.g. EchoLeak-class hidden prompts).
- ASI02 Tool Misuse & Exploitation — legitimate tools used unsafely (composition, recursion, budget exhaustion).
- ASI03 Identity & Privilege Abuse — delegated creds, impersonation, ambient tokens.
- ASI04 Agentic Supply Chain — poisoned tools, schemas, MCP/A2A components, registries.
- ASI05 Unexpected Code Execution — model-authored shell/eval/RCE paths.
- ASI06 Memory & Context Poisoning — durable memory rewritten by untrusted input.
- ASI07 Insecure Inter-Agent Communication — spoofed A2A/peer messages.
- ASI08 Cascading Agent Failures — one fault amplifying through automation.
- ASI09 Human-Agent Trust Exploitation — fluent false explanations that win approvals.
- ASI10 Rogue Agents — concealment, self-directed scope expansion.
- Coding-agent triage often starts at ASI03, ASI02, ASI04 (creds, tools, supply chain). Cross-link AST01 (malicious skills) to ASI04/ASI10, not as a replacement for ASI01.

## Sources

- [OWASP Top 10 for Agentic Applications for 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — accessed 2026-08-24
- [Release post — ASI01–ASI10 examples](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/) — accessed 2026-08-24
- [OWASP Agentic Skills Top 10](https://owasp.org/www-project-agentic-skills-top-10/) — accessed 2026-08-24
