// No webpack (not sure) or supertest (no icon)

import { IconType } from 'react-icons';

import {
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

type SkillIcon = {
  icon: IconType;
  description: string;
};

type SkillIcons = SkillIcon[];

export const skillIcons: SkillIcons = [
  { icon: SiCss3, description: 'CSS' },
  { icon: SiCssmodules, description: 'CSS Modules' },
  { icon: SiExpress, description: 'Express' },
  { icon: SiGit, description: 'Git' },
  { icon: SiGithub, description: 'GitHub' },
  { icon: SiGooglechrome, description: 'Chrome DevTools' },
  { icon: SiHtml5, description: 'HTML' },
  { icon: SiJavascript, description: 'JavaScript' },
  { icon: SiJest, description: 'Jest' },
  { icon: SiLinux, description: 'Linux' },
  { icon: SiMarkdown, description: 'Markdown' },
  { icon: SiMongodb, description: 'MongoDB' },
  { icon: SiNetlify, description: 'Netlify' },
  { icon: SiNodedotjs, description: 'Node.js' },
  { icon: SiNpm, description: 'npm' },
  { icon: SiPassport, description: 'Passport' },
  { icon: SiReact, description: 'React' },
  { icon: SiReactrouter, description: 'React Router' },
  { icon: SiTypescript, description: 'TypeScript' },
  { icon: SiSass, description: 'Sass' },
  { icon: SiSocketdotio, description: 'Socket.IO' },
  { icon: SiStyledcomponents, description: 'styled-components' },
  { icon: SiVisualstudiocode, description: 'VS Code' },
  { icon: SiVite, description: 'Vite' },
  { icon: SiVitest, description: 'Vitest' },
];
