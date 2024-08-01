import Footer from './Footer';
import Header from './Header';

import Theme from './Theme';
import GlobalStyle from '../styles/GlobalStyle';

import { IntlProvider } from 'react-intl';
import { LOCALES, LocalesValues } from '../languages/locales';
import { messages } from '../languages/messages';
import { useState } from 'react';
import { getPreferredLang, getPreferredTheme } from '../utils/helpers';
import { ThemeObject } from '../utils/themes';

export default function App() {
  const preferredLang = getPreferredLang();
  const preferredTheme = getPreferredTheme();

  const [locale, setLocale] = useState<LocalesValues>(preferredLang);
  const [theme, setTheme] = useState<ThemeObject>(preferredTheme);

  return (
    <IntlProvider
      defaultLocale={LOCALES.BRITISH_ENGLISH}
      locale={locale}
      messages={messages[locale]}
    >
      <Theme theme={theme}>
        <GlobalStyle />
        <Header />
        <main>Placeholder</main>
        <Footer
          locale={locale}
          setLocale={setLocale}
          theme={theme}
          setTheme={setTheme}
        />
      </Theme>
    </IntlProvider>
  );
}
