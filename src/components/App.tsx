import About from './About';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

import { StyledMainContainer } from '../styles/App.styled';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from './Theme';

import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES, LocalesValues } from '../languages/locales';
import { messages } from '../languages/messages';
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
        <StyledMainContainer>
          <About />
          <Skills />
          <Projects />
        </StyledMainContainer>
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
