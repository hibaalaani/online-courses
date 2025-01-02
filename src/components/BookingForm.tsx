import React, { useState } from 'react';

interface BookingFormProps {
  selection: {
    type?: string;
    level?: string;
  };
}

const BookingForm: React.FC<BookingFormProps> = ({ selection }) => {
  const [slot, setSlot] = useState('');
  const [unavailableSlots, setUnavailableSlots] = useState<string[]>([]);

  const handleBooking = () => {
    if (unavailableSlots.includes(slot)) {
      alert('This time slot is already booked. Please select another slot.');
      return;
    }

    // Add selected slot to unavailable slots
    setUnavailableSlots((prev) => [...prev, slot]);
    alert(`Booking confirmed for ${selection.type} (${selection.level}) on ${slot}`);
    setSlot(''); // Reset the slot input after booking
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Book Your Slot</h2>
      <p className="text-gray-600 mb-4">
        Selected: <span className="font-medium">{selection.type}</span> -{' '}
        <span className="font-medium">{selection.level}</span>
      </p>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Choose a Slot:</label>
        <input
          type="datetime-local"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>

      <button
        onClick={handleBooking}
        className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all"
      >
        Confirm Booking
      </button>

      {unavailableSlots.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Unavailable Slots:</h3>
          <ul className="text-gray-600">
            {unavailableSlots.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
