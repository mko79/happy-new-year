'use client';

import Link from 'next/link';

export default function Header({ }: { currentLocale: string }) {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gaay-600 capitalize">
              grade seven
            </h1>
          </div>
          <div className='flex items-center space-x-6 capitalize text-gray-800'>
            <Link href={'#hero-section'}>home</Link>
            <Link href={'#question'}>question</Link>
            <Link href={'#vocabulary'}>vocabulary</Link>
          </div>
        </div>
      </div>
    </header>
  );
}