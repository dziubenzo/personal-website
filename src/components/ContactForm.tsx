import { useForm } from 'formbold-react';
import { useEffect, useState } from 'react';
import { BiMessageRoundedCheck, BiMessageRoundedError } from 'react-icons/bi';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import { StyledContactForm } from '../styles/ContactForm.styled';
import { getTranslation } from '../utils/helpers';

function Form() {
  const intl = useIntl();
  const [isSending, setIsSending] = useState(false);
  const [state, handleSubmit] = useForm('9RlKM');

  if (state.succeeded) {
    return (
      <div className="success-message">
        <BiMessageRoundedCheck />
        <p>
          <FormattedMessage id="contactFormMessageSent1" />
        </p>
        <p>
          <FormattedMessage id="contactFormMessageSent2" />
        </p>
      </div>
    );
  }

  // Bring back Send button description in the event of an error
  if (state.error.status) {
    useEffect(() => {
      setIsSending(false);
    }, []);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsSending(true);
        handleSubmit(event);
      }}
    >
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
        {isSending ? (
          <FormattedMessage id="contactFormIsSending" />
        ) : (
          <FormattedMessage id="contactFormSend" />
        )}
      </button>
      {state.error.status && (
        <div className="error-message">
          <BiMessageRoundedError />
          <FormattedMessage id="contactFormSendingError" />
        </div>
      )}
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
