import { IntlShape } from 'react-intl';
import { LanguageKeys } from '../languages/messages';
import { LOCALES, LocalesValues } from '../languages/locales';
import { darkTheme, lightThemeCandidate2, ThemeObject } from './themes';

// Get translation
// Only allow defined language object keys as second argument
export const getTranslation = (
  intlObject: IntlShape,
  languageKey: LanguageKeys,
) => {
  return intlObject.formatMessage({ id: languageKey });
};

// Get user's preferred language from localStorage or navigator object
// Set British English as default on first app load
export const getPreferredLang = () => {
  const htmlElement = document.querySelector<HTMLHtmlElement>('html');
  const localStorageValue = localStorage.getItem('lang');
  let preferredLang: LocalesValues;

  if (
    localStorageValue &&
    (LOCALES.BRITISH_ENGLISH === localStorageValue ||
      LOCALES.AMERICAN_ENGLISH === localStorageValue ||
      LOCALES.POLISH === localStorageValue)
  ) {
    preferredLang = localStorageValue;
  } else if (
    navigator.language === 'pl-PL' ||
    navigator.language === 'en-GB' ||
    navigator.language === 'en-US'
  ) {
    preferredLang = navigator.language;
  } else {
    preferredLang = 'en-GB';
  }
  localStorage.setItem('lang', preferredLang);

  if (htmlElement) {
    htmlElement.lang = preferredLang;
  }
  return preferredLang;
};

// Get user's preferred language from localStorage or window object
// Set dark theme as fallback
export const getPreferredTheme = () => {
  const darkThemePreference = window.matchMedia('(prefers-color-scheme: dark)');
  const localStorageValue = localStorage.getItem('theme');
  let preferredTheme: ThemeObject;

  if (
    localStorageValue &&
    (localStorageValue === 'dark' || localStorageValue === 'light')
  ) {
    if (localStorageValue === 'dark') {
      preferredTheme = darkTheme;
    } else {
      preferredTheme = lightThemeCandidate2;
    }
  } else if (!darkThemePreference.matches) {
    preferredTheme = lightThemeCandidate2;
  } else {
    preferredTheme = darkTheme;
  }

  localStorage.setItem('theme', preferredTheme.type);

  return preferredTheme;
};
