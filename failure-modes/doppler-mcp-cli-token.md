---
id: doppler-mcp-cli-token
title: Doppler MCP used an account-wide token, or a restricted secret came back
kind: knowledge
tags: [doppler, secrets, mcp, billing]
status: active
updated: 2026-11-25
when_to_use: A Doppler agent printed secret values, changed the wrong project, or a Developer workplace rejected another user
---

## Summary

The Doppler (`doppler`) MCP server is experimental. Its login stores a CLI token that can read and write every resource on the account, and its tools include reading secret values. Hiding write tools or pinning a project on the command line does not change what that token can do. A restricted secret stays hidden from that CLI token and is returned to a service token. Developer includes 3 users on the pricing page and caps the workplace at 25 on the limits table.

## Notes

- **What the login is.** Browser login creates a CLI token, or accepts an existing token, and stores it in the operating-system keyring. A CLI token and a personal token both have account-wide read/write. The service-token guide says not to use either in a live environment. A service token is one config and is read-only unless write was opted in when it was generated; the API reference describes that same token as read or read/write. The secret is shown once. Service account tokens, which can be narrower, are not on the Developer limits row.
- **Flags are not scopes.** `--read-only` omits write tools so the model is less likely to call them. The MCP page says this does not stop writes through another path. `--project` and `--config` narrow the server’s default and are not a guarantee the agent cannot work around them. Enforcement is the token the API sees. Putting a write-capable service token in `DOPPLER_TOKEN` therefore allows updates to that one config even when the tool list looks limited, and it can read restricted secrets.
- **Restricted values.** After a secret is saved as restricted, the dashboard never shows it again. Programmatic reads succeed only for a non-user token. A personal or CLI token receives HTTP 403 on secrets download. A user who can create a service token, or a reference to the restricted secret in a config where they can create one, can still reveal it. Masked secrets are hidden in the dashboard until a click and are still returned to every token type, including MCP.
- **Seats and 429s.** Price the included seats from the pricing page (3, then $8 per additional user on Developer; Team is $21 per user after 14 days). Cap the workplace from the platform-limits table (25 users on Developer, 500 on Team). Agents are not an extra seat. Activity on Developer is kept 3 days, so an older change is not in the log the MCP can read. Developer rate limits are 240 reads, 120 secret reads, and 60 writes per minute per access token. The API reference also applies a per-IP limit that can differ when authentication fails. HTTP 429 includes `retry-after`.

## Sources

- [MCP server](https://docs.doppler.com/docs/mcp) — accessed 2026-11-25
- [API reference](https://docs.doppler.com/reference/api) — accessed 2026-11-25
- [Service tokens](https://docs.doppler.com/docs/service-tokens) — accessed 2026-11-25
- [Secret visibility](https://docs.doppler.com/docs/secret-visibility) — accessed 2026-11-25
- [Platform limits](https://docs.doppler.com/docs/platform-limits) — accessed 2026-11-25
- [Doppler pricing](https://www.doppler.com/pricing) — accessed 2026-11-25
