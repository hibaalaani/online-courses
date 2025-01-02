import React from 'react';

interface BeginnerTopicsProps {
  onClose: () => void; // Prop for closing the popup
}

const BeginnerTopics: React.FC<BeginnerTopicsProps> = ({ onClose }) => {
  const topics = [
    {
      title: 'Programming Basics',
      description: 'Learn variables, loops, and basic syntax.',
    },
    {
      title: 'Web Development Basics',
      description: 'Understand HTML and CSS for creating webpages.',
    },
    {
      title: 'JavaScript Basics',
      description: 'Add interactivity to your websites.',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-indigo-600 text-center">Beginner Topics</h2>

        {/* Topics List */}
        <ul className="mt-6 space-y-4">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold text-indigo-800">{topic.title}</h3>
              <p className="text-gray-700">{topic.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeginnerTopics;
