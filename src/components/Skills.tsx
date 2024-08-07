import { FormattedMessage } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import { StyledSkills } from '../styles/Skills.styled';
import { skillIcons } from '../utils/skills';

export default function Skills() {
  function renderSkillIcons() {
    return skillIcons.map((SkillIcon) => (
      <SkillIcon.icon
        className="skill-icon"
        key={SkillIcon.description}
        title={SkillIcon.description}
        aria-label={SkillIcon.description}
      />
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
