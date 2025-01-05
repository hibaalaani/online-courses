import React from 'react';
import { useTopics } from '../../context/TopicsContext';

const IntermediateProjects: React.FC = () => {
  const {topics, loading, error} = useTopics();
  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 const intermediateTopics = topics.filter(
  (topic) => topic.level ==='intermediate' && topic.branch ==='build'
 )



  // const projects = [
  //   {
  //     title: 'Weather App',
  //     description: 'Build a weather app using APIs to fetch real-time data.',
  //   },
  //   {
  //     title: 'Responsive Blog',
  //     description: 'Create a blog with a fully responsive design using CSS and JavaScript.',
  //   },
  //   {
  //     title: 'Simple E-Commerce',
  //     description: 'Develop a basic e-commerce app with product listings and cart functionality.',
  //   },
  // ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-600">Intermediate Projects</h2>
      <ul className="mt-4 space-y-4">
        {intermediateTopics.map((project, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
            <p className="text-gray-600">  <ol className="list-decimal list-inside">
            <p className="text-gray-700">{project.description.split('\n').map((item, index) => (
              <li key={index} className="text-gray-600">
                {item.trim()}
              </li>
            ))}</p>
            </ol></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntermediateProjects;
