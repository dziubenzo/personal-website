import { LOCALES, LocalesValues } from './locales';

type Languages = Record<LocalesValues, Language>;

type Language = typeof defaultLanguage;

export type LanguageKeys = keyof Language;

const defaultLanguage = {
  headerAbout: 'About',
  headerSkills: 'Skills',
  headerProjects: 'Projects',
  headerCV: 'CV',
  headerContactForm: 'Contact Form',
  footerLanguage: 'Language',
  footerPL: 'Polish',
  footerBrE: 'British English',
  footerAmE: 'American English',
  footerTheme: 'Theme',
  footerLight: 'Light',
  footerDark: 'Dark',
};

export const messages: Languages = {
  [LOCALES.BRITISH_ENGLISH]: defaultLanguage,
  [LOCALES.AMERICAN_ENGLISH]: {
    headerAbout: 'About',
    headerSkills: 'Skills',
    headerProjects: 'Projects',
    headerCV: 'Resume',
    headerContactForm: 'Contact Form',
    footerLanguage: 'Language',
    footerPL: 'Polish',
    footerBrE: 'British English',
    footerAmE: 'American English',
    footerTheme: 'Theme',
    footerLight: 'Light',
    footerDark: 'Dark',
  },
  [LOCALES.POLISH]: {
    headerAbout: 'O mnie',
    headerSkills: 'Umiejętności',
    headerProjects: 'Projekty',
    headerCV: 'CV',
    headerContactForm: 'Formularz kontaktowy',
    footerLanguage: 'Język',
    footerPL: 'polski',
    footerBrE: 'angielski (odmiana brytyjska)',
    footerAmE: 'angielski (odmiana amerykańska)',
    footerTheme: 'Kolorystyka',
    footerLight: 'Jasna',
    footerDark: 'Ciemna',
  },
};
