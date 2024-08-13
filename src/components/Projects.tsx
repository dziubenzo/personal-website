import { useState } from 'react';
import { FaGithubAlt, FaPlayCircle } from 'react-icons/fa';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import {
  StyledProject,
  StyledProjectDescription,
  StyledProjects,
  StyledScreenshotSelector,
} from '../styles/Projects.styled';
import { getTranslation } from '../utils/helpers';
import { useScreenshotRefs } from '../utils/hooks';
import { aurora, talkyTalky, type Project } from '../utils/projects';
import { SkillIcon } from '../utils/skills';

type ProjectProps = {
  project: Project;
};

type ScreenshotSelectorProps = {
  screenshotRefs: React.RefObject<HTMLImageElement>[];
};

type ActiveButton = 1 | 2 | 3;

function ScreenshotSelector({ screenshotRefs }: ScreenshotSelectorProps) {
  const [activeButton, setActiveButton] = useState<ActiveButton>(1);

  function moveToScreenshot(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    screenshotRef: React.RefObject<HTMLImageElement>,
  ) {
    const clickedButton = parseInt(event.currentTarget.innerHTML);
    if (clickedButton === 1 || clickedButton === 2 || clickedButton === 3)
      setActiveButton(clickedButton);
    screenshotRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function renderButtons() {
    return screenshotRefs.map((ref, index) => {
      return (
        <button
          className={activeButton === index + 1 ? 'active' : undefined}
          key={index}
          onClick={(event) => moveToScreenshot(event, ref)}
        >
          {index + 1}
        </button>
      );
    });
  }

  return <StyledScreenshotSelector>{renderButtons()}</StyledScreenshotSelector>;
}

function ProjectDescription({ project }: ProjectProps) {
  const intl = useIntl();
  const { frontendStack, backendStack } = project;

  function renderIcons(stackIcons: SkillIcon[]) {
    return stackIcons.map((icon) => {
      const Icon = icon.icon;
      const iconDescription = icon.description;
      return (
        <Icon
          className="skill-icon"
          key={iconDescription}
          title={iconDescription}
          aria-label={iconDescription}
        />
      );
    });
  }

  return (
    <StyledProjectDescription>
      <h1 className="project-title">
        <FormattedMessage id={project.name} />
      </h1>
      <p className="project-description">
        <FormattedMessage id={project.description} />
      </p>
      <div className="project-icons-wrapper">
        <div className="frontend-icons">
          <h3 className="frontend-icons-heading">Frontend</h3>
          <div className="frontend-icons-wrapper">
            {renderIcons(frontendStack)}
          </div>
        </div>
        {backendStack && (
          <div className="backend-icons">
            <h3 className="backend-icons-heading">Backend</h3>
            <div className="backend-icons-wrapper">
              {renderIcons(backendStack)}
            </div>
          </div>
        )}
      </div>
      <div className="project-links-wrapper">
        <a
          href={project.frontendGitHubLink}
          title={`${getTranslation(intl, 'projectsFrontendLinkLabel')}${getTranslation(intl, project.name)}`}
          aria-label={`${getTranslation(intl, 'projectsFrontendLinkLabel')}${getTranslation(intl, project.name)}`}
        >
          <FaGithubAlt aria-hidden={true} />
        </a>
        <a
          href={project.demoLink}
          title={`${getTranslation(intl, 'projectsDemoLinkLabel')}${getTranslation(intl, project.name)}`}
          aria-label={`${getTranslation(intl, 'projectsDemoLinkLabel')}${getTranslation(intl, project.name)}`}
        >
          <FaPlayCircle aria-hidden={true} />
        </a>
        <a
          href={project.backendGitHubLink}
          title={`${getTranslation(intl, 'projectsBackendLinkLabel')}${getTranslation(intl, project.name)}`}
          aria-label={`${getTranslation(intl, 'projectsBackendLinkLabel')}${getTranslation(intl, project.name)}`}
        >
          <FaGithubAlt aria-hidden={true} />
        </a>
      </div>
    </StyledProjectDescription>
  );
}

function Project({ project }: ProjectProps) {
  const intl = useIntl();
  const { screenshotsDesktop, screenshotsMobile } = project;
  const screenshotRefs = useScreenshotRefs();

  function renderScreenshots() {
    return screenshotsDesktop.map((screenshotDesktop, index) => {
      return (
        <a
          key={`${getTranslation(intl, project.name)} ${index + 1}`}
          href={screenshotDesktop}
          target="_blank"
          aria-label={`${getTranslation(intl, 'projectsScreenshotNewTab')}`}
          title={`${getTranslation(intl, 'projectsScreenshotNewTab')}`}
        >
          <img
            key={`${getTranslation(intl, project.name)} ${index + 1}`}
            ref={screenshotRefs[index]}
            srcSet={`${screenshotDesktop} 1329w, ${screenshotsMobile[index]} 768w`}
            sizes="(width < 768px) 768w, 1329w"
            src={screenshotDesktop}
            alt={`${getTranslation(intl, project.name)} - ${getTranslation(intl, 'projectsScreenshot')} ${index + 1} `}
          />
        </a>
      );
    });
  }

  return (
    <StyledProject>
      <div className="screenshots-wrapper">
        <div className="horizontal-scroll-wrapper">{renderScreenshots()}</div>
      </div>
      <div className="selector-wrapper">
        <ScreenshotSelector screenshotRefs={screenshotRefs} />
      </div>
      <ProjectDescription project={project} />
    </StyledProject>
  );
}

export default function Projects() {
  return (
    <StyledProjects id="projects">
      <StyledHeading>
        <FormattedMessage id="projectsProjects" />
      </StyledHeading>
      <div className="projects-wrapper">
        <Project project={aurora} />
        <Project project={talkyTalky} />
      </div>
    </StyledProjects>
  );
}
