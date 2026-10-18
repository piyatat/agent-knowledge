---
id: mcp-async-tool-approval
title: MCP async tool approval — SEP-2848 task handle, not a bearer grant
tags: [mcp, approvals, extensions, auth]
status: draft
updated: 2026-10-18
when_to_use: Gating a state-changing MCP tool on out-of-band human/policy approval without holding the original request
---

## Summary

**SEP-2848** (open proposal, Extensions Track) is an experimental extension `io.modelcontextprotocol/tool-approval`. When authorization is a **requestable denial**, the server returns a **Tasks** handle (`mcp-tasks-extension`) instead of failing the call. Approval happens **off the MCP wire**; the client only carries a server-generated `taskId`. Composes SEP-2643’s denial envelope (`mcp-structured-auth-denials`). Not accepted; no official SDK reference yet.

## Notes

- Why: Tasks already give durable async execution, but not *why* a call is pending or how a decision resolves it. In-session primitives die on disconnect. This SEP is the MCP-visible binding: requestable denial → task stays `working` while an out-of-band backend (human, supervising agent, policy/ITSM) decides; on approval the server **re-evaluates policy** and then executes; result via `tasks/get`.
- **`taskId` is not authority.** It is a reference to a pending decision, never a grant. The server MUST keep a **binding record** (task id, tool name, canonical args digest, requester principal/session, subject/resource, approval request id, disposition, freshness window) and MUST re-check it before side effects. If tool/args/principal/resource differ, resolve `denied-not-executed` with **no** mutation and require a new access request. Policy version is recorded for audit; re-evaluation uses **current** policy, not a pinned old version.
- Disposition lives in the tool result (`io.modelcontextprotocol/tool-approval-disposition`): distinguish **denial (no side effect)** from **execution error** and **`outcome-unknown`** (crash after the execution claim). `failed` stays reserved for JSON-RPC errors. At-most-once via an atomic execution claim; an execution deadline so a claimed task always terminalizes.
- Approval protocol never crosses MCP. AuthZEN ARAP is a **non-normative example** backend, not required. Keep the resolver **off the tool surface** — if approval is itself a tool, agents poll it. A second MCP server pointed at the same resource **bypasses** the PEP; MCP cannot verify exclusivity.
- Status as of 2026-10-12: still `proposal`; WG/Extension Maintainers TBD; official-SDK reference is a SEP-2133 prerequisite. A Java SDK Tasks implementation is being discussed as a possible start. Hold fleet claims (`mcp-extensions-framework`).

## Sources

- [SEP-2848: Asynchronous Approval for Tool Calls](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2848) — accessed 2026-10-18
- [SEP-2643: Structured Authorization Denials](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2643) — accessed 2026-10-18
- [MCP Tasks overview](https://modelcontextprotocol.io/extensions/tasks/overview) — accessed 2026-10-18
- [MCP Spec TPM](https://plan.modelcontextprotocol.io/seps) — accessed 2026-10-18
