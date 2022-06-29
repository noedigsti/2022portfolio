import React from 'react';
// import NextLink from 'next/link';
import Container from '../common/components/Container';

export default function About() {
  return (
    <Container title="About – Cuong Minh Vu">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
      </div>
    </Container>
  );
}
