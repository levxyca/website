import './styles/global.css';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import { Navbar } from './components/nav';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { baseUrl } from './sitemap';

// Metadados da página
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Leticia @levxyca',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Leticia @levxyca',
    description: 'Criando conexões genuínas, capacitando pessoas e promovendo comunidades tecnológicas diversas e inclusivas.',
    url: baseUrl,
    siteName: 'Leticia @levxyca',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Função para combinar classes
const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cx('text-black bg-white dark:text-white dark:bg-black', GeistSans.variable, GeistMono.variable)}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
