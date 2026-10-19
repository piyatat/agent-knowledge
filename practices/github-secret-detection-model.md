---
id: github-secret-detection-model
title: GitHub secret-detection classifier — alerts, push protection, Copilot review
tags: [github, security, secrets, review]
status: active
updated: 2026-10-19
when_to_use: Enabling GitHub AI secret alerts or push protection, or adding Copilot /security-review secret checks beside gitleaks
---

## Summary

GitHub’s **purpose-built secret classifier** (announced 2026-10-07) scores regex candidates plus nearby code. It does **not** generate prose. Existing AI password **alerts** upgraded automatically (included in GHSP/GHAS). **Push protection** is private preview; Copilot **`/security-review`** secret checks are coming as an opt-in, credit-consuming add-on. Not a replacement for local/CI scanners (`agent-output-secret-scanning`).

## Notes

- Pipeline: regex candidate generation, then a fine-tuned **ModernBERT** classifier (ONNX, 8-bit) using the candidate, path, type, and bounded context. GitHub reports vs the prior LLM pipeline: **11.5%** higher owner-weighted acceptance, **86%** lower median post-push scan time, **>98%** lower serving cost. Offline: **13%** precision / **19%** recall on the same public traffic. False positives and misses still happen.
- Alerts: GHSP/GHAS customers were switched to the new model at **no extra charge**. GHES **3.23** public preview for alerts (included with GHSP/GHAS). Push protection for unstructured credentials: Enterprise Cloud / Teams with GHSP or GHAS; admin enable; **AI Credits** (Secret Protection AI Credits SKU) once public preview billing starts — a check can consume credits even if the push is not blocked.
- Copilot: `/security-review` in CLI/app stays a **read-only** specialist. Classifier checks will be **off by default** (running the command does not opt you in). No GHSP license required for the Copilot checks; they bill the Copilot plan’s AI Credits under GHSP in usage insights, **in addition** to the review’s existing usage. Agents must **not** enable credit-consuming features without authorization.
- Admins can disable via policy and set a SKU budget (Advanced Security → Secret Protection AI Credits). Budget alerts do not stop spend unless “Stop usage when budget limit is reached” is on. Pair with gitleaks/pre-commit — rotate if a secret lands in history.

## Sources

- [Purpose-built model for leaked secret detection](https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection/) — accessed 2026-10-19
- [GitHub’s model for secret detection](https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/) — accessed 2026-10-19
- [Secret protection must scale with software](https://github.blog/ai-and-ml/github-copilot/secret-protection-must-scale-with-software/) — accessed 2026-10-19
