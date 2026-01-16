import { Source_Serif_4, Noto_Serif_SC } from "next/font/google";
import { locales, isValidLocale, isZhLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { HtmlLang } from "./_components/html-lang";

const enFont = Source_Serif_4({
  subsets: ["latin"],
});

const zhFont = Noto_Serif_SC();

// Tells Next.js which [locale] values to pre-render at build time (e.g., /en, /zh).
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);
  const messages = await getMessages();
  const font = isZhLocale(locale) ? zhFont : enFont;

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang lang={locale}/>
      <main className={`${font.className} antialiased`}>
        {children}
      </main>
    </NextIntlClientProvider>
  );
}
