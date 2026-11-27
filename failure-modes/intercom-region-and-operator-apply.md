---
id: intercom-region-and-operator-apply
title: Intercom MCP missed the workspace, or Operator changed live config
kind: knowledge
tags: [intercom, support, mcp, fin]
status: active
updated: 2026-11-27
when_to_use: Intercom MCP connected and returned nothing, a note reopened a conversation, or Fin Operator published a change
---

## Summary

Intercom (`intercom`) MCP is US or EU only. The wrong regional host fails after the user clicks Allow. A bearer token never gets Fin Operator. `apply_proposals` writes live workspace configuration, and some of those changes cannot be undone. Tool annotations ask a careful client to confirm. They do not block the call. Search defaults to five results, so a short page is not an empty inbox.

## Notes

- **Region and auth.** `app.intercom.com` is US and uses `https://mcp.intercom.com/mcp`. `app.eu.intercom.com` uses `https://mcp.eu.intercom.com/mcp`. Australia-hosted workspaces have no server. Connecting an EU workspace to the US host can show “We're having technical difficulties” after Allow. Remove the connection and use the matching host. The consent page expires after 15 minutes, and only one connection can be pending in a browser. The application name on that page is not verified. Check the redirect address before Allow. A bearer token can read and can write articles and internal notes when the token’s app has those scopes. It cannot call Fin Operator. An OAuth grant from before a permission was added must be reconnected. Newly granted Operator access can take up to an hour to list the tools unless the user reconnects.
- **Operator writes are live.** `send_operator_message` returns when Operator accepts the turn. It does not wait for the answer. Do not send the same message again. A bare `error:` can mean the turn started anyway. Open `chat_url` before retrying. `get_operator_response` is read-only and spends the same 60-calls-per-minute connection budget as the other Operator tools. An empty `proposals` array means nothing only when `proposals_withheld` is false. `apply_proposals` creates, updates, or deletes real objects, up to five proposals a call, on the same path as Apply in Intercom. The default mode leaves a new entity as a draft and keeps an existing entity’s publication state. `publish`, `release`, and `destroy` run only when a person chose that mode. `reject_proposals` drops the suggestion and does not change the workspace. Annotations such as `destructiveHint` are hints. A client that applies without asking is misconfigured, and the server still performs the call.
- **Smaller writes that surprise.** `create_article` defaults to draft, and `state: published` publishes. `add_internal_note` does not message the customer. On a snoozed conversation assigned to someone else, the note unsnoozes it. A ticket’s displayed number is not its id. Pass the numeric id or the inbox URL. Search and list tools default to five conversations or contacts. Ask for a higher `limit` before treating the inbox as empty. There is no ongoing free plan. After the 14-day trial, sending and Fin need a paid seat and a card.

## Sources

- [Intercom MCP](https://developers.intercom.com/docs/guides/mcp) — accessed 2026-11-27
- [Fin Operator tools](https://developers.intercom.com/docs/guides/fin-operator-mcp) — accessed 2026-11-27
- [Intercom rate limiting](https://developers.intercom.com/docs/references/rest-api/errors/rate-limiting) — accessed 2026-11-27
- [Intercom pricing](https://www.intercom.com/pricing) — accessed 2026-11-27
