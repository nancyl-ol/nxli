// Root layout required by Next.js with html/body tags.
//
// Route structure:
//   /          → app/page.tsx (detects locale preference, redirects to /en or /zh)
//   /en, /zh   → app/[locale]/layout.tsx (sets lang, fonts, i18n provider)
//              → app/[locale]/page.tsx (actual page content)
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nxli | Nancy Li",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/banner.jpg" />
        <link rel="preload" as="image" href="/avatar.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
