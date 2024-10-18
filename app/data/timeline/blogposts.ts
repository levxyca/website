import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const blogpostsData: TimelineItem[] = [
    {
        date: new Date('2024-05-21'),
        type: TimelineType.Article,
        title: 'Tecnologia, comunicação e pessoas: descubra o papel de uma pessoa Tech Community Manager.',
        description: 'Descubra o papel de uma Tech Community Manager através da minha experiência pessoal. Saiba como essa função envolve nutrir comunidades, organizar eventos, criar conteúdos e servir como elo entre a comunidade e a empresa.',
        link: 'https://www.levxyca.com/blog/tech-community-manager',
    },
    {
        date: new Date('2024-03-11'),
        type: TimelineType.Article,
        title: 'Desenvolva suas habilidades de programação de forma divertida: 10 jogos para aprender programação',
        description: 'Aprender programação pode ser desafiador, mas não precisa ser monótono 👀 Se você está buscando uma maneira divertida e interativa de aprimorar suas habilidades de codificação, os jogos são uma excelente escolha 🎮 Vamos explorar 10 jogos que transformam o aprendizado em algo lúdico e didático!',
        link: 'https://www.levxyca.com/blog/10-jogos-aprender-programacao',
    },
    {
        date: new Date('2023-11-28'),
        type: TimelineType.Article,
        title: 'Diciotech: o dicionário tech colaborativo que você pode ajudar a construir',
        description: 'Você já se deparou com termos técnicos na área de tecnologia que pareciam super confusos para você?\nNão se preocupe, você não está só! 🫂 A tecnologia é uma área vasta e em constante evolução, e muitas vezes pode ser desafiador acompanhar os termos que surgem a cada dia. É por isso que o projeto Diciotech 📖 é uma ferramenta valiosa para pessoas que desejam aprender mais sobre o universo tech.\nApresento a vocês o Diciotech - um projeto incrível que se propõe a desmistificar a linguagem técnica da tecnologia. Quer descobrir mais como funciona? Leia sobre o dicionário tech colaborativo que você pode ajudar a construir!',
        link: 'https://www.levxyca.com/blog/diciotech',
    },
    {
        date: new Date('2023-07-13'),
        type: TimelineType.Article,
        title: 'Conheça livros de cabeceira dos Devs',
        description: 'Livros para programadores: os títulos mais lidos pelos Alura Stars.',
        link: 'https://www.alura.com.br/artigos/conheca-livros-cabeceira-devs-parte-2',
    },
];
