'use client';

import { Globe } from 'lucide-react';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col" dir="rtl">
      <Header currentLocale="ar" />

      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-indigo-600 mb-6">
            مرحبا بكم في عام جديد سعيد!
          </h1>

          <p className="text-lg md:text-xl text-gray-600 text-center mb-10">
            هذا تطبيق Next.js مع دعم متعدد اللغات.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-indigo-600 mb-3">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  الميزة {item}
                </h3>
                <p className="text-gray-600">
                  هذا وصف لميزة العينة باللغة العربية.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} تطبيق عام جديد سعيد. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}