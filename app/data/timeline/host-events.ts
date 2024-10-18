import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const hostEventsData: TimelineItem[] = [
  {
    date: new Date('2024-09-18'),
    type: TimelineType.HostEvents,
    title: 'AI e Bancos de Dados Vetoriais: Como Tornar Suas Pesquisas Mais Rápidas e Relevantes',
    description: 'Neste evento, vamos mergulhar no fascinante mundo dos bancos de dados vetoriais! Vamos entender desde a geração de vetores (embeddings), como eles são inseridos no banco, até o funcionamento das pesquisas e como realizar buscas por características específicas de um registro.',
    link: 'https://www.youtube.com/watch?v=21yjOk4VwqI',
  },
  {
    date: new Date('2024-09-17'),
    type: TimelineType.HostEvents,
    title: 'Transforme Seu CSS em Arte: Aprendendo com Natália da Silva!',
    description: '🎨 Quer dominar o CSS? Junte-se a nós neste vídeo, onde a Natália da Silva compartilha suas melhores dicas e técnicas para transformar linhas de código em verdadeiras obras de arte.',
    link: 'https://www.youtube.com/watch?v=8yDW6PwZfvI&ab_channel=Impulso',
  },
];
