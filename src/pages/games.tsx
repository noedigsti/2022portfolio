import Link from 'next/link';
import React from 'react';
// import NextLink from 'next/link';
import Container from '../common/components/Container';

export default function Projects() {
  return (
    <Container title="Projects – Cuong Minh Vu">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Games
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          A collection of game projects I&apos;ve worked on.
        </p>
        <a
          href={'https://github.com/noedigsti/IGB400'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        >
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            Doggo Let&apos;s Go
          </h3>
          <p className="mt-1 text-gray-700 dark:text-gray-400">
            A mobile game - GitHub
          </p>
        </a>
        <br />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Gallery
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Screenshots, footages and other media of my games.
        </p>
        <h1 className="text-3xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Doggo Let&apos;s Go
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          A 3D, side-scrolling mobile platformer where you play as a brave doggo
          in a shiny armor who fights evil slimes.
        </p>
        <img
          src={'/gallery/Doggo-Lets-Go.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Doggo-Lets-Go-01.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Doggo-Lets-Go-02.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Doggo-Lets-Go-03.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <iframe
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e56ZF1aLxBc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br />
        <h1 className="text-3xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Buddy&apos;s Adventure
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          An interactive arcade game for special needs children on PC.
        </p>
        <img
          src={'/gallery/Buddys-Adventure-01.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Buddys-Adventure-02.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Buddys-Adventure-03.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Buddys-Adventure-04.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Buddys-Adventure-05.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Buddys-Adventure-06.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Buddys-Adventure-07.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/Buddys-Adventure-08.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <br />
        <h1 className="text-3xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Other Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Misc. of game prototypes and demos of various gameplay mechanics.
        </p>
        <img
          src={'/gallery/BurgerCop-developer-1.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/BurgerCop-developer-2.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/BurgerCop-developer-3.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/BurgerCop-developer-4.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/BurgerCop-developer-5.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/BurgerCop-developer-6.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/shmup-banner.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/shmup-developer-1.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/shmup-developer-2.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/shmup-developer-3.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/shmup-developer-4.webp'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
        <img
          src={'/gallery/strategy-game-concept.gif'}
          className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        />
      </div>
    </Container>
  );
}
