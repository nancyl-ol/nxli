export const getCssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const LOCALE_KEY = "preferred-locale";