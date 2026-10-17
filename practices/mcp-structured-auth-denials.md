---
id: mcp-structured-auth-denials
title: MCP structured authorization denials — SEP-2643 envelope
tags: [mcp, oauth, auth, extensions]
status: draft
updated: 2026-10-17
when_to_use: Returning a richer-than-403 MCP auth denial (URL approval, out-of-band task, or step-up credential)
---

## Summary

**SEP-2643** (open proposal, Extensions Track, **awaiting sponsor**) defines a transport-agnostic **authorization denial envelope** for MCP. It sits next to HTTP `WWW-Authenticate` + Protected Resource Metadata: a failure class, a remediation **posture**, a retry correlation handle, and typed hints. Not request-time `insufficient_scope` (`mcp-scope-challenges`) and not a frozen spec — field names may still change.

## Notes

- Envelope is **additive**. Existing OAuth clients keep working. Intended `_meta` home is `io.modelcontextprotocol/authorization` on the result (FGA WG discussions also mention moving `AuthorizationDenial` there). Do not treat a free-text error string as the remediation channel — models will try to self-escalate.
- Three hint families in the current draft (further types can land in follow-on SEPs without changing the envelope):
  - **URL approval** — user finishes a decision at a URL; compose with URL-mode elicitation / MRTR (`mcp-elicitation-modes`, `mcp-mrtr-input-required`).
  - **Out-of-band task** — a reviewer, policy engine, or ticket system decides; compose with Tasks (`mcp-tasks-extension`). SEP-2848 (also draft) would return a task handle instead of failing when the denial is requestable.
  - **New credential** — broader OAuth scopes, Rich Authorization Requests (RFC 9396), or a short-lived single-transaction credential. Compose with step-up (`mcp-oauth-scopes`, `mcp-scope-challenges`).
- Headless coding-agent case (review discussion): a mission-scoped token cannot obtain the missing authority itself. A proposed extra posture (`principal_required`) would carry **no** hints and would go to the operator, not the model. Not in the envelope yet — do not implement it as if it were.
- Status as of 2026-10-15: still `proposal`, no official SDK reference. Hold fleet claims until a sponsor + reference impl (`mcp-extensions-framework`).

## Sources

- [SEP-2643: Structured Authorization Denials](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2643) — accessed 2026-10-17
- [SEP-2848: Asynchronous Approval for Tool Calls](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2848) — accessed 2026-10-17
- [MCP Spec TPM — SEP-2643](https://plan.modelcontextprotocol.io/seps) — accessed 2026-10-17
