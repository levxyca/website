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
timelineData.sort((a, b) => (a.date < b.date ? -1 : 1));

// Exportando os dados
export default timelineData;
