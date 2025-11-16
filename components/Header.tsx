'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header({ currentLocale }: { currentLocale?: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Function to scroll to a section and update active state
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    closeDrawer();
  };

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero-section',
        'lesson-objectives',
        'question',
        'vocabulary',
        'matching',
        'main-idea',
        'country-quiz',
        'new-year-sentences',
        'favorite-celebration'
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-20 max-w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl font-bold text-gray-600 capitalize">
              grade seven
            </h1>
          </div>

          {/* Mobile menu button */}
          <button
            type='button'
            className='cursor-pointer sm:hidden'
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className='hidden sm:flex items-center space-x-4 sm:space-x-6 capitalize text-gray-800'>
            <button
              onClick={() => scrollToSection('hero-section')}
              className={`text-sm sm:text-base ${activeSection === 'hero-section' ? 'text-blue-600 font-bold' : ''}`}
            >
              home
            </button>
            <button
              onClick={() => scrollToSection('lesson-objectives')}
              className={`text-sm sm:text-base ${activeSection === 'lesson-objectives' ? 'text-blue-600 font-bold' : ''}`}
            >
              objectives
            </button>
            <button
              onClick={() => scrollToSection('question')}
              className={`text-sm sm:text-base ${activeSection === 'question' ? 'text-blue-600 font-bold' : ''}`}
            >
              question
            </button>
            <button
              onClick={() => scrollToSection('vocabulary')}
              className={`text-sm sm:text-base ${activeSection === 'vocabulary' ? 'text-blue-600 font-bold' : ''}`}
            >
              vocabulary
            </button>
            <button
              onClick={() => scrollToSection('matching')}
              className={`text-sm sm:text-base ${activeSection === 'matching' ? 'text-blue-600 font-bold' : ''}`}
            >
              matching
            </button>
            <button
              onClick={() => scrollToSection('main-idea')}
              className={`text-sm sm:text-base ${activeSection === 'main-idea' ? 'text-blue-600 font-bold' : ''}`}
            >
              main idea
            </button>
            <button
              onClick={() => scrollToSection('country-quiz')}
              className={`text-sm sm:text-base ${activeSection === 'country-quiz' ? 'text-blue-600 font-bold' : ''}`}
            >
              country quiz
            </button>
            <button
              onClick={() => scrollToSection('new-year-sentences')}
              className={`text-sm sm:text-base ${activeSection === 'new-year-sentences' ? 'text-blue-600 font-bold' : ''}`}
            >
              sentences
            </button>
            <button
              onClick={() => scrollToSection('favorite-celebration')}
              className={`text-sm sm:text-base ${activeSection === 'favorite-celebration' ? 'text-blue-600 font-bold' : ''}`}
            >
              celebration
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 sm:hidden ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold text-gray-800">Menu</h2>
            <button
              type="button"
              className="cursor-pointer"
              onClick={closeDrawer}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4 capitalize text-gray-800">
            <button
              onClick={() => scrollToSection('hero-section')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'hero-section' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              home
            </button>
            <button
              onClick={() => scrollToSection('lesson-objectives')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'lesson-objectives' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              objectives
            </button>
            <button
              onClick={() => scrollToSection('question')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'question' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              question
            </button>
            <button
              onClick={() => scrollToSection('vocabulary')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'vocabulary' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              vocabulary
            </button>
            <button
              onClick={() => scrollToSection('matching')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'matching' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              matching
            </button>
            <button
              onClick={() => scrollToSection('main-idea')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'main-idea' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              main idea
            </button>
            <button
              onClick={() => scrollToSection('country-quiz')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'country-quiz' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              country quiz
            </button>
            <button
              onClick={() => scrollToSection('new-year-sentences')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'new-year-sentences' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              sentences
            </button>
            <button
              onClick={() => scrollToSection('favorite-celebration')}
              className={`text-base py-2 px-4 rounded text-left ${activeSection === 'favorite-celebration' ? 'text-blue-600 font-bold bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              celebration
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 sm:hidden"
          onClick={closeDrawer}
        />
      )}
    </header>
  );
}