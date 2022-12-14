import React from 'react';

import clsx from 'clsx';
import {
  SiCss3,
  SiDjango,
  SiFirebase,
  SiGatsby,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMinutemailer,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from 'react-icons/si';

import Tooltip from './Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-4')}>
      {techs.map((tech, index) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={index} content={<p>{current.name}</p>}>
            <li className='text-xl text-gray-700 dark:text-slate-300'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
  html: {
    icon: SiHtml5,
    name: 'HTML',
  },
  css: {
    icon: SiCss3,
    name: 'CSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  react: {
    icon: SiReact,
    name: 'React',
  },
  vue: {
    icon: SiVuedotjs,
    name: 'Vue',
  },
  next: {
    icon: SiNextdotjs,
    name: 'Next Js',
  },
  gatsby: {
    icon: SiGatsby,
    name: 'Gatsby Js',
  },
  python: {
    icon: SiPython,
    name: 'Python',
  },
  django: {
    icon: SiDjango,
    name: 'Django',
  },
  node: {
    icon: SiNodedotjs,
    name: 'Node Js',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  mysql: {
    icon: SiMysql,
    name: 'Mysql',
  },
  postgresql: {
    icon: SiPostgresql,
    name: 'Postgresql',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  tailwind: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  typescript: {
    icon: SiTypescript,
    name: 'Typescript',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion',
  },
  vercel: {
    icon: SiVercel,
    name: 'Vercel',
  },
  sass: {
    icon: SiSass,
    name: 'Sass',
  },
  sendgrid: {
    icon: SiMinutemailer,
    name: 'SendGrid',
  },
  svelte: {
    icon: SiSvelte,
    name: 'Svelte',
  },
};
