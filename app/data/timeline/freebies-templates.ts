import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const freebiesData: TimelineItem[] = [
    {
        date: new Date('2021-07-01'),
        type: [TimelineType.Freebie, TimelineType.Template],
        title: 'Template para planejar seus estudos de programação',
        description: 'Compartilhei um template criado em minha live em conjunto com as pessoas que me assistiam. Esse template busca auxiliar as pessoas desenvolvedoras em seus estudos de programação, mas também serve para estudos de qualquer contexto.',
        link: 'https://twitter.com/levxyca/status/1410603137388277771',
    },
];
