import { useRef, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { IoIosLink } from 'react-icons/io';
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
import { useCheckIfDesktop, useShowFirstScreenshot } from '../utils/hooks';
import {
  aurora,
  guesseye,
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

export type ActiveButton = 1 | 2 | 3;

function ScreenshotSelector({ screenshotsDivRef }: ScreenshotSelectorProps) {
  const [activeButton, setActiveButton] = useState<ActiveButton>(1);
  useShowFirstScreenshot(moveToScreenshot);

  function moveToScreenshot(clickedButton: ActiveButton) {
    if (!screenshotsDivRef.current) return;
    setActiveButton(clickedButton);
    switch (clickedButton) {
      case 1:
        screenshotsDivRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        break;
      case 2:
        screenshotsDivRef.current.scrollTo({
          left: screenshotsDivRef.current.offsetWidth,
          behavior: 'smooth',
        });
        break;
      case 3:
        screenshotsDivRef.current.scrollTo({
          left: screenshotsDivRef.current.offsetWidth * 2,
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

  function renderStack(stackIcons: SkillIcon[]) {
    return stackIcons.map((icon) => {
      const iconDescription = icon.description;
      return (
        <div key={iconDescription} className="project-skill">
          <span>{iconDescription}</span>
        </div>
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
      <div className="project-skills-wrapper">
        <div className="frontend-skills">
          <h3 className="frontend-skills-heading">Frontend</h3>
          <div className="frontend-skills-wrapper">
            {renderStack(frontendStack)}
          </div>
        </div>
        {backendStack && (
          <div className="backend-skills">
            <h3 className="backend-skills-heading">Backend</h3>
            <div className="backend-skills-wrapper">
              {renderStack(backendStack)}
            </div>
          </div>
        )}
      </div>
      {!project.backendGitHubLink ? (
        <div className="project-links-wrapper single-repo">
          <a
            href={project.frontendGitHubLink}
            title={`${getTranslation(intl, 'projectsLabel')}${getTranslation(intl, project.name)}`}
            aria-label={`${getTranslation(intl, 'projectsLabel')}${getTranslation(intl, project.name)}`}
          >
            <IoIosLink aria-hidden={true} />
            <p>
              <FormattedMessage id="projectsLink" />
            </p>
          </a>
          <a
            href={project.demoLink}
            title={`${getTranslation(intl, 'projectsDemoLinkLabel')}${getTranslation(intl, project.name)}`}
            aria-label={`${getTranslation(intl, 'projectsDemoLinkLabel')}${getTranslation(intl, project.name)}`}
          >
            <FaPlayCircle aria-hidden={true} />
          </a>
        </div>
      ) : (
        <div className="project-links-wrapper">
          <a
            href={project.frontendGitHubLink}
            title={`${getTranslation(intl, 'projectsFrontendLinkLabel')}${getTranslation(intl, project.name)}`}
            aria-label={`${getTranslation(intl, 'projectsFrontendLinkLabel')}${getTranslation(intl, project.name)}`}
          >
            <IoIosLink aria-hidden={true} />
            <p>
              <FormattedMessage id="projectsFrontendLink" />
            </p>
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
            <IoIosLink aria-hidden={true} />
            <p>
              <FormattedMessage id="projectsBackendLink" />
            </p>
          </a>
        </div>
      )}
    </StyledProjectDescription>
  );
}

function Project({ project, reverse }: ProjectProps) {
  const intl = useIntl();
  const { screenshots } = project;

  const screenshotsDivRef = useRef<HTMLDivElement>(null);
  const isDesktop = useCheckIfDesktop();

  function renderScreenshots() {
    return screenshots.map((screenshot, index) => {
      return (
        <a
          key={`${getTranslation(intl, project.name)} ${index + 1}`}
          href={screenshot}
          target="_blank"
          aria-label={`${getTranslation(intl, 'projectsScreenshotNewTab')}`}
          title={`${getTranslation(intl, 'projectsScreenshotNewTab')}`}
        >
          <img
            key={`${getTranslation(intl, project.name)} ${index + 1}`}
            loading="lazy"
            src={screenshot}
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
        <Project project={guesseye} reverse />
        <Project project={aurora} />
        <Project project={talkyTalky} reverse />
        <Project project={whereIsWally} />
      </div>
    </StyledProjects>
  );
}
