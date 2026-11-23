---
id: better-auth
title: Better Auth — TypeScript auth library, plus an optional dashboard
kind: tool
tags: [better-auth, auth, typescript, sessions]
status: active
updated: 2026-11-23
when_to_use: Adding email, social, or organization sign-in inside a TypeScript app instead of a hosted auth vendor
---

## Summary

**Better Auth** is a TypeScript library that runs in your app and stores users in a database you configure. Email and password and social sign-in are built in. Passkeys, organizations, SSO, and other methods are plugins. The library has no seat fee. **Better Auth Infrastructure** is a separate paid dashboard (audit logs, abuse detection, transactional email and SMS, self-service SSO) attached with `@better-auth/infra`. Use the library when auth should live in the repo. Use Clerk (`clerk`) or WorkOS (`workos`) when sign-in should stay a vendor product.

## Notes

- **Access.** Install from `links.get`. The server reads `BETTER_AUTH_SECRET` or `AUTH_SECRET` (at least 32 characters). If neither is set, development uses a fixed default documented on the options page; production throws. Sessions last 7 days by default and extend when used after `updateAge` (default 1 day). Cookies are `Secure` when the base URL is `https`, `SameSite=Lax`, and `httpOnly`. Passwords are hashed with scrypt unless you replace `hash` and `verify`.
- **Database.** Postgres, MySQL, SQLite, and Drizzle, Prisma, and MongoDB adapters are supported. A stateless mode exists with no database; most plugins still need one. The CLI `migrate` command creates tables only for the built-in Kysely adapter. Other adapters generate a schema and you migrate with the ORM. CommonJS is not supported. Mount the handler on `/api/auth/*` unless you change the base path, and do not let the framework parse the body before that handler.
- **Origins and direct calls.** Only the base URL is trusted until you set `trustedOrigins`. Requests from other origins are rejected. A wildcard with no scheme, such as `*.example.com`, accepts any protocol. Do not leave `http://localhost:3000` on a production list. Calls you make through `auth.api` skip the handler’s CSRF checks and skip the `trustedOrigins` check on `callbackURL`, `errorCallbackURL`, `newUserCallbackURL`, and `redirectTo`. `advanced.disableOriginCheck` also turns CSRF protection off. `advanced.trustedProxyHeaders` derives the base URL from `X-Forwarded-Host` and `X-Forwarded-Proto` only when no static `baseURL` is set, and only if clients cannot forge those headers.
- **Rotation.** Versioned keys go in the `secrets` option or `BETTER_AUTH_SECRETS`. The first entry encrypts new data; later entries only decrypt. The singular secret then only decrypts legacy bare-hex payloads from before the envelope format. Keeping it does not preserve in-flight OAuth or SAML state cookies, or OAuth Proxy payloads, when you move from one shared key to purpose-specific keys. Details: `better-auth-secret-and-origin`.
- **Infrastructure (pricing page, 2026-11-23).** Optional. Starter is $0: 1 dashboard seat, 10,000 audit logs a month kept 1 day, 1,000 security detections. Pro is $20 a month: unlimited seats, 20,000 audit logs then $0.0001 per event (7-day retention), 10,000 detections then $0.001, one self-service SSO connection and one Directory Sync connection then $50 a month each, email at $0.001 and SMS at $0.09. A custom dashboard domain and a log drain are $25 a month each. Enterprise is custom. The transactional email doc’s plan table also has a Business column that this pricing page does not list. `dash()` does not send those emails; you pass `sendEmail`, and a failed send returns `success: false` instead of throwing. Dashboard sign-in is `https://dash.better-auth.com/sign-in`.
- **Rate limits.** Built-in limits read `X-Forwarded-For`. A client can set that header. Per-client limits work only if your proxy replaces the header, or if proxies append to it and you list them in `trustedProxies`.
- **Alternatives.** Clerk (`clerk`) for hosted users, organizations, and a dashboard MCP. WorkOS (`workos`) when customers bring an identity provider. Supabase (`supabase`) when Auth should sit on that project’s Postgres.

## Sources

- [Better Auth installation](https://better-auth.com/docs/installation) — accessed 2026-11-23
- [Better Auth options](https://better-auth.com/docs/reference/options) — accessed 2026-11-23
- [Better Auth security](https://better-auth.com/docs/reference/security) — accessed 2026-11-23
- [Better Auth Infrastructure](https://better-auth.com/docs/infrastructure/introduction) — accessed 2026-11-23
- [Better Auth pricing](https://better-auth.com/pricing) — accessed 2026-11-23
- [Better Auth email service](https://better-auth.com/docs/infrastructure/services/email) — accessed 2026-11-23
- [Better Auth](https://better-auth.com/) — accessed 2026-11-23
