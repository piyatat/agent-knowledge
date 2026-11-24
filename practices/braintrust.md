---
id: braintrust
title: Braintrust — traces, evals, and Loop
kind: service
tags: [braintrust, evals, observability, tracing]
status: active
updated: 2026-11-24
when_to_use: Tracing agent runs and scoring experiments in Braintrust instead of a self-hosted collector
---

## Summary

**Braintrust** is a hosted platform for agent traces, datasets, experiments, and online scores. You instrument with an SDK or the `bt` CLI, then compare runs in the UI. It is not Langfuse (`langfuse`), which you can self-host, and not Inspect (`inspect-ai`), which runs evals as local Python tasks. Use Logfire (`logfire`) when the meter is OpenTelemetry records next to Pydantic AI.

## Notes

- **Access.** Sign up at braintrust.dev. Create an API key under Settings → API keys. The key is shown once, inherits the creating user’s permissions, and defaults to a one-year expiry that cannot be changed later. A key with no expiry never expires. Set `BRAINTRUST_API_KEY`. Owners can list and delete every member’s keys. You cannot create keys through the API.
- **Install.** Python SDK needs Python 3.10+: `pip install braintrust` (and `autoevals` for built-in scorers). TypeScript: `npm install braintrust autoevals`. The `bt` CLI is a separate binary: the docs’ macOS/Linux installer is `curl -fsSL https://bt.dev/cli/install.sh | bash`, with a PowerShell installer on Windows and `npm install -g @braintrust/bt`. `bt eval` is documented for Linux and macOS only. Go, Ruby, Java, and C# SDKs exist for instrumentation.
- **Evals.** An experiment is a project name, a dataset of inputs and expected outputs, a task function, and scorers (`Eval` in TypeScript, the Python equivalent). Run from code or `bt eval`. Remote evals keep that task on your machine or server and let the playground trigger it. Sandboxes (public preview) run a pushed bundle in AWS Lambda by default, or on Modal for TypeScript only, and require **Pro or Enterprise**. The preview warning says the sandbox API can change.
- **Plans.** Starter is $0 platform fee: 1 GB processed data per month ($4/GB after), 10k scores ($2.50 per 1k), 14-day retention for logs and playground data, $10 of model credits. Pro is $249/month: 5 GB ($3/GB), 50k scores ($1.50 per 1k), 30-day retention, $100 credits. Enterprise is custom and includes bring-your-own-cloud. Experiments keep up to 365-day retention on every plan. Processed bytes are counted at ingestion; deleting data does not give the gigabytes back. Built-in models need a work-email owner or a payment method on Starter; calling them through the gateway needs Pro or Enterprise.
- **Alternatives.** Langfuse when the trace store must run in your VPC on the open-source server. Promptfoo (`promptfoo`) for CI regression and red-team config in git. Inspect when the eval is a Python task with a sandbox and no Braintrust project.
- **Caveats.** A leaked key is that user. Short-lived scripts still need the SDK to flush, same as other trace exporters (`agent-observability-otel`). Sandbox evals are preview. Starter retention is 14 days for logs — export anything you must keep longer.

## Sources

- [Get started with Braintrust](https://docs.braintrust.dev/) — accessed 2026-11-16
- [Plans and limits](https://docs.braintrust.dev/plans-and-limits) — accessed 2026-11-16
- [Authentication](https://docs.braintrust.dev/admin/authentication) — accessed 2026-11-16
- [Evaluation quickstart](https://docs.braintrust.dev/evaluation-quickstart) — accessed 2026-11-16
- [CLI quickstart](https://docs.braintrust.dev/reference/cli/quickstart) — accessed 2026-11-16
- [Remote evals and sandboxes](https://docs.braintrust.dev/evaluate/remote-evals) — accessed 2026-11-16
- [Install and instrument (Python)](https://docs.braintrust.dev/sdks/python/install-and-instrument) — accessed 2026-11-16
