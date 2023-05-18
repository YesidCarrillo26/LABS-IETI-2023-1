import { Menu } from "./components/Menu";
import { BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventListPage } from "./pages/EventListPage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { TicketPaymentPage } from "./pages/TicketPaymentPage";
export function AppRouter() {
  return (
    <>
   <Menu></Menu>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventListPage />} />
      <Route path="/events/:eventId" element={<EventDetailPage />} />
      <Route path="/events/:eventId/tickets/:priceId" element={<TicketPaymentPage />} />
    </Routes>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}
