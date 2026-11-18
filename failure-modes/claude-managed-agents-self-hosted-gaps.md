---
id: claude-managed-agents-self-hosted-gaps
title: A self-hosted Managed Agents server rejects hosted features and drops URL images silently
kind: knowledge
tags: [claude, hosting, sandbox, migration]
status: active
updated: 2026-11-18
when_to_use: Moving a Claude Managed Agents app onto a server you host, or debugging a 400, a 404, or an image the model never saw
---

## Summary

Self-hosted Claude Managed Agents runs the same API as the hosted service, with a fixed list of exceptions. Nothing is copied across, including session history. A cloud environment, a file resource, an OAuth vault credential, and the Messages API on that server fail immediately. An image or document sent as a URL is accepted and then never shown to the model (`claude-managed-agents`).

## Notes

- **What you host.** Access is requested from the Anthropic account team. You run the server (`cma-server`), its database, and the workers. PostgreSQL **16** or later is the durable store. With no database the server keeps data in memory and a restart erases it. Workers poll the server and run shell and file tools. The worker does not isolate `bash`; isolation is the container or VM you place the worker in. Model calls still leave your network: the server sends the conversation, including tool inputs and results, to the inference provider (the Claude API by default). That call also carries session, agent, and environment ids.
- **Three credentials.** Applications and the `ant` CLI use a server API key (the stand-in for a Claude API key). The server alone holds the inference credential. Workers hold an environment key for one environment’s queue. Applications do not need the inference credential.
- **Requests that error.** A cloud environment returns **400**; only `self_hosted` environments exist. SDK calls to `/v1/messages` and `/v1/models` on your server return **404**. `file` resources are rejected, and `/v1/files` does not exist. `mcp_oauth` vault credentials are rejected; store a `static_bearer` and rotate it yourself. An agent that declares the prebuilt `docx`, `pdf`, `pptx`, or `xlsx` skills is rejected until you upload those skills yourself. There are no routes for scheduled deployments, dreams, or webhooks, so a worker that waits for a webhook never starts.
- **Requests that succeed and still drop data.** An `image` or `document` block with a `url` source, and an `image` block with a `file` source, are accepted. The model never sees them, and there is no error. Send `base64`, or `text` for a document. A custom tool result that does not fit the context window still gets HTTP **200**, and the session then ends with `session.error`. An MCP tool result larger than `mcp.max_result_bytes` (default **100 KiB**) is cut, the model is told it was cut, and the rest is discarded. The hosted service can save that full result to a file in a cloud sandbox; this server does not.
- **Defaults that refuse hosts.** `web_search` and `web_fetch` stay off until a server setting enables them. MCP hosts must be listed exactly under `mcp.allowed_hostnames` (empty by default, no wildcards, no subdomain match). A private DNS name is refused unless it is also under `mcp.private_hostnames` or you use the IP. Git hosts need the same kind of allowlist. `environment_variable` vault credentials are rejected until the egress gateway is on.
- **Status filter that matches nothing.** Model-call retries still appear on the event stream, and the session status stays `running`. A filter for `rescheduling` matches no sessions.

## Sources

- [Self-hosted Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/self-hosted) — accessed 2026-11-18
- [Differences from the hosted service](https://platform.claude.com/docs/en/managed-agents/self-hosted/differences) — accessed 2026-11-18
- [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview) — accessed 2026-11-18
