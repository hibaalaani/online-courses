import React, {  useState } from 'react';
import BookingPage from './Shared/BookingPage';
import {useUser} from "../context/UserContext"
interface BookingFormProps {
  selection: {
    type?: string;
    level?: string;
  };
}

const BookingForm: React.FC<BookingFormProps> = ({ selection }) => {


  const [bookingSuccess, setBookingSuccess] = useState(false);
const {user} = useUser()
console.log(user)
if (!user) return <p className="text-center text-red-500">Loading user info...</p>;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  mt-10 p-20  max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-300 mb-6">Book Your Slot</h2>
      <p className="text-gray-300 mb-4">
        Selected: <span className="font-medium">{selection.type}</span> -{' '}
        <span className="font-medium">{selection.level}</span>
      </p>
      {!bookingSuccess ? (
    
      <BookingPage onBookingConfirmed={() => setBookingSuccess(true)}   user={{
        name: user.username,
        email:user.email,
      }}/>
    ) : (
          <div className="text-center p-4 text-green-600 font-semibold">
            ✅ Booking Confirmed! We will contact you at <strong>{user.email}</strong> for session details.
          </div>
        )}
     
    </div>
  );
};

export default BookingForm;
