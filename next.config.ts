import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export', // enables static export, "out" folder will be created with HTML/CSS/JS assets on `next build`
};

export default withNextIntl(nextConfig);
