const FooterLink = ({url, text} : {url: string, text: string}) => (
  <a className="text-stone-800" target="_blank" rel="noreferrer noopener" href={url}>{text}</a>
);

export function Footer() {
  return (
    <footer className="px-6 py-8 max-w-4xl mx-auto">
      <p className="text-stone-400 text-sm leading-relaxed italic">
        Designed using <FooterLink url="https://www.figma.com/ai/" text="Figma AI"/>, built with <FooterLink url="https://nextjs.org/" text="Next.js"/> and <FooterLink url="https://tailwindcss.com/" text="Tailwind CSS"/> in <FooterLink url="https://code.visualstudio.com/" text="Visual Studio Code"/>, with the help of <FooterLink url="https://code.claude.com/docs/en/overview" text="Claude Code"/>.
      </p>
    </footer>
  );
}
