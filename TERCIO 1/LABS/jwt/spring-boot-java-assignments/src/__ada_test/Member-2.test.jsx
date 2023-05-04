import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import { render, userEvent } from "../../test-config/utils";
import { App } from "../App";
import { EventCard } from "../components/EventCard";
import { getEventById, getEvents } from "../services/eventsService";

describe("__AdaTest:Member-2 React Router", () => {
  it("should display an event in a EventCard", async () => {
    const eventTest = await getEventById(1);
    const { getByText, container } = render(<EventCard event={eventTest} />, {
      wrapper: MemoryRouter,
    });

    expect(getByText(eventTest.name)).toBeInTheDocument();
    const eventImage = container.querySelector(
      `img[src="${eventTest.poster}"]`
    );
    expect(eventImage).not.toBeNull();
    expect(getByText("Details")).toBeInTheDocument();
  });

  it("should list events in event list page", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, container } = render(<App />);

    const navigation = getByRole("navigation");
    const ticketsMenu = navigation.querySelector('a[href="/events"]');

    await user.click(ticketsMenu);
    expect(window.location.pathname).toEqual("/events");

    const events = await getEvents();

    events.map((event) => {
      expect(getByText(event.name)).toBeInTheDocument();
      const eventImage = container.querySelector(`img[src="${event.poster}"]`);
      expect(eventImage).not.toBeNull();
    });

    const firstEvent = await getEventById(1);
    const eventCard = getByText(firstEvent.name).parentElement;
    const detailButton = eventCard.querySelector("button");

    await user.click(detailButton);
    expect(window.location.pathname).toEqual(`/events/${firstEvent.id}`);
  });
});
