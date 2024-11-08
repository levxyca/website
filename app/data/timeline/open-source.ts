import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const openSourceData: TimelineItem[] = [
    {
        date: new Date('2021-08-09'),
        type: TimelineType.OpenSource,
        title: 'Explicando de uma forma simples quais as principais tags "estruturais" do HTML5',
        description: 'Essa foi uma live patrocinada no meu canal da twitch onde criei um conteúdo para facilitar a compreensão e uso de algumas tags do HTML5 que considero importantes quando vamos "estruturar" um projeto.\nNa live demos inicio a um projeto onde criamos um site que mostra de forma visual como essas tags podem se comportar.',
        link: 'https://github.com/levxyca/tags-estruturais-html5',
    },
    {
        date: new Date('2022-11-22'),
        type: TimelineType.OpenSource,
        title: 'background-size',
        description: 'Um site para facilitar a compreensão da propriedade background-size do CSS. A ideia é ser um visualizador da propriedade.',
        link: 'https://github.com/levxyca/background-size',
    },
    {
        date: new Date('2022-01-05'),
        type: TimelineType.OpenSource,
        title: 'Versão 2.0 do projeto de Links',
        description: 'Um site onde você coloca seu nome, descrição, links importantes e suas principais redes sociais.\nO repositório já está como template no @github, lembrando que é um projeto open source ⭐',
        link: 'https://github.com/levxyca/links',
    },
    {
        date: new Date('2023-01-31'),
        type: TimelineType.OpenSource,
        title: 'Desvendando Widgets do Flutter',
        description: 'Durante o dia-a-dia como pessoa desenvolvedora, foi sentido a dificuldade em compreender certas propriedades de alguns widgets, além de notar o uso desnecessário de outros, pois os widgets que já estavam na árvore supririam a necessidade naquele momento. Pensando nisso, e em outra situação que possa ocorrer, ou apenas para dar mais um passo rumo ao aprendizado da magia do Flutter, esse repositório foi criado para a Leticia @levxyca mas pode te ajudar também!',
        link: 'https://github.com/levxyca/desvendando-widgets-flutter',
    },
    {
        date: new Date('2022-07-19'),
        type: TimelineType.OpenSource,
        title: '🌍 hello_world F L U T T E R',
        description: 'Projeto visando compartilhar uma introdução sobre o Flutter.',
        link: 'https://github.com/levxyca/hello_world-flutter',
    },
    {
        date: new Date('2023-08-09'),
        type: TimelineType.OpenSource,
        title: 'Diciotech',
        description: 'Um dicionário tech para pessoas que querem aprender mais sobre termos técnicos dentro da tecnologia.',
        link: 'https://github.com/levxyca/diciotech',
    },
    {
        date: new Date('2023-11-23'),
        type: TimelineType.OpenSource,
        title: 'Lançamento da versão 1.0 do Diciotech 📖',
        description: 'Um dicionário tech para pessoas que querem aprender mais sobre termos técnicos dentro da tecnologia.',
        link: 'https://github.com/levxyca/diciotech/releases/tag/v1.0',
    },
    {
        date: new Date('2024-09-20'),
        type: TimelineType.OpenSource,
        title: 'Lançamento da versão v1.1.0 do Diciotech 🚀',
        description: 'Tenho o prazer de anunciar a nova versão do Diciotech, que vem recheada de atualizações e melhorias significativas! Desde o lançamento da versão 1.0, implementamos uma série de mudanças para otimizar a experiência das pessoas usuárias e ampliar a precisão do conteúdo técnico disponível.',
        link: 'https://github.com/levxyca/diciotech/releases/tag/v1.1.0',
    },
];
