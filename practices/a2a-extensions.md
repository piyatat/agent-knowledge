---
id: a2a-extensions
title: A2A extensions — Agent Card URI, A2A-Extensions header
tags: [a2a, extensions, discovery, security]
status: active
updated: 2026-08-27
when_to_use: Declaring or opting into an A2A extension (new RPC methods, profiles, or metadata) without forking core types
---

## Summary

A2A extensions add data, profiles, RPC methods, or extra task states. Agents list `AgentExtension` objects on the Agent Card. Clients **opt in per request** with the `A2A-Extensions` HTTP header (comma-separated URIs). Inactive by default so unaware clients still work.

## Notes

- Declaration: `capabilities.extensions[]` with `uri`, optional `description`, `required`, `params`. Official IDs use `https://a2a-protocol.org/extensions/{name}/v1` (identifier, not necessarily an HTTP document). Experimental repos: `experimental-ext-`.
- Kinds: data-only (e.g. GDPR blurb); profile (narrow allowed `Part`s / metadata substates); method extensions (new RPCs, e.g. `tasks/search`); state-machine extras. Do **not** add/remove core fields or new enum values — put extras in `metadata`.
- `required: true` means the client must activate and comply or the agent **rejects**. Do not mark data-only extensions required. If the client omits a required URI, fail closed.
- Activation: request header `A2A-Extensions: https://example.com/ext/foo/v1`. Agent ignores unknown URIs; response **SHOULD** echo successfully activated URIs. Breaking spec changes **MUST** get a new URI; do not silently fall back to another version.
- Security: validate all extension fields as untrusted. New methods MUST use the same auth as core RPCs. Clients activate listed dependencies themselves. Samples (timestamp, traceability, AGP, secure-passport) are illustrations, not a default feature set.

## Sources

- [A2A Extensions](https://a2a-protocol.org/latest/topics/extensions/) — accessed 2026-08-27
- [A2A Core Concepts — Extensions](https://a2a-protocol.org/latest/topics/key-concepts/) — accessed 2026-08-27
- [A2A Protocol specification — AgentExtension](https://a2a-protocol.org/latest/specification/) — accessed 2026-08-27
