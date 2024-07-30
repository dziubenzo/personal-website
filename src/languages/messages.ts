import { LOCALES, LocalesValues } from './locales';

type Languages = Record<LocalesValues, Language>;

type Language = typeof defaultLanguage;

const defaultLanguage = {
  headerAbout: 'About',
  headerSkills: 'Skills',
  headerProjects: 'Projects',
  headerCV: 'CV',
  headerContactForm: 'Contact Form',
};

export const messages: Languages = {
  [LOCALES.BRITISH_ENGLISH]: defaultLanguage,
  [LOCALES.AMERICAN_ENGLISH]: {
    headerAbout: 'About',
    headerSkills: 'Skills',
    headerProjects: 'Projects',
    headerCV: 'Resume',
    headerContactForm: 'Contact Form',
  },
  [LOCALES.POLISH]: {
    headerAbout: 'O mnie',
    headerSkills: 'Umiejętności',
    headerProjects: 'Projekty',
    headerCV: 'CV',
    headerContactForm: 'Formularz kontaktowy',
  },
};
