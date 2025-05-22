import React from 'react';

const LearningTrack = () => {
  const levels = [
    {
      level: 'Beginner',
      active: true,
      courses: [
        {
          title: 'Scratch',
          description: 'Visual introduction to programming through fun games.',
          duration: '3 months / 12 sessions',
          image: '/images/scratch.png',
        },
        {
          title: 'CodeCombat',
          description: 'A game-based way to learn Python or JavaScript.',
          duration: '3 months / 12 sessions',
          image: '/images/codecombat.png',
        },
      ],
    },
    {
      level: 'Intermediate',
      active: false,
      courses: [
        {
          title: 'Python Basics',
          description: 'Learn variables, conditions, loops, and more.',
          duration: '3 months / 12 sessions',
          image: '/images/python.png',
        },
        {
          title: 'HTML & CSS',
          description: 'Build and style your own web pages.',
          duration: '3 months / 12 sessions',
          image: '/images/htmlcss.png',
        },
      ],
    },
    {
      level: 'Advanced',
      active: false,
      courses: [
        {
          title: 'JavaScript',
          description: 'Make your websites interactive with JS.',
          duration: '3 months / 12 sessions',
          image: '/images/javascript.png',
        },
        {
          title: 'Project: My First Website',
          description: 'Create and publish your first complete website.',
          duration: '1 month / 4 project sessions',
          image: '/images/project.png',
        },
      ],
    },
  ];

  return (
    <section className="bg-indigo-950 text-white py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-12">Programming Pathway for Kids</h2>

      <div className="flex justify-center gap-4 mb-10">
        {levels.map((track, i) => (
          <button
            key={track.level}
            className={`px-5 py-2 rounded-full border-2 text-sm font-bold transition duration-200 ${
              track.active
                ? 'bg-orange-500 border-orange-500 text-white shadow'
                : 'bg-white text-indigo-950 border-orange-400 hover:bg-orange-100'
            }`}
          >
            {track.level}
          </button>
        ))}
      </div>

      {levels.map((track) => (
        <div key={track.level} className="mb-16">
          <div className="relative">
            <div className="absolute top-24 left-0 w-full h-[2px] bg-orange-300 z-0" />

            <div className="relative z-10 flex justify-center gap-8">
              {track.courses.map((course, idx) => (
                <div
                  key={course.title}
                  className="bg-gradient-to-b from-orange-400 to-orange-600 text-white rounded-xl w-48 p-4 text-center relative shadow-md"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-4 w-4 bg-orange-400 rounded-full border-2 border-white z-10" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-28 object-contain rounded mb-2"
                  />
                  <h4 className="text-md font-bold mb-1">{course.title}</h4>
                  <p className="text-sm mb-1">{course.description}</p>
                  <p className="text-xs text-white/90">{course.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LearningTrack;
