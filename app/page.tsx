import { BlogPosts } from 'app/components/posts';
import ConvertKitForm from './components/convertkitform';
import { getTimelineStats } from './components/timelineStats';

const stats = getTimelineStats();

const Description = () => (
  <>
    <p className="mb-4">
      <span className="highlight">
        Conecto devs à tecnologia através de educação técnica, conteúdo estratégico e comunidades autênticas.
      </span>
    </p>
    <ul className="mb-4 ml-8 list-disc text-base font-semibold text-[var(--text-color)] custom-bullets">
      <li>+{stats.talks} palestras e workshops</li>
      <li>+{stats.articles} artigos publicados</li>
      <li>+{stats.events} eventos organizados/participados</li>
      <li>+{stats.openSource} projetos open source</li>
      <li>+{stats.podcasts} podcasts e entrevistas</li>
    </ul>
  </>
);

const Page = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Leticia @levxyca
      </h1>
      <Description />
      <div className="mb-6">
        <a href="/about" className="inline-block px-4 py-2 rounded border border-[var(--highlight-color)] text-[var(--highlight-color)] font-bold hover:bg-[var(--highlight-color)] hover:text-[var(--text-color)] transition">
          Conheça minha jornada completa
        </a>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
      <ConvertKitForm />
    </section>
  );
};

export const metadata = {
  title: 'Leticia @levxyca | Developer Relations, Comunidades Tech e Open Source',
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
    url: 'https://www.levxyca.com/',
    type: 'website',
    images: [
      {
        url: '/images/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Leticia Leonardo (levxyca) home',
      },
    ],
  },
};

export default Page;
