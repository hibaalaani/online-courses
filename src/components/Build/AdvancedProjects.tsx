import React from 'react';
import { useTopics } from '../../context/TopicsContext';

const AdvancedProjects: React.FC = () => {


  const {topics, loading, error} = useTopics();
  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 const advancedTopics = topics.filter(
  (topic) => topic.level ==='advanced' && topic.branch ==='build'
 )


  // const projects = [
  //   {
  //     title: 'Full-Stack Blogging Platform',
  //     description: 'Develop a full-stack blogging platform with user authentication.',
  //   },
  //   {
  //     title: 'Task Manager with React and Node.js',
  //     description: 'Build a task manager with CRUD functionality and a database.',
  //   },
  //   {
  //     title: 'Web Scraping with Python',
  //     description: 'Create a Python-based web scraper to extract useful data from websites.',
  //   },
  //   {
  //     title: 'E-Commerce Platform',
  //     description: 'Develop a fully functional e-commerce site with a payment gateway.',
  //   },
  // ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600">Advanced Projects</h2>
      <ul className="mt-4 space-y-4">
        {advancedTopics.map((project, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
            <p className="text-gray-600">  
            <ol className="list-decimal list-inside">
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

export default AdvancedProjects;
