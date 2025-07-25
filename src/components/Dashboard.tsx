import { useUser } from '../context/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';

export default function Dashboard() {
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const registrationDate = user?.joined ? new Date(user.joined).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : 'Not available';

  const navigateButton = () => { navigate('/kids'); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden font-poppins">
      {/* Background Orbs/Glows - for a techy, futuristic feel */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Content Card - Adjusted max-w and ensured internal elements respect boundaries */}
      <div className="relative z-10 w-full max-w-6xl bg-white bg-opacity-95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 border-4 border-purple-400 transform transition-all duration-500 hover:scale-[1.005] flex flex-col lg:flex-row items-center gap-8">
        {/* Illustration Section */}
        <div className="lg:w-1/2 flex justify-center items-center p-4">
          <img
            src="/projects/story_app.webp" // MAKE SURE THIS PATH IS CORRECT!
            alt="Learning illustration"
            className="w-full max-w-sm lg:max-w-md object-contain animate-fadeIn"
          />
        </div>

        {/* Content Section - Added pr-4 for potential right overflow on small screens */}
        <div className="lg:w-1/2 text-center lg:text-left overflow-hidden"> {/* Added overflow-hidden here */}
          {/* Success Message */}
          {location.state?.successMessage && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg shadow-md animate-slideInDown">
              <p className="font-semibold">{location.state.successMessage}</p>
            </div>
          )}

          {/* Adjusted heading for better wrapping and responsiveness */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight mb-3 animate-slideInLeft break-words"> {/* Added break-words */}
            <span className="block text-purple-600">Hello there,</span>
            {user?.child_name ? user.child_name : user?.username || 'Valued User'}!
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 animate-slideInRight break-words"> {/* Added break-words */}
            Your personalized learning adventure awaits.
          </p>

          {/* User Info Cards */}
          {/* Added flex-wrap and justify-center to handle overflow on very small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <InfoCard title="Parent Email" value={user?.email || 'Not available'} icon="📧" />
            <InfoCard title="Account Name" value={user?.username || 'Guest'} icon="👤" />
            {user?.child_name && (
              <InfoCard title="Child's Name" value={user.child_name} icon="🧒" />
            )}
            <InfoCard title="Joined Us On" value={registrationDate} icon="🗓️" />
          </div>

          {/* Call to Action / Explore Section */}
          <div className="mt-8 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">What's Next?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={navigateButton} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 animate-pulse-subtle">
                Explore Courses
              </button>
              {/* <button className="bg-white border-2 border-purple-500 text-purple-700 hover:bg-purple-50 hover:text-purple-800 font-semibold py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105">
                View Schedule
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable InfoCard Component - Added max-w-full and overflow-hidden for long text in cards
const InfoCard: React.FC<{ title: string; value: string; icon: string }> = ({ title, value, icon }) => (
  <div className="bg-purple-50 bg-opacity-80 p-4 rounded-xl shadow-sm border border-purple-200 flex items-center space-x-3 transform transition-transform duration-200 hover:scale-[1.02] max-w-full overflow-hidden">
    <div className="text-3xl flex-shrink-0">{icon}</div> {/* flex-shrink-0 prevents icon from shrinking */}
    <div className="min-w-0"> {/* min-w-0 allows content to shrink properly */}
      <h3 className="text-sm font-semibold text-purple-800 truncate">{title}</h3> {/* Added truncate for long titles */}
      <p className="text-gray-700 text-base font-medium truncate">{value}</p> {/* Added truncate for long values */}
    </div>
  </div>
);