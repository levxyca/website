import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const othersData: TimelineItem[] = [
    {
        date: new Date('2022-06-08'),
        type: [TimelineType.Freebie, TimelineType.Template],
        title: 'Meu perfil foi aprovado no GitHub Sponsors 🥰',
        description: 'Se você quiser apoiar o meu trabalho com open source e criação de conteúdo, pode fazer isso no GitHub 💫',
        link: 'https://github.com/sponsors/levxyca',
    },
    {
        date: new Date('2026-05-07'),
        type: TimelineType.Other,
        title: 'Coautora do livro DevRel: Guia essencial de Developer Relations',
        description: 'Lançamento do livro de DevRel, escrito junto com Pachi Parra, sobre como Developer Relations conecta empresas e comunidades técnicas.',
        link: 'https://www.casadocodigo.com.br/products/livro-devrel',
        image: '/images/lancamento-livro-devrel.jpg',
    },
];
