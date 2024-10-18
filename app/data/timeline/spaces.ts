import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const spacesData: TimelineItem[] = [
  {
    date: new Date('2022-03-17'),
    type: TimelineType.Space,
    title: 'Como socializar em tech sendo uma pessoa introvertida',
    description: 'Spaces falando sobre como socializar em tech sendo uma pessoa introvertida 💫',
    link: 'https://twitter.com/i/spaces/1eaKbNPOwBnKX?s=20',
  },
  {
    date: new Date('2022-03-03'),
    type: TimelineType.Space,
    title: 'Como as Moças da Web organizam e produzem conteúdo tech?',
    description: 'Moças da Web versão spaces falando sobre organização na produção de conteúdo tech.',
    link: 'https://twitter.com/i/spaces/1OdKrBemmznKX?s=20',
  },
];
