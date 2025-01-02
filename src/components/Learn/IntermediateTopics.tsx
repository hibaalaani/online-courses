import React from 'react';

const IntermediateTopics: React.FC = () => {
  const topics = [
    {
      title: 'Intermediate JavaScript',
      description: 'Deep dive into ES6+, promises, and async/await.',
    },
    {
      title: 'Responsive Web Design',
      description: 'Learn advanced CSS techniques and media queries.',
    },
    {
      title: 'Introduction to React',
      description: 'Build interactive UIs using React components and hooks.',
    },
    {
      title: 'APIs and Fetch',
      description: 'Learn to consume RESTful APIs using fetch and axios.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-600">Intermediate Topics</h2>
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

export default IntermediateTopics;
