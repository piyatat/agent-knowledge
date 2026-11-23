---
id: claude-plugin-marketplace-autoupdate
title: Managed Claude Code plugin marketplaces will auto-update after 30 November 2026
kind: knowledge
tags: [claude, plugins, supply-chain, marketplaces]
status: active
updated: 2026-11-23
when_to_use: A managed Claude Code marketplace should stay on a pinned commit, or a plugin gained extra plugins after an update
---

## Summary

Claude Code **2.1.331** (23 November 2026) warns that, on or after **30 November 2026**, plugin marketplaces listed in managed `extraKnownMarketplaces` auto-update by default (`claude-code-plugins`). Set `"autoUpdate": false` on an entry to keep it from moving. The same release lets a plugin declare `optionalDependencies` that install with it and can be removed on their own.

## Notes

- **The default flips for managed marketplaces.** The changelog’s “changed in a future release” line is the notice: marketplaces in managed `extraKnownMarketplaces` will auto-update unless that entry sets `"autoUpdate": false`. A marketplace pinned to a commit for supply-chain review (`malicious-skills-supply-chain`) will start taking newer plugin content after that date if the flag is absent. Set the flag before 30 November 2026 on every managed entry that must stay put. This is the managed list, which an administrator ships. It is separate from a marketplace a person added in their own settings.
- **Dependencies install, and they can be removed.** `optionalDependencies` in a plugin manifest names plugins that install together with the plugin that lists them. Each of those can be disabled or uninstalled on its own. The auto-update notice now lists plugins it newly installed as dependencies apart from plugins it updated. Review that list. A dependency is still code that runs with the user’s privileges.
- **A partial update used to load.** 2.1.331 fixes an interrupted or failed plugin update that left a partial folder. Later sessions loaded that folder with skills or other components missing. On 2.1.330 and earlier, a plugin that updated while the network dropped can be missing pieces and still appear installed. Update past that release, or reinstall the plugin, before trusting a folder that was mid-update.

## Sources

- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-23
- [v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331) — accessed 2026-11-23
