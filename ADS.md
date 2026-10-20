# Adsterra — megabonkguide.wiki

Native Banner is wired for guide pages, immediately after Quick Answer (`afterQuickAnswer` in `sites/megabonkguide/ads.config.ts`).

The Megabonk zone is **not filled in**. `afterQuickAnswer.id` is an empty string. `invokeBase` is empty. No ad script is requested.

| Field | Value | Used in the script? |
| --- | --- | --- |
| Zone key | empty | Not until you paste the Megabonk key into `afterQuickAnswer.id` |
| Invoke host | empty | Not until you set `invokeBase` to that zone’s host |
| Other slots | `ADSTERRA_HOME_HERO`, `ADSTERRA_MID_ARTICLE`, `ADSTERRA_SIDEBAR`, `ADSTERRA_FOOTER` | No. The `ADSTERRA_` prefix keeps them inactive |

Do not copy a zone key or invoke host from another game. Adult and sensitive categories stay off.

`analytics.gaId` in `sites/megabonkguide/site.config.ts` is empty, so pages do not load Google Analytics. There is no Google site-verification meta tag.
