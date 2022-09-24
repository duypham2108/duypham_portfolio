import { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import clsx from 'clsx';
import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';
import { BsArrowRight } from 'react-icons/bs';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import Card from '@/components/cards/Card';
import FeaturedPostCard from '@/components/cards/FeaturedPostCard';
import GithubCard from '@/components/cards/GithubCard';
import Demo from '@/components/chart/demo'
import CurrentGoals from '@/components/CurrentGoals';
import { H1, H2, H4, Paragraph } from '@/components/Typography';

import { jobs } from '@/fixtures/jobs';

import { display,repoState } from "../stores/reducer";
import { wrapper }  from '../stores/store';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(display); 
      const repos = store.getState().repoReducer.repoList

      const posts = allPosts.filter((post) => post.isFeatured);
      const featuredPosts = posts.map((post) =>
        pick(post, ['_id', 'title', 'slug', 'readingTime'])
      );
      return {
        props: {
          repos,
          featuredPosts
        },
      };
    }
);

function HomePage({
  featuredPosts,
  repos
}:any) {
  const customMetadata = {
    title: 'Home',
    canonical: 'https://duypham.github.io/',
    openGraph: {
      url: 'https://duypham.github.io/',
    },
  };
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <>
      <NextSeo {...customMetadata} />

      <Main>
        {/* Hero */}
        <Section>
          <header>
            <div className="flex flex-row ...">
              <div className='md:w-2/3'>
                <H1>Hi, I&apos;m Duy Pham</H1>
                <Paragraph className='mb-3 text-gray-400 dark:text-slate-400'>
                  Computational biologist & Bioinformatics engineer
                </Paragraph>
                <Paragraph>
                Solutions oriented Computational Biologist with 6 years of experience working in both industry and academia. 
                Passionate about solving real life problems and discovering new insights from diseases and traits.
                </Paragraph>
              </div>
              <div className='md:w-1/4 container mx-auto' 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                {isHovering ? (
                  <Image src="/static/images/photo2.png" width={180} height={190} alt="avatar" className='mx-auto' />
                ) : (
                  <Image src="/static/images/photo.jpg" width={180} height={190} alt="avatar" className='mx-auto' />
                )}
                
              </div>
            </div>
          </header>
          <div className='h-[32rem]'>
          <Demo></Demo>
          </div>
          
          
          
          
        </Section>

        {/* What I do */}
        <Section>
          <H2>My Skills</H2>

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {jobs.map((job) => (
              <Card key={job.id} className='hover:border-primary hover:bg-teal-300 hover:bg-opacity-10'>
                <div className='flex flex-col'>
                  <H4>{job.title}</H4>
                  <Paragraph className='text-sm dark:text-gray-300'>
                    {job.description}
                  </Paragraph>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Featured Posts */}
        <Section>
          <H2>Research Projects</H2>

          <div className='mb-4 flex flex-col gap-6 md:flex-row'>
            {featuredPosts.map((post:any) => (
              <FeaturedPostCard
                key={post._id}
                title={post.title}
                slug={post.slug}
                readingTime={post.readingTime}
              />
            ))}
          </div>

          <Link href='/blog'>
            <a
              className={clsx(
                'flex items-center text-gray-500 transition-colors ease-in-out',
                'hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              )}
            >
              See all posts <BsArrowRight className='ml-2' />
            </a>
          </Link>
        </Section>

        {/* Featured Projects */}
        <Section>
          <H2>Coding Projects</H2>
          <Paragraph className='mb-4'>
            Here you can see some of the projects I've work on. This are fetchet
            from Github using Github's GraphQL API.
          </Paragraph>

          <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {repos.map((repo:repoState) => (
              <GithubCard key={repo.id} repo={repo} />
            ))}
          </div>

          <Link href='/portfolio'>
            <a
              className={clsx(
                'flex items-center text-gray-500 transition-colors ease-in-out',
                'hover:text-gray-700 dark:text-slate-400 dark:hover:text-gray-200'
              )}
            >
              See all projects <BsArrowRight className='ml-2' />
            </a>
          </Link>
        </Section>

        {/* Current Goals */}
        <Section>
          <H2>What I'm up to right now</H2>
          <CurrentGoals />
        </Section>
      </Main>
    </>
  );
}

export default wrapper.withRedux(HomePage);
