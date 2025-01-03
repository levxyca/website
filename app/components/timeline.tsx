import React from 'react';
import { TimelineItem } from '../data/timeline/timelineItem';
import '../styles/timeline.css';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import timelineData from '../data/timeline/index';

const Timeline: React.FC = () => {
  // Assume que timelineData já está ordenado
  const sortedItems = [...timelineData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="timeline-container">
      {sortedItems.map((item, index) => {
        const formattedDate = format(new Date(item.date), 'dd MMM, yyyy', { locale: pt });
        const isLastItem = index === sortedItems.length - 1;

        return (
          <div className={`timeline-item ${isLastItem ? 'last-item' : ''}`} key={item.title}>
            <span className="timeline-date">{formattedDate}</span> {/* Data à esquerda */}
            <div className="timeline-dot"></div> {/* Ponto */}
            <div className="timeline-content"> {/* Conteúdo da timeline */}
              <h3 className="timeline-title">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <section className="timeline-type">
                {(typeof item.type === 'string' ? [item.type] : item.type).map((type) => (
                  <React.Fragment key={type}> {/* Usando o valor do tipo como chave */}
                    <span className="highlight">{type}</span>
                    {item.type.length > 1 && (
                      <span style={{ display: 'inline-block', width: '0.5em' }}></span>
                    )}
                  </React.Fragment>
                ))}
              </section>

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
