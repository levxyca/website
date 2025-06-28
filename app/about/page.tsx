import Link from 'next/link';

export const metadata = {
  title: 'Sobre | Leticia @levxyca',
  description: 'Minha trajetória em Developer Relations, comunidades tech, live coding, conteúdo e impacto em tecnologia.',
  keywords: [
    'Sobre',
    'About',
    'Leticia Leonardo',
    'levxyca',
    'Developer Relations',
    'DevRel',
    'Comunidades Tech',
    'Live Coding',
    'Open Source',
    'Tech Community',
    'Tech Speaker',
    'Tech Podcast',
    'Tech Blog',
    'Tech Impact',
  ],
  openGraph: {
    title: 'Sobre | Leticia @levxyca',
    description: 'Minha trajetória em Developer Relations, comunidades tech, live coding, conteúdo e impacto em tecnologia.',
    url: 'https://www.levxyca.com/about',
    type: 'profile',
    images: [
      {
        url: '/images/levxyca-profile.jpg',
        width: 600,
        height: 600,
        alt: 'Leticia Leonardo (levxyca) profile',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <section className="prose dark:prose-invert max-w-2xl mx-auto py-2 px-4">
      <h1>Sobre mim</h1>
      <p>Oi! Eu sou a Leticia (ou levxyca), apaixonada por tecnologia, comunidades e comunicação.</p>
      <p>Hoje atuo como <b>Developer Relations</b>, palestrando em eventos, criando conteúdo sobre tecnologia nas redes sociais e ajudando pessoas e empresas a se conectarem de forma autêntica e estratégica no ecossistema tech.</p>
      <p>Minha missão é construir pontes: entre devs, empresas e comunidades. Acredito no poder do conteúdo acessível, da troca de experiências e do impacto real que conexões genuínas podem gerar.</p>
      <h2 className="mt-8">Como cheguei até aqui</h2>
      <p>Minha trajetória em tecnologia começou em 2019, quando entrei na universidade para cursar Análise e Desenvolvimento de Sistemas. Logo senti vontade de compartilhar minha rotina como estudante, e foi assim que criei um Twitter para dividir aprendizados, desafios e conquistas do dia a dia. Esse foi meu primeiro contato com a criação de conteúdo tech.</p>
      <p>Em 2020, com a pausa das aulas na pandemia, mergulhei ainda mais nesse universo. Busquei referências, conheci criadores de conteúdo e, principalmente, descobri o live coding na Twitch. Fiquei fascinada com a dinâmica das lives e a possibilidade de aprender, ensinar e criar comunidade em tempo real. Ver mulheres como a pachi codes brilhando e tornando o aprendizado divertido me inspirou a começar minhas próprias lives.</p>
      <p>Desde então, o live coding se tornou meu principal canal de conexão: aprendo, ensino, crio projetos, converso sobre carreira e vida, e entretenho pessoas: tudo ao vivo, de forma autêntica e colaborativa. Compartilho minha evolução como dev, universitária e pessoa, e tenho orgulho de ver quem me acompanha desde o início crescendo junto comigo.</p>
      <p>Além das lives, produzi vídeos para o YouTube, escrevi artigos, mantive projetos open source (muitos nascidos em live!) e participei ativamente de comunidades. Fui host do podcast <b>Moças da Web</b> e já fui convidada em diversos outros.</p>
      <p className="mt-8">Se quiser trocar ideias, colaborar, ou me convidar para eventos, é só me chamar! 💜</p>
    </section>
  );
}
