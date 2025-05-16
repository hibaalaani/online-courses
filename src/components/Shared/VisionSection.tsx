import { useInView } from 'react-intersection-observer';

export const VisionSection = () => {
  const cards = [
    {
      icon: '🎨',
      title: 'Unlock Creativity',
      desc: 'Coding is more than syntax — it’s a canvas. We help children and beginners turn imagination into real, working projects.'
    },
    {
      icon: '🛠️',
      title: 'Build Real Skills',
      desc: 'From the first block of code to complete apps and websites, we guide you with real-world skills that build confidence step-by-step.'
    },
    {
      icon: '🌟',
      title: 'Grow with Confidence',
      desc: 'Our mentorship is personal, encouraging, and built for every learner. You\'re not just learning — you\'re growing into a creator.'
    }
  ];

  return (
    <section id="vision" className="z-10 text-center p-12 max-w-6xl py-24 mx-auto">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Our Mission</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-12">
        At Bug to Byte, we believe learning to code should be simple, fun, and inspiring for everyone — from curious kids to ambitious teens and beginner adults.
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
