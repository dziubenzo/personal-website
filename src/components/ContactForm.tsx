import { FormattedMessage, useIntl } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import { StyledContactForm } from '../styles/ContactForm.styled';
import { getTranslation } from '../utils/helpers';

function Form() {
  const intl = useIntl();

  return (
    <form onSubmit={() => console.log('OK')}>
      <div className="email-wrapper">
        <label htmlFor="email">
          <FormattedMessage id="contactFormEmail" />
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={getTranslation(intl, 'contactFormEmailPlaceholder')}
          required
        />
      </div>
      <div className="message-wrapper">
        <label htmlFor="message">
          <FormattedMessage id="contactFormMessage" />
        </label>
        <textarea
          name="message"
          id="message"
          rows={8}
          placeholder={getTranslation(intl, 'contactFormMessagePlaceholder')}
          required
        />
      </div>
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
