---
id: replicate
title: Replicate — run a published model on a prepaid credit balance
kind: service
tags: [replicate, models, inference, mcp]
status: active
updated: 2026-11-26
when_to_use: Running a model published on Replicate, including a community model, from an agent or the Replicate MCP server
---

## Summary

**Replicate** runs published models through an HTTP API. Public models bill the time they are actively processing, on hardware shared with other customers. Most private models, and deployments, also bill setup and idle time. The account buys prepaid credit. At a zero balance, new work stops. Prediction inputs and outputs created through the API are removed after one hour. The hosted MCP server is `https://mcp.replicate.com/sse` and can call that HTTP API, including creating a prediction. Use Replicate when the model is published there. Use fal (`fal`) for fal’s media catalog. Use Hugging Face Inference Providers (`huggingface-inference-providers`) when one token should fail over across chat and embedding hosts.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-26 that page stayed on the URL (title “Sign in | Replicate”) and offers GitHub. The marketing site’s “Try for free” link points at the same page. Creating an account also creates a default API token. Tokens are 40 characters, start with `r8_`, and have no narrower scope: the token acts as the user or organization that owns it. Replicate disables a token it finds in a public GitHub repository and emails the account. Manage tokens from the account API-tokens page linked in the HTTP docs.
- **MCP.** The hosted server speaks the HTTP API: search and get models, create and fetch predictions, and the other operations. The hosted page’s Claude connector flow asks you to paste an API token. Its Claude Code flow uses browser sign-in after the SSE server is added. Its Codex example runs the local `replicate-mcp` package with the token in the environment. There is no read-only token on the token page, so a connected agent can spend credit. Experimental code mode is a local server only. It is not the hosted URL.
- **Price.** Credit is purchased up front, lasts one year from purchase, and is not refundable. Optional auto-reload has a minimum threshold of $5 and a minimum reload balance of $15. At zero, new work is refused and infrastructure Replicate is running for you is shut down. A prediction can still run past zero; the default card is charged at month end for that remainder. As the balance runs low, rate limits get stricter. The rate-limit page says to keep the balance above $20 with auto-reload to avoid that. Some models bill per output. On the pricing page, Flux 1.1 Pro is $0.04 per image. Others bill hardware time. That page lists CPU at $0.000100 per second and an Nvidia H100 at $0.001525 per second. Public models do not bill setup or idle, and they share a queue, so a call can cold-boot. A private model that is not a fast-booting fine-tune, and any deployment, bills setup, idle, and active time on dedicated hardware. A model that calls other models bills the root run and those downstream calls.
- **Limits.** Creating predictions is 600 requests per minute. Other endpoints are 3,000 per minute. Short bursts above those rates are allowed, then HTTP 429. Granted credit with no payment method on file is limited to 1 request per second and 6 requests per minute. The 429 body says the request was throttled and about how soon the limit resets. Select models can be tried before billing is set up; the billing page does not name a free dollar amount. API prediction inputs, outputs, files, and logs are deleted after one hour. Predictions made in the web UI stay until you delete them. Details: `replicate-credit-and-hour-retention`.

## Sources

- [Replicate billing](https://replicate.com/docs/topics/billing) — accessed 2026-11-26
- [Prepaid credit](https://replicate.com/docs/topics/billing/prepaid-credit) — accessed 2026-11-26
- [Replicate pricing](https://replicate.com/pricing) — accessed 2026-11-26
- [Rate limits](https://replicate.com/docs/topics/predictions/rate-limits) — accessed 2026-11-26
- [Data retention](https://replicate.com/docs/topics/predictions/data-retention) — accessed 2026-11-26
- [API tokens](https://replicate.com/docs/topics/security/api-tokens) — accessed 2026-11-26
- [Replicate MCP server](https://replicate.com/docs/reference/mcp) — accessed 2026-11-26
- [Replicate MCP](https://mcp.replicate.com/) — accessed 2026-11-26
- [HTTP API](https://replicate.com/docs/reference/http) — accessed 2026-11-26
- [Sign in to Replicate](https://replicate.com/signin) — accessed 2026-11-26
- [Replicate](https://replicate.com/) — accessed 2026-11-26
