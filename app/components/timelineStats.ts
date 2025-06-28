import timelineData from '../data/timeline/index';
import { TimelineType } from '../data/timeline/timelineTypes';

function countType(type: TimelineType | string) {
  return timelineData.filter(item => {
    if (typeof item.type === 'string') return item.type === type;
    return item.type.includes(type as TimelineType);
  }).length;
}

export function getTimelineStats() {
  return {
    talks: countType(TimelineType.Talk),
    articles: countType(TimelineType.Article),
    videos: countType(TimelineType.Video),
    podcasts: countType(TimelineType.Podcast),
    openSource: countType(TimelineType.OpenSource),
    events: countType(TimelineType.Events),
    awards: countType(TimelineType.AmbassadorAndAwards),
    newsletters: countType(TimelineType.Newsletter),
    spaces: countType(TimelineType.Space),
    freebies: countType(TimelineType.Freebie),
    templates: countType(TimelineType.Template),
  };
}
