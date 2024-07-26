import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

import { IntlProvider } from 'react-intl';
import { LOCALES } from '../languages/locales';
import { messages } from '../languages/messages';

it('shows a header div', () => {
  render(
    <IntlProvider
      locale={LOCALES.BRITISH_ENGLISH}
      messages={messages[LOCALES.BRITISH_ENGLISH]}
    >
      <Header />
    </IntlProvider>,
  );

  const headerDiv = screen.getByText(/header/i);

  expect(headerDiv).toBeInTheDocument();
});
