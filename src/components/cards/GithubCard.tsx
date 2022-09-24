import clsx from 'clsx';
import { SiGithub, SiHtml5 } from 'react-icons/si';

import Card from './Card';
import { repoState } from "../../stores/reducer";

export default function GithubCard( {repo}:any | repoState ) {
  return (
    <Card
      className={clsx(
        'transition-all duration-300',
        'hover:scale-105 hover:border-primary hover:shadow-md hover:bg-teal-300 hover:bg-opacity-10'
      )}
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={repo.url}
        className='flex h-full flex-col'
      >
        <h4 className='flex items-center space-x-3'>
          <span>
          {repo.product === 'git' ? (
            <SiGithub />
          ) : repo.product === 'web' ? (
            <SiHtml5 />
          ): null}
          </span>
          <span className='bg-text-gradient'>{repo.name}</span>
        </h4>
        <p className='py-2 text-sm text-gray-500 dark:text-slate-300'>
          {repo.description}
        </p>
        <div className='mt-auto flex items-center space-x-2'>
          <div
            className={`h-2 w-2 ${repo.language.toLowerCase()} rounded-full`}
          />
          <span className='text-sm text-gray-500 dark:text-slate-300'>
            {repo.language}
          </span>
        </div>
      </a>
    </Card>
  );
}
