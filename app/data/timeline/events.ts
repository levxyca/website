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
    image: 'images/open-source-time-23-10.jpg',
  },
  {
    date: new Date('2022-03-26'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: 'Feministalk AprenDev 📚 - Como aprender a aprender tecnologia?',
    description: 'Evento sobre como podemos aprender melhor sobre como aprender melhor assuntos relacionados à tecnologia!\nTrabalhei no planejamento e organização desse evento, também fui host e uma das pessoas moderadoras, ao final, participei da roda de conversa, mediando os assuntos e também conversando sobre como aprender a aprender.',
    image: 'images/feministalk-aprendev.jpg',
    link: 'https://www.twitch.tv/collections/6rWTuUld4BY8Sw',
  },
  {
    date: new Date('2022-03-08'),
    type: [TimelineType.Events, TimelineType.HostedEvents],
    title: '#ChamaAsMina - Dia das Mulheres | Feministech',
    description: 'Participação na live do #ChamaAsMina com duas rodas de conversas, uma sobre carreiras e outra sobre produção de conteúdo.\nEstive presente na organização do evento e como mediadora de uma das rodas de conversa.',
    link: 'https://www.youtube.com/watch?v=M5G4Jf9Ox4M&ab_channel=LINUXtips',
  },
];
