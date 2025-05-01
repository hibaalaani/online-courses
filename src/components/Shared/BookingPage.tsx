import { InlineWidget, useCalendlyEventListener } from "react-calendly";

interface BookingPageProps {
  onBookingConfirmed: () => void;
  user: {
    name: string|null;
    email: string|null;
  };
}

const BookingPage: React.FC<BookingPageProps> = ({ onBookingConfirmed , user}) => {
  // ✅ Listen for Calendly booking confirmation
  useCalendlyEventListener({
    onEventScheduled: () => {
      onBookingConfirmed();
    },
  });
  const calendlyUrl = `https://calendly.com/alaani-hiba/?name=${encodeURIComponent(
    user?.name || ""
  )}&email=${encodeURIComponent(user?.email || "")}`;
  return (
    <InlineWidget
      url={calendlyUrl}
      styles={{ height: "650px"}}
      pageSettings={{ hideEventTypeDetails: false }}
      utm={{ utmMedium: "trial-booking" }}
    />
  );
};

export default BookingPage;
