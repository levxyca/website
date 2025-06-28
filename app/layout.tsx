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
    default: 'Leticia @levxyca | Developer Relations, Comunidades Tech e Open Source',
    template: '%s | Leticia @levxyca - DevRel, Comunidades Tech, Open Source',
  },
  description: 'Experiências, estratégias e aprendizados em Developer Relations, liderança de comunidades tech, talks, artigos, open source e engajamento. Por Leticia @levxyca.',
  keywords: [
    'Developer Relations',
    'DevRel',
    'Comunidades Tech',
    'Leticia Leonardo',
    'levxyca',
    'Open Source',
    'Talks',
    'Artigos',
    'Eventos de tecnologia',
    'Liderança',
    'Engajamento',
    'Tech Community',
    'Tech Community Manager',
    'Conteúdo técnico',
    'Palestras',
    'Podcast',
    'Blog de tecnologia',
    'Mentoria',
    'Inclusão',
    'Estratégia de comunidades',
    'Developer Advocacy',
    'Developer Experience',
    'Comunicação em tecnologia',
    'Engajamento de comunidades',
    'Projetos open source',
    'Conteúdo DevRel',
    'Liderança tech',
    'Influenciadora tech',
    'Tech Speaker',
    'Tech Writer',
    'Tech Events',
    'Tech Blog',
    'Tech Talks',
    'Tech Podcast',
    'Tech Mentoring',
    'Tech Education',
    'Tech Impact',
    'Tech Inspiration',
    'Tech Strategy',
    'Tech Authenticity',
  ],
  openGraph: {
    title: 'Leticia @levxyca | Developer Relations, Comunidades Tech e Open Source',
    description: 'Experiências, estratégias e aprendizados em Developer Relations, liderança de comunidades tech, talks, artigos, open source e engajamento. Por Leticia @levxyca.',
    url: baseUrl,
    siteName: 'Leticia @levxyca',
    locale: 'pt_BR',
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
        <link rel="alternate" type="application/rss+xml" href="/rss" />
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
