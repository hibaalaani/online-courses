import React from 'react';

const AdvancedTopics: React.FC = () => {
  const topics = [
    {
      title: 'Advanced React',
      description: 'Learn state management with Redux or Context API.',
    },
    {
      title: 'Backend Basics with Node.js',
      description: 'Build RESTful APIs using Express.js and MongoDB.',
    },
    {
      title: 'Authentication & Security',
      description: 'Implement authentication using JWT and OAuth.',
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize websites with code splitting, lazy loading, and caching.',
    },
    {
      title: 'Full-Stack Project',
      description: 'Integrate frontend and backend to build a complete application.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600">Advanced Topics</h2>
      <ul className="mt-4 space-y-4">
        {topics.map((topic, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">{topic.title}</h3>
            <p className="text-gray-600">{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvancedTopics;
