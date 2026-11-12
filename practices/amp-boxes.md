---
id: amp-boxes
title: Amp Boxes — always-on VMs for deployed apps
tags: [amp, hosting, ops, security]
status: active
updated: 2026-11-12
when_to_use: Deploying an Amp app with amp boxes deploy, choosing a box vs an orb or portal, or sharing a workspace box
---

## Summary

An Amp **box** is an always-on Ubuntu 24.04 VM (20 GB disk) that runs the apps you built in orbs or on a runner. Ask Amp to deploy, or run `amp boxes deploy`. Each app gets its own URL (e.g. `https://bug-tracker--acme.onamp.dev`). The box also runs an Amp **runner**, so a thread can inspect logs, data, and the live process. Not a per-thread **orb** (pauses when idle), not a **portal** preview (`amp-portals`), and not Cursor Cloud Apps (`cursor-cloud-apps`). News: 2026-11-10.

## Notes

- Workflow: build in an orb/runner → agent writes `.amp/box.yaml` if missing, **pushes**, then `amp boxes deploy --on alice/workbench --name bug-tracker --create`. Later deploys read `.amp/box-deploy.json`. Uncommitted/unpushed files never reach the box. If the app does not listen on `PORT`, Amp rolls back to the previous release. The box keeps the live release plus the two before it.
- `.amp/box.yaml`: `build`, optional `source: false` + `artifacts` (ship only those paths; every service `cwd` must sit inside an artifact), `services.<name>.command`. Env on the box: `PORT`, `AMP_DEPLOYMENT_URL`, `AMP_DEPLOYMENT_NAME`, `AMP_DEPLOYMENT_BOX`, `AMP_DEPLOYMENT_DATA_DIRECTORY` (survives deploys; not visible at build). Secrets via `amp secrets set … --data-file` — never argv; redeploy after a change. Build does not see secrets.
- Many apps per box: different `--name`, own URL/secrets/data/user. systemd sandbox per app (no sudo, no package install, cannot read other apps’ files). **Not a security boundary** — shared CPU/memory/disk/network; apps can reach each other’s ports. Only co-host apps you would trust with each other’s data. An app is tied to its first repo; `--move` to change checkout.
- Personal `user/box` vs workspace `workspace/box`. Workspace boxes need Enterprise or Teams with a payment method. Every member can see/deploy/thread; only creator + admins delete/start/stop/schedule/see cost. Service-account `AMP_API_KEY` can deploy and exec, not create/delete/manage boxes or secrets. Workspace admins can disable **Allow Users to Create Boxes**.
- URLs are **public by default**. `--private` requires Amp sign-in (webhooks cannot hit a private app). Workspace **Allow Public Box Apps** off forces private, including personal boxes of members. Amp does **not** tell the app who opened it. `--widget` adds the in-page feedback widget (public apps: Cmd+. / Ctrl+. or triple-tap). `--domain host` after DNS is Active; `--take-over` moves a portal hostname onto the live app. A portal cannot take the hostname back.
- Sizes (billed per running minute; stopped = $0): `b1.tiny` 0.5 vCPU burst-to-2 / 2 GB / ~$18 per 30d; `b1.small` (default) 1/4 GB / $30; `b1.medium` 2/8 GB / $50; `b1.large` 4/16 GB / $100. Size is fixed; migrate by new box + `amp boxes cp`. Daily `--on/--off --tz` schedule; scheduled stop waits up to 30 min for threads/deploys. 100 GB/month egress; at the cap Amp stops the box until next UTC month. No public IP / SSH — use a thread, `amp boxes exec`, or `amp boxes cp`. Threads on the box’s `user` have sudo for system packages (shared by every app). `source: false` threads cannot edit code on the box.

## Sources

- [Boxes](https://ampcode.com/docs/boxes) — accessed 2026-11-12
- [Boxes (news)](https://ampcode.com/news/boxes) — accessed 2026-11-12
- [Portals & Desktop](https://ampcode.com/docs/orbs/portals) — accessed 2026-11-12
