import { IconType } from 'react-icons';
import {
  SiCloudinary,
  SiCss3,
  SiCssmodules,
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNodedotjs,
  SiNpm,
  SiPassport,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiSass,
  SiSocketdotio,
  SiStyledcomponents,
  SiTypescript,
  SiVisualstudiocode,
  SiVite,
  SiVitest,
} from 'react-icons/si';

export type SkillIcon = {
  icon: IconType;
  description: string;
  category: 'Frontend' | 'Backend' | 'Testing' | 'Other';
};

export const skillIcons = {
  cloudinary: {
    icon: SiCloudinary,
    description: 'Cloudinary',
    category: 'Backend',
  },
  css: { icon: SiCss3, description: 'CSS', category: 'Frontend' },
  cssModules: {
    icon: SiCssmodules,
    description: 'CSS Modules',
    category: 'Frontend',
  },
  express: { icon: SiExpress, description: 'Express', category: 'Backend' },
  git: { icon: SiGit, description: 'Git', category: 'Other' },
  github: { icon: SiGithub, description: 'GitHub', category: 'Other' },
  chromeDevTools: {
    icon: SiGooglechrome,
    description: 'Chrome DevTools',
    category: 'Other',
  },
  html: { icon: SiHtml5, description: 'HTML', category: 'Frontend' },
  javascript: {
    icon: SiJavascript,
    description: 'JavaScript',
    category: 'Frontend',
  },
  jest: { icon: SiJest, description: 'Jest', category: 'Testing' },
  markdown: { icon: SiMarkdown, description: 'Markdown', category: 'Other' },
  mongoDB: { icon: SiMongodb, description: 'MongoDB', category: 'Backend' },
  mongoose: { icon: SiMongoose, description: 'Mongoose', category: 'Backend' },
  netlify: { icon: SiNetlify, description: 'Netlify', category: 'Other' },
  nodeJS: { icon: SiNodedotjs, description: 'Node.js', category: 'Backend' },
  npm: { icon: SiNpm, description: 'npm', category: 'Other' },
  passport: { icon: SiPassport, description: 'Passport', category: 'Backend' },
  postman: { icon: SiPostman, description: 'Postman', category: 'Testing' },
  react: { icon: SiReact, description: 'React', category: 'Frontend' },
  reactRouter: {
    icon: SiReactrouter,
    description: 'React Router',
    category: 'Frontend',
  },
  typescript: {
    icon: SiTypescript,
    description: 'TypeScript',
    category: 'Frontend',
  },
  sass: { icon: SiSass, description: 'Sass', category: 'Frontend' },
  socketIO: {
    icon: SiSocketdotio,
    description: 'Socket.IO',
    category: 'Backend',
  },
  styledComponents: {
    icon: SiStyledcomponents,
    description: 'styled-components',
    category: 'Frontend',
  },
  vsCode: {
    icon: SiVisualstudiocode,
    description: 'VS Code',
    category: 'Other',
  },
  vite: { icon: SiVite, description: 'Vite', category: 'Other' },
  vitest: { icon: SiVitest, description: 'Vitest', category: 'Testing' },
} as const satisfies Record<string, SkillIcon>;
