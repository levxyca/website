import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog | Developer Relations, Comunidades Tech e Open Source',
  description: 'Aprendizados, estratégias e experiências em Developer Relations, liderança de comunidades tech, talks, artigos, open source e engajamento. Conteúdo para quem busca impacto real em tecnologia. Por Leticia @levxyca.',
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
    title: 'Blog | Developer Relations, Comunidades Tech e Open Source',
    description: 'Aprendizados, estratégias e experiências em Developer Relations, liderança de comunidades tech, talks, artigos, open source e engajamento. Conteúdo para quem busca impacto real em tecnologia. Por Leticia @levxyca.',
    url: 'https://www.levxyca.com/blog',
    type: 'website',
    images: [
      {
        url: '/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Blog Leticia Leonardo (levxyca)',
      },
    ],
  },
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blog archives</h1>
      <BlogPosts showAllPosts={true} />
    </section>
  )
}
