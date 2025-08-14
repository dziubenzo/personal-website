import { useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  StyledAbout,
  StyledContactLinks,
  StyledDevInfo,
  StyledDevPhoto,
} from '../styles/About.styled';
import { StyledHeading, StyledIconButton } from '../styles/App.styled';
import { getTranslation } from '../utils/helpers';

type ContactLinksProps = {
  size: number;
};

function DevPhoto() {
  const intl = useIntl();

  return (
    <StyledDevPhoto>
      <img
        src="https://res.cloudinary.com/dvhkp9wc6/image/upload/v1727873307/personal_website/photos/bzyk9jy6kkjel3rp2gya.png"
        alt={getTranslation(intl, 'aboutDevPhotoAlt')}
      />
    </StyledDevPhoto>
  );
}

function ContactLinks({ size }: ContactLinksProps) {
  const intl = useIntl();

  return (
    <StyledContactLinks $size={size}>
      <a
        href="https://www.linkedin.com/in/michal-dziubany"
        aria-label={getTranslation(intl, 'aboutContactLinkLinkedInLabel')}
        title={getTranslation(intl, 'aboutContactLinkLinkedInLabel')}
      >
        <FaLinkedin aria-hidden={true} />
      </a>
      <a
        href="https://github.com/dziubenzo"
        aria-label={getTranslation(intl, 'aboutContactLinkGitHubLabel')}
        title={getTranslation(intl, 'aboutContactLinkGitHubLabel')}
      >
        <FaGithub aria-hidden={true} />
      </a>
      <a
        href="mailto:michal@dziubany.dev"
        aria-label={getTranslation(intl, 'aboutContactLinkEmailLabel')}
        title={getTranslation(intl, 'aboutContactLinkEmailLabel')}
      >
        <MdAlternateEmail aria-hidden={true} />
      </a>
    </StyledContactLinks>
  );
}

function DevInfo() {
  const intl = useIntl();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <StyledDevInfo>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoNameHeading" />
      </h3>
      <p>Michał Dziubany</p>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoLocationHeading" />
      </h3>
      <p>
        <FormattedMessage id="aboutDevInfoLocation" />
      </p>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoEmailHeading" />
      </h3>
      <div className="email-wrapper">
        <p>michal@dziubany.dev</p>
        <div className="copy-button-wrapper">
          <StyledIconButton
            $size={16}
            aria-label={getTranslation(intl, 'aboutDevInfoEmailLabel')}
            title={getTranslation(intl, 'aboutDevInfoEmailLabel')}
            onClick={async () => {
              setShowPopup(true);
              setTimeout(() => setShowPopup(false), 1000);
              await navigator.clipboard.writeText('michal@dziubany.dev');
            }}
          >
            <BiCopy />
          </StyledIconButton>
          <div className={`email-copied-popup ${showPopup ? 'show' : ''}`}>
            <p>
              <FormattedMessage id="aboutDevInfoEmailCopied" />
            </p>
          </div>
        </div>
      </div>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoFrontendHeading" />
      </h3>
      <p>React, Next.js, TypeScript, JavaScript</p>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoBackendHeading" />
      </h3>
      <p>Node.js, Express, PostgreSQL, MongoDB</p>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoShortInfoHeading" />
      </h3>
      <p>
        <FormattedMessage id="aboutDevInfoShortInfo" />
      </p>
      <ContactLinks size={48} />
    </StyledDevInfo>
  );
}

export default function About() {
  return (
    <StyledAbout id="about">
      <StyledHeading>
        <FormattedMessage id="aboutAbout" />
      </StyledHeading>
      <div className="about-wrapper">
        <DevPhoto />
        <DevInfo />
      </div>
    </StyledAbout>
  );
}
