import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const ambassadorAwardsAndRecognitionData: TimelineItem[] = [
  {
    date: new Date('2022-05-19'),
    type: TimelineType.AmbassadorAndAwards,
    title: 'Selecionada para ser embaixadora Women Techmakers da Google',
    description: 'Women Techmakers Ambassadors são líderes em todo o mundo apaixonadas por capacitar suas comunidades por meio da organização de eventos, palestras públicas, criação de conteúdo e orientação.\nO programa Women Techmakers Ambassador apoia mulheres em tecnologia que buscam criar impacto e retribuir às suas comunidades.',
    link: 'https://developers.google.com/womentechmakers',
    image: '/images/wtm-ambassador.avif',
  },
  {
    date: new Date('2023-02-01'),
    type: TimelineType.AmbassadorAndAwards,
    title: 'Alura Star',
    description: 'Gente que compartilha conhecimento, apoia e incentiva mais pessoas a transformarem suas vidas por meio da tecnologia.',
    link: 'https://www.alura.com.br/stars',
  },
  {
    date: new Date('2021-11-19'),
    type: TimelineType.AmbassadorAndAwards,
    title: 'GitHub Star',
    description: 'Estrela nomeada do GitHub.',
    link: 'https://stars.github.com/profiles/levxyca/',
    image: '/images/github-stars.png',
  },
];
