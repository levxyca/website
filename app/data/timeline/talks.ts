import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const talksData: TimelineItem[] = [
    {
        date: new Date('2021-09-25'),
        type: TimelineType.Talk,
        title: 'Como live coding pode te ajudar sendo uma pessoa iniciante na área de TI',
        description: 'Palestra sobre "Como live coding pode te ajudar sendo uma pessoa iniciante na área de TI" no evento RanchoDev 2021 na trilha Midday.',
    },
    {
        date: new Date('2021-10-28'),
        type: TimelineType.Talk,
        title: 'O mínimo sobre como ter um readme bonitinho com Levxyca',
        description: 'Nessa talk eu mostrei o básico sobre markdown e também falei sobre boas práticas na hora de criar um README.',
        link: 'https://www.youtube.com/watch?v=cuUTqfms-SI&t=1482s&ab_channel=feministech',
    },
    {
        date: new Date('2020-12-12'),
        type: TimelineType.Talk,
        title: '2ª Maratona Live Coder Girls BR',
        description: 'Dei uma talk sobre "Como live coding pode ajudar iniciantes em programação." e também ajudei a moderar o evento.',
        link: 'https://feministech.github.io/maratona2/',
    },
    {
        date: new Date('2024-08-01'),
        type: TimelineType.Talk,
        title: 'Hacktown - Meetup GitHub - Diciotech: o dicionário tech colaborativo que você pode ajudar a construir.',
        description: 'A tecnologia é uma área vasta e em constante evolução, e muitas vezes é desafiador acompanhar todos os termos que surgem a cada dia. Por isso, o Diciotech é uma ferramenta valiosa para quem deseja se aprofundar no universo tech.',
        link: 'https://x.com/levxyca/status/1826667065262137576/photo/1',
    },
    {
        date: new Date('2023-10-13'),
        type: TimelineType.Talk,
        title: 'Meetup Online - GitTogether São Paulo - Outubro [Hacktoberfest] - Projeto Diciotech',
        description: 'A Leticia Leonardo (ela/dela) vai apresentar sobre a sua experiência nos eventos Hacktoberfest e como você pode contribuir para o projeto Diciotech. Um dicionário para quem quer aprender mais sobre termos técnicos na tecnologia.',
        image: '/images/gh-sp-diciotech.jpeg',
    },
    {
        date: new Date('2023-08-17'),
        type: TimelineType.Talk,
        title: 'Hacktown - Meetup GitHub - Desvendando o código aberto: junte-se à revolução colaborativa',
        description: 'Gostaria de compartilhar minha gratidão por ter tido a oportunidade de palestrar no HackTown que aconteceu na semana passada falando sobre o tema "Desvendando o código aberto: junte-se à revolução colaborativa no GitHub.\nFiquei muito feliz por ter um espaço para explorar esse universo do código aberto e poder inspirar outras pessoas a se juntarem a esse mundo também. Durante minha palestra, pude abordar o significado do open source e seus princípios, além de destacar como plataformas como o GitHub se tornaram os pilares dessa revolução. Além disso, compartilhei um pouco da minha própria experiência no open source, tanto como pessoa contribuidora quanto como mantenedora de projetos de código aberto.\nFoi minha primeira vez no HackTown e com certeza quero voltar mais vezes, compartilhar ideias sobre a importância do código aberto e incentivar as pessoas a participarem dessa comunidade colaborativa foi muito sensacional!\nAgradecimentos especiais para todas as pessoas participantes da organização do evento e do espaço que pude palestrar, obrigada GitHub Brasil e 🪐Pachi Parra por me convidarem a falar mais sobre um assunto que eu gosto tanto e um agradecimento mais que especial para todos os meus amigues que me deram apoio antes e durante a palestra. E, é claro, um agradecimento a todas as pessoas que compareceram à palestra.\nSe você ficou inspirade pela palestra e deseja explorar mais sobre o mundo do código aberto e do GitHub, estou sempre disponível e aberta para conversar 💙',
        image: 'images/hacktown-2023.avif',
        link: 'https://www.canva.com/design/DAFrO3fHPhw/J08Lu_wcAWGQJelYAv9kMg/view?utm_content=DAFrO3fHPhw&utm_campaign=designshare&utm_medium=link&utm_source=viewer',
    },
    {
        date: new Date('2022-11-14'),
        type: TimelineType.Talk,
        title: 'O que significa ser uma GitHub Star?',
        description: 'Palestra realizada no stand do GitHub Education na #CPBR14 contando sobre o que é o programa GitHub Star e minha trajetória.',
        image: 'images/cpbr14.avif',
    },
    {
        date: new Date('2022-09-23'),
        type: TimelineType.Talk,
        title: 'Como live coding pode te ajudar sendo uma pessoa iniciante na área de TI',
        description: 'Já ouviu a palavra do live coding hoje? Nessa palestra você vai conhecer esse universo e descobrir como ele pode te ajudar a se desenvolver sendo uma pessoa de tecnologia. Veja como aprender com outras pessoas, fazer networking, melhorar suas soft skills e ir além com o consumo de live coding. Palestra feita no evento da Codecon de 2022.',
        image: 'images/codecon-2022.png',
    },
    {
        date: new Date('2022-09-15'),
        type: TimelineType.Talk,
        title: 'Painel: GitHub Stars na OctogatosConf 2022',
        description: 'Participação no painel sobre Github Stars na OctogatosConf 2022, uma conferência Latinx global de tecnologia.',
        link: 'https://www.twitch.tv/videos/1591556866',
    },
    {
        date: new Date('2022-09-02'),
        type: TimelineType.Talk,
        title: 'GitHub Actions: Deixando o seu perfil do GitHub mais legal com o GitHub Actions!',
        description: 'Participação no Encontra MLSAs no Microsoft Reactor falando sobre GitHub Actions.',
        link: 'https://www.youtube.com/watch?v=pzfuv-njlKg&ab_channel=MicrosoftReactor',
    },
    {
        date: new Date('2022-07-20'),
        type: TimelineType.Talk,
        title: 'Palestra: A importância da acessibilidade e como introduzir isso para dentro dos nossos projetos com HTML',
        description: 'Participação no MEETUP do C6 Bank: batendo um papo sobre acessibilidade!',
        image: 'images/c6-acessibilidade.png',
        link: 'https://github.com/levxyca/acessibilidade',
    },
];
