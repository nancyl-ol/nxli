"use client";
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getCssVar } from '@/lib/utils';

enum CursorStyle {
  skiing,
  tennis,
  travel,
  none
}

export function Intro() {
  const t = useTranslations('intro');
  const locale = useLocale();
  const normalFontWeight = locale === 'zh' ? 'font-medium' : 'font-normal';
  const boldFontWeight = locale === 'zh' ? 'font-semibold' : 'font-medium';
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>(CursorStyle.none);

  const onClick = (targetStyle: CursorStyle) => {
    if (cursorStyle == targetStyle) {
      setCursorStyle(CursorStyle.none);
    } else {
      setCursorStyle(targetStyle);
    }
  };

  useEffect(() => {
    const cursorMap: Record<CursorStyle, string> = {
      [CursorStyle.skiing]: getCssVar('--cursor-skiing'),
      [CursorStyle.tennis]: getCssVar('--cursor-tennis'),
      [CursorStyle.travel]: getCssVar('--cursor-travel'),
      [CursorStyle.none]: '',
    };
    document.body.style.cursor = cursorMap[cursorStyle];
    return () => { document.body.style.cursor = ''; };
  }, [cursorStyle]);

  return (
    <section id="intro" className="px-6 pt-18 max-w-4xl mx-auto">
      <div className={`text-neutral-500 text-base md:text-lg leading-relaxed italic ${normalFontWeight}`}>
        {t('paragraph1')}
        <br /><br />
        {t.rich('paragraph2', {
          microsoft: (chunks) => (
            <a
              className={`text-neutral-950 ${boldFontWeight}`}
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.microsoft.com/education"
            >
              {chunks}
            </a>
          ),
          skiing: (chunks) => (
            <span
              className={`cursor-(--cursor-skiing) hover:text-(--ski-color) ${cursorStyle === CursorStyle.skiing ? 'text-(--ski-color)' : 'text-neutral-950'} ${boldFontWeight}`}
              onClick={() => onClick(CursorStyle.skiing)}
            >
              {chunks}
            </span>
          ),
          tennis: (chunks) => (
            <span
              className={`cursor-(--cursor-tennis) hover:text-(--tennis-color) ${cursorStyle === CursorStyle.tennis ? 'text-(--tennis-color)' : 'text-neutral-950'} ${boldFontWeight}`}
              onClick={() => onClick(CursorStyle.tennis)}
            >
              {chunks}
            </span>
          ),
          travel: (chunks) => (
            <span
              className={`cursor-(--cursor-travel) hover:text-(--travel-color) ${cursorStyle === CursorStyle.travel ? 'text-(--travel-color)' : 'text-neutral-950'} ${boldFontWeight}`}
              onClick={() => onClick(CursorStyle.travel)}
            >
              {chunks}
            </span>
          ),
        })}
      </div>
    </section>
  );
}
