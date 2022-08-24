import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExternalLink from '../ExternalLink';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a
              href="#Home"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              href="#About"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              About
            </a>
          </Link>
          <Link href="/projects">
            <a
              href="#Projects"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Projects
            </a>
          </Link>
          <Link href="/resume">
            <a
              href="#Resume"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Resume
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://linkedin.com/in/cuongminhvu">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/noedigsti">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://twitter.com/noedigsti_">
            Twitter
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
