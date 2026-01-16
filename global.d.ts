// Type-safe i18n: ensures translation keys used in code exist in en.json.
// English is the source of truth - TypeScript will error if you use a non-existent key.
import messages from './lib/dictionaries/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
  }
}
