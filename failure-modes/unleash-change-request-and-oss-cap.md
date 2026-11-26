---
id: unleash-change-request-and-oss-cap
title: An Unleash change never went live, or Open Source applied it immediately
kind: knowledge
tags: [unleash, flags, mcp, approvals]
status: active
updated: 2026-11-26
when_to_use: An Unleash flag did not match what the agent reported, a release was refused, or Open Source rejected a second project
---

## Summary

Unleash (`unleash`) does not mean the same thing by “the agent changed production” on every plan. Enterprise can park the edit in a change request, including someone else’s open draft. Open Source has no approvals, so the same prompt replaces the environment’s targets. The remote MCP server does not exist on Open Source.

## Notes

- **Change requests.** Where an environment requires them, release, kill-switch, and experiment tools file a request instead of applying it. The agent receives the id, the state, and a link. It cannot approve or apply the request. If a draft is already open, Unleash adds the agent’s edit to that draft, and the MCP server then submits the whole draft, including edits a person made. Inspect shows pending requests, so a waiting change is not the live configuration. A result of unknown means a custom strategy that only an SDK can evaluate. HTTP 401 is an expired or invalid token. Browser login lasts 24 hours. HTTP 403 is the role on that token.
- **Open Source applies the write.** The free self-hosted edition is one project, two environments, and 5,000 flags, with no change-request approvals. A release replaces that environment’s existing targets. The server refuses the write when those targets are something other than a gradual rollout, such as a user-id list or an IP constraint. A flag the server had to create stays off until a later enable or release. Archiving stops SDKs from receiving the flag, and they treat it as off, so archive only after nothing evaluates it.
- **Remote MCP and feedback.** The remote endpoint is Enterprise, and an admin has to enable it. That enablement allows clients to register themselves with dynamic client registration. Remote feedback reports default on for the whole instance, with no per-user prompt. The local server asks once. OpenCode, Antigravity, Gemini CLI, and a client that does not send its name do not show that prompt, and reports stay off until `UNLEASH_MCP_SEND_FEEDBACK` is set. Codex with `approval_policy` of `never`, or with elicitations turned off, answers the prompt itself and stores that choice. Reports are not sent for HTTP 401 or 403.

## Sources

- [Unleash MCP server](https://docs.getunleash.io/integrate/mcp) — accessed 2026-11-26
- [Unleash pricing](https://www.getunleash.io/pricing) — accessed 2026-11-26
