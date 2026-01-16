"use client";
import { useEffect } from "react";

// Sets lang attribute on <html> element.
// Needed because the root layout didn't have access to the locale param to set the correct value.
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
