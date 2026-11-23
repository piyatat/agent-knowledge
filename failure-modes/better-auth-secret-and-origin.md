---
id: better-auth-secret-and-origin
title: Replacing the Better Auth secret drops sessions, or a redirect skips the origin check
kind: knowledge
tags: [better-auth, auth, secrets, csrf]
status: active
updated: 2026-11-23
when_to_use: Sessions died after a Better Auth secret change, a callback URL was accepted from an untrusted site, or rate limits ignore the real client IP
---

## Summary

Better Auth (`better-auth`) encrypts and signs with `BETTER_AUTH_SECRET`. Replacing that single value does not keep old ciphertext readable. Versioned `BETTER_AUTH_SECRETS` does, for data encrypted under a key you still list. Calls through `auth.api` skip the origin checks the HTTP handler would have applied, and `disableOriginCheck` also turns CSRF protection off.

## Notes

- **One secret versus a ring.** The server looks for `BETTER_AUTH_SECRET`, then `AUTH_SECRET`. If neither is set, non-production uses a fixed default named in the options docs. Production throws. Set a 32-character or longer secret before any real user exists. To rotate, put the new key first in `secrets` or in `BETTER_AUTH_SECRETS` (`2:new,1:old`). The first entry encrypts. Later entries only decrypt. Versions are integers and gaps are allowed. After `secrets` is set, the singular secret only decrypts legacy bare-hex payloads from before the envelope format. It does not keep in-flight OAuth or SAML state cookies, or OAuth Proxy payloads, when you switch from one shared key to purpose-specific keys. Upgrade the servers together and restart sign-in flows that started before the cutover. Swapping the env var and redeploying invalidates data the old key encrypted.
- **Origins.** Until you set `trustedOrigins`, only the base URL is trusted. A pattern with no scheme matches any protocol. A pattern with `https://` rejects `http://` even when the host matches. Relative redirects must start with a single `/`. Protocol-relative URLs (`//…`) are rejected. Remove localhost from a production list. `advanced.disableCSRFCheck` drops origin and Fetch Metadata checks only. `advanced.disableOriginCheck` drops URL checks and, for compatibility, CSRF as well. There is no switch that drops redirect checks and leaves CSRF on.
- **`auth.api` is not the handler.** CSRF and the `trustedOrigins` check on `callbackURL`, `errorCallbackURL`, `newUserCallbackURL`, and `redirectTo` run for requests that reach `auth.handler`. A direct `auth.api` call skips them, even if you pass the browser’s headers. If your own route changes state for a cookie session, check the `Origin` yourself or forward the request to the handler. `isTrustedOrigin` uses the origins resolved at startup. A `trustedOrigins` function that depends on the request is not included unless you add that yourself.
- **Who the rate limit sees.** Limits read `X-Forwarded-For`, which the client can set. They stick to one client only when the proxy overwrites that header, or when proxies append and you list them in `trustedProxies`. `trustedProxyHeaders` builds the base URL from `X-Forwarded-Host` and `X-Forwarded-Proto` when no static base URL is configured. Enable it only if end users cannot set those headers. A static `baseURL` wins and the forwarded host is ignored.
- **Schema and mail, briefly.** `migrate` writes tables only for the built-in Kysely adapter. Drizzle, Prisma, and MongoDB need `generate` and that tool’s migration. Infrastructure `dash()` does not send mail. `sendEmail` returns `success: false` on failure instead of throwing. The email doc’s plan table includes a Business column; the pricing page lists Starter, Pro, and Enterprise only.

## Sources

- [Better Auth options](https://better-auth.com/docs/reference/options) — accessed 2026-11-23
- [Better Auth security](https://better-auth.com/docs/reference/security) — accessed 2026-11-23
- [Better Auth installation](https://better-auth.com/docs/installation) — accessed 2026-11-23
- [Better Auth email service](https://better-auth.com/docs/infrastructure/services/email) — accessed 2026-11-23
- [Better Auth pricing](https://better-auth.com/pricing) — accessed 2026-11-23
