import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const podcastsData: TimelineItem[] = [
    {
        date: new Date('2021-01-06'),
        type: TimelineType.Podcast,
        title: 'Episódio 00 - Quem são elas e por que elas tem um Podcast?',
        description: 'Podcast com bate-papo sobre tecnologia apresentado por PachiCodes e Levxyca.',
        link: 'https://anchor.fm/mocasdaweb/episodes/Episdio-00---Quem-so-elas-e-por-que-elas-tem-um-Podcast-eoke4d',
    },
    {
        date: new Date('2021-01-20'),
        type: TimelineType.Podcast,
        title: 'Episodio 01 - Sobre Live Coding',
        description: 'Nesse primeiro episódio, as moças falam sobre live coding. O que é? Porque começaram a fazer? Como participar da comunidade?',
        link: 'https://anchor.fm/mocasdaweb/episodes/Episodio-01---Sobre-Live-Coding-ep7mon',
    },
    {
        date: new Date('2021-01-27'),
        type: TimelineType.Podcast,
        title: 'Episodio 02 - Porque amamos Desenvolvimento Web',
        description: 'Nesse episódio as moças falam sobre Desenvolvimento Web, algo que elas são apaixonadas. Qual foi nosso primeiro contato com web dev.? Por que amamos essa área? Dicas para quem quer começar!',
        link: 'https://anchor.fm/mocasdaweb/episodes/Episodio-02---Porque-amamos-Desenvolvimento-Web-epifos',
    },
    {
        date: new Date('2021-02-13'),
        type: TimelineType.Podcast,
        title: 'Episódio 03 - Como é ser uma moça nessa tal de web?',
        description: 'Nesse episódio de até 2 episódios, as moças batem um papo sobre como é ser uma mulher vivendo a vida pela internet.',
        link: 'https://anchor.fm/mocasdaweb/episodes/Episdio-03---Como--ser-uma-moa-nessa-tal-de-web-epsj24',
    },
    {
        date: new Date('2021-03-11'),
        type: TimelineType.Podcast,
        title: 'Episodio 05 - A importancia da Comunidade em nossas vidas',
        link: 'https://anchor.fm/mocasdaweb/episodes/Episodio-05---A-importancia-da-Comunidade-em-nossas-vidas-esaiin',
    },
    {
        date: new Date('2021-06-19'),
        type: TimelineType.Podcast,
        title: 'Conhecendo HTML semântico com Levxyca - Episódio #2',
        description: 'Boas vindas à primeira temporada do Feministech Podcast, um podcast feito por uma equipe de mulheres maravilhosas que trabalham ou estudam tecnologia!\nNo segundo episódio desta temporada, a Fernanda bate um papo com Letícia Leonardo (popularmente conhecida como Levxyca nos mais diversos cantos da internet) sobre HTML semântico e sua importância, além é claro de dicas valiosas sobre aprendizagem.',
        link: 'https://anchor.fm/feministech/episodes/conhecendo-html-semntico-com-levxyca---Episdio-2-e120svi',
    },
];