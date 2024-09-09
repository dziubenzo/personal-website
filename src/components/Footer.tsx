import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FormattedMessage, useIntl } from 'react-intl';
import { LOCALES, LocalesValues } from '../languages/locales';
import { StyledIconButton } from '../styles/App.styled';
import {
  StyledFooter,
  StyledLanguagePicker,
  StyledThemePicker,
} from '../styles/Footer.styled';
import {
  PolishFlag,
  UnitedKingdomFlag,
  UnitedStatesFlag,
} from '../utils/flags';
import { getTranslation } from '../utils/helpers';
import { darkTheme, lightTheme, ThemeObject } from '../utils/themes';

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
            <PolishFlag />
          </button>
        )}
        {locale !== LOCALES.BRITISH_ENGLISH && (
          <button
            title={getTranslation(intl, 'footerBrE')}
            onClick={() => changeLanguage(LOCALES.BRITISH_ENGLISH)}
          >
            <UnitedKingdomFlag />
          </button>
        )}
        {locale !== LOCALES.AMERICAN_ENGLISH && (
          <button
            title={getTranslation(intl, 'footerAmE')}
            onClick={() => changeLanguage(LOCALES.AMERICAN_ENGLISH)}
          >
            <UnitedStatesFlag />
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
        {theme.type !== lightTheme.type && (
          <StyledIconButton
            $size={32}
            title={getTranslation(intl, 'footerLight')}
            onClick={() => changeTheme(lightTheme)}
          >
            <MdLightMode aria-hidden={true} />
          </StyledIconButton>
        )}
        {theme.type !== darkTheme.type && (
          <StyledIconButton
            $size={32}
            title={getTranslation(intl, 'footerDark')}
            onClick={() => changeTheme(darkTheme)}
          >
            <MdDarkMode aria-hidden={true} />
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
