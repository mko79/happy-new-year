import { NextResponse } from 'next/server';

// Mock translation data
const translations = {
  en: {
    welcome: "Welcome to Happy New Year!",
    description: "This is a Next.js application with multi-language support.",
    change_language: "Change Language",
    english: "English",
    arabic: "Arabic"
  },
  ar: {
    welcome: "مرحبا بكم في عام جديد سعيد!",
    description: "هذا تطبيق Next.js مع دعم متعدد اللغات.",
    change_language: "تغيير اللغة",
    english: "الإنجليزية",
    arabic: "العربية"
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'en';

  return NextResponse.json({
    locale,
    translations: translations[locale as keyof typeof translations] || translations.en
  });
}