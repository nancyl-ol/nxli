"use client";
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/nancyl-ol'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nxli/'
  },
];

const email = 'nancyli1996@gmail.com';
const contactItemClass = 'block border-b border-neutral-300 pb-2 text-neutral-900 transition-colors';

export function Contact() {
  const t = useTranslations('contact');
  const [emailRevealed, setEmailRevealed] = useState(false);

  return (
    <section id="contact" className="px-3 md:px-6 py-18 max-w-4xl mx-3 md:mx-auto border-b border-black">
      <h2 className="text-neutral-950 mb-8 pb-3 border-b-2 border-black inline-block text-xl font-medium">{t('title')}</h2>

      <p className="text-neutral-600 mb-8 max-w-xl">
        {t('availability')}
      </p>

      <div className="space-y-2">
        <span
          onClick={() => setEmailRevealed(!emailRevealed)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setEmailRevealed(!emailRevealed)
          }}
          className={`${contactItemClass} cursor-pointer interactive-element`}
          role="button"
          tabIndex={0}
        >
          {emailRevealed ? email : `${t('emailReveal')} →`}
        </span>
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className={contactItemClass}
            target="_blank" rel="noreferrer noopener"
          >
            {contact.label} →
          </a>
        ))}
      </div>
    </section>
  );
}
