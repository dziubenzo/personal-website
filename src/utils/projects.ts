import { SkillIcon, skillIcons } from './skills';

type ProjectNames =
  | 'projectsGuessEyeName'
  | 'projectsAuroraName'
  | 'projectsTalkyTalkyName'
  | 'projectsWhereIsWallyName';

type ProjectDescriptions =
  | 'projectsGuessEyeDescription'
  | 'projectsAuroraDescription'
  | 'projectsTalkyTalkyDescription'
  | 'projectsWhereIsWallyDescription';

export type Project = {
  name: ProjectNames;
  description: ProjectDescriptions;
  frontendGitHubLink: string;
  backendGitHubLink?: string;
  demoLink: string;
  screenshots: [string, string, string];
  frontendStack: SkillIcon[];
  backendStack?: SkillIcon[];
};

export const guesseye: Project = {
  name: 'projectsGuessEyeName',
  description: 'projectsGuessEyeDescription',
  frontendGitHubLink: 'https://github.com/dziubenzo/guesseye',
  demoLink: 'https://www.guesseye.com/',
  screenshots: ['./guesseye/1.png', './guesseye/2.png', './guesseye/3.png'],
  frontendStack: [
    skillIcons.nextJS,
    skillIcons.typescript,
    skillIcons.tailwind,
    skillIcons.shadcnui,
  ],
  backendStack: [
    skillIcons.nextJS,
    skillIcons.typescript,
    skillIcons.postgresql,
    skillIcons.drizzle,
    skillIcons.puppeteer,
    skillIcons.zod,
  ],
};

export const aurora: Project = {
  name: 'projectsAuroraName',
  description: 'projectsAuroraDescription',
  frontendGitHubLink: 'https://github.com/dziubenzo/odin-book-frontend',
  backendGitHubLink: 'https://github.com/dziubenzo/odin-book-backend',
  demoLink: 'https://dziubenzo-odin-book.netlify.app/',
  screenshots: ['./aurora/1.png', './aurora/2.png', './aurora/3.png'],
  frontendStack: [
    skillIcons.typescript,
    skillIcons.react,
    skillIcons.reactRouter,
    skillIcons.styledComponents,
    skillIcons.vitest,
  ],
  backendStack: [
    skillIcons.typescript,
    skillIcons.nodeJS,
    skillIcons.express,
    skillIcons.mongoDB,
    skillIcons.cloudinary,
    skillIcons.passport,
    skillIcons.vitest,
  ],
};

export const talkyTalky: Project = {
  name: 'projectsTalkyTalkyName',
  description: 'projectsTalkyTalkyDescription',
  frontendGitHubLink: 'https://github.com/dziubenzo/messaging-app-frontend',
  backendGitHubLink: 'https://github.com/dziubenzo/messaging-app-backend',
  demoLink: 'https://dziubenzo-messaging-app.netlify.app/',
  screenshots: [
    './talky-talky/1.png',
    './talky-talky/2.png',
    './talky-talky/3.png',
  ],
  frontendStack: [
    skillIcons.typescript,
    skillIcons.react,
    skillIcons.reactRouter,
    skillIcons.socketIO,
    skillIcons.styledComponents,
  ],
  backendStack: [
    skillIcons.typescript,
    skillIcons.nodeJS,
    skillIcons.express,
    skillIcons.mongoDB,
    skillIcons.socketIO,
    skillIcons.passport,
  ],
};

export const whereIsWally: Project = {
  name: 'projectsWhereIsWallyName',
  description: 'projectsWhereIsWallyDescription',
  frontendGitHubLink: 'https://github.com/dziubenzo/where-is-wally-frontend',
  backendGitHubLink: 'https://github.com/dziubenzo/where-is-wally-backend',
  demoLink: 'https://dziubenzo-where-is-wally.netlify.app/',
  screenshots: [
    './wheres-wally/1.png',
    './wheres-wally/2.png',
    './wheres-wally/3.png',
  ],
  frontendStack: [
    skillIcons.typescript,
    skillIcons.react,
    skillIcons.reactRouter,
    skillIcons.styledComponents,
  ],
  backendStack: [
    skillIcons.typescript,
    skillIcons.nodeJS,
    skillIcons.express,
    skillIcons.mongoDB,
  ],
};
