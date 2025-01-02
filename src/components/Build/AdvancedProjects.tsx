import React from 'react';

const AdvancedProjects: React.FC = () => {
  const projects = [
    {
      title: 'Full-Stack Blogging Platform',
      description: 'Develop a full-stack blogging platform with user authentication.',
    },
    {
      title: 'Task Manager with React and Node.js',
      description: 'Build a task manager with CRUD functionality and a database.',
    },
    {
      title: 'Web Scraping with Python',
      description: 'Create a Python-based web scraper to extract useful data from websites.',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Develop a fully functional e-commerce site with a payment gateway.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600">Advanced Projects</h2>
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

export default AdvancedProjects;
