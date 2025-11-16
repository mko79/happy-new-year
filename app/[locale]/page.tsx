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

      {/* Favorite Celebration Section */}
      <section className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
            {selectedLocale === 'ar' ? 'احتفالي المفضل' : 'My Favorite Celebration'}
          </h2>
          <p className="text-gray-600 text-center text-lg mb-8">
            {selectedLocale === 'ar' ? 'اكتب عن احتفالك المفضل. ماذا يفعل الناس؟' : 'Write about your favorite celebration. What do people do?'}
          </p>

          <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-4">
              {selectedLocale === 'ar' ? 'السؤال:' : 'Question:'}
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              {selectedLocale === 'ar'
                ? 'صف احتفالك المفضل. ما الأنشطة التي يفعلها الناس عادة خلال هذا الاحتفال؟'
                : 'Describe your favorite celebration. What activities do people typically do during this celebration?'}
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">1</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">
                    {selectedLocale === 'ar' ? 'عادة ما يفعل الناس ...' : 'People usually ...'}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">2</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">
                    {selectedLocale === 'ar' ? 'أثناء الاحتفال، العائلات ...' : 'During the celebration, families ...'}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">3</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">
                    {selectedLocale === 'ar' ? 'الأطعمة التقليدية تشمل ...' : 'Traditional foods include ...'}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">4</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">
                    {selectedLocale === 'ar' ? 'هذا الاحتفال خاص لأنه ...' : 'The celebration is special because ...'}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">5</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">
                    {selectedLocale === 'ar' ? 'الأطفال عادة ...' : 'Children often ...'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 italic">
              {selectedLocale === 'ar'
                ? 'يمكن للطلاب كتابة إجاباتهم في دفاترهم أو على ورقة منفصلة.'
                : 'Students can write their answers in their notebooks or on a separate sheet of paper.'}
            </p>
          </div>
        </div>
      </section>

      {/* Lesson Objectives Section */}
      <div
        id="lesson-objectives"
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mt-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
          {selectedLocale === 'ar' ? 'أهداف الدرس' : 'Lesson Objectives'}
        </h2>
        <p className="text-gray-600 text-center text-lg mb-8">
          {selectedLocale === 'ar' ? 'من المتوقع أن يفعل الطلاب ما يلي:' : 'Students are expected to:'}
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4 mt-1">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedLocale === 'ar' ? 'التحدث' : 'Speaking'}
              </h3>
              <p className="text-gray-700 text-lg">
                {selectedLocale === 'ar' ? 'التحدث عن الاحتفال المفضل' : 'Talk about the favourite celebration'}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4 mt-1">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedLocale === 'ar' ? 'المفردات والنطق' : 'Vocabulary & Pronunciation'}
              </h3>
              <p className="text-gray-700 text-lg">
                {selectedLocale === 'ar'
                  ? 'استخدام المفردات الجديدة بسلاسة مع النطق الصحيح'
                  : 'Use the new vocabulary smoothly with the correct pronunciation'}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4 mt-1">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedLocale === 'ar' ? 'القراءة' : 'Reading'}
              </h3>
              <p className="text-gray-700 text-lg">
                {selectedLocale === 'ar'
                  ? 'تفحص النص بحثاً عن تفاصيل محددة'
                  : 'Scan the text for specific chunks of details'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}