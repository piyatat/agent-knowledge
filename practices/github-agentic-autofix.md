---
id: github-agentic-autofix
title: GitHub agentic autofix — assign CodeQL alerts to Copilot
tags: [github, security, orchestration, review]
status: active
updated: 2026-10-15
when_to_use: Assigning code scanning alerts to Copilot, enabling the Agentic autofix policy, or choosing it vs Copilot Autofix suggestions
---

## Summary

**Agentic autofix** (GA **2026-10-15**) assigns one or more **default-branch** code scanning alerts to Copilot cloud agent. The session explores the repo, proposes a fix, **re-runs CodeQL** to confirm the alert closes, iterates, then opens a **draft PR**. It is not one-click Copilot Autofix suggestions, not AI Scan PR findings (`github-code-scanning-ai-scan`), and not a merge gate. No Copilot **seat** is required; a Copilot **billing method** still is.

## Notes

- Use it when you want Copilot to investigate **end to end**. Copilot Autofix is the cheaper alternative: one suggested patch you apply yourself, **no AI credits**, on by default wherever CodeQL runs unless an admin disables it. If agentic autofix is off, Autofix still works.
- Start from a default-branch alert (**Assign to Copilot**, replacing Generate Fix when enabled), from the alert list or a security campaign (**up to 25** alerts → one PR), or REST `assignees: ["copilot-swe-agent[bot]"]`. PR-only / other-branch alerts cannot be assigned. Continue the session from the PR or the repo Agents tab.
- Access: enterprise **Agentic autofix** Advanced Security policy, then org or repo Code Security settings. Changelog: GHEC (including data residency) with Code Security / Advanced Security. Docs: org owner/security manager enablement (enterprise must allow); public personal repos can enable directly. **Not** for Enterprise Managed User-owned repos. Org enablement defaults eligible repos on; a repo admin can opt out.
- Cost: **Code Security AI Credits** plus Actions minutes (SKU “Advanced Security” in AI usage). Copilot Autofix suggestions do not consume those credits. Always review the draft PR.
- Validation is the **default CodeQL query suite** only — custom queries, `security-extended`, and third-party SARIF are best-effort. Copilot honors applicable custom instructions (`github-copilot-instructions`). Treat alert text as untrusted (`prompt-injection-agent-defense`).

## Sources

- [About autofix for code scanning](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning) — accessed 2026-10-15
- [Agentic autofix for code scanning alerts general availability](https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability/) — accessed 2026-10-15
- [Resolving code scanning alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts) — accessed 2026-10-15
