import { useRef, useState } from 'react';
import { FaGithubAlt, FaPlayCircle } from 'react-icons/fa';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import {
  StyledProject,
  StyledProjectDescription,
  StyledProjectReverse,
  StyledProjects,
  StyledScreenshotSelector,
} from '../styles/Projects.styled';
import { getTranslation } from '../utils/helpers';
import { useCheckIfDesktop } from '../utils/hooks';
import {
  aurora,
  talkyTalky,
  whereIsWally,
  type Project,
} from '../utils/projects';
import { SkillIcon } from '../utils/skills';

type ProjectProps = {
  project: Project;
  reverse?: true;
};

type ProjectDescriptionProps = Pick<ProjectProps, 'project'>;

type ScreenshotSelectorProps = {
  screenshotsDivRef: React.RefObject<HTMLDivElement>;
};

type ActiveButton = 1 | 2 | 3;

function ScreenshotSelector({ screenshotsDivRef }: ScreenshotSelectorProps) {
  const [activeButton, setActiveButton] = useState<ActiveButton>(1);

  function moveToScreenshot(clickedButton: ActiveButton) {
    setActiveButton(clickedButton);
    switch (clickedButton) {
      case 1:
        screenshotsDivRef.current?.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        break;
      case 2:
        screenshotsDivRef.current?.scrollTo({
          left: screenshotsDivRef.current?.offsetWidth,
          behavior: 'smooth',
        });
        break;
      case 3:
        screenshotsDivRef.current?.scrollTo({
          left: screenshotsDivRef.current?.offsetWidth * 2,
          behavior: 'smooth',
        });
        break;
      default:
        break;
    }
  }

  return (
    <StyledScreenshotSelector>
      <button
        className={activeButton === 1 ? 'active' : undefined}
        key={1}
        onClick={() => moveToScreenshot(1)}
      >
        1
      </button>
      <button
        className={activeButton === 2 ? 'active' : undefined}
        key={2}
        onClick={() => moveToScreenshot(2)}
      >
        2
      </button>
      <button
        className={activeButton === 3 ? 'active' : undefined}
        key={3}
        onClick={() => moveToScreenshot(3)}
      >
        3
      </button>
    </StyledScreenshotSelector>
  );
}

function ProjectDescription({ project }: ProjectDescriptionProps) {
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
      <hr />
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

function Project({ project, reverse }: ProjectProps) {
  const intl = useIntl();
  const { screenshotsDesktop, screenshotsMobile } = project;

  const screenshotsDivRef = useRef<HTMLDivElement>(null);
  const isDesktop = useCheckIfDesktop();

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
            srcSet={`${screenshotDesktop} 1329w, ${screenshotsMobile[index]} 768w`}
            sizes="(width < 768px) 768w, 1329w"
            src={screenshotDesktop}
            alt={`${getTranslation(intl, project.name)} - ${getTranslation(intl, 'projectsScreenshot')} ${index + 1} `}
          />
        </a>
      );
    });
  }

  // Show project the other way around only if the reverse prop is passed and the device width is at least 1024px
  if (reverse && isDesktop) {
    return (
      <StyledProjectReverse>
        <ProjectDescription project={project} />
        <div className="screenshots-wrapper">
          <div ref={screenshotsDivRef} className="horizontal-scroll-wrapper">
            {renderScreenshots()}
          </div>
        </div>
        <div className="selector-wrapper">
          <ScreenshotSelector screenshotsDivRef={screenshotsDivRef} />
        </div>
      </StyledProjectReverse>
    );
  }

  return (
    <StyledProject>
      <div className="screenshots-wrapper">
        <div ref={screenshotsDivRef} className="horizontal-scroll-wrapper">
          {renderScreenshots()}
        </div>
      </div>
      <div className="selector-wrapper">
        <ScreenshotSelector screenshotsDivRef={screenshotsDivRef} />
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
        <Project project={talkyTalky} reverse />
        <Project project={whereIsWally} />
      </div>
    </StyledProjects>
  );
}
