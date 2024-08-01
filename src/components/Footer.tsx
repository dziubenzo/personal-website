import { FormattedMessage, useIntl } from 'react-intl';
import {
  StyledFooter,
  StyledLanguagePicker,
  StyledThemePicker,
} from '../styles/Footer.styled';
import { getTranslation } from '../utils/helpers';
import { LocalesValues } from '../languages/locales';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { StyledIconButton } from '../styles/App.styled';

type FooterProps = {
  locale: LocalesValues;
  setLocale: React.Dispatch<React.SetStateAction<LocalesValues>>;
};

function LanguagePicker({ locale, setLocale }: FooterProps) {
  const intl = useIntl();

  function changeLanguage(newLocale: LocalesValues) {
    if (newLocale === locale) return;
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
      <button
        title={getTranslation(intl, 'footerPL')}
        onClick={() => changeLanguage('pl-PL')}
      >
        🇵🇱
      </button>
      <button
        title={getTranslation(intl, 'footerBrE')}
        onClick={() => changeLanguage('en-GB')}
      >
        🇬🇧
      </button>
      <button
        title={getTranslation(intl, 'footerAmE')}
        onClick={() => changeLanguage('en-US')}
      >
        🇺🇸
      </button>
    </StyledLanguagePicker>
  );
}

function ThemePicker() {
  const intl = useIntl();

  return (
    <StyledThemePicker>
      <h3>
        <FormattedMessage id="footerTheme" />
      </h3>
      <StyledIconButton $size={32} title={getTranslation(intl, 'footerLight')}>
        <MdLightMode />
      </StyledIconButton>
      <StyledIconButton $size={32} title={getTranslation(intl, 'footerDark')}>
        <MdDarkMode />
      </StyledIconButton>
    </StyledThemePicker>
  );
}

export default function Footer({ locale, setLocale }: FooterProps) {
  return (
    <StyledFooter>
      <LanguagePicker locale={locale} setLocale={setLocale} />
      <div className="copyright">
        <p>© {new Date().getFullYear()} Michał Dziubany</p>
      </div>
      <ThemePicker />
    </StyledFooter>
  );
}
