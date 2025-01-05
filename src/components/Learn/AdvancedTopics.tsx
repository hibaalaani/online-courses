import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFetchTopics from '../Shared/Custom_fetch';
import { useTopics } from '../../context/TopicsContext';
const AdvancedTopics: React.FC = () => {

  const {topics, loading, error} = useTopics();
  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 const beginnerTopics = topics.filter(
  (topic) => topic.level ==='advanced' && topic.branch ==='learn'
 )





  // const topics = [
  //   {
  //     title: 'Advanced React',
  //     description: 'Learn state management with Redux or Context API.',
  //   },
  //   {
  //     title: 'Backend Basics with Node.js',
  //     description: 'Build RESTful APIs using Express.js and MongoDB.',
  //   },
  //   {
  //     title: 'Authentication & Security',
  //     description: 'Implement authentication using JWT and OAuth.',
  //   },
  //   {
  //     title: 'Performance Optimization',
  //     description: 'Optimize websites with code splitting, lazy loading, and caching.',
  //   },
  //   {
  //     title: 'Full-Stack Project',
  //     description: 'Integrate frontend and backend to build a complete application.',
  //   },
  // ];


  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600">Advanced Topics</h2>
      <ul className="mt-4 space-y-4">
        {beginnerTopics.map((topic, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">{topic.title}</h3>
            <p className="text-gray-600">  
            <ol className="list-decimal list-inside">
            <p className="text-gray-600">{topic.description.split('\n').map((item, index) => (
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

export default AdvancedTopics;
