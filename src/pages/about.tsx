import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import { H1, Paragraph } from '@/components/Typography';

export default function AboutPage() {
  const customMetadata = {
    title: 'About',
    canonical: 'https://duypham2108.github.io/about',
    openGraph: {
      url: 'https://duypham2108.github.io/about',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <Main>
        <Section>
          <H1>About me</H1>
          <article className='prose mt-6 max-w-none'>
            <Paragraph>
              Hello! I'm Duy Pham. I'm a computational biologist & bioinformatics engineer
              from Vietnam.
            </Paragraph>
            <Paragraph>
                🔭 I'm PhD student from the Genomic and Machine Learning Labs, Institute for Molecular Bioscience, the University of Queensland.
                <br />
                🌱 I’m working on computational biology field.
                <br />
                👯 My expertise is in analysing omics data.
            </Paragraph>
            <Paragraph>
              If you want to{' '}
              <Link href='/contact'>
                <a className='text-primary hover:text-primary/70'>contact me</a>
              </Link>
              , go ahead and send me a message through the contact form on the
              contact page. I'll be happy to connect and get oportunity for a new job position.
            </Paragraph>
          </article>
        </Section>
      </Main>
    </>
  );
}
