// src/components/Curriculum/Ages7_10Curriculum.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Data for Ages 7-10 Curriculum
const curriculumData = {
  title: "Ages 7-10: Creative Coders Curriculum",
  subtitle: "Unleash imagination with visual programming and playful coding challenges.",
  description: "This foundational path introduces young learners to the exciting world of coding through engaging, project-based activities using Scratch and other visual tools. They'll build interactive stories, design their own games, and learn problem-solving skills in a fun and supportive environment.",
  learningGoals: [
    "Understand basic sequencing and loops.",
    "Develop logical thinking and debugging skills.",
    "Create interactive stories and animations.",
    "Design simple games with characters and movement.",
    "Foster creativity and computational thinking."
  ],
  topics: [
    { name: "Introduction to Visual Blocks", icon: "🧱" },
    { name: "Sequencing & Algorithms", icon: "➡️" },
    { name: "Loops & Repetition", icon: "🔄" },
    { name: "Events & Interactivity", icon: "👆" },
    { name: "Variables & Scoring", icon: "🔢" },
    { name: "Storytelling with Code", icon: "📖" },
    { name: "Game Design Basics", icon: "🕹️" }
  ],
  projects: [
    { name: "My First Animated Story", image: "/path/to/story-project.jpg" }, // Replace with actual image paths
    { name: "Catch the Star Game", image: "/path/to/game-project.jpg" },
    { name: "Musical Instrument Creator", image: "/path/to/music-project.jpg" }
  ],
  callToAction: "Ready to start the adventure? Sign up for a free trial!"
};

const Ages7_10Curriculum: React.FC = () => {
  return (
    <div className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-900 via-indigo-900 to-black-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-dots-pattern opacity-10" aria-hidden="true"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-400 mb-4">
            {curriculumData.title}
          </h1>
          <p className="text-lg sm:text-xl text-indigo-200 mb-6">
            {curriculumData.subtitle}
          </p>
          <p className="text-md sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {curriculumData.description}
          </p>
        </motion.div>

        {/* Learning Goals */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-300 text-center mb-8">
            What Your Child Will Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumData.learningGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4 border border-gray-700 hover:border-indigo-500 transition-colors"
              >
                <span className="text-2xl text-green-400">✅</span>
                <p className="text-lg text-gray-200">{goal}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Topics */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 text-center mb-8">
            Key Topics Covered
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {curriculumData.topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="bg-indigo-700 bg-opacity-70 text-white py-3 px-6 rounded-full flex items-center space-x-2 shadow-md hover:bg-indigo-600 transition-colors"
              >
                <span className="text-xl">{topic.icon}</span>
                <span className="text-lg font-medium">{topic.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exciting Projects */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 text-center mb-8">
            Exciting Projects You'll Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm">Bring your ideas to life with these engaging projects!</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">{curriculumData.callToAction}</p>
          <button className="px-10 py-5 bg-gradient-to-r from-green-400 to-teal-500 text-white text-xl rounded-full font-bold hover:from-teal-500 hover:to-green-400 transition-all shadow-xl animate-bounce-slow">
            Enroll Now!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Ages7_10Curriculum;