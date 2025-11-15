import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home({ locale }: { locale: string }) {
  // Since this is a server component, we can't use hooks directly
  // We'll pass the locale as a prop and use client components for interactivity

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 xs:p-6 sm:p-8">
      <main className="flex flex-col items-center justify-center w-full max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-4xl bg-white rounded-xl xs:rounded-2xl shadow-xl p-4 xs:p-6 sm:p-8 md:p-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-indigo-600 mb-4 xs:mb-6">
          {locale === 'ar' ? 'مرحبا بكم في عام جديد سعيد!' : 'Welcome to Happy New Year!'}
        </h1>

        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 text-center mb-6 xs:mb-8 sm:mb-10">
          {locale === 'ar' ? 'هذا تطبيق Next.js مع دعم متعدد اللغات.' : 'This is a Next.js application with multi-language support.'}
        </p>

        <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mb-8 xs:mb-10 sm:mb-12">
          <Link
            href="/en"
            className={`flex items-center justify-center px-4 xs:px-5 sm:px-6 py-2 xs:py-3 rounded-lg font-medium transition-all ${locale === 'en'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            <Globe className="mr-2 h-4 w-4 xs:h-5 xs:w-5" />
            English
          </Link>

          <Link
            href="/ar"
            className={`flex items-center justify-center px-4 xs:px-5 sm:px-6 py-2 xs:py-3 rounded-lg font-medium transition-all ${locale === 'ar'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            <Globe className="mr-2 h-4 w-4 xs:h-5 xs:w-5" />
            العربية
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 hover:border-indigo-400 transition-all transform hover:-translate-y-1 duration-300 shadow-md hover:shadow-lg">
              <div className="text-indigo-600 mb-3 sm:mb-4">
                <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                {locale === 'ar' ? 'مرحبا بكم في عام جديد سعيد!' : 'Welcome to Happy New Year!'}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                {locale === 'ar' ? 'هذا تطبيق Next.js مع دعم متعدد اللغات.' : 'This is a Next.js application with multi-language support.'}
              </p>
            </div>
          ))}
        </div>

        {/* Main Idea Section */}
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
            {locale === 'ar' ? 'ما هي الفكرة الرئيسية للنص؟' : 'What is the main idea of the text?'}
          </h2>
          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              onClick={() => alert(locale === 'ar'
                ? 'الفكرة الرئيسية للنص هي الاحتفال بالعام الجديد ومشاركة اللحظات السعيدة مع الأصدقاء والعائلة. ويركز على أهمية الترابط والسعادة وإنشاء ذكريات رائعة خلال هذا الوقت الخاص من العام.'
                : 'The main idea of the text is to celebrate the New Year and share joyful moments with friends and family. It emphasizes the importance of togetherness, happiness, and creating wonderful memories during this special time of the year.')}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-lg sm:text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {locale === 'ar' ? 'انقر للحصول على الإجابة' : 'Click for Answer'}
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-8 xs:mt-10 sm:mt-12 text-center text-gray-500 text-xs xs:text-sm sm:text-base">
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