import { useMemo, useState } from 'react';
import './Events.css';

const eventsData = [
  {
    id: 1,
    title: 'Startup 101 Workshop',
    date: 'Mar 10, 2026',
    tag: 'workshop',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Pitch Night',
    date: 'Apr 05, 2026',
    tag: 'pitch',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Founder Fireside',
    date: 'Apr 18, 2026',
    tag: 'talk',
    image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: '48 Hour Hackathon',
    date: 'May 02, 2026',
    tag: 'hackathon',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Product Sprint',
    date: 'May 19, 2026',
    tag: 'workshop',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Investor Q and A',
    date: 'Jun 01, 2026',
    tag: 'talk',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    title: 'Campus Demo Day',
    date: 'Jun 15, 2026',
    tag: 'pitch',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    title: 'Prototype Lab',
    date: 'Jun 28, 2026',
    tag: 'workshop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
];

const initialFilters = [
  { name: 'workshop', label: 'Workshops', status: true },
  { name: 'pitch', label: 'Pitch', status: true },
  { name: 'talk', label: 'Talks', status: true },
  { name: 'hackathon', label: 'Hackathons', status: true },
];

const Events = () => {
  const [filters, setFilters] = useState(initialFilters);

  const updateImgs = (currentFilters) => {
    const active = currentFilters.filter((filter) => filter.status);

    if (active.length === 0) {
      return eventsData;
    }

    const newImgs = [];

    eventsData.forEach((eventItem) => {
      active.forEach((filter) => {
        if (eventItem.tag === filter.name && filter.status === true) {
          newImgs.push(eventItem);
        }
      });
    });

    return newImgs;
  };

  const filteredEvents = useMemo(() => updateImgs(filters), [filters]);

  const toggleFilter = (name) => {
    setFilters((prev) =>
      prev.map((filter) =>
        filter.name === name ? { ...filter, status: !filter.status } : filter
      )
    );
  };

  return (
    <section className="events">
      <div className="events__inner">
        <div className="events__header">
          <p className="events__eyebrow">Events</p>
          <h1 className="events__title">Discover whats happening at E-Cell</h1>
          <p className="events__lead">
            Filter by category to explore workshops, pitch nights, talks, and hackathons.
          </p>
        </div>

        <div className="events__filters">
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={`events__filter ${filter.status ? 'is-active' : ''}`}
              type="button"
              onClick={() => toggleFilter(filter.name)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="events__grid">
          {filteredEvents.map((eventItem) => (
            <figure className="events-card" key={eventItem.id}>
              <div className="events-card__image">
                <img src={eventItem.image} alt={eventItem.title} loading="lazy" />
              </div>
              <figcaption className="events-card__content">
                <p className="events-card__tag">{eventItem.tag}</p>
                <h3 className="events-card__title">{eventItem.title}</h3>
                <p className="events-card__date">{eventItem.date}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
