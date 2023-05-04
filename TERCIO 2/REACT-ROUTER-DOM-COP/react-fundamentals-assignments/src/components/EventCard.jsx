import { useNavigate } from "react-router-dom";

export function EventCard({event}) {

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <article>
      Event Card
      <h1>{event.name}</h1>
      <img src={event.poster} alt={event.name}></img>
      {/* <ul>
        {event.prices.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul> */}
      <button onClick={handleDetailsClick}>Details</button>
    </article>
    );
}
