import React from 'react';

interface LevelSelectorProps {
  onNext: (level: 'beginner' | 'intermediate' | 'advanced') => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ onNext }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 px-8 lg:px-18">
      <div className="text-center mx-auto w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 leading-tight">
          Select Your Level
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose a level that matches your experience and skills.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beginner */}
          <div
            onClick={() => onNext('beginner')}
            className="group cursor-pointer border border-indigo-300 bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-indigo-100 hover:scale-105 transition-all"
          >
            <h3 className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-800">
              Beginner
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Start from the basics and learn step by step.
            </p>
          </div>
          {/* Intermediate */}
          <div
            onClick={() => onNext('intermediate')}
            className="group cursor-pointer border border-amber-300 bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-amber-100 hover:scale-105 transition-all"
          >
            <h3 className="text-2xl font-bold text-amber-600 group-hover:text-amber-800">
              Intermediate
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Build on your foundational skills with new challenges.
            </p>
          </div>
          {/* Advanced */}
          <div
            onClick={() => onNext('advanced')}
            className="group cursor-pointer border border-green-300 bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-green-100 hover:scale-105 transition-all"
          >
            <h3 className="text-2xl font-bold text-green-600 group-hover:text-green-800">
              Advanced
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Tackle advanced concepts and become an expert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;
