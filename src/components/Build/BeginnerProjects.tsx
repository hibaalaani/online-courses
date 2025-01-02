import React from 'react';

const BeginnerProjects: React.FC = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'Create a simple personal portfolio using HTML and CSS.',
    },
    {
      title: 'To-Do List',
      description: 'Build a functional to-do list with JavaScript for interactivity.',
    },
    {
      title: 'Responsive Layout',
      description: 'Learn responsive design by creating a simple webpage layout.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-600">Beginner Projects</h2>
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

export default BeginnerProjects;
