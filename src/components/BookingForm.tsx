// src/components/BookingForm.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookingPage from './Shared/BookingPage';
import { useUser } from "../context/UserContext";
import { allCurriculumPaths } from '../data/curriculumData'; // Import curriculum data

interface BookingFormProps {}

const BookingForm: React.FC<BookingFormProps> = () => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = useUser();
  const location = useLocation();
  const selectedCurriculumId = location.state?.selectedCurriculumId;

  const curriculumDetails = selectedCurriculumId ?
                            allCurriculumPaths[selectedCurriculumId] :
                            { title: "Selected Curriculum", subtitle: "" };

  const displayTitle = curriculumDetails.title;
  const displaySubtitle = curriculumDetails.subtitle;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900 text-white p-8">
        <p className="text-center text-indigo-300 text-xl animate-pulse">
          Loading user information or please <a href="/login" className="underline hover:text-indigo-400">log in</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-white"> {/* Increased py- from py-16 to py-20 */}
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 max-w-4xl w-full border border-gray-700">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-center">
          Book Your FREE Trial Session <span className="ml-2 text-cyan-400">🚀</span>
        </h2>
        <p className="text-white mb-8 text-center text-lg sm:text-xl max-w-xl mx-auto">
          Experience the Bug to Byte difference firsthand.
        </p>

        {selectedCurriculumId && (
            <div className="mb-8 p-4 bg-gray-700 bg-opacity-50 rounded-lg border border-indigo-600 shadow-inner">
                <p className="text-white text-center text-md sm:text-lg">
                    You're scheduling a trial for the:
                </p>
                <p className="font-bold text-cyan-400 text-center text-xl sm:text-2xl mt-2">
                    {displayTitle}
                </p>
                {displaySubtitle && (
                    <p className="font-medium text-white text-center text-md sm:text-lg mt-1">
                        "{displaySubtitle}"
                    </p>
                )}
            </div>
        )}

        {!bookingSuccess ? (
          <div className="bg-gray-900 bg-opacity-60 rounded-xl shadow-xl p-4 w-full border border-indigo-700">
              <BookingPage onBookingConfirmed={() => setBookingSuccess(true)} user={{
                  name: user.username,
                  email: user.email,
              }}/>
          </div>
        ) : (
          <div className="text-center p-8 bg-green-800 bg-opacity-80 rounded-xl text-green-200 font-semibold shadow-lg border border-green-700 animate-fade-in">
            <p className="text-2xl mb-4">✅ Booking Confirmed!</p>
            <p className="text-lg">
              We've received your request for the <strong className="text-white">{displayTitle}</strong> curriculum.
            </p>
            <p className="text-lg mt-2">
              Please check your inbox at <strong className="text-white">{user.email}</strong> for session details and next steps.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;