"use client";
import { useState, useEffect } from 'react';
import { getCssVar } from './utils';

enum CursorStyle {
  skiing,
  tennis,
  travel,
  none
}

export function Intro() {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>(CursorStyle.none);
  const onClick = (targetStyle : CursorStyle) => {
    if (cursorStyle == targetStyle) {
      setCursorStyle(CursorStyle.none);
    }
    else {
      setCursorStyle(targetStyle);
    }
  }

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
      <div className="text-neutral-500 text-base md:text-lg leading-relaxed italic">
          I love turning technology into meaningful, human-centered solutions.
          <br/><br/>
          I&apos;m currently on a career break, using the time to reset, explore, and grow.
          Previously, I worked at <a className="text-neutral-950" target="_blank" rel="noreferrer noopener" href="https://www.microsoft.com/education">Microsoft</a> building education products for classrooms around the world.
          When I&apos;m not tinkering or learning something new, you&apos;ll find me <span className={`cursor-(--cursor-skiing) hover:text-(--ski-color) ${cursorStyle === CursorStyle.skiing ? 'text-(--ski-color)' : 'text-neutral-950'}`} onClick={() => onClick(CursorStyle.skiing)}>skiing</span>, on a <span className={`cursor-(--cursor-tennis) hover:text-(--tennis-color) ${cursorStyle === CursorStyle.tennis ? 'text-(--tennis-color)' : 'text-neutral-950'}`} onClick={() => onClick(CursorStyle.tennis)}>tennis court</span>, or planning my next <span className={`cursor-(--cursor-travel) hover:text-(--travel-color) ${cursorStyle === CursorStyle.travel ? 'text-(--travel-color)' : 'text-neutral-950'}`} onClick={() => onClick(CursorStyle.travel)}>travel adventure</span>.
      </div>
    </section>
  );
}
