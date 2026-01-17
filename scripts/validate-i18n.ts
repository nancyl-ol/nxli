// Validates that zh.json and es.json have all the same keys as en.json (the source of truth).
// Run with: npx tsx scripts/validate-i18n.ts

import en from '../lib/dictionaries/en.json';
import zh from '../lib/dictionaries/zh.json';
import es from '../lib/dictionaries/es.json';

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
const esKeys = new Set(getKeys(es));

let hasErrors = false;

// Validate Chinese
const missingInZh = [...enKeys].filter(k => !zhKeys.has(k));
const extraInZh = [...zhKeys].filter(k => !enKeys.has(k));

if (missingInZh.length) {
  console.error('❌ Missing in zh.json:', missingInZh);
  hasErrors = true;
}

if (extraInZh.length) {
  console.error('❌ Extra keys in zh.json (not in en.json):', extraInZh);
  hasErrors = true;
}

// Validate Spanish
const missingInEs = [...enKeys].filter(k => !esKeys.has(k));
const extraInEs = [...esKeys].filter(k => !enKeys.has(k));

if (missingInEs.length) {
  console.error('❌ Missing in es.json:', missingInEs);
  hasErrors = true;
}

if (extraInEs.length) {
  console.error('❌ Extra keys in es.json (not in en.json):', extraInEs);
  hasErrors = true;
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log('✅ i18n validation passed: en.json, zh.json, and es.json have matching keys');
}