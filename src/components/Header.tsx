import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledIconButton } from '../styles/App.styled';
import {
  StyledDevHeadings,
  StyledHeader,
  StyledNavBar,
} from '../styles/Header.styled';
import { getTranslation } from '../utils/helpers';
import { useCheckIfMobile, useOutsideTap } from '../utils/hooks';

type NavBarProps = {
  showSidebar?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar({ showSidebar, setShowSidebar }: NavBarProps) {
  const handleNavBarClasses = () => {
    return showSidebar === undefined
      ? undefined
      : showSidebar
        ? 'slide-in'
        : 'slide-out';
  };

  const sidebarRef = useOutsideTap(setShowSidebar);

  // Hide sidebar on page section link tap
  function handleLinkTap() {
    if (showSidebar && setShowSidebar) setShowSidebar(false);
  }

  return (
    <StyledNavBar ref={sidebarRef} className={handleNavBarClasses()}>
      <ul>
        <li>
          <a href="#about" onClick={handleLinkTap}>
            <FormattedMessage id="headerAbout" />
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkTap}>
            <FormattedMessage id="headerSkills" />
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkTap}>
            <FormattedMessage id="headerProjects" />
          </a>
        </li>
        <li>
          <a href="#CV" onClick={handleLinkTap}>
            <FormattedMessage id="headerCV" />
          </a>
        </li>
        <li>
          <a href="#contact-form" onClick={handleLinkTap}>
            <FormattedMessage id="headerContactForm" />
          </a>
        </li>
      </ul>
    </StyledNavBar>
  );
}

function DevHeadings() {
  const intl = useIntl();

  return (
    <StyledDevHeadings>
      <a
        href="#"
        title={getTranslation(intl, 'headerScrollLabel')}
        aria-label={getTranslation(intl, 'headerScrollLabel')}
      >
        <h1>Michał Dziubany</h1>
        <h3>Fullstack Developer</h3>
      </a>
    </StyledDevHeadings>
  );
}

export default function Header() {
  const isMobile = useCheckIfMobile();

  const [showSidebar, setShowSidebar] = useState(false);

  // Render two different Header components depending on viewport width
  if (isMobile) {
    return (
      <StyledHeader>
        <DevHeadings />
        <StyledIconButton
          $size={32}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <MdMenu />
        </StyledIconButton>
        <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <DevHeadings />
      <NavBar />
    </StyledHeader>
  );
}
