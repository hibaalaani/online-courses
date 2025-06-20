// src/components/LearningPathsOverview.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
interface PathCardData {
  ageRange: string;
  title: string;
  description: string;
  icon: string; // Emoji or simple icon
  bgColor: string; // Tailwind color classes for card background
  textColor: string; // Tailwind color classes for card title
  buttonColor: string; // Tailwind color classes for button background
  pathId: string; // New: This will be the ID for the detailed page
}

interface LearningPathsOverviewProps {
  pageType: 'curriculum' | 'build'; // To differentiate between "Learn Coding" and "Build Projects"
}

const LearningPathsOverview: React.FC<LearningPathsOverviewProps> = ({ pageType }) => {
  const navigate = useNavigate();

  // Adjusted to use pathId
  const handleViewDetails = (pathType: string, pathId: string) => {
    navigate(`/${pathType}/${pathId}`);
  };

  // Define data for learning paths
  const learnPaths: PathCardData[] = [
    {
      ageRange: '7-9',
      title: 'Ages 7-9: Creative Coders',
      description: 'Start with visual programming (Scratch) and learn core logic through fun animations and games.',
      icon: '🎨',
      bgColor: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-600',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      pathId: 'ages-7-9', // Matches the ID in curriculumData.ts
    },
    {
      ageRange: '10-13',
      title: 'Ages 10-13: Project Builders',
      description: 'Dive into Python, build interactive stories, web apps, and explore basic robotics with real-world projects.',
      icon: '🏗️',
      bgColor: 'from-purple-100 to-purple-200',
      textColor: 'text-purple-600',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      pathId: 'ages-10-13', // Matches the ID in curriculumData.ts
    },
    {
      ageRange: '14-17',
      title: 'Ages 14-17: Future Developers',
      description: 'Master advanced Python, JavaScript, web development (React), and explore data science or AI concepts.',
      icon: '💻',
      bgColor: 'from-green-100 to-green-200',
      textColor: 'text-green-600',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      pathId: 'ages-14-17', // Matches the ID in curriculumData.ts
    },
    {
      ageRange: 'Adults',
      title: 'Adult Beginners: Career Kickstart',
      description: 'Accelerated paths for adults looking to pivot careers or learn a new skill from scratch. Focus on practical, job-ready skills.',
      icon: '💼',
      bgColor: 'from-yellow-100 to-yellow-200',
      textColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
      pathId: 'adult-beginners', // Matches the ID in curriculumData.ts
    },
  ];

  // Define data for build paths (projects) - you'll likely have a separate data file for this too
  // For now, these paths just lead to the same CurriculumDetailPage, but could point to a ProjectDetailPage
  const buildPaths: PathCardData[] = [
    {
      ageRange: '7-9',
      title: 'Fun Game Creations',
      description: 'Build your first animated stories, simple platformers, and interactive art using Scratch.',
      icon: '🎮',
      bgColor: 'from-red-100 to-red-200',
      textColor: 'text-red-600',
      buttonColor: 'bg-red-500 hover:bg-red-600',
      pathId: 'games-7-9', // You might make a 'projectData.ts' similar to curriculumData.ts
    },
    {
      ageRange: '10-13',
      title: 'Web & App Projects',
      description: 'Develop interactive websites, simple mobile apps, and data-driven projects using Python and basic web tech.',
      icon: '📱',
      bgColor: 'from-cyan-100 to-cyan-200',
      textColor: 'text-cyan-600',
      buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
      pathId: 'web-apps-10-13',
    },
    {
      ageRange: '14-17',
      title: 'Advanced Dev Portfolio',
      description: 'Create complex web applications, machine learning models, or contribute to open-source projects for your portfolio.',
      icon: '⭐',
      bgColor: 'from-teal-100 to-teal-200',
      textColor: 'text-teal-600',
      buttonColor: 'bg-teal-500 hover:bg-teal-600',
      pathId: 'portfolio-14-17',
    },
  ];

  const currentPaths = pageType === 'curriculum' ? learnPaths : buildPaths;
  const pageTitle = pageType === 'curriculum' ? 'Explore Our Learning Paths' : 'Dive into Project Building';
  const pageSubtitle = pageType === 'curriculum' ? 'Find the perfect curriculum tailored to your age and goals.' : 'Choose a project category and bring your ideas to life.';
  const buttonText = pageType === 'curriculum' ? 'View Curriculum' : 'View Projects';

  return (
    <>
<Helmet>
  <title>Bug to Byte – Learn to Code</title>
  <meta name="description" content="Interactive programming lessons for kids and adults." />
</Helmet>

    <div className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-8 lg:px-16 bg-dots-pattern">

      <div className="absolute inset-0 z-0 bg-dots-pattern opacity-20" aria-hidden="true"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-200 mb-4 animate-fade-in-down">
          {pageTitle}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-500">
          {pageSubtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPaths.map((path, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            const cardVariants = {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            };

            return (
              <motion.div
                ref={ref}
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`bg-gradient-to-b ${path.bgColor} p-6 rounded-xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-xl group cursor-pointer border border-transparent hover:border-blue-300`}
                onClick={() => handleViewDetails(pageType, path.pathId)} // Updated onClick
              >
                <div className={`text-6xl mb-4 text-center ${path.textColor}`}>{path.icon}</div>
                <h3 className={`text-2xl font-bold ${path.textColor} mb-3 text-center`}>{path.title}</h3>
                <p className="text-gray-700 text-center text-sm mb-6">{path.description}</p>
                <button
                  className={`w-full ${path.buttonColor} text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md group-hover:scale-105 group-hover:shadow-lg`}
                >
                  {buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default LearningPathsOverview;