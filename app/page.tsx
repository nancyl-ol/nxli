"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale, type Locale } from '@/lib/i18n';
import { LOCALE_KEY } from '@/lib/utils';

function getPreferredLocale(): Locale {
  // Check localStorage for saved preference
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LOCALE_KEY);
    if (saved === 'en' || saved === 'zh' || saved === 'es') {
      return saved;
    }
  }

  // Check browser language
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      return 'zh';
    }
    if (browserLang.startsWith('es')) {
      return 'es';
    }
  }

  // Default to English
  return defaultLocale;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = getPreferredLocale();
    router.replace(`/${locale}`);
  }, [router]);

  // Show nothing while redirecting
  return null;
}
