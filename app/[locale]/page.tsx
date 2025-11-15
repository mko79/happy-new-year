import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home({ locale }: { locale: string }) {
  // Since this is a server component, we can't use hooks directly
  // We'll pass the locale as a prop and use client components for interactivity

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-indigo-600 mb-6">
          {locale === 'ar' ? 'مرحبا بكم في عام جديد سعيد!' : 'Welcome to Happy New Year!'}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 text-center mb-10">
          {locale === 'ar' ? 'هذا تطبيق Next.js مع دعم متعدد اللغات.' : 'This is a Next.js application with multi-language support.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/en"
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${locale === 'en'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            <Globe className="mr-2 h-5 w-5" />
            English
          </Link>

          <Link
            href="/ar"
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${locale === 'ar'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            <Globe className="mr-2 h-5 w-5" />
            العربية
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-indigo-600 mb-3">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'ar' ? 'مرحبا بكم في عام جديد سعيد!' : 'Welcome to Happy New Year!'}
              </h3>
              <p className="text-gray-600">
                {locale === 'ar' ? 'هذا تطبيق Next.js مع دعم متعدد اللغات.' : 'This is a Next.js application with multi-language support.'}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Happy New Year App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  };
}