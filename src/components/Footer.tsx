import { FormattedMessage, useIntl } from 'react-intl';
import {
  StyledFooter,
  StyledLanguagePicker,
  StyledThemePicker,
} from '../styles/Footer.styled';
import { getTranslation } from '../utils/helpers';
import { LOCALES, LocalesValues } from '../languages/locales';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { StyledIconButton } from '../styles/App.styled';
import { darkTheme, lightThemeCandidate2, ThemeObject } from '../utils/themes';

type FooterProps = {
  locale: LocalesValues;
  setLocale: React.Dispatch<React.SetStateAction<LocalesValues>>;
  theme: ThemeObject;
  setTheme: React.Dispatch<React.SetStateAction<ThemeObject>>;
};

type LanguagePickerProps = Pick<FooterProps, 'locale' | 'setLocale'>;

type ThemePickerProps = Pick<FooterProps, 'theme' | 'setTheme'>;

function LanguagePicker({ locale, setLocale }: LanguagePickerProps) {
  const intl = useIntl();

  function changeLanguage(newLocale: LocalesValues) {
    setLocale(newLocale);
    localStorage.setItem('lang', newLocale);
    const htmlElement = document.querySelector<HTMLHtmlElement>('html');
    if (htmlElement) {
      htmlElement.lang = newLocale;
    }
  }

  return (
    <StyledLanguagePicker>
      <h3>
        <FormattedMessage id="footerLanguage" />
      </h3>
      <div className="language-buttons-wrapper">
        {locale !== LOCALES.POLISH && (
          <button
            title={getTranslation(intl, 'footerPL')}
            onClick={() => changeLanguage(LOCALES.POLISH)}
          >
            🇵🇱
          </button>
        )}
        {locale !== LOCALES.BRITISH_ENGLISH && (
          <button
            title={getTranslation(intl, 'footerBrE')}
            onClick={() => changeLanguage(LOCALES.BRITISH_ENGLISH)}
          >
            🇬🇧
          </button>
        )}
        {locale !== LOCALES.AMERICAN_ENGLISH && (
          <button
            title={getTranslation(intl, 'footerAmE')}
            onClick={() => changeLanguage(LOCALES.AMERICAN_ENGLISH)}
          >
            🇺🇸
          </button>
        )}
      </div>
    </StyledLanguagePicker>
  );
}

function ThemePicker({ theme, setTheme }: ThemePickerProps) {
  const intl = useIntl();

  function changeTheme(newTheme: ThemeObject) {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.type);
  }

  return (
    <StyledThemePicker>
      <h3>
        <FormattedMessage id="footerTheme" />
      </h3>
      <div className="theme-buttons-wrapper">
        {theme.type !== lightThemeCandidate2.type && (
          <StyledIconButton
            $size={32}
            title={getTranslation(intl, 'footerLight')}
            onClick={() => changeTheme(lightThemeCandidate2)}
          >
            <MdLightMode />
          </StyledIconButton>
        )}
        {theme.type !== darkTheme.type && (
          <StyledIconButton
            $size={32}
            title={getTranslation(intl, 'footerDark')}
            onClick={() => changeTheme(darkTheme)}
          >
            <MdDarkMode />
          </StyledIconButton>
        )}
      </div>
    </StyledThemePicker>
  );
}

export default function Footer({
  locale,
  setLocale,
  theme,
  setTheme,
}: FooterProps) {
  return (
    <StyledFooter>
      <LanguagePicker locale={locale} setLocale={setLocale} />
      <div className="copyright">
        <p>© {new Date().getFullYear()} Michał Dziubany</p>
      </div>
      <ThemePicker theme={theme} setTheme={setTheme} />
    </StyledFooter>
  );
}
