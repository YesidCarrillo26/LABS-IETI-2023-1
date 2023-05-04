import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "../services/eventsService";

export function EventDetailPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getEventById(eventId).then((loadedEvent) => setEvent(loadedEvent));
  }, [eventId]);

  const handleBuyTickets = (priceId) => () => {
    navigate(`/events/${event.id}/tickets/${priceId}`);
  };

  if (!event) {
    return "loading...";
  }

  return (
    <main>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <img src={event.poster} width="300px" />
      {event.prices.map((price) => (
        <div key={price.id}>
          {price.price} -{" "}
          <button onClick={handleBuyTickets(price.id)}>Buy Tickets</button>
        </div>
      ))}
    </main>
  );
}
