const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@example.com'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourname'
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/yourusername'
  }
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 pb-32 max-w-4xl mx-auto">
      <h2 className="text-neutral-900 mb-12 pb-3 border-b-2 border-black inline-block">Contact</h2>
      
      <p className="text-neutral-600 mb-12 max-w-xl">
        Available for collaboration and new opportunities.
      </p>
      
      <div className="space-y-2">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="block border-b border-neutral-300 pb-2 text-neutral-900 hover:text-neutral-500 transition-colors"
          >
            {contact.label} →
          </a>
        ))}
      </div>
    </section>
  );
}
