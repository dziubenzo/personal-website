// No webpack (not sure) or supertest (no icon)

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
  SiLinux,
  SiMarkdown,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiNpm,
  SiPassport,
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
};

export const skillIcons = {
  cloudinary: { icon: SiCloudinary, description: 'Cloudinary' },
  css: { icon: SiCss3, description: 'CSS' },
  cssModules: { icon: SiCssmodules, description: 'CSS Modules' },
  express: { icon: SiExpress, description: 'Express' },
  git: { icon: SiGit, description: 'Git' },
  github: { icon: SiGithub, description: 'GitHub' },
  chromeDevTools: { icon: SiGooglechrome, description: 'Chrome DevTools' },
  html: { icon: SiHtml5, description: 'HTML' },
  javascript: { icon: SiJavascript, description: 'JavaScript' },
  jest: { icon: SiJest, description: 'Jest' },
  linux: { icon: SiLinux, description: 'Linux' },
  markdown: { icon: SiMarkdown, description: 'Markdown' },
  mongoDB: { icon: SiMongodb, description: 'MongoDB' },
  netlify: { icon: SiNetlify, description: 'Netlify' },
  nodeJS: { icon: SiNodedotjs, description: 'Node.js' },
  npm: { icon: SiNpm, description: 'npm' },
  passport: { icon: SiPassport, description: 'Passport' },
  react: { icon: SiReact, description: 'React' },
  reactRouter: { icon: SiReactrouter, description: 'React Router' },
  typescript: { icon: SiTypescript, description: 'TypeScript' },
  sass: { icon: SiSass, description: 'Sass' },
  socketIO: { icon: SiSocketdotio, description: 'Socket.IO' },
  styledComponents: {
    icon: SiStyledcomponents,
    description: 'styled-components',
  },
  vsCode: { icon: SiVisualstudiocode, description: 'VS Code' },
  vite: { icon: SiVite, description: 'Vite' },
  vitest: { icon: SiVitest, description: 'Vitest' },
} as const satisfies Record<string, SkillIcon>;
