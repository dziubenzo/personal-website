type LocalesKeys = keyof typeof LOCALES;
export type LocalesValues = (typeof LOCALES)[LocalesKeys];

export const LOCALES = {
  BRITISH_ENGLISH: 'en-GB',
  AMERICAN_ENGLISH: 'en-US',
  POLISH: 'pl-PL',
} as const;
