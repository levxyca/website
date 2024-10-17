import React from 'react';
import { TimelineItem } from '../data/types';
import '../timeline.css';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import timelineData from '../data/timeline/index';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = () => {
  const sortedItems = [...timelineData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="timeline-container">
      {sortedItems.map((item, index) => {
        const formattedDate = format(new Date(item.date), 'dd MMM, yyyy', {
          locale: pt,
        });

        const isLastItem = index === sortedItems.length - 1;

        return (
          <div
            className={`timeline-item ${isLastItem ? 'last-item' : ''}`}
            key={index}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{formattedDate}</span>
              <h3 className="timeline-title">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p>{item.description}</p>
              {item.image && (
                <div className="timeline-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;