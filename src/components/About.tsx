import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  StyledAbout,
  StyledContactLinks,
  StyledDevInfo,
  StyledDevPhoto,
} from '../styles/About.styled';
import { StyledHeading } from '../styles/App.styled';
import { getTranslation } from '../utils/helpers';

type ContactLinksProps = {
  size: number;
};

function DevPhoto() {
  const intl = useIntl();

  return (
    <StyledDevPhoto>
      <img
        srcSet="https://placehold.co/1000x2000 1000w, https://placehold.co/500x1000 500w, https://placehold.co/300x700 300w"
        sizes="(width < 768px) 300px, (width < 1024px) 500px, 1000px"
        src="https://placehold.co/1000x2000"
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
        href="https://github.com/dziubenzo"
        aria-label={getTranslation(intl, 'aboutContactLinkGitHubLabel')}
      >
        <FaGithub aria-hidden={true} />
      </a>
      <a
        href="https://www.linkedin.com/"
        aria-label={getTranslation(intl, 'aboutContactLinkLinkedInLabel')}
      >
        <FaLinkedin aria-hidden={true} />
      </a>
      <a
        href="https://x.com/"
        aria-label={getTranslation(intl, 'aboutContactLinkXLabel')}
      >
        <FaXTwitter aria-hidden={true} />
      </a>
      <a
        href="mailto:dziubenzo@gmail.com"
        aria-label={getTranslation(intl, 'aboutContactLinkEmailLabel')}
      >
        <MdAlternateEmail aria-hidden={true} />
      </a>
    </StyledContactLinks>
  );
}

function DevInfo() {
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
      <p>dziubenzo@gmail.com</p>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoFrontendHeading" />
      </h3>
      <p>JavaScript, TypeScript, React</p>
      <h3 className="about-heading">
        <FormattedMessage id="aboutDevInfoBackendHeading" />
      </h3>
      <p>Node.js, Express, MongoDB</p>
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
