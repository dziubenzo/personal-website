import { SkillIcon, skillIcons } from './skills';

type ProjectNames =
  | 'projectsAuroraName'
  | 'projectsTalkyTalkyName'
  | 'projectsWhereIsWallyName';

type ProjectDescriptions =
  | 'projectsAuroraDescription'
  | 'projectsTalkyTalkyDescription'
  | 'projectsWhereIsWallyDescription';

export type Project = {
  name: ProjectNames;
  description: ProjectDescriptions;
  frontendGitHubLink: string;
  backendGitHubLink?: string;
  demoLink: string;
  screenshotsDesktop: [string, string, string];
  screenshotsMobile: [string, string, string];
  frontendStack: SkillIcon[];
  backendStack?: SkillIcon[];
};

export const aurora: Project = {
  name: 'projectsAuroraName',
  description: 'projectsAuroraDescription',
  frontendGitHubLink: 'https://github.com/dziubenzo/odin-book-frontend',
  backendGitHubLink: 'https://github.com/dziubenzo/odin-book-backend',
  demoLink: 'https://dziubenzo-odin-book.netlify.app/',
  screenshotsDesktop: [
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122123/personal_website/screenshots_desktop/re44iu65vc4j2a2fsjn8.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122123/personal_website/screenshots_desktop/rknvjdub19gezmarerap.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122122/personal_website/screenshots_desktop/qo4jcsljhlecuashx18b.png',
  ],
  screenshotsMobile: [
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122136/personal_website/screenshots_mobile/evv6wyf7iphg3emzouww.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122136/personal_website/screenshots_mobile/zkwfwhn0zkwnxhumbpdx.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122136/personal_website/screenshots_mobile/xbqiyzsirzddpq8igl3q.png',
  ],
  frontendStack: [
    skillIcons.javascript,
    skillIcons.react,
    skillIcons.reactRouter,
    skillIcons.styledComponents,
    skillIcons.vitest,
  ],
  backendStack: [
    skillIcons.nodeJS,
    skillIcons.express,
    skillIcons.cloudinary,
    skillIcons.passport,
    skillIcons.vitest,
  ],
};
