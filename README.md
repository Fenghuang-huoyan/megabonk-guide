# Megabonk Fan Guide

Unofficial English wiki for [Megabonk](https://store.steampowered.com/app/3405340/Megabonk/) (Steam AppID **3405340**), aimed at **megabonkguide.wiki**.

Not affiliated with vedinad. The site does not try to be an interactive build planner or a full item database. It keeps a short set of skimmable guides: the first runs, characters, unlocks, weapons, tomes, items, opinionated build routes, maps, shrines, and later tiers.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/megabonkguide/site.config.ts` | Domain, Steam AppID, analytics, nav |
| Ads | `sites/megabonkguide/ads.config.ts` | Adsterra slot after Quick Answer; zone key empty |
| Active site | `sites/active` → `megabonkguide` | What the build actually reads |
| Framework | `framework/` | Layout, Quick Answer, ad slot, SEO |
| Content | `content/megabonk/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so production pages do not load Google Analytics. Guide pages do not load an Adsterra script until `afterQuickAnswer.id` and `invokeBase` are set for this game. See [ADS.md](ADS.md).

## Scripts

```bash
npm install
npm run dev      # http://localhost:4327
npm run build
npm run preview
```

## Routes

- `/` — home (Steam library hero, six image doors, guide cards)
- `/beginner-guide`
- `/characters`
- `/unlocks`
- `/weapons`
- `/tomes`
- `/items`
- `/builds`
- `/maps`
- `/shrines`
- `/late-game`
- `/faq`
- `/sitemap.xml` and `/robots.txt`

## Vercel and the custom domain

Do this in the Vercel dashboard when you are ready. Nothing here buys a domain or edits DNS.

1. Import this GitHub repo as a Vercel project. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
2. Deploy. The `*.vercel.app` URL should show the homepage hero before you attach a domain.
3. In the project, open **Settings → Domains** and add `megabonkguide.wiki` (and `www` if you want it).
4. Vercel will show the records to create at the registrar you already use. Add only those records. This repository does not contain them, and setup should not purchase the name.
5. Wait until Vercel marks the domain valid, then confirm `https://megabonkguide.wiki` serves this build.

Steam art on the homepage is stored under `public/images/official/steam/` with `ATTRIBUTION.txt`.
