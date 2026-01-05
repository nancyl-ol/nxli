import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const font = Source_Serif_4({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nxli | Nancy Li",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} antialiased`}>
      <head>
        <link rel="preload" as="image" href="/banner.jpg" />
        <link rel="preload" as="image" href="/avatar.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
