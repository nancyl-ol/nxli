"use client";
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import type { ReactNode } from 'react';
import { LOCALE_KEY } from '@/lib/utils';

const FooterLink = ({ url, children }: { url: string; children: ReactNode }) => (
  <a className="text-stone-800" target="_blank" rel="noreferrer noopener" href={url}>
    {children}
  </a>
);

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    localStorage.setItem(LOCALE_KEY, newLocale);
    router.push(`/${newLocale}`);
  };

  const toggleText = locale === 'en' ? t('switchToChinese') : t('switchToEnglish');

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
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 text-stone-800 text-sm transition-colors cursor-pointer w-fit"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/language.svg" alt="" className="h-[1em]" />
          {toggleText}
        </button>
      </div>
    </footer>
  );
}
