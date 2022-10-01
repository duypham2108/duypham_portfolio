import React from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import type { Post } from 'contentlayer/generated';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import { H4, Paragraph } from '@/components/Typography';

import { Views } from '@/types';

export default function FeaturedPostCard({
  title,
  slug,
  readingTime,
}: Pick<Post, 'title' | 'slug' | 'readingTime'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/research/${slug}`}>
      <a
        className={clsx(
          'transform transition-all ease-out hover:scale-[1.02]',
          'w-full rounded-lg bg-gradient-to-tr p-1 md:w-1/3',
          'from-teal-300 via-teal-500 to-emerald-400'
        )}
      >
        <div className='flex h-full flex-col justify-between rounded-md bg-white p-4 dark:bg-slate-800'>
          <div className='flex flex-col justify-between sm:flex-row'>
            <H4 className='mb-6 w-full text-lg tracking-tight sm:mb-10 md:text-xl'>
              {title}
            </H4>
          </div>
        </div>
      </a>
    </Link>
  );
}
