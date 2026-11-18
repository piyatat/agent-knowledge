---
id: groq-retired-model-ids
title: Groq quickstart model ids already fail, and the rate-limit tables disagree
tags: [groq, models, deprecation, rate-limits]
kind: knowledge
status: active
updated: 2026-11-18
when_to_use: A Groq sample or old model id returns an error, or two Groq docs disagree on the developer rate limit
---

## Summary

Groq's own quickstart still calls `llama-3.3-70b-versatile`. That id, and several others the deprecation page once recommended as replacements, are shut down for free and developer accounts. The models page and the rate-limits page also publish different developer limits for the same id. Read the account Limits page and `GET /openai/v1/models` before pinning an id (`groq-cloud`).

## Notes

- **Quickstart is stale.** On **2026-11-18** the quickstart chat example and the AI SDK example both use `llama-3.3-70b-versatile`. The deprecation page shut that id down on **2026-08-16** for free and developer tiers, with `openai/gpt-oss-120b` as the replacement. The models page still lists `llama-3.3-70b-versatile` and `llama-3.1-8b-instant` as enterprise production models (contact sales). A free or developer key that copies the quickstart gets an error.
- **Replacement rows point at models that are also gone.** The **2026-08-16** and **2026-07-17** rows name `qwen/qwen3.6-27b` as a replacement. That id shut down on **2026-09-14**. `groq/compound` and `groq/compound-mini` shut down on **2026-09-21** with no replacement id. The current successor named for Qwen 3.6 is `qwen/qwen3.8-27b`, which the models page still marks **preview**: evaluation only, and it may be discontinued at short notice.
- **Who the shutdown hits.** Those deprecations apply to free and developer usage. The deprecation page says enterprise customers with a committed-spend contract are unaffected. Preview models, separately, can be removed with limited warning even before a dated shutdown.
- **Two limit tables.** The models page labels developer limits for `openai/gpt-oss-120b` and `openai/gpt-oss-20b` as **250K** tokens per minute and **1K** requests per minute. The rate-limits page, the same day, prints **30** RPM, **1K** RPD, **8K** TPM, and **200K** TPD for those ids, and its prose calls that table the developer base while also saying to upgrade to developer for higher limits. Cached tokens are excluded. The rate-limits page says the Limits page in account settings is the exact number. A **429** is the rate-limit status; `retry-after` is set only then.

## Sources

- [Quickstart](https://console.groq.com/docs/quickstart) — accessed 2026-11-18
- [Model deprecation](https://console.groq.com/docs/deprecations) — accessed 2026-11-18
- [Supported models](https://console.groq.com/docs/models) — accessed 2026-11-18
- [Rate limits](https://console.groq.com/docs/rate-limits) — accessed 2026-11-18
