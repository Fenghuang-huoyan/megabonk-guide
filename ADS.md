# Adsterra — megabonkguide.wiki

Native Banner is wired for the homepage and guide pages, immediately after Quick Answer (`afterQuickAnswer` in `sites/megabonkguide/ads.config.ts`). The script is rendered once on those pages. The 404 page does not include the slot.

This zone uses a full script URL. There is no `/invoke.js` suffix, and `invokeBase` stays empty so the old host is not hardcoded.

| Field | Value | Used in the script? |
| --- | --- | --- |
| Zone key | `5cc53c8c07895d04f9f59e3df385ffad` | Yes. `afterQuickAnswer.id`, and the container id `container-5cc53c8c07895d04f9f59e3df385ffad` |
| Script src | `https://bauval.org/21/5cc53c8c07895d04f9f59e3df385ffad` | Yes. Full `afterQuickAnswer.scriptSrc` |
| Website ID | `6136721` | No. Ops note only |
| Placement ID | `31828506` | No. Ops note only |
| Other slots | `ADSTERRA_HOME_HERO`, `ADSTERRA_MID_ARTICLE`, `ADSTERRA_SIDEBAR`, `ADSTERRA_FOOTER` | No. The `ADSTERRA_` prefix keeps them inactive |

Adult and sensitive categories stay off.

`analytics.gaId` in `sites/megabonkguide/site.config.ts` is empty, so pages do not load Google Analytics. There is no Google site-verification meta tag.
