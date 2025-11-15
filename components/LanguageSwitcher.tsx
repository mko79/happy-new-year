'use client';

import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(`/${lng}`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all ${currentLocale === 'en'
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
      >
        <Globe className="mr-2 h-4 w-4" />
        EN
      </button>

      <button
        onClick={() => changeLanguage('ar')}
        className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all ${currentLocale === 'ar'
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
      >
        <Globe className="mr-2 h-4 w-4" />
        AR
      </button>
    </div>
  );
}