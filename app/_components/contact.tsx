"use client";
import { useState } from 'react';

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
  const [emailRevealed, setEmailRevealed] = useState(false);

  return (
    <section id="contact" className="px-6 py-18 max-w-4xl mx-auto border-b border-black">
      <h2 className="text-neutral-950 mb-8 pb-3 border-b-2 border-black inline-block text-xl font-medium">Contact</h2>

      <p className="text-neutral-600 mb-8 max-w-xl">
        Available for new opportunities.
      </p>

      <div className="space-y-2">
        <span
          onClick={() => setEmailRevealed(!emailRevealed)}
          className={`${contactItemClass} cursor-pointer interactive-element`}
          role="button"
          tabIndex={0}
        >
          {emailRevealed ? email : 'Email →'}
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
