import { FormattedMessage } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import { StyledSkills } from '../styles/Skills.styled';
import { skillIconsArray } from '../utils/skills';

export default function Skills() {
  function renderSkillIcons() {
    return skillIconsArray.map((SkillIcon) => (
      <SkillIcon className="skill-icon" key={SkillIcon.name} />
    ));
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
