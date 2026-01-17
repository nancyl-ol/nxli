"use client";
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import type { ReactNode } from 'react';
import { LOCALE_KEY } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

const FooterLink = ({ url, children }: { url: string; children: ReactNode }) => (
  <a className="text-stone-700" target="_blank" rel="noreferrer noopener" href={url}>
    {children}
  </a>
);

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();

  const switchToLocale = (newLocale: Locale) => {
    localStorage.setItem(LOCALE_KEY, newLocale);
    router.push(`/${newLocale}`);
  };

  const otherLocales = (['en', 'zh', 'es'] as const).filter((l) => l !== locale);

  const getToggleText = (targetLocale: Locale) => {
    switch (targetLocale) {
      case 'en':
        return t('switchToEnglish');
      case 'zh':
        return t('switchToChinese');
      case 'es':
        return t('switchToSpanish');
    }
  };

  return (
    <footer className="px-6 py-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4">
        <p className="text-stone-400 text-sm leading-relaxed italic">
          {t.rich('credit', {
            figma: (chunks) => <FooterLink url="https://www.figma.com/ai/">{chunks}</FooterLink>,
            nextjs: (chunks) => <FooterLink url="https://nextjs.org/">{chunks}</FooterLink>,
            tailwind: (chunks) => <FooterLink url="https://tailwindcss.com/">{chunks}</FooterLink>,
            vscode: (chunks) => <FooterLink url="https://code.visualstudio.com/">{chunks}</FooterLink>,
            claude: (chunks) => <FooterLink url="https://claude.ai/code">{chunks}</FooterLink>,
          })}
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          {otherLocales.map((targetLocale) => (
            <button
              key={targetLocale}
              onClick={() => switchToLocale(targetLocale)}
              className="flex items-center gap-1.5 text-stone-700 text-sm transition-colors cursor-pointer w-fit"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/language.svg" alt="" className="h-[1em]" />
              {getToggleText(targetLocale)}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
