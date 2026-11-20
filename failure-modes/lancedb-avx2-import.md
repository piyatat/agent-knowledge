---
id: lancedb-avx2-import
title: import lancedb crashes on older CPUs, or SQL is missing on Embedded
kind: knowledge
tags: [lancedb, install, limits, enterprise]
status: active
updated: 2026-11-20
when_to_use: A LanceDB import dies with Illegal instruction, or an embedded table has no SQL or Functions API
---

## Summary

The default `lancedb` wheel (`lancedb`) targets `x86-64-haswell` (AVX2, FMA, and F16C). On older x86_64 CPUs, `import lancedb` crashes with `Illegal instruction`. SQL and Functions in the same quickstart exist on LanceDB Enterprise, and Embedded is told to skip those steps.

## Notes

- **CPU baseline.** The quickstart names Intel Sandy Bridge, Ivy Bridge, and Westmere, and AMD Bulldozer, Piledriver, and Steamroller, as CPUs without AVX2 where the default wheel crashes. `lancedb-compat` exposes the same `import lancedb` API, is built at the `x86-64-v2` baseline, and still uses AVX2, FMA, or AVX-512 at runtime when the CPU has them. The two packages share the `lancedb/` namespace and conflict, so uninstall one before installing the other.
- **Embedded vs Enterprise features.** The 0.41.0 quickstart says a local database needs no account or API key. Step 5 (SQL) and the Functions section require Enterprise. Embedded should skip them. Enterprise connect needs the deployment URI, API key, and endpoint from an administrator or from LanceDB. The docs’ unversioned `/quickstart` URL redirects to the Enterprise quickstart, which is a different edition.
- **Pre-release index.** Preview wheels use LanceDB’s Fury index. The docs say those builds are tested like stable releases, and that availability is not guaranteed for more than six months. The preview index can also serve an old `pylance`. The quickstart says to install the `pylance` extra, and to set uv’s index strategy only for indexes you trust, so the resolver does not pin an older LanceDB.

## Sources

- [LanceDB Embedded quickstart (0.41.0)](https://docs.lancedb.com/oss/v0-41-0/quickstart) — accessed 2026-11-20
- [LanceDB Enterprise](https://docs.lancedb.com/enterprise/v1-12-0/enterprise) — accessed 2026-11-20
