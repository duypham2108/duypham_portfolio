import { PropsWithChildren } from 'react';

import { NextSeo } from 'next-seo';

import clsx from 'clsx';
import { Snippet } from 'contentlayer/generated';

import { Section } from '@/components/base';
import { Main } from '@/components/base';

export default function SnippetLayout({
  children,
  snippet,
}: PropsWithChildren<{ snippet: Snippet }>) {
  const customMetadata = {
    title: 'Library',
    canonical: `htpps://duypham2108.github.io/library/${snippet.slug}`,
    openGraph: {
      url: `https://duypham2108.vercel.app/library/${snippet.slug}`,
      type: 'article',
    },
    additionalMetaTags: [
      {
        ...(((snippet.tags ?? undefined) && {
          name: 'keywords',
          content: snippet.tags.replace(/,/g, ', '),
        }) as any),
      },
    ],
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <Main>
        <h1 className='mb-4'>{snippet.title}</h1>
        <p className='mb-6 text-gray-500 dark:text-gray-300'>
          {snippet.description}
        </p>

        <Section
          className={clsx(
            'prose max-w-none prose-li:marker:text-primary dark:prose-invert',
            'prose-a:no-underline prose-li:marker:text-lg'
          )}
        >
          {children}
        </Section>
      </Main>
    </>
  );
}
