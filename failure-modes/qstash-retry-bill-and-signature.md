---
id: qstash-retry-bill-and-signature
title: A QStash retry changed the bill, or the signature check failed
kind: knowledge
tags: [qstash, upstash, billing, webhooks]
status: active
updated: 2026-11-23
when_to_use: A QStash retry changed the message count, a signature check failed on a valid delivery, or a callback never returned
---

## Summary

QStash (`qstash`) retries any non-2xx response three times by default, and its pricing page disagrees with itself about whether those retries are billed. Signature checks fail when the verifier hashes a re-serialized JSON body, or when it expects the final URL after a redirect. A callback that runs longer than the plan’s HTTP limit is aborted and can be retried.

## Notes

- **Two bills on one page (2026-11-23).** The overview says you are charged only for messages and that retries are free. The pay-as-you-go details repeat “Retries: Free (only published messages count).” The FAQ on the same page says each delivery attempt counts as one message, so a failed attempt plus one successful retry is two messages. It also says a publish to a topic bills once per subscribed endpoint, and a schedule bills once each time it fires. Plan capacity against the FAQ, and re-read the pricing page before treating retries as free. The getting-started guide still describes a 1 MB body limit. Free is 1 MB; pay as you go is 10 MB; the fixed plans are 50 MB. A larger request body returns HTTP 412. A larger response is trimmed in the logs.
- **Retries.** The default is 3 retries after a non-2xx response. Backoff is `min(86400, e^(2.5*n))` seconds: about 12 seconds, then about 2.5 minutes, 30 minutes, 6 hours, and then one day. `Upstash-Retries` changes the count for one message. Responding with HTTP 489 and `Upstash-NonRetryable-Error: true` skips the rest of the retries and sends the message to the dead-letter queue. `Retry-After` (or the documented rate-limit reset headers) can delay the next attempt, and a delay past one day falls back to the default backoff. If the endpoint does not finish within the plan’s max HTTP response duration, that attempt is aborted. Free allows 15 minutes, pay as you go 2 hours, Fixed 1M 6 hours, and Fixed 10M 12 hours.
- **Signature.** Deliveries carry `Upstash-Signature`, a JWT. Check it against the current signing key and the next signing key. `iss` must be `Upstash`. `sub` must be the destination URL you published, even when QStash followed a redirect. `body` is the SHA-256 of the raw body. A framework that parses JSON and a verifier that hashes `JSON.stringify` of that object will reject a genuine delivery. Store the signing keys as secrets. They are enough to send a request that looks like it came from QStash.
- **Pacing and caps.** Flow-control limits attach to the key you set, not to the URL. Two URLs that share a key share the limit. A rate without a period is 1 second. Parallelism counts calls that have not returned. Free allows 1,000 messages a day; the pricing FAQ calls the daily and bandwidth figures soft limits that become HTTP 429 only after sustained excess. Publish APIs do not have a requests-per-second cap. Log and DLQ APIs do.

## Sources

- [QStash pricing](https://upstash.com/pricing/qstash) — accessed 2026-11-23
- [QStash retry](https://upstash.com/docs/qstash/features/retry) — accessed 2026-11-23
- [Verify signatures](https://upstash.com/docs/qstash/howto/signature) — accessed 2026-11-23
- [QStash flow control](https://upstash.com/docs/qstash/features/flowcontrol) — accessed 2026-11-23
- [QStash getting started](https://upstash.com/docs/qstash/overall/getstarted) — accessed 2026-11-23
