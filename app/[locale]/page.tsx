"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function LocalePage({ params }: { params: { locale: string } }) {
  const [selectedLocale, setSelectedLocale] = useState(params.locale || 'en');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            {selectedLocale === 'ar' ? 'مرحبا بكم في عام جديد سعيد!' : 'Welcome to Happy New Year!'}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            {selectedLocale === 'ar'
              ? 'استكشف تطبيقنا للتعرف على تقليد رأس السنة ومشاركتها مع الأصدقاء والعائلة.'
              : 'Explore our app to learn about New Year traditions and share them with friends and family.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 w-full max-w-6xl">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-3xl p-8 border-4 border-gray-200 hover:border-indigo-500 transition-all transform hover:-translate-y-2 duration-300 shadow-xl hover:shadow-2xl">
              <div className="text-indigo-600 mb-6">
                <Globe className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-extrabold mb-6 text-gray-900">
                {selectedLocale === 'ar' ? 'مرحبا بكم في عام جديد سعيد!' : 'Welcome to Happy New Year!'}
              </h3>
              <p className="text-xl text-gray-600">
                {selectedLocale === 'ar'
                  ? 'هذا تطبيق رائع للاحتفال بالعام الجديد ومشاركة اللحظات السعيدة مع الأصدقاء والعائلة.'
                  : 'This is a wonderful app to celebrate the New Year and share happy moments with friends and family.'}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-6">
          <Link
            href="/en"
            onClick={() => setSelectedLocale('en')}
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            English
          </Link>
          <Link
            href="/ar"
            onClick={() => setSelectedLocale('ar')}
            className="px-8 py-4 bg-green-600 text-white font-bold rounded-full text-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            العربية
          </Link>
        </div>
      </main>
    </div>
  );
}