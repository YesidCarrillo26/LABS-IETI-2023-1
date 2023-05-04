import { useState } from "react";
import { useParams } from "react-router-dom";
import { sendPaymentLink } from "../services/paymentsService";

export function TicketPaymentPage() {
  const { eventId, priceId } = useParams();
  const [email, setEmail] = useState("");

  const handlePaymentLinkClick = () => {
    sendPaymentLink(email, eventId, priceId);
  };

  return (
    <main>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handlePaymentLinkClick}>Send me a payment link</button>
    </main>
  );
}
