export type TimelineType = 'video' | 'talk' | 'article' | 'podcast' | 'workshop' | 'project' | 'newsletter' | 'event';

export const timelineTypeDescriptions: Record<TimelineType, string> = {
  video: 'Vídeo',
  talk: 'Palestra',
  article: 'Artigo',
  podcast: 'Podcast',
  workshop: 'Workshop',
  project: 'Projeto',
  newsletter: 'Newsletter',
  event: 'Evento',
};
