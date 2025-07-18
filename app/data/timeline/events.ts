import { TimelineItem } from './timelineItem';
import { TimelineType } from './timelineTypes';

export const eventsData: TimelineItem[] = [
  {
    date: new Date('2024-09-18'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: 'AI e Bancos de Dados Vetoriais: Como Tornar Suas Pesquisas Mais Rápidas e Relevantes',
    description: 'Neste evento, vamos mergulhar no fascinante mundo dos bancos de dados vetoriais! Vamos entender desde a geração de vetores (embeddings), como eles são inseridos no banco, até o funcionamento das pesquisas e como realizar buscas por características específicas de um registro.',
    link: 'https://www.youtube.com/watch?v=21yjOk4VwqI',
  },
  {
    date: new Date('2024-09-17'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: 'Transforme Seu CSS em Arte: Aprendendo com Natália da Silva!',
    description: '🎨 Quer dominar o CSS? Junte-se a nós neste vídeo, onde a Natália da Silva compartilha suas melhores dicas e técnicas para transformar linhas de código em verdadeiras obras de arte.',
    link: 'https://www.youtube.com/watch?v=8yDW6PwZfvI&ab_channel=Impulso',
  },
  {
    date: new Date('2024-10-23'),
    type: TimelineType.Events,
    title: 'Open Source Time com a Levxyca: Segunda edição mão na massa 🚀',
    description: 'Evento realizado no servidor do Discord da Comunidade Impulso Network. Este é o momento perfeito para tirar dúvidas sobre Open Source, compartilhar suas experiências, e ter suporte ao vivo para começar a contribuir. Já imaginou sair do evento com a sua primeira contribuição em um projeto real?',
    image: '/images/open-source-time-23-10.jpg',
  },
  {
    date: new Date('2022-03-26'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: 'Feministalk AprenDev 📚 - Como aprender a aprender tecnologia?',
    description: 'Evento sobre como podemos aprender melhor sobre como aprender melhor assuntos relacionados à tecnologia!\nTrabalhei no planejamento e organização desse evento, também fui host e uma das pessoas moderadoras, ao final, participei da roda de conversa, mediando os assuntos e também conversando sobre como aprender a aprender.',
    image: '/images/feministalk-aprendev.jpg',
    link: 'https://www.twitch.tv/collections/6rWTuUld4BY8Sw',
  },
  {
    date: new Date('2022-03-08'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: '#ChamaAsMina - Dia das Mulheres | Feministech',
    description: 'Participação na live do #ChamaAsMina com duas rodas de conversas, uma sobre carreiras e outra sobre produção de conteúdo.\nEstive presente na organização do evento e como mediadora de uma das rodas de conversa.',
    link: 'https://www.youtube.com/watch?v=M5G4Jf9Ox4M&ab_channel=LINUXtips',
  },
  {
    date: new Date('2020-07-25'),
    type: [TimelineType.OrganizedEvents],
    title: 'Primeira Maratona das Live Coder Girls Brasil',
    description: '12h de conteúdo ininterrupto criado por mulheres para a comunidade.',
    link: 'https://feministech.github.io/maratona1/',
  },
  {
    date: new Date('2022-08-27'),
    type: TimelineType.OrganizedEvents,
    title: 'Feministalk: Como escrever um livro?',
    description: 'Apresentado por Karen Novaes e Patrícia, contando com:\nPachi Parra em "Como escrever um livro?"\nLoiane Groner em "Dicas para escrever um livro"\nVivian Matsui em uma entrevista contando sobre como é trabalhar em editora, e ser editora-chefe;',
    link: 'https://feministech.github.io/maratona1/',
    image: '/images/feministalk-livro.jpg'
  },
  {
    date: new Date('2023-05-26'),
    type: TimelineType.Events,
    title: 'Galactech | Painel: Criando conteúdo pelo universo',
    description: 'Uma conferência da Feministech sobre Developer Relations, Produção de Conteúdo e Comunidades.',
    link: 'https://www.youtube.com/watch?v=gf2EKh1hBQk&t=3682s&ab_channel=feministech',
    image: '/images/galactech.jpg',
  },
  {
    date: new Date('2024-05-17'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Construindo pontes: como comunidades podem ajudar sua carreira em tech',
    description: 'Junte-se a nós nesta live para descobrir o poder das comunidades em impulsionar o seu crescimento pessoal e profissional! 🌟\nNesta conversa envolvente, exploraremos como a participação ativa em comunidades pode abrir portas para oportunidades de networking, aprendizado contínuo, suporte valioso e crescimento profissional significativo.\nNão perca esta oportunidade única de desbloquear novas perspectivas e avançar em sua trajetória com confiança e propósito. 🚀✨',
    link: 'https://youtu.be/s23k-kTHt2o',
  },
  {
    date: new Date('2024-07-17'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Área Logada 🚀 Explorando novidades com o design em ação!',
    description: 'Junte-se a nós para uma live exclusiva onde iremos compartilhar as mais recentes novidades do nosso projeto! Nesta sessão, conversaremos sobre como foram as interações com o cliente e o feedback recebido, além de discutir as novas direções que estamos tomando.\nTeremos a presença especial dos designers do nosso time, que irão revelar algumas das primeiras telas desenvolvidas e explicar as decisões criativas por trás delas. Será uma oportunidade única para entender o processo de design e ver em primeira mão as inovações que estamos implementando.',
    link: 'https://youtu.be/3tl4FYNk02c',
  },
  {
    date: new Date('2024-07-03'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Área Logada em "Desvendando o Setup de Projetos: Como Escolher as Tecnologias Ideais',
    description: 'Boas vindas à nossa live sobre "Desvendando o Setup de Projetos: Como Escolher as Tecnologias Ideais" da nova Área Logada! O próximo passo do Open Design System 🚀',
    link: 'https://youtu.be/82navjORwHo',
  },
  {
    date: new Date('2024-06-20'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Kickoff da nova Área Logada 🚀 O próximo passo do Open Design System',
    description: 'Boas vindas à nossa live sobre da nova Área Logada! O próximo passo do Open Design System 🚀\nNeste vídeo, vamos discutir:\n- Por que escolhemos a área logada: Entenda os motivos por trás dessa escolha estratégica.\n- Nossa ideia sobre o projeto: Compartilharemos nossa visão e os principais objetivos.\n- Histórico da área logada: Conheça a evolução e os marcos importantes até agora.\n- Maiores desafios: Saiba quais obstáculos enfrentamos e o que vocês podem esperar do projeto.\n- Participe desta discussão interativa e fique por dentro de todas as novidades!',
    link: 'https://youtu.be/kWixvnQ11l4',
  },
  {
    date: new Date('2024-06-12'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Explorando o Universo do Design: O que são deceptive design patterns e como reconhece-las.',
    description: '🌌 Explorando o Universo do Design: O que são Deceptive Design Patterns e Como Reconhecê-las 🌌\nNesta live, vamos mergulhar no fascinante mundo dos Deceptive Design Patterns. Descubra o que são essas práticas, por que são utilizadas e como você pode identificá-las.',
    link: 'https://youtu.be/8qoXaWJ-5RY',
  },
  {
    date: new Date('2024-06-05'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Design System: celebrando o sucesso, aprendendo com a experiência e inspirando para o futuro!',
    description: 'Junte-se a nós para um momento especial uma live cheia de aprendizado e inspiração!\nDurante essa transmissão, vamos:\n- 📈 Celebrar as conquistas alcançadas.\n- 📚 Compartilhar os aprendizados obtidos ao longo do caminho, destacando os desafios superados e as lições mais valiosas.\n- 🌟 Inspirar a comunidade com insights.',
    link: 'https://youtu.be/6yl9QTq0MVo',
  },
  {
    date: new Date('2024-05-22'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Design System: Navegando pela Manutenção e Evolução',
    description: 'Vamos explorar os fundamentos, desafios e estratégias para a manutenção e evolução de um Design System robusto e eficaz.\nJunte-se a nós enquanto mergulhamos nas melhores práticas, compartilhamos insights valiosos e discutimos as últimas tendências no mundo do design e da tecnologia. Se você é designer, dev, gerente de produto ou uma pessoa entusiasta do design, esta é a sua comunidade para aprender e se inspirar. 🎨✨',
    link: 'https://youtu.be/rs-g1_MprD4',
  },
  {
    date: new Date('2024-05-10'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Design System: Melhores Práticas para Organização e Colaboração.',
    description: 'Junte-se a nós enquanto exploramos as melhores práticas para organizar e colaborar de forma eficaz. Não perca esta oportunidade de aprimorar suas habilidades de design e maximizar a eficiência da sua equipe. Vamos lá! 💡',
    link: 'https://youtu.be/xD3mi_5SQVE',
  },
  {
    date: new Date('2024-04-24'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Design System: Uma Jornada pelo Design System Brasil-Canadá!',
    description: 'Junte-se a nós para uma emocionante jornada pelo universo do Design System, enquanto exploramos as nuances e conexões entre as abordagens brasileira e canadense. Nesta conversa fascinante, mergulharemos em conceitos, práticas e insights que moldam e impulsionam o design em ambas as culturas.',
    link: 'https://youtu.be/SwoUSeEhoOk',
  },
  {
    date: new Date('2024-04-10'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Design System: a visão de um dev sobre a importância do design system.',
    description: 'Você já se perguntou como as pessoas desenvolvedoras veem a implementação de um design system em seus projetos? Junte-se a nós nesta live, onde exploraremos o papel crucial do design system do ponto de vista de um dev.\nVeja insights e experiências sobre como um design system influencia diretamente o trabalho das pessoas desenvolvedoras, desde a facilidade de colaboração até a aceleração do processo de desenvolvimento.',
    link: 'https://youtu.be/0UmDxlwHXOA',
  },
  {
    date: new Date('2024-03-27'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Design System: como se integrar e colaborar em projetos open source?',
    description: 'Descubra os segredos de participar ativamente de um projeto open source enquanto apresentamos as últimas atualizações sobre o desenvolvimento contínuo do Open Source Design System da Impulso. 🌐',
    link: 'https://youtu.be/_jLS9LxDsaY',
  },
  {
    date: new Date('2024-03-13'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Design System: celebrando a evolução e inspirando o futuro!',
    description: 'Explore as últimas novidades e avanços no Design System Open Source da Impulso. Descubra conquistas exclusivas, recursos recentes, contribuições notáveis e mergulhe nas experiências compartilhadas pelos mantenedores do projeto. Junte-se a nós nessa jornada de inovação!',
    link: 'https://youtu.be/xt7f-6qngxI',
  },
  {
    date: new Date('2024-02-28'),
    type: [TimelineType.Events, TimelineType.HostedEvents, TimelineType.OrganizedEvents],
    title: 'Open Source: desvendando o código aberto e suas vantagens - Design System da Impulso em Ação!',
    description: 'É Open Source que vocês gostam? 📅 Descubra o poder do código aberto e suas vantagens enquanto apresentamos o projeto Open Source Design System da Impulso 👀',
    link: 'https://youtu.be/zmL87U-6l9I',
  },
  {
    date: new Date('2023-04-16'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: 'GitHub Presente Brasil Março!',
    description: 'GitHub Presente Brasil Março! Roda de Conversa sobre comunidades tech e open source e uma super novidade!',
    link: 'https://www.linkedin.com/events/githubpresentebrasilmar-o-rodad7039674354678337536/comments/',
  },
  {
    date: new Date('2021-09-18'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: 'MC na PrograMaria Summit 2021',
    description: 'Mestre de Cerimônia da Sala de Conteúdo Sonia Guimarães, trilha sobre Front-end, na PrograMaria Summit 2021.',
    image: '/images/programaria-summit-2021.jpg',
  },
  {
    date: new Date('2025-03-27'),
    type: [TimelineType.Events],
    title: 'Nasce uma estrela: minha jornada até a conquista do GitHub Star na Liga Acadêmica de Computação, Inovação e Código Aberto (LACICA)',
    description: 'Nesta apresentação, Leticia compartilha sua trajetória desde os primeiros passos como criadora de conteúdo até conquistar o reconhecimento como GitHub Star.',
    image: '/images/lacica.jpg',
  },
  {
    date: new Date('2025-05-16'),
    type: [TimelineType.Events],
    title: 'Open Source Friday com o Diciotech',
    description: 'Neste evento do GitHub, focado em compartilhar e divulgar projetos Open Source, Leticia apresenta o projeto Diciotech, destacando a importância do código aberto e como a comunidade pode contribuir.',
    link: 'https://www.linkedin.com/posts/github-brazil_est%C3%A1-chegando-nossa-primeira-edi%C3%A7%C3%A3o-do-activity-7305618125650055169-6rlF?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbxRIIBpJcFMMhW8XMv-zMqfP8Cexi-Nw8',
  },
  {
    date: new Date('2025-06-12'),
    type: [TimelineType.Events],
    title: 'Incentivando Seu Time a Contribuir com Open Source',
    description: 'Tive a honra de palestrar na trilha de Liderança Técnica, ao lado da Pachi Parra, falando sobre Open Source e Inner Source. Um tema que carrego comigo porque tem tudo a ver com colaboração e comunidade!',
    image: '/images/tdc-floripa-2025.jpg',
  },
];
