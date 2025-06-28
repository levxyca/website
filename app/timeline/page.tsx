import React from 'react';
import Timeline from 'app/components/timeline';
import timelineData from 'app/data/timeline/index';

export const metadata = {
  title: 'Timeline | Developer Relations, Comunidades Tech e Open Source',
  description: 'Linha do tempo de experiências, talks, eventos, projetos open source e liderança em comunidades tech. Por Leticia @levxyca.',
  keywords: [
    'Developer Relations',
    'DevRel',
    'Comunidades Tech',
    'Leticia Leonardo',
    'levxyca',
    'Open Source',
    'Talks',
    'Eventos de tecnologia',
    'Liderança',
    'Engajamento',
    'Tech Community',
    'Tech Community Manager',
    'Conteúdo técnico',
    'Palestras',
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
    'Tech Speaker',
    'Tech Events',
    'Tech Impact',
    'Tech Inspiration',
    'Tech Strategy',
    'Tech Authenticity',
  ],
};

const TimelinePage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">timeline</h1>
      <Timeline />
    </div>
  );
};

export default TimelinePage;
