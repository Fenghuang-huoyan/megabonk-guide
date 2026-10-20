/**
 * Adsterra Native Banner for guide pages, directly after Quick Answer.
 *
 * The Megabonk zone is not filled in yet. Leave `afterQuickAnswer.id` empty
 * until the real zone key exists, and set `invokeBase` to that zone's host.
 * Do not paste a key or invoke host from another game.
 *
 * Script URL, once both are set: `${invokeBase}/${id}/invoke.js`
 * Adult and sensitive categories stay off. Other slots stay on ADSTERRA_
 * placeholders and do not request a script. Guide pages share this one zone.
 */
export type AdSlotConfig = {
  id: string;
  format: string;
  invokeBase?: string;
  containerPrefix?: string;
};

const slots = {
  homeHero: { id: 'ADSTERRA_HOME_HERO', format: '728x90' },
  afterQuickAnswer: {
    id: '',
    format: 'native-banner',
  },
  midArticle: { id: 'ADSTERRA_MID_ARTICLE', format: 'in-article' },
  sidebar: { id: 'ADSTERRA_SIDEBAR', format: '300x250' },
  footer: { id: 'ADSTERRA_FOOTER', format: 'banner' },
} as const satisfies Record<string, AdSlotConfig>;

export const adsConfig = {
  network: 'adsterra' as const,
  enabled: true,
  invokeBase: '',
  containerPrefix: 'container-',
  slots,
};

export type AdSlotName = keyof typeof slots;

export function resolveAdPlacement(name: AdSlotName) {
  const slot: AdSlotConfig = slots[name];
  const invokeBase = (slot.invokeBase ?? adsConfig.invokeBase).replace(/\/$/, '');
  const containerPrefix = slot.containerPrefix ?? adsConfig.containerPrefix;
  const id = slot.id.trim();
  return {
    id,
    format: slot.format,
    invokeBase,
    containerId: `${containerPrefix}${id}`,
    scriptSrc: id && invokeBase ? `${invokeBase}/${id}/invoke.js` : '',
    active:
      adsConfig.enabled &&
      id.length > 0 &&
      !id.startsWith('ADSTERRA_') &&
      invokeBase.length > 0,
  };
}
