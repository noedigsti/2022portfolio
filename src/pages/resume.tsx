import React from 'react';
import Link from 'next/link';
import Container from '../common/components/Container';

export default function Resume() {
  return (
    <Container title="Resume – Cuong Minh Vu">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <Link href={'/public/[UPDATED] Cuong Minh Vu Resume.pdf'}>
          <a className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900">
            <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
              Click to view my Resume!
            </h3>
          </a>
        </Link>
      </div>
    </Container>
  );
}
