import { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import { StyledSkills } from '../styles/Skills.styled';
import { skillIcons } from '../utils/skills';

export default function Skills() {
  function renderSkillIcons() {
    const iconsArray: ReactNode[] = [];

    for (const key in skillIcons) {
      const Icon = skillIcons[key].icon;
      const iconDescription = skillIcons[key].description;
      iconsArray.push(
        <Icon
          className="skill-icon"
          key={iconDescription}
          title={iconDescription}
          aria-label={iconDescription}
        />,
      );
    }

    return iconsArray.map((icon) => icon);
  }

  return (
    <StyledSkills id="skills">
      <StyledHeading>
        <FormattedMessage id="skillsSkills" />
      </StyledHeading>
      <div className="skills-wrapper">
        <div className="horizontal-scroll-wrapper animate-ltr">
          {renderSkillIcons()}
        </div>
      </div>
    </StyledSkills>
  );
}
