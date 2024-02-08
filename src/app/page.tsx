'use client';
import Image from 'next/image';
import LoadingSplash from '@/components/intro/LoadingSplash';
import AnimateBgSectionPage from '@/components/AnimateBgSection';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import {
  RiGameLine,
  RiGithubLine,
  RiGitlabFill,
  RiGitlabLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiWhatsappLine
} from 'react-icons/ri';
export default function HomePage() {
  const [, setTypingStatus] = useState('Initializing');
  return (
    <div className="px-4">
      <section className="flex h-full min-h-screen items-center justify-center">
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          {/*<LoadingSplash />*/}
          <Image className="relative" src="/logo.svg" alt="Mehdi Vaezi Logo" width={180} height={180} priority />
          <h1 className="mt-8 text-4xl font-bold">Mehdi Vaezi</h1>
          <h2 className="mb-2 text-[107%] font-light">Senior Front-End Developer</h2>

          <TypeAnimation
            className=""
            sequence={[
              1000,
              'Javascript Engineer',
              4000,
              'React/Next Developer',
              3000,
              'Vue/Nuxt Developer',
              3000,
              'React-Native Developer',
              2000
            ]}
            speed={60}
            deletionSpeed={80}
            wrapper={'h6'}
            repeat={Infinity}
          />

          <article className="mt-6 max-w-2xl">
            <p>
              i`m a software engineer with 10+ years of professional experience developing end-to-end software
              solutions.
            </p>
            <p>
              I enjoying challenge and engaging with projects that require me to learn more and to become powerful in
              development techniques, A few I would like to highlight that would enable me to contribute are:
            </p>
            <ul className="mt-1 list-disc ps-8">
              <li>Highly skilled in designing, testing, and developing software</li>
              <li>Knowledgeable of front-end development best practices</li>
              <li>Hands-on software troubleshooting experience</li>
            </ul>
            <p className="mt-2">
              I am a full-stack developer and can design and implement projects with JavaScript frameworks from scratch,
              but due to my mastery of experience, I prefer to work only on the front-end.
            </p>
          </article>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a href="mailto:mvaezi.com@gmail.com" target="_blank">
              <RiMailLine size={25} />
            </a>
            <a href="https://gitlab.com/mvaezi" target="_blank">
              <RiGitlabLine size={25} />
            </a>
            <a href="https://github.com/mehdivaezi" target="_blank">
              <RiGithubLine size={25} />
            </a>
            <a href="https://www.linkedin.com/in/mvaezi/" target="_blank">
              <RiLinkedinLine size={25} />
            </a>
            <a href="https://www.instagram.com/_mvaezi/" target="_blank">
              <RiInstagramLine size={25} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=16282454637&text=Hello%2C%20I%20am%20sending%20a%20message%20through%20your%20site"
              target="_blank"
              rel="nofollow noopener"
            >
              <RiWhatsappLine size="25" />
            </a>
          </div>
        </div>
        <AnimateBgSectionPage />
      </section>
    </div>
  );
}
