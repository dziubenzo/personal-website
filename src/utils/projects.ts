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
  screenshots: [string, string, string];
  frontendStack: SkillIcon[];
  backendStack?: SkillIcon[];
};

export const aurora: Project = {
  name: 'projectsAuroraName',
  description: 'projectsAuroraDescription',
  frontendGitHubLink: 'https://github.com/dziubenzo/odin-book-frontend',
  backendGitHubLink: 'https://github.com/dziubenzo/odin-book-backend',
  demoLink: 'https://dziubenzo-odin-book.netlify.app/',
  screenshots: [
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122123/personal_website/screenshots_desktop/re44iu65vc4j2a2fsjn8.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122123/personal_website/screenshots_desktop/rknvjdub19gezmarerap.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122122/personal_website/screenshots_desktop/qo4jcsljhlecuashx18b.png',
  ],
  frontendStack: [
    skillIcons.react,
    skillIcons.javascript,
    skillIcons.reactRouter,
    skillIcons.styledComponents,
    skillIcons.vitest,
  ],
  backendStack: [
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
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122106/personal_website/screenshots_desktop/jjxejbsnyxeolvgezo2m.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122106/personal_website/screenshots_desktop/hx67nqo5xyoszaqybjad.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122106/personal_website/screenshots_desktop/ertjhebioszvp7ho45mh.png',
  ],
  frontendStack: [
    skillIcons.react,
    skillIcons.javascript,
    skillIcons.reactRouter,
    skillIcons.socketIO,
    skillIcons.styledComponents,
  ],
  backendStack: [
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
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723563659/personal_website/screenshots_desktop/mefyct5ae7cglaedlz8i.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723563659/personal_website/screenshots_desktop/s9auksjhh0yuk8rqtyn7.png',
    'https://res.cloudinary.com/dvhkp9wc6/image/upload/v1723122100/personal_website/screenshots_desktop/rvcgukbgsdjfftqlplqo.png',
  ],
  frontendStack: [
    skillIcons.react,
    skillIcons.javascript,
    skillIcons.reactRouter,
    skillIcons.styledComponents,
  ],
  backendStack: [skillIcons.nodeJS, skillIcons.express, skillIcons.mongoDB],
};
