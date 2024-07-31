import Footer from './Footer';
import Header from './Header';

import Theme from './Theme';
import GlobalStyle from '../styles/GlobalStyle';

import { IntlProvider } from 'react-intl';
import { LOCALES, LocalesValues } from '../languages/locales';
import { messages } from '../languages/messages';
import { useState } from 'react';
import { getPreferredLang } from '../utils/helpers';

export default function App() {
  const preferredLang = getPreferredLang();
  const [locale, setLocale] = useState<LocalesValues>(preferredLang);

  return (
    <IntlProvider
      defaultLocale={LOCALES.BRITISH_ENGLISH}
      locale={locale}
      messages={messages[locale]}
    >
      <Theme>
        <GlobalStyle />
        <Header />
        <main>Placeholder</main>
        <Footer locale={locale} setLocale={setLocale} />
      </Theme>
    </IntlProvider>
  );
}
