import { BlogPosts } from 'app/components/posts';

const Description = () => (
  <>
    <p className="mb-4" style={{ fontFamily: "'PT Serif', serif" }}>
      <span className="highlight">
        Conecto devs à tecnologia através de educação técnica, conteúdo estratégico e comunidades autênticas.
      </span>
    </p>
  </>
);

const Page = () => {
  return (
    <section className="text-left max-w-4xl mx-auto py-16 px-4">
      <h1 className="mb-8 text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
        Leticia Leonardo (@levxyca)
      </h1>
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter" style={{ fontFamily: "'PT Sans', sans-serif" }}>
        Especialista em Developer Relations
      </h2>
      <Description />
      <div className="my-12">
        <h3 className="mb-4 text-lg font-medium tracking-tight text-[var(--text-color)] opacity-75" style={{ fontFamily: "'PT Sans', sans-serif" }}>
          Posts Recentes
        </h3>
        <BlogPosts />
      </div>
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
