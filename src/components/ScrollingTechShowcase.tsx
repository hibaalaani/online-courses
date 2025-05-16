// 📁 components/ScrollingTechShowcase.tsx
import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const techItems = [
  {
    id: 'python',
    title: 'Kids Learn Python 🐍',
    image: 'close-up-kid.jpg',
    description: 'Through playful projects and mini-games, kids explore Python basics while having fun and boosting logic.'
  },
  {
    id: 'javascript',
    title: 'Kids Build with JavaScript ⚡',
    image: 'children-having-technology-education-class.jpg',
    description: 'JavaScript lets kids animate the web, create interactive apps, and see their code come to life on screen.'
  },
  {
    id: 'scratch',
    title: 'Scratch Coding Adventures 🧩',
    image: 'portrait-little-girl.jpg',
    description: 'Using drag-and-drop coding, children build games and stories with Scratch while learning programming logic.'
  }
];

const ScrollingTechShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        setShowArrows(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl text-white font-bold text-center mb-12">
        Kids Learn to Code — One Language at a Time
      </h2>

      <div className="relative max-w-full overflow-hidden">
        {showArrows && (
          <>
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-slate-100"
            >
              <FaArrowLeft className="text-slate-800" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-slate-100"
            >
              <FaArrowRight className="text-slate-800" />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-2 scrollbar-hide"
        >
          {techItems.map((tech) => (
            <div
              key={tech.id}
              className="snap-center flex-shrink-0 bg-white rounded-2xl shadow-lg p-4 text-center w-[90%] sm:w-[80%] md:w-[360px] max-w-[90vw]"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="w-full h-[200px] object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{tech.title}</h3>
              <p className="text-slate-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingTechShowcase;
