import { FormattedMessage, useIntl } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import { StyledContactForm } from '../styles/ContactForm.styled';
import { getTranslation } from '../utils/helpers';

function Form() {
  const intl = useIntl();

  return (
    <form onSubmit={() => console.log('OK')}>
      <label htmlFor="email">
        <FormattedMessage id="contactFormEmail" />
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@example.com"
        required
      />
      <label htmlFor="message">
        <FormattedMessage id="contactFormMessage" />
      </label>
      <input
        type="text"
        name="message"
        id="message"
        placeholder={getTranslation(intl, 'contactFormMessagePlaceholder')}
        required
      />
      <button type="submit">
        <FormattedMessage id="contactFormSend" />
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <StyledContactForm id="contact-form">
      <StyledHeading>
        <FormattedMessage id="contactFormContactForm" />
      </StyledHeading>
      <Form />
    </StyledContactForm>
  );
}
