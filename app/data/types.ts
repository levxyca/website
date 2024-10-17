import { TimelineType } from "./timelineTypes";
import { format } from 'date-fns';

export interface TimelineItem {
  date: string;
  title: string;
  link?: string;
  image?: string;
  type: TimelineType;
  description: string;
}
