---
id: sanity-mcp-writes-and-public-dataset
title: A Sanity agent published content, or Context MCP refused a project token
kind: knowledge
tags: [sanity, cms, mcp, auth]
status: active
updated: 2026-11-25
when_to_use: A Sanity agent published a draft, opened a dataset to the public, or a read-only content call returned 403
---

## Summary

The Sanity (`sanity`) server at `https://mcp.sanity.io` can publish documents, change dataset visibility, and create a project that comes with API tokens. Free-plan datasets are public, so unauthenticated clients can read them. Context MCP is a different, read-only server, and it rejects a project API token even when that token is valid for the dataset.

## Notes

- **Writes are real.** `publish_documents` makes drafts live. `unpublish_documents` moves them back. `discard_drafts` deletes drafts and leaves the published document. `patch_documents` writes the draft or a release version, never the published id, and it accepts at most 25 documents per call. `update_dataset` can set visibility to public, which allows unauthenticated reads, or to private on a plan that permits it. `create_project` creates a project, a dataset, and API tokens. `add_cors_origin` allows browser clients. Schema tools can deploy or delete types. A dry run is available on the granular schema edits; the publish and dataset tools are not described that way.
- **Checks the server skips.** When a schema is deployed, create and patch use a looser structural check. Publish is stricter. Custom validation rules are skipped, and the tool response says so. `documents_validate` is beta. A query result over 64 KiB errors instead of being truncated.
- **Two servers.** `mcp.sanity.io` is the editorial and project server. Context MCP, at `https://api.sanity.io/v2026-11-03/context/organizations/:organizationId/mcp/:mcpEndpointName`, cannot write. It needs an organization API token with Context Viewer (`sanity.knowledge-base.read`). A project token is refused with 403: a dataset source returns JSON-RPC `-32007`, and a Knowledge Base-only endpoint returns `-32006`. Query parameters such as `groqFilter` on that URL are refused; the filter belongs on the endpoint. A dataset source also needs a deployed Studio at v5.1.0 or later, or the connection fails with `-32004`. A `groqFilter` does not apply to documents reached by `->`.
- **Credits and sessions.** `generate_image` and `transform_image` spend AI credits. Most other tools on `mcp.sanity.io` do not. OAuth on that server typically lasts 7 days. A bearer token bypasses the consent screen and lasts until it is revoked. Logging out of the CLI revokes the token the CLI stored.

## Sources

- [Sanity MCP server](https://www.sanity.io/docs/ai/mcp-server) — accessed 2026-11-25
- [Context MCP reference](https://www.sanity.io/docs/context/mcp-reference) — accessed 2026-11-25
- [How AI credits work](https://www.sanity.io/docs/platform-management/how-ai-credits-work) — accessed 2026-11-25
- [Sanity pricing](https://www.sanity.io/pricing) — accessed 2026-11-25
- [Plans and payments](https://www.sanity.io/docs/platform-management/plans-and-payments) — accessed 2026-11-25
