import { StyledHeader, StyledNavBar } from '../styles/Header.styled';
import { FormattedMessage } from 'react-intl';
import { useCheckViewportWidth, useOutsideTap } from '../utils/hooks';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';

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

  return (
    <StyledNavBar ref={sidebarRef} className={handleNavBarClasses()}>
      <ul>
        <li>
          <a href="#about">
            <FormattedMessage id="headerAbout" />
          </a>
        </li>
        <li>
          <a href="#skills">
            <FormattedMessage id="headerSkills" />
          </a>
        </li>
        <li>
          <a href="#projects">
            <FormattedMessage id="headerProjects" />
          </a>
        </li>
        <li>
          <a href="#CV">
            <FormattedMessage id="headerCV" />
          </a>
        </li>
        <li>
          <a href="#contact-form">
            <FormattedMessage id="headerContactForm" />
          </a>
        </li>
      </ul>
    </StyledNavBar>
  );
}

export default function Header() {
  const isMobile = useCheckViewportWidth();
  const [showSidebar, setShowSidebar] = useState(false);

  if (isMobile) {
    return (
      <StyledHeader>
        <div className="header-headings">
          <h1>Michał Dziubany</h1>
          <h3>Fullstack Developer</h3>
        </div>
        <MdMenu onClick={() => setShowSidebar(!showSidebar)} />
        <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <div className="header-headings">
        <h1>Michał Dziubany</h1>
        <h3>Fullstack Developer</h3>
      </div>
      <NavBar />
    </StyledHeader>
  );
}
