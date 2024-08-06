import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import {
  StyledAbout,
  StyledContactLinks,
  StyledDevInfo,
  StyledDevPhoto,
} from '../styles/About.styled';
import { StyledHeading } from '../styles/App.styled';

type ContactLinksProps = {
  size: number;
};

function DevPhoto() {
  return (
    <StyledDevPhoto>
      <img
        srcSet="https://placehold.co/1000x2000 1000w, https://placehold.co/500x1000 500w, https://placehold.co/300x700 300w"
        sizes="(width < 768px) 300px, (width < 1024px) 500px, 1000px"
        src="https://placehold.co/1000x2000"
        alt="Placeholder Image"
      />
    </StyledDevPhoto>
  );
}

function ContactLinks({ size }: ContactLinksProps) {
  return (
    <StyledContactLinks $size={size}>
      <a
        href="https://github.com/dziubenzo"
        aria-label="Link to the developer's GitHub page"
      >
        <FaGithub aria-hidden={true} />
      </a>
      <a
        href="https://www.linkedin.com/"
        aria-label="Link to the developer's LinkedIn page"
      >
        <FaLinkedin aria-hidden={true} />
      </a>
      <a href="https://x.com/" aria-label="Link to the developer's X page">
        <FaXTwitter aria-hidden={true} />
      </a>
      <a
        href="mailto:dziubenzo@gmail.com"
        aria-label="Mailto link to the developer's email"
      >
        <MdAlternateEmail aria-hidden={true} />
      </a>
    </StyledContactLinks>
  );
}

function DevInfo() {
  return (
    <StyledDevInfo>
      <h3 className="about-heading">Name</h3>
      <p>Michał Dziubany</p>
      <h3 className="about-heading">Location</h3>
      <p>Katowice, Poland</p>
      <h3 className="about-heading">Email</h3>
      <p>dziubenzo@gmail.com</p>
      <h3 className="about-heading">Frontend Tech Stack</h3>
      <p>JavaScript, TypeScript, React</p>
      <h3 className="about-heading">Backend Tech Stack</h3>
      <p>Node.js, Express, MongoDB</p>
      <h3 className="about-heading">Short Info</h3>
      <p>
        A former professional translator, always eager to learn and contribute.
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
