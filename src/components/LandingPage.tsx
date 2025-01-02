import React from 'react';

interface LandingPageProps {
  onNext: (choice: 'learn' | 'build') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-8 lg:px-18 overflow-hidden  bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100 px-8 lg:px-18 overflow-hidden">
      <div className="text-center mx-auto w-full">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="max-w-lg mx-auto animate-fade-in-down">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 leading-tight">
              Welcome to the Coding Platform
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose between learning new coding skills or building exciting projects with guided tutorials.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-6 space-y-4 md:space-y-0 animate-fade-in-up">
          <button
              onClick={() => onNext('learn')}
              className="w-full md:w-auto px-8 py-4 bg-primary text-white text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
            >
              Learn
            </button>
            <button
              onClick={() => onNext('build')}
              className="w-full md:w-auto px-8 py-4 bg-secondary text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition-all"
            >
              Build a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
