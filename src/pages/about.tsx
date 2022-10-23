import Image from 'next/image';
import React from 'react';
// import NextLink from 'next/link';
import Container from '../common/components/Container';

export default function About() {
  return (
    <Container title="About – Cuong Minh Vu">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Cuong Minh Vu
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              <ul>
                <li>
                  <i>Software Engineer</i>
                </li>
                <li>
                  <i>Game Developer</i>
                </li>
                <li>
                  <i>Technology Enthusiast</i>
                </li>
              </ul>
            </h2>
          </div>
          <div className="w-[80px] sm:w-[220px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Cuong Minh Vu"
              height={220}
              width={220}
              src="/profile.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Hello 👋
        </h3>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            My name is Cuong Minh Vu.
            <br />I am a Graduate student from Queensland University of
            Technology.
          </p>
        </div>
      </div>
    </Container>
  );
}
