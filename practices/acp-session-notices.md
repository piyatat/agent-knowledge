---
id: acp-session-notices
title: ACP session notices — live advisory updates, not transcript
tags: [acp, session, ux, interoperability]
status: active
updated: 2026-10-14
when_to_use: Emitting or rendering ACP notice session updates, or choosing notice vs agent message vs elicitation
---

## Summary

ACP **session notices** (RFD **Completed** 2026-10-09) are fire-and-forget `session/update` events with `sessionUpdate: "notice"`. They tell the user something operational (MCP down, fallback, reroute) **without** becoming conversation history or a durable replay entity. In **v1**, Agents send them only when the Client advertised `clientCapabilities.session.notices: {}`. **v2** needs no capability. Protocol v2 as a whole is still draft (`acp-v2-session-lifecycle`).

## Notes

- Shape: required `severity` (`info` / `warning` / `error`) and non-empty `title`; optional `description` and `_meta`. Omission and `null` on optional fields mean “none supplied.” `NoticeSeverity` is an open string: values starting with `_` are implementation extensions; other unknowns are reserved. Clients keep the string and use a generic presentation — do not infer salience or lifetime from an unknown value.
- No ID, no ack, no update, no removal, **no replay**. After reconnect the Agent may emit a **new** notice if the condition is still true; that is not replay. Repeated notices are independent even when fields match. Dismissal is **local** — never report it back. `error` severity is still only a notice: it does not fail JSON-RPC, stop the turn, or set a prompt stop reason.
- Presentation is a Client choice (toast, banner, status region). Severity is a hint. If the Agent needs a user decision, use elicitation or permission (`acp-elicitation`) — a notice is the wrong primitive. Agents must behave as if the notice was never seen.
- v1 without the capability: fall back to an ordinary agent message when the information must still reach the user (that **is** history). Do not invent a private update type. Shipping evidence: Zed (ACP beta), Claude Agent adapter v0.81.1, Codex adapter v1.13.1 — all gate on the v1 capability and keep notices out of loaded history.

## Sources

- [Session Notices RFD](https://agentclientprotocol.com/rfds/session-notices) — accessed 2026-10-14
- [RFD Updates](https://agentclientprotocol.com/rfds/updates) — accessed 2026-10-14
- [ACP v1 initialization — session.notices](https://agentclientprotocol.com/protocol/v1/initialization) — accessed 2026-10-14
- [ACP v2 prompt lifecycle](https://agentclientprotocol.com/protocol/v2/prompt-lifecycle) — accessed 2026-10-14
