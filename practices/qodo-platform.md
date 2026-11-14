---
id: qodo-platform
title: Qodo — hosted pull-request review and Agentic Toolbox
kind: service
tags: [qodo, review, github, skills]
status: active
updated: 2026-11-14
when_to_use: Adding Qodo review on a pull request, or giving a local coding agent Qodo skills
---

## Summary

**Qodo** is a hosted code-review product (Qodo Merge, now described as Qodo Git) plus the **Agentic Toolbox**, which exposes the same review and codebase tools to a local coding agent. It is a separate reviewer from CodeRabbit (`coderabbit-review`), Greptile (`greptile-review`), and Copilot code review (`github-copilot-code-review`).

## Notes

- **Git review:** install from the Qodo portal. GitHub Cloud multi-tenant is the fastest path; single-tenant and on-prem cover GitHub Enterprise Server, GitLab (cloud and self-managed), Bitbucket (Cloud, Server, Data Center), and Azure DevOps. The GitHub wizard creates an org app that reads code and pull requests, posts reviews, replies when mentioned, and commits fixes on request. After connect, Qodo indexes repos and PR history in the background. On a PR, `/agentic_review` is the main review, `/agentic_describe` summarizes, `/ask` answers questions about the diff. `/generate_labels` is GitHub, GitLab, and Gerrit (hashtags on Gerrit). `/checks` (CI failures) is GitHub only. `@qodo` starts a thread. Asking Qodo to fix a finding starts a remediation agent that **opens a pull request**. GitHub and GitLab can also answer a question in a PR comment with no mention.
- **Agentic Toolbox:** local skills for review-before-PR, resolving findings, codebase context, and review standards. Interfaces: CLI, MCP, a Claude Code plugin, a Codex plugin, and a Kiro Power. Install (Node.js 20+): `curl -fsSL https://get.qodo.ai | sh` (Windows: the PowerShell installer). On-prem uses the command from that portal’s Home page. You can install without an account; **managed skills require Qodo sign-in**. The installer replaces a deprecated **Qodo Command** CLI (`@qodo/command`). Qodo Gen CLI is also deprecated. Qodo Command is not this toolbox.
- **Auth and tenancy:** the portal login is the admin path. Single-tenant portal hosts look like `app.yourcompany.st.qodo.ai`. Reviews run as the Qodo app on the forge. An unmigrated old GitHub app keeps working but misses rules, findings, and the Repositories page until you remove it and rerun the wizard.
- **Pricing (docs):** every workspace starts with a **14-day** trial (full product, unlimited usage). When it ends, usage stops unless billing is on. **Pro Teams** and **Enterprise** share one credit pool per workspace (unlimited users on Pro Teams). Dollar amounts and credit packs are on Qodo’s pricing page, not in this note.
- **Alternatives:** CodeRabbit or Greptile when you want a different hosted reviewer and already evaluated their forge coverage. Copilot code review when the seat is already GitHub-native. The toolbox when the coding agent should review locally with the same engine before the PR exists.
- **Caveats:** a remediation request creates a PR; do not treat a Qodo comment as a merge gate. Skills and MCP from the toolbox are another supply chain (`malicious-skills-supply-chain`). If Qodo is rate-limited, the skill guidance says to say so and continue with local evidence rather than retry in a loop.

## Sources

- [Install Qodo on GitHub](https://docs.qodo.ai/install-qodo/github) — accessed 2026-11-14
- [Git provider feature support](https://docs.qodo.ai/install-qodo/git-provider-feature-support) — accessed 2026-11-14
- [Pull request command reference](https://docs.qodo.ai/code-review/pr-command-and-interaction-reference) — accessed 2026-11-14
- [Agentic Toolbox overview](https://docs.qodo.ai/agentic-toolbox/agentic-toolbox-overview) — accessed 2026-11-14
- [Install the Agentic Toolbox CLI](https://docs.qodo.ai/agentic-toolbox/cli) — accessed 2026-11-14
- [Qodo pricing and usage](https://docs.qodo.ai/pricing-and-usage) — accessed 2026-11-14
- [Qodo Merge is now part of the platform](https://www.qodo.ai/formerly-qodo-merge/) — accessed 2026-11-14
