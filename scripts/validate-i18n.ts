// Validates that zh.json has all the same keys as en.json (the source of truth).
// Run with: npx tsx scripts/validate-i18n.ts

import en from '../lib/dictionaries/en.json';
import zh from '../lib/dictionaries/zh.json';

function getKeys(obj: object, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return getKeys(value, path);
    }
    return [path];
  });
}

const enKeys = new Set(getKeys(en));
const zhKeys = new Set(getKeys(zh));

const missingInZh = [...enKeys].filter(k => !zhKeys.has(k));
const extraInZh = [...zhKeys].filter(k => !enKeys.has(k));

let hasErrors = false;

if (missingInZh.length) {
  console.error('❌ Missing in zh.json:', missingInZh);
  hasErrors = true;
}

if (extraInZh.length) {
  console.error('❌ Extra keys in zh.json (not in en.json):', extraInZh);
  hasErrors = true;
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log('✅ i18n validation passed: en.json and zh.json have matching keys');
}