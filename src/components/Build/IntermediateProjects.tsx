import React from 'react';

const IntermediateProjects: React.FC = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'Build a weather app using APIs to fetch real-time data.',
    },
    {
      title: 'Responsive Blog',
      description: 'Create a blog with a fully responsive design using CSS and JavaScript.',
    },
    {
      title: 'Simple E-Commerce',
      description: 'Develop a basic e-commerce app with product listings and cart functionality.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-600">Intermediate Projects</h2>
      <ul className="mt-4 space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntermediateProjects;
