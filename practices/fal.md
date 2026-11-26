---
id: fal
title: fal — generative media APIs and a hosted MCP server
kind: service
tags: [fal, media, inference, mcp]
status: active
updated: 2026-11-26
when_to_use: Generating or editing images, video, or audio through fal Model APIs or the fal MCP server
---

## Summary

**fal** hosts generative models behind one API: image, video, audio, and 3D on Model APIs, and Python apps you deploy on fal Serverless. Model APIs draw a prepaid credit balance and bill per output, or per GPU-second when a model has no output price. The hosted MCP server at `https://mcp.fal.ai/mcp-relay` lets a coding agent search and run those models after a browser sign-in. Use fal when the job is media. Use Replicate (`replicate`) for a community model billed by hardware time. Use Mux (`mux`) when the video must be stored and played. Use Hugging Face Inference Providers (`huggingface-inference-providers`) when the job is chat or embeddings across open models. Serverless is a separate product and needs fal to approve the account.

## Notes

- **Access.** Sign in at `links.get`. That page stayed on the URL on 2026-11-25 and is titled Login to fal. The accounts page says GitHub, Google, or SSO creates the account. Google and GitHub with the same email merge. SSO with that email stays a second personal account, with its own keys and credits. A key is shown once, belongs to the account (personal or team), and is sent as `Authorization: Key`. The `API` preset covers model calls. `SERVERLESS` adds deploy and run. A team key is shared by every member of that team.
- **Model API price.** Each model publishes its own unit (image, megapixel, video second, or request). Server errors (HTTP 500 and above), queue wait, and Model API cold starts are not billed. A client error such as HTTP 422 can still be billed if a runner spent GPU time. `content_policy_violation` is a non-retryable 422. Purchased credits expire 365 days after purchase. Free credits and coupons expire somewhere between one week and one year, per grant. When the balance falls below the account’s lock threshold, the account locks and API calls are rejected. Invoice enterprise accounts are not locked that way. Generated file URLs are public by default and kept at least 7 days. Partner-hosted models do not take the usual percentage discount on a direct API call.
- **Concurrency.** A new account may have 2 requests in `IN_PROGRESS` at once, across endpoints. Paid invoices from the last four weeks raise that, up to 40 on self-serve. Queued requests do not count. fal may also cap a busy model. Calls to your own Serverless endpoints are outside this limit. The client retries a direct `run` after HTTP 429 up to 10 times. A queued subscribe keeps requeueing until a slot opens, unless `start_timeout` expires. A raw HTTP 429 with type `concurrent_requests_limit` also sets `X-Fal-needs-retry: 1` and does not retry itself.
- **MCP.** The server is stateless and free to call. Model runs bill at the normal rates. Browser sign-in is the path. An older setup that sent an API key in `Authorization` now returns 401. A client that cannot do MCP OAuth sends `Authorization: Key` with the key id and secret to the same URL. The bill lands on the Active MCP account, personal unless a team is selected under MCP and connectors. `estimate_cost` is advisory. `get_pricing` covers up to 50 endpoints. A batch submit is up to 8 jobs. An upload is up to 90 MB from a public URL, base64, or a signed upload. The hosted server cannot read a file on the agent’s disk.
- **Serverless.** GPUs bill per second while runners are alive, including time that is not a successful output. Deploy access is approved per account. That is not the Model API credit meter.

## Sources

- [fal Model API pricing](https://fal.ai/docs/documentation/model-apis/pricing) — accessed 2026-11-25
- [fal Model API FAQ](https://fal.ai/docs/documentation/model-apis/faq) — accessed 2026-11-25
- [fal concurrency limits](https://fal.ai/docs/documentation/model-apis/concurrency-limits) — accessed 2026-11-25
- [Get your fal API key](https://fal.ai/docs/documentation/setting-up/authentication) — accessed 2026-11-25
- [fal accounts and identity](https://fal.ai/docs/documentation/setting-up/accounts-and-identity) — accessed 2026-11-25
- [fal key-based authentication](https://fal.ai/docs/documentation/model-apis/authentication/key-based) — accessed 2026-11-25
- [fal MCP server](https://fal.ai/mcp) — accessed 2026-11-25
- [Login to fal](https://fal.ai/login) — accessed 2026-11-25
- [fal](https://fal.ai/) — accessed 2026-11-25
