import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFetchTopics from '../Shared/Custom_fetch';
import { useTopics } from '../../context/TopicsContext';

const IntermediateTopics: React.FC = () => {

  const {topics, loading, error} = useTopics();
  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 const beginnerTopics = topics.filter(
  (topic) => topic.level ==='intermediate' && topic.branch ==='learn'
 )



  // const topics = [
  //   {
  //     title: 'Intermediate JavaScript',
  //     description: 'Deep dive into ES6+, promises, and async/await.',
  //   },
  //   {
  //     title: 'Responsive Web Design',
  //     description: 'Learn advanced CSS techniques and media queries.',
  //   },
  //   {
  //     title: 'Introduction to React',
  //     description: 'Build interactive UIs using React components and hooks.',
  //   },
  //   {
  //     title: 'APIs and Fetch',
  //     description: 'Learn to consume RESTful APIs using fetch and axios.',
  //   },
  // ];

  if (!Array.isArray(topics)) {
    return <p>No topics found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-600">Intermediate Topics</h2>
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

export default IntermediateTopics;
