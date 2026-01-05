import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { site } from '@/lib/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(site.site.url),
  title: {
    default: site.site.name,
    template: `%s | ${site.site.name}`,
  },
  description: site.site.description,
  openGraph: {
    title: site.site.name,
    description: site.site.description,
    url: site.site.url,
    siteName: site.site.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
