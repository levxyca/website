import { TimelineType } from "./timelineTypes";

/**
 * Represents an item in the timeline.
 */
export interface TimelineItem {
  /**
   * Date of the timeline event.
   * Using Date object for better manipulation and formatting.
   */
  date: Date;

  /**
   * Title of the event.
   */
  title: string;

  /**
   * Optional link related to the event.
   */
  link?: string;

  /**
   * Optional image related to the event.
   */
  image?: string;

  /**
   * Type of the event (e.g., talk, open-source).
   */
  type: TimelineType;

  /**
   * Description of the event. Can be optional if some events don't require detailed descriptions.
   */
  description?: string;
}
