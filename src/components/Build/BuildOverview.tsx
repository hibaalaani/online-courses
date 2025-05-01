import React from 'react';

interface BuildOverviewProps {
  onSelectModal: (level: 'beginner' | 'intermediate' | 'advanced') => void;
  onNext: (level: 'beginner' | 'intermediate' | 'advanced') => void;
}

const BuildOverview: React.FC<BuildOverviewProps> = ({ onSelectModal, onNext }) => {
  return (
    <div className="min-h-screen px-8 lg:px-18 flex flex-col items-center justify-center py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-200">Build a Project</h1>
      <p className="mt-4 text-lg text-gray-200">
        Choose your level and start building exciting projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Beginner */}
       
        <div className="bg-gradient-to-b from-indigo-100 to-indigo-200 p-6 rounded-lg shadow-2xl p-6  transition-transform transform hover:shadow-[0px_4px_20px_#4F46E5] hover:scale-105 ">
          <h3 className="text-xl font-bold text-indigo-600">Beginner Projects</h3>
          <p className="text-gray-500 mt-2">Simple and fun projects for beginners.</p>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => onSelectModal('beginner')}
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => onNext('beginner')}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all shadow-md"
            >
              Select Level
            </button>
          </div>
        </div>

        {/* Intermediate */}
        <div className="bg-gradient-to-b from-amber-100 to-amber-200 p-6 rounded-lg shadow-2xl p-6 hover:shadow-[0px_4px_15px_rgba(0,0,0,0.4)]  transition-transform transform hover:shadow-[0px_4px_20px_#F59E0B] hover:scale-105 ">
          <h3 className="text-xl font-bold text-amber-600">Intermediate Projects</h3>
          <p className="text-gray-500 mt-2">Create dynamic applications with real-world use cases.</p>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => onSelectModal('intermediate')}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => onNext('intermediate')}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all shadow-md"
            >
              Select Level
            </button>
          </div>
        </div>

        {/* Advanced */}
        <div className="bg-gradient-to-b from-green-100 to-green-200 p-6 rounded-lg shadow-2xl p-6 hover:shadow-[0px_4px_15px_rgba(0,0,0,0.4)]  transition-transform transform  hover:shadow-[0px_4px_20px_rgba(0,255,255,0.6)] hover:scale-105 ">
          <h3 className="text-xl font-bold text-green-600">Advanced Projects</h3>
          <p className="text-gray-500 mt-2">Master advanced concepts and build full-stack apps.</p>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => onSelectModal('advanced')}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => onNext('advanced')}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all shadow-md"
            >
              Select Level
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildOverview;
