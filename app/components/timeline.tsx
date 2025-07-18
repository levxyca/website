"use client";

import { useState } from 'react';
import { TimelineItem } from '../data/timeline/timelineItem';
import '../styles/timeline.css';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import timelineData from '../data/timeline/index';
import Image from 'next/image';

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Anos únicos
  const years = Array.from(new Set(timelineData.map(item => new Date(item.date).getFullYear()))).sort((a, b) => b - a);
  // Tipos únicos
  const types = Array.from(new Set(timelineData.flatMap(item => typeof item.type === 'string' ? [item.type] : item.type)));

  // Filtro combinado
  const filteredItems = timelineData.filter(item => {
    const yearMatch = !selectedYear || new Date(item.date).getFullYear().toString() === selectedYear;
    const typeMatch = !selectedType || (
      Array.isArray(item.type)
        ? item.type.map(t => String(t).toLowerCase()).includes(selectedType.toLowerCase())
        : String(item.type).toLowerCase() === selectedType.toLowerCase()
    );
    const searchMatch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || (item.description && item.description.toLowerCase().includes(search.toLowerCase()));
    return yearMatch && typeMatch && searchMatch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="timeline-container" aria-label="Linha do tempo de atividades">
      {/* Filtros combinados */}
      <form className="timeline-filters" role="search" aria-label="Filtros da timeline" onSubmit={e => e.preventDefault()}>
        <label htmlFor="year-filter">Ano:</label>
        <select
          id="year-filter"
          value={selectedYear || ''}
          onChange={e => setSelectedYear(e.target.value || null)}
        >
          <option value="">Todos</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <label htmlFor="type-filter">Tipo:</label>
        <select
          id="type-filter"
          value={selectedType || ''}
          onChange={e => setSelectedType(e.target.value || null)}
        >
          <option value="">Todos</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <label htmlFor="search-filter" className="sr-only">Buscar</label>
        <input
          id="search-filter"
          type="search"
          placeholder="Buscar por título ou descrição..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Buscar na timeline"
        />
      </form>
      {sortedItems.length === 0 && (
        <p className="timeline-empty">Nenhum resultado encontrado.</p>
      )}
      {sortedItems.map((item, index) => {
        // Normaliza para UTC para evitar erro de hidratação
        const dateObj = typeof item.date === 'string' ? new Date(item.date + 'T00:00:00Z') : new Date(item.date);
        const formattedDate = format(dateObj, 'dd MMM, yyyy', { locale: pt });
        const isLastItem = index === sortedItems.length - 1;
        // Destaque para talks/artigos de DevRel/comunidade
        const isDevRel = (typeof item.type === 'string' ? [item.type] : item.type).some(type => ["talk", "article", "open source", "events", "organized an event", "hosted an event"].includes(type));
        return (
          <article
            className={`timeline-item ${isLastItem ? 'last-item' : ''} ${isDevRel ? 'devrel-highlight' : ''}`}
            key={item.title}
            aria-label={item.title}
          >
            <span className="timeline-date">{formattedDate}</span>
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-content">
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
                  <span className="highlight" key={type}>
                    {type}
                  </span>
                ))}
                {Array.isArray(item.type) && item.type.length > 1 && (
                  <span style={{ display: 'inline-block', width: '0.5em' }}></span>
                )}
              </section>
              {item.description && <p>{item.description}</p>}
              {item.image && (
                <div className="timeline-image">
                  <Image
                    src={item.image}
                    alt={`Imagem ilustrativa de ${item.title}`}
                    width={600}
                    height={340}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    sizes="(max-width: 800px) 100vw, 800px"
                    quality={80}
                    priority={index === 0}
                  />
                </div>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Timeline;
