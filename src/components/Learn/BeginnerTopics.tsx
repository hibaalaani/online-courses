import React from "react";

import useFetchTopics from "../Shared/Custom_fetch";
import { useTopics } from "../../context/TopicsContext";
interface BeginnerTopicsProps {
  onClose: () => void; // Prop for closing the popup
}

const BeginnerTopics: React.FC<BeginnerTopicsProps> = () => {


  const {topics, loading, error} = useTopics();
  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 const beginnerTopics = topics.filter(
  (topic) => topic.level ==='beginner' && topic.branch ==='learn'
 )

  // const topics = [
  //   {
  //     title: 'Programming Basics',
  //     description: 'Learn variables, loops, and basic syntax.',
  //   },
  //   {
  //     title: 'Web Development Basics',
  //     description: 'Understand HTML and CSS for creating webpages.',
  //   },
  //   {
  //     title: 'JavaScript Basics',
  //     description: 'Add interactivity to your websites.',
  //   },
  // ];

  
   return ( <div>
    <h2 className="text-2xl font-bold text-indigo-600"> Beginner Topics</h2>
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
  </div>)
 
 
};

export default BeginnerTopics;
