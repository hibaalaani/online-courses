import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../assets/banner.jpg'
interface LandingPageProps {
  onNext: (choice: 'learn' | 'build') => void;
}



const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {

  const navigate = useNavigate(); // Hook for navigation

  const handleBeginnerNavigate = () => {
    navigate("/beginner-roadmap"); // Redirect to roadmap page
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white overflow-hidden">
      
      {/* 🪐 Floating Cosmic Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-md opacity-30 animate-[float_6s_ease-in-out_infinite] delay-500"></div>
      <div className="absolute top-1/2 right-16 w-24 h-24 bg-red-400 rounded-full blur-md opacity-50 animate-[float_6s_ease-in-out_infinite] delay-500"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-indigo-400 rounded-full blur-md opacity-40 animate-[float_6s_ease-in-out_infinite] delay-500"></div>
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-20"></div>

      <div className="text-center mx-auto w-full relative z-10">
        {/* 🚀 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 📝 Text Section */}
          <div className="max-w-lg mx-auto animate-fade-in-down">
            
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl mt-20">
  {/* Strong gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white/20 z-10 rounded-2xl mix-blend-multiply"></div>

  {/* Responsive image */}
  <img
    src='../banner.webp'
    alt="Coding Banner"
    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-2xl brightness-75 transition-all duration-500 hover:scale-105"
  />
</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md transition-transform hover:scale-105">
              Welcome to the Coding Platform
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
              Choose between learning new coding skills or building exciting projects with guided tutorials.
            </p>
          </div>

          {/* 🎯 Buttons Section */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-0 animate-fade-in-up">
            <button
              onClick={() => onNext('learn')}
              className="w-auto max-w-[250px] px-5 py-3 bg-indigo-500 text-white text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105"
            >
              Learn
            </button>
            <button
              onClick={() => onNext('build')}
              className="w-auto max-w-[250px] px-5 py-3 bg-amber-500 text-white text-lg rounded-lg shadow-lg hover:bg-amber-600 transition-transform hover:scale-105"
            >
              Build a Project
            </button>

               {/* 🧒 Beginner Learning Path Button */}
               <button
              onClick={handleBeginnerNavigate}
              className="w-auto max-w-[250px] px-5 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition-transform hover:scale-105"
            >
              Learning Path (9-13)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
