import { BlogPosts } from 'app/components/posts';

/**
 * Description component - displays the main value proposition
 */
const Description = () => (
  <>
    <p className="mb-4 font-serif">
      <span className="highlight">
        Conecto devs à tecnologia através de educação técnica, conteúdo estratégico e comunidades autênticas.
      </span>
    </p>
  </>
);

/**
 * Home page component - displays the main landing section
 */
const Page = () => {
  return (
    <section className="text-left max-w-4xl mx-auto py-16 px-4">
      <h1 className="mb-8 text-4xl md:text-6xl font-bold tracking-tight font-display">
        Leticia Leonardo (@levxyca)
      </h1>
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter font-sans">
        Especialista em Developer Relations
      </h2>
      <Description />

      <div className="mt-12 mb-12 border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--highlight-color)]">
          Lançamento
        </span>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold tracking-tight font-sans">
              DevRel: Guia essencial de Developer Relations
            </h3>
            <p className="mt-4 text-base leading-7 text-[rgba(255,246,255,0.85)]">
              Coautora do livro que explica como Developer Relations conecta empresas e comunidades técnicas.
              Um guia prático para quem quer construir programas de comunidade, engajamento e experiência de desenvolvedor.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-none border border-transparent bg-[var(--highlight-color)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#47334c] whitespace-nowrap"
            href="https://www.casadocodigo.com.br/products/livro-devrel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver livro
          </a>
        </div>
      </div>

      <div className="my-12">
        <h3 className="mb-4 text-lg font-medium tracking-tight text-[var(--text-color)] opacity-75 font-sans">
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
