---
id: copilot-sdk-shared-grants
title: A shared Copilot SDK runtime leaks tools, tokens, or remembered approvals
kind: knowledge
tags: [copilot, tenancy, permissions, sandbox]
status: active
updated: 2026-11-19
when_to_use: A multi-tenant Copilot SDK server reused another user's tools, filesystem, or remembered approvals
---

## Summary

The Microsoft Copilot SDK can host many sessions in one runtime (`github-copilot-sdk`). The default client mode is built for a CLI-like agent. On a server that serves more than one user, that default can expose the host filesystem, and a shared session-filesystem namespace shares remembered approvals.

## Notes

- **Default mode.** GitHub’s multi-tenancy guide says `mode: "copilot-cli"` is the wrong baseline for a shared server. It can expose ambient host filesystem tools. `mode: "empty"` starts without those tools, without bundled built-in skills, and without CLI defaults. The app then allow-lists tools, MCP servers, skills, and workspace paths. Forgetting empty mode is the guide’s first listed pitfall.
- **Identity.** A client-level token authenticates the runtime process. `gitHubToken` on the session is what scopes Copilot to that user (content exclusion, model routing, quota). One shared service token across users is service-account semantics, not per-user auth. Check ownership in your own database before `resumeSession` or `deleteSession`. Do not trust a session ID the client sends.
- **Remembered approvals.** With `sessionFs`, consent files live under the provider’s `sessionStatePath`. The runtime does not partition those files by session ID. Sessions that open the same files in the same provider namespace share remembered grants. Isolation is a distinct namespace per tenant or per session, plus an access check when you reconnect a resume to that namespace. URL deny rules stay authoritative. A provider error is not permission to fall back to the host’s consent files.
- **What SessionFS does not cover.** Shell tools do not run through SessionFS, and their commands are not checked against its virtual metadata paths. If the host also exposes the provider’s backing store to a shell, the host has to protect that store. The runtime’s block on direct writes to approval-metadata paths is defense in depth, not a tamper-proof boundary. Providers must not expose writable aliases to those files.
- **Storage that does not follow the client.** `baseDirectory` is ignored when the SDK attaches to a runtime that is already running. Set `COPILOT_HOME` on that process. `sessionIdleTimeoutSeconds` is what stops idle sessions from accumulating on a long-lived server.

## Sources

- [Multi-tenancy and server deployments](https://docs.github.com/en/copilot/how-tos/copilot-sdk/setup/multi-tenancy) — accessed 2026-11-19
- [microsoft/copilot-sdk README](https://github.com/microsoft/copilot-sdk) — accessed 2026-11-19
