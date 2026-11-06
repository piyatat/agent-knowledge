---
id: github-copilot-usage-metrics-review
title: Copilot usage metrics — code review addressed rate
tags: [github, observability, review, governance]
status: active
updated: 2026-11-06
when_to_use: Reading copilot_code_review on repos-1-day usage-metrics rows, or computing an addressed rate for Copilot PR comments
---

## Summary

Copilot **usage metrics** (2026-11-05) add a **`copilot_code_review`** object on every enterprise and organization **`repos-1-day`** row: how many Copilot review comments developers **acted on**, and how many Copilot-reviewed PRs merged with **no later human change request**. This is the API/NDJSON surface, not the impact-dashboard industry widget (`github-copilot-impact-industry`) and not how to **run** reviews (`github-copilot-code-review`). Policy **Copilot usage metrics** must be on.

## Notes

- Fields: `total_comments_evaluated` (comments checked for action); `total_comments_addressed` (developer acted — apply suggestion, ask Copilot to fix, edit the code, or reply that the fix comes in a later PR). Addressed rate = addressed / evaluated. `total_merged_no_human_change_request_after_review` counts merged PRs Copilot reviewed where **no person** requested changes after Copilot’s first review.
- Breakdowns (both evaluated and addressed counts): `review_comments_by_severity` (`high` / `medium` / `low`), `review_comments_by_review_tier` (`lite` / `balanced` / `max`), `review_comments_by_comment_type` (`bug`, `security`, `custom`, …), `review_comments_by_customization` (custom instructions, skills, MCP servers, or none). Empty arrays and `0` when that repo had no Copilot code-review activity that day.
- Counted **on merge day**, not the day Copilot posted. Bot-opened PRs (including Copilot cloud agent) are usually **not** evaluated for comment action; `total_merged_no_human_change_request_after_review` **still includes** those PRs. Distinct from `pull_requests.total_copilot_applied_suggestions`, which counts only ready-to-apply suggestions someone clicked — the new counts include every evaluated comment and any form of action.
- Access: enterprise owners, billing managers, org owners, or a custom role with **View Copilot Metrics**. Use for repo-level trends, not audit or billing. History before this change does not gain the object.

## Sources

- [Usage metrics API adds code review details and addressed rate](https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate/) — accessed 2026-11-06
- [Data available in Copilot usage metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics) — accessed 2026-11-06
- [REST API endpoints for Copilot usage metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics) — accessed 2026-11-06
