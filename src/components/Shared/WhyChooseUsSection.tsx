// src/components/Shared/WhyChooseUsSection.tsx
import { useInView } from 'react-intersection-observer';
import React from 'react'; // Added import for React

export const WhyChooseUsSection = () => { // Renamed from VisionSection
  const cards = [
    {
      icon: '🎯',
      title: 'Project-Based & Playful Learning',
      desc: 'We go beyond theory. Students learn by actively building games, animations, websites, and real-world applications, keeping them engaged and excited about coding from day one.'
    },
    {
      icon: '🧑‍🏫',
      title: 'Personalized & Supportive Mentorship',
      desc: 'With small class sizes and highly experienced instructors, we ensure personalized attention. We meet each child where they are, guiding them through challenges with patience and encouragement, fostering true growth.'
    },
    {
      icon: '📈',
      title: 'Real-World Skills & Confidence',
      desc: 'Our curriculum is designed to equip learners with practical, in-demand coding skills. They gain confidence by creating tangible projects they can proudly showcase, preparing them for future success.'
    }
  ];

  return (
    <section id="why-choose-us" className="z-10 text-center p-12 max-w-6xl py-24 mx-auto">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Why Choose Bug to Byte?</h2> {/* Updated title */}
      <p className="text-lg text-gray-300 leading-relaxed mb-12">
        We're committed to making coding accessible and exciting. Here's what sets the Bug to Byte experience apart:
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
          const delay = `${i * 0.3}s`;

          return (
            <div
              key={i}
              ref={ref}
              className={`bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: delay }}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};