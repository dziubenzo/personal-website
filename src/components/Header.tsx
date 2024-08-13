import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import { StyledIconButton } from '../styles/App.styled';
import { StyledHeader, StyledNavBar } from '../styles/Header.styled';
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
  const isMobile = useCheckIfMobile();

  const [showSidebar, setShowSidebar] = useState(false);

  // Render two different Header components depending on viewport width
  if (isMobile) {
    return (
      <StyledHeader>
        <div className="header-headings">
          <h1>Michał Dziubany</h1>
          <h3>Fullstack Developer</h3>
        </div>
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
      <div className="header-headings">
        <h1>Michał Dziubany</h1>
        <h3>Fullstack Developer</h3>
      </div>
      <NavBar />
    </StyledHeader>
  );
}
