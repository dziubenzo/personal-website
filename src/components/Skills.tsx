import { ReactNode, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import {
  StyledSkills,
  StyledSkillsCarousel,
  StyledSkillsSelector,
  StyledTextSkills,
} from '../styles/Skills.styled';
import { type SkillIcon, skillIcons } from '../utils/skills';

function SkillsCarousel() {
  function renderSkillIcons() {
    const iconsArray: ReactNode[] = [];
    // Make sure TS is happy looping through skillIcons properties
    let key: keyof typeof skillIcons;

    for (key in skillIcons) {
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
    <StyledSkillsCarousel>
      <div className="horizontal-scroll-wrapper animate-ltr">
        {renderSkillIcons()}
      </div>
    </StyledSkillsCarousel>
  );
}

function TextSkills() {
  function renderSkillsAsText(category: SkillIcon['category']) {
    return Object.entries(skillIcons).map((skillIcon) => {
      const skill = skillIcon[1];
      const Icon = skill.icon;

      if (skill.category === category) {
        return (
          <div key={skill.description} className="skill">
            <p>{skill.description}</p>
            <Icon />
          </div>
        );
      }
    });
  }

  return (
    <StyledTextSkills>
      <div className="category">
        <h3 className="category-title">Frontend</h3>
        {renderSkillsAsText('Frontend')}
      </div>

      <div className="category">
        <h3 className="category-title">Backend</h3>
        {renderSkillsAsText('Backend')}
      </div>

      <div className="category">
        <h3 className="category-title">Testing</h3>
        {renderSkillsAsText('Testing')}
      </div>

      <div className="category">
        <h3 className="category-title">Other</h3>
        {renderSkillsAsText('Other')}
      </div>
    </StyledTextSkills>
  );
}

export default function Skills() {
  const [showText, setShowText] = useState(true);

  return (
    <StyledSkills id="skills">
      <StyledHeading>
        <FormattedMessage id="skillsSkills" />
      </StyledHeading>
      <div className="wrapper">
        <StyledSkillsSelector>
          <label htmlFor="skills-selector">
            <FormattedMessage id="skillsSelectorLabel" />
          </label>
          <input
            type="checkbox"
            id="skills-selector"
            defaultChecked={showText}
            onChange={(event) => setShowText(event.target.checked)}
          />
        </StyledSkillsSelector>
        {showText ? <TextSkills /> : <SkillsCarousel />}
      </div>
    </StyledSkills>
  );
}
