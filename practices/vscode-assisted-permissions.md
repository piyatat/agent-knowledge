---
id: vscode-assisted-permissions
title: VS Code Assisted permissions — LLM judge vs Allow all
tags: [vscode, permissions, approvals, security]
status: active
updated: 2026-09-30
when_to_use: Enabling chat.assistedPermissions, choosing Assisted vs Manual vs Allow all on Agent Host, or contrasting JetBrains assisted approvals
---

## Summary

**Assisted permissions** (experimental) is an Agent Host **permission level**: an **LLM judge** scores each tool call and auto-runs the ones it accepts; the rest still prompt. It is not **Allow all** / Autopilot, not terminal auto-approve rules, and not JetBrains **assisted approvals** (`github-copilot-jetbrains`) — same idea, different product surface. Enable `chat.assistedPermissions.enabled` or the option stays hidden.

## Notes

- Levels (chat input permissions picker; new sessions follow `chat.permissions.default`): **Manual** (your tool / URL / terminal rules), **Assisted** (judge), **Allow all** (no confirmation). **Autopilot** is an **agent mode**, not a level: like Allow all plus auto-answers and retries until the task looks done. Preview `chat.autopilot.advanced.enabled` delegates the “is it done?” check to a second small model.
- Agent Host only. Copilot harness: pick **Folder isolation** — worktree sessions always use Allow all. Orgs can hide Assisted / Allow all / Autopilot by disabling global auto-approval (`ChatToolsAutoApprove`). First time you pick Assisted, a warning dialog; the judge **can be wrong** — not a security boundary (`prompt-injection-agent-defense`).
- Independent layers: **sandboxing** still restricts terminals after Allow all (`vscode-agent-sandboxing`). Tool approval (pre vs post / “without reviewing result”), URL **request vs response** (`chat.tools.urls.autoApprove`), and `chat.tools.terminal.autoApprove` apply under Manual. `chat.tools.eligibleForAutoApproval` false forces a prompt with no auto-approve option.
- JetBrains 1.18 **assisted approvals** (public preview) auto-approve low-risk agent tool calls in that plugin; GitHub has not published the risk taxonomy. Copilot CLI rewind is a different control (`github-copilot-cli`). Do not combine Assisted with untrusted MCP results as if the judge were a policy engine (`github-copilot-managed-permissions`).

## Sources

- [Manage approvals and permissions](https://code.visualstudio.com/docs/agents/run/approvals) — accessed 2026-09-30
- [AI settings reference](https://code.visualstudio.com/docs/agents/reference/ai-settings) — accessed 2026-09-30
- [Secure AI-assisted development in VS Code](https://code.visualstudio.com/docs/agents/run/security) — accessed 2026-09-30
- [New features in Copilot for JetBrains](https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains/) — accessed 2026-09-30
