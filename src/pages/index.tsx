import NextLink from 'next/link';
import Image from 'next/image';
import Container from '../common/components/Container';

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Cuong Minh Vu
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineering & Web Developing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
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
          Featured
        </h3>
        
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal website for showcasing my work.
          </p>
        </div>
      </div>
    </Container>
  );
}
