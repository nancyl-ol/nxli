export const locales = ['en', 'zh'];
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  year: string;
}

export const isValidLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

export const isZhLocale = (locale: string) => locale === 'zh';
