'use client';

import Link from 'next/link';

export default function Header({ currentLocale }: { currentLocale?: string }) {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl font-bold text-gray-600 capitalize">
              grade seven
            </h1>
          </div>
          <div className='hidden xs:flex items-center space-x-4 sm:space-x-6 capitalize text-gray-800'>
            <Link href={'#hero-section'} className="text-sm sm:text-base">home</Link>
            <Link href={'#question'} className="text-sm sm:text-base">question</Link>
            <Link href={'#vocabulary'} className="text-sm sm:text-base">vocabulary</Link>
            <Link href={'#matching'} className="text-sm sm:text-base">matching</Link>
          </div>
          <div className='xs:hidden flex items-center'>
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}