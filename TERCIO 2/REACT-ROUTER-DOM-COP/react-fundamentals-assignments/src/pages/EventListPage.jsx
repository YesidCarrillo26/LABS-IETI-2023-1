import { useEffect, useState } from 'react';
import { EventCard } from '../components/EventCard';
import { getEvents } from '../services/eventsService';

export function EventListPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <main>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </main>
  );
}
