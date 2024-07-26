import { LOCALES, LocalesValues } from './locales';

type Languages = Record<LocalesValues, Language>;

type Language = {
  test: string;
};

export const messages: Languages = {
  [LOCALES.BRITISH_ENGLISH]: {
    test: 'Hi guys!',
  },
  [LOCALES.AMERICAN_ENGLISH]: {
    test: 'Hi folks!',
  },
  [LOCALES.POLISH]: {
    test: 'Cześć ludzie!',
  },
};
