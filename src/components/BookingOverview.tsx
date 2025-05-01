import React from 'react';

interface BookingOverviewProps {
  selection: {
    type?: string;
    level?: string;
  };
  onNext: () => void;
}

const BookingOverview: React.FC<BookingOverviewProps> = ({ selection, onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-indigo-600 overflow-hidden px-6">
      <h2 className="text-3xl font-bold text-gray-100 mb-6">Confirm Your Selection</h2>
      <p className="text-gray-100 mb-4">
        You have selected: <strong>{selection.type?.toUpperCase()}</strong> -{' '}
        <strong>{selection.level?.toUpperCase()}</strong>
      </p>
      <button
        onClick={onNext}
        className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all"
      >
        Proceed to Booking
      </button>
    </div>
  );
};

export default BookingOverview;
