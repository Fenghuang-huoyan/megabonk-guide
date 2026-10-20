export const siteConfig = {
  siteName: 'Megabonk Fan Guide',
  domain: 'megabonkguide.wiki',
  url: 'https://megabonkguide.wiki',
  gameTitle: 'Megabonk',
  steamAppId: 3405340,
  steamUrl: 'https://store.steampowered.com/app/3405340/Megabonk/',
  supportEmail: 'vedinadgames@gmail.com',
  social: [
    { href: 'https://x.com/MegabonkGame', label: 'X' },
    { href: 'https://discord.gg/BGxud7HPEe', label: 'Discord' },
    { href: 'https://www.youtube.com/@Vedinad', label: 'YouTube' },
    { href: 'https://bsky.app/profile/megabonk.bsky.social', label: 'Bluesky' },
    { href: 'https://www.tiktok.com/@megabonk_game', label: 'TikTok' },
  ],
  developer: 'vedinad',
  publisher: 'vedinad',
  tagline: 'Beginner routes, unlocks, and builds you can skim. Not another interactive planner.',
  locale: 'en',
  contentRoot: 'megabonk',
  homeTitle: 'Megabonk Fan Guide — Beginner, Characters, Unlocks & Builds',
  homeDescription:
    'Unofficial English Megabonk wiki for Steam AppID 3405340. Skimmable guides for the first runs, characters, unlocks, weapons, tomes, and later tiers. Opinion picks are labeled. Not an interactive build planner.',
  analytics: {
    gaId: '',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Megabonk: a fox with a staff, a bulky armored knight, and a small monkey on bright grass, with floating islands and the Megabonk logo',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Megabonk: the logo over a fox, an armored knight, and a monkey on a grassy field',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'megabonkguide.wiki is an unofficial fan-made guide for Megabonk. It is not affiliated with, endorsed by, or sponsored by vedinad, Ved, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Unlock text, drop chances, and balance numbers change with patches. Where two public write-ups disagree, this site says so instead of picking a number. This site is not responsible for account issues or purchase decisions.',
  nav: [
    { href: '/beginner-guide', label: 'Start' },
    { href: '/characters', label: 'Characters' },
    { href: '/unlocks', label: 'Unlocks' },
    { href: '/weapons', label: 'Weapons' },
    { href: '/builds', label: 'Builds' },
  ],
  moreNav: [
    { href: '/tomes', label: 'Tomes' },
    { href: '/items', label: 'Items' },
    { href: '/maps', label: 'Maps' },
    { href: '/shrines', label: 'Shrines' },
    { href: '/late-game', label: 'Later tiers' },
    { href: '/faq', label: 'FAQ' },
  ],
  footerNav: [
    { href: '/beginner-guide', label: 'Beginner guide' },
    { href: '/characters', label: 'Characters' },
    { href: '/unlocks', label: 'Unlocks' },
    { href: '/builds', label: 'Builds (opinion)' },
    { href: '/faq', label: 'FAQ' },
  ],
  version: {
    label: 'Checked 20 Oct 2026',
    detail:
      'Store price, review snapshot, and achievement total are from Steam on 20 Oct 2026. Roster and unlock text are from public wikis and may already differ in your client.',
  },
  databases: [
    { href: 'https://megabonk.wiki/wiki/Characters', label: 'Megabonk Wiki' },
    { href: 'https://megabonk.org/guides/characters/', label: 'megabonk.org' },
    { href: 'https://megabonk.wiki.fextralife.com/Megabonk_Wiki', label: 'Fextralife' },
  ],
} as const;

export type NavItem = { href: string; label: string };
