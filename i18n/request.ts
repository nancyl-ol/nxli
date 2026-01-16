// Required for next-intl even with static exports.
// Used at build time to load messages for each locale when generating the static page for each locale.
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/lib/i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`@/lib/dictionaries/${locale}.json`)).default,
  };
});
