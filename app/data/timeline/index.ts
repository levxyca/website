// Importação dos dados
import { newslevxycaData } from './newslevxyca';
import { talksData } from './talks';
import { ambassadorAwardsAndRecognitionData } from './ambassador-awards-recognizations';
import { spacesData } from './spaces';
import { videosData } from './videos';
import { blogpostsData } from './blogposts';
import { eventsData } from './events';
import { openSourceData } from './open-source';
import { podcastsData } from './podcasts';
import { freebiesData } from './freebies-templates';
import { othersData } from './others';

// Combinação dos dados da linha do tempo
const timelineData = [
  // ...newslevxycaData,
  ...talksData,
  ...ambassadorAwardsAndRecognitionData,
  ...spacesData,
  ...videosData,
  ...blogpostsData,
  ...eventsData,
  ...openSourceData,
  ...podcastsData,
  ...freebiesData,
  ...othersData,
];

// Se precisar, ordenar por data
// Ordenar do mais recente para o mais antigo
timelineData.sort((a, b) => b.date.getTime() - a.date.getTime());

// Exportando os dados
export default timelineData;
