import Link from 'next/link';
import React from 'react';
// import NextLink from 'next/link';
import Container from '../common/components/Container';

export default function Projects() {
  return (
    <Container title="Projects – Cuong Minh Vu">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          A collection of software projects I&apos;ve worked on.
        </p>
        <a
          href={'https://github.com/noedigsti/My-Community-Landmark'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        >
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            Landmark
          </h3>
          <p className="mt-1 text-gray-700 dark:text-gray-400">
            Latest project
          </p>
        </a>
        <a
          href={'https://github.com/noedigsti/2022portfolio'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        >
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            cuongminhvu.xyz
          </h3>
          <p className="mt-1 text-gray-700 dark:text-gray-400">
            Personal Full-Stack Website
          </p>
        </a>
      </div>
    </Container>
  );
}
