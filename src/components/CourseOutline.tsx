import React from 'react';

interface CourseOutlineProps {
  selection: {
    type: string;
    level: string;
  };
  onNext: () => void;
}

const CourseOutline: React.FC<CourseOutlineProps> = ({ selection, onNext }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 px-8 lg:px-18">
      <div className="text-center mx-auto w-full max-w-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 leading-tight animate-fade-in">
          {selection.type === 'learn' ? 'Learning Path' : 'Project Path'}
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          You selected:
          <span className="ml-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg">
            {selection.level}
          </span>
        </p>
        <p className="mt-4 text-gray-500">
          Explore a curated path designed for your skill level and goals.
        </p>
        <button
          onClick={onNext}
          className="mt-8 px-8 py-4 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
        >
          Proceed to Booking
        </button>
      </div>
    </div>
  );
};

export default CourseOutline;
